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
exports.User = void 0;
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    age: { type: Number, default: 0 },
    role: {
        type: String,
        default: "user",
    },
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "order",
    },
    address: { type: mongoose_1.Schema.Types.ObjectId, ref: "address" },
}, {
    timestamps: true,
});
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const salt = bcryptjs_1.default.genSaltSync(10);
            const passwordHash = yield bcryptjs_1.default.hashSync(this.password, salt);
            this.password = passwordHash;
            next();
        }
        catch (error) {
            return;
        }
    });
});
UserSchema.methods.createToken = function () {
    const token = jsonwebtoken_1.default.sign(this, process.env.SECRET_KEY || "nariman");
    return this.model("User");
};
UserSchema.methods.parseToken = function (token) {
    const tokenParse = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || "nariman");
    return this.model("User");
};
UserSchema;
exports.User = (0, mongoose_1.model)("User", UserSchema);
