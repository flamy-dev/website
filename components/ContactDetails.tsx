import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DiscussForm from "./DiscussForm";

const ContactDetails = (props) => {
  const { contactus, isLeftDivActive } = props;

  return (
    <div className="flex flex-col justify-center items-center w-full py-4">
      <div className="flex flex-wrap justify-center mb-2">
        {contactus.map((contact) => (
          <div
            key={contact.name}
            className="mt-2 mx-3 h-8 text-blue-600 hover:text-blue-900"
          >
            <a
              href={contact.url}
              className="text-black hover:text-blue-800"
              target="_blank"
            >
              <FontAwesomeIcon icon={contact.icon} size="lg" />
            </a>
          </div>
        ))}
      </div>
      <DiscussForm isLeftDivActive={isLeftDivActive} />
    </div>
  );
};

export default ContactDetails;
