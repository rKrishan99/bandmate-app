import React, { useContext, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FunctionalityContext } from "../../context/functionalityContext/FunctionalityContext";

const Applicants = () => {

    const { visibleApplicants, setVisibleApplicants } = useContext(FunctionalityContext);

  return (
    <Dialog
      header="Applicant"
      visible={visibleApplicants}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visibleApplicants) return;
        setVisibleApplicants(false);
      }}
    >
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Dialog>
  )
}

export default Applicants;