import React, { useState, useEffect } from "react";
import Person from "../assets/char-home2.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Vibes&display=swap&family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-[80%] 3xl:w-[75%] mx-auto py-4 md:py-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-12 md:items-stretch">
        {/* Left Content */}
        <div className="flex-1 flex flex-col text-white overflow-hidden">
          <div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-300 text-left text-lg md:text-2xl 2xl:text-[1.3rem] tracking-widest"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              About
            </motion.p>

            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-5xl 2xl:text-[3.4rem]  font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              Manish Bimal
            </motion.h2>
          </div>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-medium text-[16px] md:text-[18px]  2xl:text-[20px] leading-[1.6] text-gray-400 opacity-80 text-justify overflow-hidden"
            style={{ fontFamily: "'Afacad', sans-serif" }}
          >
            Meet Manish Bimal – The Visionary Behind Bimal Institute.
            <br />
            <br />
            Manish Bimal is the driving force behind Bimal Institute, one of
            India’s premier stock market training centers. His journey began in
            2008, during one of the most challenging periods in market history.
            But instead of being intimidated, he became curious. A chance
            introduction to stock trading through a friend’s elder brother
            ignited a passion that would shape his future.Fast forward to
            2014—after completing his post-graduation, Manish delved deep into
            derivatives trading. Over the next two years, he read more than 30
            books, experimented with various strategies, and developed seven
            unique trading setups tailored to different trading styles. The
            Birth of Bimal Institute – Where Learning Meets Real Trading By
            2016,Manish recognized a significant gap in trading education—most
            courses focused heavily on theory but lacked real-world application.
            He knew that true success in the stock market required hands-on
            experience. Determined to bridge this gap, he founded Bimal
            Institute—Central India’s first live trading institute.
            <br />
            His mission? To teach traders how to apply strategies in real
            markets, not just in textbooks. The impact was immediate.
          </motion.p>

          <div className="flex justify-center mt-2">
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/story");
              }}
              className="bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300"
            >
              Read More
            </motion.button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex flex-col items-center justify-between overflow-hidden">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-xl overflow-hidden h-full flex items-center justify-center"
          >
            <img
              src={Person}
              alt="Manish Bimal"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-gray-400 text-lg  2xl:text-[1.4rem] font-semibold text-center mt-4"
          >
            Follow us
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex gap-16  justify-center mt-4 "
          >
            <a
              href="https://www.instagram.com/manishbimal/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E4405F] text-4xl  2xl:text-[2.8rem] transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/cru3lint3nsions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877F2] text-4xl 2xl:text-[2.8rem]  transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/manish-bimal-institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] text-4xl 2xl:text-[2.8rem] transition duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
