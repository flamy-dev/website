import constants from "../../data/about";

const AboutFlamy = () => {
  return (
    <div className="text-gray-200 flex flex-col md:flex-row justify-between items-center w-full h-full text-center font-helvetica p-2 md:text-xl">
      <div className="flex flex-col justify-center items-center w-full md:w-2/5 slef-start mx-1">
        <img src="/logo-f.svg" className="h-auto w-40 py-10 opacity-70" />
        <p>{constants.logo.f_meaning}</p>
      </div>
      <img src="/logo.svg" className="h-auto w-4/12 lg:w-2/12 lg:mx-10" />
      <div className="flex flex-col justify-center items-center w-full md:w-2/5 self-start mx-1">
        <img src="logo-phoenix.svg" className="h-auto w-40 py-10 opacity-70" />
        <p>{constants.logo.phoenix_meaning}</p>
      </div>
    </div>
  );
};

export default AboutFlamy;
