import React from "react";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import constants from "../data/about";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import OurClients from "../components/OurClients/OurClients";
import Welcome from "../components/Welcome/Welcome";
import ReactFullPage from "@fullpage/react-fullpage";
import AboutFlamy from "../components/AboutFlamy/AboutFlamy";
import strings from "../data/about";
import clients from "../data/clients";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import MediaQuery from "react-responsive";
import AboutFlamyElement from "../components/AboutFlamyElement/AboutFlamyElement";

interface Props {}

interface State {
  showModal: boolean;
}

class TempAbout extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  setShowModal = (val) => {
    this.setState({
      showModal: val,
    });
  };

  onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  render() {
    const { showModal } = this.state;
    return (
      <Page title="Flamy - About">
        <div className="text-white w-full h-full">
          <MediaQuery minDeviceWidth={1000}>
            <FullPageDiv
              extraClass={`bg-about bg-center bg-no-repeat bg-50 md:bg-30 bg-opacity-20 ${
                showModal ? "opacity-30" : ""
              }`}
              id="about-hero"
            >
              <Welcome
                tagline={constants.tagline}
                showModal={showModal}
                setShowModal={this.setShowModal}
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
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1000}>
            <ReactFullPage
              onLeave={this.onLeave}
              render={(_) => (
                <ReactFullPage.Wrapper>
                  <div
                    className={`p-2 section bg-about bg-center bg-no-repeat bg-50 md:bg-30 bg-opacity-20 ${
                      showModal ? "opacity-30" : ""
                    }`}
                    id="about-hero"
                  >
                    <Welcome
                      tagline={constants.tagline}
                      showModal={showModal}
                      setShowModal={this.setShowModal}
                    />
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
                  {strings.carousel.map((service) => {
                    return (
                      <div
                        className="section text-center"
                        key={service.heading}
                      >
                        <CarouselElement
                          path={service.path}
                          description={service.description}
                          heading={service.heading}
                        />
                      </div>
                    );
                  })}
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
  }
}

export default TempAbout;
