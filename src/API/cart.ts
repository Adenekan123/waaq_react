import { AxiosError } from "axios";
import AxiosInstance from "../lib/axios/config";
import {
  ICartItem,
  IOrderItem,
  IProduct,
  IVisitor,
  IVisitorOrder,
} from "../types";

type ICartOrders = { orders: IOrderItem[]; totalamount: number };

// CART
export const getCartItems = async (type: "online" | "offline") => {
  if (type === "offline") {
    return await Promise.resolve(getcarts_local() || []);
  }
  try {
    return await AxiosInstance.get<ICartItem[]>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/cart`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};

export const addToCartItems = async (
  type: "online" | "offline",
  item: IProduct,
  quantity?: number
) => {
  if (type === "offline") {
    return await Promise.resolve(addtocart_local(item, quantity));
  }
  try {
    return await AxiosInstance.post<{ message: string; carts: ICartItem[] }>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/cart`,
      { productid: item?._id, quantity: quantity }
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
export const removeFromCartItems = async (
  type: "online" | "offline",
  cartid: string
) => {
  if (type === "offline") {
    return await Promise.resolve(removefromcart_local(cartid));
  }
  try {
    return await AxiosInstance.delete<{ message: string; carts: ICartItem[] }>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/cart?cartid=${cartid}`
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
const reduceCartToOrderItems = (items: ICartItem[]): ICartOrders => {
  let totalamount = 0;
  const orders = items.reduce((acc: IOrderItem[], curr: ICartItem) => {
    const {
      quantity,
      product: { price, _id },
    } = curr;
    totalamount += price.curr * quantity;
    return [...acc, { productid: _id, quantity }] as IOrderItem[];
  }, []);

  return { orders, totalamount };
};

export const checkoutCartItems = async (list: ICartItem[]) => {
  const { orders: items, totalamount } = reduceCartToOrderItems(list);
  try {
    return await AxiosInstance.post<{ message: string; orders: IOrderItem[] }>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/order`,
      { items, totalamount }
    ).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};

//CART LOCAL
const addtocart_local = (product: IProduct, quantity?: number) => {
  const carts = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_CART_KEY as string) as string
  ) as ICartItem[];

  if (carts) {
    const cartExist = carts.some(
      (cart) => String(cart?.productid) === product?._id
    );
    if (cartExist) {
      const newcarts = carts.map((cart) =>
        String(cart.productid) === String(product._id)
          ? {
              ...cart,
              quantity: quantity ? quantity : 1,
            }
          : cart
      );
      localStorage.setItem(
        import.meta.env.VITE_CART_KEY as string,
        JSON.stringify(newcarts)
      );
      return { message: "Item updated", carts: newcarts };
    } else {
      const newcarts = [productToCart(product, carts.length + 1), ...carts];
      localStorage.setItem(
        import.meta.env.VITE_CART_KEY as string,
        JSON.stringify(newcarts)
      );
      return { message: "Item added", carts: newcarts };
    }
  } else {
    localStorage.setItem(
      import.meta.env.VITE_CART_KEY as string,
      JSON.stringify([productToCart(product, 1)])
    );
    return { message: "Item added", carts: [productToCart(product, 1)] };
  }
};

const removefromcart_local = (cartid: string | number) => {
  const carts = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_CART_KEY as string) as string
  ) as ICartItem[];
  const cartExist = carts.some((cart) => cart.productid === cartid);
  if (cartExist) {
    const newcarts = carts.filter((cart) => cart.productid !== cartid);
    localStorage.setItem(
      import.meta.env.VITE_CART_KEY as string,
      JSON.stringify(newcarts)
    );
    return { message: "Item deleted successfully", carts: newcarts };
  }
};

const getcarts_local = () => {
  const carts = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_CART_KEY as string) as string
  ) as ICartItem[];

  if (carts) return carts;
};

function productToCart(product: IProduct, cartid: number) {
  return {
    id: cartid,
    productid: product._id,
    quantity: 1,
    product: product,
  } as ICartItem;
}

export const checkoutVisitorCartItems = async (
  visitor: IVisitor,
  list: ICartItem[]
) => {
  const { orders: items, totalamount } = reduceCartToOrderItems(list);

  const checkFields = Object.keys(visitor).some(
    (field) => visitor[field as keyof IVisitor]
  );

  try {
    if (!checkFields) throw Error("Please enter all fields");
    return await AxiosInstance.post<{
      message: string;
      orders: IVisitorOrder[];
    }>(`${import.meta.env.VITE_API_BASE_URL}/order`, {
      user: visitor,
      orderitems: { items, totalamount },
    }).then((res) => res.data);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.reject(error.response?.data);
  }
};
