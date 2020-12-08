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
        <div className="md:mr-10">
          <img src={path} alt={heading} className="h-auto" />
        </div>
      )}
      <div className="flex flex-col justify-center items-center h-full py-10 md:w-3/5">
        <h3 className="font-extrabold text-center text-5xl mb-2 md:mb-8">
          {heading}
        </h3>
        <p className="text-sm p-1 md:m-0 text-center md:text-2xl w-full shadow-2xl text-gray-200">
          {description}
        </p>
      </div>
      {isRight && (
        <div className="md:ml-10">
          <img src={path} alt={heading} className="h-auto w-80" />
        </div>
      )}
    </div>
  );
};

export default CarouselElement;
