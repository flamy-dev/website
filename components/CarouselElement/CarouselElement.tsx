interface CarouselData {
  path: string;
  description: string;
  heading: string;
  isRight?: boolean;
}
const CarouselElement = (props: CarouselData) => {
  const { path, description, heading, isRight } = props;
  return (
    <div className="pt-28 md:p-10 flex flex-col justify-center items-center md:flex-row h-full">
      {isRight ? null : (
        <div className="w-7/12 md:pr-10 lg:w-4/12 flex justify-center items-center h-full">
          <img src={path} alt={heading} className="h-full w-full" />
        </div>
      )}
      <div className="flex flex-col justify-center md:justify-center items-center h-full pb-8 md:py-10 md:w-3/5">
        <h3 className="font-extrabold text-center text-3xl md:text-5xl mb-2 md:mb-8 px-2">
          {heading}
        </h3>
        <p className="text-sm p-2 md:p-1  md:m-0 text-center md:text-lg lg:text-2xl w-full shadow-2xl text-gray-200">
          {description}
        </p>
      </div>
      {isRight && (
        <div className="md:pl-10 lg:w-2/5">
          <img src={path} alt={heading} className="h-full w-full" />
        </div>
      )}
    </div>
  );
};
export default CarouselElement;
