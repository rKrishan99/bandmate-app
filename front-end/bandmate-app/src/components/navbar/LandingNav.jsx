import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../public/Bandmate_logo.png";

const LandingNav = () => {
  return (
    <div className="flex items-center bg-blue-700">
      <div className="flex-1">
        <Link to="/">
          <img className="w-52" src="./Bandmate_logo.png" alt="Bandmate Logo" />
        </Link>
      </div>
      <div className="flex-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex-1">
        <Link to="/login">
          <button>Signin</button>
        </Link>
        <Link to="/signup">
            <button>Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingNav;
