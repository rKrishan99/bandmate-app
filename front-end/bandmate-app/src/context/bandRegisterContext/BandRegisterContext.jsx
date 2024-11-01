import React, { createContext, useState } from "react";


export const BandRegisterContext = createContext();

export const BandRegisterProvider = ({ children }) => {
  const [visibleBandRegister, setVisibleBandRegister] = useState(false);

  return (
    <BandRegisterContext.Provider value={{ visibleBandRegister, setVisibleBandRegister }}>
      {children}
    </BandRegisterContext.Provider>
  );
};
