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
                  ? "text-yellow-600"
                  : "text-zinc-300 hover:text-yellow-600"
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
                  ? "text-yellow-600"
                  : "text-zinc-300 hover:text-yellow-600"
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
                  ? "text-yellow-600"
                  : "text-zinc-300 hover:text-yellow-600"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="bg-yellow-500 text-white hover:bg-black px-8 py-3 rounded-md">
              Signin
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-yellow-500 text-white hover:bg-black px-8 py-3 rounded-md">
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
                    ? "text-yellow-600"
                    : "text-zinc-300 hover:text-yellow-600"
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
                    ? "text-yellow-600"
                    : "text-zinc-300 hover:text-yellow-600"
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
                    ? "text-yellow-600"
                    : "text-zinc-300 hover:text-yellow-600"
                }
              >
                Contact
              </NavLink>
            </li>
            <div className="flex space-x-3">
              <Link to="/login">
                <button className="bg-yellow-500 text-white hover:bg-black px-6 py-2 rounded-md">
                  Signin
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-yellow-500 text-white hover:bg-black px-6 py-2 rounded-md">
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
