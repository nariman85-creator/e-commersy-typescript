import { Action } from "redux";
import { IUserProps } from "./userTypes";
export enum UserActionTypes {
  FETCH_LOADING_USER = "user/FETCH_LOADING_USER",
  FETCH_LOADED_USER = "user/FETCH_LOADED_USER",
  FETCH_ERROR_USER = "user/FETCH_ERROR_USER",
}

export interface FetchUserLoadingState extends Action<UserActionTypes> {
  type: UserActionTypes.FETCH_LOADING_USER;
  peyload: null;
  error: '';
}

export interface FetchUserLoadedState extends Action<UserActionTypes> {
  type: UserActionTypes.FETCH_LOADED_USER;
  peyload: IUserProps;
  error: '';
}

export interface FetchUserErrorState extends Action<UserActionTypes> {
  type: UserActionTypes.FETCH_ERROR_USER;
  peyload: null;
  error: string;
}

export type UserFetchStateType =
  | FetchUserErrorState
  | FetchUserLoadedState
  | FetchUserLoadingState
