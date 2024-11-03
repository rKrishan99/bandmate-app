import React, { useContext, useState } from "react";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";

const Post = () => {
  const { openApply, setOpenApply } = useContext(FunctionalityContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="w-[1000px] flex p-4 flex-col h-auto pb-10 bg-cardBg rounded-xl relative">
      <div className="pl-5 mt-2 flex flex-row gap-6">
        <img
          className="rounded-full w-[80px] h-[80px]  border-2 border-zinc-400"
          src="./band.png"
          alt=""
        />
        <div className="flex flex-col gap-2 justify-center">
          <span className="text-2xl font-bold">Rajitha</span>
          <span className="text-sm text-gray-600 font-light">4 hours ago</span>
        </div>
        <div
          className="flex w-full justify-end cursor-pointer"
          onClick={toggleMenu}
        >
          <img className="w-10 h-10 absolute right-2" src="./more.png" alt="" />
          {showMenu && (
            <div className="mt-2 w-32 bg-white shadow-lg rounded-md">
              <ul className="flex flex-col">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    // Handle edit functionality
                    console.log("Edit clicked");
                    setShowMenu(false);
                  }}
                >
                  Edit
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    // Handle remove functionality
                    console.log("Remove clicked");
                    setShowMenu(false);
                  }}
                >
                  Remove
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-col px-6">
        <hr className="mb-4 border-none bg-slate-400 h-[1px]" />
        <h1 className="text-xl font-bold">For find guitarist</h1>
        <p className="mt-3 text-md text-slate-800">
          Hi, I'm looking for a guitarist to play at my wedding. I'm looking for
          someone who can play a variety of songs and is willing to learn a few
          new ones. The wedding is on August 15th, so I need someone who is
          available on that date. If you're interested, please send me a message
          with your rates and availability. Thanks!
        </p>
        <span className="mt-3 font-medium">Payment</span>
        <div className="flex flex-row gap-2 mt-1">
          <span>Rs.10000</span>
          <span>-</span>
          <span>Rs.30000</span>
        </div>
        <hr className="mt-4 border-none bg-slate-400 h-[1px]" />
        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-600 text-white cursor-pointer px-8 py-2 rounded-md"
            onClick={() => setOpenApply(true)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
