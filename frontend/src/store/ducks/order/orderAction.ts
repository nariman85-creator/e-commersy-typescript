import {FetchOrderErrorState,FetchOrderLoadedState,FetchOrderLoadingState, OrderActionTypes} from "./orderActionTypes";
import { IOrderProps } from "./orderTypes";

export const fetchOrderLoadingState = (peyload:IOrderProps): FetchOrderLoadingState => {
  return {
    type: OrderActionTypes.FETCH_LOADING_ORDER,
    peyload,
    error: "",
  };
};
export const fetchOrderLoadedState = (data: {status:string}): FetchOrderLoadedState => {
  return {
    type: OrderActionTypes.FETCH_LOADED_ORDER,
    peyload:data,
    error: '',
  };
};
export const fetchOrderErrorState = (error: string): FetchOrderErrorState => {
  return {
    type: OrderActionTypes.FETCH_ERROR_ORDER,
    error,
    peyload: null,
  };
};
