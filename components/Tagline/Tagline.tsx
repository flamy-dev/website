const Tagline = (props) => {
  const { children } = props;

  return (
    <h1
      className={`
      flex justify-start xl:justify-center items-center 
      font-helvetica font-extrabold text-5xl tracking-wide
      md:text-8xl w-full
      `}
    >
      {children}
    </h1>
  );
};

export default Tagline;
