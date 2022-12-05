import { put, call, takeEvery } from "redux-saga/effects";
import { getSelectProducts } from "../../../../api/products";
import { IProductSelectProps } from "./productSelectTypes";
import { fetchSelectError, fetchInSelectProducts } from "./productSelectAction";
import {
  FetchLoadingSelectProductState,
  ProductSelectActionTypes,
} from "./productSelectActionTypes";

function* fetchSelectProductsRequest({
  peyload,
}: FetchLoadingSelectProductState) {
  try {
    const data: IProductSelectProps = yield call(getSelectProducts, peyload);

    yield put(fetchInSelectProducts(data));
  } catch (error) {
    yield put(fetchSelectError(`${error}`));
  }
}

export function* fetchSelectProducts() {
  yield takeEvery(
    ProductSelectActionTypes.FETCH_SELECT_LOADING_PRODUCTS,
    fetchSelectProductsRequest
  );
}
