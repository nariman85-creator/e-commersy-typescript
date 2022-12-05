import { all } from "redux-saga/effects";
import { fetchCatalogs } from "../ducks/catalog/catalogSaga";
import { fetchCategory } from "../ducks/category/categorySaga";
import { fetchDetails } from "../ducks/details/detailsSaga";
import { fetchUserOrder } from "../ducks/order/myOrders/myOrderSaga";
import { fetchOrder } from "../ducks/order/orderSaga";
import { fetchProducts } from "../ducks/product/productSaga";
import { fetchSelectProducts } from "../ducks/product/productSelect/productSelectSaga";
import { fetchSelectCardProducts } from "../ducks/product/productSelectBasket/productSelectCardSaga";
import { fetchSingleProducts } from "../ducks/product/singleProduct/productSingleSaga";
import { fetchSignInUser } from "../ducks/users/userOtherTypes/signIn/userSignInSaga ";
import { fetchSignUpUser } from "../ducks/users/userOtherTypes/signUp/userSignUpSaga ";
import { fetchUser } from "../ducks/users/usersSaga";

export function* rootSagas() {
  yield all([
    fetchProducts(),
    fetchCatalogs(),
    fetchUser(),
    fetchCategory(),
    fetchDetails(),
    fetchSelectProducts(),
    fetchSingleProducts(),
    fetchSignInUser(),
    fetchSignUpUser(),
    fetchSelectCardProducts(),
    fetchOrder(),
    fetchUserOrder(),
  ]);
}
