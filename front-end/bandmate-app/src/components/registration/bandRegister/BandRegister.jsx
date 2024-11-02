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
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [changeProfileLoading, setChangeProfileLoading] = useState(false);
  const profileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");

  const { visibleBandRegister, setVisibleBandRegister } =
    useContext(BandRegisterContext);
  const { visibleLogin, setVisibleLogin } = useContext(LoginContext);

  // Reset form fields
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setPhone("");
    setAbout("");
    setProfileImage("");
    setShowPassword(false);
  };

  // For Image URL
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

  // password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

   // Assuming you have validations in place already, like state variables for inputs
   if (name === "" || email === "" || password === "" || phone === "" || about === "") {
    console.error("All fields are required.");
    return; // Stop the submission
}

    setLoading(true);

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("about", about);
    formData.append("category", "band");

    console.log("Form data before submit:", formData);

    // Check if profile image was uploaded; otherwise, use default image
    if (profileImage) {
      formData.append("profileImage", profileImage);
    } else {
      formData.append("profileImage", "./band.png"); // Use default image path
    }

    try {
      await axios.post("/api/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Registration successful!");
      setVisibleBandRegister(false);
      setVisibleLogin(true);
      resetForm();
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
              value={name}
              className="text-lg"
              onChange={(e) => {
                const nameValue = e.target.value;
                setName(nameValue);
              }}
              error={name.length > 50} // Set error if the name exceeds 50 characters
              helperText={
                name.length > 50 ? "Name cannot exceed 50 characters." : ""
              }
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
              }}
              error={email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
              helperText={
                email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                  ? "Please enter a valid email address."
                  : ""
              }
              fullWidth
              required
            />

            <TextField
              label="Phone"
              type="text"
              value={phone}
              className="text-lg"
              onChange={(e) => {
                const phoneValue = e.target.value;
                if (/^\d{0,10}$/.test(phoneValue)) {
                  // Allow only up to 10 digits
                  setPhone(phoneValue);
                }
              }}
              error={phone.length > 0 && phone.length !== 10}
              helperText={
                phone.length > 0 && phone.length !== 10
                  ? "Please enter a valid phone number."
                  : ""
              }
              fullWidth
              required
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                const pwdValue = e.target.value;
                setPassword(pwdValue);
              }}
              error={
                password !== "" && (password.length < 9 || password.length > 12)
              }
              helperText={
                password !== "" && (password.length < 9 || password.length > 12)
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
                  value={about}
                  onChange={(e) => {
                    const aboutValue = e.target.value;
                    setAbout(aboutValue);
                  }}
                  error={about.length > 600} // Set error if the about text exceeds 150 characters
                  helperText={
                    about.length > 600
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
                        borderColor: about.length > 600 ? "red" : "gray", // Red border on error
                      },
                      "&:hover fieldset": {
                        borderColor: about.length > 600 ? "red" : "blue",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: about.length > 600 ? "red" : "blue",
                        borderWidth: "2px",
                      },
                    },
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    ml: "auto",
                    color: about.length > 600 ? "red" : "inherit",
                  }}
                >
                  {about.length} / 600
                </Typography>
                {about.length > 600 && (
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
