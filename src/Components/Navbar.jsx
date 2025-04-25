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
    <div className="w-full">
      <div className="navbar bg-[#E8FCD0] px-4 md:px-8 fixed top-0 z-50 shadow-md">
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow space-y-2"
            >
              <NavLink to="/" className="font-medium">
                Home
              </NavLink>
              <NavLink to="/assignments" className="font-medium">
                Assignments
              </NavLink>
              <NavLink to="/pending-assignments" className="font-medium">
                Pending Assignments
              </NavLink>
              <HashLink to="/#team" className="font-medium">
                Team
              </HashLink>
              <button
                onClick={togglebutton}
                className="theme-toggle-btn font-medium"
              >
                {theme === "light-theme" ? "Dark" : "Light"}
              </button>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Studyhard
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <NavLink to="/" className="font-medium">
              Home
            </NavLink>
            <NavLink to="/assignments" className="font-medium">
              Assignments
            </NavLink>
            <NavLink to="/pending-assignments" className="font-medium">
              Pending Assignments
            </NavLink>
            <HashLink to="/#team" className="font-medium">
              Team
            </HashLink>
            <button
              onClick={togglebutton}
              className="theme-toggle-btn font-medium"
            >
              {theme === "light-theme" ? "Dark" : "Light"}
            </button>
          </ul>
        </div>

        {/* User section */}
        <div className="navbar-end">
          {user && user?.email ? (
            <div className="flex items-center gap-4">
              <details className="dropdown">
                <summary className="btn bg-transparent border-none px-0">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    data-tooltip-content={user.displayName}
                    data-tooltip-id="userTooltip"
                  />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow space-y-2">
                  <NavLink to="/create-assignment" className="font-medium">
                    Create Assignment
                  </NavLink>
                  <NavLink to="/my-assignment" className="font-medium">
                    My Assignment
                  </NavLink>
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
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-3">
              <Link to="/login" className="btn bg-[#191A23] text-white btn-sm">
                Log In
              </Link>
              <Link
                to="/register"
                className="btn btn-outline text-black btn-sm border-black"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
