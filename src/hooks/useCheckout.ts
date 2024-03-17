import { useState } from "react";

const useCheckout = () => {
  // const { state, emptycart } = useCartContext();

  const [status, setStatus] = useState({ loading: false, success: false });

  const checkout_local = async () => {
    try {
      console.log("test checkout");
    } catch (err) {
      console.log(err);
    }
  };

  const chackout = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));
    try {
      console.log("test checkout");
    } catch (err) {
      console.log(err);
      setStatus((prev) => ({ ...prev, loading: false }));
    }
  };

  return { chackout, checkout_local, status };
};

export default useCheckout;
