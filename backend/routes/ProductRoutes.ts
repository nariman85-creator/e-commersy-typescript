import express, { Request, Response } from "express";
import mongoose from "mongoose";
import path from "path";
import { Catalog } from "../models/Catalog";
import { Category } from "../models/Category";
import { Gender } from "../models/Gender";
import { Material } from "../models/Materials";
import { Product, IProduct } from "../models/Product";
import { Upload } from "../models/UploadModel";
import { IUserProps, User } from "../models/User";
import { IProductItems } from "../types/productTypes";
import { upload } from "../utils/multer";
import jwt from "jsonwebtoken";

interface QueryParams {
  colors?: string;
  brands?: string;
  material?: string;
  clothes?: string;
  size?: string;
  minprice?: string;
  maxprice?: string;
}

const productRoutes = express.Router();
productRoutes.get(
  "/:gender__name/:catalog__name/list?",
  async (req: Request, res: Response) => {
    try {
      const { gender__name, catalog__name } = req.params;

      const genderId = await Gender.findOne({ name: gender__name }, { _id: 1 });
      const categoryId = await Category.findOne(
        { name: catalog__name },
        { _id: 1 }
      );

      const query: QueryParams = req.query;

      if (Object.keys(query).length === 0) {
        const productList: {
          result: IProduct[];
          images: { filepath: string };

          count: number;
        }[] = await Product.aggregate([
          {
            $match: {
              category: categoryId?._id,
            },
          },
          { $match: { "product_details.gender": genderId?._id } },
          {
            $lookup: {
              from: "uploads",
              foreignField: "_id",
              localField: "product_details.imageUrl",
              as: "images",
            },
          },
          {
            $lookup: {
              from: "materials",
              foreignField: "_id",
              localField: "product_details.material",
              as: "materials",
            },
          },

          { $unwind: "$images" },
          { $unwind: "$materials" },
          {
            $group: {
              _id: { productId: categoryId },

              catalog: {
                $addToSet: {
                  _id: "$_id",
                  name: "$name",
                  product_details: {
                    price: "$product_details.price",
                    size: "$product_details.size",
                    colors: "$product_details.colors",
                    currency: "$product_details.currency",
                    gender: gender__name,
                    quantity: "$product_details.quantity",
                    imageUrl: "$images.filepath",
                    title: "$product_details.title",
                    description: "$product_details.description",
                    rating: "$product_details.rating",
                    brand: "$product_details.brand",
                    material: "$materials.name",
                  },
                },
              },
            },
          },
          {
            $project: {
              _id: 1,
              result: "$catalog",
              count: { $size: "$catalog" },
            },
          },
        ]);

        res.status(200).json({
          status: "success",
          result: [...productList[0].result],
          count: productList[0].count,
        });

        return;
      }
      const reqQuery = (query: QueryParams) => {
        switch (Object.keys(query)[0]) {
          case "colors":
            return {
              "product_details.colors": {
                $in: [
                  query.colors?.includes("^")
                    ? encodeURI(query.colors.replace("^", "&"))
                    : encodeURI(query.colors || ""),
                ],
              },
            };
          case "brands":
            return {
              "product_details.brands": query.brands?.includes("^")
                ? encodeURI(query.brands.replace("^", "&"))
                : encodeURI(query.brands || ""),
            };
          case "material":
            return {
              "product_details.material": query.material?.includes("^")
                ? encodeURI(query.material.replace("^", "&"))
                : encodeURI(query.material || ""),
            };

          case "size":
            return {
              "product_details.size": {
                $in: [
                  query.size?.includes("^")
                    ? encodeURI(query.size.replace("^", "&"))
                    : encodeURI(query.size || ""),
                ],
              },
            };
          case "minprice":
            const minprice = query.minprice ? query.minprice : "0";

            return {
              "product_details.price": {
                $lte: parseInt(minprice),
              },
            };
          case "maxprice":
            const maxprice = query.maxprice ? query.maxprice : "0";

            return {
              "product_details.price": {
                $gte: parseInt(maxprice),
              },
            };

          case "clothes":
            return {
              name: query.clothes?.includes("^")
                ? encodeURI(query.clothes.replace("^", "&"))
                : encodeURI(query.clothes || ""),
            };

          default:
            return {};
        }
      };

      const productList: {
        result: IProduct[];
        count: number;
        imageUrl: string;
      }[] = await Product.aggregate([
        {
          $match: {
            category: categoryId?._id,
          },
        },

        { $match: { "product_details.gender": genderId?._id } },
        { $match: reqQuery(query) },
        {
          $group: {
            _id: { productId: categoryId },

            catalog: {
              $addToSet: {
                _id: "$_id",
                product_details: "$product_details",
                manufact_details: "$manufact_details",
                name: "$name",
              },
            },
          },
        },
        {
          $project: {
            result: "$catalog",
            count: { $size: "$catalog" },
          },
        },
      ]);

      if (productList.length <= 0) {
        res.status(404).json({
          status: "error",
          message: "Product not found",
        });
        return;
      }

      res.status(200).json({
        status: "success",
        result: [...productList[0].result],
        count: productList[0].count,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
);

productRoutes.get("/single-product", async (req: Request, res: Response) => {
  try {
    const { product_id } = req.query;

    if (!product_id) {
      res.status(400).json({
        status: "error",
        message: "Search not found",
      });
      return;
    }
    const id = new mongoose.Types.ObjectId(product_id as string);
    const product: IProduct[] = await Product.aggregate([
      { $match: { _id: id } },
      {
        $lookup: {
          from: "uploads",
          foreignField: "_id",
          localField: "product_details.imageUrl",
          as: "imageUrl",
        },
      },
      {
        $lookup: {
          from: "ratings",
          foreignField: "_id",
          localField: "product_details.rating",
          as: "rating",
        },
      },
      {
        $project: {
          _id: "$_id",
          name: "$name",
          manufact_details: "$manufact_details",
          product_details: {
            price: "$product_details.price",
            size: "$product_details.size",
            colors: "$product_details.colors",
            currency: "$product_details.currency",
            quantity: "$product_details.quantity",
            brand: "$product_details.brand",
            sale: "$product_details.sale",

            imageUrl: "$imageUrl.filepath",
            title: "$product_details.title",
            description: "$product_details.description",
            rating: "$rating",
            createdAt: "$product_details.createdAt",
          },
        },
      },
    ]);

    if (product.length <= 0) {
      res.status(404).json({
        status: "error",
        message: "Product not found",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      data: product[0],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

productRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const allProduct = await Product.find({});

    if (allProduct.length <= 0) {
      res.status(404).json({
        status: "success",
        message: "Продукты не найдены",
      });
    }
    if (allProduct.length > 0) {
      res.status(200).json({
        status: "success",
        data: allProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

productRoutes.post(
  "/upload",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      const file = req.file;

      if (!file && file === undefined) {
        res.status(400).json({
          status: "error",
          message: "У продукта дорлжна быть картинка",
        });
        return;
      }
      const uploadImage = await Upload.create({
        filename: file?.filename,
        filepath: path.resolve(file?.path || ""),
        filesize: file?.size,
      });

      res.status(201).json({
        status: "success",
        data: uploadImage,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
);
productRoutes.post(
  "/create",
  upload.single("image"),
  async (req: Request, res: Response) => {
    try {
      const product: IProduct | null = req.body;

      if (product === null) {
        res.status(400).json({
          status: "error",
          message: "Нет данных для создания  продукта",
        });
        return;
      }
      const material = product.product_details.material as string;
      const category = await Category.findOne({ name: product?.category });
      const genderId = await Gender.findOne(
        {
          name: product.product_details.gender,
        },
        { _id: 1 }
      );

      if (category && material) {
        const materialFind = await Material.findOne({
          name: material.toLowerCase(),
        });
        if (!materialFind) {
          res.status(404).json({
            status: "error",
            message: "material not found",
          });
          return;
        }
        const newProduct = await new Product({
          name: encodeURI(product?.name.toLowerCase()),
          manufact_details: {
            desc: product.manufact_details.desc,
            feature: product.manufact_details.feature,
            property: product.manufact_details.property,
          },

          category: category._id,
          product_details: {
            price: product.product_details.price,
            size: product.product_details.size,
            colors: product.product_details.colors,
            currency: product.product_details.currency,
            gender: genderId?._id,
            quantity: product.product_details.quantity,
            title: product.product_details.title,
            description: product.product_details.description,
            brand: encodeURI(product.product_details.brand),
            imageUrl: product.product_details.imageUrl,
            material: materialFind?._id,
          },
        });
        const currentProduct = await newProduct.save();

        if (currentProduct) {
          // await Upload.findOneAndUpdate(
          //   { _id: currentProduct.product_details.imageUrl },
          //   {
          //     category_id: currentProduct.category,
          //     product_id: currentProduct._id,
          //   }
          // );
          res.status(201).json({
            status: "success",
            data: currentProduct,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
);
productRoutes.post("/card", async (req: Request, res: Response) => {
  try {
    const token = req.headers["token"] as string;
    const items: string[] = req.body.search_products;

    if (token) {
      const { user } = jwt.verify(
        token,
        process.env.SECRET_KEY || "nariman"
      ) as {
        user: IUserProps & { _id: string };
      };

      if (mongoose.isValidObjectId(user._id)) {
        const verifyUser = await User.findOne({ _id: user._id });
        if (items.length > 0) {
          const products = await Product.find({ _id: { $in: items } });

          res.status(200).json({
            status: "success",
            result: products,
            count: products.length,
          });
          return;
        }
      }
    }

    res.status(404).json({
      status: "error",
      message: "Product Not Found",
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      message: error,
    });
  }
});

productRoutes.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;

    if (_id) {
      const productDel = await Product.findOneAndDelete({ _id });
      res.status(200).json({
        status: "success",
        message: "Продукт удален",
      });
      return;
    }
    res.status(404).json({
      status: "error",
      message: "Продукт не найден",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
productRoutes.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;
    const updateData = req.body;
    if (!_id && !updateData) return;

    const targetObj = await Product.findByIdAndUpdate(_id, { ...updateData });
    if (!targetObj) {
      res.status(404).json({
        status: "error",
        message: "Не нашли документ",
      });
      return;
    }
    res.status(201).json({
      status: "success",
      data: targetObj,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

export default productRoutes;
