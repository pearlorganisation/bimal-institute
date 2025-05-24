import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [showPrograms, setShowPrograms] = useState(false); // Show programs list
  const [showResources, setShowResources] = useState(false); // Show resources list
  const location = useLocation(); // Get the current route

  // Program list with associated routes
  const programRoutes = {
    "Be A Trader Program 2.0": "/program",
    "Mentorship Program": "/mentorship-program",
    "Membership Program": "/membership-program",
    "Inner Circle Program": "/inner-circle-program",
  };

  // Resources list with associated routes
  const resourceRoutes = {
    Blogs: "/resource",
  };

  // Check if the current path is part of the program routes
  const isProgramRouteActive = Object.values(programRoutes).includes(
    location.pathname
  );

  // Check if the current path is part of the resource routes
  const isResourceRouteActive = Object.values(resourceRoutes).includes(
    location.pathname
  );

  // Automatically open the "Programs" submenu if on a program route
  useEffect(() => {
    if (isProgramRouteActive) {
      setShowPrograms(true);
    }
  }, [isProgramRouteActive]);

  // Automatically open the "Resources" submenu if on a resource route
  useEffect(() => {
    if (isResourceRouteActive) {
      setShowResources(true);
    }
  }, [isResourceRouteActive]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }
  }, [isOpen]);

  useEffect(() => {
    setShowPrograms(false)
    setShowResources(false)
    setIsOpen(false)
  }, [location])

  // Function to apply active link styles
  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-blue-400 font-bold"
      : "hover:text-blue-400";

  return (
    <header className="text-white max-w-[95%] lg:max-w-[95%] 2xl:w-[80%] 3xl:w-[75%]  mx-auto">
      <nav className="px-4 md:px-8 2xl:px-0  lg:pl-7 xl:pl-[1.85rem]  py-4 2xl:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center xl:space-x-1">
            {/* Logo */}
            <img src={Logo} alt="Logo" className="w-[36px] sm:w-[17%]" />

            {/* Institute Name */}
            <div className="flex flex-col items-start text-left leading-tight">
              <Link to="/">
                <span className="text-[0.8rem]  tracking-widest sm:text-base lg:text-[1.4rem] 2.5xl:text-[1.45rem] block">
                  बिमल इंस्टीट्यूट फॉर मार्केट रिसर्च
                </span>
              </Link>
              <Link to="/">
                <span className="text-[0.7rem] sm:text-sm lg:text-[1.25rem]  2.5xl:text-[1.3rem] 2.5xl:mt-1 block">
                  BIMAL INSTITUTE FOR MARKET RESEARCH
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center xl:justify-end  md:ml-24 lg:ml-2 xl:ml-0  md:space-x-7 xl:space-x-10 2xl:space-x-14  text-lg">
            <Link
              to="/"
              className={`transition duration-200   ${getLinkClass("/")}`}
            >
              Home
            </Link>
            <Link
              to="/story"
              className={`transition duration-200  ${getLinkClass("/story")}`}
            >
              Our Story
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowPrograms(true)}
              onMouseLeave={() => setShowPrograms(false)}
              onTouchStart={() => setShowPrograms(true)}
              onTouchEnd={() => setShowPrograms(false)}
            >
              <Link
                to="/program"
                className={`relative text-start transition  duration-200 ${getLinkClass(
                  "/program"
                )}`}
              >
                Programs
              </Link>
              {showPrograms && (
                <div className="absolute left-0 w-max top-full  text-white py-4 rounded-lg shadow-lg">
                  <div className="space-y-2 text-gray-400">
                    {Object.keys(programRoutes).map((program, index) => (
                      <div
                        key={index}
                        className={`text-sm 2.5xl:text-[0.9879rem]  text-start ${getLinkClass(
                          programRoutes[program]
                        )}`}
                      >
                        <Link to={programRoutes[program]}>{program}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/life-at-bimal"
              className={`transition duration-200  ${getLinkClass(
                "/life-at-bimal"
              )}`}
            >
              Life at BI
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <Link
                to="/resource"
                className={`relative text-start transition  duration-200 ${getLinkClass(
                  "/resource"
                )}`}
              >
                Resources
              </Link>
              {showResources && (
                <div className="absolute left-0 w-max top-full  text-white py-4 rounded-lg shadow-lg">
                  <div className="space-y-2 text-gray-400">
                    {Object.keys(resourceRoutes).map((resource, index) => (
                      <div
                        key={index}
                        className={`text-sm 2.5xl:text-[0.9879rem]    whitespace-nowrap text-start ${getLinkClass(
                          resourceRoutes[resource]
                        )}`}
                      >
                        <Link to={resourceRoutes[resource]}>{resource}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={`transition duration-200  ${getLinkClass("/contact")}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 bg-black p-4 rounded-lg shadow-lg">
            <Link
              to="/"
              className={`block transition duration-200 ${getLinkClass("/")}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/story"
              className={`block transition duration-200 ${getLinkClass(
                "/story"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <div>
              <button
                onClick={() => setShowPrograms(!showPrograms)}
                className={`block text-start transition duration-200 w-full ${getLinkClass(
                  "/program"
                )}`}
              >
                Programs
              </button>
              {showPrograms && (
                <div className="pl-3 space-y-2 pt-2 text-gray-400">
                  {Object.keys(programRoutes).map((program, index) => (
                    <div
                      key={index}
                      className={`text-sm  ${getLinkClass(
                        programRoutes[program]
                      )}`}
                    >
                      <Link
                        to={programRoutes[program]}
                        onClick={() => setIsOpen(false)}
                      >
                        {program}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/life-at-bimal"
              className={`block transition duration-200 ${getLinkClass(
                "/life-at-bimal"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Life at BI
            </Link>
            <div>
              <button
                onClick={() => setShowResources(!showResources)}
                className={`block text-start transition duration-200 w-full ${getLinkClass(
                  "/resource"
                )}`}
              >
                Resources
              </button>
              {showResources && (
                <div className="pl-3 space-y-2 pt-2 text-gray-400">
                  {Object.keys(resourceRoutes).map((resource, index) => (
                    <div
                      key={index}
                      className={`text-[0.9]  ${getLinkClass(
                        resourceRoutes[resource]
                      )}`}
                    >
                      <Link
                        to={resourceRoutes[resource]}
                        onClick={() => setIsOpen(false)}
                      >
                        {resource}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={`block transition duration-200 ${getLinkClass(
                "/contact"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
