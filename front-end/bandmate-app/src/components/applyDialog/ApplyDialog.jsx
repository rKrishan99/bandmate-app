import React, { useContext, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";

const ApplyDialog = () => {
  const { openApply, setOpenApply } = useContext(FunctionalityContext);
  const [payment, setPayment] = useState(500); // Single value for slider
  const [minPayment, setMinPayment] = useState(0); // Dynamic min value
  const [maxPayment, setMaxPayment] = useState(1000); // Dynamic max value

  return (
   
      <Dialog
        header=""
        visible={openApply}
        onHide={() => {
          if (!openApply) return;
          setOpenApply(false);
        }}
        className="bg-slate-100 border-2 border-slate-300 w-[500px] h-auto rounded-xl"
      >
        <div>
          <h1 className="text-xl font-bold">For find guitarist</h1>
          <p className="mt-3 text-md text-slate-800 mb-6">
            Hi, I'm looking for a guitarist to play at my wedding. I'm looking for
            someone who can play a variety of songs and is willing to learn a few
            new ones. The wedding is on August 15th, so I need someone who is
            available on that date. If you're interested, please send me a message
            with your rates and availability. Thanks!
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
              onClick={() => setOpenApply(false)}
            >
              Send
            </button>
          </div>
        </div>
      </Dialog>

  );
};

export default ApplyDialog;
