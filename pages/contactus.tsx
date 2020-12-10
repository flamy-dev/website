import { useState } from "react";
import ContactUsLeft from "../components/ContactUsLeft/ContactUsLeft";
import ContactUsRight from "../components/ContactUsRight/ContactUsRight";

import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";

const ContactUs = (props) => {
  const { active } = props;

  const [isLeftDivActive, setIsLeftDivActive] = useState(active ? false : true);

  return (
    <Page title="Flamy - Contact Us">
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
            <ContactUsLeft isActive={isLeftDivActive} />
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
