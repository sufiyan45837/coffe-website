import React from 'react'
import log from '../component/log.svg';
import Group from '../component/Group 1.png';

 const Footer = () => {
  return (
    <div>
        
        <div
  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 ml-4 sm:ml-9 text-gray-300 lg:gap-[100px]  lg:pt-10 sm:ml-10"
  id="Contact"
>
  {/* Logo */}
  <img
    src={log}
    alt="Logo"
    className="w-12 h-12 sm:w-16 sm:h-16"
  />

  {/* Email link */}
  <a
    href="mailto:sufiyanfaheem281@gmail.com"
    className="text-gray hover:text-blue-800 text-sm sm:text-lg break-words w-full sm:w-auto"
  >
    sufiyanfaheem281@gmail.com
  </a>

  {/* Phone link */}
  <a
    href="tel:+447762921666"
    className="text-gray hover:text-blue-800 text-sm sm:text-lg break-words w-full sm:w-auto"
  >
    +44 776 292 1666
  </a>

  {/* Group icon */}
  <img
    src={Group}
    alt="Group Icon"
    className=""
  />
</div>


      <div className="border-t border-gray-300 my-4"></div>

      <div className="pt-7 ml-8 text-gray-300">
        <ul className="flex flex-col sm:flex-row gap-[80px] w-full cursor-pointer">
          <li className="w-full text-center sm:w-auto">
            <a href="#Home" className="hover:text-white block">Home</a>
          </li>
          <li className="w-full text-center sm:w-auto">
            <a href="#About" className="hover:text-white block">About</a>
          </li>
          <li className="w-full text-center sm:w-auto">
            <a href="#TechStack" className="hover:text-white block">TechStack</a>
          </li>
          <li className="w-full text-center sm:w-auto">
            <a href="#Projects" className="hover:text-white block">Projects</a>
          </li>
          <li className="w-full text-center sm:w-auto">
            <a href="#Contact" className="hover:text-white block">Contact</a>
          </li>
          <h1 className="ml-8">
            Designed and built by{" "}
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
              Sufiyan Faheem
            </span>
          </h1>
        </ul>
      </div>
    </div>
  )
}
export default Footer