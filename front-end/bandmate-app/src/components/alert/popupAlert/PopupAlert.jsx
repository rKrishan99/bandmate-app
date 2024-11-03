import React, { useEffect } from "react";
import { Dialog } from "primereact/dialog";
const PopupAlert = ({ visible, message, info, onClose }) => {

  // Automatically close the dialog after 3 seconds
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose(); // Call the provided close function
      }, 2000); // Adjust the time as needed (3000ms = 3 seconds)

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [visible, onClose]);

  return (
    <Dialog
      header=""
      visible={visible}
      onHide={() => {}}
      closable={false}
      className="bg-slate-100 rounded-xl p-8 w-auto border-[1px] border-stone-400"
    >
      <div className="flex flex-row gap-2  items-center justify-center">
        {info ? (
          <img className="w-8 h-8" src="./success.png" alt="Success" />
        ) : (
          <img className="w-8 h-8" src="./fail.png" alt="Fail" />
        )}
        <p className="text-lg">{message}</p>
      </div>
    </Dialog>
  );
};

export default PopupAlert;
