import { useState } from "react";
import ContactUsLeft from "../components/ContactUsLeft/ContactUsLeft";
import ContactUsRight from "../components/ContactUsRight/ContactUsRight";

import FullPageDiv from "../components/FullPageDiv/FullPageDiv";
import Page from "../components/Page/Page";

const ContactUs = () => {
  const [leftDiv, setLeftDiv] = useState(false);
  const [rightDiv, setRightDiv] = useState(true);

  return (
    <Page title="Flamy - Contact Us">
      <FullPageDiv noPadding={true}>
        <div className="mt-32 flex-col md:flex-row  h-full w-full flex justify-between items-center">
          <div
            className={`
            transition-all mb-10 md:mb-0
          bg-white text-black p-4 md:p-20 flex justify-center items-center md:mr-2 rounded-3xl w-full md:rounded-none md:rounded-r-3xl md:w-auto
            ${leftDiv ? "flex-grow" : ""}
          `}
            onClick={() => {
              setRightDiv(false);
              setLeftDiv(true);
            }}
          >
            <ContactUsLeft leftDiv={leftDiv} />
          </div>
          <div
            className={`
            transition-all mb-10 md:mb-0
          bg-white text-black p-4 md:p-20 flex justify-center items-center md:ml-2 rounded-3xl w-full md:rounded-none md:rounded-l-3xl md:w-auto mt-4 md:mt-0
            ${rightDiv ? "flex-grow" : ""}
          `}
            onClick={() => {
              setRightDiv(true);
              setLeftDiv(false);
            }}
          >
            <ContactUsRight rightDiv={rightDiv} />
          </div>
        </div>
      </FullPageDiv>
    </Page>
  );
};

export default ContactUs;
