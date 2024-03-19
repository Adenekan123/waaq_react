import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IProduct, IProductFilter } from "../types";
import { useGetFilteredProducts } from "../lib/react-query/queriesAndMutations";

const initialFilter = {
  categories: [],
  skills: [],
  ages: [],
};

export const useProductFetch = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<IProductFilter>(initialFilter);

  const { mutateAsync, isPending: loading, error } = useGetFilteredProducts();

  const applyFilter = useCallback(async () => {
    const products = await mutateAsync(filter);
    if (products && products.length) setProducts(products);
    else setProducts([]);
  }, [mutateAsync, filter]);

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    }
  }, [error]);

  return { filter, setFilter, products, applyFilter, loading };
};
