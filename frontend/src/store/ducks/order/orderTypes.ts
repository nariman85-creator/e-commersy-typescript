import { RootLoadingState } from "../../types";

export interface IOrderProps {
  productItems: string[];
  userInfo: {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
    address: {
      city: string;
      state: string;
      country: string;
      street: string;
      zipCode: string;
    };
  };
  shippingMethod: { [key: string]: string } | undefined;
  payment: {
    paymantMethod: { [key: string]: string } | undefined;
  };
};


export interface OrderStateprops {
  data: {status:string} | null;
  error: string;
  loadingState: RootLoadingState;
}

export type MYOmit<T, K extends keyof T> = {
  [R in K]: T[R];
};
