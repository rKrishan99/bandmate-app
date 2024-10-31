import React from "react";
import { Link } from "react-router-dom";
import navDropdownItems from "./navDropdownItems";

export const NavDropdown = () => {
  return (
    <div className="p-4 w-auto ">
      <div className="absolute top-0 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white -translate-y-2"></div>
      <Link to="/profile">
        <div className="flex gap-4 cursor-pointer text-gray-800 hover:bg-gray-100 p-4 rounded-lg">
          <img
            className="bg-slate-50 rounded-full border-2 w-14 h-14"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-black font-bold text-xl">John Paker</span>
            <span className="text-black text-sm">Guitarist</span>
          </div>
          <div className="flex items-center">
            <img className="w-12 h-12" src="./go-arrow.png" alt="" />
          </div>
        </div>
      </Link>
      <hr className="bg-slate-600 mb-4 mt-4" />

      {navDropdownItems.map((item) => (
        <div className="flex items-center rounded-lg text-gray-800 hover:bg-gray-100 pl-4">
          <img className="w-5 h-5" src={item.icon} alt="" />
          <Link key={item.label} to={item.address} className="block px-4 py-2">
            {item.label}
          </Link>
        </div>
      ))}

      <hr className="bg-slate-600 mt-4 mb-4" />
      <div className="pl-4 flex items-center rounded-lg text-gray-800 hover:bg-gray-100">
        <img className="w-5 h-5" src="./logout.png" alt="" />
        <button className="w-full text-left block px-4 py-2">Logout</button>
      </div>
    </div>
  );
};
