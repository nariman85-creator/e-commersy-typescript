import { put, call, takeEvery } from "redux-saga/effects";
import { getUserOrders } from "../../../../api/products";
import { fetchUserOrderErrorState, fetchUserOrderLoadedState } from "../../trackOrder/trackOrderAction";
import { FetchOrderLoadingState, UserOrderActionTypes } from "../../trackOrder/trackOrderActionTypes";
import { MyOrderProps } from "../../trackOrder/trackOrderTypes";

function* fetchUserOrderRequest({ peyload }: FetchOrderLoadingState) {
  try {
    const data: MyOrderProps = yield call(getUserOrders, peyload);
    yield put(fetchUserOrderLoadedState(data));
  } catch (error) {
    yield put(fetchUserOrderErrorState(`${error}`));
  }
}

export function* fetchUserOrder() {
  yield takeEvery(UserOrderActionTypes.FETCH_LOADING_USER_ORDER, fetchUserOrderRequest);
}
