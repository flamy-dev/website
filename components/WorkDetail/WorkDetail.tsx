import LazyImg from "../LazyImg";
import ReactMarkdown from "react-markdown";
import Lightbox from "react-image-lightbox";
import { useState } from "react";

const ImagesSection = (props) => {
  const { images } = props;
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="overflow-y-scroll flex flex-col m-1 justify-center items-center p-2 md:my-10 flex-grow md:content-start w-full md:w-1/3 text-center md:text-center md:h-screen">
        {images.map(({ path }, idx) => (
          <div
            key={path}
            className="w-full flex md:flex-row justify-center items-center p-2"
          >
            <LazyImg
              src={path}
              className="w-full cursor-pointer"
              alt={path + " screenshot" + idx}
              onClick={() => {
                setIsLightBoxOpen(true);
                setIndex(idx);
              }}
            />
          </div>
        ))}
      </div>
      {/* ); */}
      {isLightBoxOpen && (
        <Lightbox
          mainSrc={images[index].path}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsLightBoxOpen(false)}
          onMovePrevRequest={() =>
            setIndex((prev) => (prev + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setIndex((prev) => (prev + images.length + 1) % images.length)
          }
          reactModalProps={{ shouldCloseOnEsc: false }}
          imageTitle={images[index].caption}
        />
      )}
    </>
  );
};

const WorkDetail = (props) => {
  const { client, project } = props;

  return (
    <div className="overflow-y-scroll min-h-screen md:h-full md:min-h-0 md:overflow-hidden cursor-default flex justify-center flex-col items-center p-2 w-full border-none rounded-sm text-white bg-black lg:w-work ">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center p-2 w-full md:w-1/3  m-1">
          <h2 className="text-xl mb-2 md:mb-10 font-bold md:text-3xl text-center">
            {client.name}
          </h2>

          <div
            className={`flex jusify-center items-center  relative 
            ${client.needBg ? "bg-white p-2" : ""}
          `}
          >
            <LazyImg
              src={client.logo}
              className="w-full h-full"
              alt={client.name}
            />
          </div>
          <div className="mt-8 text-3xl font-extrabold text-center">
            {project.name}
          </div>
          <div className="my-2 text-gray-200 text-center">
            {project.tags.map((tag) => `#${tag}`).join(" ")}
          </div>

          <a
            href={project.link}
            className="block text-bold text-2xl text-blue-500 animated-link cursor-pointer hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.name}
          >
            Visit
          </a>
        </div>
        <div
          className={`flex flex-col justify-center items-center p-2 w-full m-1 work-description
          ${project.screenshots.length ? "md:w-1/3" : ""}
        `}
        >
          <h3 className="font-extrabold text-xl">Description</h3>
          <div className="flex justify-center items-center flex-col pt-4 text-center text-gray-200 description">
            <ReactMarkdown>{project.description}</ReactMarkdown>
            <hr className=" md:hidden border-1 border-white w-20 m-2"></hr>
          </div>
        </div>
        {project.screenshots.length > 0 && (
          <ImagesSection images={project.screenshots} />
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
