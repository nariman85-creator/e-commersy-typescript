import { Action } from "redux";
import { IOrderProps } from "./orderTypes";
export enum OrderActionTypes {
  FETCH_LOADING_ORDER = "order/FETCH_LOADING_ORDER",
  FETCH_LOADED_ORDER = "order/FETCH_LOADED_ORDER",
  FETCH_ERROR_ORDER = "order/FETCH_ERROR_ORDER",
}

export interface FetchOrderLoadingState extends Action<OrderActionTypes> {
  type: OrderActionTypes.FETCH_LOADING_ORDER;
  peyload: IOrderProps;
  error: "";
}

export interface FetchOrderLoadedState extends Action<OrderActionTypes> {
  type: OrderActionTypes.FETCH_LOADED_ORDER;
  peyload: { status: string };
  error: "";
}

export interface FetchOrderErrorState extends Action<OrderActionTypes> {
  type: OrderActionTypes.FETCH_ERROR_ORDER;
  peyload: null;
  error: string;
}

export type OrderFetchStateType =
  | FetchOrderErrorState
  | FetchOrderLoadedState
  | FetchOrderLoadingState;
