import { RootLoadingState } from "../../../../types";


export enum UserSignInActionTypes {
  User__SignIn__Loading = "User__SignIn__Loading/signin",
  User__SignIn__Loaded = "User__SignIn__Loaded/signin",
  User__SignIn__ERROR = "User__SignIn__ERROR/signin",
}
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

export interface UserSignInStateProps {
  data: { data: IUserProps | null ,status:string,token:string}|null;
  error: string;
  loadingState: RootLoadingState;
}


export type MYOmit<T, K extends keyof T > = {
 [R in  K ]:T[R]
};

