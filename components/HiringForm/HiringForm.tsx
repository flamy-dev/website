import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HiringForm = (props) => {
  const { rightDiv } = props;

  return (
    <div className="my-4 lg:my-0 grid h-full w-full place-items-center font-helvetica">
      <div
        className={`w-full p-2 bg-white
        ${rightDiv ? "lg:w-2/5" : "lg:w-full"}
      `}
      >
        <form className="mt-6">
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-xs font-bold text-gray-800 uppercase"
              >
                Firstname
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="John"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-xs font-semibold text-gray-800 uppercase"
              >
                Lastname
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Doe"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label
            htmlFor="email"
            className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="john.doe@company.com"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            htmlFor="phonenumber"
            className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
          >
            Contact Number
          </label>
          <input
            id="phonenumber"
            type="tel"
            name="phonenumber"
            placeholder="+91 999-999-9999"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            htmlFor="message"
            className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
          >
            Message
          </label>
          <input
            id="message"
            type="text"
            name="message"
            placeholder="message"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <div className="flex justify-between mt-2 gap-3">
            <span className="w-1/2">
              <label
                htmlFor="cv"
                className="flex justify-center items-center border-2 border-gray-100 py-2 mt-6 text-xs font-bold text-gray-600 uppercase hover:border-gray-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faPaperclip} className="text-2xl" />{" "}
                &nbsp;Attach CV
              </label>
              <input
                id="cv"
                type="file"
                name="cv"
                placeholder="cv"
                className="hidden w-full p-3 text-gray-700 appearance-none focus:outline-none cursor-pointer"
                required
              />
            </span>
            <span className="w-1/2">
              <button
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase text-blue-600 hover:text-blue-800 border-white border-2 hover:border-blue-500 focus:outline-none"
              >
                Submit &#8594;
              </button>
            </span>
          </div>
          {/* <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            Flamy Inc.
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
