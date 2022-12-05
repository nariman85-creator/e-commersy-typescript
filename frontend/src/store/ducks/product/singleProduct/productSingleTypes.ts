import {  RootLoadingState } from "../../../types";

export interface IProductSingleProps<T> {
  data: T |null;
  loadingState: RootLoadingState;
  error: string;
}
