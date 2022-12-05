import {
  FetchOrderErrorState,
  FetchOrderLoadedState,
  FetchOrderLoadingState,
  UserOrderActionTypes,
} from "./trackOrderActionTypes";
import { MyOrderProps } from "./trackOrderTypes";

export const fetchUserOrderLoadingState = (
  peyload: string
): FetchOrderLoadingState => {
  return {
    type: UserOrderActionTypes.FETCH_LOADING_USER_ORDER,
    peyload,
    error: "",
  };
};
export const fetchUserOrderLoadedState = (
  data: MyOrderProps
): FetchOrderLoadedState => {
  return {
    type: UserOrderActionTypes.FETCH_LOADED_USER_ORDER,
    peyload: data,
    error: "",
  };
};
export const fetchUserOrderErrorState = (
  error: string
): FetchOrderErrorState => {
  return {
    type: UserOrderActionTypes.FETCH_ERROR_USER_ORDER,
    error,
    peyload: null,
  };
};
