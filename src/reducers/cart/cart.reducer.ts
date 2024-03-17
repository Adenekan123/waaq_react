import { ICart, ICartItem } from "../../types";
import { ICartActions } from "./cart.actions";

export const cart_initial_state: ICart = {
  visible:false,
  loading: false,
  products: [],
  total: 0,
  price: 0,
  type: "offline",
};

export const getCartQtyAndPrice = (
  products: ICartItem[]
): { totalQty: number; totalPrice: number } => {
  return products.reduce(
    (acc, current) => {
      const { product, quantity } = current;
      if(!product) return acc
      return {
        ...acc,
        totalPrice: acc.totalPrice + product.price.curr * quantity,
        totalQty: acc.totalQty + quantity,
      };
    },
    { totalQty: 0, totalPrice: 0 }
  );
};

export const cartReducer = (
  state = cart_initial_state,
  action: ICartActions
): ICart => {
  const { type, payload } = action;
  switch (type) {
    case "carts_pending": {
      return { ...state, loading: true };
    }

    case "addingToCart_pending":
    case "deletingFromCart_pending":
      return { ...state, loading: true };

    case "carts_successful": {
      return { ...state, loading: false, products: payload };
    }

    case "carts_failure":
      return { ...state, loading: false };

    case "addingToCart_successful":
    case "deletingFromCart_successful": {
      return { ...state, loading: false, products: payload };
    }

    case "addingToCart_failure":
    case "deletingFromCart_failure":
      return { ...state, loading: false };

    case "update_cart": {
      const { totalPrice, totalQty } = getCartQtyAndPrice(state.products);
      return { ...state, total: totalQty, price: totalPrice };
    }

    case "reset_cart": {
      return {...cart_initial_state };
    }

    case "toggle_cart": {
      return {...state,visible:!state.visible };
    }

    default:
      return state;
  }
};
