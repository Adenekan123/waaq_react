export const cartActions: cartAction_types = {
  carts_pending: "CART/FETCHING_CART_PENDING",
  carts_successful: "CART/FETCHING_CART_SUCCESSFUL",
  carts_failure: "CART/FETCHING_CART_FAILURE",

  addingToCart_pending: "CART/ADDING_TO_CART_PENDING",
  addingToCart_successful: "CART/ADDING_TO_CART_SUCCESSFUL",
  addingToCart_failure: "CART/ADDING_TO_CART_FAILURE",

  deletingFromCart_pending: "CART/DELETEING_FROM_CART_PENDING",
  deletingFromCart_successful: "CART/DELETEING_FROM_CART_SUCCESSFUL",
  deletingFromCart_failure: "CART/DELETEING_FROM_CART_FAILURE",

  update_cart:"CART/UPDATE_CART",
  reset_cart:"CART/RESET_CART",
  toggle_cart:"CART/TOGGLE_CART"
};

export interface cartAction_types {
  carts_pending: string;
  carts_successful: string;
  carts_failure: string;

  addingToCart_pending: string;
  addingToCart_successful: string;
  addingToCart_failure: string;

  deletingFromCart_pending: string;
  deletingFromCart_successful: string;
  deletingFromCart_failure: string;

  update_cart:string;

  reset_cart:string;

  toggle_cart:string;

}

export interface ICartActions {
  payload?: any;
  type: keyof cartAction_types;
}
