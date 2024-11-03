import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";

export const NavDropdown = () => {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser, isLog, setIsLog } =
    useContext(CurrentUserContext);
  const { setVisiblePostAds, setVisibleEditInfo, setVisibleApplicants } =
    useContext(FunctionalityContext);

  return (
    <div className="p-4 w-auto">
      <div className="absolute top-0 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white -translate-y-2"></div>
      <Link to="/profile">
        <div className="flex gap-4 cursor-pointer text-gray-800 hover:bg-gray-100 p-4 rounded-lg">
          {currentUser.type === "band" && currentUser.imgpath === "band" ? (
            <img
              className="bg-slate-50 rounded-full border-2 w-14 h-14"
              src="./band.png"
              alt=""
            />
          ) : currentUser.type === "player" &&
            currentUser.imgpath === "player" ? (
            <img
              className="bg-slate-50 rounded-full border-2 w-14 h-14"
              src="./musician.png"
              alt=""
            />
          ) : (
            <img
              className="bg-slate-50 rounded-full border-2 w-14 h-14"
              src={`http://localhost:3000/images/${currentUser.imgpath}`}
            />
          )}
          <div className="flex flex-col">
            <span className="text-black font-bold text-xl">
              {currentUser.name}
            </span>
            <span className="text-black text-sm">{currentUser.category}</span>
          </div>
          <div className="flex items-center">
            <img className="w-12 h-12" src="./go-arrow.png" alt="" />
          </div>
        </div>
      </Link>
      <hr className="bg-slate-600 mb-4 mt-4" />

      <div
        className="flex items-center rounded-lg text-gray-800 hover:bg-gray-100 pl-4"
        onClick={() => {
          setVisiblePostAds(true);
        }}
      >
        <img className="w-5 h-5" src="./create.png" alt="" />
        <span className="block px-4 py-2">Post Ads</span>
      </div>

      <hr className="bg-slate-600 mt-4 mb-4" />
      <div className="pl-4 flex items-center rounded-lg text-gray-800 hover:bg-gray-100">
        <img className="w-5 h-5" src="./logout.png" alt="" />
        <button
          className="w-full text-left block px-4 py-2"
          onClick={() => {
            setCurrentUser(null);
            setIsLog(false);
            localStorage.removeItem("currentUser");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
