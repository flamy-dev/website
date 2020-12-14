const WorkDetail = (props) => {
  const { details } = props;

  return (
    <div className="flex justify-between flex-col items-center p-2 w-full border-2 border-white m-2 text-white bg-black bg-opacity-75 lg:w-work ">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
          <h2 className="text-xl">Brand Name</h2>

          <div className="flex jusify-center items-center  relative ">
            <img src="insta.png" className="w-full h-full opacity-50" />
            <img
              src={details.logoPath}
              alt="client logo"
              className="absolute w-36 rounded-full bg-blue-200 border-2 border-gray-300 clientlogo"
            />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem
            aliquid incidunt voluptatum. Nesciunt molestias, qui excepturi
          </div>
        </div>
        <div className=" overflow-y-scroll flex-col m-1 flex justify-between p-2 flex-grow  items-stretch max-height w-full md:w-2/4 text-justify md:text-center">
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
          <div className="w-full flex justify-center items-center  m-1 p-1">
            <div className="mr-1 text-xs md:text-base md:w-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              cumque minima facilis eos nesciunt illo ab maxime laborum natus,
              nobis perspiciatis.
            </div>
            <div className="w-full">
              <img src="insta.png" className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
