import { IProduct } from "../models/Product";

export interface IProductItems {
  status: "string";
  data: [data: IProduct[]];
  count: number;
}

