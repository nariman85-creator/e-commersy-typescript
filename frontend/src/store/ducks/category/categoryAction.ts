import { ICategoryProps } from "../../types";
import {
  FetchLoadingState,
  FetchLoadedState,
  FetchErrorState,
  CategoryActionTypes,
} from "./categoryActionTypes";

export const fetchCategoryLoadingState = (): FetchLoadingState => {
  return {
    type: CategoryActionTypes.FETCH_LOADING_CATEGORY,
    peyload: [],
    error: "",
  };
};
export const fetchLoadedState = (peyload: ICategoryProps[]): FetchLoadedState => {
  return {
    type: CategoryActionTypes.FETCH_LOADED_CATEGORY,
    error: "",
    peyload: peyload,
  };
};
export const fetchErrorState = (error: string): FetchErrorState => {
  return {
    type: CategoryActionTypes.FETCH_ERROR_CATEGORY,
    error,
    peyload: [],
  };
};
