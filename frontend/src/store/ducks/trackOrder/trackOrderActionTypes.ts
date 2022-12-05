import { Action } from "redux";
import { MyOrderProps } from "./trackOrderTypes";
export enum UserOrderActionTypes {
  FETCH_LOADING_USER_ORDER = "user__track--order/FETCH_LOADING_TRACK__ORDER",
  FETCH_LOADED_USER_ORDER = "user__track--order/FETCH_LOADED_TRACK__ORDER",
  FETCH_ERROR_USER_ORDER = "user__track--order/FETCH_ERROR_TRACK__ORDER",
}

export interface FetchOrderLoadingState extends Action<UserOrderActionTypes> {
  type: UserOrderActionTypes.FETCH_LOADING_USER_ORDER;
  peyload: string;
  error: "";
}

export interface FetchOrderLoadedState extends Action<UserOrderActionTypes> {
  type: UserOrderActionTypes.FETCH_LOADED_USER_ORDER;
  peyload: MyOrderProps;
  error: "";
}

export interface FetchOrderErrorState extends Action<UserOrderActionTypes> {
  type: UserOrderActionTypes.FETCH_ERROR_USER_ORDER;
  peyload: null;
  error: string;
}

export type OrderFetchStateType =
  FetchOrderErrorState | FetchOrderLoadedState | FetchOrderLoadingState;