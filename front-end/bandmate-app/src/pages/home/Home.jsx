import React, { useContext, useEffect } from "react";
import "./home.css";
import { Rating } from "primereact/rating";
import "primeicons/primeicons.css";
import { RegisterContext } from "../../context/registerContext/RegisterContext";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Home = () => {
  const { visibleRegister, setVisibleRegister } = useContext(RegisterContext);
  const { isLog } = useContext(CurrentUserContext);

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      // Only animate once
    });
  }, []);

  const handleSetVisibleRegister = () => {
    setVisibleRegister(true);
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('../../src/assets/band-7014354_1280.jpg')] bg-cover bg-center filter blur-sm"></div>
        <div className="relative flex flex-col items-center mt-10 justify-center h-full p-8 md:p-20 lg:p-28">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Welcome to BandMate Connect
          </h1>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Find Your Sound!
          </h1>
          <h1 className="text-white text-xl md:text-2xl lg:text-2xl font-bold text-center p-5">
            Discover the Perfect Musician for Every Occasion
          </h1>
          <div className="flex justify-center">
            {!isLog && (
              <button
                onClick={handleSetVisibleRegister}
                className="text-white font-semibold text-lg bg-primaryButton hover:bg-primaryButton-hover rounded-lg p-3"
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="relative px-6 overflow-hidden bg-background md:px-cusPadding pt-10">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="relative bg-white flex flex-col items-center h-full m-3 p-5 lg:mx-cusPadding rounded-xl shadow-md"
        >
          <h1 className="text-3xl md:text-5xl p-4 text-gray-800 font-bold">
            Through Ours
          </h1>
          <div className="mx-1 p-2 flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div className="bg-slate-200 shadow-md text-white p-4 rounded-xl flex flex-col items-center justify-center">
                <div className="flex justify-center mb-3">
                  <img
                    src="./hr1.png"
                    alt=""
                    className="w-full lg:w-[450px] transform transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
                  Hire Musicians
                </h4>
                <p className="text-gray-700 text-base md:text-lg p-2">
                  Connect with skilled musicians easily. Our platform brings top
                  talent together, simplifying hiring for your music projects.
                  Start now!
                </p>
              </div>

              <div className="bg-slate-200 shadow-md text-white p-4 rounded-xl flex flex-col items-center justify-center">
                <div className="flex justify-center mb-3">
                  <img
                    src="./hr2.png"
                    alt=""
                    className="w-full lg:w-[450px] transform transition-transform duration-200 hover:scale-110"
                  />
                </div>
                <h4 className="text-xl md:text-2xl text-gray-700 font-semibold mb-2">
                  Trusted Partners
                </h4>
                <p className="text-gray-700 text-base md:text-lg p-2">
                  Collaborate with reliable experts effortlessly. Our platform
                  connects you with trusted professionals, ensuring quality and
                  confidence in every partnership. Join us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-5 bg-background">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="w-full md:w-1/2 shadow-md bg-slate-50"
        >
          <img
            src="../../src/assets/men-7484239_1280.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="p-6 md:p-10 flex-1"
        >
          <h1 className="text-3xl md:text-5xl text-gray-700 font-bold">
            How It Works
          </h1>
          <p className="pt-3 text-base md:text-lg text-gray-700 pb-4">
            With BandMate, finding the right musician is a breeze. Browse
            profiles, watch videos, and listen to audio samples to discover
            skilled musicians. Instantly connect through messaging, set up
            interviews, and schedule sessions all within our intuitive platform.
            Book confidently using verified reviews and streamlined booking
            tools to complete your project effortlessly.
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-400 text-gray-700 font-semibold text-lg rounded-md p-3">
              Hire Now
            </button>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-center py-6 mt-6 px-3"
      >
        <h1 className="text-3xl md:text-5xl text-gray-700 font-bold">
          Experts Of Sounds
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="container mx-auto p-4 md:p-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Shen Max",
              role: "Guitarist",
              image: "../../src/assets/colours-7402147_1280.jpg",
            },
            {
              name: "Guwen Charu",
              role: "Saxophonist",
              image: "../../src/assets/saxophone-4473023_1280.jpg",
            },
            {
              name: "Mark David",
              role: "Drummer",
              image: "../../src/assets/man-5979081_1280.jpg",
            },
            {
              name: "Rubi Shey",
              role: "Violinist",
              image: "../../src/assets/people-2591943_1280.jpg",
            },
          ].map((artist, idx) => (
            <div
              key={idx}
              className="bg-gray-200 text-black p-6 rounded-lg flex flex-col items-center shadow-lg transform transition-transform duration-200 hover:scale-110"
            >
              <div className="rounded-full overflow-hidden w-28 h-28">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={artist.image}
                  alt=""
                />
              </div>
              <h1 className="p-1 text-xl md:text-2xl text-gray-700 font-semibold">
                {artist.name}
              </h1>
              <p className="text-gray-700">{artist.role}</p>
              <Rating
                className="text-yellow-300"
                value={5}
                readOnly
                cancel={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-6 px-4 mt-8 md:px-cusPadding">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="w-full md:w-1/2 py-4"
        >
          <h1 className="text-2xl md:text-3xl text-gray-700 font-bold p-4">
            Why Hire Musicians Through Us?
          </h1>
          {[
            "Over 20 Years experience in the events industry",
            "All bands hand-picked by our team of experts",
            "Dedicated member of our team assigned to your event",
            "Professional contracts for your peace of mind",
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center py-2 px-3">
              <i
                className="pi pi-verified"
                style={{ fontSize: "1.25rem", color: "#ADD8E6" }}
              ></i>
              <p className="px-3 text-base md:text-xl text-gray-700">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="relative w-full h-auto md:w-1/2  p-4 m-4 mt-8 md:mt-0 flex flex-col items-center bg-background rounded-xl shadow-lg"
        >
          <div className="relative w-32 h-32 mb-4 overflow-hidden">
            <img
              className="object-cover w-full absolute h-full rounded-full"
              src="../../src/assets/girls-1741925_1280.jpg"
              alt="User testimonial"
            />
          </div>
          <Rating
            className="text-yellow-300 mb-4"
            value={5}
            readOnly
            cancel={false}
          />
          <p className="px-4 text-center text-base md:text-xl text-gray-700">
            Bandmate saved us so much time! We found a talented singer for our
            party within minutes. Definitely using this service again!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
