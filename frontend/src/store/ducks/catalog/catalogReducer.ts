import { RootLoadingState, ICatalogProps } from "../../types";
import { CatalogActionTypes, CatalogFetchStateType } from "./catalogActionTypes";

export interface CatalogStateprops {
  data: ICatalogProps[];
  error: string ;
  loadingState: RootLoadingState;
}

const CatalogState: CatalogStateprops = {
  data: [],
  error: '',
  loadingState: RootLoadingState.NEVER,
};

export const catalogReducer = (
  state = CatalogState,
  action: CatalogFetchStateType
): CatalogStateprops => {
  switch (action.type) {
    case CatalogActionTypes.FETCH_LOADING_CATALOGS:
      return {
        ...state,
        data: [],
        error: '',
        loadingState: RootLoadingState.LOADING,
      };
    case CatalogActionTypes.FETCH_LOADED_CATALOGS:
      return {
        ...state,
        data: action.peyload,
        error: '',
        loadingState: RootLoadingState.LOADED,
      };
    case CatalogActionTypes.FETCH_ERROR_CATALOGS:
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
