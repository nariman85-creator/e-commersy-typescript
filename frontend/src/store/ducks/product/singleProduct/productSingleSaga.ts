import { put, call, takeEvery } from "redux-saga/effects";
import {  getSingleProducts, IAxiosGetProps } from "../../../../api/products";
import { fetchSingleError,fetchInSingleProducts } from "./productSingleAction";
import {
  FetchLoadingSingleProductState,
  ProductSingleActionTypes,
} from "./productSingleActionTypes";
import { IProductSelect } from "../../../types";

function* fetchSingleProductsRequest({
  peyload,
}: FetchLoadingSingleProductState) {
  try {
    const data: IAxiosGetProps<IProductSelect> = yield call(
      getSingleProducts,
      peyload
    );


    yield put(fetchInSingleProducts(data));
  } catch (error) {
    yield put(fetchSingleError(`${error}`));
  }
}
export function* fetchSingleProducts() {
  yield takeEvery(
    ProductSingleActionTypes.FETCH_Single_LOADING_PRODUCTS,
    fetchSingleProductsRequest
  );
}
