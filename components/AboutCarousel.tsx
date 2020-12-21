import CarouselElement from "./CarouselElement";

const AboutCarousel = (props) => {
  const { strings, parentClass = "", slideClass = "" } = props;
  return (
    <div className={`${parentClass} text-center`}>
      {strings.carousel.map((service) => {
        return (
          <CarouselElement
            extraClass={slideClass}
            key={service.heading}
            path={service.path}
            description={service.description}
            heading={service.heading}
          />
        );
      })}
    </div>
  );
};

export default AboutCarousel;
