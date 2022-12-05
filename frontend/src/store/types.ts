export enum RootLoadingState {
  LOADING = "LOADING",
  NEVER = "NEVER",
  LOADED = "LOADED",
  ERROR = "ERROR",
}
export interface IProduct {
  name: string;
  description: string;
  catalog: string;
  price: number;
  size: string;
  sku: string;
  currency: string;
  quantity: number;
  rating: number;
  imageUrl: string;
  sexField: string;
  sale: number;
}
export interface ICatalogProps {
  name: string;
  _id: string;
  catalog: { _id: string; name: string }[];

}
export interface ICatalogSelectDetailProps {
  data: {
    catalog: ICatalogProps[];
    colors: string[],
    size: string[];
    material: string[];
    brand:string[]
  };
}
export interface ICategoryProps{
  _id: string;
  name: string;
}

export interface IProductSelect {
 _id: string;
  manufact_details: {
    desc: string;
    feature: string;
    property: { specificity: string; charcter: string; parametr: string };
    care: {
      wash: string;
      ironing: string;
      laundry_detergent: string;
      tumble_dry: string;
    };
  };
  product_details: {
    price: number;
    size: string[];
    colors: string[];
    currency: string;
    gender: string
    quantity: number;
    imageUrl: string;
    title: string;
    description: string;
    rating: number;
    brand:string;
    material: string;
    sale: number;
    createdAt: Date;
  };
  name: string;
}