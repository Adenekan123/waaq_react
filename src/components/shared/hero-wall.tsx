import { IHeroWall } from "../../types";

export const HeroWall = ({
  children,
  styles,
  gradient = "from-red-600/80 to-orange-500",
  color = "bg-red-600",
}: IHeroWall) => {
  return (
    <div
      className={`w-full bg-[url('/images/bg_img.png')] ${color} relative ${styles}`}
    >
      <div
        className={`overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b ${gradient} -z-0`}
      ></div>
      {children}
    </div>
  );
};
