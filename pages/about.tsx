import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import ContactButton from "../components/ContactButton/ContactButton";
import constants from "../data/about";
import Tagline from "../components/Tagline/Tagline";
import ReactPageScroller from "react-page-scroller";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import AboutFlamy from "../components/AboutFlamy/AboutFlamy";
import CarouselElement from "../components/CarouselElement/CarouselElement";

const About = () => {
  const anchors = ["teaser", "meaning", "whowe", "meet"];

  const sections = [
    <FullPageDiv>
      <Tagline>{constants.tagline}</Tagline>
      <div className="mt-8 md:mt-20">
        <ContactButton>Get in touch</ContactButton>
      </div>
    </FullPageDiv>,
    <FullPageDiv noPadding={true}>
      <AboutFlamy />
    </FullPageDiv>,
    <FullPageDiv>
      <AboutCarousel />
    </FullPageDiv>,
    <FullPageDiv noPadding={true}>
      <CarouselElement
        path="il2.svg"
        description={constants.about.founder}
        isRight={true}
        heading={constants.about.heading}
      />
    </FullPageDiv>,
  ];

  return (
    <Page title="Flamy - About">
      {/* <FullPageDiv>
        <Tagline>{constants.tagline}</Tagline>
        <div className="mt-8 md:mt-20">
          <ContactButton>Get in touch</ContactButton>
        </div>
      </FullPageDiv> */}
      <ReactPageScroller
        pageOnChange={(to) => (window.location.hash = anchors[to])}
        containerHeight="100vh"
        containerWidth="100vw"
      >
        {sections.map((section) => section)}
      </ReactPageScroller>
    </Page>
  );
};

export default About;
