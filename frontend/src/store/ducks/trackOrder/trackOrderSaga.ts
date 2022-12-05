import { put, call, takeEvery } from "redux-saga/effects";
import { getUserTrackOrders } from "../../../api/products";
import { fetchUserOrderErrorState, fetchUserOrderLoadedState } from "./trackOrderAction";
import { FetchOrderLoadingState, UserOrderActionTypes } from "./trackOrderActionTypes";
import { MyOrderProps } from "./trackOrderTypes";

function* fetchUserOrderRequest({ peyload }: FetchOrderLoadingState) {
  try {
    const data: MyOrderProps = yield call(getUserTrackOrders, peyload);
    yield put(fetchUserOrderLoadedState(data));
  } catch (error) {
    yield put(fetchUserOrderErrorState(`${error}`));
  }
}

export function* fetchUserOrder() {
  yield takeEvery(UserOrderActionTypes.FETCH_LOADING_USER_ORDER, fetchUserOrderRequest);
}
