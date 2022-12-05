import { put, call, takeEvery } from "redux-saga/effects";
import { getProductCategoryAndCatalog } from "../../../api/products";
import { ICatalogProps } from "../../types";
import { fetchErrorState, fetchLoadedState } from "./catalogAction";
import { CatalogActionTypes, FetchLoadingState } from "./catalogActionTypes";

function* fetchCatalogssRequest({peyload}: FetchLoadingState) {
  try {
    const data: ICatalogProps[] = yield call(getProductCategoryAndCatalog, peyload);

    yield put(fetchLoadedState(data));
  } catch (error) {
    yield put(fetchErrorState(`${error}`));
  }
}
export function* fetchCatalogs() {
  yield takeEvery(CatalogActionTypes.FETCH_LOADING_CATALOGS, fetchCatalogssRequest);
}
