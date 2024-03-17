
import { FaFacebookF } from "react-icons/fa";
import { BsFillCaretRightFill, BsTwitter, BsYoutube } from "react-icons/bs";
import { HeroWall } from "../shared";
import { Container, Stack } from "../ui";
import { Link } from "react-router-dom";
import { Body, Heading } from "../typography";

export const Footer = () => {
  return (
    <HeroWall>
      <Container styles="py-12 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24  lg:gap-32 justify-between">
          <Stack direction="flex-col" gap="gap-4">
            <Link to={"#"} className="logo text-3xl">
              <img
                src={"/images/logo.png"}
                alt="logo"
                height={220}
                width={220}
                className=" brightness-0 invert"
              />
            </Link>
            <Heading
              type={4}
              title="Unlocking Creativity, Igniting Curiosity: Building Future Innovators."
              styles="text-white"
            />

            <div className="flex gap-3 pt-2">
              <div className="w-11 h-11 rounded-full bg-white text-blue-600 shadow-lg flex items-center justify-center">
                <FaFacebookF size={16} />
              </div>
              <div className="w-11 h-11 rounded-full bg-white text-cyan-500 shadow-lg flex items-center justify-center">
                <BsTwitter size={16} />
              </div>
              <div className="w-11 h-11 rounded-full bg-white text-red-500 shadow-lg flex items-center justify-center">
                <BsYoutube size={16} />
              </div>
            </div>
          </Stack>
          <div>
            <Heading type={3} title="Solutions" styles="text-white mb-8" />
            <Stack direction="flex-col" gap="gap-4">
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Schools
                </Link>
              </div>
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Partners
                </Link>
              </div>
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Labs
                </Link>
              </div>
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Classroom Bundle
                </Link>
              </div>
            </Stack>
          </div>
          <div>
            <Heading type={3} title="Quick links" styles="text-white mb-8" />
            <Stack direction="flex-col" gap="gap-4">
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Home
                </Link>
              </div>
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Shop
                </Link>
              </div>
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Cart
                </Link>
              </div>
              <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
                <BsFillCaretRightFill />

                <Link to={"#"} className="text-lg">
                  Sign In
                </Link>
              </div>
            </Stack>
          </div>
        </div>
      </Container>
      <Container styles="pb-3">
        <div className="flex relative w-full">
          <Body
            title="Copyright © 2023 Waaqfusion, All rights reserved. Powered by Avishkaar."
            styles="text-white text-center lg:text-left"
            type={0.5}
          />
          {/* <Stack gap="gap-4" styles="">
            <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
              <BsFillCaretRightFill />

              <Link href={"#"} className="text-sm">
                Terms of use
              </Link>
            </div>
            <div className="flex items-center pb-2 border-dashed border-orange-400 border-b text-orange-50 gap-3">
              <BsFillCaretRightFill />

              <Link href={"#"} className="text-sm">
                Privacy policy
              </Link>
            </div>
          </Stack> */}
        </div>
      </Container>
    </HeroWall>
  );
};
