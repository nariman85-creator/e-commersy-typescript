
export interface ICustomReducerProps {
  colors: string;
  brands: string;
  material: string;
  size: string;
  clothes: string;
  price: {
    minPrice: string,
    maxPrice:string
  }
}
export enum CustomReducerStateValue {
  BRANDS = "brand",
  APPAREL = "clothes",
  COLORS = "colors",
  MATERIALS = "material",
  SIZE = "size",
  PRICE="price"
}
