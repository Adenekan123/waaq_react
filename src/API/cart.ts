import AxiosInstance from "../lib/axios/config";
import { ICartItem, IProductCard } from "../types";

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
    console.log(e);
    return Promise.reject(e);
  }
};
export const addToCartItems = async (
  type: "online" | "offline",
  item: IProductCard
) => {
  if (type === "offline") {
    return await Promise.resolve(addtocart_local(item));
  }
  try {
    return await AxiosInstance.post<{ message: string; carts: ICartItem[] }>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/cart`,
      item
    );
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
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
    return await AxiosInstance.delete<ICartItem[]>(
      `${import.meta.env.VITE_API_PARTNER_BASE_URL}/cart?cartid=${cartid}`
    );
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

//CART LOCAL
const addtocart_local = (product: IProductCard) => {
  const carts = JSON.parse(
    localStorage.getItem(import.meta.env.LOCAL_CART_KEY as string) as string
  ) as ICartItem[];

  if (carts) {
    const cartExist = carts.some(
      (cart) => String(cart?.productid) === product?._id
    );
    if (cartExist) {
      const newcarts = carts.map((cart) =>
        String(cart.productid) === String(product._id)
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
      localStorage.setItem(
        import.meta.env.LOCAL_CART_KEY as string,
        JSON.stringify(newcarts)
      );
      return { message: "Item updated", carts: newcarts };
    } else {
      const newcarts = [productToCart(product, carts.length + 1), ...carts];
      localStorage.setItem(
        import.meta.env.LOCAL_CART_KEY as string,
        JSON.stringify(newcarts)
      );
      return { message: "Item added", carts: newcarts };
    }
  } else {
    localStorage.setItem(
      import.meta.env.LOCAL_CART_KEY as string,
      JSON.stringify([productToCart(product, 1)])
    );
    return { message: "Item added", carts: [productToCart(product, 1)] };
  }
};

const removefromcart_local = (cartid: string | number) => {
  const carts = JSON.parse(
    localStorage.getItem(import.meta.env.LOCAL_CART_KEY as string) as string
  ) as ICartItem[];
  const cartExist = carts.some((cart) => cart.productid === cartid);
  if (cartExist) {
    const newcarts = carts.filter((cart) => cart.productid !== cartid);
    localStorage.setItem(
      import.meta.env.LOCAL_CART_KEY as string,
      JSON.stringify(newcarts)
    );
    return { message: "Item deleted successfully", carts: newcarts };
  }
};

const getcarts_local = () => {
  const carts = JSON.parse(
    localStorage.getItem(import.meta.env.LOCAL_CART_KEY as string) as string
  ) as ICartItem[];

  if (carts) return carts;
};

function productToCart(product: IProductCard, cartid: number) {
  return {
    id: cartid,
    productid: product._id,
    quantity: 1,
    product: product,
  } as ICartItem;
}
