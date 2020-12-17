import LazyImg from "../LazyImg";

const WorkDetail = (props) => {
  const { details } = props;

  return (
    <div className="overflow-y-scroll min-h-screen md:h-full md:min-h-0 md:overflow-hidden cursor-default flex justify-center flex-col items-center p-2 w-full border-none rounded-sm text-white bg-black lg:w-work ">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
          <h2 className="text-xl mb-2 md:mb-10 font-bold md:text-3xl text-center">
            {details.name}
          </h2>

          <div
            className={`flex jusify-center items-center  relative 
            ${details.needBg ? "bg-white p-2" : ""}
          `}
          >
            <LazyImg
              src={details.logoPath}
              className="w-full h-full"
              alt={details.name}
            />
          </div>
          <div className="mt-8 text-3xl font-extrabold text-center">
            {details.projectName}
          </div>
          <div className="my-2 text-gray-200">{details.tags}</div>

          <a
            href={details.link}
            className="block text-bold text-2xl text-blue-500 animated-link cursor-pointer hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={details.name}
          >
            Visit
          </a>
        </div>
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/4  m-1">
          <h3 className="font-extrabold text-xl">Description</h3>
          <div className="flex justify-center items-center flex-col pt-4 text-center text-gray-200">
            {details.description}
            <hr className=" md:hidden border-1 border-white w-full m-2"></hr>
          </div>
        </div>
        <div className="overflow-y-scroll flex flex-col m-1  justify-center md:justify-between items-center p-2 md:py-10 flex-grow md:items-stretch md:w-2/4 text-center md:text-center w-full md:h-screen">
          {details.details.map((detail, idx) => (
            <div
              key={detail.scPath}
              className="w-full flex flex-col-reverse md:flex-row justify-center items-center"
            >
              <div className="py-2 md:pr-2 text-sm md:text-md md:w-auto text-gray-200">
                {detail.scDescription}
              </div>
              <div className="w-full flex justify-center items-center">
                <LazyImg
                  src={detail.scPath}
                  className="w-40 md:w-3/5 lg:w-80"
                  alt={details.logoPath + " screenshot" + idx}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
