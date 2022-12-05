import { Action } from "redux";
import { IAxiosGetProps } from "../../../../api/products";
import { IProductSelect } from "../../../types";


export enum ProductSingleActionTypes {
  FETCH_Single_LOADING_PRODUCTS = "product/FETCH_Single_LOADING_PRODUCTS",
  FETCH_Single_LOADED_PRODUCTS = "product/FETCH_Single_LOADED_PRODUCTS",
  FETCH_Single_ERROR_PRODUCTS = "product/FETCH_Single_ERROR_PRODUCTS",
}


export interface FetchLoadingSingleProductState extends Action<ProductSingleActionTypes> {
  type: ProductSingleActionTypes.FETCH_Single_LOADING_PRODUCTS;
  peyload: string;
  error: "";
}
export interface FetchLoadeSingleProductState
  extends Action<ProductSingleActionTypes> {
  type: ProductSingleActionTypes.FETCH_Single_LOADED_PRODUCTS;
  peyload: IAxiosGetProps<IProductSelect>;
  error: "";
}
export interface FetchErrorSingleErrorState extends Action<ProductSingleActionTypes> {
  type: ProductSingleActionTypes.FETCH_Single_ERROR_PRODUCTS;
  error: string;
  peyload: [];
}

export type ProductActionStateType =
  | FetchLoadingSingleProductState
  | FetchLoadeSingleProductState
  | FetchErrorSingleErrorState;
