import {  IProductSelect, RootLoadingState } from "../../../types";

export interface IProductSelectProps {
  data: {status:string,result:IProductSelect[],count:number,_id:string} ;
  loadingState: RootLoadingState;
  error: string;
}
