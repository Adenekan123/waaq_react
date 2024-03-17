import { Body, Container, CustomButton, Heading, Stack } from "@/components/ui";
import React from "react";

const HeroWithImg = () => {
  return (
    <section className="bg-[url('/images/female-teacher-helping-kids-in-robotics-lab.jpg')] bg-cover bg-center text-center md:text-left py-24 md:py-52 relative">
      <div className="overlay bg-gradient-to-r from-orange-800/70 to-orange-600/40 absolute top-0 left-0 w-full h-full"></div>
      <Container>
        <Stack direction="flex-col" gap="gap-8" styles="md:w-5/12">
          <Heading
            title="Creating Tomorrow's Tech Leaders through Robotics"
            styles="text-white"
          />
          <Body
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
            styles="text-white "
          />
          <div>
            <CustomButton title="discover more" styles="font-bold uppercase" />
          </div>
        </Stack>
      </Container>
    </section>
  );
};

export default HeroWithImg;
