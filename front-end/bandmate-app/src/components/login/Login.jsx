import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { LoginContext } from "../../context/loginContext/LoginContext";

const Login = () => {

  const { visibleLogin, setVisibleLogin } = useContext(LoginContext);

  return (
    <div className="relative">
      {visibleLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={() => setVisibleLogin(false)}></div>
      )}
      <Dialog
        header="Login"
        visible={visibleLogin}
        style={{ width: "50vw" }}
        onHide={() => setVisibleLogin(false)}
        //modal // Make the dialog modal
      >
        <form>
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <Button label="Login" onClick={() => {/* Handle login */}} />
        </form>
      </Dialog>
    </div>
  );
};

export default Login;
