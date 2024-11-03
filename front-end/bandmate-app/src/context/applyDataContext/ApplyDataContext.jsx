import React, { createContext, useState } from "react";

export const ApplyDataContext = createContext();

export const ApplyDataProvider = ({ children }) => {
  const [applyData, setApplyData] = useState(null);

  return (
    <ApplyDataContext.Provider value={{ applyData, setApplyData }}>
      {children}
    </ApplyDataContext.Provider>
  );
};
