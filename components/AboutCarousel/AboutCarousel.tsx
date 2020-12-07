import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import strings from "../../data/about";
import CarouselElement from "../CarouselElement/CarouselElement";
import Headings from "../Headings/Headings";

const AboutCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        showArrows={false}
        className={`hidden md:block h-auto md:m-10 w-full mt-32 md:mt-0`}
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
      <div className="md:hidden h-auto w-full mt-32 p-4 ">
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
      </div>
    </>
  );
};

export default AboutCarousel;
