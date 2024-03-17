"use client";

import { checkAuthUser } from "../API/auth";
import { useCart } from "../hooks";
// import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext } from "react";
import { ICart, ICartItem } from "../types";

interface IContextType {
  state: ICart;
  cartsLoading: boolean;
  updateCartItems: (v: ICartItem[]) => void;
  toggleCart: () => void;
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
};

export const CartContext = createContext(initial_context);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const session = checkAuthUser();
  const { state, cartsLoading, updateCartItems, toggleCart } = useCart(
    session?.user ? "online" : "offline"
  );

  const value = { state, cartsLoading, updateCartItems, toggleCart };
  

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to consume the cart context
export const useCartContext = () => {
  return useContext(CartContext);
};
