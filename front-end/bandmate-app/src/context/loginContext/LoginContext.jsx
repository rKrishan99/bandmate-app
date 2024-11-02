import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [visibleLogin, setVisibleLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ visibleLogin, setVisibleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
