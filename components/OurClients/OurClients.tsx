import _ from "lodash";

const OurClients = (props) => {
  const { clients } = props;
  const chunkSize = 3;

  return (
    <div className="pt-16 w-full flex flex-col justify-center items-center md:w-11/12 h-full">
      <div className="flex justify-center items-center text-3xl mb-2 md:text-5xl md:mb-10">
        Our <span className="font-bold">&nbsp; Clients</span>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center lg:justify-between w-full md:w-client">
        {_.chunk(clients, chunkSize).map((clientChunk, idx) => (
          <div className="flex flex-row items-center" key={idx}>
            {clientChunk.map(({ link, logoPath, needBg }) => (
              <a href={link} target="_blank" key={logoPath}>
                <img
                  src={logoPath}
                  className={`w-20 m-5 ml-1 md:m-5 md:w-32 grayscale transition-all ${
                    needBg ? "bg-white p-2 " : ""
                  }`}
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
