import React, { useContext, useState } from "react";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../../context/functionalityContext/FunctionalityContext";
import { CurrentUserContext } from "../../../context/currentUserContext/CurrentUserContext";
import PopupAlert from "../../alert/popupAlert/PopupAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmDelete = () => {
  const { visibleConfirmDelete, setVisibleConfirmDelete } =
    useContext(FunctionalityContext);
  const { currentUser, setCurrentUser, isLog, setIsLog } =
    useContext(CurrentUserContext);

  const [alertMessage, setAlertMessage] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState(true);

  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.delete(
        `http://192.168.43.30:3000/user/${currentUser.email}`
      );

      if (result.status === 200) {
        setAlertMessage("Delete successful!");
        setVisibleAlert(true);
        setCurrentUser(null);
        setIsLog(false);
        localStorage.removeItem("currentUser");
        // window.location.href = "/"
        navigate("/"); // Use replace to prevent back navigation

        setTimeout(() => {
            setVisibleConfirmDelete(false);
            navigate("/", { replace: true }); // Use replace to prevent back navigation
          }, 1000);

      } else {
        console.error("Delete failed:", result);
      }
    } catch (error) {
      setAlertInfo(false);
      setAlertMessage("Failed to delete account. Please try again.");
      setVisibleAlert(true);
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div className="relative bg-transparent rounded-xl">
      {visibleConfirmDelete && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisibleConfirmDelete(false)}
        ></div>
      )}
      <Dialog
        header=""
        visible={visibleConfirmDelete}
        style={{ width: "90vw", maxWidth: "500px" }} 
        onHide={() => setVisibleConfirmDelete(false)}
        closable={false}
        modal
        dismissableMask={false}
      >
        <div className="flex flex-col justify-center gap-4 p-4 sm:p-6">
          <span className="text-gray-800 text-base sm:text-lg text-center">
            Are you sure you want to delete your account?
          </span>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button
              onClick={handleDelete}
              className="text-white bg-red-600 hover:bg-red-700 cursor-pointer px-4 py-2 rounded-md w-full sm:w-[80px]"
              type="button"
            >
              Yes
            </button>
            <button
              onClick={() => setVisibleConfirmDelete(false)}
              className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 py-2 rounded-md w-full sm:w-[80px]"
              type="button"
            >
              No
            </button>
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

export default ConfirmDelete;
