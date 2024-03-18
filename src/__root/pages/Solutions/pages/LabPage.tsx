import { Contacts, HeroSub } from "../../../../components/shared";
import { LabFeatures, LabIntro, LabPackages } from "../components";

export const LabPage = () => {
  return (
    <>
      <HeroSub
        page="Solutions / Lab"
        color="bg-blue-500"
        gradient="from-blue-600/80 to-blue-700"
      />
      <LabIntro />
      <LabFeatures />
      <LabPackages />
      <Contacts />
    </>
  );
};

