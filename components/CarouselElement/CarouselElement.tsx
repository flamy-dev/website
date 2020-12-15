interface CarouselData {
  path: string;
  description: string;
  heading: string;
  isRight?: boolean;
  fromServices?: boolean;
  extraClass?: string;
}

const CarouselElement = (props: CarouselData) => {
  const {
    path,
    description,
    heading,
    isRight,
    fromServices,
    extraClass = "",
  } = props;
  return (
    <div className={extraClass}>
      <div
        className={`text-white pt-28 md:p-10 flex flex-col justify-center items-center md:flex-row h-full`}
      >
        {isRight ? null : (
          <div className="w-7/12 md:pr-10 lg:w-4/12 flex justify-center items-center">
            <img src={path} alt={heading} className="h-full w-full" />
          </div>
        )}
        <div className="flex flex-col justify-center items-center pb-8 md:py-10 md:w-3/5 mt-4">
          <h3 className="font-extrabold text-center text-3xl md:text-5xl mb-2 md:mb-8 px-2">
            {heading}
          </h3>
          <p
            className={`text-sm p-2 md:p-1  md:m-0 text-center md:text-lg lg:text-2xl w-full shadow-2xl text-gray-200 ${
              fromServices ? "box-shadow-services " : ""
            }`}
          >
            {description}
          </p>
        </div>
        {isRight && (
          <div className="md:pl-10 lg:w-2/5">
            <img src={path} alt={heading} className="h-full w-full" />
          </div>
        )}
      </div>
    </div>
  );
};
export default CarouselElement;
