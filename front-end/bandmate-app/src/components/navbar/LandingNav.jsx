import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900">
      <div className="flex justify-between items-center md:px-32 md:py-4 px-8 py-2">
        <Link to="/">
          <img
            className="w-32 md:w-52"
            src="./Bandmate_logo.png"
            alt="Bandmate Logo"
          />
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-navItem-active"
                  : "text-navItem hover:text-navItem-hover"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-navItem-active"
                  : "text-navItem hover:text-navItem-hover"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-navItem-active"
                  : "text-navItem hover:text-navItem-hover"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="bg-primaryButton hover:bg-primaryButton-hover text-white px-8 py-3 rounded-md">
              Signin
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-primaryButton hover:bg-primaryButton-hover text-white px-8 py-3 rounded-md">
              Signup
            </button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ? (
              
              <img className="md:hidden w-8" src="./close.png" alt="" />
            ) : (
              <img className="md:hidden w-10" src="./burger.png" alt="" />
            )
          }
          
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-navItem-active"
                    : "text-navItem hover:text-navItem-hover"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-navItem-active"
                    : "text-navItem hover:text-navItem-hover"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-navItem-active"
                    : "text-navItem hover:text-navItem-hover"
                }
              >
                Contact
              </NavLink>
            </li>
            <div className="flex space-x-3">
              <Link to="/login">
                <button className="bg-primaryButton hover:bg-primaryButton-hover px-6 py-2 rounded-md text-white transition-colors duration-300 ease-in-out">
                  Signin
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-primaryButton hover:bg-primaryButton-hover px-6 py-2 rounded-md text-white transition-colors duration-300 ease-in-out">
                  Signup
                </button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;
