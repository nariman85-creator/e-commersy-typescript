import { put, call, takeEvery } from "redux-saga/effects";
import { getDetails } from "../../../api/products";
import { fetchErrorDetails, fetchInDetails } from "./detailsAction";
import { DetailsActionTypes, FetchLoadingState } from "./detailsActionTypes";
import { IDetailsState } from "./detailsTypes";

function* fetchDetailsRequest({ peyload }: FetchLoadingState) {
  try {
    const data: IDetailsState = yield call(getDetails, peyload);


    yield put(fetchInDetails(data));
  } catch (error) {
    yield put(fetchErrorDetails(`${error}`));
  }
}
export function* fetchDetails() {
  yield takeEvery(DetailsActionTypes.FETCH_LOADING_DETAILS, fetchDetailsRequest);
}
