import { RootLoadingState } from "../../types";
import { OrderFetchStateType, OrderActionTypes } from "./orderActionTypes";
import { OrderStateprops } from "./orderTypes";

const UserState: OrderStateprops = {
  data: null,
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const orderReducer = (
  state = UserState,
  action: OrderFetchStateType
): OrderStateprops => {
  switch (action.type) {
    case OrderActionTypes.FETCH_LOADING_ORDER:
      return {
        ...state,
        data: null,
        error: "",
        loadingState: RootLoadingState.LOADING,
      };
    case OrderActionTypes.FETCH_LOADED_ORDER:
      localStorage.removeItem("addToCard");
      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADED,
      };
    case OrderActionTypes.FETCH_ERROR_ORDER:
      return {
        ...state,
        data: null,
        error: action.error,
        loadingState: RootLoadingState.ERROR,
      };

    default:
      return {
        ...state,
      };
  }
};
