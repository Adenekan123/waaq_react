import { Body, Heading } from "../../../../components/typography";
import { Container, Stack } from "../../../../components/ui";
import { FrameImage } from "../../../../components/shared";
import { MdCastForEducation } from "react-icons/md";
import { PiMountainsBold } from "react-icons/pi";
import { GiVintageRobot } from "react-icons/gi";
import { IoIosBuild } from "react-icons/io";

export const SchoolIntro = () => {
  return (
    <Container styles="py-12 md:py-24">
      <Stack gap="gap-12 md:gap-28">
        <div className="basis-6/12">
          <Stack direction="flex-col" styles="gap-8">
            <Heading title="Why Do You Need Tech Innovation Labs in Your School?" />
            <Body title=" WAAQ Fusion Tech Innovation Labs in schools for learning robotics are essential for several key reasons:" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card relative shadow-xl bg-white px-4 py-6 mt-4 rounded-lg">
                <div className="mx-auto mb-5 md:absolute -top-4 -left-4 flex justify-center items-center border-8 bg-green-500 border-white font-bold text-white text-lg rounded-full w-16 h-16 drop-shadow-2xl">
                  01
                </div>
                <Stack
                  direction="flex-col"
                  gap="gap-4"
                  styles="items-center text-center"
                >
                  <MdCastForEducation size={50} className="text-green-500" />
                  <Heading type={4} title="Cutting-Edge Education" />
                  <Body title="They offer access to the latest technology and resources, ensuring students stay ahead." />
                </Stack>
              </div>
              <div className="card relative shadow-xl bg-white px-4 py-6 mt-4 rounded-lg">
                <div className="mx-auto mb-5 md:absolute -top-4 -left-4 flex justify-center items-center border-8 bg-green-500 border-white font-bold text-white text-lg rounded-full w-16 h-16 drop-shadow-2xl">
                  02
                </div>
                <Stack
                  direction="flex-col"
                  gap="gap-4"
                  styles="items-center text-center"
                >
                  <IoIosBuild size={50} className="text-green-500" />
                  <Heading type={4} title="Hands-On Learning" />
                  <Body title="Students learn by doing, developing practical skills in designing and programming robots." />
                </Stack>
              </div>
              <div className="card relative shadow-xl bg-white px-4 py-6 mt-4 rounded-lg">
                <div className="mx-auto mb-5 md:absolute -top-4 -left-4 flex justify-center items-center border-8 bg-green-500 border-white font-bold text-white text-lg rounded-full w-16 h-16 drop-shadow-2xl">
                  03
                </div>
                <Stack
                  direction="flex-col"
                  gap="gap-4"
                  styles="items-center text-center"
                >
                  <GiVintageRobot size={55} className="text-green-500" />
                  <Heading type={4} title="Creativity and Innovation" />
                  <Body title=" Labs encourage creativity and innovation, nurturing future technological leaders." />
                </Stack>
              </div>
              <div className="card relative shadow-xl bg-white px-4 py-6 mt-4 rounded-lg">
                <div className="mx-auto mb-5 md:absolute -top-4 -left-4 flex justify-center items-center border-8 bg-green-500 border-white font-bold text-white text-lg rounded-full w-16 h-16 drop-shadow-2xl">
                  04
                </div>
                <Stack
                  direction="flex-col"
                  gap="gap-4"
                  styles="items-center text-center"
                >
                  <PiMountainsBold size={55} className="text-green-500" />
                  <Heading type={4} title="Preparation for the Future" />
                  <Body title=" Robotics education equips students with highly relevant skills for a technology-driven job market." />
                </Stack>
              </div>
            </div>
          </Stack>
        </div>
        <div className="basis-6/12 relative -order-1 md:order-1">
          <FrameImage image="/images/female-teacher-helping-kids-in-robotics-lab.jpg" />
        </div>
      </Stack>
    </Container>
  );
};
