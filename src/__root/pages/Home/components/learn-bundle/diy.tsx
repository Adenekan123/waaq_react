import React from "react";
import { Card } from "./card";

export const DIY = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:flex gap-4 md:gap-8 justify-center">
      <div className="basis-2/12">
        <Card
          image="/images/paths-robotics.webp"
          heading="Roboticts"
          title="For ages 8+"
        />
      </div>
      
      <div className="basis-2/12">
        <Card
          image="/images/paths-coding.webp"
          heading="Coding"
          title="For ages 8+"
        />
      </div>
      <div className="basis-2/12">
        <Card
          image="/images/paths-mechanical design.webp"
          heading="Mechanical Design"
          title="For ages 8+"
        />
      </div>
      <div className="basis-2/12">
        <Card
          image="/images/paths-iot_electronics.webp"
          heading="IoT & Electronics"
          title="For ages 8+"
        />
      </div>
    </div>
  );
};
