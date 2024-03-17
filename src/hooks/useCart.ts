"use client";

import { useCallback, useEffect, useState } from "react";
import { ICart, ICartItem } from "../types";
import { useGetCartItems } from "../lib/react-query/queriesAndMutations";

const inistial_cart_state: ICart = {
  visible: false,
  items: [],
  totalQty: 0,
  totalPrice: 0,
  type: "offline",
};

export const useCart = (type: "online" | "offline") => {
  const [state, setState] = useState(inistial_cart_state);
  const { data: cartsData, isLoading: cartsLoading } = useGetCartItems(type);

  const toggleCart = useCallback(() => {
    setState((previousState) => ({
      ...previousState,
      visible: !previousState.visible,
    }));
  }, []);
  const updateCartItems = useCallback((items: ICartItem[]) => {
    setState((previousState) => ({
      ...previousState,
      items,
    }));
  }, []);

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
      const { totalPrice, totalQty } = getCartQtyAndPrice(cartsData);
      setState((prev) => ({
        ...prev,
        items: cartsData,
        totalPrice,
        totalQty,
      }));
    }
  }, [cartsData, getCartQtyAndPrice]);

  return {
    state,
    cartsLoading,
    updateCartItems,
    toggleCart,
  };
};
