import { FetchErrorState, FetchLoadedState, FetchLoadingState, DetailsActionTypes } from "./detailsActionTypes";
import { IDetailsState } from "./detailsTypes";
export const fetchLoadingDetails = (text:string): FetchLoadingState => ({
  type: DetailsActionTypes.FETCH_LOADING_DETAILS,
  peyload:text,
  error: "",
});
export const fetchInDetails = (
  data: IDetailsState
): FetchLoadedState => ({
  type: DetailsActionTypes.FETCH_LOADED_DETAILS,
  peyload: data,
  error:''
});
export const fetchErrorDetails = (error: string): FetchErrorState => ({
  type:DetailsActionTypes.FETCH_ERROR_DETAILS,
  error,
  peyload:[]
});
