import { FaUsersCog } from "react-icons/fa";
import { GiBookshelf, GiTeacher } from "react-icons/gi";
import { Container, Stack } from "../../../../components/ui";
import { Body, Heading } from "../../../../components/typography";

export const PartnerBenefits = () => {
  return (
    <section className="misionVision py-12 md:py-24">
      <Container>
        <Stack direction="flex-col" gap="gap-12">
          <Heading
            title="Perks of Becomoming our Partner"
            styles="w-full md:w-6/12 mx-auto text-center"
          />

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center  p-6 rounded-md">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-orange-500 text-white">
                  <GiTeacher size={50} />
                </div>
                <Body title="After intensive training, get ready to interact with the best school and industry experts of the edtech world." />
              </Stack>
            </div>
            <div className="card text-center  p-6 rounded-md">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-violet-500 text-white">
                  <GiBookshelf size={50} />
                </div>
                <Body title="We will help you with any materials and resources you need to succeed." />
              </Stack>
            </div>
            <div className="card text-center  p-6 rounded-md">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-green-500 text-white">
                  <FaUsersCog size={50} />
                </div>
                <Body title="Get the lead and make money by contributing to the fastest growing segment, supported by Avishkaar." />
              </Stack>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
};
