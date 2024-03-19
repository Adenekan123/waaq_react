"use client";

import { checkAuthUser } from "../API/auth";
import { useCart } from "../hooks";
import { ReactNode, createContext, useContext } from "react";
import { ICart, ICartItem, IProduct } from "../types";

interface IContextType {
  state: ICart;
  cartsLoading: boolean;
  updateCartItems: (v: ICartItem[]) => void;
  toggleCart: () => void;
  addToCart: {
    addingToCart: boolean;
    add: (item: IProduct, quantity?: number) => Promise<void>;
  };
  removeFromCart: {
    removingFromCart: boolean;
    remove: (cartid: string) => Promise<void>;
  };
  emptycart: () => void;
}

const initial_context: IContextType = {
  state: {
    visible: false,
    items: [],
    totalQty: 0,
    totalPrice: 0,
    type: "offline",
  },
  cartsLoading: false,
  updateCartItems: (v: ICartItem[]) => {
    v;
  },
  toggleCart: () => {},
  addToCart: {
    addingToCart: false,
    add: async (v: IProduct, quantity?: number) => {
      v;
      quantity;
    },
  },
  removeFromCart: {
    removingFromCart: false,
    remove: async (v: string) => {
      v;
    },
  },
  emptycart: () => {},
};

export const CartContext = createContext(initial_context);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const session = checkAuthUser();
  const {
    state,
    cartsLoading,
    updateCartItems,
    toggleCart,
    addToCart,
    removeFromCart,
    emptycart,
  } = useCart(session?.user ? "online" : "offline");

  const value = {
    state,
    cartsLoading,
    updateCartItems,
    toggleCart,
    addToCart,
    removeFromCart,
    emptycart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to consume the cart context
export const useCartContext = () => {
  return useContext(CartContext);
};
