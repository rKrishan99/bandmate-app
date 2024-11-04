import React, { useState, useContext, useRef } from "react";
import { BandRegisterContext } from "../../../context/bandRegisterContext/BandRegisterContext";
import { LoginContext } from "../../../context/loginContext/LoginContext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import axios from "axios";
import {
  TextField,
  IconButton,
  InputAdornment,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PopupAlert from "../../alert/popupAlert/PopupAlert";

const BandRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [changeProfileLoading, setChangeProfileLoading] = useState(false);
  const profileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [imageURL, setImageURL] = useState(""); // URL for previewing the image

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");

  const { visibleBandRegister, setVisibleBandRegister } =
    useContext(BandRegisterContext);
  const { visibleLogin, setVisibleLogin } = useContext(LoginContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: "band",
    name: "",
    about: "",
    experience: 0,
    category: "",
    imgpath: "band",
    phone: "",
  });

  // Reset form fields
  const resetForm = () => {
    setLoading(false);
    setFormData({
      email: "",
      password: "",
      type: "band",
      name: "",
      about: "",
      experience: "",
      category: "",
      imgpath: "",
      phone: "",
    });
    setProfileImage(null); // Reset the profile image
    setImageURL(""); // Reset the image URL
  };

  // For Image URL
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImage(file);
      setImageURL(URL.createObjectURL(file)); // Set the image URL once
      setProfileDialogOpen(true); // Open the dialog
    } else {
      console.log("Please upload a valid image file.");
    }
  };

  const uploadProfileImage = async () => {
    try {
      if (!profileImage) {
        console.log("upload");
        return "./band.png"; // Default image path
      }

      const formDataImage = new FormData();
      formDataImage.append("image", profileImage);
      formDataImage.append("email", formData.email);

      const imageResponse = await axios.post(
        "http://192.168.43.30:3000/images/upload",
        formDataImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Propagate error to handle it in the submission
    }
  };

  // password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await axios.post(
        "http://192.168.43.30:3000/auth/register",
        formData
      );
      setVisibleAlert(true);
      setAlertMessage("Registration successful!");
      setAlertInfo(true);
      setVisibleBandRegister(false);
      if (result.status !== 201) {
        console.error("Registration failed:", result);
      }

      await uploadProfileImage();
      setLoading(false);
      resetForm();

      // Delay before showing the login form
      setTimeout(() => {
        setVisibleLogin(true);
      }, 2000); // 3 seconds delay
    } catch (error) {
      setAlertInfo(false);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {visibleBandRegister && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisibleBandRegister(false)}
        ></div>
      )}
      <Dialog
        header=""
        visible={visibleBandRegister}
        onHide={() => {
          setVisibleBandRegister(false);
          resetForm();
        }}
        className="w-full max-w-lg p-6 rounded-xl bg-cardBg scrollbar-thin scrollbar-webkit overflow-y-auto"
        style={{ height: "650px", overflowY: "auto" }}
        breakpoints={{ "960px": "75vw", "640px": "90vw" }}
      >
        <div className="flex  flex-col w-full p-4">
          <form
            onSubmit={handleSubmit}
            className=" h-auto scrollbar-thin scrollbar-webkit overflow-y-auto flex justify-center flex-col gap-6 mt-6"
            style={{ maxHeight: "" }}
          >
            <div
              className="flex relative justify-center mb-10 cursor-pointer"
              onClick={() => setProfileDialogOpen(true)}
            >
              <img
                className="w-36 rounded-full bg-slate-200"
                src={imageURL || "./band.png"}
                alt="Profile"
              />
              <img
                className="absolute w-6 bottom-[-6px]"
                src="./edit-strong.png"
                alt=""
              />
            </div>

            {/* Profile Image Dialog */}
            <Dialog
              header=""
              visible={profileDialogOpen}
              onHide={() => {
                setProfileDialogOpen(false);
              }}
              className="border-[1px] border-stone-400 mx-10 w-[300px] sm:w-[400px] md:w-[500px] h-auto bg-slate-100 rounded-xl p-4 md:p-10"
            >
              <div className="flex flex-col w-full justify-center items-center">
                <h1 className="text-xl md:text-2xl">Update Profile</h1>
                <div
                  className="m-4 md:m-10 flex items-center"
                  onClick={() => profileInputRef.current.click()}
                >
                  {profileImage ? (
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt="Profile"
                      className="w-40 h-40 md:w-52 md:h-52 rounded-full"
                    />
                  ) : (
                    <div className=" flex items-center w-[200px] md:w-[300px] bg-indigo-100 justify-center border-2 border-dashed rounded-lg border-gray-500 h-[200px] md:h-[300px]">
                      <span className="font-bold">Choose a file</span>
                    </div>
                  )}

                  <input
                    type="file"
                    ref={profileInputRef}
                    className="hidden"
                    onChange={handleProfileChange}
                  />
                </div>
                <Button
                  label="Save"
                  icon="pi pi-check"
                  loading={changeProfileLoading}
                  onClick={async () => {
                    setChangeProfileLoading(true);
                    setProfileDialogOpen(false);
                    setChangeProfileLoading(false);
                  }}
                  className="bg-blue-600 w-20 md:w-24 text-white rounded-md px-3 md:px-4 py-2"
                />
              </div>
            </Dialog>

            <TextField
              label="Band Name"
              type="text"
              value={formData.name}
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }));
              }}
              error={formData.name.length > 50} // Set error if the name exceeds 50 characters
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
              className="text-lg"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
              }}
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
            />

            <TextField
              label="Phone"
              type="text"
              value={formData.phone}
              className="text-lg"
              onChange={(e) => {
                const phoneValue = e.target.value;
                if (/^\d{0,10}$/.test(phoneValue)) {
                  // Allow only up to 10 digits
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

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, password: e.target.value }));
              }}
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
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, about: e.target.value }));
                  }}
                  error={formData.about.length > 600} // Set error if the about text exceeds 150 characters
                  helperText={
                    formData.about.length > 600
                      ? "About section cannot exceed 600 characters."
                      : ""
                  }
                  label="Tell About You"
                  required
                  placeholder="Type here..."
                  multiline
                  rows={4}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor:
                          formData.about.length > 600 ? "red" : "gray", // Red border on error
                      },
                      "&:hover fieldset": {
                        borderColor:
                          formData.about.length > 600 ? "red" : "blue",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          formData.about.length > 600 ? "red" : "blue",
                        borderWidth: "2px",
                      },
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    ml: "auto",
                    color: formData.about.length > 600 ? "red" : "inherit",
                  }}
                >
                  {formData.about.length} / 600
                </Typography>
                {formData.about.length > 600 && (
                  <Typography variant="body2" color="error">
                    About section cannot exceed 600 characters.
                  </Typography>
                )}
              </FormControl>
            </Box>
            <Button
              label="Signup"
              icon="pi pi-check"
              loading={loading}
              type="submit"
              fullWidth
              className="bg-blue-600 hover:bg-blue-700 md:w-full text-white text-lg rounded-md px-3 md:px-4 py-2"
            />
          </form>
          <span
            className="mt-10 text-blue-600  hover:text-blue-700 cursor-pointer"
            onClick={() => {
              setVisibleBandRegister(false);
              setVisibleLogin(true);
            }}
          >
            Already Have an Account
          </span>
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

export default BandRegister;
