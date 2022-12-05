import { Action } from "redux";
import { IUserProps } from "../../userTypes";
import { MYOmit, UserSignInActionTypes } from "./userSignInTypes ";

export interface FetchUserSignInLoadingState extends Action<UserSignInActionTypes> {
  type: UserSignInActionTypes.User__SignIn__Loading;
  peyload: MYOmit<IUserProps,'email'|'password'>;
  error: "";
}

export interface FetchUserSignInLoadedState extends Action<UserSignInActionTypes> {
  type: UserSignInActionTypes.User__SignIn__Loaded;
  peyload: { data: IUserProps ,status:string,token:string};
  error: "";
}

export interface FetchUserSignInErrorState extends Action<UserSignInActionTypes> {
  type: UserSignInActionTypes.User__SignIn__ERROR;
  peyload: null;
  error: string;
}

export type UserSignInFetchStateType =
  | FetchUserSignInLoadingState
  | FetchUserSignInLoadedState
  | FetchUserSignInErrorState;
