import { AxiosResponse } from "axios";
import { axios } from "../core/axios";
import { ICatalogProps, ICategoryProps, IProductSelect } from "../store/types";
import { IProductProps } from "../store/ducks/product/productTypes";
import { IProduct } from "../store/types";
import { IDetailsState } from "../store/ducks/details/detailsTypes";
import { IProductSelectProps } from "../store/ducks/product/productSelect/productSelectTypes";
import { IUserProps } from "../store/ducks/users/userTypes";
import { localStorageGetItem } from "../utils/helpers";
import { IProductCardProps } from "../store/ducks/product/productSelectBasket/productSelectCardTypes";
import { MyOrderProps } from "../store/ducks/trackOrder/trackOrderTypes";
export interface IAxiosGetProps<T = any> {
  status?: string;
  data: T;
  message?: string;
}
export const getProducts = (): Promise<IProductProps["data"]> => {
  return axios
    .get("http://localhost:5002/api/products")
    .then(({ data }: AxiosResponse<IAxiosGetProps<IProduct[]>>) => {
      return data.data;
    });
};
export const getSelectProducts = (
  queryString: string
): Promise<IAxiosGetProps<IProductSelectProps["data"]>> => {
  return axios
    .get(`http://localhost:5002/api/products/${queryString}`)
    .then(
      ({
        data,
      }: AxiosResponse<IAxiosGetProps<IProductSelectProps["data"]>>) => {
        return data;
      }
    );
};

export const getProductCategoryAndCatalog = (
  peyload: string
): Promise<ICatalogProps[]> => {
  return axios
    .get(`http://localhost:5002/api/products/catalog/${peyload}`)
    .then(({ data }: AxiosResponse<IAxiosGetProps<ICatalogProps[]>>) => {
      return data.data;
    });
};
export const getCategoryAll = (): Promise<ICategoryProps[]> => {
  return axios
    .get(`http://localhost:5002/api/products/category/all`)
    .then(({ data }: AxiosResponse<IAxiosGetProps<ICategoryProps[]>>) => {
      return data.data;
    });
};

export const getUser = () => {
  return axios
    .get("http://localhost:5002/api/users")
    .then(({ data }: AxiosResponse<IAxiosGetProps<IUserProps>>) => {
      return data.data;
    });
};
export const getDetails = (peyload: string): Promise<IDetailsState> => {
  return axios
    .get(`http://localhost:5002/api/products/catalog/details/${peyload}`)
    .then(({ data }: AxiosResponse<IAxiosGetProps<IDetailsState>>) => {
      return data.data;
    });
};
export const getSingleProducts = (id: string) => {
  return axios
    .get(`http://localhost:5002/api/products/single-product?product_id=${id}`)
    .then(({ data }: AxiosResponse<IAxiosGetProps<IProductSelect>>) => {
      return data;
    });
};
export const userAuthSignIn = (data: any) => {
  return axios
    .post(
      `http://localhost:5002/api/users/auth/signin`,
      { data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(({ data }: AxiosResponse<IAxiosGetProps<IUserProps>>) => {
      return data;
    });
};
export const userAuthSignUp = (data: any) => {
  return axios
    .post(
      "http://localhost:5002/api/users/auth/signup",
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(({ data }: AxiosResponse<IAxiosGetProps<IUserProps>>) => {
      return data;
    });
};

export const cardProductGet = (
  data: string[]
): Promise<AxiosResponse<IAxiosGetProps<IProductCardProps>>> => {
  return axios
    .post(
      "http://localhost:5002/api/products/card",
      { search_products: data },
      {
        headers: {
          token: localStorageGetItem("user").token,
        },
      }
    )
    .then(({ data }) => {
      return data;
    });
};
export const getAddOrders = async (
  peyload: string
): Promise<IAxiosGetProps<{ status: string }>> => {
  return await axios
    .get(`http://localhost:5002/api/products/orders?${peyload}`)
    .then(({ data }: AxiosResponse<IAxiosGetProps<{ status: string }>>) => {
      return data;
    });
};
export const getUserOrders = async (
  peyload: string
): Promise<IAxiosGetProps<MyOrderProps>> => {
  return await axios
    .post(`http://localhost:5002/api/products/orders?search__id=${peyload}`)
    .then(({data}: AxiosResponse<IAxiosGetProps<MyOrderProps>>) => {
      return data;
    });
};
export const getUserTrackOrders = async (
  peyload: string
): Promise<IAxiosGetProps<MyOrderProps>> => {
  return await axios
    .post(`http://localhost:5002/api/products/track--orders?search__id=${peyload}`)
    .then(({ data }: AxiosResponse<IAxiosGetProps<MyOrderProps>>) => {
      return data;
    });
};
