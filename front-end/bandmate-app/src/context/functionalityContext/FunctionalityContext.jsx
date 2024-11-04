import React, { createContext, useState } from "react";

export const FunctionalityContext = createContext();

export const FunctionalityProvider = ({ children }) => {
  const [visiblePostAds, setVisiblePostAds] = useState(false);
  const [visibleEditInfo, setVisibleEditInfo] = useState(false);
  const [visibleApplicants, setVisibleApplicants] = useState(false);
  const [visiblePaymentGetway, setVisiblePaymentGetway] = useState(false);
  const [paid, setPaid] = useState(false);
  const [openApply, setOpenApply] = useState(false);
  const [visibleAppliyerDetails, setVisibleAppliyerDetails] = useState(false);
  const [appliyerDetails, setAppliyerDetails] = useState(false);
  const [visibleDeleteUser, setVisibleDeleteUser] = useState(false);
  const [visibleConfirmDelete, setVisibleConfirmDelete] = useState(false);
  const [visiblePostDelete, setVisiblePostDelete] = useState(false);
  const [DeleteVacancyID, setDeleteVacancyID] = useState(null);

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
        paid,
        setPaid,
        openApply,
        setOpenApply,
        visibleAppliyerDetails,
        setVisibleAppliyerDetails,
        appliyerDetails,
        setAppliyerDetails,
        visibleDeleteUser,
        setVisibleDeleteUser,
        visibleConfirmDelete,
        setVisibleConfirmDelete,
        visiblePostDelete,
        setVisiblePostDelete,
        DeleteVacancyID,
        setDeleteVacancyID,
      }}
    >
      {children}
    </FunctionalityContext.Provider>
  );
};
