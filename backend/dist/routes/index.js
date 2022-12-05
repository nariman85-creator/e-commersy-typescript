"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const catalogRoutes_1 = __importDefault(require("./catalogRoutes"));
const CategoryRoutes_1 = require("./CategoryRoutes");
const genderRoutes_1 = __importDefault(require("./genderRoutes"));
const materialRoutes_1 = __importDefault(require("./materialRoutes"));
const OrdersRouter_1 = require("./OrdersRouter");
const ProductRoutes_1 = __importDefault(require("./ProductRoutes"));
const mainRoute = express_1.default.Router();
mainRoute.use(CategoryRoutes_1.router, ProductRoutes_1.default, catalogRoutes_1.default, materialRoutes_1.default, genderRoutes_1.default, OrdersRouter_1.orderRouter);
exports.default = mainRoute;
// https://www.youtube.com/redirect
// ?
// event = video_description
//  & redir_token=QUFFLUhqblBuaVQySUNnYVBCN1NscnVTMXdnOXdaX25tQXxBQ3Jtc0ttV1lVOHF4UVotX3FoZUNqc0xEU2E2SDJleWRNTDJvSHY0dkRCandCbU1IUHczVVdCSGh6S0JfVlpYTklSRUxlVnpWRHRNYkprWlliQ3B3TnpqSjRyT1F5cElEWHRQVjdwb1V6SUtLRU9saWlQSm9GRQ
//  & q=https % 3A % 2F % 2Fbit.ly % 2F3HWTuVu
//  & v=1yLhBbiRL54
