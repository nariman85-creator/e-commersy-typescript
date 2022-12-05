import { RootLoadingState } from "../../../types";
import {
  OrderFetchStateType,
  UserOrderActionTypes,
} from "../../trackOrder/trackOrderActionTypes";
import { OrderStateProps } from "../../trackOrder/trackOrderTypes";

const UserOrderState: OrderStateProps = {
  data: null,
  error: "",
  loadingState: RootLoadingState.NEVER,
};

export const userOrderReducer = (
  state = UserOrderState,
  action: OrderFetchStateType
): OrderStateProps => {
  switch (action.type) {
    case UserOrderActionTypes.FETCH_LOADING_USER_ORDER:
      return {
        ...state,
        data: null,
        error: "",
        loadingState: RootLoadingState.LOADING,
      };
    case UserOrderActionTypes.FETCH_LOADED_USER_ORDER:
      return {
        ...state,
        data: action.peyload,
        error: "",
        loadingState: RootLoadingState.LOADED,
      };
    case UserOrderActionTypes.FETCH_ERROR_USER_ORDER:
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
