import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselElement from "../CarouselElement/CarouselElement";
import FullPageDiv from "../FullPageDiv/FullPageDiv";

const AboutCarousel = (props) => {
  const { strings } = props;
  return (
    <>
      <FullPageDiv extraClass="hidden md:flex">
        <Carousel
          autoPlay
          showArrows={false}
          className={`hidden md:block h-auto md:px-4 w-full md:mt-0`}
          infiniteLoop
          useKeyboardArrows
          showThumbs={false}
          swipeable={true}
          showStatus={false}
        >
          {strings.carousel.map((service) => {
            return (
              <CarouselElement
                key={service.heading}
                path={service.path}
                description={service.description}
                heading={service.heading}
              />
            );
          })}
        </Carousel>
      </FullPageDiv>
      {strings.carousel.map((service) => {
        return (
          <FullPageDiv extraClass="md:hidden" key={service.heading}>
            <CarouselElement
              path={service.path}
              description={service.description}
              heading={service.heading}
            />
          </FullPageDiv>
        );
      })}
    </>
  );
};

export default AboutCarousel;
