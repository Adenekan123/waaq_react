"use client";
import { useState } from "react";

import { nanoid } from "nanoid";
import { Container } from "../../../../components/ui";
import { ProductLoader } from "../../../../components/shared/product-loader";
import { OrderCard } from "../../../../components/shared";
import { EmptyOrder } from ".";
import { useGetOrderItems } from "../../../../lib/react-query/queriesAndMutations";

export const Orders = () => {
  const [type, setType] = useState<"pending" | "successfull" | undefined>(
    "pending"
  );
  const { data, isLoading } = useGetOrderItems(type);
  return (
    <>
      <div className=" shadow-lg flex justify-center gap-6">
        <button
          onClick={() => setType("pending")}
          className={`bg-transparent outline-none px-3 pt-6 pb-4 uppercase font-semibold ${
            type === "pending"
              ? "text-green-500 border-b-4 border-green-500"
              : "text-slate-500"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setType("successfull")}
          className={`bg-transparent outline-none px-3 pt-6 pb-4 uppercase font-semibold ${
            type === "successfull"
              ? "text-green-500 border-b-4 border-green-500"
              : "text-slate-500"
          }`}
        >
          Successful
        </button>
      </div>
      <Container styles="py-8">
        {isLoading ? (
          <ProductLoader count={4} />
        ) : data && Array.isArray(data) && data.length ? (
          data.map((order) => {
            const { orders } = order;
            return (
              <div key={nanoid(6)}>
                <div
                  className="grid grid-cols-1  md:grid-cols-4  gap-6"
                  key={nanoid(6)}
                >
                  {orders.map((item) => (
                    <OrderCard key={nanoid(8)} orderItem={item} />
                  ))}
                </div>
              </div>
            );
          })
        ) : null}

        {!isLoading &&
        (!Array.isArray(data) || (Array.isArray(data) && !data.length)) ? (
          <EmptyOrder />
        ) : null}
      </Container>
    </>
  );
};
