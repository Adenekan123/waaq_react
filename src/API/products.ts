import { AxiosError } from "axios";
import AxiosInstance from "../lib/axios/config";
import { IFilterCriteria, IProduct, IProductFilter } from "../types";

export const getSingle = async (productid: string) => {
  try {
    return await AxiosInstance.get<IProduct>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/products/${productid}`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const getFiltered = async (filterObject: IProductFilter) => {
  try {
    return await AxiosInstance.post<IProduct[]>(
      `${import.meta.env.VITE_API_BASE_URL}/product/filter`,
      filterObject
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const getBeginners = async () => {
  try {
    return await AxiosInstance.get<IProduct[]>(
      `${import.meta.env.VITE_API_BASE_URL}/product/beginners`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const getEducational = async () => {
  try {
    return await AxiosInstance.get<IProduct[]>(
      `${import.meta.env.VITE_API_BASE_URL}/product/education_kits`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const getMostLoved = async () => {
  try {
    return await AxiosInstance.get<IProduct[]>(
      `${import.meta.env.VITE_API_BASE_URL}/product/mostloved_kits`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const getSkills = async () => {
  try {
    return await AxiosInstance.get<IFilterCriteria[]>(
      `${import.meta.env.VITE_API_BASE_URL}/product/skills`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const getCategories = async () => {
  try {
    return await AxiosInstance.get<IFilterCriteria[]>(
      `${import.meta.env.VITE_API_BASE_URL}/product/categories`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
