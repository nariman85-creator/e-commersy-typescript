import { Action } from "redux";
import { IProductSelectProps } from "./productSelectTypes";


export enum ProductSelectActionTypes {
  FETCH_SELECT_LOADING_PRODUCTS = "product/FETCH_SELECT_LOADING_PRODUCTS",
  FETCH_SELECT_LOADED_PRODUCTS = "product/FETCH_SELECT_LOADED_PRODUCTS",
  FETCH_SELECT_ERROR_PRODUCTS = "product/FETCH_SELECT_ERROR_PRODUCTS",
}


export interface FetchLoadingSelectProductState extends Action<ProductSelectActionTypes> {
  type: ProductSelectActionTypes.FETCH_SELECT_LOADING_PRODUCTS;
  peyload: string;
  error: "";
}
export interface FetchLoadedSelectProductState extends Action<ProductSelectActionTypes> {
  type: ProductSelectActionTypes.FETCH_SELECT_LOADED_PRODUCTS;
  peyload: IProductSelectProps;
  error: "";
}
export interface FetchErrorSelectErrorState extends Action<ProductSelectActionTypes> {
  type: ProductSelectActionTypes.FETCH_SELECT_ERROR_PRODUCTS;
  error: string;
  peyload: [];
}

export type ProductActionStateType =
  | FetchLoadingSelectProductState
  | FetchLoadedSelectProductState
  | FetchErrorSelectErrorState;
