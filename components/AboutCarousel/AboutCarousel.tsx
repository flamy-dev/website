import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselElement from "../CarouselElement/CarouselElement";

const AboutCarousel = (props) => {
  const { strings } = props;
  return (
    <>
      <Carousel
        autoPlay
        showArrows={false}
        className={`block h-auto md:px-4 w-full md:mt-0`}
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
    </>
  );
};

export default AboutCarousel;
