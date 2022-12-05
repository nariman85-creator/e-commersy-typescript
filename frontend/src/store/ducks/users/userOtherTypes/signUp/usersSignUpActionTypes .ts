import { Action } from "redux";
export enum UserSignUpActionTypes {
  FETCH_LOADING_SIGNUP_USER = "user/FETCH_LOADING_SIGNUP_USER",
  FETCH_LOADED_SIGNUP_USER = "user/FETCH_LOADED_SIGNUP_USER",
  FETCH_ERROR_SIGNUP_USER = "user/FETCH_ERROR_SIGNUP_USER",
}

export interface FetchUserSignUpLoadingState
  extends Action<UserSignUpActionTypes> {
  type: UserSignUpActionTypes.FETCH_LOADING_SIGNUP_USER;
  peyload: { [key: string]: string };
  error: "";
}

export interface FetchUserSignUpLoadedState extends Action<UserSignUpActionTypes> {
  type: UserSignUpActionTypes.FETCH_LOADED_SIGNUP_USER;
  peyload: { status: string; message: string };
  error: "";
}

export interface FetchUserSignUpErrorState
  extends Action<UserSignUpActionTypes> {
  type: UserSignUpActionTypes.FETCH_ERROR_SIGNUP_USER;
  peyload: null;
  error: string;
}

export type UserSignUpFetchStateType =
  | FetchUserSignUpErrorState
  | FetchUserSignUpLoadedState
  | FetchUserSignUpLoadingState;
