interface CarouselData {
  path: string,
  description: string,
  heading: string
}

const CarouselElement = (props:CarouselData) => {
  const {path, description, heading} = props;

  return (
    <div className="md:p-10 flex justify-center flex-col items-center md:flex-row h-full">
      <div className="md:mr-10">
        <img src={path} alt={heading} className="h-auto"/>
      </div>
      <div className="flex flex-col justify-center items-center h-full py-10 md:w-3/5">
        <h3 className="font-extrabold text-4xl mb-2 md:mb-8">{heading}</h3>
        <p className="p-1 md:m-0 text-justify md:text-center text-lg w-full shadow-2xl">{description}</p>
      </div>
    </div>
  )
}

export default CarouselElement;