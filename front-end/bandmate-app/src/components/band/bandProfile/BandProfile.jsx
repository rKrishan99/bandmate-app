import React from "react";
import Navbar from "../../navbar/Navbar";

const BandProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-cusPadding bg-background min-h-screen">
        {/* left part */}
        <div className="lg:w-[70%] mt-6 mx-auto max-w-full">
          {/* Profile details */}
          <div className="">
            <div className="relative">
              {/* Cover Image */}
              <img
                className="w-full h-[200px] md:h-[300px] object-cover rounded-t-xl"
                src="./band-cover.jpg"
                alt="Band Cover"
              />
              <img
                className="cursor-pointer w-6 absolute bottom-4 right-4"
                src="./edit.png"
                alt="Edit Cover"
              />
            </div>
            <div className="bg-white flex flex-col px-6 md:px-8 py-6 rounded-b-xl relative">
              {/* Avatar Image */}
              <img
                className="w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-full border-4 border-white absolute -top-16 md:-top-32 left-6 md:left-8"
                src="./band-avatar.jpg"
                alt="Band Profile"
              />

              <div className="mt-4 lg:mt-10">
                {/* Band Name and Description */}
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Band Name</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla consectetur aut itaque tempora praesentium, sit pariatur
                  in odit, et necessitatibus non molestias reprehenderit labore
                  sunt possimus rem! Quae, veritatis iusto.
                </p>
              </div>
            </div>
          </div>
          {/* Band posts */}
          <div>
            <div className="bg-cardBg p-6 md:p-8 rounded-xl mt-6"></div>
          </div>
        </div>
        {/* right part */}
        <div className="lg:w-[30%] mt-6 lg:ml-6">
          <div className="bg-cardBg flex p-6 md:p-8 flex-col rounded-xl">
            <div className="flex mb-6 gap-2 items-center bg-blue-700 cursor-pointer text-gray-800 hover:bg-blue-800 p-3 md:p-4 rounded-lg">
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src="./notification.png"
                alt="Notifications"
              />
              <span className="text-base md:text-lg text-white font-semibold">
                Notifications
              </span>
              <div className="bg-yellow-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <span className="text-xs text-gray-50">5</span>
              </div>
            </div>
            <div className="flex gap-2 items-center cursor-pointer text-gray-800 hover:bg-gray-100 p-3 md:p-4 rounded-lg">
              <img className="w-5 h-5 md:w-6 md:h-6" src="./create.png" alt="Post Ads" />
              <span className="text-base md:text-lg font-semibold">Post Ads</span>
            </div>
            <hr className="bg-slate-600 mb-4 mt-4" />
            <div className="flex gap-2 items-center cursor-pointer text-gray-800 hover:bg-gray-100 p-3 md:p-4 rounded-lg">
              <img className="w-5 h-5 md:w-6 md:h-6" src="./draft.png" alt="Draft" />
              <span className="text-base md:text-lg font-semibold">Draft</span>
            </div>
            <div className="flex mt-6 gap-2 items-center bg-red-600 cursor-pointer text-gray-800 hover:bg-red-700 p-3 md:p-4 rounded-lg">
              <img
                className="w-5 h-5 md:w-6 md:h-6"
                src="./logout-white.png"
                alt="Logout"
              />
              <span className="text-base md:text-lg text-white font-semibold">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandProfile;
