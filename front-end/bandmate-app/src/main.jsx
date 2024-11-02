import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./context/loginContext/LoginContext.jsx";
import { RegisterProvider } from "./context/registerContext/RegisterContext.jsx";
import { BandRegisterProvider } from "./context/bandRegisterContext/BandRegisterContext.jsx";
import { MusicianRegisterProvider } from "./context/musicianRegisterContext/MusicianRegisterContext.jsx";

createRoot(document.getElementById("root")).render(
  <RegisterProvider>
    <MusicianRegisterProvider>
      <BandRegisterProvider>
        <LoginProvider>
          <Router>
            <App />
          </Router>
        </LoginProvider>
      </BandRegisterProvider>
    </MusicianRegisterProvider>
  </RegisterProvider>
);
