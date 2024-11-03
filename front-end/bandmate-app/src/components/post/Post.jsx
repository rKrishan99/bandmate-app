import React, { useContext, useEffect, useState } from "react";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import axios from "axios";

const Post = () => {
  const { openApply, setOpenApply } = useContext(FunctionalityContext);
  const [openMenuId, setOpenMenuId] = useState(null); // Track which vacancy menu is open
  const [vacancies, setVacancies] = useState([]); // State to store fetched vacancies

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id); // Toggle the menu for each vacancy item
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/vacancy");
        setVacancies(response.data); // Set the vacancies data
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="">
      {vacancies.map((vacancy) => (
        <div key={vacancy.vacancyID} className="vacancy-item w-[1000px] flex p-4 flex-col h-auto pb-10 bg-cardBg mt-4 rounded-xl shadow-md relative">
          <div className="pl-5 mt-2 flex flex-row gap-6">
            <img
              className="rounded-full w-[80px] h-[80px]  border-2 border-zinc-400"
              src="./band.png"
              alt=""
            />
            <div className="flex flex-col w-full gap-1 justify-center">
              <span className="text-xl font-bold">tttttttttt</span>
              <span className="text-sm text-slate-600">4 hours ago</span>
            </div>
            <div
              className="flex w-full justify-end cursor-pointer"
              onClick={() => toggleMenu(vacancy.vacancyID)}
            >
              <img className="w-10 h-10 absolute right-2" src="./more.png" alt="" />
              {openMenuId === vacancy.vacancyID && (
                <div className="mt-2 w-32 bg-white shadow-lg rounded-md">
                  <ul className="flex flex-col">
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        // Handle edit functionality
                        console.log("Edit clicked for", vacancy.vacancyID);
                        setOpenMenuId(null);
                      }}
                    >
                      Edit
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        // Handle remove functionality
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

          <div className="mt-4 flex flex-col px-6">
            <hr className="mb-4 border-none bg-slate-400 h-[1px]" />
            <h1 className="text-2xl font-bold">{vacancy.title}</h1>
            <span className="text-md text-gray-700 mt-2 font-light">Category: {vacancy.category}</span>
            <p className="mt-3 text-md text-slate-800">
              {vacancy.description}
            </p>
            <span className="mt-3 font-medium">Payment</span>
            <div className="flex flex-row gap-2 mt-1">
              <span>Rs.{vacancy.priceMin}</span>
              <span>-</span>
              <span>Rs.{vacancy.priceMax}</span>
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
      ))}
    </div>
  );
};

export default Post;
