import { IProduct, RootLoadingState } from "../../types";

export interface IProductProps {
  data: IProduct[];
  loadingState: RootLoadingState;
  error: string;
}