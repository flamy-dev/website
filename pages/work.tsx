import React, { useState } from "react";
import Page from "../components/Page";
import clients from "../data/clients";
import Rodal from "rodal";
import WorkDetail from "../components/WorkDetail";
import "rodal/lib/rodal.css";
import LazyImg from "../components/LazyImg";

const Work = () => {
  const [details, setDetails] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Page
      title="Flamy - Work"
      description="Explore our previous work!"
      currentURL="https://www.flamy.dev/work"
    >
      <div className="w-screen flex justify-center items-center">
        <div className="pt-40 h-full w-full lg:w-1000 flex justify-center items-center flex-col px-2 text-white mb-10">
          <h1 className="text-5xl mb-4">
            Our <span className="font-extrabold">Work</span>
          </h1>
          <div className="containerN p-10">
            {clients.map((client) =>
              client.projects.map((project) => (
                <div
                  key={client.logo}
                  className={`group box cursor-pointer bg-opacity-40 ${
                    client.row ? `row-span-${client.row}` : ""
                  } ${client.col ? `col-span-${client.col}` : ""}`}
                  onClick={() => {
                    setDetails(
                      <WorkDetail client={client} project={project} />
                    );
                    setIsVisible(true);
                  }}
                >
                  <div className="content">
                    <LazyImg
                      src={client.logo}
                      alt={client.name}
                      className={`md:w-80 ${
                        client.needBg ? "group-hover:bg-white p-2" : ""
                      }`}
                    />
                    {/* <h3>Brand Name</h3> */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <Rodal
          visible={isVisible}
          onClose={() => {
            setIsVisible(false);
            setDetails(null);
          }}
          className="w-screen h-screen overflow-scroll bg-transparent"
          width="100vw"
          height="vh"
          customStyles={{ backgroundColor: "transparent" }}
          closeOnEsc={false}
        >
          {details}
        </Rodal>
      </div>
    </Page>
  );
};

export default Work;
