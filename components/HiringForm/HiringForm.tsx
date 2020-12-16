import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formName = "hiring";

const HiringForm = (props) => {
  const { rightDiv } = props;
  const formRef = useRef(null);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const supportedFormats = ["application/pdf"];

  const fileSize = 1024 * 1024 * 10; //10mb

  const ErrorComponent = (props) => {
    console.log(props);
    return (
      <div className="pt-4 text-red-700 text-base flex justify-start items-center h-2 w-full pl-2">
        {props.children}
      </div>
    );
  };

  return (
    <div className="my-8 lg:my-0 grid h-full w-full sm:place-items-start lg:place-items-center">
      <div
        className={`w-full p-2 bg-white
        ${rightDiv ? "md:w-full lg:w-3/5 xl:w-2/5" : "lg:w-full"}
      `}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            github: "",
            linkedin: "",
            file: null,
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
            // message: Yup.string(),
            github: Yup.string().required("github url required"),
            linkedin: Yup.string().required("linkedin url required"),
            file: Yup.mixed()
              .required("CV Required")
              .test("fileSize", "File too large", (value) => {
                console.log("value", value);
                // console.log(value.size);
                return value && value.size <= fileSize;
              })
              .test(
                "fileFormat",
                "Unsupported Format",
                (value) => value && supportedFormats.includes(value.type)
              ),
          })}
          onSubmit={() => {
            const data = new FormData(formRef.current);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              // @ts-ignore
              body: new URLSearchParams(data).toString(),
            })
              .then(() => toast.success("Form successfully submitted."))
              .catch((error) => {
                toast.error("An error occured. Please try again.");
                console.log(error);
              });
          }}
        >
          {(formik) => (
            <form
              className="mt-6 md:mt-0"
              onSubmit={formik.handleSubmit}
              ref={formRef}
              data-netlify="true"
              name={formName}
            >
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
                    className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner
                      ${
                        formik.touched.firstName && formik.errors.firstName
                          ? "border-red-400"
                          : formik.touched.firstName
                          ? "border-green-400"
                          : ""
                      }
                    `}
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
                    className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none border-2 focus:bg-gray-300 focus:shadow-inner
                    ${
                      formik.touched.lastName && formik.errors.lastName
                        ? "border-red-400"
                        : formik.touched.lastName
                        ? "border-green-400"
                        : ""
                    }
                    `}
                    {...formik.getFieldProps("lastName")}
                  />
                </span>
              </div>
              {/* <ErrorMessage name="firstName" component={ErrorComponent} />
              <ErrorMessage name="lastName" component={ErrorComponent} /> */}

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
                className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner
                ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-400"
                    : formik.touched.email
                    ? "border-green-400"
                    : ""
                }
                `}
                {...formik.getFieldProps("email")}
              />
              {/* <ErrorMessage name="email" component={ErrorComponent} /> */}
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
                placeholder="900-490-2389"
                className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner
                ${
                  formik.touched.contact && formik.errors.contact
                    ? "border-red-400"
                    : formik.touched.contact
                    ? "border-green-400"
                    : ""
                }
                `}
                {...formik.getFieldProps("contact")}
              />
              {/* <ErrorMessage name="contact" component={ErrorComponent} /> */}
              {/* <label
                htmlFor="message"
                className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
              >
                Message
              </label> */}
              {/* <textarea
                id="message"
                name="message"
                placeholder="message"
                className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner
                ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-400"
                    : formik.touched.message
                    ? "border-green-400"
                    : ""
                }
                `}
                {...formik.getFieldProps("message")}
              /> */}
              {/* <ErrorMessage name="message" component={ErrorComponent} /> */}
              <label
                htmlFor="github"
                className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
              >
                Github Url
              </label>
              <input
                id="github"
                type="text"
                name="github"
                placeholder="https://github.com/flamy-dev"
                className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner
                ${
                  formik.touched.github && formik.errors.github
                    ? "border-red-400"
                    : formik.touched.github
                    ? "border-green-400"
                    : ""
                }
                `}
                {...formik.getFieldProps("github")}
              />
              <label
                htmlFor="linkedin"
                className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
              >
                Linkedin Url
              </label>
              <input
                id="linkedin"
                type="text"
                name="linkedin"
                placeholder="https://www.linkedin.com/company/flamy-dev/"
                className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner
                ${
                  formik.touched.linkedin && formik.errors.linkedin
                    ? "border-red-400"
                    : formik.touched.linkedin
                    ? "border-green-400"
                    : ""
                }
                `}
                {...formik.getFieldProps("linkedin")}
              />
              <input type="hidden" name="form-name" value={formName} />
              <div className="flex justify-between mt-2 gap-3">
                <span className="w-1/2">
                  <label
                    htmlFor="file"
                    className={`flex justify-center items-center border-2 py-2 mt-6 text-gray-600 hover:border-gray-500 uppercase cursor-pointer h-full
                    ${
                      formik.touched.file && formik.errors.file
                        ? "border-red-400"
                        : formik.touched.file
                        ? "border-green-400"
                        : ""
                    }
                    `}
                  >
                    <FontAwesomeIcon icon={faPaperclip} className="text-2xl" />{" "}
                    &nbsp;
                    {formik.touched.file && formik.errors.file
                      ? "Attach CV"
                      : formik.touched.file
                      ? "CV Attached!"
                      : "Attach CV"}
                  </label>
                  <input
                    id="file"
                    type="file"
                    name="file"
                    placeholder="file"
                    className="hidden w-full border-2 text-gray-700 appearance-none focus:outline-none cursor-pointer"
                    onChange={(e) => {
                      formik.setFieldValue("file", e.target.files[0]);
                    }}
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
              <div className="mt-6">
                <ErrorMessage name="file" component={ErrorComponent} />
              </div>

              {/* <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            Flamy Inc.
          </p> */}
            </form>
          )}
        </Formik>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default HiringForm;
