import {
  useCheckoutCartItems,
  useCheckoutVisitorCartItems,
} from "../lib/react-query/queriesAndMutations";
import { useCartContext } from "../contexts";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { IVisitor } from "../types";

const useCheckout = () => {
  const { state, emptycart } = useCartContext();
  const {
    mutateAsync: checkoutAsync,
    isPending: checkingOut,
    isSuccess: checkoutSuccess,
    error: checkoutError,
  } = useCheckoutCartItems();
  const {
    mutateAsync: checkoutVisitorAsync,
    isPending: checkingOutVisitorItems,
    isSuccess: checkingOutSuccess,
    error: checkingOutError,
  } = useCheckoutVisitorCartItems();

  const checkout_local = async (user: IVisitor) => {
    await checkoutVisitorAsync({ user, items: state.items });
  };
  const checkout = async () => await checkoutAsync(state.items);

  useEffect(() => {
    if (checkoutSuccess || checkingOutSuccess) {
      emptycart();
      toast.success("Checkout Successful");
    }
    if (checkoutError || checkingOutError)
      toast.success("Unable to checkout items, try again");
  }, [checkoutSuccess, checkingOutSuccess, checkoutError, checkingOutError]);

  return {
    chackout: { init: checkout, loading: checkingOut },
    checkout_local: { init: checkout_local, loading: checkingOutVisitorItems, success:checkingOutSuccess },
  };
};

export default useCheckout;
