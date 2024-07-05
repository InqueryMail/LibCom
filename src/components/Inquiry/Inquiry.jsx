import React, { useState } from "react";
import Countries from "./Countries";
import OrganizationTypeList from "./OrganizationType";
import { Arrow, Email, Locaiton, Mobile } from "../../../public/inquiry.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inquiry = ({ className = "" }) => {
  const [countryCode, setCountryCode] = useState({
    code: "+91",
    nm: "https://flagcdn.com/in.svg",
  });
  const [organizationType, setOrganizationType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show submitting toast
    const submittingToastId = toast.info("Submitting...", { autoClose: false });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: `${countryCode.code}${e.target.phone.value}`,
      organization: e.target.organization.value,
      option: organizationType,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://inquerymail.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result.message);

      // Close submitting toast
      toast.dismiss(submittingToastId);

      // Show success toast
      toast.success("Form submitted successfully!");

      // Optionally reset form fields
      e.target.reset();
    } catch (error) {
      console.error("Failed to submit form:", error);

      // Close submitting toast
      toast.dismiss(submittingToastId);

      // Show error toast
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  return (
    <>
      <div
        className={`relative flex items-top justify-center h-full ${className}`}
      >
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                    Get in touch:
                  </h1>
                  <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                    Say something to start a Chat!
                  </p>
                  <div className="flex items-center mt-8 text-gray-600">
                    <div className="h-[32] w-[32]">
                      <Locaiton />
                    </div>
                    <div className="ml-4 text-md tracking-wide font-semibold max-w-[345px] text-left break-words">
                      Pushpraj Industrial Estate, B-53, Nutan Mill Rd, near City
                      Gold Cinema, Compount, Bapunagar, Ahmedabad, Gujarat
                      380018
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600">
                    <div className="h-[32] w-[32]">
                      <Mobile />
                    </div>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      <a
                        href="tel:+919825700741"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +91 9825700741
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-gray-600">
                    <div className="h-[32] w-[32]">
                      <Email />
                    </div>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      <a
                        href="mailto:rakesh@libracom.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        rakesh@libracom.org
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src="/undraw_opened_re_i38e.svg"
                    className="w-[80%]"
                    alt="Illustration"
                  />
                </div>
              </div>

              <form
                className="p-6 flex flex-col justify-center"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col mt-3">
                  <div className="flex items-center">
                    <button
                      id="dropdown-phone-button"
                      data-dropdown-toggle="dropdown-phone"
                      className="flex-shrink-0 z-10 inline-flex items-center py-3 px-3 h-full text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                      type="button"
                    >
                      <img
                        className="h-4 w-4 me-2"
                        src={countryCode.nm}
                        alt={`Flag of ${countryCode.code}`}
                      />
                      ({countryCode.code}) <Arrow />
                    </button>
                    <div
                      id="dropdown-phone"
                      className="z-10 hidden h-[250px] overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-phone-button"
                      >
                        {Countries.map((value) => (
                          <li key={value.name}>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setCountryCode({
                                  code: value.code,
                                  nm: value.flag,
                                });
                                document
                                  .getElementById("dropdown-phone")
                                  .classList.toggle("hidden");
                              }}
                            >
                              <img
                                className="h-4 w-4 me-2"
                                src={value.flag}
                                alt={`Flag of ${value.name}`}
                              />
                              {value.name} ({value.code})
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <label
                      htmlFor="phone"
                      className="ml-4 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Phone number:
                    </label>
                    <div className="relative w-full">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full py-3 px-3 rounded-r-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="organization" className="hidden">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    placeholder="Organization Name"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-3">
                  <div className="flex items-center relative">
                    <button
                      id="dropdown-organization-type-button"
                      data-dropdown-toggle="dropdown-organization-type"
                      className="flex-shrink-0 z-9 w-full inline-flex items-center justify-between py-3 px-3 h-full text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                      type="button"
                    >
                      <span>
                        {organizationType
                          ? organizationType
                          : "Select Organization Type"}
                      </span>
                      <Arrow className="ml-2" />
                    </button>
                    <div
                      id="dropdown-organization-type"
                      className="z-10 hidden h-[200px] overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-organization-type-button"
                      >
                        {OrganizationTypeList.map((value) => (
                          <li key={value.key}>
                            <button
                              type="button"
                              className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setOrganizationType(value.type);
                                document
                                  .getElementById("dropdown-organization-type")
                                  .classList.toggle("hidden");
                              }}
                            >
                              {value.key}. {value.type}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer for displaying notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000} // Automatically close after 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Inquiry;
