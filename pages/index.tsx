import Head from 'next/head'
import FullPageDiv from '../components/FullPageDiv/FullPageDiv'
import styles from '../styles/Home.module.css'
import Page from '../components/Page/Page';
import Headings from '../components/Headings/Headings';
import ContactButton from '../components/ContactButton/ContactButton';

export default function Home() {
  return (
    <Page title="Flamy - About">
      <FullPageDiv >
        <Headings size="large">
          We will build your digital future
        </Headings>
        <div className="mt-8 md:mt-20">
          <ContactButton>
            Get in touch
          </ContactButton>
        </div>
      </FullPageDiv>
    </Page>
  )
}
