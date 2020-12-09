import constants from "../../data/about";
import AboutFlamyElement from "../AboutFlamyElement/AboutFlamyElement";

const AboutFlamy = () => {
  return (
    <div className="text-gray-200 flex flex-col md:flex-row justify-between items-center w-full h-full text-center font-helvetica p-4 lg:px-20 md:text-xl">
      <AboutFlamyElement
        description={constants.logo.f_meaning}
        logo="/logo-f.svg"
      />
      <img
        src="/logo.svg"
        className="hidden md:block h-auto w-4/12 lg:w-2/12 lg:px-10"
      />
      <AboutFlamyElement
        description={constants.logo.phoenix_meaning}
        logo="/logo-phoenix.svg"
      />
    </div>
  );
};

export default AboutFlamy;
