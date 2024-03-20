"use client";

import React, { useState } from "react";
import { GoFilter } from "react-icons/go";
import { Container, CustomButton, Stack } from "../../../../components/ui";
import { Body } from "../../../../components/typography";
import { IProductFilter } from "../../../../types";
import {
  useGetProductCategories,
  useGetProductSkills,
} from "../../../../lib/react-query/queriesAndMutations";

export const Filter = ({
  setFilter,
  filter,
  applyFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<IProductFilter>>;
  applyFilter: () => Promise<void>;
  filter: IProductFilter;
}) => {
  const { data: categories } = useGetProductCategories();
  const { data: skills } = useGetProductSkills();

  const [show, setShow] = useState(false);
  const [tab, setTab] = useState<"categories" | "skills" | "ages">(
    "categories"
  );

  const handleFilterUpdate = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
    type: keyof IProductFilter
  ) => {
    const { id, checked } = e.currentTarget;
    if (!checked)
      setFilter((prev: IProductFilter) => ({
        ...prev,
        [type]: prev[type].filter((item) => item !== id),
      }));
    else
      setFilter((prev: IProductFilter) => ({
        ...prev,
        [type]: [...prev[type], id],
      }));
  };
  return (
    <Container styles="bg-white shadow-lg p-6 md:shadow-inherit sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div>
            <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
              Kits
            </span>
          </div>
          <div>
            <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
              courses
            </span>
          </div>
          <div>
            <span className="bg-white px-3 py-1 rounded-3xl border border-slate-500">
              Accessories
            </span>
          </div>
        </div>
        <div className="relative">
          <button onClick={() => setShow((prev) => !prev)}>
            <GoFilter size={30} />
          </button>
          {show ? (
            <div className="fixed z-[500] md:absolute top-0 md:top-full left-0 md:-left-96 bg-white rounded-lg shadow-2xl w-full md:w-[30rem] h-screen md:h-auto">
              <div className="flex justify-between items-center border-b bg-white p-6">
                <Body title="Filter" styles="font-bold" />
                <button className="text-md font-bold text-orange-500 capitalize">
                  Reset Filters
                </button>
              </div>
              <div className="flex h-[60vh] md:h-auto">
                <div className="basis-6/12 bg-gray-100 border-r">
                  <div className="flex flex-col">
                    <button
                      onClick={() => setTab("categories")}
                      className={`px-6 py-4 text-left hover:bg-white ${
                        tab === "categories" ? "bg-white font-bold" : ""
                      }`}
                    >
                      Categories
                    </button>
                    <button
                      onClick={() => setTab("skills")}
                      className={`px-6 py-4 text-left hover:bg-white ${
                        tab === "skills" ? "bg-white font-bold" : ""
                      }`}
                    >
                      Skills
                    </button>
                    <button
                      onClick={() => setTab("ages")}
                      className={`px-6 py-4 text-left hover:bg-white ${
                        tab === "ages" ? "bg-white font-bold" : ""
                      }`}
                    >
                      Ages
                    </button>
                  </div>
                </div>
                <div className="basis-6/12  p-6">
                  {tab === "categories" ? (
                    <Stack direction="flex-col" gap="gap-8">
                      {categories && Array.isArray(categories)
                        ? categories.map((category) => (
                            <label
                              key={"cat" + category._id}
                              className="flex items-center gap-x-4 cursor-pointer"
                              htmlFor={`${category._id}`}
                            >
                              <input
                                type="checkbox"
                                name={`${category.name}`}
                                id={`${category._id}`}
                                checked={filter.categories.includes(
                                  `${category._id}`
                                )}
                                onClick={(e) =>
                                  handleFilterUpdate(e, "categories")
                                }
                              />
                              <span className="text-md">{`${category.name}`}</span>
                            </label>
                          ))
                        : null}
                    </Stack>
                  ) : null}
                  {tab === "skills" ? (
                    <Stack direction="flex-col" gap="gap-8">
                      {skills && Array.isArray(skills)
                        ? skills.map((skill) => (
                            <label
                              key={"skill" + skill._id}
                              className="flex items-center gap-x-4 cursor-pointer"
                              htmlFor={`${skill._id}`}
                            >
                              <input
                                type="checkbox"
                                name={`${skill.name}`}
                                id={`${skill._id}`}
                                checked={filter.skills.includes(`${skill._id}`)}
                                onClick={(e) => handleFilterUpdate(e, "skills")}
                              />
                              <span className="text-md">{`${skill.name}`}</span>
                            </label>
                          ))
                        : null}
                    </Stack>
                  ) : null}
                  {tab === "ages" ? (
                    <Stack direction="flex-col" gap="gap-8">
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="5-8"
                      >
                        <input type="checkbox" name="5-8" id="5-8" />
                        <span className="text-md">5-8 Years Old</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="8-12"
                      >
                        <input type="checkbox" name="8-12" id="8-12" />
                        <span className="text-md">8-12 Years Old</span>
                      </label>
                      <label
                        className="flex items-center gap-x-4 cursor-pointer"
                        htmlFor="12-16"
                      >
                        <input type="checkbox" name="12-16" id="12-16" />
                        <span className="text-md">12-16 Years Old</span>
                      </label>
                    </Stack>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between items-center border-b bg-white px-6 pt-2 pb-4 border-t">
                <CustomButton
                  title="Close"
                  outlined
                  styles="shadow-lg bg-red-100"
                  whenClicked={() => setShow(false)}
                />
                <CustomButton
                  title="Apply Filter"
                  whenClicked={() => {
                    applyFilter();
                    setShow(false);
                  }}
                  styles="shadow-lg"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};
