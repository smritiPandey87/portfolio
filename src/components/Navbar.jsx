import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkTheme = savedTheme === "synthwave";
    setIsDark(isDarkTheme);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "synthwave" : "light"
    );
  }, []);

 
  useEffect(() => {
    const theme = isDark ? "synthwave" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <div key={isDark ? "dark" : "light"} className="navbar bg-base-100 shadow-sm  fixed z-50">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <div className="navbar-center lg:flex gap-24 mr-24">
              <a href="#home">
                <div>Home</div>
              </a>
              <a href="#About">
                <div>About</div>
              </a>
              <a>
                <div>Portfolio</div>
              </a>
              <a>
                <div>Contact Me</div>
              </a>
            </div>
          </ul>
        </div>
        <a className=" text-xl  ml-4 flex justify-center items-center" href="#">
          <div className="mr-3">
            <img className="w-16 rounded-lg" src={logo} />
          </div>
          <div className="flex flex-col justify-start items-start">
         <div>
            <span className="text-2xl font-serif ">S</span>
            <span className="text-start text-lg">mriti </span>
          </div>
          <span className="text-[12px] font-medium">WEB DEVELOPER </span>
          </div>
          
        </a>
      </div>

      <div className="navbar-center lg:flex gap-24 mr-24">
        <a>
          <div>Home</div>
        </a>
        <a>
          <div>About</div>
        </a>
        <a>
          <div>Portfolio</div>
        </a>
        <a>
          <div>Contact Me</div>
        </a>
      </div>

      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />

        {/* Sun icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* Moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
  );
}
