import { put, call, takeEvery } from "redux-saga/effects";
import { getProducts } from "../../../api/products";
import { fetchError, fetchInProducts } from "./productAction";
import { ProductActionTypes } from "./productActionTypes";
import { IProductProps } from "./productTypes";

function* fetchProductsRequest() {
  try {
    const data: IProductProps = yield call(getProducts);
    yield put(fetchInProducts(data));
  } catch (error) {
    yield put(fetchError(`${error}`));
  }
}
export function* fetchProducts() {
  yield takeEvery(
    ProductActionTypes.FETCH_LOADING_PRODUCTS,
    fetchProductsRequest
  );
}
