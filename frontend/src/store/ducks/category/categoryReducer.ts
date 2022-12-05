import { RootLoadingState, ICategoryProps } from "../../types";
import {
  CategoryActionTypes,
  CategoryFetchStateType,
} from "./categoryActionTypes";

export interface CategoryStateProps {
  data: ICategoryProps[];
  error: string;
  loadingState: RootLoadingState;
}

const CatalogState: CategoryStateProps = {
  data: [],
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const categoryReducer = (
  state = CatalogState,
  action: CategoryFetchStateType
): CategoryStateProps => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_LOADING_CATEGORY:
      return {
        ...state,
        data: [],
        error: "",
        loadingState: RootLoadingState.LOADING,
      };
    case CategoryActionTypes.FETCH_LOADED_CATEGORY:
      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADED,
      };
    case CategoryActionTypes.FETCH_ERROR_CATEGORY:
      return {
        ...state,
        data: [],
        error: action.error,
        loadingState: RootLoadingState.ERROR,
      };

    default:
      return {
        ...state,
      };
  }
};
