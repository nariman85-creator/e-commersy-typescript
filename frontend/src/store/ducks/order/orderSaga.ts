import { put, call, takeEvery } from "redux-saga/effects";
import { getAddOrders } from "../../../api/products";
import { fetchOrderErrorState, fetchOrderLoadedState } from "./orderAction";
import { FetchOrderLoadingState, OrderActionTypes } from "./orderActionTypes";
import { IOrderProps } from "./orderTypes";

function* fetchOrderRequest({ peyload }: FetchOrderLoadingState) {
  try {
    const queryKey = Object.keys(peyload).map((key, idx) => {
      return key;
    });
    const queryValues = Object.values(peyload).map((value, idx) => {
      return value;
    });
    const queryString = queryKey
      .map((key, idx) => {
        return `${key}=${JSON.stringify(queryValues[idx])}`;
      })
      .join("&");
    const data: {status:string} = yield call(getAddOrders, queryString);
    yield put(fetchOrderLoadedState(data));
  } catch (error) {
    yield put(fetchOrderErrorState(`${error}`));
  }
}

export function* fetchOrder() {
  yield takeEvery(OrderActionTypes.FETCH_LOADING_ORDER, fetchOrderRequest);
}
