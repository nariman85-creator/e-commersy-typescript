import express from "express";
import catalogRouter from "./catalogRoutes";
import { router as categoryRouter } from "./CategoryRoutes";
import genderRouter from "./genderRoutes";
import routerMaterial from "./materialRoutes";
import { orderRouter } from "./OrdersRouter";
import productRoutes from "./ProductRoutes";

const mainRoute = express.Router();

mainRoute.use(
  categoryRouter,
  productRoutes,
  catalogRouter,
  routerMaterial,
  genderRouter,
  orderRouter
);

export default mainRoute;

// https://www.youtube.com/redirect
// ?
// event = video_description
//  & redir_token=QUFFLUhqblBuaVQySUNnYVBCN1NscnVTMXdnOXdaX25tQXxBQ3Jtc0ttV1lVOHF4UVotX3FoZUNqc0xEU2E2SDJleWRNTDJvSHY0dkRCandCbU1IUHczVVdCSGh6S0JfVlpYTklSRUxlVnpWRHRNYkprWlliQ3B3TnpqSjRyT1F5cElEWHRQVjdwb1V6SUtLRU9saWlQSm9GRQ
//  & q=https % 3A % 2F % 2Fbit.ly % 2F3HWTuVu
//  & v=1yLhBbiRL54
