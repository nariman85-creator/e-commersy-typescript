import { Action } from "redux";
import { IProductCardProps } from "./productSelectCardTypes";


export enum ProductCardActionTypes {
  FETCH_CARD_LOADING_PRODUCTS = "product/FETCH_CARD_LOADING_PRODUCTS",
  FETCH_CARD_LOADED_PRODUCTS = "product/FETCH_CARD_LOADED_PRODUCTS",
  FETCH_CARD_ERROR_PRODUCTS = "product/FETCH_CARD_ERROR_PRODUCTS",
}


export interface FetchLoadingCardProductState
  extends Action<ProductCardActionTypes> {
  type: ProductCardActionTypes.FETCH_CARD_LOADING_PRODUCTS;
  peyload: string[];
  error: "";
}
export interface FetchLoadeCardProductState extends Action<ProductCardActionTypes> {
  type: ProductCardActionTypes.FETCH_CARD_LOADED_PRODUCTS;
  peyload: IProductCardProps;
  error: "";
}
export interface FetchErrorCardErrorState extends Action<ProductCardActionTypes> {
  type: ProductCardActionTypes.FETCH_CARD_ERROR_PRODUCTS;
  error: string;
  peyload: [];
}

export type ProductCardActionStateType =
  | FetchLoadingCardProductState
  | FetchLoadeCardProductState
  | FetchErrorCardErrorState;
