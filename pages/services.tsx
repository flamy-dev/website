import React from "react";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import Page from "../components/Page/Page";
import ReactFullPage from "@fullpage/react-fullpage";
import Headings from "../components/Headings/Headings";
import { services } from "../data/services";
import MediaQuery from "react-responsive";

interface Props {}

interface State {}

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

class Services extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    return (
      <Page title="Flamy - Services">
        <div className="text-center">
          <MediaQuery minDeviceWidth={1000}>
            <ReactFullPage
              slidesNavigation={true}
              onLeave={this.onLeave.bind(this)}
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
              onLeave={this.onLeave.bind(this)}
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
  }
}

export default Services;
