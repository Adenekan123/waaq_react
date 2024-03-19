"use client";
import { IProduct } from "../../types";
import { ProductCard } from "./product-card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const ProductCarousel = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="relative">
      {/* <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: false,
          type: "loop",
          gap: "1rem",
          padding: {right:'4rem',bottom:"4rem"},
          perPage: 4,
          perMove: 1,
          breakpoints: {
            800: { perPage: 1 },
            1200: { perPage: 2 },
            1500: { perPage: 3 },
          },
        }}
      >
        {products && Array.isArray(products) && products.length
          ? products.map((product) => (
              <SplideSlide key={nanoid(5)}>
                <ProductCard {...product} />
              </SplideSlide>
            ))
          : null}
      </Splide> */}
      {products && Array.isArray(products) ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass="px-3 h-full"
        >
          {products.map((product,index) => (
            // <SwiperSlide key={product._id + "swiper"}>
            <ProductCard key={'product'+index} {...product} />
            // </SwiperSlide>
          ))}
        </Carousel>
      ) : null}
    </div>
  );
};
