import React from "react";
import CarouselElement from "../components/CarouselElement/CarouselElement";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import PageCarousel from "../components/PageCarousel/PageCarousel";
import ReactFullPage from "@fullpage/react-fullpage";
import Headings from "../components/Headings/Headings";
import { services } from "../data/services";

interface Props {}

interface State {}

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
        {/* <Head>
          <title>My styled page</title>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <Menu /> */}
        <div className="w-full h-full hidden md:block">
          <FullPageDiv>
            <PageCarousel />
          </FullPageDiv>
        </div>
        <div className="md:hidden text-white">
          <ReactFullPage
            onLeave={this.onLeave.bind(this)}
            render={(comp) => (
              <ReactFullPage.Wrapper>
                <div className="section text-white">
                  <Headings>
                    Services We Provide
                    <div className="animate-bounce mt-4">&#8595;</div>
                  </Headings>
                </div>
                {services.map((service) => (
                  <div
                    key={service.heading}
                    className="section bg-transparent md:hidden"
                  >
                    <CarouselElement
                      path={service.path}
                      description={service.description}
                      heading={service.heading}
                    />
                  </div>
                ))}
              </ReactFullPage.Wrapper>
            )}
          />
        </div>
      </Page>
    );
  }
}

export default Services;
