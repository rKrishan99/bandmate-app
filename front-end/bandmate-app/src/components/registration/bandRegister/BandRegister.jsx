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

const BandRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [changeProfileLoading, setChangeProfileLoading] = useState(false);
  const profileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [bandName, setBandName] = useState('');
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');

  const { visibleBandRegister, setVisibleBandRegister } =
    useContext(BandRegisterContext);
  const { visibleLogin, setVisibleLogin } = useContext(LoginContext);

  const handleChange = (event) => {
    if (event.target.value.length <= 600) {
      setText(event.target.value);
    }
  };

  {
    /*For Img */
  }

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImage(file);
      setImageURL(URL.createObjectURL(file)); // Set the image URL once
      setProfileDialogOpen(true); // Open the dialog
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const validateInputs = () => {
    setEmailError(!email.includes("@")); // Simple validation for email
    setPasswordError(password.length < 9); // Password should be at least 6 characters
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    validateInputs();

    // Proceed only if there are no errors
    if (emailError || passwordError) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("bandName", bandName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("about", about);
    formData.append("category", "band");

    // Check if profile image was uploaded; otherwise, use default image
    if (profileImage) {
      formData.append("profileImage", profileImage);
    } else {
      formData.append("profileImage", "./band.png"); // Use default image path
    }

    try {
      await axios.post("/api/band/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Registration successful!");
      setVisibleBandRegister(false);
      setVisibleLogin(true);
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
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
        onHide={() => setVisibleBandRegister(false)}
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
                src="./band.png"
                alt=""
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
                setProfileImage(null);
              }}
              className="border-2 border-slate-200 mx-10 w-[300px] sm:w-[400px] md:w-[500px] h-auto bg-slate-100 rounded-xl p-4 md:p-10"
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
                  className="bg-blue-600 w-20 md:w-24 text-white rounded-md px-3 md:px-4 py-2"
                />
              </div>
            </Dialog>

            {/* ================================ */}

            <TextField
              label="Band Name"
              type="text"
              value={bandName}
              className="text-lg"
              onChange={(e) => setBandName(e.target.value)}
              fullWidth
              required
            />

            <TextField
              label="Email"
              type="email"
              value={email}
              className="text-lg"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address." : ""
              }
              fullWidth
              required
            />

            <TextField
              label="Phone"
              type="text"
              value={phone}
              className="text-lg"
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false); // Reset error on input change
              }}
              error={passwordError}
              helperText={
                passwordError
                  ? "Password must be at least 6 characters long."
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
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  label="Tell About You"
                  placeholder="Type here..."
                  multiline
                  rows={4} // Adjust rows as needed
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "blue", // Hover color
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "blue", // Focused color
                        borderWidth: "2px", // Focused border width
                      },
                    },
                  }}
                />
              </FormControl>

              <Typography variant="body2" sx={{ ml: "auto" }}>
                {text.length} / 600
              </Typography>
            </Box>
            <Button
              label="Signup"
              icon="pi pi-check"
              loading={loading}
              type="submit"
              fullWidth
              className="bg-blue-600 md:w-full text-white text-lg rounded-md px-3 md:px-4 py-2"
            />
          </form>
          <span
            className="mt-10 text-blue-700 cursor-pointer"
            onClick={() => {
              setVisibleBandRegister(false);
              setVisibleLogin(true);
            }}
          >
            Already Have an Account
          </span>
        </div>
      </Dialog>
    </div>
  );
};

export default BandRegister;
