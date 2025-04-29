import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import logo1 from "../assets/Hindustan_Times_logo.svg-300x39.png";
import logo2 from "../assets/the-print-300x66.webp";
import logo3 from "../assets/business-standard-logo-300x37.png";
import logo4 from "../assets/logo-white-300x84.png";
import logo5 from "../assets/dailyhunt.png";
import logo6 from "../assets/logo-300x83.png";
import logo7 from "../assets/news21.png";
import logo8 from "../assets/news22.png";
import logo9 from "../assets/nw3.png";
import logo10 from "../assets/news24.png";
import logo11 from "../assets/nw77.png";
import logo12 from "../assets/news26.png";
import logo13 from "../assets/news27.png";
import logo14 from "../assets/nw9.png";
import logo15 from "../assets/nw1.png";
import logo16 from "../assets/nw22.png";
import logo17 from "../assets/nw101.png";

const HomeBanner = () => {
  useEffect(() => {
    // Load League Spartan font from Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const fontFace = new FontFace(
      "TheFalley",
      "url('/TheFalleyRegular.otf') format('opentype')"
    );

    fontFace
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
      })
      .catch((error) => {
        console.error("Font loading failed:", error);
      });
  }, []);

  return (
    <div className="m-auto w-[80%]  3xl:w-[75%] text-white py-6 relative">
      {/* Featured In Title with Side Lines */}
      <div className="flex items-center justify-center relative pb-4">
        <div className="flex-grow h-[1px] bg-gray-400"></div>
        <div className="px-4 md:px-12 relative z-10">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-gradient-to-r from-[#3195FF] via-[#3195FF] to-[#0940E6] text-transparent bg-clip-text text-3xl md:text-5xl  2xl:[3.8rem] font-semibold"
            style={{ fontFamily: "TheFalley, sans-serif" }}
          >
            Featured In
          </motion.span>
        </div>
        <div className="flex-grow h-[1px] bg-gray-400"></div>
      </div>

      {/* Scrolling Logos */}
      <div className="overflow-hidden">
        <Marquee speed={50} gradient={false}>
          <div className="flex items-center space-x-12">
            {[
              logo1,
              logo2,
              logo3,
              logo4,
              logo17,
              logo5,
              logo11,
              logo6,
              logo7,
              logo8,
              logo9,
              logo13,
              logo14,
              logo15,
              logo16,
              logo10,
              logo12,
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                // className="h-12 pl-10 transition-all duration-300 filter grayscale hover:grayscale-0"
                className={`pl-10 transition-all duration-300 filter grayscale hover:grayscale-0 ${
                  index >= 14 ? "h-16" : "h-12"
                }`}
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Bottom Line */}
      <div className="bg-gray-400 mt-6 h-[1px]"></div>
    </div>
  );
};

export default HomeBanner;
