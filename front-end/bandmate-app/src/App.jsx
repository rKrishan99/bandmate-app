import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Login from "./components/login/Login";
import RegisterOptions from "./components/registration/registerOptions/RegisterOptions"
import BandRegister from "./components/registration/bandRegister/BandRegister";
import PlayerRegister from "./components/registration/playerRegister/PlayerRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterOptions />} />
        <Route path="/band-register" element={<BandRegister />} />
        <Route path="/player-register" element={<PlayerRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
