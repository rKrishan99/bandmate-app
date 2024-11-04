import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import NotifyCard from "./notifiCard/NotifyCard";

const Applicants = () => {
  const { visibleApplicants, setVisibleApplicants } =
    useContext(FunctionalityContext);

  return (
    <Dialog
      header=""
      visible={visibleApplicants}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visibleApplicants) return;
        setVisibleApplicants(false);
      }}
      className="flex flex-col px-3 h-[600px] w-[300px] bg-cardBg pb-6 rounded-xl"
    >
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-3">
          Applications
        </h1>
        <hr className="mb-4 mt-2 border-none bg-gray-300 h-[1px]" />
        <div className="">
          <NotifyCard />
        </div>
      </div>
    </Dialog>
  );
};

export default Applicants;
