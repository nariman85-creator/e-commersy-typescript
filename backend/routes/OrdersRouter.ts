import mongoose from "mongoose";
import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { Address } from "../models/Address";
import { Order } from "../models/Order";
import { PaymentMethod } from "../models/Payment";
interface IUserOrderProps {
  user: {
    _id: "637b612e79697a50a1a0575f";
    firstname: "Nariman Mammedow";
    lastname: "";
    email: "narik@mal.ruu";
    password: "$2a$10$eYgwuZj9GrRXo6ufNPcWFePM4Aqdje7qBz.uDeeOpnlGXIxzMaoH2";
    age: 0;
    role: "user";
  };
}
export interface IOrderProps {
  userInfo: {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
    address: {
      city: string;
      state: string;
      country: string;
      street: string;
      zipCode: string;
    };
  };
  shippingMethod: string;
  payment: {
    paymantMethod: string;
  };
}

const orderRouter = Router();
orderRouter.post("/orders?", async (req: Request, res: Response) => {
  try {
    const token = req.headers["token"] as string;
    const userTokenDecode = jwt.verify(
      token,
      process.env.SECRET_KEY || "Nariman"
    ) as IUserOrderProps;
    const findUser = await User.findById({ _id: userTokenDecode.user._id });

    if (!findUser) {
      res.status(404).json({
        status: "error",
        message: "User Not Found",
      });
      return;
    }

    if (mongoose.isValidObjectId(userTokenDecode.user._id)) {
      const userOrderFind = await Order.aggregate([
        {
          $match: {
            userID: new mongoose.Types.ObjectId(userTokenDecode.user._id),
          },
        },
        // {
        //   $facet: {
        //     categorizedByTags: [
        //       {
        //         $group: {
        //           _id: "$_id",
        //           price_now: { $last: "$createdAt" },
        //         },
        //       },
        //     ],
        //   },
        // },

        {
          $lookup: {
            from: "products",
            foreignField: "_id",
            localField: "orderItems",
            as: "productObjects",
          },
        },
        { $unwind: "$productObjects" },
        {
          $lookup: {
            from: "uploads",
            foreignField: "_id",
            localField: "productObjects.product_details.imageUrl",
            as: "images",
          },
        },
        { $unwind: "$images" },

        {
          $group: {
            _id: { orderId: "$_id" },
            createdAt: { $max: "$createdAt" },
            isDelivered: { $max: "$isDelivered" },
            totalPrice: { $sum: "$productObjects.product_details.price" },

            products: {
              $addToSet: {
                _id: "$productObjects._id",
                name: "$productObjects.name",
                price: "$productObjects.product_details.price",
                color: "$productObjects.product_details.colors",
                size: "$productObjects.product_details.size",
                image: "$images.filepath",
              },
            },
          },
        },
      ]);

      if (userOrderFind.length <= 0) {
        res.status(404).json({
          status: "error",
          message: "Product Not Found",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: userOrderFind,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});


orderRouter.get("/orders?", async (req: Request, res: Response) => {
  try {
    const { userInfo, payment, shippingMethod, productItems } = req.query;

    const { userId, address } = JSON.parse(
      userInfo as string
    ) as IOrderProps["userInfo"];
    let productsId: string[] = JSON.parse(productItems as string);

    if (userId !== "" && mongoose.isValidObjectId(userId)) {
      const customer = await User.findById(userId);
      const emptyUser = await Address.findOne({ _id: userId });

      if (!emptyUser) {
        const userAddress = await new Address({
          user_id: customer?._id,
          ...address,
        });
        await userAddress.save();

        const orderSave = await new Order({
          userID: customer?._id,
          shipping: JSON.parse(shippingMethod as string),
          isDelivered: false,
          orderItems: productsId,
          address: userAddress._id,
          returnProduct: false,
        });

        await orderSave.save();

        if (payment !== null && payment) {
          const pay = await new PaymentMethod({
            paymantMethod: JSON.parse(payment as string),
            paymentResult: {
              orderId: orderSave._id,
              userId: customer?._id,
            },
            paidAt: new Date().getFullYear(),
          });
          await pay.save();
          const updateOrder = await Order.updateOne(
            { _id: orderSave._id },
            { payment: pay._id }
          );
          res.status(201).json({
            status: "success",
          });
          return;
        }
      } else {
        const orderSave = await new Order({
          user: customer?._id,
          payment: payment,
          shipping: shippingMethod,
          isDelivered: false,
          orderItems: productsId,
        });
        await orderSave.save();
        if (payment !== null && payment) {
          const pay = await new PaymentMethod({
            paymantMethod: payment,
            paymentResult: {
              orderId: orderSave._id,
              userId: customer?._id,
            },
            paidAt: new Date().getFullYear(),
          });
          await pay.save();
        }
        res.status(201).json({
          status: "success",
          data: orderSave,
        });
        return;
      }
    }
    res.status(404).json({
      status: "success",
      message: "Что-то пошло не так",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

export { orderRouter };
