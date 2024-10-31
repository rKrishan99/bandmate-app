import React from "react";
import Navbar from "../../navbar/Navbar";

const BandProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row px-4 lg:px-12 bg-background min-h-screen">
        <div className="flex-1 bg-slate-500 rounded-xl mt-6 lg:mx-auto max-w-4xl">
          <div>
            {/* Cover Image */}
            <img
              className="w-full h-[200px] md:h-[300px] object-cover rounded-t-xl"
              src="./band-cover.jpg"
              alt="Band Cover"
            />
            <div className="bg-white px-8 py-6 relative">
              {/* Avatar Image */}
              <img
                className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white absolute -top-16 left-8"
                src="./band-avatar.jpg"
                alt="Band Profile"
              />
              <div className="pl-36 mt-10 lg:mt-0">
                {/* Band Name and Description */}
                <h1 className="text-2xl md:text-3xl font-bold">Band Name</h1>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla consectetur aut itaque tempora praesentium, sit pariatur
                  in odit, et necessitatibus non molestias reprehenderit labore
                  sunt possimus rem! Quae, veritatis iusto.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="w-full h-14 bg-red-400 flex items-center justify-center">
            <button className="text-white font-semibold">Follow</button>
          </div>

          {/* Band Info Section */}
          <div className="bg-white p-6 rounded-b-xl">
            <h2 className="text-xl font-bold mb-4">Band Info</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              consectetur aut itaque tempora praesentium, sit pariatur in odit,
              et necessitatibus non molestias reprehenderit labore sunt possimus
              rem! Quae, veritatis iusto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandProfile;
