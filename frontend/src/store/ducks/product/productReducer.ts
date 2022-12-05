import { RootLoadingState } from "../../types";
import { ProductActionStateType, ProductActionTypes } from "./productActionTypes";
import { IProductProps } from "./productTypes";
const initialState: IProductProps  = {
  data: [],
  error: "",
  loadingState: RootLoadingState.NEVER,
};


export const productReducer = (
  state = initialState,
  action: ProductActionStateType
) => {

  switch (action.type) {
    case ProductActionTypes.FETCH_LOADING_PRODUCTS:
      return {
        ...state,
        data: [],
        loadingState: RootLoadingState.LOADING,
        error:''
      };

    case ProductActionTypes.FETCH_LOADED_PRODUCTS:
      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADED,
        error:''
      };
    case ProductActionTypes.FETCH_ERROR_PRODUCTS:
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
