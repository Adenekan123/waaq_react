import { CgEditBlackPoint } from "react-icons/cg";
import { Container, Stack } from "../../../../components/ui";
import { FrameImage } from "../../../../components/shared";
import { Body, Heading } from "../../../../components/typography";

export const Partnertro = () => {
  return (
    <Container styles="py-12 md:py-24">
      <Stack gap="gap-12 md:gap-28">
        <div className="basis-6/12 relative">
          <FrameImage image="/images/about-img.png.webp" />
        </div>
        <div className="basis-6/12">
          <Stack direction="flex-col" styles="gap-8">
            <div>
              <Heading
                title="Start your Edtech business with us"
                styles="mb-2"
              />
              <Body
                title=" Why should you invest in Next-Gen Technology Education ?"
                styles="font-semibold mt-4"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              <div className="card relative  mt-4">
                <Stack direction="flex-row" gap="gap-4" styles="text-left">
                  <div>
                    <CgEditBlackPoint
                      size={30}
                      className="text-violet-500 relative -left-2"
                    />
                  </div>

                  <Body title="Next-gen technology education is a humongous opportunity worth 100  billion dollars." />
                </Stack>
              </div>
              <div className="card relative  mt-4">
                <Stack direction="flex-row" gap="gap-4" styles="text-left">
                  <div>
                    <CgEditBlackPoint
                      size={30}
                      className="text-violet-500 relative -left-2"
                    />
                  </div>

                  <Body title="200 billion USD would be the market size of Robotics by 2030." />
                </Stack>
              </div>
              <div className="card relative  mt-4">
                <Stack direction="flex-row" gap="gap-4" styles="text-left">
                  <div>
                    <CgEditBlackPoint
                      size={30}
                      className="text-violet-500 relative -left-2"
                    />
                  </div>

                  <Body title="In 2022, 2 million AI jobs were created and 1.4 million coding jobs went unfilled." />
                </Stack>
              </div>
            </div>
          </Stack>
        </div>
      </Stack>
    </Container>
  );
};
