import React, { useContext } from "react";
import { CurrentUserContext } from "../../../context/currentUserContext/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { FunctionalityContext } from "../../../context/functionalityContext/FunctionalityContext";

const OptionMenu = () => {
  const { currentUser, setCurrentUser, isLog, setIsLog } =
    useContext(CurrentUserContext);
  const navigate = useNavigate();

  const {
    setVisiblePostAds,
    setVisibleEditInfo,
    setVisibleApplicants,
    setVisibleConfirmDelete,
  } = useContext(FunctionalityContext);

  return (
    <div className="bg-cardBg flex p-6 md:p-8 flex-col shadow-md rounded-xl">
      <div
        className={currentUser?.type === "player" ? "hidden" :"flex gap-2 items-cente cursor-pointer text-gray-800 hover:bg-gray-100 p-3 md:p-4 rounded-lg"}
        onClick={() => {
          setVisibleApplicants(true);
        }}
      >
        <img
          className="w-5 h-5 md:w-6 md:h-6"
          src="./application.png"
          alt="Notifications"
        />
        <span className="text-base md:text-lg font-semibold">
          Applications
        </span>
      </div>
      <hr className={currentUser?.type === "player" ? "hidden" :"bg-slate-600 mb-4 mt-4"} />
      <div
      className={currentUser?.type === "player" ? "hidden" : "flex gap-2 items-center cursor-pointer text-gray-800 hover:bg-gray-100 p-3 md:p-4 rounded-lg"}
        onClick={() => setVisiblePostAds(true)}
      >
        <img
          className="w-5 h-5 md:w-6 md:h-6"
          src="./create.png"
          alt="Post Ads"
        />
        <span className="text-base md:text-lg font-semibold">Post Ads</span>
      </div>
      <hr className={currentUser?.type === "player" ? "hidden" :"bg-slate-600 mb-4 mt-4"} />
      <div
        className="flex gap-2 items-center cursor-pointer text-gray-800 hover:bg-gray-100 p-3 md:p-4 rounded-lg"
        onClick={() => setVisibleEditInfo(true)}
      >
        <img className="w-5 h-5 md:w-6 md:h-6" src="./edit.png" alt="Draft" />
        <span className="text-base md:text-lg font-semibold">Edit Info</span>
      </div>
      <hr className="bg-slate-600 mb-4 mt-4" />
      <div
        className="flex gap-2 items-center cursor-pointer text-gray-800 hover:bg-gray-100 p-3 md:p-4 rounded-lg"
        onClick={() => setVisibleConfirmDelete(true)}
      >
        <img className="w-5 h-5 md:w-6 md:h-6" src="./delete.png" alt="Draft" />
        <span className="text-base md:text-lg font-semibold">
          Delete Account
        </span>
      </div>
      <div
        className="flex mt-6 gap-2 items-center bg-red-600 cursor-pointer text-gray-800 hover:bg-red-700 p-3 md:p-4 rounded-lg"
        onClick={() => {
          setCurrentUser(null);
          setIsLog(false);
          localStorage.removeItem("currentUser");
          navigate("/");
        }}
      >
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
  );
};

export default OptionMenu;
