import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./context/loginContext/LoginContext.jsx";
import { RegisterProvider } from "./context/registerContext/RegisterContext.jsx";
import { BandRegisterProvider } from "./context/bandRegisterContext/BandRegisterContext.jsx";

createRoot(document.getElementById("root")).render(
  <BandRegisterProvider>
    <RegisterProvider>
      <LoginProvider>
        <Router>
          <App />
        </Router>
      </LoginProvider>
    </RegisterProvider>
  </BandRegisterProvider>
);
