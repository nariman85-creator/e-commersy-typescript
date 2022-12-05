import { put, call, takeEvery } from "redux-saga/effects";
import {  getCategoryAll } from "../../../api/products";
import {  ICategoryProps } from "../../types";
import { fetchErrorState, fetchLoadedState } from "./categoryAction";
import { CategoryActionTypes } from "./categoryActionTypes";

function* fetchCategorysRequest() {
  try {
    const data: ICategoryProps[] = yield call( getCategoryAll);
    yield put(fetchLoadedState(data));
  } catch (error) {
    yield put(fetchErrorState(`${error}`));
  }
}
export function* fetchCategory() {
  yield takeEvery(
    CategoryActionTypes.FETCH_LOADING_CATEGORY,
    fetchCategorysRequest
  );
}
