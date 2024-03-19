import { ProductCarousel } from "../../../../components/shared";
import { ProductLoader } from "../../../../components/shared/product-loader";
import { Heading } from "../../../../components/typography";
import { Stack } from "../../../../components/ui";
import { useGetMostLovedProducts } from "../../../../lib/react-query/queriesAndMutations";

export const MostLoved = () => {
  const { data, isPending } = useGetMostLovedProducts();
  return (
    <section className="most-loved">
      {isPending ? (
        <>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-6 animate-pulse"></div>
          <ProductLoader count={4} />
        </>
      ) : (
        <Stack direction="flex-col" gap="gap-8">
          <Heading type={2} title="Most Loved Kits" />
          {data && data.length ? <ProductCarousel products={data} /> : null}
        </Stack>
      )}
    </section>
  );
};
