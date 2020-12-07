import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import ContactButton from "../components/ContactButton/ContactButton";
import constants from "../data/about";
import Tagline from "../components/Tagline/Tagline";
import ReactPageScroller from "react-page-scroller";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";

const About = () => {
  const anchors = ["teaser", "meaning", "whowe", "meet"];

  const sections = [
    <FullPageDiv>
      <Tagline>{constants.tagline}</Tagline>
      <div className="mt-8 md:mt-20">
        <ContactButton>Get in touch</ContactButton>
      </div>
    </FullPageDiv>,
    <FullPageDiv>
      <Tagline>{constants.tagline}</Tagline>
      <div className="mt-8 md:mt-20">
        <ContactButton>Get in touch</ContactButton>
      </div>
    </FullPageDiv>,
    <FullPageDiv>
      <AboutCarousel />
    </FullPageDiv>,
    <FullPageDiv>
      <Tagline>{constants.tagline}</Tagline>
      <div className="mt-8 md:mt-20">
        <ContactButton>Get in touch</ContactButton>
      </div>
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
