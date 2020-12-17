const WorkDetail = (props) => {
  const { details } = props;

  return (
    <div className="overflow-y-scroll min-h-screen md:h-full md:min-h-0 md:overflow-hidden cursor-default flex justify-center flex-col items-center p-2 w-full border-none rounded-sm text-white bg-black lg:w-work ">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
          <h2 className="text-xl md:mb-10">Brand Name</h2>

          <div className="flex jusify-center items-center  relative ">
            <img
              src="logo.svg"
              className="w-full h-full opacity-50"
              alt="background for logo"
            />
            <div className="rounded-full">
              <img
                src={details?.logoPath}
                alt="client logo"
                className="absolute w-36 p-4 clientLogo overflow-y-scroll"
              />
            </div>
          </div>
          <div className="mt-8 text-3xl font-extrabold text-center">
            Adidas Automatic Checkout
          </div>
          <div>#tag1 #tag2</div>

          <div className="text-blue-700 underline cursor-pointer hover:text-blue-500">
            flamy.dev
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
          <h3 className="font-extrabold text-xl">Description</h3>
          <div className="flex justify-center items-center pt-4 text-center">
            Lorem ipsum
          </div>
        </div>
        <div className="overflow-y-scroll flex flex-col m-1  justify-center md:justify-between items-center p-2 md:py-10 flex-grow md:items-stretch md:w-2/4 text-center md:text-center w-full md:h-screen">
          <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="py-2 md:pr-2 text-sm md:text-md md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt.
            </div>
            <div className="w-full flex justify-center items-center">
              <img
                src="adidas.png"
                className="w-40 md:w-3/5 lg:w-80"
                alt="adidas logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
