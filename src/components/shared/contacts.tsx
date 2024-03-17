"use client";

import { useState } from "react";
import { Container, CustomButton, Stack } from "../ui";

import { BsFillTelephoneFill, BsFillChatSquareDotsFill } from "react-icons/bs";
import { HeroWall } from ".";
import { Body, Heading } from "../typography";

export const Contacts = () => {
  const [contact, setContact] = useState("line1");

  // const handleOpenChat = () => {
  //   if ((window as any).tidioChatApi) {
  //     (window as any).tidioChatApi.open();

  //   }
  // };

  const handlePhoneCall = () => {
    window.open(
      `tel://${
        contact == "line1"
          ? import.meta.env.PUBLIC_LINE1
          : import.meta.env.PUBLIC_LINE2
      }`,
      "_self"
    );
  };
  return (
    <HeroWall
      color="bg-slate-100"
      gradient="from-white/60 to-slate-50/80"
      styles=""
    >
      <Container styles="py-12 md:py-24 relative">
        <Stack direction="flex-col" gap="gap-14">
          <div>
            <Heading title="Still have any questions?" />
            <Body
              title="Neque cubilia letius nam at nec suspendisse et magnis pulvinar. Est curabitur id vehicula semper enim."
              styles="w-full md:w-5/12 mt-6"
            />
          </div>
          <div className="xl:flex">
            <div className="basis-7/12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card bg-white p-8 shadow-lg shadow-blue-100/80 text-center border rounded-xl">
                  <Stack direction="flex-col" gap="gap-8">
                    <div>
                      <div className="icon w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-600 mx-auto flex items-center justify-center text-white">
                        <BsFillChatSquareDotsFill size={30} />
                      </div>
                    </div>

                    <div>
                      <Heading
                        type={3}
                        title="Free Consultations"
                        styles="mb-3"
                      />
                      <Body title="Quam auctor amet primis per sem. Blandit lorem hac ipsum velit rhoncus suscipit dictum." />
                    </div>
                    <div>
                      <CustomButton
                        title="Chat Now"
                        styles="font-bold shadow-xl"
                        // whenClicked={handleOpenChat}
                      />
                    </div>
                  </Stack>
                </div>
                <div className="card bg-white p-8 shadow-lg shadow-blue-100/80 text-center border rounded-xl">
                  <Stack direction="flex-col" gap="gap-8">
                    <div>
                      <div className="icon w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 mx-auto flex items-center justify-center text-white">
                        <BsFillTelephoneFill size={30} />
                      </div>
                    </div>

                    <div>
                      <Heading
                        type={3}
                        title="Let's Talk on the Phone"
                        styles="mb-3"
                      />
                      <div className="flex flex-wrap justify-center gap-4">
                        {import.meta.env.PUBLIC_LINE1 ? (
                          <span
                            onClick={() => setContact("line1")}
                            className={`py-1 cursor-pointer hover:bg-green-50 px-3 shadow-lg bg-white rounded-3xl border capitalize ${
                              contact === "line1"
                                ? "text-green-500 font-semibold bg-green-50 border-green-400"
                                : null
                            }`}
                          >
                            line 1
                          </span>
                        ) : null}
                        {import.meta.env.PUBLIC_LINE2 ? (
                          <span
                            onClick={() => setContact("line2")}
                            className={`py-1 cursor-pointer hover:bg-green-50 px-3 shadow-lg bg-white rounded-3xl border capitalize ${
                              contact === "line2"
                                ? "text-green-500 font-semibold bg-green-50 border-green-400"
                                : null
                            }`}
                          >
                            line 2
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <br />
                      <CustomButton
                        title={`Call Now`}
                        styles="font-bold shadow-xl"
                        gradient="from-green-500 to-green-500"
                        whenClicked={handlePhoneCall}
                      />
                    </div>
                  </Stack>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" absolute right-0 bottom-0 hidden xl:block">
            <img
              src="/images/robot.png"
              alt="robot"
              className="h-full scale-150"
            />
          </div>
        </Stack>
      </Container>
    </HeroWall>
  );
};
