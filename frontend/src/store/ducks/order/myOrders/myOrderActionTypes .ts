import { Action } from "redux";
import { MyOrderProps } from "../../trackOrder/trackOrderTypes";
export enum UserOrderActionTypes {
  FETCH_LOADING_USER_ORDER = "user__order/FETCH_LOADING_ORDER",
  FETCH_LOADED_USER_ORDER = "user__order/FETCH_LOADED_ORDER",
  FETCH_ERROR_USER_ORDER = "user__order/FETCH_ERROR_ORDER",
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