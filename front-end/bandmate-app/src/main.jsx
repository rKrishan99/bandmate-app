import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginProvider } from "./context/loginContext/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <Router>
      <App />
    </Router>
  </LoginProvider>,
);
