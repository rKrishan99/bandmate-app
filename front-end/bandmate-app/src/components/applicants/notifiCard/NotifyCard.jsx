import React, { useContext, useEffect, useState } from 'react'
import { CurrentUserContext } from '../../../context/currentUserContext/CurrentUserContext';
import axios from 'axios';



const NotifyCard = () => {

  const [notification, setNotification] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

useEffect(() => {

  // Fetch vacancies data
  const fetchNotification = async () => {
    try {
      const response = await axios.get(`http://192.168.43.30:3000/application/band/${currentUser.email}`);
      setNotification(response.data); // Set the vacancies data
      console.log("Notification data:", response.data);
    } catch (error) {
      console.error("Error fetching notification:", error);
    }
  };

  fetchNotification();
}, []);

  return (
    <div className='flex flex-row gap-6 p-3 mb-3 bg-slate-100 shadow-md rounded-xl'>
      <img className='w-20 rounded-full border-[1px] border-gray-400' src="./band.png" alt="" />
      <div className='flex flex-col py-1'>
        <span className='text-lg font-bold text-gray-950'>Rajiitha</span>
        <p className='text-sm text-gray-600'>Reply for:</p>
        <span className='text-sm text-gray-600'>Offered Price:</span>
      </div>
    </div>
  )
}

export default NotifyCard;