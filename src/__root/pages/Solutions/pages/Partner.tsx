import { Contacts, HeroSub } from "../../../../components/shared";
import { PartnerBenefits, PartnershipForm, Partnertro } from "../components";

export const Partner = () => {
  return (
    <>
      <HeroSub
        page="Solutions / Partner"
        color="bg-violet-500"
        gradient="from-violet-600/80 to-violet-700"
      />
      <Partnertro />
      <PartnerBenefits />
      <PartnershipForm />
      <Contacts />
    </>
  );
};
