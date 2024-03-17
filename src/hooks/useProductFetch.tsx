import { IProductFilter } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialProduct = {
  loading: false,
  data: [],
};
const initialFilter = {
  categories: [],
  skills: [],
  ages: [],
};

export const useProductFetch = () => {
  const [products, setProducts] = useState(initialProduct);
  const [filter, setFilter] = useState<IProductFilter>(initialFilter);

  const applyFilter = async () => {
    setProducts((prev) => ({ ...prev, loading: true }));
    try {
      const request = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
        cache: "no-cache",
      });
      const products = await request.json();
      if (products === "fetch failed") {
        setProducts((prev) => ({ ...prev, loading: false }));
        return toast.error("Poor Network, Check your connection");
      }
      setProducts((prev) => ({ ...prev, loading: false, data: products }));
    } catch (err) {
      console.log(err);
      setProducts((prev) => ({ ...prev, loading: false }));
    }
  };

  return { filter, setFilter, products,applyFilter };
};
