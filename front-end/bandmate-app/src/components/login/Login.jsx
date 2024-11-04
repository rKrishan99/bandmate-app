import React, { useContext, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { LoginContext } from "../../context/loginContext/LoginContext";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RegisterContext } from "../../context/registerContext/RegisterContext";
import PopupAlert from "../alert/popupAlert/PopupAlert";
import { CurrentUserContext } from "../../context/currentUserContext/CurrentUserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { visibleLogin, setVisibleLogin } = useContext(LoginContext);
  const [loading, setLoading] = useState(false);

  const { currentUser, setCurrentUser, setIsLog } = useContext(CurrentUserContext);

  const { setVisibleRegister } = useContext(RegisterContext);

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    type: "",
    name: "",
    about: "",
    experience: "",
    category: "",
    imgpath: "",
    phone: "",
  });

  const resetForm = () => {
    setLoading(false);
    setFormData({
      email: "",
      password: "",
      type: "",
      name: "",
      about: "",
      experience: "",
      category: "",
      imgpath: "",
      phone: "",
    });
  };

  // password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // API call to login
    try {
      const response = await axios.post(
        "http://192.168.43.30:3000/auth/login",
        formData
      );
      console.log("Login response:", response);

      setCurrentUser(response.data);
      setIsLog(true);

      console.log("Current User:", currentUser);
      console.log("login data:", response.data);

      setVisibleAlert(true);
      setAlertMessage("Login successful!");
      setAlertInfo(true);
      setVisibleLogin(false);
      resetForm();
      setTimeout(() => {
        navigate("/feed");
      }, 2000);
      
      
    } catch (error) {
      console.error("Error during login:", error);
      setVisibleAlert(true);
      setAlertMessage("Login failed. Please try again.");
      setAlertInfo(false);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {visibleLogin && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisibleLogin(false)}
        ></div>
      )}
      <Dialog
        header=""
        visible={visibleLogin}
        onHide={() => setVisibleLogin(false)}
        className="w-full h-auto bg-cardBg max-w-md py-3 rounded-xl"
        breakpoints={{ "960px": "75vw", "640px": "90vw" }}
      >
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Signin</h1>

          <form
            onSubmit={handleSubmit}
            className=" h-auto flex flex-col gap-6 mt-6"
          >
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

            <div className="flex items-center justify-center">
              <Button
                label="Signin"
                icon="pi pi-check"
                type="submit"
                loading={loading}
                className="bg-blue-600 hover:bg-blue-700 w-20 md:w-full text-white text-lg rounded-md px-3 md:px-4 py-2"
              />
            </div>
          </form>
          <span
            className="mt-10 text-blue-600  hover:text-blue-700 cursor-pointer"
            onClick={() => {
              setVisibleRegister(true);
              setVisibleLogin(false);
            }}
          >
            I Don't Have an Account
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

export default Login;
