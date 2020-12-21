import { useState } from "react";
import ContactUsLeft from "../components/ContactUsLeft";
import ContactUsRight from "../components/ContactUsRight";
import { contactus } from "../data/contactus";
import FullPageDiv from "../components/FullPageDiv";
import Page from "../components/Page";

const ContactUs = (props) => {
  const { active } = props;

  const [isLeftDivActive, setIsLeftDivActive] = useState(active ? false : true);

  return (
    <Page
      title="Flamy - Contact Us"
      description="Reach out to us for discussing a project or to work with us!"
      currentURL="https://www.flamy.dev/contact"
    >
      <FullPageDiv noPadding={true}>
        <div className="mt-32 sm:mt-36 flex-col md:flex-row  h-full w-full flex justify-between items-stretch">
          <div
            className={`
            transition-all mb-10 md:mb-0
          bg-white text-black p-4 md:p-20 flex justify-center items-center md:mr-2 rounded-3xl w-full md:rounded-none md:rounded-r-3xl md:w-auto
            ${isLeftDivActive ? "flex-grow" : ""}
          `}
            onClick={() => {
              setIsLeftDivActive(true);
            }}
          >
            <ContactUsLeft isActive={isLeftDivActive} contactus={contactus} />
          </div>
          <div
            className={`
            transition-all mb-10 md:mb-0
          bg-white text-black p-4 md:p-20 flex justify-center items-center md:ml-2 rounded-3xl w-full md:rounded-none md:rounded-l-3xl md:w-auto mt-4 md:mt-0
            ${!isLeftDivActive ? "flex-grow" : ""}
          `}
            onClick={() => {
              setIsLeftDivActive(false);
            }}
          >
            <ContactUsRight isActive={!isLeftDivActive} />
          </div>
        </div>
      </FullPageDiv>
    </Page>
  );
};

export default ContactUs;
