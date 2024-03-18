import { Body, Heading } from "../../../../components/typography";
import { Container, CustomButton, Stack } from "../../../../components/ui";

export const LabPackages = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-100">
      <Container>
        <Stack direction="flex-col" gap="gap-12">
          <Heading
            title="ATL Material Packages"
            styles="w-full md:w-6/12 mx-auto text-center"
          />

          <div className="grid grid-col-1 md:grid-cols-2  gap-8">
            <div className="card text-center  px-6 py-10 rounded-md bg-white shadow-lg shadow-slate-200">
              <Stack direction="flex-col" gap="gap-8">
                <div className="">
                  <img
                    src={"/images/at_package_1.webp"}
                    width={500}
                    height={250}
                    alt="package_1"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <Heading
                    type={3}
                    title="Package 1 - Rs. 450000"
                    styles="mb-4 text-orange-500"
                  />
                  <Body title="Electronic Development, Robotics, Internet of Things and Sensors" />
                </div>
              </Stack>
            </div>
            <div className="card text-center  px-6 py-10 rounded-md bg-white shadow-lg shadow-slate-200">
              <Stack direction="flex-col" gap="gap-8">
                <div className="">
                  <img
                    src={"/images/at_package_2.webp"}
                    width={500}
                    height={250}
                    alt="package_1"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <Heading
                    type={3}
                    title="Package 2 - Rs. 130000"
                    styles="mb-4 text-orange-500"
                  />
                  <Body title="Rapid Prototyping Tools" />
                </div>
              </Stack>
            </div>
            <div className="card text-center  px-6 py-10 rounded-md bg-white shadow-lg shadow-slate-200">
              <Stack direction="flex-col" gap="gap-8">
                <div className="">
                  <img
                    src={"/images/at_package_3.webp"}
                    width={500}
                    height={250}
                    alt="package_1"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <Heading
                    type={3}
                    title="Package 3 - Rs. 150000"
                    styles="mb-4 text-orange-500"
                  />
                  <Body title="Mechanical, Electrical and Measurement Tools" />
                </div>
              </Stack>
            </div>
            <div className="card text-center  px-6 py-10 rounded-md bg-white shadow-lg shadow-slate-200">
              <Stack direction="flex-col" gap="gap-8">
                <div className="">
                  <img
                    src={"/images/at_package_4.webp"}
                    width={500}
                    height={250}
                    alt="package_1"
                    className="mx-auto"
                  />
                </div>
                <div>
                  <Heading
                    type={3}
                    title="Package 4 - Rs. 20000"
                    styles="mb-4 text-orange-500"
                  />
                  <Body title="Power Supply & Accessories and Safety Equipment" />
                </div>
              </Stack>
            </div>
          </div>
          <div className="text-center">
            <CustomButton
              title="Get in touch with us"
              styles="font-bold uppercase shadow-2xl"
            />
          </div>
        </Stack>
      </Container>
    </section>
  );
};
