import Page from "../components/Page/Page";
import { useRouter } from "next/router";
import FullPageDiv from "../components/FullPageDiv/FullPageDiv";

const Work = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Page title="Flamy - Work">
      <FullPageDiv >
        Work Page
      </FullPageDiv>
    </Page>
  ) 
}

export default Work;