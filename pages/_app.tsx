import "../styles/globals.css";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

const MyApp = ({ Component, pageProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      {isLoaded ? null : (
        <div className="flex fixed h-screen w-screen justify-center items-center bg-gray-500">
          <ReactSVG src="./logo.svg" renumerateIRIElements={false} />
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
