import Head from 'next/head'
import FullPageDiv from '../components/FullPageDiv/FullPageDiv'
import styles from '../styles/Home.module.css'
import Page from '../components/Page/Page';

export default function Home() {
  return (
    <Page title="Flamy - About">
      <FullPageDiv >
        I'm a full page div
      </FullPageDiv>
    </Page>
  )
}
