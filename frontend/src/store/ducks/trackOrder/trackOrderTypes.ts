import { RootLoadingState } from "../../types";

export interface MyOrderProps {
  status: string;
  data: {
    _id: {orderId:string};
    createdAt: string;
    isDelivered: boolean;
  }[];
}

export interface OrderStateProps {
  data: MyOrderProps|null;
  error: string;
  loadingState: RootLoadingState;
}

export type MYOmit<T, K extends keyof T> = {
  [R in K]: T[R];
};
