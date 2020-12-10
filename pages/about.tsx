import { useState } from "react";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import constants from "../data/about";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import AboutFlamy from "../components/AboutFlamy/AboutFlamy";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import OurClients from "../components/OurClients/OurClients";
import Welcome from "../components/Welcome/Welcome";

const About = () => {
  //   const sections = [
  //     <FullPageDiv>
  //       <Tagline>{constants.tagline}</Tagline>
  //       <div className="mt-8 md:mt-20">
  //         <ContactButton>Get in touch</ContactButton>
  //       </div>
  //     </FullPageDiv>,
  //     <FullPageDiv noPadding={true}>
  //       <AboutFlamy />
  //     </FullPageDiv>,
  //     <FullPageDiv>
  //       <AboutCarousel />
  //     </FullPageDiv>,
  //     <FullPageDiv noPadding={true}>
  //       <CarouselElement
  //         path="il2.svg"
  //         description={constants.about.founder}
  //         isRight={true}
  //         heading={constants.about.heading}
  //       />
  //     </FullPageDiv>,
  //     <FullPageDiv>
  //       <OurClients />
  //     </FullPageDiv>,
  //   ];

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
      <AboutCarousel />
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
      <FullPageDiv>
        <OurClients />
      </FullPageDiv>
      <div className="w-full -mt-20 flex justify-between px-2 items-center bg-gray-900 text-white py-16">
        <img src="/logo.svg" alt="Flamy Logo" className="h-14 md:h-20 pl-4" />
        <div>Some Content</div>
      </div>
    </Page>
  );
};

export default About;
