import express, { Request, Response } from "express";
import { Catalog, ICatalogSchema } from "../models/Catalog";
import { Category, ICategorySchemaProps } from "../models/Category";
import { Gender } from "../models/Gender";
const catalogRouter = express.Router();
catalogRouter.get(
  "/catalog/details/:gender__name/:category__name",

  async (req: Request, res: Response) => {
    try {
      console.log("1: ", req.body);

      const { category__name, gender__name } = req.params;
      const genderId = await Gender.findOne({ name: gender__name }, { _id: 1 });

      const category = await Category.aggregate([
        { $match: { name: category__name } },
        {
          $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "category",
            as: "product_catalog",
          },
        },
        { $unwind: "$product_catalog" },
        {
          $lookup: {
            from: "materials",
            localField: "product_catalog.product_details.material",
            foreignField: "_id",
            as: "materials",
            pipeline: [],
          },
        },
        { $unwind: "$materials" },

        {
          $match: {
            "product_catalog.product_details.gender": genderId?._id,
          },
        },
        { $unwind: "$product_catalog.product_details.colors" },
        { $unwind: "$product_catalog.product_details.size" },

        {
          $group: {
            _id: 0,
            category_name: { $addToSet: { category__name } },
            catalog: { $addToSet: "$product_catalog.name" },
            colors: {
              $addToSet: "$product_catalog.product_details.colors",
            },
            size: { $addToSet: "$product_catalog.product_details.size" },
            brand: { $addToSet: "$product_catalog.product_details.brand" },
            material: { $addToSet: "$materials.name" },
            price: { $addToSet: "$product_catalog.product_details.price" },
          },
        },
        {
          $project: {
            _id: 0,
            details: [
              { name: "clothes", catalog: "$catalog" },
              { name: "size", catalog: "$size" },
              { name: "material", catalog: "$material" },
              { name: "brand", catalog: "$brand" },
            ],
            color: "$colors",
            price: "$price",
          },
        },
      ]);
      if (category.length === 0) {
        res.status(404).json({
          status: "error",
          message: "Совпадений нет по выбранному товару",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        data: category,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
);

catalogRouter.get(
  "/catalog/:category__name",
  async (req: Request, res: Response) => {
    try {
      const { category__name } = req.params;

      const genderId = await Gender.findOne(
        { name: category__name },
        { _id: 1 }
      );

      // const catalog: ICatalogSchema[] = await Catalog.aggregate([
      //   { $match: { gender: { $in: [genderId?._id] } } },
      // ]);
      const category = await Category.aggregate([
        { $match: {} },
        {
          $lookup: {
            from: "catalogs",
            localField: "_id",
            foreignField: "category",
            as: "catalog",
          },
        },
        { $match: { "catalog.gender": { $in: [genderId?._id] } } },
        {
          $project: {
            name: 1,
            catalog: 1,
          },
        },
      ]);

      if (category.length === 0) {
        res.status(404).json({
          status: "error",
          message: "НЕ удалось найти каталоги и категории",
        });
        return;
      } else {
        res.status(200).json({
          status: "success",
          data: category,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "success",
        message: error,
      });
    }
  }
);

catalogRouter.get("/catalog/:id", async (req: Request, res: Response) => {
  try {
    const productId = req.params;
    const getCatalogFindOne = await Catalog.findById({ _id: productId });
    if (!getCatalogFindOne) {
      res.status(404).json({
        status: "error",
        message: "Каталог не найден",
      });
      return;
    }
    res.status(200).json({
      status: "success",
      data: getCatalogFindOne,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

catalogRouter.get(
  "/catalog",

  async (req: Request, res: Response) => {
    try {
      const catalog = await Catalog.find({});

      if (catalog.length === 0) {
        res.status(404).json({
          status: "error",
          message: "Не удалось найти каталоги",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        message: catalog,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
);
catalogRouter.get(
  "/catalog/details/:catalogs_name",

  async (req: Request, res: Response) => {
    try {
      console.log("2:", req.body);

      const catalogs__name = req.params;
      const catalog = await Catalog.findOne(
        { name: catalogs__name },
        { _id: 1 }
      );
      if (!catalog) {
        res.status(404).json({
          status: "error",
          message: "Не удалось найти каталоги",
        });
        return;
      }
      res.status(200).json({
        status: "success",
        message: catalog,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error,
      });
    }
  }
);

catalogRouter.post("/catalog/create", async (req: Request, res: Response) => {
  try {
    const catalog = req.body.catalog as string;
    const category = req.body.category as string;
    const gender: ICatalogSchema["gender"] = req.body.gender;
    const catalogStr = catalog.trim().toLowerCase();
    const categoryStr = category.trim().toLowerCase();

    if (catalogStr !== "" && categoryStr !== "" && gender.length > 0) {
      const matchFindname = await Catalog.findOne({
        name: encodeURI(catalogStr).toLowerCase(),
      });
      const categoryId: ICategorySchemaProps | null = await Category.findOne({
        name: categoryStr.toLowerCase(),
      });
      const genderId: ICatalogSchema["gender"] = await Gender.find(
        {
          name: { $in: [...gender] },
        },
        { _id: 1 }
      );

      if (!matchFindname) {
        const newCatalog = await new Catalog({
          name: catalogStr,
          category: categoryId?._id,
        });
        newCatalog.gender.push(...genderId);
        newCatalog.save();
        res.status(201).json({
          status: "success",
          data: newCatalog,
        });
        return;
      } else {
        res.status(400).json({
          status: "error",
          message: "Каталог уже существует",
        });
        return;
      }
    }
    res.status(400).json({
      status: "success",
      message: "Где названия каталога",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});
catalogRouter.delete("/catalog/:id", async (req: Request, res: Response) => {
  try {
    const { id: _id } = req.params;
    const catalogDel = await Catalog.findByIdAndDelete(_id);
    if (!catalogDel) return;
    res.status(200).json({
      status: "success",
      data: catalogDel,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error,
    });
  }
});

export default catalogRouter;
