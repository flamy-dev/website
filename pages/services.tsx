import React from "react";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import Page from "../components/Page/Page";
import ReactFullPage from "@fullpage/react-fullpage";
import Headings from "../components/Headings/Headings";
import { services } from "../data/services";
import MediaQuery from "react-responsive";

const Slides = ({ className, showIntro = true }) => {
  return (
    <>
      {showIntro ? (
        <div className={`${className} text-white`}>
          <Headings>
            Services We Provide
            <div className="animate-bounce mt-4">&#8595;</div>
          </Headings>
        </div>
      ) : null}
      {services.map((service) => (
        <CarouselElement
          extraClass={`${className} bg-transparent md:hidden`}
          path={service.path}
          description={service.description}
          heading={service.heading}
        />
      ))}
    </>
  );
};

const Services = () => (
  <Page title="Flamy - Services">
    <div className="text-center m-6">
      <MediaQuery minDeviceWidth={1000}>
        <ReactFullPage
          slidesNavigation={true}
          render={(_) => (
            <ReactFullPage.Wrapper>
              <div className="section">
                <Slides className="slide" showIntro={false} />
              </div>
            </ReactFullPage.Wrapper>
          )}
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1000}>
        <ReactFullPage
          navigation={true}
          render={(_) => (
            <ReactFullPage.Wrapper>
              <Slides className="section" />
            </ReactFullPage.Wrapper>
          )}
        />
      </MediaQuery>
    </div>
  </Page>
);

export default Services;
