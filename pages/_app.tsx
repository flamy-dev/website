import "../styles/globals.css";
import { useEffect, useState } from "react";
import "lazysizes";
import "react-image-lightbox/style.css";
import Loader from "../components/Loader";

const MyApp = ({ Component, pageProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const hasLoaded = () => setIsLoaded(true);

  useEffect(() => {
    if (document.readyState !== "complete") {
      document.addEventListener("DOMContentLoaded", hasLoaded);
      window.addEventListener("load", hasLoaded);
      document.addEventListener("load", hasLoaded);
    } else setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded ? null : <Loader />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
