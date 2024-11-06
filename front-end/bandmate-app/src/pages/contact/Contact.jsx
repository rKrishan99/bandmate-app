import React, { useEffect, useState } from "react";
import IconLocation from "../../assets/svg/location-pin-svgrepo-com.svg";
import IconCall from "../../assets/svg/call-chat-svgrepo-com.svg";
import IconTime from "../../assets/svg/time-twenty-four-svgrepo-com.svg";
import "./contact.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import PopupAlert from "../../components/alert/popupAlert/PopupAlert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({});
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    resetForm();

    setVisibleAlert(true);
    setAlertMessage("Submitted successfully!");
    setAlertInfo(true);
  };

  return (
    <div className="bg-background">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="relative h-auto overflow-hidden bg-background md:px-cusPadding py-10 pb-10"
      >
        <div className="relative bg-white flex-row items-start h-auto m-6 p-7 rounded-xl shadow-md pb-4">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-5xl text-gray-700 font-bold mt-4">
              Get Touch In!
            </h1>
            <h4 className="p-7 text-lg text-gray-700">
              Have questions or need help? We’re here to support you! Our app is
              designed to bring guitarists together in one place, making it easy
              for you to find the perfect musician for any project. Reach out if
              you’d like to know more or need assistance with the platform.
            </h4>
          </div>

          <div className="flex flex-col md:flex-row mt-10 h-auto justify-between">
            <div className="relative flex flex-col gap-6 h-full mt-0 contact">
              <div className="md:pl-6">
                <img src={IconLocation} alt="" className="h-7 w-7 my-1 mb-0" />
                <p className="text-sm font-bold text-gray-800">
                  No.87, Kandy Road ,Kiribathgoda,
                </p>
                <p className="text-sm font-bold text-gray-800">Gampaha.</p>
              </div>
              <div className="md:pl-6">
                <img src={IconCall} alt="" className="h-7 w-7 my-1" />
                <p className="text-sm font-bold text-gray-800">077-60 45 700</p>
                <p className="text-sm font-bold text-gray-800">041-22 65 345</p>
                <p className="text-sm font-bold text-gray-800">070-80 90 900</p>
              </div>
              <div className="md:pl-6">
                <img src={IconTime} alt="" className="h-7 w-7" />
                <p className="text-sm font-bold text-gray-800">
                  open in 24 hours
                </p>
              </div>
            </div>
            <div className="flex-row">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-opacity-90 p-6 rounded-lg form-padding"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  ></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500 mb-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500 mb-2"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  ></label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-1/2 px-3 py-2 form-textarea text-gray-700 border rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 font-medium text-lg text-white px-4 py-2 rounded-md hover:bg-blue-700 form-button mt-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <PopupAlert
        visible={visibleAlert}
        message={alertMessage}
        info={alertInfo}
        onClose={() => setVisibleAlert(false)}
      />
    </div>
  );
};

export default Contact;
