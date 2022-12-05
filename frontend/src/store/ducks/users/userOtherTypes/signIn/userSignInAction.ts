import { IUserProps } from "../../userTypes";
import { MYOmit, UserSignInActionTypes } from "./userSignInTypes ";
import { FetchUserSignInErrorState, FetchUserSignInLoadedState, FetchUserSignInLoadingState } from "./usersSignInActionTypes ";

export const fetchUserSignInLoadingState = (
  data: MYOmit<IUserProps, "email" | "password">
): FetchUserSignInLoadingState => {
  return {
    type: UserSignInActionTypes.User__SignIn__Loading,
    peyload: data,
    error: "",
  };
};
export const fetchUserSignInLoadedState = (
  data: {data:IUserProps,status:string,token:string}
): FetchUserSignInLoadedState => {
  return {
    type: UserSignInActionTypes.User__SignIn__Loaded,
    peyload: data,
    error: "",
  };
};
export const fetchUserSignInErrorState = (
  error: string
): FetchUserSignInErrorState => {
  return {
    type: UserSignInActionTypes.User__SignIn__ERROR,
    error,
    peyload: null,
  };
};
