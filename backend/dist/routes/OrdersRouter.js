"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const Address_1 = require("../models/Address");
const Order_1 = require("../models/Order");
const Payment_1 = require("../models/Payment");
const orderRouter = (0, express_1.Router)();
exports.orderRouter = orderRouter;
orderRouter.post("/orders?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["token"];
        const userTokenDecode = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "Nariman");
        const findUser = yield User_1.User.findById({ _id: userTokenDecode.user._id });
        if (!findUser) {
            res.status(404).json({
                status: "error",
                message: "User Not Found",
            });
            return;
        }
        if (mongoose_1.default.isValidObjectId(userTokenDecode.user._id)) {
            const userOrderFind = yield Order_1.Order.aggregate([
                {
                    $match: {
                        userID: new mongoose_1.default.Types.ObjectId(userTokenDecode.user._id),
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
orderRouter.get("/orders?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userInfo, payment, shippingMethod, productItems } = req.query;
        const { userId, address } = JSON.parse(userInfo);
        let productsId = JSON.parse(productItems);
        if (userId !== "" && mongoose_1.default.isValidObjectId(userId)) {
            const customer = yield User_1.User.findById(userId);
            const emptyUser = yield Address_1.Address.findOne({ _id: userId });
            if (!emptyUser) {
                const userAddress = yield new Address_1.Address(Object.assign({ user_id: customer === null || customer === void 0 ? void 0 : customer._id }, address));
                yield userAddress.save();
                const orderSave = yield new Order_1.Order({
                    userID: customer === null || customer === void 0 ? void 0 : customer._id,
                    shipping: JSON.parse(shippingMethod),
                    isDelivered: false,
                    orderItems: productsId,
                    address: userAddress._id,
                    returnProduct: false,
                });
                yield orderSave.save();
                if (payment !== null && payment) {
                    const pay = yield new Payment_1.PaymentMethod({
                        paymantMethod: JSON.parse(payment),
                        paymentResult: {
                            orderId: orderSave._id,
                            userId: customer === null || customer === void 0 ? void 0 : customer._id,
                        },
                        paidAt: new Date().getFullYear(),
                    });
                    yield pay.save();
                    const updateOrder = yield Order_1.Order.updateOne({ _id: orderSave._id }, { payment: pay._id });
                    res.status(201).json({
                        status: "success",
                    });
                    return;
                }
            }
            else {
                const orderSave = yield new Order_1.Order({
                    user: customer === null || customer === void 0 ? void 0 : customer._id,
                    payment: payment,
                    shipping: shippingMethod,
                    isDelivered: false,
                    orderItems: productsId,
                });
                yield orderSave.save();
                if (payment !== null && payment) {
                    const pay = yield new Payment_1.PaymentMethod({
                        paymantMethod: payment,
                        paymentResult: {
                            orderId: orderSave._id,
                            userId: customer === null || customer === void 0 ? void 0 : customer._id,
                        },
                        paidAt: new Date().getFullYear(),
                    });
                    yield pay.save();
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
