import { AxiosError } from "axios";
import AxiosInstance from "../lib/axios/config";
import { IOrderItemsState, IorderItems } from "../types";

export const getOrderItems = async (type?: IOrderItemsState) => {
  const lastPath = type ? `/${type}` : null;
  try {
    return await AxiosInstance.get<IorderItems[]>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/order${lastPath}`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
