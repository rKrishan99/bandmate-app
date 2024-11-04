import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../context/currentUserContext/CurrentUserContext";
import axios from "axios";
import { FunctionalityContext } from "../../../context/functionalityContext/FunctionalityContext";

const NotifyCard = () => {
  const [notification, setNotification] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  const {visibleAppliyerDetails, setVisibleAppliyerDetails, setAppliyerDetails} = useContext(FunctionalityContext);

  useEffect(() => {
    // Fetch vacancies data
    const fetchNotification = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/application/band/${currentUser.email}`
        );
        setNotification(response.data); // Set the vacancies data
        console.log("Notification data:", response.data);
      } catch (error) {
        console.error("Error fetching notification:", error);
      }
    };

    fetchNotification();
  }, []);


  const hanndleSetAppliyerDetails = (notify) => {
    setAppliyerDetails(notify);
    setVisibleAppliyerDetails(true);
    console.log("Appliyer details:", notify);
  };

  return (
    <div>
      {notification
        .slice()
        .reverse()
        .map((notify) => (
          <div
            key={notify.applicationID}
            className="flex flex-row gap-6 p-3 mb-3 bg-slate-100 shadow-md rounded-xl cursor-pointer"
            onClick={() => {hanndleSetAppliyerDetails(notify);}} 
          >
            {notify.imgpath !== "player" ? (
              <img
                className="bg-slate-50 rounded-full w-20 h-20"
                src={`http://localhost:3000/images/${notify.imgpath}`}
                alt=""
              />
            ) : (
              <img
                className="bg-slate-50 rounded-full w-20 h-20"
                src="./musician.png"
                alt=""
              />
            )}
            <div className="flex flex-col py-1">
              <span className="text-lg font-bold text-gray-950">
                {notify.name}
              </span>
              <p className="text-sm text-gray-600">Reply for: {notify.title}</p>
              <span className="text-sm text-gray-600">
                Offered Price: {notify.price}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NotifyCard;
