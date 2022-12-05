import { RootLoadingState } from "../../types";
import { IProductProps } from "./productTypes";

export const productState: IProductProps = {
 data: [],
 loadingState: RootLoadingState.NEVER,
 error:''
};