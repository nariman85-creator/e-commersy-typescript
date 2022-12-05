import { RootLoadingState } from "../../../types";
import {
  ProductActionStateType,
  ProductSelectActionTypes,
} from "./productSelectActionTypes";
import { IProductSelectProps } from "./productSelectTypes";
const initialState: IProductSelectProps = {
  data: { status: "", result: [], count: 0 ,_id:""},
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const productSelectReducer = (
  state = initialState,
  action: ProductActionStateType
) => {
  switch (action.type) {
    case ProductSelectActionTypes.FETCH_SELECT_LOADING_PRODUCTS:

      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADING,
        error: "",
      };

    case ProductSelectActionTypes.FETCH_SELECT_LOADED_PRODUCTS:


      return {
        ...state,
        data:action.peyload,
        loadingState: RootLoadingState.LOADED,
        error: "",
      };
    case ProductSelectActionTypes.FETCH_SELECT_ERROR_PRODUCTS:
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
