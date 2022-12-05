"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multerStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `product/${file.originalname.split(".")[0]}.${ext}`);
    },
});
exports.upload = (0, multer_1.default)({
    storage: multerStorage,
});
