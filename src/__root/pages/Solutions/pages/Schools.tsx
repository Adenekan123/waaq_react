import { MdOutlineAbc, MdOutlineListAlt, MdSupport } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { ImStack } from "react-icons/im";
import { Contacts, HeroSub } from "../../../../components/shared";
import { Container, Stack } from "../../../../components/ui";
import { Body, Heading } from "../../../../components/typography";
import { SchoolIntro } from "../components";

export const Schools = () => {
  return (
    <>
      <HeroSub
        page="Solutions / School"
        color="bg-green-500"
        gradient="from-green-600/80 to-green-700"
      />
      <SchoolIntro />
      <section className="bg-orange-50 py-12 md:py-24">
        <Container>
          <Stack direction="flex-col" gap="gap-12">
            <div className="text-center md:w-6/12 mx-auto">
              <Heading title="Why Choose Us" styles="text-center mb-3" />
              <Body title="Choosing us for your robotics education needs is a decision that comes with numerous compelling advantages:" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card flex flex-col gap-6 bg-white text-center px-6 py-8 rounded-2xl shadow-2xl shadow-orange-200">
                <div className="w-20 h-20 mx-auto flex justify-center items-center bg-orange-500 rounded-full">
                  <PiCertificateBold size={40} className="text-white" />
                </div>
                <div>
                  <Heading type={4} title="STEM Accreditation" />
                  <Body
                    title="As your partner, we hold the prestigious STEM accreditation, which signifies our commitment to delivering quality STEM education. This accreditation ensures that our programs meet rigorous standards and align with the latest educational initiatives."
                    styles="text-slate-600 mt-3"
                  />
                </div>
              </div>
              <div className="card flex flex-col gap-6 bg-white text-center px-6 py-8 rounded-2xl shadow-2xl shadow-orange-200">
                <div className="w-20 h-20 mx-auto flex justify-center items-center bg-orange-500 rounded-full">
                  <RiVerifiedBadgeLine size={40} className="text-white" />
                </div>
                <div>
                  <Heading type={4} title="Expertise and Experience" />
                  <Body
                    title="We bring a wealth of expertise and experience in robotics education. Our team comprises industry professionals and educators who are deeply passionate about nurturing the next generation of innovators."
                    styles="text-slate-600 mt-3"
                  />
                </div>
              </div>
              <div className="card flex flex-col gap-6 bg-white text-center px-6 py-8 rounded-2xl shadow-2xl shadow-orange-200">
                <div className="w-20 h-20 mx-auto flex justify-center items-center bg-orange-500 rounded-full">
                  <MdOutlineListAlt size={40} className="text-white" />
                </div>
                <div>
                  <Heading type={4} title="Comprehensive Curriculum" />
                  <Body
                    title="Our meticulously designed curriculum covers a wide range of robotics topics, ensuring a well-rounded education. From the fundamentals to advanced concepts, we provide a complete learning experience."
                    styles="text-slate-600 mt-3"
                  />
                </div>
              </div>
              <div className="card flex flex-col gap-6 bg-white text-center px-6 py-8 rounded-2xl shadow-2xl shadow-orange-200">
                <div className="w-20 h-20 mx-auto flex justify-center items-center bg-orange-500 rounded-full">
                  <MdSupport size={40} className="text-white" />
                </div>
                <div>
                  <Heading type={4} title="Dedicated Support" />
                  <Body
                    title="We prioritize student success, offering dedicated support and mentorship. Our instructors are committed to guiding and inspiring students to reach their full potential."
                    styles="text-slate-600 mt-3"
                  />
                </div>
              </div>
              <div className="card flex flex-col gap-6 bg-white text-center px-6 py-8 rounded-2xl shadow-2xl shadow-orange-200">
                <div className="w-20 h-20 mx-auto flex justify-center items-center bg-orange-500 rounded-full">
                  <ImStack size={40} className="text-white" />
                </div>
                <div>
                  <Heading type={4} title="Cutting-Edge Resources" />
                  <Body
                    title="We invest in state-of-the-art technology and resources, including access to the latest robotic kits and software, to ensure that our students are always at the forefront of technological advancements."
                    styles="text-slate-600 mt-3"
                  />
                </div>
              </div>
              <div className="card flex flex-col gap-6 bg-white text-center px-6 py-8 rounded-2xl shadow-2xl shadow-orange-200">
                <div className="w-20 h-20 mx-auto flex justify-center items-center bg-orange-500 rounded-full">
                  <MdOutlineAbc size={40} className="text-white" />
                </div>
                <div>
                  <Heading type={4} title="Flexibility and Accessibility" />
                  <Body
                    title="We understand the importance of flexibility in education. Our programs are designed to accommodate various learning styles and schedules, making it accessible to a wide range of students."
                    styles="text-slate-600 mt-3"
                  />
                </div>
              </div>
            </div>
          </Stack>
        </Container>
      </section>
      <Contacts />
    </>
  );
};
