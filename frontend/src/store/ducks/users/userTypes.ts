import { RootLoadingState } from "../../types";

export interface IUserProps {
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  password: string;
  age: number;
  role: "user" | "admin";
  order: string;
  address: {
    city: string;
    region: string;
    state: string;
    country: string;
    street: string;
  };
}

export interface UserStateprops {
  data: IUserProps | null;
  error: string;
  loadingState: RootLoadingState;
}


export type MYOmit<T, K extends keyof T > = {
 [R in  K ]:T[R]
};

