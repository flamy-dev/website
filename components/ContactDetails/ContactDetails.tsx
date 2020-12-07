import { contactus } from "../../data/contactus";

const ContactDetails = () => {
  return (
    <div className="flex justify-center items-center w-full py-4">
      <div>
        {contactus.map((contact) => (
          <img
            src={contact.path}
            alt={contact.name}
            className="h-8 block mt-4"
          />
        ))}
      </div>
      <div className="flex flex-col justify-center mt-2 ml-8">
        {contactus.map((contact) => (
          <div key={contact.name} className=" mt-4 h-8">
            {contact.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
