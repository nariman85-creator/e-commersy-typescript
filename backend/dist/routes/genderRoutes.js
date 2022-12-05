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
const Gender_1 = require("../models/Gender");
const genderRouter = express_1.default.Router();
genderRouter.post("/gender/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gender_item } = req.body;
        if (!gender_item) {
            res.status(400).json({
                status: "error",
                message: "Нет гендерных имен",
            });
            return;
        }
        const gender = yield Gender_1.Gender.findOne({ name: gender_item });
        if (gender) {
            res.status(400).json({
                status: "error",
                message: "Уже есть гендер сохранить гендер",
            });
            return;
        }
        const newGender = yield Gender_1.Gender.create({ name: gender_item });
        if (!newGender) {
            res.status(400).json({
                status: "error",
                message: "Не удалось сохранить гендер",
            });
            return;
        }
        res.status(201).json({
            status: "success",
            message: newGender,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
genderRouter.get("/gender/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const genderList = yield Gender_1.Gender.find({});
        console.log(genderList);
        if (!genderList) {
            res.status(400).json({
                status: "error",
                message: "Не удалось получить  гендер",
            });
            return;
        }
        res.status(200).json({
            status: "error",
            message: genderList,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
genderRouter.get("/gender/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(req.params);
        if (!id) {
            res.status(400).json({
                status: "error",
                message: "Нет идентификатор гендерных имен",
            });
            return;
        }
        const newGender = yield Gender_1.Gender.findById({ _id: id });
        if (!newGender) {
            res.status(400).json({
                status: "error",
                message: "Не удалось получить  гендер",
            });
            return;
        }
        res.status(200).json({
            status: "error",
            message: newGender,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
genderRouter.delete("/gender/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { gender_id } = req.params;
        if (!gender_id) {
            res.status(400).json({
                status: "error",
                message: "Нет идентификатор гендерных имен",
            });
            return;
        }
        const newGender = yield Gender_1.Gender.findByIdAndDelete({ _id: gender_id });
        if (!newGender) {
            res.status(400).json({
                status: "error",
                message: "Не удалось удалить  гендер",
            });
            return;
        }
        res.status(200).json({
            status: "error",
            message: newGender,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
exports.default = genderRouter;
