import React from "react";
import logo from "../assets/cybage_logo.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navLinks = document.querySelector(".nav-links");
  return (
    <nav className="container fixed py-4 bg-white max-w-full">
      <div className="flex justify-between items-center px-9 mx-auto">
        <img src={logo} alt="" className="max-w-32" />
        <ul className="nav-links flex md:flex-row flex-col font-bold md:items-center absolute min-w-full md:min-w-fit md:static bg-white top-20 left-0">
          <li className="px-2 py-5 md:border-none border-b-[1px] border-black">
            Services
          </li>
          <li className="px-2 py-5 md:border-none border-b-[1px] border-black">
            Industries
          </li>
          <li className="px-2 py-5 md:border-none border-b-[1px] border-black">
            Differentiators
          </li>
          <li className="px-2 py-5 md:border-none border-b-[1px] border-black">
            About Us
          </li>
          <li className="px-2 py-5 md:border-none border-b-[1px] border-black">
            Careers
          </li>
        </ul>
        <div className="flex items-center">
          <IoMdSearch className="mr-2" />
          <button className="py-1 px-2 text-white bg-blue-500 hidden md:block  ">
            Let's Talk
          </button>
          <div className="cursor-pointer">
            {!isMenu ? (
              <button
                onClick={() => {
                  setIsMenu(true);

                  navLinks.classList.toggle("hidden");
                }}
              >
                <IoMenu className="text-4xl md:hidden" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsMenu(false);
                  navLinks.classList.toggle("hidden]");
                }}
              >
                <IoCloseSharp className="text-4xl md:hidden" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
