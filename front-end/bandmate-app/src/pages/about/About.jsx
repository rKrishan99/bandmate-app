import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {} from "./About.css";
import { Rating } from "primereact/rating";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className=" px-cusPadding bg-background py-10">
      <div className="flex flex-col bg-cardBg border-2 pb-10 rounded-xl shadow-lg mt-10 h-auto">
        <div className="flex flex-col items-center px-10 justify-center">
          <h1 className="text-5xl text-gray-700 mt-10 font-bold font-sans">
            About Us
          </h1>
          <hr className="border-none mt-6 w-full h-[1px] bg-slate-400"  />
        </div>

        <div className="flex flex-row justify-center gap-10 mt-10 ">
            <img
              className="w-[400px] rounded-xl"
              src="../../src/assests/saxophone-4473023_1280.jpg"
              alt=""
            />
          
          <div className="p-10 size-2/4 ">
            <p className="text-gray-700 text-lg pt-6 pl-3 text-center">
              We’re more than just a team; we're a passionate group of
              individuals driven by the mission to deliver exceptional services.
              Our story began with the simple idea of hire talented players, and
              since then, we've been dedicated to bringing this vision to life
              every day.
            </p>

            <div className="pt-5 pl-5 pb-3 flex justify-center ">
              <h3 className=" items-center   text-3xl font-semibold">
                Our Mission
              </h3>
            </div>
            <p className="pl-10 text-gray-700 text-lg text-center">
              Our mission is to give you to best service with trusterd and
              quality players hiring. We believe in quality, innovation,
              customer service, sustainability, etc., and this belief guides
              everything we do.
            </p>
            {/* 5 stars */}
            <div className="flex justify-center mt-6">
              <div>
                <i
                  className="pi pi-star-fill"
                  style={{ fontSize: "2rem", color: "#fde047" }}
                ></i>
              </div>
              <div>
                <i
                  className="pi pi-star-fill"
                  style={{ fontSize: "2rem", color: "#fde047" }}
                ></i>
              </div>
              <div>
                <i
                  className="pi pi-star-fill
"
                  style={{ fontSize: "2rem", color: "#fde047" }}
                ></i>
              </div>
              <div>
                <i
                  className="pi pi-star-fill
"
                  style={{ fontSize: "2rem", color: "#fde047" }}
                ></i>
              </div>
              <div>
                <i
                  className="pi pi-star-fill
"
                  style={{ fontSize: "2rem", color: "#fde047" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-xl bg-cardBg shadow-xl p-5 mb-8 mt-5">
          <div className="flex justify-center p-10 ">
            <h1 className="text-4xl  text-gray-700 font-bold">
              What We Do
            </h1>
          </div>

          <p className="px-20 pb-10 text-center text-gray-700 text-lg">
            At BandMate, we specialize in hiring quality professionl musicians.
            Whether it’s Sounds Experts , we strive to exceed expectations and
            deliver value. Our team of experts is here to support you and ensure
            that each experience is nothing short of excellent.
          </p>
          <div className="flex justify-center gap-12 mb-4">
            <div className="bg-black rounded-full round">
              <img
                className="object-cover w-full h-full rounded-full"
                src="../../src/assests/drum-set-1839383_1280.jpg"
                alt=""
              />
            </div>
            <div className="bg-black rounded-full round">
              <img
                className="object-cover w-full h-full rounded-full"
                src="../../src/assests/man-1281642_1280.jpg"
                alt=""
              />
            </div>
            <div className="bg-black rounded-full round">
              <img
                className="object-cover w-full h-full rounded-full"
                src="../../src/assests/music-sheet-5117328_1280.jpg"
                alt=""
              />
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default About;
