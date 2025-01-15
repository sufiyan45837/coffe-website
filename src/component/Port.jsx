import React, { useState } from 'react';
import logo from '../component/logo 1.png';
import Group from '../component/Group 1.png';
import my from '../component/my.jpg';

const Port = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-6 py-4 text-white  ">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img src={logo} alt="logo" className="w-16 h-auto" id="Home" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="sm:hidden">
        <button
          className="text-gray-400 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} sm:block w-full sm:w-auto`}
      >
        <ul className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 text-center sm:text-left font-DM Sans">
          <li><a href="#Home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#About" className="hover:text-blue-400">About</a></li>
          <li><a href="#TechStack" className="hover:text-blue-400">TechStack</a></li>
          <li><a href="#Projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#Contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      {/* Group Icon */}
      <div className="hidden sm:block">
        <img
          src={Group}
          alt="Group"
          className="h-8 cursor-pointer"
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left pt-12 sm:pt-20 w-full" id="About">
        {/* Text Section */}
        <div className="sm:flex-grow">
          <h1 className="text-3xl sm:text-5xl font-bold leading-snug">
            Hi 👋,
            <br />
            My name is
            <br />
            <span className="text-blue-500">SUFIYAN FAHEEM</span>
            <br />
            I build things for the web
          </h1>
        </div>

        {/* Profile Picture */}
        <div className="mt-8 sm:mt-0 sm:ml-8">
          <img
            src={my}
            alt="My Profile"
            className="w-36 h-36 sm:w-60 sm:h-60 rounded-full border-4 object-cover mx-auto"
            style={{ borderColor: "rgba(231, 15, 170, 1), rgba(0, 192, 253, 1)" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Port;
