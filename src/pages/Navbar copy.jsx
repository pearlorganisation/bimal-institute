import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [showPrograms, setShowPrograms] = useState(false); // Show programs list
  const location = useLocation(); // Get the current route

  // Program list with associated routes
  const programRoutes = {
    "Be a Trader Program": "/program",
    "Mentorship Program": "/mentorship-program",
    "Membership Program": "/membership-program",
    "Inner Circle Program": "/inner-circle-program",
  };

  // Check if the current path is part of the program routes
  const isProgramRouteActive = Object.values(programRoutes).includes(
    location.pathname
  );

  // Automatically open the "Programs" submenu if on a program route
  useEffect(() => {
    if (isProgramRouteActive) {
      setShowPrograms(true);
    }
  }, [isProgramRouteActive]);

  // Function to apply active link styles
  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-blue-400 font-bold"
      : "hover:text-blue-400";

  return (
    <header className="text-white max-w-[90%] mx-auto">
      <nav className="px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-100"  style={{width:'80px'}}/>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 relative justify-start">
            <Link
              to="/"
              className={`transition duration-200 ${getLinkClass("/")}`}
            >
              Home
            </Link>
            <Link
              to="/story"
              className={`transition duration-200 ${getLinkClass("/story")}`}
            >
              Our Story
            </Link>
            <div className="relative">
              <Link
                to="/program"
                onClick={() => setShowPrograms(!showPrograms)}
                className={`relative transition duration-200 ${getLinkClass(
                  "/program"
                )}`}
              >
                Programs
              </Link>
              {showPrograms && (
                <div className="absolute left-0 w-max top-full mt-2 text-white py-4 rounded-lg shadow-lg">
                  <div className="space-y-2 text-gray-400">
                    {Object.keys(programRoutes).map((program, index) => (
                      <div
                        key={index}
                        className={`text-sm text-start ${getLinkClass(
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
              className={`transition duration-200 ${getLinkClass(
                "/life-at-bimal"
              )}`}
            >
              Life at BI
            </Link>
            <Link
              to="/resource"
              className={`transition duration-200 ${getLinkClass("/resource")}`}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={`transition duration-200 ${getLinkClass("/contact")}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
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
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-black p-4 rounded-lg shadow-lg">
            <Link
              to="/"
              className={`block transition duration-200 ${getLinkClass("/")}`}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Home
            </Link>
            <Link
              to="/story"
              className={`block transition duration-200 ${getLinkClass(
                "/story"
              )}`}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Our Story
            </Link>
            <div>
              <button
                onClick={() => setShowPrograms(!showPrograms)}
                className={`block text-center transition duration-200 w-full ${getLinkClass(
                  "/program"
                )}`}
              >
                Programs
              </button>
              {showPrograms && (
                <div className="pl-4 space-y-2 text-gray-400">
                  {Object.keys(programRoutes).map((program, index) => (
                    <div
                      key={index}
                      className={`text-sm text-center ${getLinkClass(
                        programRoutes[program]
                      )}`}
                    >
                      <Link
                        to={programRoutes[program]}
                        onClick={() => setIsOpen(false)} // Close menu on click
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
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Life at BI
            </Link>
            <Link
              to="/resource"
              className={`block transition duration-200 ${getLinkClass(
                "/resource"
              )}`}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className={`block transition duration-200 ${getLinkClass(
                "/contact"
              )}`}
              onClick={() => setIsOpen(false)} // Close menu on click
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
