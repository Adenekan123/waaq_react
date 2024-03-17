"use client";
import { Container, CustomButton, Stack } from "../ui";
import { FaSchool } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { RiHomeOfficeFill } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { Body, Heading } from "../typography";
import { HeroWall } from ".";

export const Solutions = () => {
  return (
    <>
      <Container styles="pt-12 md:pt-20 text-center">
        <Heading title="our solutions" styles="capitalize mb-12" />
      </Container>
      <HeroWall>
        <Container styles="pt-12 md:pt-20 md:mt-44 pb-12 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 relative md:-top-44">
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-112">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center">
                    <FaSchool size={40} />
                  </div>
                </div>
                <Heading title="schools" type={3} styles="capitalize" />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg capitalize font-bold"
                    gradient="from-green-500 to-green-500"
                  />
                </div>
              </Stack>
            </div>
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-96">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center">
                    <ImUsers size={40} />
                  </div>
                </div>
                <Heading title="partners" type={3} styles="capitalize" />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg capitalize font-bold"
                    gradient="from-amber-500 to-amber-600"
                  />
                </div>
              </Stack>
            </div>
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-96">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-white flex items-center justify-center">
                    <RiHomeOfficeFill size={40} />
                  </div>
                </div>
                <Heading title="labs" type={3} styles="capitalize" />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg capitalize font-bold"
                    gradient="from-violet-500 to-violet-700"
                  />
                </div>
              </Stack>
            </div>
            <div className="card p-8 drop-shadow-lg bg-orange-50 rounded-md relative md:min-h-96">
              <Stack
                direction="flex-col"
                gap="gap-4"
                styles="items-center text-center"
              >
                <div>
                  <div className="icon w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center">
                    <BsRobot size={40} />
                  </div>
                </div>
                <Heading
                  title="robotics classroom bundle"
                  type={3}
                  styles="capitalize"
                />
                <Body title="Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor." />
                <div className="text-center md:absolute bottom-0 left-0 w-full">
                  <CustomButton
                    title="learn more"
                    styles="shadow-lg capitalize font-bold"
                    gradient="from-blue-500 to-blue-600"
                  />
                </div>
              </Stack>
            </div>
          </div>

          <div className="md:flex relative mt-12 md:mt-0 md:-top-20">
            <div className="basis-4/12">
              <Heading
                styles="text-white md:leading-12"
                title="Trusted globally by world-class brands and organizations of all sizes."
              />
            </div>
            <div className="basis-8/12 mt-8 md:mt-0">
              <div className="grid grid-cols-3  md:grid-cols-4 gap-x-16 gap-y-2 items-center">
                <div>
                  <img
                    src={"/images/awards-1.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-2.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-3.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-5.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-6.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-7.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-4.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
                <div>
                  <img
                    src={"/images/awards-8.png"}
                    height={120}
                    width={120}
                    alt="cutomer_brand"
                    className=" brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </HeroWall>
    </>
  );
};
