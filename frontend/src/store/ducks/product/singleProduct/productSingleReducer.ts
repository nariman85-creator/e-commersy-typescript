import { IAxiosGetProps } from "../../../../api/products";
import { IProductSelect, RootLoadingState } from "../../../types";
import {
  ProductActionStateType,
  ProductSingleActionTypes,
} from "./productSingleActionTypes";
import { IProductSingleProps } from "./productSingleTypes";
const initialState: IProductSingleProps<IAxiosGetProps<IProductSelect>> = {
  data: null,
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const productSingleReducer = (
  state = initialState,
  action: ProductActionStateType
) => {
  switch (action.type) {
    case ProductSingleActionTypes.FETCH_Single_LOADING_PRODUCTS:
      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADING,
        error: "",
      };

    case ProductSingleActionTypes.FETCH_Single_LOADED_PRODUCTS:

      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADED,
        error: "",
      };
    case ProductSingleActionTypes.FETCH_Single_ERROR_PRODUCTS:
      return {
        ...state,
        data: [],
        loadingState: RootLoadingState.ERROR,
        error: action.error,
      };

    default:
      return {
        ...state,
      };
  }
};
