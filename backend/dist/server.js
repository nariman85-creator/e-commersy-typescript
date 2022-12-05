"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./utils/db");
const routes_1 = __importDefault(require("./routes"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/products", routes_1.default);
app.use("/api/users", userRouter_1.default);
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});
app.listen(PORT, () => {
    console.log(`Server runned port:${PORT}`);
});
