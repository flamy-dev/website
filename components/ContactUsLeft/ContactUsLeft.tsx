import ContactDetails from "../ContactDetails/ContactDetails";

const ContactUsLeft = (props) => {
  const { isActive } = props;

  return (
    <div className="mt-4 md:mt-0 font-helvetica flex flex-col justify-center items-center w-full p-2 h-full">
      <div className="hidden md:block w-full h-full">
        <div
          className={`text-center font-bold mb-2
          ${isActive ? "text-3xl" : "text-xl"}
        `}
        >
          Contact us for discussing a project
        </div>
        {isActive && (
          <div className="text-center mb-8">
            We are constantly looking for new people to collaborate and work
            with.
            <br></br>
            Get in touch by any of the following means:
          </div>
        )}
        <ContactDetails />
      </div>
      {/* for small screen */}
      <div className="md:hidden">
        <div className={`text-center font-bold mb-2 text-3xl`}>
          Contact us for discussing a project
        </div>

        <div className="text-center">
          We are constantly looking for new people to collaborate and work with.
          Get in touch by any of the following means:
        </div>
        <ContactDetails />
      </div>
    </div>
  );
};

export default ContactUsLeft;
