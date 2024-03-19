"use client";
import { Stack } from "../../../../components/ui";
import { Heading } from "../../../../components/typography";
import { ProductCarousel } from "../../../../components/shared";
import { ProductLoader } from "../../../../components/shared/product-loader";
import { useGetBeginnerProducts } from "../../../../lib/react-query/queriesAndMutations";

export const Beginnners = () => {
  const { data, isPending } = useGetBeginnerProducts();
  return (
    <section className="beginners">
      {isPending ? (
        <>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-6 animate-pulse"></div>
          <ProductLoader count={4} />
        </>
      ) : (
        <Stack direction="flex-col" gap="gap-8">
          <Heading type={2} title="Perfect for Beginnners" />
          {data ? <ProductCarousel products={data} /> : null}
        </Stack>
      )}
    </section>
  );
};
