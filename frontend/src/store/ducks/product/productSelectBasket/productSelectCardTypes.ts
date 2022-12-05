import { IProductSelect, RootLoadingState } from "../../../types";

export interface IProductCardProps {
  data: {
    status: string;
    result: IProductSelect[];
    count: number;
  };
  loadingState: RootLoadingState;
  error: string;
}
