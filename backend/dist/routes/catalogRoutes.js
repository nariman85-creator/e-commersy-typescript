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
const express_1 = __importDefault(require("express"));
const Catalog_1 = require("../models/Catalog");
const Category_1 = require("../models/Category");
const Gender_1 = require("../models/Gender");
const catalogRouter = express_1.default.Router();
catalogRouter.get("/catalog/details/:gender__name/:category__name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("1: ", req.body);
        const { category__name, gender__name } = req.params;
        const genderId = yield Gender_1.Gender.findOne({ name: gender__name }, { _id: 1 });
        const category = yield Category_1.Category.aggregate([
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
                    "product_catalog.product_details.gender": genderId === null || genderId === void 0 ? void 0 : genderId._id,
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
catalogRouter.get("/catalog/:category__name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category__name } = req.params;
        const genderId = yield Gender_1.Gender.findOne({ name: category__name }, { _id: 1 });
        // const catalog: ICatalogSchema[] = await Catalog.aggregate([
        //   { $match: { gender: { $in: [genderId?._id] } } },
        // ]);
        const category = yield Category_1.Category.aggregate([
            { $match: {} },
            {
                $lookup: {
                    from: "catalogs",
                    localField: "_id",
                    foreignField: "category",
                    as: "catalog",
                },
            },
            { $match: { "catalog.gender": { $in: [genderId === null || genderId === void 0 ? void 0 : genderId._id] } } },
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
        }
        else {
            res.status(200).json({
                status: "success",
                data: category,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: "success",
            message: error,
        });
    }
}));
catalogRouter.get("/catalog/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params;
        const getCatalogFindOne = yield Catalog_1.Catalog.findById({ _id: productId });
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
catalogRouter.get("/catalog", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const catalog = yield Catalog_1.Catalog.find({});
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
catalogRouter.get("/catalog/details/:catalogs_name", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("2:", req.body);
        const catalogs__name = req.params;
        const catalog = yield Catalog_1.Catalog.findOne({ name: catalogs__name }, { _id: 1 });
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
catalogRouter.post("/catalog/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const catalog = req.body.catalog;
        const category = req.body.category;
        const gender = req.body.gender;
        const catalogStr = catalog.trim().toLowerCase();
        const categoryStr = category.trim().toLowerCase();
        if (catalogStr !== "" && categoryStr !== "" && gender.length > 0) {
            const matchFindname = yield Catalog_1.Catalog.findOne({
                name: encodeURI(catalogStr).toLowerCase(),
            });
            const categoryId = yield Category_1.Category.findOne({
                name: categoryStr.toLowerCase(),
            });
            const genderId = yield Gender_1.Gender.find({
                name: { $in: [...gender] },
            }, { _id: 1 });
            if (!matchFindname) {
                const newCatalog = yield new Catalog_1.Catalog({
                    name: catalogStr,
                    category: categoryId === null || categoryId === void 0 ? void 0 : categoryId._id,
                });
                newCatalog.gender.push(...genderId);
                newCatalog.save();
                res.status(201).json({
                    status: "success",
                    data: newCatalog,
                });
                return;
            }
            else {
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
catalogRouter.delete("/catalog/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        const catalogDel = yield Catalog_1.Catalog.findByIdAndDelete(_id);
        if (!catalogDel)
            return;
        res.status(200).json({
            status: "success",
            data: catalogDel,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
exports.default = catalogRouter;
