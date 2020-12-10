import HiringForm from "../HiringForm/HiringForm";

const ContactUsRight = (props) => {
  const { isActive } = props;

  return (
    <div className="mt-4 md:mt-0 flex flex-col justify-center items-center w-full md:p-2 h-full">
      <div className="hidden md:block w-full h-full">
        <div
          className={`text-center font-bold mb-2
          ${isActive ? "text-3xl" : "text-xl"}
        `}
        >
          Contact us for getting hired
        </div>
        {isActive && (
          <div className="text-center mb-2">
            We are constantly looking out for developers and designers.
            <br></br>
            Please reach out if you'd like to apply:
          </div>
        )}
        <HiringForm rightDiv={isActive} />
      </div>
      {/* for small screen */}
      <div className="md:hidden">
        <div className={`text-center font-bold mb-2 text-3xl`}>
          Contact us for getting hired
        </div>

        <div className="text-center">
          We are constantly looking out for developers and designers. Please
          reach out if you'd like to apply:
        </div>
        <HiringForm />
      </div>
    </div>
  );
};

export default ContactUsRight;
