import React from "react";
import { Link } from "react-router-dom";

const RegisterOptions = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-9">
      <div className="bg-slate-200 rounded-md p-2">
        <Link to="/band-register">
          <div className="w-[300px] h-[150px] flex items-center justify-center">
            <h1>I'm a Band</h1>
          </div>
        </Link>
      </div>
      <div className="bg-slate-200 rounded-md p-2">
        <Link to="/player-register">
          <div className="w-[300px] h-[150px] flex items-center justify-center">
            <h1>I'm a Band</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RegisterOptions;
