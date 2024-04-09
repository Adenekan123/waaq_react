import { AiFillStar } from "react-icons/ai";
import { BsPauseFill } from "react-icons/bs";
import { IProduct } from "../../../../types";
import { Link, useNavigate } from "react-router-dom";
import { HeroWall } from "../../../../components/shared";
import { Container } from "../../../../components/ui";
import { Body } from "../../../../components/typography";

export const ProductHero = ({
  product,
  loading,
}: {
  product: IProduct;
  loading: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <HeroWall
      color={"bg-orange-500"}
      gradient={"from-orange-500/80 to-red-600"}
    >
      <Container styles="h-full relative pt-48 pb-20 md:pb-32">
        {loading ? (
          <div role="status" className="animate-pulse flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <div className="h-6 bg-white rounded-md  w-[80%] mb-4"></div>
              <div className="h-6 bg-white rounded-md  w-[40%] mb-2.5"></div>
              <div className="h-4 bg-white rounded-md  w-[20%]"></div>{" "}
            </div>
            <div className="flex gap-x-8 items-center">
              <div className="h-6 bg-white rounded-md  w-[15%]"></div>
              <div className="h-6 bg-white rounded-md  w-[20%]"></div>
            </div>
          </div>
        ) : (
          <div className="content">
            <h1 className=" text-5xl md:text-6xl xl:text-7xl leading-tight  font-extrabold text-white">
              {product?.name}
            </h1>
            {product.name.toLowerCase() !== "robotics classroom bundle" ? (
              <>
                <div className="flex gap-3 items-center leading-none mt-4">
                  <h4 className=" text-2xl md:text-4xl leading-tight  font-extrabold text-white">
                    &#8358;{`${product?.price?.curr.toLocaleString("en")} /-`}
                  </h4>

                  <h4 className=" text-lg text-white relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-white ">
                    &#8358;{`${product?.price?.prev.toLocaleString("en")} /-`}
                  </h4>

                  <Body
                    title={`${product?.price?.discount}% off`}
                    type={1}
                    styles="text-white"
                  />
                </div>
                <div className="flex items-center justify-start mt-8 gap-x-1 ">
                  <AiFillStar className="text-yellow-300" size={24} />
                  <h3 className="text-white">{`${product?.ratings.rating} (${product?.ratings.totalreviews})`}</h3>
                </div>
              </>
            ) : null}
            <div className="flex gap-8 items-center text-white mt-16 font-bold text-xl">
              <Link onClick={() => navigate(-1)} to={"#"}>
                {"Back"}
              </Link>
              <BsPauseFill size={18} className="text-yellow-300" />
              <Body title={product?.name} />
            </div>
          </div>
        )}
      </Container>
    </HeroWall>
  );
};
