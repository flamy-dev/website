import { Formik } from "formik";
import * as Yup from "yup";

const DiscussForm = (props) => {
  const { isLeftDivActive } = props;

  //If we need to take contact number...

  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  //If we need Error to be displayed instead of highlighting border...

  // const ErrorComponent = (props) => {
  //   console.log(props);
  //   return (
  //     <div className="pt-4 text-red-700 text-base flex justify-center items-center h-2 w-full">
  //       {props.children}
  //     </div>
  //   );
  // };

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
            // contact: "",
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
            // contact: Yup.string()
            //   .matches(phoneRegExp, "Phone number is not valid")
            //   .required("Contact Required"),
            message: Yup.string(),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              console.log(values);
              alert(JSON.stringify(values, null, 2));
            }, 400);

            console.log(values);
          }}
        >
          {(formik) => (
            // @ts-ignore
            <form
              className="mt-6 md:mt-0"
              onSubmit={formik.handleSubmit}
              // netlify
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
              {/* <label
                htmlFor="contact"
                className="block mt-2 text-xs font-semibold text-gray-800 uppercase"
              >
                Contact Number
              </label>
              <input
                id="contact"
                type="tel"
                name="contact"
                placeholder=""
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
              /> */}
              {/* <ErrorMessage name="contact" component={ErrorComponent} /> */}
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
              {/* <ErrorMessage name="message" component={ErrorComponent} /> */}

              <button
                type="submit"
                className="h-full w-full mt-6 font-medium tracking-widest uppercase text-blue-600 hover:text-blue-800 border-gray-100 border-2 hover:border-blue-500 focus:outline-none"
              >
                Submit
              </button>
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

export default DiscussForm;
