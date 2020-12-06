import FullPageDiv from '../components/FullPageDiv/FullPageDiv'
import Page from '../components/Page/Page';
import ContactButton from '../components/ContactButton/ContactButton';
import constants from "../data/about";
import Tagline from '../components/Tagline/Tagline';

const About = () => {
  return (
    <Page title="Flamy - About">
      <FullPageDiv >
        <Tagline>
          {constants.tagline}
        </Tagline>
        <div className="mt-8 md:mt-20">
          <ContactButton>
            Get in touch
          </ContactButton>
        </div>
      </FullPageDiv>
    </Page>
  )
}

export default About;