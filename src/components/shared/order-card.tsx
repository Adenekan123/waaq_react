import { Link } from "react-router-dom";
import { IOrderItem } from "../../types";
import { Body, Heading } from "../typography";
import { ProductRating } from ".";
import { CustomButton } from "../ui";

export const OrderCard = ({orderItem}:{orderItem:IOrderItem}) => {
  const {quantity,productid:product} = orderItem
  const { curr, prev, discount } = product.price;


  return (
    <div
      className="relative  border border-green-100 rounded-3xl overflow-hidden bg-green-50 h-full"
    >
      <Link to={`/product/${product?._id}`}>
        <img
          src={`${import.meta.env.VITE_IMAGE_HOST}/${product.images[0]}`}
          alt="mrsk"
          className="h-72 w-full object-cover"
        />
      </Link>
      <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-3xl border border-orange-500 text-orange-500">
        {product?.tag}
      </div>
      <div
        className={`flex flex-col gap-4 p-6 card-body h-56 justify-between  border`}
      >
        <div className="flex justify-between items-center gap-3">
          <Heading type={4} title={product?.name} styles="text-orange-500" />
          <div className="basis-5/12 mb-auto relative top-1">
            <ProductRating ratings={product?.ratings} />
          </div>
        </div>
          <div className="flex gap-3 items-center leading-none">
            <Body type={1} title={`${curr}`} styles="font-bold" hasEntity />
            <Body
              title={`${prev}`}
              type={0.5}
              hasEntity
              styles="text-slate-700 relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-slate-700 "
            />
            <Body title={`${discount}% off`} type={0.5} styles="text-red-500" />
          </div>
      
        <CustomButton
          title={`${parseFloat(curr as unknown as string).toLocaleString("en",{minimumFractionDigits:2})} X ${quantity}`}
          styles="w-full font-bold shadow-lg"
          gradient="from-green-400 to-green-600"
          
         
        />
      </div>
    </div>
  );
};
