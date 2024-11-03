import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Checkbox } from "@mui/material";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormControlLabel,
} from "@mui/material";
import PopupAlert from "../alert/popupAlert/PopupAlert";

const PaymentGetway = () => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");
  const [isSubmitted] = useState(false);

  const [visa, setVisa] = useState(false);
  const [masterCard, setMasterCard] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const { visiblePaymentGetway, setVisiblePaymentGetway, paid, setPaid } =
    useContext(FunctionalityContext);

  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    cvv: "",
    expireDate: "",
    month: "",
    year: "",
  });

  const resetForm = () => {
    setFormData({
      cardHolder: "",
      cardNumber: "",
      cvv: "",
      expireDate: "",
      month: "",
      year: "",
    });
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s+/g, ""); // Remove spaces
  
    // Only keep numbers and limit to 16 characters
    value = value.replace(/\D/g, "").slice(0, 16);
  
    // Format with spaces every 4 digits
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    
    setFormData((prev) => ({ ...prev, cardNumber: formattedValue }));
  };

  // Helper to check card number validity
  const isCardNumberValid =
    formData.cardNumber.replace(/\s/g, "").length === 16;

  const handleSubmit = (e) => {
    console.log("check!");
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAlertMessage("Payment successful!");
      setAlertInfo(true);
      setVisibleAlert(true);
      setPaid(true);
      resetForm();
      setVisiblePaymentGetway(false);
    }, 2000);
  };

  return (
    <div className="relative">
      {visiblePaymentGetway && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50"></div>
      )}
      <Dialog
        header=""
        visible={visiblePaymentGetway}
        onHide={() => {
          if (!visiblePaymentGetway) return;
          setVisiblePaymentGetway(false);
        }}
        className="w-[500px] h-[600px] rounded-xl bg-slate-100 border-2 border-slate-300 p-6"
      >
        <div className="m-6 flex flex-col">
          <h1 className="text-3xl font-bold mb-12">Payment</h1>
          <div className="flex flex-row gap-4">
            <div
              onClick={() => {
                setVisa(true);
                setMasterCard(false);
              }}
              className={
                visa
                  ? "bg-white rounded-md w-[60px] hover:scale-105 transition-transform border-2 border-blue-400"
                  : "bg-white rounded-md w-[60px] border-2 border-gray-200"
              }
            >
              <img src="./visa.png" alt="Visa Card" />
            </div>
            <div
              onClick={() => {
                setVisa(false);
                setMasterCard(true);
              }}
              className={
                masterCard
                  ? "bg-white rounded-md w-[60px] hover:scale-105 transition-transform border-2 border-blue-400"
                  : "bg-white rounded-md w-[60px] border-2 border-gray-200"
              }
            >
              <img src="./master.png" alt="MasterCard" />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="h-auto scrollbar-thin scrollbar-webkit overflow-y-auto flex justify-center flex-col gap-6 pt-6"
          >
            <TextField
              label="Card Holder"
              type="text"
              value={formData.cardHolder}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  cardHolder: e.target.value,
                }));
              }}
              error={formData.cardHolder.length > 50}
              fullWidth
              required
            />

            <TextField
              label="Card Number"
              type="text"
              value={formData.cardNumber}
              className="text-lg"
              onChange={handleCardNumberChange}
              inputProps={{ maxLength: 19 }} // Allows up to 16 digits with spaces
              error={!isCardNumberValid && formData.cardNumber.length > 0} // Real-time validation
              helperText={
                !isCardNumberValid && formData.cardNumber.length > 0
                  ? "Please enter a valid card number."
                  : ""
              }
              fullWidth
              required
            />

            <TextField
              label="CVV"
              type="number"
              value={formData.cvv}
              className="text-lg"
              onChange={(e) => {
                const cvv = e.target.value;
                // Ensure the CVV is a maximum of 3 digits
                if (cvv.length <= 3) {
                  setFormData((prev) => ({ ...prev, cvv }));
                }
              }}
              inputProps={{
                maxLength: 3, // Prevents more than 3 characters in the field
              }}
              error={formData.cvv.length !== 3 && formData.cvv.length > 0}
              helperText={
                formData.cvv.length !== 3 && formData.cvv.length > 0
                  ? "Please enter a valid CVV."
                  : ""
              }
              fullWidth
              required
            />

            <span>Expire Date</span>
            <div className="flex flex-row gap-4">
              <FormControl fullWidth required variant="outlined">
                <InputLabel>Month</InputLabel>
                <Select
                  value={formData.month}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, month: e.target.value }))
                  }
                  label="Month"
                  error={!formData.month && isSubmitted}
                >
                  <MenuItem value="01">january</MenuItem>
                  <MenuItem value="02">February</MenuItem>
                  <MenuItem value="03">March</MenuItem>
                  <MenuItem value="04">April</MenuItem>
                  <MenuItem value="05">May</MenuItem>
                  <MenuItem value="06">June</MenuItem>
                  <MenuItem value="07">July</MenuItem>
                  <MenuItem value="08">August</MenuItem>
                  <MenuItem value="09">September</MenuItem>
                  <MenuItem value="10">October</MenuItem>
                  <MenuItem value="11">November</MenuItem>
                  <MenuItem value="12">December</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth required variant="outlined">
                <InputLabel>Year</InputLabel>
                <Select
                  value={formData.year}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, year: e.target.value }))
                  }
                  label="Year"
                  error={!formData.year && isSubmitted}
                >
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2025">2025</MenuItem>
                  <MenuItem value="2026">2026</MenuItem>
                  <MenuItem value="2027">2027</MenuItem>
                  <MenuItem value="2028">2028</MenuItem>
                  <MenuItem value="2029">2029</MenuItem>
                  <MenuItem value="2030">2030</MenuItem>
                  <MenuItem value="2031">2031</MenuItem>
                  <MenuItem value="2032">2032</MenuItem>
                </Select>
              </FormControl>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="text-gray-600"
                />
              }
              label="I agree to the terms and conditions"
              className="mt-4 text-gray-600"
            />

            <Button
              label="Confirm Payment"
              icon="pi pi-check"
              loading={loading}
              type="submit"
              fullWidth
              className="bg-green-600 hover:bg-green-700 md:w-60 cursor-pointer text-white text-lg rounded-md px-3 md:px-4 py-2"
              disabled={!termsAccepted}
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
