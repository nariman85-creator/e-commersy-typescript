"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
// mongodb+srv://nariman:narik85@cluster0.hsiq3wg.mongodb.net/?retryWrites=true&w=majority
mongoose_1.default
    .connect("mongodb://localhost:27017/ecommercy")
    .then(() => console.log("Database connect....!"))
    .catch((e) => console.log(e));
const db = mongoose_1.default.connection;
exports.db = db;
db.on("error", console.error.bind(console, "connection error"));
