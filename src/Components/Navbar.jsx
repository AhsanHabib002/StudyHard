import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const togglebutton = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div>
      <div className="navbar bg-[#E8FCD0] px-[10px] md:px-[30px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/" className="font-medium mx-3">
                Home
              </NavLink>
              <NavLink to="/assignments" className="font-medium mx-3">
                Assignments
              </NavLink>
              <NavLink to="/pending-assignments" className="font-medium mx-3">
                Pending Assignments
              </NavLink>
              
              <HashLink to="/#team" className="font-medium mx-3">
                Team
              </HashLink>
            </ul>
          </div>
          <a className="text-xl font-bold">Studyhard</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="my-2">
              <NavLink to="/" className="font-medium mx-3">
                Home
              </NavLink>
              <NavLink to="/assignments" className="font-medium mx-3">
                Assignments
              </NavLink>
              <NavLink to="/pending-assignments" className="font-medium mx-3">
                Pending Assignments
              </NavLink>
              <HashLink to="/#team" className="font-medium mx-3">
                Team
              </HashLink>
              <button onClick={togglebutton} className=" theme-toggle-btn">
                {theme === "light-theme" ? "Dark" : "Light"}
              </button>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="relative group flex justify-center items-center gap-2">
              <details className="dropdown">
                <summary className="btn bg-[#fff0] m-1">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    data-tooltip-content={user.displayName}
                    data-tooltip-id="userTooltip"
                  />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <NavLink to="/create-assignment">Create Assignment</NavLink>
                  <NavLink to="/my-assignment">My Assignment</NavLink>
                </ul>
              </details>
              <Tooltip
                id="userTooltip"
                place="bottom"
                effect="solid"
                className="text-sm text-gray-700 bg-white border border-gray-300 p-2 rounded-md"
              />
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">
                <a className="btn bg-[#191A23] text-white">Log In</a>
              </Link>
              <Link to="/register">
                <a className="btn btn-outline text-black">Register</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
