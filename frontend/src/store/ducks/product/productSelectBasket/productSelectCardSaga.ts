import { put, call, takeEvery } from "redux-saga/effects";
import {  cardProductGet } from "../../../../api/products";
import { IProductCardProps } from "./productSelectCardTypes";
import { fetchInSelectCardProducts,fetchSelectCardError } from "./productSelectCardAction";
import {
  FetchLoadingCardProductState,
  ProductCardActionTypes,
} from "./productSelectCardActionTypes";

function* fetchSelectCardProductsRequest({
  peyload,
}: FetchLoadingCardProductState) {
  try {
    const data: IProductCardProps = yield call(cardProductGet, peyload);

    yield put(fetchInSelectCardProducts(data));
  } catch (error) {
    yield put(fetchSelectCardError(`${error}`));
  }
}
export function* fetchSelectCardProducts() {
  yield takeEvery(
    ProductCardActionTypes.FETCH_CARD_LOADING_PRODUCTS,
    fetchSelectCardProductsRequest
  );
}
