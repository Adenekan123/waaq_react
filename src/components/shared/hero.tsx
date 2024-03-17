import { Container, CustomButton } from "../ui";


export const Hero = () => {
  return (
    <div className="w-full pt-44 md:pt-72 pb-16 md:pb-24 bg-[url('/images/bg_img.png')] bg-red-600 relative">
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600/80 to-orange-500 -z-0"></div>
      <Container styles=" xl:pt-0 xl:flex flex-wrap w-full h-full relative">
        <div className="content basis-full xl:basis-2/4">
          <p className="text-sm md:text-xl uppercase text-slate-50">Dare to innovate ?</p>
          <h1 className=" text-6xl md:text-6xl xl:text-7xl leading-tight  font-extrabold text-white">
            Inspiring Creativity, Engineering the Future.
          </h1>
          <p className="text-md md:text-xl text-slate-50 mt-4 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <CustomButton title="explore all products" styles="uppercase font-bold" />
        </div>
        <div className="content basis-full xl:basis-2/4 mt-12 xl:mt-0">
          <img
            src={"/images/hero-img.webp"}
            alt="hero-img"
            className="w-full h-full object-cover object-right pl-0 xl:pl-8"
          />
        </div>
      </Container>
    </div>
  );
};
