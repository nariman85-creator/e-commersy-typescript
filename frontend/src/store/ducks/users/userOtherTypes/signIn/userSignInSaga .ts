import { put, call, takeEvery } from "redux-saga/effects";
import { userAuthSignIn } from "../../../../../api/products";
import { IUserProps } from "../../userTypes";
import {
  fetchUserSignInErrorState,
  fetchUserSignInLoadedState,
} from "./userSignInAction";
import { UserSignInActionTypes } from "./userSignInTypes ";
import { FetchUserSignInLoadingState } from "./usersSignInActionTypes ";

function* fetchUserSignIn({ peyload }: FetchUserSignInLoadingState) {
  try {
    const data: {
      data: IUserProps;
      status: string;
      token: string;
    } = yield call(userAuthSignIn, peyload);

    yield put(fetchUserSignInLoadedState(data));
  } catch (error) {
    yield put(fetchUserSignInErrorState(`${error}`));
  }
}

export function* fetchSignInUser() {
  yield takeEvery(UserSignInActionTypes.User__SignIn__Loading, fetchUserSignIn);
}
