import "../styles/globals.css";
import { useState, useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    window.onload = () => setIsLoaderVisible(false);
  }, []);

  return (
    <>
      {isLoaderVisible ? (
        <div className="flex fixed h-screen w-screen justify-center items-center z-100 bg-gray-500">
          Loading...
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
};

export default MyApp;
