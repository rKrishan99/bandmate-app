import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import { ApplyDataContext } from "../../context/applyDataContext/ApplyDataContext";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
import axios from "axios";
import "./applyDialogStyles.css";

const ApplyDialog = () => {
  const { openApply, setOpenApply } = useContext(FunctionalityContext);
  const [payment, setPayment] = useState(500); // Single value for slider
  const [minPayment, setMinPayment] = useState(null); // Dynamic min value
  const [maxPayment, setMaxPayment] = useState(null); // Dynamic max value
  const { applyData, setApplyData } = useContext(ApplyDataContext);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (applyData) {
      setMinPayment(applyData.priceMin);
      setMaxPayment(applyData.priceMax);
      setPayment(applyData.priceMin);
    }
  }, [applyData]);

  const formData = {
    vacancyID: applyData?.vacancyID,
    title: applyData?.title,
    description: applyData?.description,
    priceMin: minPayment,
    priceMax: maxPayment,
    createdAt: applyData?.createdAt,
    userEmail: currentUser?.email,
    name: currentUser?.name,
    about: currentUser?.about,
    experience: currentUser?.experience,
    category: currentUser?.category,
    imgpath: currentUser?.imgpath,
    phone: currentUser?.phone,
    bandEmail: applyData?.bandemail,
    price: payment,
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.43.30:3000/application",
        formData
      );
      console.log("Response from server:", response.data);
      setOpenApply(false);
      setApplyData(null);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <Dialog
      header={<h1 className="ml-5 mt-2 text-2xl text-center text-gray-900">Apply Now!</h1>}
      visible={openApply}
      onHide={() => {
        if (!openApply) return;
        setOpenApply(false);
        setApplyData(null);
      }}
      className="w-[500px] py-3 h-auto rounded-xl bg-cardBg border-2 border-slate-300" // Unified background style
    >
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-900">
          {applyData?.title || "Default Title"}
        </h1>
        <p className="mt-3 text-md text-gray-700 mb-6">
          {applyData?.description || "Default Description"}
        </p>

        <span className="mt-10 font-semibold">Payment Range</span>
        <div className="flex flex-row gap-2 items-center mb-4 mt-2">
          <label className="w-20">Min: Rs.</label>
          <InputText
            value={minPayment}
            onChange={(e) => setMinPayment(+e.target.value)}
            className="w-16"
          />
          <label className="w-20">Max: Rs.</label>
          <InputText
            value={maxPayment}
            onChange={(e) => setMaxPayment(+e.target.value)}
            className="w-16"
          />
        </div>

        <span className="mt-6 font-semibold">Selected Payment</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row mt-2">
            <p>Rs.</p>
            <InputText
              value={payment}
              onChange={(e) => setPayment(+e.target.value)}
              className="w-16"
            />
          </div>

          <Slider
            value={payment}
            onChange={(e) => setPayment(e.value)}
            min={minPayment} // Dynamic min value
            max={maxPayment} // Dynamic max value
            className="custom-slider" // Add custom class here
            style={{ width: "100%", height: "8px" }} // Custom style here
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-8 mt-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Apply Now
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ApplyDialog;
