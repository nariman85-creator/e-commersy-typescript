import { FetchErrorState, FetchLoadedState, FetchLoadingState, ProductActionTypes } from "./productActionTypes";
import { IProductProps } from "./productTypes";
export const fetchLoadingProducts = (): FetchLoadingState => (
  {
    type: ProductActionTypes.FETCH_LOADING_PRODUCTS,
    peyload: [],
    error:''
  }
);
export const fetchInProducts = (
  data: IProductProps
): FetchLoadedState => ({
  type: ProductActionTypes.FETCH_LOADED_PRODUCTS,
  peyload: data,
  error:''
});
export const fetchError = (error: string): FetchErrorState => ({
  type:ProductActionTypes.FETCH_ERROR_PRODUCTS,
  error,
  peyload:[]
});
