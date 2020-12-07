import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";
import PageCarousel from "../components/PageCarousel/PageCarousel";

const Services = () => {
  return (
    <Page title="Flamy - Services">
      <div className="w-full h-full hidden md:block">
        <FullPageDiv>
          <PageCarousel />
        </FullPageDiv>
      </div>
      <div className="md:hidden w-full h-full">
        <PageCarousel />
      </div>
    </Page>
  );
};

export default Services;
