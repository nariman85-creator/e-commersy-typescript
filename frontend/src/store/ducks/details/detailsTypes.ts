import { RootLoadingState } from "../../types";
export interface IDetailsProps {
  details: { name: string; catalog: string[] }[];
  price: number[];
  color:string[]
}

export interface IDetailsState {
  data: IDetailsProps[] | [];
  error: string | undefined;
  loadingState: RootLoadingState;
}
