import React, { useEffect } from "react";
import { motion } from "framer-motion";
import vectorUnderline from "../assets/Vector.png";
import Homebook from "../assets/bimal-bbw.webp";
import { Link } from "react-router-dom";
import Test from "../pages/Test";

const SmartTraderProgram = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-[80%] 3xl:w-[75%] mx-auto text-white py-12  md:pt-20 px-6 md:px-0  flex flex-col md:flex-row items-center justify-center">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8">
        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl   font-semibold leading-tight"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text">
            Be A
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-[#0940E6] to-[#3195FF] text-transparent bg-clip-text  font-bold">
            Trader
          </span>{" "}
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text">
              Program 2.0
            </span>{" "}
            <img
              src={vectorUnderline}
              alt="Underline"
              className="absolute bottom-28 right-16 sm:bottom-16 md:bottom-12 md:right-36  w-[45%] sm:right-[11rem]"
            />
          </span>
        </motion.h1>

        {/* Subtitle Animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-lg  2xl:text-xl my-6"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          India's Most Updated Trading Course
        </motion.p>

        {/* Availability Badge Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gray-800 bg-opacity-50 text-gray-300 p-1 rounded-lg border-l-4 border-yellow-400 shadow-md flex items-center max-w-full md:max-w-[75%]"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          
          <img src="/stars.webp" alt="" className="h-6 w-6 " />
          <p className="pl-2 uppercase text-white 2xl:text-lg">
            Available in offline and online mode
          </p>
        </motion.div>

        {/* Buttons Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 flex gap-4 justify-center md:justify-start"
        >
          <button className="bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300">
            <Link to="/program">Know More</Link>
          </button>
          <button className="bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300">
            <Link to="/contact">Apply Now</Link>
          </button>
        </motion.div>
      </div>

      {/* Right Section (Book Image) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <img
          src={Homebook}
          alt="Smart Trader Program Book"
          className="w-64 md:w-[21.5rem] 2xl:w-96 drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default SmartTraderProgram;
