import ContactButton from "../ContactButton/ContactButton";
import Tagline from "../Tagline/Tagline";
import ReactModal from "react-modal";
import Link from "next/link";
const Welcome = (props) => {
  const { tagline } = props;
  const { showModal, setShowModal } = props;

  //for accessibility reasons.
  if (typeof window !== "undefined") {
    ReactModal.setAppElement("body");
  }

  return (
    <div className="z-10 flex justify-center items-center flex-col">
      <Tagline>{tagline}</Tagline>
      <div className="mt-8 md:mt-20 z-20">
        <ContactButton>
          <Link href="/contactus">
            <a>Get in touch</a>
          </Link>
        </ContactButton>
      </div>
      <ReactModal
        isOpen={showModal}
        contentLabel="Get In Touch Modal Bot"
        onRequestClose={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
        shouldCloseOnOverlayClick={true}
        overlayClassName="modal-overlay"
        className="modal-1-content"
      >
        <img src="/bot.svg" alt="bot" />
      </ReactModal>
      <ReactModal
        isOpen={showModal}
        contentLabel="Get In Touch Modal Message"
        onRequestClose={(e) => {
          e.stopPropagation();
          setShowModal(false);
        }}
        shouldCloseOnOverlayClick={true}
        overlayClassName="modal-overlay"
        className="modal-2-content"
      >
        <div className="w-full h-full message-clip-2 rounded-2xl bg-white lg:w-4/5">
          <div className="message-clip w-full h-4/5 p-2 md:p-10 ">
            <div className="text-center p-2 bg-black rounded-2xl flex flex-col justify-start pt-12 md:p-20 items-center h-full ">
              <h1 className="text-2xl md:text-5xl">Hey there!</h1>
              <p className="text-lg ">
                We would be glad to get in touch with you!
                <br></br>How can we help you today?
              </p>
              <div className=" flex flex-col md:flex-row justify-around items-center w-full mt-4">
                <Link href="/contactus">
                  <a className="animated-link hover:border-blue-200 text-md md:text-xl text-blue-500 hover:text-blue-200">
                    Discuss a project
                  </a>
                </Link>
                <Link href="/contactus">
                  <a className="animated-link hover:border-blue-200 text-md md:text-xl text-blue-500 hover:text-blue-200">
                    Get hired
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Welcome;
