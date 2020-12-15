const AboutFlamyElement = (props) => {
  const { logo, description } = props;
  return (
    <div className="flex flex-col justify-center items-center w-full md:w-2/5 px-1">
      <img
        src={logo}
        alt="Flamy Logo Meaning"
        className="h-auto w-44 md:w-40 py-10 opacity-70"
      />
      <p>{description}</p>
    </div>
  );
};

export default AboutFlamyElement;
