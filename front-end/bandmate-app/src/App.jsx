import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notFound/NotFound";
import Login from "./components/login/Login";
import RegisterOptions from "./components/registration/registerOptions/RegisterOptions";
import BandRegister from "./components/registration/bandRegister/BandRegister";
import MusicianRegister from "./components/registration/musicianRegister/MusicianRegister";
import MusicianDashboard from "./components/musician/playerDashboard/MusicianDashboard";
import BandProfile from "./components/band/bandProfile/BandProfile";
import Navbar from "./components/navbar/Navbar";
import "@mui/material";
import PostAds from "./components/postAds/PostAds";
import EditInfo from "./components/band/editInfo/EditInfo";
import Applicants from "./components/applicants/Applicants";
import Feed from "./pages/feed/Feed";
import PaymentGetway from "./components/paymentGetway/PaymentGetway";
import ApplyDialog from "./components/applyDialog/ApplyDialog";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme (choose any available theme)
import "primereact/resources/primereact.min.css"; // Core PrimeReact styles
import "primeicons/primeicons.css"; // Icons (if used by any components)
import AppliyerDetails from "./components/applicants/appliyerDetails/AppliyerDetails";
import ConfirmDelete from "./components/band/confirmDelete/ConfirmDelete";
import DeleteMyPost from "./components/band/myPost/deleteMyPost/DeleteMyPost";
import Footer from "./components/footer/Footer";

function App() {
  


  return (
    <>
      <Navbar />
      <Login />
      <RegisterOptions />
      <BandRegister />
      <MusicianRegister />
      <PostAds />
      <EditInfo />
      <Applicants />
      <PaymentGetway />
      <ApplyDialog />
      <AppliyerDetails />
      <ConfirmDelete />
      <DeleteMyPost />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/musician-dashboard" element={<MusicianDashboard />} />
        <Route path="/profile" element={<BandProfile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
