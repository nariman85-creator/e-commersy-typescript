import {
  FetchErrorSelectErrorState,
  FetchLoadedSelectProductState,
  FetchLoadingSelectProductState,
  ProductSelectActionTypes,
} from "./productSelectActionTypes";
import { IProductSelectProps } from "./productSelectTypes";

export const fetchLoadingSelectProducts = (
  queryString: string
): FetchLoadingSelectProductState => ({
  type: ProductSelectActionTypes.FETCH_SELECT_LOADING_PRODUCTS,
  peyload: queryString,
  error: "",
});

export const fetchInSelectProducts = (
  data: IProductSelectProps
): FetchLoadedSelectProductState => ({
  type: ProductSelectActionTypes.FETCH_SELECT_LOADED_PRODUCTS,
  peyload: data,
  error: "",
});

export const fetchSelectError = (error: string): FetchErrorSelectErrorState => ({
  type: ProductSelectActionTypes.FETCH_SELECT_ERROR_PRODUCTS,
  error,
  peyload: [],
});
