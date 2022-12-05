import {FetchUserErrorState,FetchUserLoadedState,FetchUserLoadingState, UserActionTypes} from "./usersActionTypes";
import { IUserProps } from "./userTypes";

export const fetchUserLoadingState = (): FetchUserLoadingState => {
  return {
    type: UserActionTypes.FETCH_LOADING_USER,
    peyload: null,
    error: '',
  };
};
export const fetchUserLoadedState = (data: IUserProps): FetchUserLoadedState => {
  return {
    type: UserActionTypes.FETCH_LOADED_USER,
    peyload:data,
    error: '',
  };
};
export const fetchUserErrorState = (error: string): FetchUserErrorState => {
  return {
    type: UserActionTypes.FETCH_ERROR_USER,
    error,
    peyload: null,
  };
};
