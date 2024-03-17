import { PiEyeClosed, PiMountains, PiSpeakerSimpleHigh } from "react-icons/pi";
import { Container, Stack } from "../../../../components/ui";
import { Body, Heading } from "../../../../components/typography";

export const MissionVision = () => {
  return (
    <section className="misionVision py-12 md:py-24">
      <Container>
        <Stack direction="flex-col" gap="gap-12">
          <Heading
            title="The Power Of FutureBotics Intelligence."
            styles="w-full md:w-6/12 mx-auto text-center"
          />

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center  p-6 rounded-md">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-orange-500 text-white">
                  <PiEyeClosed size={50} />
                </div>
                <Heading type={4} title="Vision" />
                <Body title="Committed to bringing Advanced Science & Technology to Africa's education system and becoming leading experts in African EdTech." />
              </Stack>
            </div>
            <div className="card text-center  p-6 rounded-md">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-violet-500 text-white">
                  <PiMountains size={50} />
                </div>
                <Heading type={4} title="Mission" />
                <Body title="Dedicated to advancing Science & Technology Education for African educators and students, aiming to be the top EdTech experts in Africa." />
              </Stack>
            </div>
            <div className="card text-center  p-6 rounded-md">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-green-500 text-white">
                  <PiSpeakerSimpleHigh size={50} />
                </div>
                <Heading type={4} title="Motto" />
                <Body title="Advocate of real-world and hands-on learning methodology with strong passion for Africa Technology Development " />
              </Stack>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
};
