import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
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
import { ApplyDataContext } from "../../context/applyDataContext/ApplyDataContext";

const PostAds = () => {
  const {
    visiblePostAds,
    setVisiblePostAds,
    visiblePaymentGetway,
    setVisiblePaymentGetway,
    paid,
    setPaid,
  } = useContext(FunctionalityContext);

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    vacancyID: "",
    category: "",
    title: "",
    description: "",
    bandemail: "",
    priceMin: "",
    priceMax: "",
    createdAt: "",
    imgpath: "",
    name: "",
    type: "",
  });

  const resetForm = () => {
    setFormData({
      vacancyID: "",
      category: "",
      title: "",
      description: "",
      bandemail: "",
      priceMin: "",
      priceMax: "",
      createdAt: "",
      imgpath: "",
      name: "",
      type: "",
    });
  };

  const handleTime = () => {
    const currentTime = new Date().toISOString(); // Get the current time in ISO format
    setFormData((prev) => ({
      ...prev,
      createdAt: currentTime,
    }));
  };
  const handlePaymentGetwayVisibility = () => {
    setVisiblePaymentGetway(true);
    console.log("Payment Getway", visiblePaymentGetway);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare updated form data with current user info and timestamp
    const updatedFormData = {
      ...formData,
      bandemail: currentUser.email,
      name: currentUser.name,
      type: currentUser.type,
      imgpath: currentUser.imgpath,
      createdAt: new Date().toISOString(),
    };

    console.log("Updated Form data: ", updatedFormData); // Log updated data
    setIsSubmitted(true);
    handleTime(); // Capture the time before submitting
    console.log("Date time check", formData);
    try {
      const result = await axios.post(
        "http://localhost:3000/vacancy",
        updatedFormData
      );
      setVisibleAlert(true);
      setAlertMessage("Ad Published successful!");
      setAlertInfo(true);
      setPaid(false);
      if (result.status !== 201) {
        console.error("Ad Published failed:", result);
      }
      // setLoading(false);
      resetForm();
    } catch (error) {
      setAlertInfo(false);
      // setLoading(false);
    } finally {
      // setLoading(false);
      setIsSubmitted(false);
    }
  };

  return (
    <div className="relative">
      {visiblePostAds && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      <Dialog
        header=""
        visible={visiblePostAds}
        onHide={() => {
          if (!visiblePostAds) return;
          setVisiblePostAds(false);
        }}
        className="w-[1000px] rounded-xl bg-cardBg p-6"
      >
        <div className="m-8 flex flex-col">
          <h1 className="text-center text-3xl font-bold">Create Ad</h1>
          <form
            onSubmit={handleSubmit}
            className="h-auto scrollbar-thin scrollbar-webkit overflow-y-auto flex justify-center flex-col gap-6 mt-12 pt-4"
          >
            <TextField
              label="Title"
              type="text"
              value={formData.title}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, title: e.target.value }));
              }}
              error={formData.title.length > 100}
              helperText={
                formData.title.length > 100
                  ? "Title cannot exceed 100 characters."
                  : ""
              }
              fullWidth
              required
            />

            <FormControl fullWidth required variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
                label="Category"
                error={!formData.category && isSubmitted}
              >
                <MenuItem value="Bass Guitarist">Bass Guitarist</MenuItem>
                <MenuItem value="Rhythm Guitarist">Rhythm Guitarist</MenuItem>
                <MenuItem value="Drummer">Drummer</MenuItem>
                <MenuItem value="Percussionist">Percussionist</MenuItem>
                <MenuItem value="Keyboardist">Keyboardist</MenuItem>
                <MenuItem value="Vocalists">Vocalists</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ position: "relative", width: "100%" }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Describe about job</InputLabel>
                <OutlinedInput
                  type="text"
                  value={formData.description}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                  error={formData.description.length > 600} // Set error if the about text exceeds 150 characters
                  helperText={
                    formData.description.length > 600
                      ? "Description section cannot exceed 600 characters."
                      : ""
                  }
                  label="Describe about job"
                  required
                  placeholder="Type here..."
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          formData.description.length > 600 ? "red" : "gray", // Red border on error
                      },
                      "&:hover fieldset": {
                        borderColor:
                          formData.description.length > 600 ? "red" : "blue",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          formData.description.length > 600 ? "red" : "blue",
                        borderWidth: "2px",
                      },
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    ml: "auto",
                    color:
                      formData.description.length > 600 ? "red" : "inherit",
                  }}
                >
                  {formData.description.length} / 600
                </Typography>
                {formData.description.length > 600 && (
                  <Typography variant="body2" color="error">
                    Describe section cannot exceed 600 characters.
                  </Typography>
                )}
              </FormControl>
            </Box>

            <span className="text-slate-700">Enter the salary (Rs)</span>
            <TextField
              label="priceMin"
              type="number"
              value={formData.priceMin}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, priceMin: e.target.value }));
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
              label="priceMax"
              type="number"
              value={formData.priceMax}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, priceMax: e.target.value }));
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
            <div className={paid ? "hidden" : "flex flex-col gap-4"}>
              <span className="text-slate-700 mt-6">
                If you want to post this ad, please pay before submitting!
              </span>
              <Button
                label="Pay"
                icon="pi pi-check"
                type="button"
                fullWidth
                className="bg-green-600 hover:bg-green-700 md:w-28 text-white text-lg rounded-md px-3 md:px-4 py-2"
                onClick={handlePaymentGetwayVisibility}
              />
            </div>

            <Button
              label="Publish Ad"
              icon="pi pi-check"
              loading={loading}
              type="submit"
              fullWidth
              className="bg-blue-600 hover:bg-blue-700 md:w-44 text-white text-lg mt-6 rounded-md px-3 md:px-4 py-2"
              disabled={!paid}
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

export default PostAds;
