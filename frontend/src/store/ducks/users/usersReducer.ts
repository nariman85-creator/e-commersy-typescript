import { RootLoadingState } from "../../types";
import { UserFetchStateType, UserActionTypes } from "./usersActionTypes";
import { UserStateprops } from "./userTypes";


const UserState: UserStateprops = {
  data: null,
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const userReducer = (
  state = UserState,
  action: UserFetchStateType
): UserStateprops => {
  switch (action.type) {
    case UserActionTypes.FETCH_LOADING_USER:
      return {
        ...state,
        data: null,
        error: "",
        loadingState: RootLoadingState.LOADING,
      };
    case UserActionTypes.FETCH_LOADED_USER:
      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADED,
      };
    case UserActionTypes.FETCH_ERROR_USER:
      return {
        ...state,
        data: null,
        error: action.error,
        loadingState: RootLoadingState.ERROR,
      };

    default:
      return {
        ...state,
      };
  }
};
