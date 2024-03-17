import { useMutation, useQuery } from "@tanstack/react-query";

import { IProductCard, IUser } from "../../types";
import {
  createUserAccount,
  loginUserAccount,
  logoutUserAccount,
} from "../../API/auth";
import { addToCartItems, getCartItems } from "../../API/cart";

type TUserState = "online" | "offline";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: IUser) => createUserAccount(user),
  });
};
export const useLoginUserAccount = () => {
  return useMutation({
    mutationFn: (credentials: { email: string; password: string }) =>
      loginUserAccount(credentials),
  });
};
export const useLogoutUserAccount = () => {
  return useMutation({
    mutationFn: () => logoutUserAccount(),
  });
};

//CART
export const useGetCartItems = (type: TUserState) => {
  return useQuery({
    queryKey: ["carts", type],
    queryFn: () => getCartItems(type),
  });
};

export const useAddToCartItems = () => {
  return useMutation({
    mutationFn: (value: { type: TUserState; item: IProductCard }) =>
      addToCartItems(value.type, value.item),
  });
};
