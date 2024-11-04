import React, { useContext, useState } from "react";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../../context/functionalityContext/FunctionalityContext";
import PopupAlert from "../../alert/popupAlert/PopupAlert";
import axios from "axios";

const AppliyerDetails = () => {
  const {
    visibleAppliyerDetails,
    setVisibleAppliyerDetails,
    appliyerDetails,
    setAppliyerDetails,
  } = useContext(FunctionalityContext);

  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertInfo, setAlertInfo] = useState(true);

  const haddleIgnore = async (e) => {
    e.preventDefault();

    console.log("DeleteVacancyID:", );

    try {
      const result = await axios.delete(
        `http://192.168.43.30:3000/application/${appliyerDetails.applicationID}`
      );

      console.log("Ignore result:", result);
      if (result.status === 200) {
        setAlertInfo(true);
        setAlertMessage("Application Removed!");
        setVisibleAlert(true);
        setTimeout(() => {
          window.location.reload(); // Navigates to the current page, triggering a refresh
        }, 1000);
      } else {
        console.error("Ignore failed:", result);
      }
    } catch (error) {
      setAlertInfo(false);
      setAlertMessage("Failed to remove application. Please try again.");
      setVisibleAlert(true);
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div>
      <Dialog
        header={
          <div className="pl-2">
            <h1 className="text-center mb-4 text-gray-900 text-3xl">
              Appliyer Details
            </h1>
            <hr className="mt-2 mb-2 border-none h-[1px] bg-gray-300" />
          </div>
        }
        visible={visibleAppliyerDetails}
        onHide={() => {
          if (!visibleAppliyerDetails) return;
          setVisibleAppliyerDetails(false);
        }}
        className="h-auto w-[600px] rounded-xl pb-6 bg-cardBg pt-4"
      >
        <div className="flex flex-col gap-4 px-2">
          <div className="flex flex-row gap-8">
            {appliyerDetails.imgpath !== "player" ? (
              <img
                className="bg-slate-50 rounded-full w-28 h-28 "
                src={`http://192.168.43.30:3000/images/${appliyerDetails.imgpath}`}
                alt=""
              />
            ) : (
              <img
                className="bg-slate-50 rounded-full w-28 h-28 "
                src="./musician.png"
                alt=""
              />
            )}
            <div className="flex flex-col justify-center gap-2">
              <span className="text-2xl font-bold text-gray-800">
                {appliyerDetails.name}
              </span>
              <span className="text-lg">I'm a {appliyerDetails.category}</span>
            </div>
          </div>
          <hr className="mt-2 mb-2 border-none h-[1px] bg-gray-300" />
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold">About</span>
            <p className="text-md text-slate-800 mb-4">
              {appliyerDetails.about}
            </p>

            <div className="flex flex-row items-center gap-2">
              <h1 className="text-lg font-bold">Experience:</h1>
              <p className="text-lg text-slate-800">
                {appliyerDetails.experience}
              </p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <h1 className="text-lg font-bold">Phone:</h1>
              <p className="text-lg text-slate-800">{appliyerDetails.phone}</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <h1 className="text-lg font-bold">Email:</h1>
              <p className="text-lg text-slate-800">
                {appliyerDetails.userEmail}
              </p>
            </div>

            <hr className="mt-2 mb-2 border-none h-[1px] bg-gray-300" />
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-lg font-bold">Price:</h1>
              <p className="text-lg text-slate-800">
                Rs.{appliyerDetails.price}
              </p>
            </div>
            <hr className="mt-2 mb-2 border-none h-[1px] bg-gray-300" />
            <div className="flex justify-end">
              <button
                onClick={haddleIgnore}
                className="flex justify-center rounded-lg px-5 py-2 text-white bg-green-600 hover:bg-green-700 w-[80px]"
              >
                Ignore
              </button>
            </div>
          </div>
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

export default AppliyerDetails;
