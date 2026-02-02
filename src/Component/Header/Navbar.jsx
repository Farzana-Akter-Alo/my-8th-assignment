import React from "react";
import { NavLink } from "react-router";
import NavImg from "../../assets/logo.png";
import GitIcon from "../../assets/gitIcon.png";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="w-full mx-4 md:mx-6 md:w-7xl lg:mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <figure>
              <img className="w-10 " src={NavImg} alt="" />
            </figure>
            <h1 className="text-sm sm:text-md md:text-2xl lg:text-xl xl:text-md font-bold bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
              HERO.IO
            </h1>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-8 md:text-lg lg:text-base font-semibold ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"
                    : "no-underline text-black"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="app"
                className={({ isActive }) =>
                  isActive
                    ? "underline bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"
                    : "no-underline text-black"
                }
              >
                Apps
              </NavLink>
              <NavLink
                to="installization"
                className={({ isActive }) =>
                  isActive
                    ? "underline bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"
                    : "no-underline text-black"
                }
              >
                Installation
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end ">
            <a
              href="https://github.com/Farzana-Akter-Alo/my-8th-assignment"
              target="_blank"
              rel="noopener norefferer"
              className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] hidden md:flex items-center gap-2 font-medium text-xs sm:text-sm md:text-base sm:p-2 rounded-sm text-white"
            >
              {" "}
              <img src={GitIcon} alt="" />
              Contribute
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
