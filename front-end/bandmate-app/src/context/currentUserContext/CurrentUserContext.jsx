import React, { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  // Initialize `currentUser` from `localStorage` if it exists, otherwise set to `null`
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Set `isLog` based on whether `currentUser` exists
  const [isLog, setIsLog] = useState(!!currentUser);

  // Whenever `currentUser` changes, update `localStorage` and `isLog`
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setIsLog(true);
    } else {
      localStorage.removeItem("currentUser");
      setIsLog(false);
    }
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ isLog, setIsLog, currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
