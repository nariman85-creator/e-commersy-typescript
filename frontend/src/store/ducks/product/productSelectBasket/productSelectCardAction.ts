import {FetchErrorCardErrorState,FetchLoadeCardProductState,FetchLoadingCardProductState, ProductCardActionTypes
} from "./productSelectCardActionTypes";
import { IProductCardProps } from "./productSelectCardTypes";
export const fetchLoadingSelectCardProducts = (
  queryString: string[]
): FetchLoadingCardProductState => ({
  type: ProductCardActionTypes.FETCH_CARD_LOADING_PRODUCTS,
  peyload: queryString,
  error: "",
});
export const fetchInSelectCardProducts = (
  data: IProductCardProps
): FetchLoadeCardProductState => ({
  type: ProductCardActionTypes.FETCH_CARD_LOADED_PRODUCTS,
  peyload: data,
  error: "",
});

export const fetchSelectCardError = (error: string): FetchErrorCardErrorState => ({
  type: ProductCardActionTypes.FETCH_CARD_ERROR_PRODUCTS,
  error,
  peyload: [],
});
