const Tagline = (props) => {
  const { children } = props;

  return (
    <h1
      className={`
        flex justify-center xl:justify-center items-center 
        font-extrabold text-5xl tracking-wide
        md:text-8xl w-full
        md:text-center
      `}
    >
      {children}
    </h1>
  );
};

export default Tagline;
