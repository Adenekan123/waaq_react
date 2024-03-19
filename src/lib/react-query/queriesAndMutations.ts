import { useMutation, useQuery } from "@tanstack/react-query";

import {
  ICartItem,
  IProduct,
  IProductFilter,
  IUser,
  IVisitor,
  TUserState,
} from "../../types";
import {
  createUserAccount,
  loginUserAccount,
  logoutUserAccount,
} from "../../API/auth";
import {
  addToCartItems,
  checkoutCartItems,
  checkoutVisitorCartItems,
  getCartItems,
  removeFromCartItems,
} from "../../API/cart";
import {
  getBeginners,
  getCategories,
  getEducational,
  getFiltered,
  getMostLoved,
  getSkills,
} from "../../API/products";

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
    mutationFn: (value: {
      type: TUserState;
      item: IProduct;
      quantity?: number;
    }) => addToCartItems(value.type, value.item, value.quantity),
  });
};
export const useRemoveFromCartItems = () => {
  return useMutation({
    mutationFn: (value: { type: TUserState; cartid: string }) =>
      removeFromCartItems(value.type, value.cartid),
  });
};

export const useCheckoutCartItems = () => {
  return useMutation({
    mutationFn: (items: ICartItem[]) => checkoutCartItems(items),
  });
};
export const useCheckoutVisitorCartItems = () => {
  return useMutation({
    mutationFn: (value: { user: IVisitor; items: ICartItem[] }) =>
    checkoutVisitorCartItems(value.user, value.items),
  });
};

//PRODUCTS
export const useGetFilteredProducts = () => {
  return useMutation({
    mutationFn: (filterObject: IProductFilter) => getFiltered(filterObject),
  });
};
export const useGetBeginnerProducts = () => {
  return useQuery({
    queryKey: ["beginners_product"],
    queryFn: () => getBeginners(),
  });
};
export const useGetEducationalProducts = () => {
  return useQuery({
    queryKey: ["education_product"],
    queryFn: () => getEducational(),
  });
};
export const useGetMostLovedProducts = () => {
  return useQuery({
    queryKey: ["most_loved_product"],
    queryFn: () => getMostLoved(),
  });
};
export const useGetProductSkills = () => {
  return useQuery({
    queryKey: ["product_skills"],
    queryFn: () => getSkills(),
  });
};
export const useGetProductCategories = () => {
  return useQuery({
    queryKey: ["product_categories"],
    queryFn: () => getCategories(),
  });
};
