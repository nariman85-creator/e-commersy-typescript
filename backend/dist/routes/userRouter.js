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
const User_1 = require("../models/User");
const helper_1 = require("../utils/helper");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userRouter = express_1.default.Router();
userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.User.find({});
        if (!users) {
            res.status(404).json({
                status: "error",
                message: "Пользователи не найдены",
            });
            return;
        }
        res.status(200).json({
            status: "success",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
        return;
    }
}));
userRouter.post("/auth/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body.data;
        const matchUser = yield User_1.User.findOne({
            email,
        });
        if (!matchUser) {
            res.status(400).json({
                status: "error",
                message: "Не правильный эмайл",
            });
            return;
        }
        if (!bcryptjs_1.default.compareSync(password, matchUser.password)) {
            res.status(400).json({
                status: "error",
                message: "Пароль не верен",
            });
            return;
        }
        res.status(200).json({
            status: "success",
            data: matchUser,
            token: (0, helper_1.createToken)(matchUser),
        });
        return;
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
        return;
    }
}));
userRouter.post("/auth/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = req.body;
        const user = Object.assign({}, data);
        if (!user) {
            res.status(400).json({
                status: "error",
                message: "Нет данных для сохранения",
            });
            return;
        }
        const findUser = yield User_1.User.find({
            email: user.email,
        });
        if (findUser.length > 0) {
            res.status(400).json({
                status: "error",
                message: "Уже есть такой эмаил и пароль",
            });
            return;
        }
        if (findUser.length === 0) {
            const candidate = yield new User_1.User(Object.assign(Object.assign({}, user), { firstname: user.firstname ? user.firstname : "", lastname: user.lastname ? user.lastname : "", password: user.password ? user.password : "", age: user.age, role: user.role ? user.role : "user" }));
            yield candidate.save();
            if (candidate) {
                res.status(201).json({
                    status: "success",
                    messaage: "signUp",
                });
                return;
            }
            res.status(401).json({
                status: "error",
                messaage: "notSignUp",
            });
            return;
        }
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error,
        });
    }
}));
exports.default = userRouter;
