import React, { useContext, useState } from "react";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import NotifyCard from "./notifiCard/NotifyCard";

const Applicants = () => {
  const { visibleApplicants, setVisibleApplicants } =
    useContext(FunctionalityContext);

  return (
    <div className="relative">
      {visibleApplicants && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisibleApplicants(false)}
        ></div>
      )}
      <Dialog
        header={
          <h1 className="text-3xl font-bold text-gray-800 text-center mt-4 mb-3">
            Applications
          </h1>
        }
        visible={visibleApplicants}
        style={{ width: "40vw" }}
        onHide={() => {
          if (!visibleApplicants) return;
          setVisibleApplicants(false);
        }}
        className="flex flex-col px-3 h-[600px] w-[300px] bg-cardBg pb-6 rounded-xl"
      >
        <div className="">
          <hr className="mb-4 mt-2 border-none bg-gray-300 h-[1px]" />
          <div className="">
            <NotifyCard />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Applicants;
