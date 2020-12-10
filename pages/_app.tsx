import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  // const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  // useEffect(() => {
  //   window.onload = () => setIsLoaderVisible(false);
  // }, []);

  return (
    <>
      {/* {isLoaderVisible ? (
        <div className="flex fixed h-screen w-screen justify-center items-center bg-gray-500">
          Loading...
        </div>
      ) : ( */}
      <Component {...pageProps} />
      {/* )} */}
    </>
  );
};

export default MyApp;
