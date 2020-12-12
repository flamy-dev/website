import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HiringForm = (props) => {
  const { rightDiv } = props;

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const supportedFormats = ["application/pdf"];

  const fileSize = 1024 * 1024 * 10;

  const ErrorComponent = (props) => {
    console.log(props);
    return (
      <div className="pt-4 text-red-700 text-base flex justify-center items-center h-2 w-full">
        {props.children}
      </div>
    );
  };

  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   contact: "",
  //   message: "",
  // });

  // const handleFormDataChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className="my-8 lg:my-0 grid h-full w-full sm:place-items-start lg:place-items-center">
      <div
        className={`w-full p-2 bg-white
        ${rightDiv ? "lg:w-3/5 xl:w-2/5" : "lg:w-full"}
      `}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            message: "",
            file: undefined,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("FirstName Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("LastName Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email Required"),
            contact: Yup.string()
              .matches(phoneRegExp, "Phone number is not valid")
              .required("Contact Required"),
            message: Yup.string(),
            file: Yup.mixed()
              .required("CV Required")
              .test(
                "fileSize",
                "File too large",
                (value) => value && value.size <= fileSize
              )
              .test(
                "fileFormat",
                "Unsupported Format",
                (value) => value && supportedFormats.includes(value.type)
              ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {(formik) => (
            <form className="mt-6 md:mt-0" onSubmit={formik.handleSubmit}>
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
                    {...formik.getFieldProps("firstName")}
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
                    {...formik.getFieldProps("lastName")}
                  />
                </span>
              </div>
              <ErrorMessage name="firstName" component={ErrorComponent} />
              <ErrorMessage name="lastName" component={ErrorComponent} />

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
                {...formik.getFieldProps("email")}
              />
              <ErrorMessage name="email" component={ErrorComponent} />
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
                {...formik.getFieldProps("contact")}
              />
              <ErrorMessage name="contact" component={ErrorComponent} />
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
                {...formik.getFieldProps("message")}
              />
              <ErrorMessage name="message" component={ErrorComponent} />
              <div className="flex justify-between mt-2 gap-3">
                <span className="w-1/2">
                  <label
                    htmlFor="file"
                    className="flex justify-center items-center border-2 border-gray-100 py-2 mt-6 text-gray-600 uppercase hover:border-gray-300 cursor-pointer h-full"
                  >
                    <FontAwesomeIcon icon={faPaperclip} className="text-2xl" />{" "}
                    &nbsp;Attach CV
                  </label>
                  <input
                    id="file"
                    type="file"
                    name="file"
                    placeholder="file"
                    className="hidden w-full text-gray-700 appearance-none focus:outline-none cursor-pointer"
                    {...formik.getFieldProps("file")}
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
              <div>
                <ErrorMessage name="file" component={ErrorComponent} />
              </div>

              {/* <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            Flamy Inc.
          </p> */}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default HiringForm;
