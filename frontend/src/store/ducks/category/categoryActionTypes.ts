import {  ICategoryProps } from "../../types";
import {Action } from 'redux';


export enum CategoryActionTypes {
  FETCH_LOADING_CATEGORY = "category/FETCH_LOADING_CATEGORY",
  FETCH_LOADED_CATEGORY = "category/FETCH_LOADED_CATEGORY",
  FETCH_ERROR_CATEGORY = "category/FETCH_ERROR_CATEGORY",
  SET_LOADING = "category/SET_LOADING",
  ADD_CATEGORY = "category/ADDCATEGORY",
  SET_ADD_FORM_STATE = "category/SET_ADD_FORM_STATE",
}

export interface FetchLoadingState extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.FETCH_LOADING_CATEGORY;
  peyload: [];
  error: "";
}

export interface FetchLoadedState extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.FETCH_LOADED_CATEGORY;
  peyload: ICategoryProps[];
  error: "";
}

export interface FetchErrorState extends Action<CategoryActionTypes> {
  type: CategoryActionTypes.FETCH_ERROR_CATEGORY;
  peyload: [];
  error: string;
}

export type CategoryFetchStateType =
  | FetchErrorState
  | FetchLoadedState
  | FetchLoadingState;
