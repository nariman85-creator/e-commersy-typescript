import { ICatalogProps, ICatalogSelectDetailProps } from "../../types";
import {Action } from 'redux';


export enum CatalogActionTypes {
  FETCH_LOADING_CATALOGS = "catalogs/FETCH_LOADING_CATALOGS",
  FETCH_LOADED_CATALOGS = "catalogs/FETCH_LOADED_CATALOGS",
  FETCH_LOADED_SELECT_DETAILS_CATALOGS = "catalogs/FETCH_LOADED_SELECT_DETAILS_CATALOGS",
  FETCH_ERROR_CATALOGS = "catalogs/FETCH_ERROR_CATALOGS",
  SET_LOADING = "catalogs/SET_LOADING",
  ADD_CATALOGS = "catalogs/ADDCATALOGS",
  SET_ADD_FORM_STATE = "catalogs/SET_ADD_FORM_STATE",
}

export interface FetchLoadingState extends Action<CatalogActionTypes> {
  type: CatalogActionTypes.FETCH_LOADING_CATALOGS;
  peyload:string;
  error: "";
}

export interface FetchLoadedState extends Action<CatalogActionTypes> {
  type: CatalogActionTypes.FETCH_LOADED_CATALOGS;
  peyload: ICatalogProps[];
  error: "";
}
export interface FetchLoadedSelectDetailsState extends Action<CatalogActionTypes> {
  type: CatalogActionTypes.FETCH_LOADED_SELECT_DETAILS_CATALOGS;
  peyload: ICatalogSelectDetailProps;
  error: "";
}


export interface FetchErrorState extends Action<CatalogActionTypes> {
  type: CatalogActionTypes.FETCH_ERROR_CATALOGS;
  peyload: [];
  error: string;
}

export type CatalogFetchStateType =
  | FetchErrorState
  | FetchLoadedState
  | FetchLoadingState;
