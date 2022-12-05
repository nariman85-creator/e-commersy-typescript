import { RootLoadingState } from "../../types";
import {
  DetailsActionStateType,
  DetailsActionTypes,
} from "./detailsActionTypes";
import { IDetailsState } from "./detailsTypes";
const initialState: IDetailsState = {
  data: [],
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const detailsReducer = (
  state = initialState,
  action: DetailsActionStateType
) => {
  switch (action.type) {
    case DetailsActionTypes.FETCH_LOADING_DETAILS:
      return {
        ...state,
        data: [],
        loadingState: RootLoadingState.LOADING,
        error: "",
      };

    case DetailsActionTypes.FETCH_LOADED_DETAILS:
      return {
        ...state,
        data: action.peyload,
        loadingState: RootLoadingState.LOADED,
        error: "",
      };
    case DetailsActionTypes.FETCH_ERROR_DETAILS:
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
