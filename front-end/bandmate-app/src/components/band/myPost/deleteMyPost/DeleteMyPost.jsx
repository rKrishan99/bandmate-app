import React, { useContext, useState } from "react";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../../../context/functionalityContext/FunctionalityContext";
import { CurrentUserContext } from "../../../../context/currentUserContext/CurrentUserContext";
import PopupAlert from "../../../alert/popupAlert/PopupAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";

const DeleteMyPost = () => {
  const { visibleConfirmDelete, setVisibleConfirmDelete } =
    useContext(FunctionalityContext);
  const { currentUser, setCurrentUser, isLog, setIsLog } =
    useContext(CurrentUserContext);

  const {
    visiblePostDelete,
    setVisiblePostDelete,
    DeleteVacancyID,
    setDeleteVacancyID,
  } = useContext(FunctionalityContext);

  const [alertMessage, setAlertMessage] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState(true);

  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    console.log("DeleteVacancyID:", DeleteVacancyID);

    if (!DeleteVacancyID) {
      console.error("DeleteVacancyID is null.");
      return;
    }

    try {
      const result = await axios.delete(
        `http://192.168.43.30:3000/vacancy/${DeleteVacancyID}`
      );

      console.log("Delete result:", result);
      if (result.status === 200) {
        setAlertMessage("Delete successful!");
        setVisibleAlert(true);
        setVisiblePostDelete(false);

        setTimeout(() => {
          navigate(0); // Navigates to the current page, triggering a refresh
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
      {visiblePostDelete && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setVisiblePostDelete(false)}
        ></div>
      )}
      <Dialog
        header=""
        visible={visiblePostDelete}
        style={{ width: "90vw", maxWidth: "500px" }} // Set a responsive width with max-width for larger screens
        onHide={() => setVisiblePostDelete(false)}
        closable={false}
        modal
        dismissableMask={false}
      >
        <div className="flex flex-col justify-center gap-4 p-4 sm:p-6">
          <span className="text-gray-800 text-base sm:text-lg text-center">
            Are you sure you want to delete this ad?
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
              onClick={(e) => {
                e.preventDefault();
                setVisiblePostDelete(false); // Ensure this sets to false to close the dialog
              }}
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

export default DeleteMyPost;
