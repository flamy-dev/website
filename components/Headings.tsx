const Headings = (props) => {
  const { children } = props;

  return (
    <h2
      className={`
      flex justify-center items-center flex-col
      font-extrabold text-4xl tracking-wide
      md:text-6xl text-center
      `}
    >
      {children}
    </h2>
  );
};

export default Headings;
