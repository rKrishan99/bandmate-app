import React, { createContext, useState } from "react";

export const FunctionalityContext = createContext();

export const FunctionalityProvider = ({ children }) => {
  const [visiblePostAds, setVisiblePostAds] = useState(false);
  const [visibleEditInfo, setVisibleEditInfo] = useState(false);
  const [visibleApplicants, setVisibleApplicants] = useState(false);
  const [visiblePaymentGetway, setVisiblePaymentGetway] = useState(false);

  return (
    <FunctionalityContext.Provider
      value={{
        visiblePostAds,
        setVisiblePostAds,
        visibleEditInfo,
        setVisibleEditInfo,
        visibleApplicants,
        setVisibleApplicants,
        visiblePaymentGetway,
        setVisiblePaymentGetway,
      }}
    >
      {children}
    </FunctionalityContext.Provider>
  );
};
