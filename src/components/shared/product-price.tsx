import { IProductPrice } from "../../types";
import { Body } from "../typography";

export const ProductPrice = ({ price }: { price: IProductPrice }) => {
  return (
    <div className="flex gap-3 items-center leading-none">
      <Body
        type={1}
        title={`&#8358;${price?.curr.toLocaleString("en")} /-`}
        styles="font-bold"
        hasEntity
      />
      <Body
        title={`&#8358;${price?.prev.toLocaleString("en")} /`}
        type={0.5}
        hasEntity
        styles="text-slate-700 relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-slate-700 "
      />
      <Body
        title={`${price?.discount}% off`}
        type={0.5}
        styles="text-red-500"
      />
    </div>
  );
};
