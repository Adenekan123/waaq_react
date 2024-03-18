import { FrameImage } from "../../../../components/shared";
import { Body, Heading } from "../../../../components/typography";
import { Container, Stack } from "../../../../components/ui";

export const LabIntro = () => {
  return (
    <Container styles="py-12 md:py-24">
      <Stack gap="gap-12 md:gap-28">
        <div className="basis-6/12 relative">
          <FrameImage image="/images/lab.jpg" />
        </div>
        <div className="basis-6/12">
          <Stack direction="flex-col" styles="gap-8">
            <Heading title="What is an Atal Tinkering Lab?" />

            <Body
              title="ATL or “Atal Tinkering Labs” is an initiative by Niti Aayog to give a boost to the innovation ecosystem in the country. Our offering for a Tinkering Lab focuses on creating an environment that promotes the participants to dream, the equipment which allows them to tinker, the curriculum that enables them to structure their thinking and a challenging environment that enables young innovators to test themselves."
              styles="text-justify"
            />
            <Body
              title="Avishkaar also organizes an international level competition, Avishkaar Makeathon where students of our ATL labs get an opportunity to participate. We offer our own equipment and solutions to set up the Atal Tinkering Labs as envisioned by NITI Aayog."
              styles="text-justify"
            />
          </Stack>
        </div>
      </Stack>
    </Container>
  );
};
