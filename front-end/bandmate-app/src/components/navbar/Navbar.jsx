import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "../navDropdown/NavDropdown";
import navItems from "./navItems";
import Logo from "../../assests/Bandmate_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLog, setIsLog] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900 sticky top-0 shadow z-10 ">
      <div className="flex justify-between items-center md:px-24 md:py-4 px-8 py-2">
        <Link to="/">
          <img
            className="w-24 md:w-28"
            src={Logo}
            alt="Bandmate Logo"
          />
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.address}
                className={({ isActive }) =>
                  isActive
                    ? "text-navItem-active text-lg"
                    : "text-navItem text-lg hover:text-navItem-hover"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          {isLog ? (
            <div className="flex items-center justify-between gap-4 ">
              <img
                ref={avatarRef}
                className="bg-slate-50 rounded-full w-14 cursor-pointer"
                src="./avatar.png"
                alt=""
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute top-28 right-0 mt-2 bg-white rounded-md shadow-lg z-10"
                >
                  <NavDropdown />
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="bg-primaryButton hover:bg-primaryButton-hover text-white px-8 py-3 rounded-md mr-4">
                  Signin
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-primaryButton hover:bg-primaryButton-hover text-white px-8 py-3 rounded-md">
                  Signup
                </button>
              </Link>
            </div>
          )}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img className="md:hidden w-8" src="./close.png" alt="" />
          ) : (
            <img className="md:hidden w-10" src="./burger.png" alt="" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.address}
                  className={({ isActive }) =>
                    isActive
                      ? "text-navItem-active"
                      : "text-navItem hover:text-navItem-hover"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <div className="flex space-x-3">
              {isLog ? (
                <div className="flex items-center justify-between gap-4 ">
                  <img
                    ref={avatarRef}
                    className="bg-slate-50 rounded-full w-14 cursor-pointer"
                    src="./avatar.png"
                    alt=""
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />
                  {dropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute  top-28 right-0 mt-2 bg-white rounded-md shadow-lg z-10"
                      
                    >
                      <NavDropdown />
                    </div>
                  )}
                </div>
              ) : (
                <div>
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
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
