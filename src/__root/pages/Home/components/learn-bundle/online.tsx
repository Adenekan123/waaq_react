import React from "react";
import { Card } from "./card";

export const Online = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:flex gap-4 md:gap-8 justify-center">
      <div className="basis-2/12">
        <Card
          image="/images/paths-coding.webp"
          heading="Coding"
          title="For Ages 8+"
        />
      </div>
      <div className="basis-2/12">
        <Card
          image="/images/paths-app-dev.webp"
          heading="App Dev"
          title="For Ages 8+"
        />
      </div>
      <div className="basis-2/12">
        <Card
          image="/images/paths-robotics.webp"
          heading="Robotics"
          title="For Ages 8+"
        />
      </div>

      <div className="basis-2/12">
        <Card
          image="/images/paths-ai.webp"
          heading="AI"
          title="For Ages 8+"
        />
      </div>
    </div>
  );
};
