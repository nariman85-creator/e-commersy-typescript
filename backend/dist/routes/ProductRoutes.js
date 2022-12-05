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
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const Category_1 = require("../models/Category");
const Gender_1 = require("../models/Gender");
const Materials_1 = require("../models/Materials");
const Product_1 = require("../models/Product");
const UploadModel_1 = require("../models/UploadModel");
const User_1 = require("../models/User");
const multer_1 = require("../utils/multer");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const productRoutes = express_1.default.Router();
productRoutes.get("/:gender__name/:catalog__name/list?", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gender__name, catalog__name } = req.params;
        const genderId = yield Gender_1.Gender.findOne({ name: gender__name }, { _id: 1 });
        const categoryId = yield Category_1.Category.findOne({ name: catalog__name }, { _id: 1 });
        const query = req.query;
        if (Object.keys(query).length === 0) {
            const productList = yield Product_1.Product.aggregate([
                {
                    $match: {
                        category: categoryId === null || categoryId === void 0 ? void 0 : categoryId._id,
                    },
                },
                { $match: { "product_details.gender": genderId === null || genderId === void 0 ? void 0 : genderId._id } },
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
        const reqQuery = (query) => {
            var _a, _b, _c, _d, _e;
            switch (Object.keys(query)[0]) {
                case "colors":
                    return {
                        "product_details.colors": {
                            $in: [
                                ((_a = query.colors) === null || _a === void 0 ? void 0 : _a.includes("^"))
                                    ? encodeURI(query.colors.replace("^", "&"))
                                    : encodeURI(query.colors || ""),
                            ],
                        },
                    };
                case "brands":
                    return {
                        "product_details.brands": ((_b = query.brands) === null || _b === void 0 ? void 0 : _b.includes("^"))
                            ? encodeURI(query.brands.replace("^", "&"))
                            : encodeURI(query.brands || ""),
                    };
                case "material":
                    return {
                        "product_details.material": ((_c = query.material) === null || _c === void 0 ? void 0 : _c.includes("^"))
                            ? encodeURI(query.material.replace("^", "&"))
                            : encodeURI(query.material || ""),
                    };
                case "size":
                    return {
                        "product_details.size": {
                            $in: [
                                ((_d = query.size) === null || _d === void 0 ? void 0 : _d.includes("^"))
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
                        name: ((_e = query.clothes) === null || _e === void 0 ? void 0 : _e.includes("^"))
                            ? encodeURI(query.clothes.replace("^", "&"))
                            : encodeURI(query.clothes || ""),
                    };
                default:
                    return {};
            }
        };
        const productList = yield Product_1.Product.aggregate([
            {
                $match: {
                    category: categoryId === null || categoryId === void 0 ? void 0 : categoryId._id,
                },
            },
            { $match: { "product_details.gender": genderId === null || genderId === void 0 ? void 0 : genderId._id } },
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
productRoutes.get("/single-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_id } = req.query;
        if (!product_id) {
            res.status(400).json({
                status: "error",
                message: "Search not found",
            });
            return;
        }
        const id = new mongoose_1.default.Types.ObjectId(product_id);
        const product = yield Product_1.Product.aggregate([
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
productRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProduct = yield Product_1.Product.find({});
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
productRoutes.post("/upload", multer_1.upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = req.file;
        if (!file && file === undefined) {
            res.status(400).json({
                status: "error",
                message: "У продукта дорлжна быть картинка",
            });
            return;
        }
        const uploadImage = yield UploadModel_1.Upload.create({
            filename: file === null || file === void 0 ? void 0 : file.filename,
            filepath: path_1.default.resolve((file === null || file === void 0 ? void 0 : file.path) || ""),
            filesize: file === null || file === void 0 ? void 0 : file.size,
        });
        res.status(201).json({
            status: "success",
            data: uploadImage,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
productRoutes.post("/create", multer_1.upload.single("image"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        if (product === null) {
            res.status(400).json({
                status: "error",
                message: "Нет данных для создания  продукта",
            });
            return;
        }
        const material = product.product_details.material;
        const category = yield Category_1.Category.findOne({ name: product === null || product === void 0 ? void 0 : product.category });
        const genderId = yield Gender_1.Gender.findOne({
            name: product.product_details.gender,
        }, { _id: 1 });
        if (category && material) {
            const materialFind = yield Materials_1.Material.findOne({
                name: material.toLowerCase(),
            });
            if (!materialFind) {
                res.status(404).json({
                    status: "error",
                    message: "material not found",
                });
                return;
            }
            const newProduct = yield new Product_1.Product({
                name: encodeURI(product === null || product === void 0 ? void 0 : product.name.toLowerCase()),
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
                    gender: genderId === null || genderId === void 0 ? void 0 : genderId._id,
                    quantity: product.product_details.quantity,
                    title: product.product_details.title,
                    description: product.product_details.description,
                    brand: encodeURI(product.product_details.brand),
                    imageUrl: product.product_details.imageUrl,
                    material: materialFind === null || materialFind === void 0 ? void 0 : materialFind._id,
                },
            });
            const currentProduct = yield newProduct.save();
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
productRoutes.post("/card", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers["token"];
        const items = req.body.search_products;
        if (token) {
            const { user } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "nariman");
            if (mongoose_1.default.isValidObjectId(user._id)) {
                const verifyUser = yield User_1.User.findOne({ _id: user._id });
                if (items.length > 0) {
                    const products = yield Product_1.Product.find({ _id: { $in: items } });
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
    }
    catch (error) {
        res.status(500).json({
            status: "Server Error",
            message: error,
        });
    }
}));
productRoutes.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        if (_id) {
            const productDel = yield Product_1.Product.findOneAndDelete({ _id });
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
productRoutes.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        const updateData = req.body;
        if (!_id && !updateData)
            return;
        const targetObj = yield Product_1.Product.findByIdAndUpdate(_id, Object.assign({}, updateData));
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
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
exports.default = productRoutes;
