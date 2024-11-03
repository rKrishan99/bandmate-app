import React, { useContext, useEffect, useState } from "react";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import axios from "axios";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
import { ApplyDataContext } from "../../context/applyDataContext/ApplyDataContext";

const Post = () => {
  const { openApply, setOpenApply } = useContext(FunctionalityContext);
  const [openMenuId, setOpenMenuId] = useState(null); // Track which vacancy menu is open
  const [vacancies, setVacancies] = useState([]); // State to store fetched vacancies
  const { isLog, currentUser } = useContext(CurrentUserContext);
  const { applyData, setApplyData } = useContext(ApplyDataContext);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id); // Toggle the menu for each vacancy item
  };

  useEffect(() => {
    console.log("applyData updated:", applyData);
  }, [applyData]);

  const handleApplyClick = (vacancy) => {
    setApplyData({
      vacancyID: vacancy.vacancyID,
      title: vacancy.title,
      description: vacancy.description,
      priceMin: vacancy.priceMin,
      priceMax: vacancy.priceMax,
    });

    setOpenApply(true);
    console.log("Apply data set for:", applyData);
  };

  useEffect(() => {
    console.log("isLog:", isLog, "currentUser:", currentUser);

    // Fetch vacancies data
    const fetchVacancies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/vacancy");
        setVacancies(response.data); // Set the vacancies data
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {vacancies
        .slice()
        .reverse()
        .map((vacancy) => (
          <div
            key={vacancy.vacancyID}
            className="vacancy-item w-full max-w-4xl flex p-4 flex-col h-auto pb-10 bg-cardBg mt-4 rounded-xl shadow-md relative"
          >
            <div className="pl-5 mt-2 flex flex-col sm:flex-row gap-6">
              {vacancy.type === "band" && vacancy.imgpath === "band" ? (
                <img
                  className="bg-slate-50 rounded-full w-20 h-20 border-2 border-gray-300 cursor-pointer"
                  src="./band.png"
                  alt=""
                />
              ) : vacancy.type === "player" && vacancy.imgpath === "player" ? (
                <img
                  className="bg-slate-50 rounded-full w-20 h-20 border-2 border-gray-300 cursor-pointer"
                  src="./musician.png"
                  alt=""
                />
              ) : (
                <img
                  className="bg-slate-50 rounded-full w-20 h-20 border-2 border-gray-300 cursor-pointer"
                  src={`http://localhost:3000/images/${vacancy.imgpath}`}
                  alt=""
                />
              )}
              <div className="flex flex-col w-full gap-1 justify-center">
                <span className="text-lg sm:text-xl font-bold">
                  {vacancy.name}
                </span>
                <span className="text-xs sm:text-sm text-slate-600">
                  4 hours ago
                </span>
              </div>
              <div
                className={
                  isLog && currentUser?.type !== "player"
                    ? "flex w-full justify-end cursor-pointer relative"
                    : "hidden"
                }
                onClick={() => toggleMenu(vacancy.vacancyID)}
              >
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 absolute right-2"
                  src="./more.png"
                  alt=""
                />
                {openMenuId === vacancy.vacancyID && (
                  <div className="mt-2 w-32 bg-white shadow-lg rounded-md absolute top-10 right-2">
                    <ul className="flex flex-col">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          console.log("Edit clicked for", vacancy.vacancyID);
                          setOpenMenuId(null);
                        }}
                      >
                        Edit
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          console.log("Remove clicked for", vacancy.vacancyID);
                          setOpenMenuId(null);
                        }}
                      >
                        Remove
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-col px-4 sm:px-6">
              <hr className="mb-4 border-none bg-slate-400 h-[1px]" />
              <h1 className="text-xl sm:text-2xl font-bold">{vacancy.title}</h1>
              <span className="text-sm sm:text-md text-gray-700 mt-2 font-light">
                Category: {vacancy.category}
              </span>
              <p className="mt-3 text-sm sm:text-md text-slate-800">
                {vacancy.description}
              </p>
              <span className="mt-3 font-medium">Payment</span>
              <div className="flex flex-row gap-2 mt-1 text-sm sm:text-base">
                <span>Rs.{vacancy.priceMin}</span>
                <span>-</span>
                <span>Rs.{vacancy.priceMax}</span>
              </div>
              <hr className="mt-4 border-none bg-slate-400 h-[1px]" />
              <div className="mt-6 flex justify-end">
                <button
                  className={
                    isLog && currentUser?.type !== "band"
                      ? "bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-6 sm:px-8 py-2 rounded-md"
                      : "hidden"
                  }
                  onClick={() =>{ handleApplyClick(vacancy);
                    
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
