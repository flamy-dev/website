import { useState } from "react";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import constants from "../data/about";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import AboutFlamy from "../components/AboutFlamy/AboutFlamy";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import OurClients from "../components/OurClients/OurClients";
import Welcome from "../components/Welcome/Welcome";
import strings from "../data/about";
import clients from "../data/clients";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Page title="Flamy - About">
      <FullPageDiv
        extraClass={`bg-about bg-center bg-no-repeat bg-50 md:bg-30 bg-opacity-20 ${
          showModal ? "opacity-30" : ""
        }`}
        id="about-hero"
      >
        <Welcome
          tagline={constants.tagline}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </FullPageDiv>
      <AboutFlamy />
      <AboutCarousel strings={strings} />
      <FullPageDiv noPadding={true} extraClass="hidden md:flex">
        <CarouselElement
          path="il2.svg"
          description={constants.about.founder}
          isRight={true}
          heading={constants.about.heading}
        />
      </FullPageDiv>
      <FullPageDiv noPadding={true} extraClass="md:hidden">
        <CarouselElement
          path="il2.svg"
          description={constants.about.founder}
          heading={constants.about.heading}
        />
      </FullPageDiv>
      <FullPageDiv noPadding={true}>
        <OurClients clients={clients} />
      </FullPageDiv>
    </Page>
  );
};

export default About;
