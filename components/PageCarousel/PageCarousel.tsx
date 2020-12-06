import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { services } from "../../data/services";
import CarouselElement from "../CarouselElement/CarouselElement";

const PageCarousel = () => {
  return (
    <>
      <Carousel autoPlay showArrows={true} className={`hidden md:block h-auto md:m-10 w-full mt-32 md:mt-0`} infiniteLoop useKeyboardArrows showThumbs={false} swipeable={true} showStatus={false}>
        {services.map((service) => {
          return (
            <CarouselElement key={service.heading} path={service.path} description={service.description} heading={service.heading} />
          )
        })}
      </Carousel>
      <div className="md:hidden h-auto w-full mt-32 p-4 ">
        {services.map((service) => {
          return (
            <CarouselElement key={service.heading} path={service.path} description={service.description} heading={service.heading} />
          )
        })}
      </div>
    </>
  )
}

export default PageCarousel;