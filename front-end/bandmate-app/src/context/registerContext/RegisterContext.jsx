import React, { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [visibleRegister, setVisibleRegister] = useState(false);

  return (
    <RegisterContext.Provider value={{ visibleRegister, setVisibleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};
