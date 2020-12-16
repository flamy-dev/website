import { Formik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formName = "discuss-clients";

const DiscussForm = (props) => {
  const { isLeftDivActive } = props;
  const formRef = useRef();

  return (
    <div className="my-8 lg:my-0 grid h-full w-full sm:place-items-start lg:place-items-center">
      <div
        className={`w-full p-2 bg-white
        ${isLeftDivActive ? "md:w-full lg:w-3/5 xl:w-2/5" : "lg:w-3/5"}

      `}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: "",
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
            message: Yup.string(),
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
              <label
                htmlFor="message"
                className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
              >
                Message
              </label>
              <textarea
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
              />
              <input type="hidden" name="form-name" value={formName} />

              <button
                type="submit"
                className="h-full w-full mt-6 font-medium tracking-widest uppercase text-blue-600 hover:text-blue-800 border-gray-100 border-2 hover:border-blue-500 focus:outline-none"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default DiscussForm;
