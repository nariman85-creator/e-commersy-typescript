import { RootLoadingState } from "../../../../types";
import {
  UserSignInActionTypes,
  UserSignInStateProps,
} from "./userSignInTypes ";
import { UserSignInFetchStateType } from "./usersSignInActionTypes ";

const UserState: UserSignInStateProps = {
  data: { data: null, status: "", token: "" },
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const userSignInReducer = (
  state = UserState,
  action: UserSignInFetchStateType
): UserSignInStateProps => {
  switch (action.type) {
    case UserSignInActionTypes.User__SignIn__Loading:
      return {
        ...state,
        data: null,
        error: "",
        loadingState: RootLoadingState.LOADING,
      };
    case UserSignInActionTypes.User__SignIn__Loaded:
      const user = action.peyload;

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));

      }
      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADED,
      };
    case UserSignInActionTypes.User__SignIn__ERROR:
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
