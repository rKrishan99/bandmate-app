import React, { useEffect } from "react";
import {} from "./About.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="px-10 lg:px-cusPadding bg-background py-10">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex flex-col bg-cardBg border-2 pb-10 rounded-xl shadow-lg mt-10 h-auto"
      >
        <div className="flex flex-col items-center px-10 justify-center">
          <h1 className="text-5xl text-gray-700 mt-10 font-bold font-sans">
            About Us
          </h1>
          <hr className="border-none mt-6 w-full h-[1px] bg-slate-400" />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          <img
            className="m-8 md:w-[400px] h-auto rounded-xl" // Responsive image
            src="../../src/assests/saxophone-4473023_1280.jpg"
            alt="Musician with Saxophone"
          />

          <div className="p-5 md:p-10 w-full md:w-2/4"> {/* Responsive width */}
            <p className="text-gray-700 text-lg text-center">
              We’re more than just a team; we're a passionate group of individuals driven by the mission to deliver exceptional services. Our story began with the simple idea of hiring talented players, and since then, we've been dedicated to bringing this vision to life every day.
            </p>

            <div className="pt-5 flex justify-center">
              <h3 className="text-3xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg text-center">
              Our mission is to provide you the best service with trusted and quality players hiring. We believe in quality, innovation, customer service, sustainability, etc., and this belief guides everything we do.
            </p>

            {/* 5 stars */}
            <div className="flex justify-center mt-6">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <i
                    className="pi pi-star-fill"
                    style={{ fontSize: "2rem", color: "#fde047" }}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="rounded-xl bg-cardBg shadow-xl p-5 mb-8 mt-5"
      >
        <div className="flex justify-center p-10">
          <h1 className="text-4xl text-gray-700 font-bold">What We Do</h1>
        </div>

        <p className="px-5 md:px-20 pb-10 text-center text-gray-700 text-lg">
          At BandMate, we specialize in hiring quality professional musicians. Whether it’s Sounds Experts, we strive to exceed expectations and deliver value. Our team of experts is here to support you and ensure that each experience is nothing short of excellent.
        </p>

        <div className="flex justify-center gap-10 mb-4 flex-wrap"> {/* Flex-wrap for responsive layout */}
          {[
            "../../src/assests/drum-set-1839383_1280.jpg",
            "../../src/assests/man-1281642_1280.jpg",
            "../../src/assests/music-sheet-5117328_1280.jpg",
          ].map((src, index) => (
            <div key={index} className="bg-black rounded-full overflow-hidden w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <img
                className="object-cover w-full h-full rounded-full"
                src={src}
                alt={`Musical image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
