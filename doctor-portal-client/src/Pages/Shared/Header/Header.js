import React from "react";
import { Link } from "react-router-dom";
import logo  from "../../../Assets/logos/logo-2.png";
// import logo2  from "../../../Assets/logos/logo-2.png";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-16" data-theme="corporate">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Appointment</Link>
              </li>
              <li>
                <Link>Review</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="normal-case text-xl flex justify-center items-center">
            <img className="w-12" src={logo} alt="" />
            Dr. Portal
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="appointment">Appointment</Link>
            </li>
            <li>
              <Link to="review">Review</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
