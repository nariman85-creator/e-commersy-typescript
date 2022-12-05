import {
  CustomReducerStateValue,
  ICustomReducerProps,
} from "../pages/Category/CatalogCustomTypes";

export const reducer = (
  state: ICustomReducerProps,
  action: {
    type: CustomReducerStateValue;
    peyload: any;
  }
) => {
  let peyloadValue: string = "";

  if (typeof action.peyload !== "object") {
    console.log(action.peyload);

    const separator = (action.peyload as string).indexOf("=");
    peyloadValue = (action.peyload as string).substring(separator + 1);
  }
  switch (action.type) {
    case CustomReducerStateValue.BRANDS:
      return {
        ...state,
        brands: peyloadValue,
      };
    case CustomReducerStateValue.APPAREL:
      return {
        ...state,
        clothes: peyloadValue,
      };

    case CustomReducerStateValue.COLORS:
      return {
        ...state,
        colors: peyloadValue,
      };
    case CustomReducerStateValue.MATERIALS:
      return {
        ...state,
        material: peyloadValue,
      };
    case CustomReducerStateValue.SIZE:
      return {
        ...state,
        size: peyloadValue,
      };
    case CustomReducerStateValue.PRICE:
      return {
        ...state,
        price: { ...action.peyload },
      };

    default:
      return { ...state };
  }
};
