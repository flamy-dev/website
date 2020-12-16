const WorkDetail = (props) => {
  const { details } = props;

  return (
    <div className="overflow-y-scroll md:overflow-hidden overflow-x-hidden min-h-screen cursor-default flex justify-center flex-col items-center p-2 w-full border-none rounded-sm text-white bg-black lg:w-work ">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
          <h2 className="text-xl md:mb-10">Brand Name</h2>

          <div className="flex jusify-center items-center  relative ">
            <img src="logo.svg" className="w-full h-full opacity-50" />
            <div className="clientLogo rounded-full">
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
        <div
          className="py-10 md:pb-0 overflow-y-scroll flex-col m-1 flex justify-center md:justify-between items-center p-2 flex-grow md:items-stretch md:w-2/4 text-justify md:text-center w-screen h-screen"
        >
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
