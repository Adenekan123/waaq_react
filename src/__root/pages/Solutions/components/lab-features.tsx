
import { BsCalendar } from "react-icons/bs";
import { CgSupport,CgFileDocument } from "react-icons/cg";
import { GiTrophyCup } from "react-icons/gi";
import { Container, Stack } from "../../../../components/ui";
import { Body, Heading } from "../../../../components/typography";

export const LabFeatures = () => {
  return (
    <section className="py-12 md:py-24 bg-blue-700">
      <Container>
        <Stack direction="flex-col" gap="gap-12">
          <Heading
            title="Subscribe and enjoy these features"
            styles="w-full md:w-6/12 mx-auto text-center text-blue-50"
          />

          <div className="grid grid-col-1 md:grid-cols-2  gap-8">
            <div className="card text-center  px-6 py-10 rounded-md bg-blue-50 shadow-lg shadow-blue-500">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-blue-700 text-white">
                  <BsCalendar size={50} />
                </div>
                <div>
                  <Heading
                    type={3}
                    title="Monthly Engagement Activities"
                    styles="mb-4"
                  />
                  <Body title="Online activities are sent to trainers/coordinators for keeping them engaged on a regular basis and to provide them the opportunity to tinker as much as they can." />
                </div>
              </Stack>
            </div>
            <div className="card text-center  px-6 py-10 rounded-md bg-blue-50 shadow-lg shadow-blue-500">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-blue-700 text-white">
                  <CgSupport size={50} />
                </div>
                <div>
                  <Heading type={3} title="Training Support" styles="mb-4" />
                  <Body title="Once the lab setup is done, eight days of onsite training (in school) is provided to initiate tinkering in your labs. You get access to a year of our video curriculum. You will also get support for PFMS and ATL Dashboard Reporting as well as online support for ATL marathon preparation." />
                </div>
              </Stack>
            </div>
            <div className="card text-center  px-6 py-10 rounded-md bg-blue-50 shadow-lg shadow-blue-500">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-blue-700 text-white">
                  <CgFileDocument size={50} />
                </div>
                <div>
                  <Heading type={3} title="Manual (6 subjects)" styles="mb-4" />
                  <Body title="Basic manuals on different topics (3D printer, Arduino, Raspberry Pi etc.) are provided as a hard copy." />
                </div>
              </Stack>
            </div>
            <div className="card text-center  px-6 py-10 rounded-md bg-blue-50 shadow-lg shadow-blue-500">
              <Stack direction="flex-col" gap="gap-8">
                <div className="p-2 shadow-xl w-24 h-24 rounded-md flex items-center justify-center mx-auto bg-blue-700 text-white">
                  <GiTrophyCup size={50} />
                </div>
                <div>
                  <Heading type={3} title="Events and Competitions (ART and IRC)" styles="mb-4" />
                  <Body title="Support to participate in various events like IRC, Avishkaar Makeathon etc." />
                </div>
              </Stack>
            </div>
          </div>
        </Stack>
      </Container>
    </section>
  );
};
