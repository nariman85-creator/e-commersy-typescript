"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = exports.createHash = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createHash = (pass) => {
    const salt = bcryptjs_1.default.genSaltSync(10);
    const passwordHash = bcryptjs_1.default.hashSync(pass, salt);
    return passwordHash;
};
exports.createHash = createHash;
const createToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ user }, process.env.SECRET_KEY || "Nariman");
    return token;
};
exports.createToken = createToken;
