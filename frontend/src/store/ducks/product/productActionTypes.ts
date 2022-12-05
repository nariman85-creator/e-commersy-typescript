import { Action } from "redux";
import { IProductProps } from "./productTypes";


export enum ProductActionTypes {
  FETCH_LOADING_PRODUCTS = "product/FETCH_LOADING_PRODUCTS",
  FETCH_LOADED_PRODUCTS = "product/FETCH_LOADED_PRODUCTS",
  FETCH_ERROR_PRODUCTS = "product/FETCH_ERROR_PRODUCTS",
}


export interface FetchLoadingState extends Action<ProductActionTypes> {
  type: ProductActionTypes.FETCH_LOADING_PRODUCTS;
  peyload: [];
  error: "";
}
export interface FetchLoadedState extends Action<ProductActionTypes> {
  type: ProductActionTypes.FETCH_LOADED_PRODUCTS;
  peyload: IProductProps;
  error:""
}
export interface FetchErrorState extends Action<ProductActionTypes> {
  type:ProductActionTypes.FETCH_ERROR_PRODUCTS
  error: string;
  peyload:[]
}

export type ProductActionStateType =
  | FetchLoadedState
  | FetchLoadingState
  | FetchErrorState;
