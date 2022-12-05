import {
  FetchUserSignUpErrorState,
  FetchUserSignUpLoadedState,
  FetchUserSignUpLoadingState,
  UserSignUpActionTypes,
} from "./usersSignUpActionTypes ";

export const fetchUserSignUpLoadingState = (data:{[key:string]:string}): FetchUserSignUpLoadingState => {
  return {
    type: UserSignUpActionTypes.FETCH_LOADING_SIGNUP_USER,
    peyload: data,
    error: "",
  };
};
export const fetchUserSignUpLoadedState = (
  data: {status:string,message:string}
): FetchUserSignUpLoadedState => {
  return {
    type: UserSignUpActionTypes.FETCH_LOADED_SIGNUP_USER,
    peyload: data,
    error: "",
  };
};
export const fetchUserSignUpErrorState = (
  error: string
): FetchUserSignUpErrorState => {
  return {
    type: UserSignUpActionTypes.FETCH_ERROR_SIGNUP_USER,
    error,
    peyload: null,
  };
};
