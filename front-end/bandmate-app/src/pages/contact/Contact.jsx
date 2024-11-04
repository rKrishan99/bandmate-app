import React from "react";
import Navbar from "../../components/navbar/Navbar";
import IconLocation from "../../assests/svg/location-pin-svgrepo-com.svg";
import IconCall from "../../assests/svg/call-chat-svgrepo-com.svg";
import IconTime from "../../assests/svg/time-twenty-four-svgrepo-com.svg";
import {} from "./contact.css";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isSubmitted, setIsSubmitted] = useState(false); // Success state
  const [isFormVisible, setIsFormVisible] = useState(true); // Form visibility

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true); // Set loading to true when submitting

    // Simulate a network request with a timeout
    setTimeout(() => {
      setIsLoading(false); // Stop loading
      setIsSubmitted(true); // Show success message
      setIsFormVisible(false); // Hide form
    }, 2000); // Delay to mimic network request (e.g., 2 seconds)
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden bg-background px-cusPadding">
        <div className="relative bg-white flex-row items-start  h-full m-6 p-7 rounded-xl shadow-md pb-4">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-5xl text-gray-700 font-bold ">Get Touch In!</h1>
            <h4 className=" p-7 text-lg text-gray-700  ">
              Have questions or need help? We’re here to support you! Our app is
              designed to bring guitarists together in one place, making it easy
              for you to find the perfect musician for any project. Reach out if
              you’d like to know more or need assistance with the platform.
            </h4>
          </div>

          <div className="flex justify-between shadow-md bg-slate-50 m-5 mt-3">
            <div className="relative bg-slate-50 flex-row   h-full m-6 mt-0  contact">
              <div className="m-4 mt-5">
                <img src={IconLocation} alt="" className="h-7 w-7 my-1 mb-0" />
                <p className="text-sm font-bold  text-gray-700">
                  No.87,Rit Rit Park,Weherahena Road,
                </p>
                <p className="text-sm font-bold ">Kekanadura,Matara.</p>
              </div>
              <div className="m-4 my-2 p-0">
                <img src={IconCall} alt="" className="h-7 w-7 my-1 " />
                <p className="text-sm font-bold">041-22 65 345</p>
                <p className="text-sm font-bold">077-60 45 700</p>
                <p className="text-sm font-bold">070-80 90 900</p>
              </div>
              <div className="m-4 my-7">
                <img src={IconTime} alt="" className="h-7 w-7 my-1" />
                <p className="text-sm font-bold">open in 24 hours</p>
              </div>
            </div>
            <div className="flex-row ">
              {isFormVisible ? (
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="w-full max-w-md bg-slate-50 bg-opacity-90 p-6 rounded-lg form-padding "
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2 focus:outline-none "
                    ></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500 mb-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    ></label>
                    <input
                      type="email"
                      name="name"
                      id="email"
                      placeholder="Your E-mail "
                      className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500 mb-2
                    "
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    ></label>
                    <textarea
                      type="text"
                      name="name"
                      id="message"
                      placeholder="Your Message"
                      className="w-full h-1/2 px-3 py-2 form-textarea text-gray-700 border rounded focus:outline-none focus:border-blue-500 "
                    />
                    <button
                      type="submit"
                      className="bg-red-500 text-gray-700 font-semibold text-lg rounded-md p-1 hover:bg-red-600 form-button mt-2"
                      disabled={isLoading}
                    >
                      
                      {isLoading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white p-8 rounded shadow-md w-80 text-center success">
                  <h2 className="text-2xl font-bold mb-4 text-green-600">
                    Submited Successful!
                  </h2>
                  <p>Thank you .</p>
                </div>
              )}
              {isLoading && (
                <div className="flex justify-center mt-4">
                  <div className="loader"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
