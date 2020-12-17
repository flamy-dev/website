import React, { useState } from "react";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import constants from "../data/about";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import OurClients from "../components/OurClients/OurClients";
import Welcome from "../components/Welcome/Welcome";
import ReactFullPage from "@fullpage/react-fullpage";
import strings from "../data/about";
import clients from "../data/clients";
import MediaQuery from "react-responsive";
import AboutFlamyElement from "../components/AboutFlamyElement/AboutFlamyElement";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import LazyImg from "../components/LazyImg";

const About = () => {
  const [showModal] = useState(false);

  return (
    <Page
      title="Flamy - About"
      description="We will build your digital future."
      currentURL="https://www.flamy.dev/"
    >
      <div className="text-white w-full h-full">
        <MediaQuery minDeviceWidth={1000}>
          <ReactFullPage
            slidesNavigation={true}
            navigation={true}
            render={(_) => (
              <ReactFullPage.Wrapper>
                <div
                  className={`p-10 section flex justify-center items-center lg:p-2 bg-about bg-center bg-no-repeat bg-50 md:bg-30 bg-opacity-20 ${
                    showModal ? "opacity-30" : ""
                  }`}
                  id="about-hero"
                >
                  <Welcome tagline={constants.tagline} showModal={showModal} />
                </div>
                <FullPageDiv noPadding={true}>
                  <div className="text-gray-200 flex flex-row justify-between items-center w-full h-full text-center p-4 lg:px-20 text-sm md:text-lg lg:text-xl">
                    <AboutFlamyElement
                      description={constants.logo.f_meaning}
                      logo="/logo-f.svg"
                    />
                    <LazyImg
                      src="/logo.svg"
                      className="hidden md:block h-auto w-4/12 lg:w-2/12 lg:px-10"
                      alt="Flamy Full Logo"
                    />
                    <AboutFlamyElement
                      description={constants.logo.phoenix_meaning}
                      logo="/logo-phoenix.svg"
                    />
                  </div>
                </FullPageDiv>
                <AboutCarousel
                  strings={strings}
                  parentClass="section"
                  slideClass="slide"
                />
                <FullPageDiv noPadding={true}>
                  <CarouselElement
                    path="il2.svg"
                    description={constants.about.founder}
                    isRight={true}
                    heading={constants.about.heading}
                  />
                </FullPageDiv>
                <FullPageDiv noPadding={true}>
                  <OurClients clients={clients} />
                </FullPageDiv>
              </ReactFullPage.Wrapper>
            )}
          ></ReactFullPage>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1000}>
          <ReactFullPage
            render={(_) => (
              <ReactFullPage.Wrapper>
                <div
                  className={`p-2 section bg-about bg-center bg-no-repeat bg-50 md:bg-30 bg-opacity-20 ${
                    showModal ? "opacity-30" : ""
                  }`}
                  id="about-hero"
                >
                  <Welcome tagline={constants.tagline} showModal={showModal} />
                </div>
                <div className="section text-center -mt-20">
                  <AboutFlamyElement
                    description={constants.logo.f_meaning}
                    logo="/logo-f.svg"
                  />
                </div>
                <div className="section text-center -mt-20">
                  <AboutFlamyElement
                    description={constants.logo.phoenix_meaning}
                    logo="/logo-phoenix.svg"
                  />
                </div>
                <AboutCarousel
                  strings={strings}
                  parentClass="section"
                  slideClass="slide"
                />
                <div className="section text-center ">
                  <CarouselElement
                    path="il2.svg"
                    description={constants.about.founder}
                    heading={constants.about.heading}
                  />
                </div>
                <FullPageDiv noPadding={true}>
                  <OurClients clients={clients} />
                </FullPageDiv>
              </ReactFullPage.Wrapper>
            )}
          ></ReactFullPage>
        </MediaQuery>
      </div>
    </Page>
  );
};

export default About;
