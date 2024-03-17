import { Hero } from "../../../components/shared"
import { CeoVideo } from "../../../components/shared/ceo-video"
import { CompanyIntro } from "../../../components/shared/company-intro"
import { Contacts } from "../../../components/shared/contacts"
import { Solutions } from "../../../components/shared/solutions"
import HeroWithImg from "./components/hero-with-img"
import { LearnBundle } from "./components/learn-bundle"

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Solutions />
      <CeoVideo />
      <LearnBundle />
      {/* <BestSellers /> */}
      <HeroWithImg />
      <Contacts />
    </>
  )
}

export default Home