import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [isLog, setIsLog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ isLog, setIsLog, currentUser, setCurrentUser}}>
      {children}
    </CurrentUserContext.Provider>
  );
};
