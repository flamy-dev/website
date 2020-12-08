interface CarouselData {
  path: string;
  description: string;
  heading: string;
  isRight?: boolean;
}

const CarouselElement = (props: CarouselData) => {
  const { path, description, heading, isRight } = props;

  return (
    <div className="my-10 md:my-0 md:p-10 flex justify-center flex-col items-center md:flex-row h-full">
      {isRight ? null : (
        <div className="md:mr-10 lg:w-4/12">
          <img src={path} alt={heading} className="h-full w-full " />
        </div>
      )}
      <div className="flex flex-col justify-center items-center h-full py-10 md:w-3/5">
        <h3 className="font-extrabold text-center text-5xl mb-2 md:mb-8">
          {heading}
        </h3>
        <p className="text-sm p-1 md:m-0 text-center md:text-lg lg:text-2xl w-full shadow-2xl text-gray-200">
          {description}
        </p>
      </div>
      {isRight && (
        <div className="md:ml-10 lg:w-2/5">
          <img src={path} alt={heading} className="h-full w-full" />
        </div>
      )}
    </div>
  );
};

export default CarouselElement;
