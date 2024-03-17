import {
  CeoVideo,
  CompanyIntro,
  Contacts,
  HeroSub,
  Solutions,
} from "../../../components/shared";
import { MissionVision } from "./components";

const About = () => {
  return (
    <>
      <HeroSub page="About us" />
      <CompanyIntro />
      <MissionVision />
      <CeoVideo />
      <Solutions />
      <Contacts />
    </>
  );
};

export default About;
