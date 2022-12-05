import { RootLoadingState } from "../../../../types";
import { UserStateProps } from "./userSignUpTypes ";
import {
  UserSignUpActionTypes,
  UserSignUpFetchStateType,
} from "./usersSignUpActionTypes ";

const UserState: UserStateProps = {
  data: null,
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const userSignUpReducer = (
  state = UserState,
  action: UserSignUpFetchStateType
): UserStateProps => {
  switch (action.type) {
    case UserSignUpActionTypes.FETCH_LOADING_SIGNUP_USER:
      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADING,
      };
    case UserSignUpActionTypes.FETCH_LOADED_SIGNUP_USER:
      console.log(action.peyload);

      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADED,
      };

    case UserSignUpActionTypes.FETCH_ERROR_SIGNUP_USER:
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
