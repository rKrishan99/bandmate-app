import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { LoginContext } from "../../context/loginContext/LoginContext";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { RegisterContext } from "../../context/registerContext/RegisterContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { visibleLogin, setVisibleLogin } = useContext(LoginContext);
  const [loading, setLoding] = useState(false);

  const { visibleRegister, setVisibleRegister } = useContext(RegisterContext);

  const validateInputs = () => {
    setEmailError(!email.includes("@")); // Simple validation for email
    setPasswordError(password.length < 9); // Password should be at least 6 characters
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
        className="w-full h-auto bg-cardBg max-w-md p-6 rounded-xl"
        breakpoints={{ "960px": "75vw", "640px": "90vw" }}
      >
        <div className="flex flex-col w-full p-4">
          <h1 className="text-2xl font-bold text-center mb-6">Signin</h1>

          <form className=" h-auto flex flex-col gap-6 mt-6">
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              value={email}
              autoComplete="current-password"
              className="text-lg"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false); // Reset error on input change
              }}
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address." : ""
              }
              fullWidth
            />

            <TextField
              id="outlined-password-input"
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
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
                loading={loading}
                className="bg-blue-600 w-20 md:w-24 text-white text-lg rounded-md px-3 md:px-4 py-2"
              />
            </div>
          </form>
          <span
            className="mt-10 text-blue-700 cursor-pointer"
            onClick={() => {
              setVisibleRegister(true);
              setVisibleLogin(false);
            }}
          >
            I Don't Have an Account
          </span>
        </div>
      </Dialog>
    </div>
  );
};

export default Login;
