import { put, call, takeEvery } from "redux-saga/effects";
import {  getUser } from "../../../api/products";
import { fetchUserErrorState, fetchUserLoadedState } from "./usersAction";
import { UserActionTypes } from "./usersActionTypes";
import { IUserProps } from "./userTypes";

function* fetchUserRequest() {
  try {
    const data: IUserProps = yield call(getUser);
    yield put(fetchUserLoadedState(data));
  } catch (error) {
    yield put(fetchUserErrorState(`${error}`));
  }
};


export function* fetchUser() {
  yield takeEvery(UserActionTypes.FETCH_LOADING_USER, fetchUserRequest);

};
