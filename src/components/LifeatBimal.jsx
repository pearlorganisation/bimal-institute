import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Bi1 from "../assets/BI-1.png";
import Bi2 from "../assets/BI-2.jpg";
import Bi3 from "../assets/BI-3.jpg";
import Bi4 from "../assets/BI-6.jpg";
import Bi5 from "../assets/BI-7.jpg";
import Bi6 from "../assets/BI-8jpg.jpg";
import Bi7 from "../assets/BI-9.jpg";
import Bi8 from "../assets/BI-10.jpg";

const images = [Bi8, Bi2, Bi3, Bi4, Bi5, Bi6, Bi7, Bi1];

const LifeAtBimalInstitute = () => {
  // const [direction, setDirection] = useState("right");
  // const lastScrollY = useRef(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY.current) {
  //       setDirection("left"); // Scroll down → Move images right to left
  //     } else if (currentScrollY < lastScrollY.current) {
  //       setDirection("right"); // Scroll up → Move images left to right
  //     }

  //     lastScrollY.current = currentScrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const [direction, setDirection] = useState("right");
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY.current) {
            setDirection("left");
          } else if (currentScrollY < lastScrollY.current) {
            setDirection("right");
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="py-16 w-[80%] 3xl:w-[75%] mx-auto">
    //   <div className="text-center pb-4 xl:pb-6">
    //     <div className="flex justify-center items-center text-left">
    //       <motion.h2
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: false, amount: 0.2 }}
    //         transition={{ duration: 0.7, ease: "easeOut" }}
    //         className="text-5xl lg:text-6xl 2xl:text-[5.3rem] font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
    //         style={{ fontFamily: "'League Spartan', sans-serif" }}
    //       >
    //         LIFE
    //       </motion.h2>
    //       <motion.p
    //         initial={{ opacity: 0, y: 50 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         viewport={{ once: false, amount: 0.2 }}
    //         transition={{ duration: 1, ease: "easeOut" }}
    //         className="text-gray-300 text-left text-sm md:text-lg 2xl:text-[1.6rem] items-end mt-[0.5rem] xl:mt-[1.1rem] 2xl:mt-[1.5rem] pl-3 font-medium xl:font-semibold tracking-widest"
    //         style={{
    //           fontFamily: "'Merriweather', serif",
    //         }}
    //       >
    //         at Bimal Institute
    //       </motion.p>
    //     </div>
    //   </div>

    //   <Marquee speed={100} direction={direction} gradient={false}>
    //     <div className="flex space-x-6 px-6 py-20">
    //       {[...images, ...images].map((img, index) => (
    //         <div
    //           key={index}
    //           className="w-[250px] h-[350px] lg:w-[270px] lg:h-[400px] xl:h-[420px] xl:w-[300px] 2xl:h-[480px] 2xl:w-[320px] rounded-xl overflow-hidden flex-shrink-0"
    //         >
    //           <img
    //             src={img}
    //             loading="lazy"
    //             alt={`Event ${index + 1}`}
    //             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </Marquee>
    // </div>

    <div className="py-16 w-[80%] 3xl:w-[75%] mx-auto">
      {/* Title Section */}

      <div className="text-center pb-4 xl:pb-6">
        <div className="flex justify-center items-center text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl lg:text-6xl 2xl:text-[5.3rem] font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            LIFE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-gray-300 text-left text-sm md:text-lg 2xl:text-[1.6rem] items-end mt-[0.5rem] xl:mt-[1.1rem] 2xl:mt-[1.5rem] pl-3 font-medium xl:font-semibold tracking-widest"
            style={{
              fontFamily: "'Merriweather', serif",
            }}
          >
            at Bimal Institute
          </motion.p>
        </div>
      </div>

      {/* Marquee Section */}
      <Marquee speed={50} direction={direction} gradient={false}>
        <div className="flex space-x-6 px-6 py-20">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] lg:w-[270px] lg:h-[400px] xl:h-[420px] xl:w-[300px] 2xl:h-[480px] 2xl:w-[320px] rounded-xl overflow-hidden flex-shrink-0"
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LifeAtBimalInstitute;
