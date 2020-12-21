import ContactDetails from "./ContactDetails";

const ContactUsLeft = (props) => {
  const { isActive, contactus } = props;

  return (
    <div className="mt-4 md:mt-0 flex flex-col justify-center items-center w-full p-2 h-full">
      <div className="hidden md:block w-full h-full">
        <h2
          className={`text-center font-bold mb-2
          ${isActive ? "text-3xl" : "text-xl"}
        `}
        >
          Contact us for discussing a project
        </h2>

        <div
          className={`text-center mb-2 ${
            isActive ? "text-black" : "text-white"
          }`}
        >
          We are constantly looking for new people to collaborate and work with.
          <br></br>
          Get in touch by any of the following means.
        </div>

        <ContactDetails contactus={contactus} isLeftDivActive={isActive} />
      </div>
      {/* for small screen */}
      <div className="md:hidden">
        <h2 className={`text-center font-bold mb-2 text-3xl`}>
          Contact us for discussing a project
        </h2>

        <div className="text-center">
          We are constantly looking for new people to collaborate and work with.
          Get in touch by any of the following means:
        </div>
        <ContactDetails contactus={contactus} isLeftDivActive={isActive} />
      </div>
    </div>
  );
};

export default ContactUsLeft;
