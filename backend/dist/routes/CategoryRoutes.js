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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Category_1 = require("../models/Category");
const router = express_1.default.Router();
exports.router = router;
router.post("/category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.body.category;
        const lowerCategory = category.trim().toLowerCase();
        if (lowerCategory === "") {
            res.status(401).json({
                status: "error",
                message: "Category name not.....",
            });
            return;
        }
        const isCategory = yield Category_1.Category.findOne({ name: lowerCategory });
        if (isCategory) {
            res.json({
                status: "error",
                data: isCategory,
            });
            return;
        }
        const newCategory = yield new Category_1.Category({ name: category });
        yield newCategory.save();
        res.json({
            status: "success",
            data: newCategory,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
router.delete("/category/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        if (!_id) {
            res.status(404).json({
                status: "error",
                message: "Категория не найдена",
            });
        }
        if (mongoose_1.default.Types.ObjectId.isValid(_id)) {
            const categoryDel = yield Category_1.Category.findOneAndDelete({ _id });
            res.status(200).json({
                status: "success",
                data: categoryDel,
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error
        });
    }
}));
router.get("/category/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRes = yield Category_1.Category.find({});
        if (categoryRes.length === 0) {
            res.status(404).json({
                status: "error",
                message: "Категории не найдены",
            });
            return;
        }
        res.status(200).json({
            status: "success",
            data: categoryRes,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Internal Error",
            message: "Что-то пошло не так",
        });
    }
}));
