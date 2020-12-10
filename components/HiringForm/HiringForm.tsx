import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const HiringForm = (props) => {
  const { rightDiv } = props;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="my-8 lg:my-0 grid h-full w-full sm:place-items-start lg:place-items-center">
      <div
        className={`w-full p-2 bg-white
        ${rightDiv ? "lg:w-3/5 xl:w-2/5" : "lg:w-full"}
      `}
      >
        <form className="mt-6 md:mt-0" onSubmit={onSubmitHandler}>
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                htmlFor="firstName"
                className="block text-xs font-bold text-gray-800 uppercase"
              >
                Firstname
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="John"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                onChange={handleFormDataChange}
              />
            </span>
            <span className="w-1/2">
              <label
                htmlFor="lastName"
                className="block text-xs font-semibold text-gray-800 uppercase"
              >
                Lastname
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Doe"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
                onChange={handleFormDataChange}
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
            onChange={handleFormDataChange}
          />
          <label
            htmlFor="contact"
            className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
          >
            Contact Number
          </label>
          <input
            id="contact"
            type="tel"
            name="contact"
            placeholder="+91 999-999-9999"
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
            onChange={handleFormDataChange}
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
            onChange={handleFormDataChange}
          />
          <div className="flex justify-between mt-2 gap-3">
            <span className="w-1/2">
              <label
                htmlFor="cv"
                className="flex justify-center items-center border-2 border-gray-100 py-2 mt-6 text-gray-600 uppercase hover:border-gray-300 cursor-pointer h-full"
              >
                <FontAwesomeIcon icon={faPaperclip} className="text-2xl" />{" "}
                &nbsp;Attach CV
              </label>
              <input
                id="cv"
                type="file"
                name="cv"
                placeholder="cv"
                className="hidden w-full text-gray-700 appearance-none focus:outline-none cursor-pointer"
              />
            </span>
            <span className="w-1/2">
              <button
                type="submit"
                className="h-full w-full mt-6 font-medium tracking-widest uppercase text-blue-600 hover:text-blue-800 border-gray-100 border-2 hover:border-blue-500 focus:outline-none"
              >
                Submit
              </button>
            </span>
          </div>
          {/* <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            Flamy Inc.
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
