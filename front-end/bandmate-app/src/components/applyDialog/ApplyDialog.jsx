import React, { useContext, useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import { ApplyDataContext } from "../../context/applyDataContext/ApplyDataContext";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
import axios from "axios";

const ApplyDialog = () => {
  const { openApply, setOpenApply } = useContext(FunctionalityContext);
  const [payment, setPayment] = useState(500); // Single value for slider
  const [minPayment, setMinPayment] = useState(null); // Dynamic min value
  const [maxPayment, setMaxPayment] = useState(null); // Dynamic max value
  const { applyData, setApplyData } = useContext(ApplyDataContext);
  const { currentUser } = useContext(CurrentUserContext);

  console.log("applyData in ApplyDialog:", applyData);

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

    console.log("formData:", formData);
    try {
      // Replace with your API endpoint
      const response = await axios.post('http://192.168.43.30:3000/application', formData);
      console.log("Response from server:", response.data);
      // Optionally close the dialog after successful submission
      setOpenApply(false);
      setApplyData(null);
    } catch (error) {
      console.error("Error submitting form data:", error);
      // Optionally handle the error (e.g., show a notification)
    }
  };


  return (
    <Dialog
      header=""
      visible={openApply}
      onHide={() => {
        if (!openApply) return;
        setOpenApply(false);
        setApplyData(null);
      }}
      className="bg-slate-100 border-2 border-slate-300 w-[500px] h-auto rounded-xl"
    >
      <div>
        <h1 className="text-xl font-bold">
          {applyData?.title || "Default Title"}
        </h1>
        <p className="mt-3 text-md text-slate-800 mb-6">
          {applyData?.description || "Default Description"}
        </p>

        <span className="mt-10 font-medium">Payment Range</span>
        <div className="flex flex-row gap-2 items-center mb-4">
          <label className="w-20">Min:</label>
          <InputText
            value={minPayment}
            onChange={(e) => setMinPayment(+e.target.value)}
            className="w-16"
          />
          <label className="w-20">Max:</label>
          <InputText
            value={maxPayment}
            onChange={(e) => setMaxPayment(+e.target.value)}
            className="w-16"
          />
        </div>

        <span className="mt-6 font-medium">Selected Payment</span>
        <div className="flex flex-col gap-4 ">
          <InputText
            value={payment}
            onChange={(e) => setPayment(+e.target.value)}
            className="w-16"
          />
          <Slider
            value={payment}
            onChange={(e) => setPayment(e.value)}
            min={minPayment} // Dynamic min value
            max={maxPayment} // Dynamic max value
            style={{ width: "100%", height: "8px", backgroundColor: "#ddd" }}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-8 py-2 rounded-md"
            onClick={handleSubmit} 
          >
            Send
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ApplyDialog;
