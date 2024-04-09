import { FaCartShopping } from "react-icons/fa6";
import { useCartContext } from "../../contexts";

export const FloatingCartButton = () => {
  const { toggleCart } = useCartContext();
  return (
    <div
      onClick={() => toggleCart()}
      className=" w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-yellow-400  justify-center items-center text-white fixed bottom-16 right-6 flex md:hidden z-50 shadow-lg shadow-red-400"
    >
      <FaCartShopping size={24} />
    </div>
  );
};
