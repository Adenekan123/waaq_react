"use client";
import { ProductRating } from "./product-rating";
import { ICartItem, IProduct } from "../../types";
import { Link } from "react-router-dom";
import { CustomButton } from "../ui";
import { Body, Heading } from "../typography";
import { useCartContext } from "../../contexts";
import { checkAuthUser } from "../../API/auth";

export const ProductCard = ({
  _id,
  images,
  name,
  tag,
  price,
  ratings,
}: IProduct) => {
  const session = checkAuthUser();
  const { addToCart, state } = useCartContext();

  const { curr, prev, discount } = price;

  const itemInCart = (productid: string) => {
    if (!state || !state.items) return;
    return state.items.find((cart: ICartItem) => {
      if (cart.product && cart.product._id)
        return (cart.product._id as string) === productid;
    });
  };

  const itemincart = itemInCart(_id as string);
  return (
    <div
      id={`${name.replace(" ", "")}${_id}`}
      className="relative  border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 h-full"
    >
      <Link to={`/product/${_id}`}>
        <img
          src={`${import.meta.env.VITE_IMAGE_HOST}/${images[0]}`}
          alt="mrsk"
          className="h-72 w-full object-cover"
        />
      </Link>
      <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-3xl border border-orange-500 text-orange-500">
        {tag}
      </div>
      <div
        className={`flex flex-col gap-4 p-6 card-body h-${
          session?.user ? "56" : "52"
        } justify-between  border`}
      >
        <div className="flex justify-between items-center gap-3">
          <Heading type={4} title={name} styles="text-orange-500" />
          <div className="basis-5/12 mb-auto relative top-1">
            <ProductRating ratings={ratings} />
          </div>
        </div>
        {session?.user ? (
          <div className="flex gap-3 items-center justify-between leading-none">
            <div className="flex gap-3 items-center">
              <Body type={1} title={`${curr}`} styles="font-bold" hasEntity />
              <Body
                title={`${prev}`}
                type={0.5}
                hasEntity
                styles="text-slate-700 relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-slate-700 "
              />
            </div>

            <Body title={`${discount}% off`} type={0.5} styles="text-red-500" />
          </div>
        ) : (
          ""
        )}

        <CustomButton
          title={
            itemincart ? `Add to cart (${itemincart.quantity})` : "Add to cart"
          }
          styles="w-full font-bold shadow-lg"
          gradient={
            itemincart
              ? "from-green-400 to-green-600"
              : "from-red-500 to-orange-500"
          }
          whenClicked={() => {
            addToCart.add(
              {
                _id,
                images,
                name,
                tag,
                price,
                ratings,
              } as IProduct,
              itemincart ? itemincart?.quantity + 1 : 1
            );
          }}
        />
      </div>
    </div>
  );
};
