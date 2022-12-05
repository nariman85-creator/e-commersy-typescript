import {  ICatalogProps } from "../../types";
import {
  FetchLoadingState,
  FetchLoadedState,
  FetchErrorState,
  CatalogActionTypes,
} from "./catalogActionTypes";

export const fetchCatalogsLoadingState = (text:string): FetchLoadingState => {
  return {
    type: CatalogActionTypes.FETCH_LOADING_CATALOGS,
    peyload:text,
    error:'',
  };
};
export const fetchLoadedState = (peyload: ICatalogProps[]): FetchLoadedState => {
  return {
    type: CatalogActionTypes.FETCH_LOADED_CATALOGS,
    error: '',
    peyload:peyload
  };
};
export const fetchErrorState = (error: string): FetchErrorState => {
  return {
    type: CatalogActionTypes.FETCH_ERROR_CATALOGS,
    error,
    peyload: [],
  };
};
