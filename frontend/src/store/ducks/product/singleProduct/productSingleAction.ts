import { IAxiosGetProps } from "../../../../api/products";
import { IProductSelect } from "../../../types";
import {
  FetchErrorSingleErrorState,
  FetchLoadeSingleProductState,
  FetchLoadingSingleProductState,
  ProductSingleActionTypes,
} from "./productSingleActionTypes";
export const fetchLoadingSingleProducts = (
  queryString: string
): FetchLoadingSingleProductState => ({
  type: ProductSingleActionTypes.FETCH_Single_LOADING_PRODUCTS,
  peyload: queryString,
  error: "",
});
export const fetchInSingleProducts = (
  data: IAxiosGetProps<IProductSelect>
): FetchLoadeSingleProductState => ({
  type: ProductSingleActionTypes.FETCH_Single_LOADED_PRODUCTS,
  peyload: data,
  error: "",
});
export const fetchSingleError = (error: string): FetchErrorSingleErrorState => ({
  type: ProductSingleActionTypes.FETCH_Single_ERROR_PRODUCTS,
  error,
  peyload: [],
});
