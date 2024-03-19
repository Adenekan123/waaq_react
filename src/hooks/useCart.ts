"use client";

import { useCallback, useEffect, useState } from "react";
import { ICart, ICartItem, IProduct, TUserState } from "../types";
import {
  useAddToCartItems,
  useGetCartItems,
  useRemoveFromCartItems,
} from "../lib/react-query/queriesAndMutations";

const inistial_cart_state: ICart = {
  visible: false,
  items: [],
  totalQty: 0,
  totalPrice: 0,
  type: "offline",
};

export const useCart = (type: TUserState) => {
  const [state, setState] = useState(inistial_cart_state);

  const { data: cartsData, isLoading: cartsLoading } = useGetCartItems(type);

  const { mutateAsync: addToCartAsync, isPending: addingToCart } =
    useAddToCartItems();

  const { mutateAsync: removeFromCartAsync, isPending: removingFromCart } =
    useRemoveFromCartItems();

  const updateCartItems = useCallback((items: ICartItem[]) => {
    setState((previousState) => ({
      ...previousState,
      items,
    }));
  }, []);

  const add = useCallback(
    async (item: IProduct, quantity?: number) => {
      const newCartItems = await addToCartAsync({
        type,
        item,
        quantity,
      });

      if (newCartItems && newCartItems.carts.length) {
        updateCartItems(newCartItems.carts);
      }
    },
    [addToCartAsync, type, updateCartItems]
  );
  const remove = useCallback(
    async (cartid: string) => {
      const newCartItems = await removeFromCartAsync({ type, cartid });
      if (newCartItems && newCartItems) {
        updateCartItems(newCartItems.carts);
      }
    },
    [removeFromCartAsync, type, updateCartItems]
  );

  const toggleCart = useCallback(() => {
    setState((previousState) => ({
      ...previousState,
      visible: !previousState.visible,
    }));
  }, []);

  const emptycart = () => {
    if (type === "offline")
      localStorage.removeItem(import.meta.env.VITE_CART_KEY as string);
    updateCartItems([]);
  };

  const getCartQtyAndPrice = useCallback(
    (products: ICartItem[]): { totalQty: number; totalPrice: number } => {
      return products.reduce(
        (acc, current) => {
          const { product, quantity } = current;
          if (!product) return acc;
          return {
            ...acc,
            totalPrice: acc.totalPrice + product.price.curr * quantity,
            totalQty: acc.totalQty + quantity,
          };
        },
        { totalQty: 0, totalPrice: 0 }
      );
    },
    []
  );
  useEffect(() => {
    if (cartsData && Array.isArray(cartsData)) {
      setState((prev) => ({
        ...prev,
        items: cartsData,
      }));
    }
  }, [cartsData]);

  useEffect(() => {
    const { totalPrice, totalQty } = getCartQtyAndPrice(state.items);
    setState((prev) => ({
      ...prev,
      totalPrice,
      totalQty,
    }));
  }, [state.items, getCartQtyAndPrice]);

  return {
    state,
    cartsLoading,
    updateCartItems,
    toggleCart,
    addToCart: { add, addingToCart },
    removeFromCart: { remove, removingFromCart },
    emptycart,
  };
};
