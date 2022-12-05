import { RootLoadingState } from "../../../types";
import {
  ProductCardActionTypes,
  ProductCardActionStateType,
} from "./productSelectCardActionTypes";
import { IProductCardProps } from "./productSelectCardTypes";
const initialState: IProductCardProps = {
  data: { status: "", result: [], count: 0 },
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const productSelectCardReducer = (
  state = initialState,
  action: ProductCardActionStateType
) => {
  switch (action.type) {
    case ProductCardActionTypes.FETCH_CARD_LOADING_PRODUCTS:
      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADING,
        error: "",
      };

    case ProductCardActionTypes.FETCH_CARD_LOADED_PRODUCTS:

      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADED,
        error: "",
      };
    case ProductCardActionTypes.FETCH_CARD_ERROR_PRODUCTS:
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
