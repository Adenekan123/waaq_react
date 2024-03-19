"use client";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { ICartItem } from "../../../../types";
import { Body, Heading } from "../../../typography";
import { useCartContext } from "../../../../contexts";

const CartItem = (item: ICartItem) => {
  const { addToCart, removeFromCart } = useCartContext();
  const { quantity, product } = item;
  return (
    <div className="flex gap-6 bg-orange-100 p-3 rounded-md">
      <div className="product-image border rounded-lg h-32 w-32">
        <img
          src={`${import.meta.env.VITE_IMAGE_HOST}/${
            product && product.images ? product.images[0] : ""
          }`}
          width={"100%"}
          height={"100%"}
          alt={product?.name}
        />
      </div>
      <div>
        <Heading title={product?.name} type={4} />
        <div className="inline-flex my-4">
          <div
            className={`w-6 h-6 border bg-white border-blue-600 ${
              quantity == 1 ? " opacity-50" : "opacity-100 "
            } text-blue-600 inline-flex items-center justify-center cursor-pointer`}
            onClick={() =>
              quantity != 1 ? addToCart.add(product, quantity - 1) : false
            }
          >
            <FaMinus size={8} />
          </div>
          <div className="w-6 h-6 border bg-white border-r-0 border-l-0 border-blue-600 text-blue-700 inline-flex items-center justify-center">
            {quantity}
          </div>
          <div
            className="w-6 h-6 border bg-white border-blue-600 text-blue-600 inline-flex items-center justify-center cursor-pointer"
            onClick={() => addToCart.add(product, item.quantity + 1)}
          >
            <FaPlus size={8} />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h2 className={`text-md md:text-lg font-bold`}>
            &#8358; {product?.price?.curr}
          </h2>
          <Body
            title={`${product?.price?.prev}`}
            type={0.5}
            hasEntity
            styles="text-slate-700 relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-slate-700 "
          />
        </div>
      </div>
      <button
        className=" bg-transparent border-0 outline-0 ml-auto mb-auto"
        onClick={() => removeFromCart.remove(product._id as string)}
      >
        <CgClose size={18} />
      </button>
    </div>
  );
};

export default CartItem;
