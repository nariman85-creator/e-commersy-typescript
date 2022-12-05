import { Action } from "redux";
import { IDetailsState } from "./detailsTypes";


export enum DetailsActionTypes {
  FETCH_LOADING_DETAILS = "details/FETCH_LOADING_DETAILS",
  FETCH_LOADED_DETAILS = "details/FETCH_LOADED_DETAILS",
  FETCH_ERROR_DETAILS = "details/FETCH_ERROR_DETAILS",
}


export interface FetchLoadingState extends Action<DetailsActionTypes> {
  type: DetailsActionTypes.FETCH_LOADING_DETAILS;
  peyload: string;
  error: "";
}
export interface FetchLoadedState extends Action<DetailsActionTypes> {
  type: DetailsActionTypes.FETCH_LOADED_DETAILS;
  peyload: IDetailsState;
  error: "";
}
export interface FetchErrorState extends Action<DetailsActionTypes> {
  type: DetailsActionTypes.FETCH_ERROR_DETAILS;
  error: string;
  peyload: [];
}

export type DetailsActionStateType =
  | FetchLoadedState
  | FetchLoadingState
  | FetchErrorState;
