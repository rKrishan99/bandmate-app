import React, { useContext, useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../../context/functionalityContext/FunctionalityContext";
import { CurrentUserContext } from "../../../context/currentUserContext/CurrentUserContext";
import {
  TextField,
  IconButton,
  InputAdornment,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PopupAlert from "../../alert/popupAlert/PopupAlert";
import axios from "axios";

const EditInfo = () => {
  const { visibleEditInfo, setVisibleEditInfo } =
    useContext(FunctionalityContext);
  const { currentUser } = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: "player",
    name: "",
    about: "",
    experience: 0,
    category: "",
    imgpath: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {setCurrentUser} = useContext(CurrentUserContext);

  // Load current user data into form on component mount
  useEffect(() => {
    if (currentUser) {
      setFormData({
        email: currentUser.email || "",
        password: "", // Keep empty, as we don't display passwords
        type: currentUser.type || "player",
        name: currentUser.name || "",
        about: currentUser.about || "",
        experience: currentUser.experience || 0,
        category: currentUser.category || "",
        imgpath: currentUser.imgpath || "",
        phone: currentUser.phone || "",
      });
    }
  }, [currentUser]);

  // Toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Reset form fields
  const resetForm = () => {
    setLoading(false);
    setIsSubmitted(false);
  };

  // Handle form submission for editing
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setLoading(true);


    try {
      const result = await axios.put(
        "http://localhost:3000/user",
        formData
      );
      setAlertMessage("Update successful!");
      
      setAlertInfo(true);
      setVisibleAlert(true);
      setVisibleEditInfo(false);

      if (result.status !== 200) {
        console.error("Update failed:", result);
      }
      setCurrentUser(formData);
      setLoading(false);
      resetForm();
    } catch (error) {
      setAlertInfo(false);
      setAlertMessage("Failed to update information.");
      setVisibleAlert(true);
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-transparent rounded-xl">
      {visibleEditInfo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisibleEditInfo(false)}
        ></div>
      )}
      <Dialog
        header={<h1 className="text-2xl text-center mt-4 text-gray-900">Edit Information</h1>}
        visible={visibleEditInfo}
        style={{ width: "50vw" }}
        onHide={() => setVisibleEditInfo(false)}
        className="rounded-xl pb-4 bg-cardBg pt-4"
      >
        <div className="rounded-xl p-4">
          <form
            onSubmit={handleSubmit}
            className="h-auto scrollbar-thin scrollbar-webkit overflow-y-auto flex justify-center flex-col gap-6 pt-4"
          >
            <TextField
              label="Name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              error={formData.name.length > 50}
              helperText={
                formData.name.length > 50
                  ? "Name cannot exceed 50 characters."
                  : ""
              }
              fullWidth
              required
            />

            <TextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              error={
                formData.email !== "" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
              }
              helperText={
                formData.email !== "" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                  ? "Please enter a valid email address."
                  : ""
              }
              fullWidth
              required
              disabled
            />

            <TextField
              label="Phone"
              type="text"
              value={formData.phone}
              onChange={(e) => {
                const phoneValue = e.target.value;
                if (/^\d{0,10}$/.test(phoneValue)) {
                  setFormData((prev) => ({ ...prev, phone: phoneValue }));
                }
              }}
              error={formData.phone.length > 0 && formData.phone.length !== 10}
              helperText={
                formData.phone.length > 0 && formData.phone.length !== 10
                  ? "Please enter a valid phone number."
                  : ""
              }
              fullWidth
              required
            />

            {currentUser && currentUser.type !== "band" && (
              <>
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

                <TextField
                  label="Experience"
                  type="text"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, experience: e.target.value }))
                  }
                  error={formData.experience.length > 50}
                  helperText={
                    formData.experience.length > 50
                      ? "Experience cannot exceed 50 characters."
                      : ""
                  }
                  fullWidth
                  required
                />
              </>
            )}

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              error={
                formData.password !== "" &&
                (formData.password.length < 8 || formData.password.length > 12)
              }
              helperText={
                formData.password !== "" &&
                (formData.password.length < 8 || formData.password.length > 12)
                  ? "Password must be between 8 and 12 characters."
                  : ""
              }
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ position: "relative", width: "100%" }}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Tell About You</InputLabel>
                <OutlinedInput
                  type="text"
                  value={formData.about}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, about: e.target.value }))
                  }
                  error={formData.about.length > 600}
                  label="Tell About You"
                  multiline
                  rows={2}
                  maxRows={4}
                  inputProps={{ maxLength: 600 }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    p: 1,
                  }}
                >
                  {formData.about.length} / 600
                </Typography>
              </FormControl>
            </Box>

            <Button
              label={loading ? "Submitting..." : "Submit"}
              disabled={loading}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 text-xl text-white"
            />
          </form>
        </div>
      </Dialog>
      <PopupAlert
        visibleAlert={visibleAlert}
        setVisibleAlert={setVisibleAlert}
        message={alertMessage}
        info={alertInfo}
      />
    </div>
  );
};

export default EditInfo;
