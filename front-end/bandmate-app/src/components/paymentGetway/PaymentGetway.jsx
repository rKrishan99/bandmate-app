import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";
import PopupAlert from "../alert/popupAlert/PopupAlert";

const PaymentGetway = () => {

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const { visiblePaymentGetway, setVisiblePaymentGetway } = useContext(FunctionalityContext);

  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    cvv: "",
    expireDate: "",
  });

  const resetForm = () => {
    setFormData({
        acccountHolder: "",
        cardNumber: "",
        cvv: "",
        expireDate: "",
    });
  };

  const handleSubmit = () => {

  }


  return (
    <div className="relative">
      {visiblePaymentGetway && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      <Dialog
        header=""
        visible={visiblePaymentGetway}
        onHide={() => {
          if (!visiblePaymentGetway) return;
          setVisiblePaymentGetway(false);
        }}
        className="w-[1000px] rounded-xl bg-cardBg p-6"
      >
        <div className="m-6 flex flex-col">
          <h1 className="text-center text-3xl font-bold">Pay</h1>
          <form
            onSubmit={handleSubmit}
            className="h-auto scrollbar-thin scrollbar-webkit overflow-y-auto flex justify-center flex-col gap-6 mt-12"
          >
            <TextField
              label="Card Holeder"
              type="text"
              value={formData.cardHolder}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, cardHolder: e.target.value }));
              }}
              error={formData.cardHolder.length > 50}
            //   helperText={
            //     formData.title.length > 50
            //       ? "Title cannot exceed 100 characters."
            //       : ""
            //   }
              fullWidth
              required
            />

            <span className="text-slate-700">Enter the salary (Rs)</span>
            <TextField
              label="Cart Number"
              type="number"
              value={formData.cardNumber}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, cardNumber: e.target.value }));
              }}
              // error={formData.priceMin.length == 0}
              // helperText={
              //   formData.priceMin.length == 0
              //     ? "Please enter a valid price."
              //     : ""
              // }
              fullWidth
              required
            />

            <TextField
              label="CVV"
              type="number"
              value={formData.cvv}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, cvv: e.target.value }));
              }}
              // error={formData.priceMax.length == 0}
              // helperText={
              //   formData.priceMax.length == 0
              //     ? "Please enter a valid price."
              //     : ""
              // }
              fullWidth
              required
            />

            <Button
              label="Confirem Payment"
              icon="pi pi-check"
              loading={loading}
              type="submit"
              fullWidth
              className="bg-green-600 hover:bg-green-700 md:w-28 text-white text-lg rounded-md px-3 md:px-4 py-2"
            />
          </form>
        </div>
      </Dialog>
      <PopupAlert
        visible={visibleAlert}
        message={alertMessage}
        info={alertInfo}
        onClose={() => setVisibleAlert(false)}
      />
    </div>
  );
};

export default PaymentGetway;
