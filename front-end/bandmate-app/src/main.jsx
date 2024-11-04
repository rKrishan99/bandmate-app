import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./context/loginContext/LoginContext.jsx";
import { RegisterProvider } from "./context/registerContext/RegisterContext.jsx";
import { BandRegisterProvider } from "./context/bandRegisterContext/BandRegisterContext.jsx";
import { MusicianRegisterProvider } from "./context/musicianRegisterContext/MusicianRegisterContext.jsx";
import { CurrentUserProvider } from "./context/currentUserContext/CurrentUserContext.jsx";
import { FunctionalityProvider } from "./context/functionalityContext/FunctionalityContext.jsx";
import { ApplyDataProvider } from "./context/applyDataContext/ApplyDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <ApplyDataProvider>
    <FunctionalityProvider>
      <RegisterProvider>
        <MusicianRegisterProvider>
          <BandRegisterProvider>
            <CurrentUserProvider>
              <LoginProvider>
                <Router>
                  <App />
                </Router>
              </LoginProvider>
            </CurrentUserProvider>
          </BandRegisterProvider>
        </MusicianRegisterProvider>
      </RegisterProvider>
    </FunctionalityProvider>
  </ApplyDataProvider>
);
