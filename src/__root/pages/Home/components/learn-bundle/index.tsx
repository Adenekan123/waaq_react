"use client"
import { useState } from "react";
import { DIY } from "./diy";
import { Online } from "./online";
import { Container, Stack } from "../../../../../components/ui";
import { Heading } from "../../../../../components/typography";

export const LearnBundle = () => {
  const [tab, setTab] = useState<"diy" | "online">("diy");
  return (
    <div className={`${tab === "diy" ? "bg-green-500" : "bg-violet-500"} py-12 md:py-24`}>
      <Container>
        <Stack direction="flex-col" gap="gap-12"> 
        <Heading
          title="How Would Your Child Prefer to Learn?"
          styles="text-white text-center"
        />
        <Stack styles="justify-center" gap="gap-x-10" direction="flex-row">
          <button
            className={`border-0 ${tab === "diy" ? 'border-b-4' : ''}  border-white bg-none outline-none pb-2 font-bold ${
              tab === "diy" ? "text-white" : "text-stone-200"
            }`}
            onClick={()=>setTab('diy')}
          >
            Using a DIY Kit
          </button>
          <button
            className={`border-0 ${tab === "online" ? 'border-b-4' : ''}  border-white bg-none outline-none pb-2 font-bold ${
              tab === "online" ? "text-white" : "text-stone-200"
            }`}
            onClick={()=>setTab('online')}
          >
            Online Classroom
          </button>
        </Stack>
        {tab === "diy" ? <DIY /> : null}
        {tab === "online" ? <Online /> : null}
        </Stack>
      </Container>
    </div>
  );
};
