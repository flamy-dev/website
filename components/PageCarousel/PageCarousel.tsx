import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { services } from "../../data/services";
import CarouselElement from "../CarouselElement/CarouselElement";
import Headings from "../Headings/Headings";
import FullPageDiv from "../FullPageDiv/FullPageDiv";
import { useState, useCallback } from "react";
import _ from "lodash";

const PageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === services.length ? 0 : prev + 1));

  const lastSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  const onWheelHandler = useCallback(
    _.throttle((evt) => (evt.deltaY > 0 ? nextSlide() : lastSlide()), 1000),
    []
  );

  return (
    <div onWheel={onWheelHandler} className="w-full">
      <Carousel
        selectedItem={currentSlide}
        onChange={(slide) => setCurrentSlide(slide)}
        autoPlay
        showArrows={true}
        className={`hidden md:block h-auto md:m-10 w-full mt-32 md:mt-0`}
        infiniteLoop
        useKeyboardArrows
        showThumbs={false}
        swipeable={true}
        showStatus={false}
      >
        {services.map((service) => {
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
      <div className="md:hidden h-auto w-full">
        <FullPageDiv className="w-full ">
          <Headings>
            Services We Provide
            <div className="animate-bounce mt-4">&#8595;</div>
          </Headings>
        </FullPageDiv>
        {services.map((service) => {
          return (
            <FullPageDiv key={service.heading} noPadding={true}>
              <CarouselElement
                path={service.path}
                description={service.description}
                heading={service.heading}
              />
            </FullPageDiv>
          );
        })}
      </div>
    </div>
  );
};

export default PageCarousel;
