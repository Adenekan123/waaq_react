import { IUSerProfile, IUser, IUserAuth } from "../types";
import AxiosInstance from "../lib/axios/config";
import { AxiosError } from "axios";

// sign up user
export const createUserAccount = async (user: IUser) => {
  try {
    const response = await AxiosInstance.post<IUser>(
      `${import.meta.env.VITE_API_BASE_URL}/auth/user/register`,
      user
    );

    if (response.status === 401) throw Error;
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};

// sign in user
export const loginUserAccount = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const newUSer = await AxiosInstance.post<IUserAuth>(
      `${import.meta.env.VITE_API_BASE_URL}/auth/user/login`,
      credentials
    );
    if (newUSer.status && newUSer.data?.accesToken) storeUser(newUSer.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};

export const storeUser = async (user: IUserAuth) => {
  const stringifiedUser = JSON.stringify(user);
  localStorage.setItem(
    import.meta.env.VITE_AUTH_KEY as string,
    stringifiedUser
  );

  return true;
};
export const removeUser = () => {
  const response = localStorage.removeItem(
    import.meta.env.VITE_AUTH_KEY as string
  );

  return Boolean(response);
};

// logout user
export const logoutUserAccount = async () => {
  try {
    const response = await AxiosInstance.post<{ message: string }>(
      `${import.meta.env.VITE_API_BASE_URL}/auth/user/logout`
    );
    if (response.status === 500 || response.status === 401) throw Error;
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};

// check auth user
export const checkAuthUser = () => {
  const stringifiedUser = localStorage.getItem(
    import.meta.env.VITE_AUTH_KEY as string
  ) as string;
  if (!stringifiedUser) return null;
  const user: IUserAuth = JSON.parse(stringifiedUser);
  return user;
};
export const updateAuthUser = (profile: IUSerProfile) => {
  const stringifiedUser = localStorage.getItem(
    import.meta.env.VITE_AUTH_KEY as string
  ) as string;
  if (!stringifiedUser) return null;

  const user: IUserAuth = JSON.parse(stringifiedUser);
  const updatedUser = { ...user, user: profile };
  return storeUser(updatedUser);
};
