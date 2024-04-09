import { useCallback, useMemo } from "react";
import { nanoid } from "nanoid";
import { ProductHero } from "./components/ProductHero";
import { Container, CustomButton, Stack } from "../../../components/ui";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Body, Heading } from "../../../components/typography";
import { ProductRating } from "../../../components/shared";
import { useGetProduct } from "../../../lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";
import { IProduct } from "../../../types";

import "../../../lib/embla/css/embla.css"

export const Product = () => {
  const { productid } = useParams();
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y",align:"start",duration:1000 , }, [Autoplay()]);

  const { data, isLoading } = useGetProduct(productid as string);

  const images = useMemo(() => {
    if (!data) return [];
    return data.images;
  }, [data]);

  const snapIndex = useMemo(() => emblaApi?.selectedScrollSnap(), [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <ProductHero product={data as IProduct} loading={isLoading} />
      <Container styles="py-12 md:py-24">
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="basis-full md:basis-2/12 order-last md:order-first">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="flex flex-col gap-8 md:w-48">
                  {Array.from(Array(4)).map(() => (
                    <div
                      key={nanoid(5)}
                      className="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700"
                    >
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="embla">
                <button className="embla__prev" onClick={scrollPrev}>
                  Prev
                </button>
                <button className="embla__next" onClick={scrollNext}>
                  Next
                </button>
                <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">
                    {images.length &&
                      images.map((image) => (
                        <div key={data?._id} className="embla__slide">
                          <div className={`border p-3 `}>
                            <button onClick={() => false}>
                              <img
                                src={`${
                                  import.meta.env.VITE_IMAGE_HOST
                                }/${image}`}
                                width={"100%"}
                                height={"100%"}
                                alt="robotics_classroom_gadgets"
                              />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row  gap-12 basis-full md:basis-9/12">
            <div className="basis-full md:basis-5/12 ">
              <div className="rounded-lg border overflow-hidden p-3">
                {isLoading && !data ? (
                  <div role="status" className="animate-pulse">
                    <div className="flex items-center justify-center w-full h-56 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <img
                    src={`${import.meta.env.VITE_IMAGE_HOST}/${
                      images[snapIndex as number]
                    }`}
                    alt="product thumbnail"
                    width={"100%"}
                    height={"100%"}
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
            <div className="basis-full md:basis-7/12">
              <Stack direction="flex-col" gap="gap-6" styles="w-full">
                <div className="flex justify-between items-center w-full">
                  {isLoading ? (
                    <div role="status" className="animate-pulse w-full h-full">
                      <div className="flex justify-between items-center">
                        <div className="h-6 bg-slate-700 rounded-md  w-[60%] mb-4"></div>
                        <div className="h-6 bg-slate-700 rounded-md  w-[15%] mb-4"></div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Heading type={2} title={data?.name as string} />
                      {data?.ratings ? (
                        <ProductRating ratings={data?.ratings} />
                      ) : null}
                    </>
                  )}
                </div>

                {isLoading && !data ? (
                  <div role="status" className="animate-pulse h-full">
                    <div className="flex flex-col gap-8">
                      <div className="h-6 bg-slate-700 rounded-md  w-[20%]"></div>
                      <div className="h-6 bg-slate-700 rounded-md  w-[60%]"></div>
                      <div className="h-12 bg-slate-700 rounded-3xl  w-[100%]"></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Body title="Avishkaar's Flagship Robotics Solution for Schools" />

                    {data?.name.toLowerCase() !==
                    "robotics classroom bundle" ? (
                      <CustomButton
                        title="Buy Now"
                        styles="font-bold shadow-lg"
                      />
                    ) : (
                      <CustomButton
                        title="Conmtact Now"
                        styles="font-bold shadow-lg"
                      />
                    )}
                  </>
                )}

                <ul className="list-disc pl-6 text-slate-500 flex flex-col gap-6 font-semibold">
                  {data?.description && Array.isArray(data?.description) ? (
                    <>
                      {data.description.map((item: string) => (
                        <li key={nanoid(5)}>{item}</li>
                      ))}
                    </>
                  ) : null}
                </ul>
              </Stack>
            </div>
          </div>
        </div>
      </Container>{" "}
    </>
  );
};
