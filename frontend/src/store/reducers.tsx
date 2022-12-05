import { combineReducers } from "redux";
import { IAxiosGetProps } from "../api/products";
import {
  catalogReducer,
  CatalogStateprops,
} from "./ducks/catalog/catalogReducer";
import {
  categoryReducer,
  CategoryStateProps,
} from "./ducks/category/categoryReducer";
import { detailsReducer } from "./ducks/details/detailsReducer";
import { IDetailsState } from "./ducks/details/detailsTypes";
import { userOrderReducer } from "./ducks/order/myOrders/myOrderReducer";
import { orderReducer } from "./ducks/order/orderReducer";
import { productReducer } from "./ducks/product/productReducer";
import { productSelectReducer } from "./ducks/product/productSelect/productSelectReducer";
import { IProductSelectProps } from "./ducks/product/productSelect/productSelectTypes";
import { productSelectCardReducer } from "./ducks/product/productSelectBasket/productSelectCardReducer";
import { IProductCardProps } from "./ducks/product/productSelectBasket/productSelectCardTypes";
import { IProductProps } from "./ducks/product/productTypes";
import { productSingleReducer } from "./ducks/product/singleProduct/productSingleReducer";
import { IProductSingleProps } from "./ducks/product/singleProduct/productSingleTypes";
import { userSignInReducer } from "./ducks/users/userOtherTypes/signIn/userSignInReducer ";
import { userSignUpReducer } from "./ducks/users/userOtherTypes/signUp/userSignUpReducer ";
import { userReducer } from "./ducks/users/usersReducer";
import { UserStateprops } from "./ducks/users/userTypes";
import { IProductSelect } from "./types";
import { MyOrderStateProps } from "./ducks/order/myOrders/myOrderTypes";

export const reducers = combineReducers({
  products: productReducer,
  catalogs: catalogReducer,
  users: userReducer,
  category: categoryReducer,
  details: detailsReducer,
  productSelect: productSelectReducer,
  singleProduct: productSingleReducer,
  signUp: userSignUpReducer,
  signIn: userSignInReducer,
  basket: productSelectCardReducer,
  order: orderReducer,
  userOrder: userOrderReducer,
});


export type AppState = {
  products: IProductProps;
  catalogs: CatalogStateprops;
  user: UserStateprops;
  category: CategoryStateProps;
  details: IDetailsState;
  productSelect: IProductSelectProps;
  singleProduct: IProductSingleProps<IAxiosGetProps<IProductSelect>>;
  signUp: { status: string; message: string };
  basket: IProductCardProps;
  order: { data: { status: string } };
  userOrder: MyOrderStateProps;
};
