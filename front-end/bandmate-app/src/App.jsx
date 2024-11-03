import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Login from "./components/login/Login";
import RegisterOptions from "./components/registration/registerOptions/RegisterOptions"
import BandRegister from "./components/registration/bandRegister/BandRegister";
import MusicianRegister from "./components/registration/musicianRegister/MusicianRegister";
import MusicianDashboard from "./components/musician/playerDashboard/MusicianDashboard";
import BandProfile from "./components/band/bandProfile/BandProfile";
import Navbar from "./components/navbar/Navbar";
import '@mui/material'
import PostAds from "./components/postAds/PostAds";
import EditInfo from "./components/band/editInfo/EditInfo";
import Applicants from "./components/applicants/Applicants";
import Feed from "./pages/feed/Feed";

function App() {
  return (
    <>
    <Navbar />
    <Login />
    <RegisterOptions />
    <BandRegister/>
    <MusicianRegister/>
    <PostAds/>
    <EditInfo/>
    <Applicants/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/musician-dashboard" element={<MusicianDashboard />} />
        <Route path="/profile" element={<BandProfile />} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
