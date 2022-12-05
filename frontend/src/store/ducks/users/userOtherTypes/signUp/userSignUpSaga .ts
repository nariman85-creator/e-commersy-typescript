import { put, call, takeEvery } from "redux-saga/effects";
import {   userAuthSignUp } from "../../../../../api/products";
import { FetchUserLoadingState } from "../../usersActionTypes";
import { fetchUserSignUpErrorState, fetchUserSignUpLoadedState } from "./userSignUpAction";
import { UserSignUpActionTypes } from "./usersSignUpActionTypes ";

function* fetchUserSignUp({peyload}: FetchUserLoadingState) {
  try {
    const data:{status:string,message:string} = yield call(userAuthSignUp, peyload);
    yield put(fetchUserSignUpLoadedState(data));
  } catch (error) {
    yield put(fetchUserSignUpErrorState(`${error}`));
  }
};


export function* fetchSignUpUser() {
  yield takeEvery(UserSignUpActionTypes.FETCH_LOADING_SIGNUP_USER, fetchUserSignUp);
};
