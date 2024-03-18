"use client";

import React, { useState } from "react";
import { IPartnershipForm, PartnerHelpType } from "../../../../types";
import { Container, Stack } from "../../../../components/ui";
import { Body, Heading } from "../../../../components/typography";

const initial_state: IPartnershipForm = {
  name: "",
  email: "",
  phone: "",
  city_state_residence: "",
  experience: "please select",
  help_type: null,
  invest_amount: "",
  organization: "",
  note: "",
};

export const PartnershipForm = () => {
  const [state, setState] = useState(initial_state);
  const {
    name,
    email,
    phone,
    city_state_residence,
    experience,
    help_type,
    invest_amount,
    organization,
    note,
  } = state;

  const updateInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-12 md:py-24">
      <Container>
        <Stack direction="flex-col" gap="gap-12">
          <div className="text-center">
            <Heading title="Ready to take the plunge ?" styles="mb-2" />
            <Body
              title=" Don't worry, we'll help you figure it out. Fill in your details below and we'll get in touch with you for the next steps."
              styles="font-semibold mt-4"
            />
          </div>
          <form className="bg-white py-6 md:py-16 px-6 md:px-24 shadow-xl shadow-violet-100">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label htmlFor="name" className="font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
              <div>
                <label htmlFor="city_state_residence" className="font-semibold">
                  City & State of Operation/Residence
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city_state_residence"
                  id="city_state_residence"
                  value={city_state_residence}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
              <div>
                <label htmlFor="experience" className="font-semibold">
                  Experience in no. of years working in STEM domain
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="experience"
                  value={experience}
                  onChange={updateInput}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                >
                  <option value="">Please Select</option>
                  <option value="i have no experiance so far">
                    i have no experiance so far
                  </option>
                  <option value="3 to 5 years">3 to 5 years</option>
                  <option value="more than 5 years">more than 5 years</option>
                </select>
              </div>
              <div>
                <label className="font-semibold">
                  What type of help are you looking for
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4 my-3">
                  <input
                    type="radio"
                    name="help_type"
                    id="help_type1"
                    checked={help_type === PartnerHelpType["start_academy"]}
                  />
                  <label htmlFor="help_type1">
                    {PartnerHelpType["start_academy"]}
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="help_type"
                    id="help_type2"
                    checked={help_type === PartnerHelpType["shool_sales"]}
                  />
                  <label htmlFor="help_type2">
                    {PartnerHelpType["shool_sales"]}
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="invest_amount" className="font-semibold">
                  How much are you willing to invest?
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="invest_amount"
                  id="invest_amount"
                  value={invest_amount}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
              <div>
                <label htmlFor="organization" className="font-semibold">
                  Name of your current organization:
                </label>
                <input
                  type="text"
                  name="organization"
                  id="organization"
                  value={organization}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
              <div>
                <label htmlFor="organization" className="font-semibold">
                  Any other notes / information you would like to add:
                </label>
                <textarea
                  rows={4}
                  name="note"
                  id="note"
                  value={note}
                  className="w-full py-4 px-2 border mt-3 bg-violet-50"
                  onChange={updateInput}
                />
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="w-3/12 p-3 bg-violet-500 text-violet-50 capitalize rounded-md hover:bg-purple-700 font-bold">
                submit
              </button>
            </div>
          </form>
        </Stack>
      </Container>
    </section>
  );
};

