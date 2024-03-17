import { BsPauseFill } from "react-icons/bs";
import { IHeroSub } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { HeroWall } from ".";
import { Container } from "../ui";
import { Body } from "../typography";

export const HeroSub = ({ page, color, gradient, type = "home" }: IHeroSub) => {
  const navigate = useNavigate();
  return (
    <HeroWall color={color} gradient={gradient}>
      <Container styles="h-full relative pt-48 pb-20 md:pb-32">
        <div className="content text-center">
          <h1 className=" text-5xl md:text-6xl xl:text-7xl leading-tight  font-extrabold text-white">
            {page}
          </h1>

          <div className="flex gap-8 items-center justify-center text-white mt-8 font-bold text-xl">
            <Link
              onClick={() => (type === "shop" ? navigate(-1) : false)}
              to={type === "home" ? "/" : "#"}
            >
              {type === "home" ? "Home" : "Shop"}
            </Link>
            <BsPauseFill size={18} className="text-yellow-300" />
            <Body title={page} />
          </div>
        </div>
      </Container>
    </HeroWall>
  );
};
