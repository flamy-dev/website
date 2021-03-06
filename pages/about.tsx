import React, { useState } from "react";
import FullPageDiv from "../components/FullPageDiv";
import Page from "../components/Page";
import constants from "../data/about";
import CarouselElement from "../components/CarouselElement";
import OurClients from "../components/OurClients";
import Welcome from "../components/Welcome";
import ReactFullPage from "@fullpage/react-fullpage";
import strings from "../data/about";
import clients from "../data/clients";
import MediaQuery from "react-responsive";
import AboutFlamyElement from "../components/AboutFlamyElement";
import AboutCarousel from "../components/AboutCarousel";
import LazyImg from "../components/LazyImg";

const About = (props) => {
  const [showModal] = useState(false);

  return (
    <Page
      title={
        props.fromHome
          ? "Flamy - Development and Design Studio"
          : "Flamy - About"
      }
      description={
        props.fromHome
          ? "We are a highly determined team of experts that use cutting-edge technology to provide the best design and IT development solutions to our clients."
          : "We will build your digital future."
      }
      currentURL={
        props.fromHome
          ? "https://www.flamy.dev/"
          : "https://www.flamy.dev/about"
      }
    >
      <div className="text-white w-full h-full">
        <MediaQuery minDeviceWidth={1000}>
          <ReactFullPage
            slidesNavigation={true}
            navigation={true}
            licenseKey="U%a0foQ%r3"
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
                      logo="/static/images/logo-f.svg"
                    />
                    <LazyImg
                      src="/static/images/logo-f.svg"
                      className="hidden md:block h-auto w-4/12 lg:w-2/12 lg:px-10"
                      alt="Flamy Full Logo"
                    />
                    <AboutFlamyElement
                      description={constants.logo.phoenix_meaning}
                      logo="/static/images/logo-phoenix.svg"
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
                    path="/static/illustrations/founder.svg"
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
                    logo="/static/images/logo-f.svg"
                  />
                </div>
                <div className="section text-center -mt-20">
                  <AboutFlamyElement
                    description={constants.logo.phoenix_meaning}
                    logo="/static/images/logo-phoenix.svg"
                  />
                </div>
                <AboutCarousel
                  strings={strings}
                  parentClass="section"
                  slideClass="slide"
                />
                <div className="section text-center ">
                  <CarouselElement
                    path="/static/illustrations/founder.svg"
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
