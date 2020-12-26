import { ReactSVG } from "react-svg";

const Loader = () => {
  return (
    <div className="flex fixed h-screen w-screen justify-center items-center bg-black z-top">
      <ReactSVG
        src="./static/images/logo.svg"
        renumerateIRIElements={false}
        className="wrapper"
      />
    </div>
  );
};

export default Loader;
