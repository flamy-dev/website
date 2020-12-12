import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactDetails = (props) => {
  const { contactus } = props;

  return (
    <div className="flex justify-center items-center w-full py-4">
      <div className="flex flex-col justify-center mt-2 ml-8">
        {contactus.map((contact) => (
          <div
            key={contact.name}
            className="mt-4 h-8 text-blue-600 hover:text-blue-900"
          >
            <a
              href={contact.url}
              className="text-black hover:text-blue-800"
              target="_blank"
            >
              <FontAwesomeIcon icon={contact.icon} size="lg" />
              <span className="ml-12">{contact.value} </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
