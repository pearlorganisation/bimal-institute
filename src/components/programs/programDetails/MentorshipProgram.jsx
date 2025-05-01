import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../../pages/Navbar";
import ContactUsForm from "../../ContactUsForm";
import Footer from "../../Footer";
import FixedSidebarButtons from "../../../pages/FixedSidebarButtons";

// Import video and images
import MentoshipImg1 from "../../../assets/mtw1.webp";
import MentoshipImg2 from "../../../assets/mtw2.webp";
import MentoshipImg3 from "../../../assets/mtw3.webp";
import MentoshipImg4 from "../../../assets/mtw4.webp";
import Img1 from "../../../assets/mentor11.webp";
import Img2 from "../../../assets/mentor12.webp";
import Img3 from "../../../assets/mentor13.webp";
import Img4 from "../../../assets/mentor14.webp";
import Img5 from "../../../assets/mentor15.webp";

const bagroundimage =
  "/bright-white-neon-sound-waves-seamless-motion-rad-2024-09-10-01-35-05-utc.mp4";

const MentorshipProgram = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <Navbar />
      <FixedSidebarButtons />

      {/* Heading */}
      <div className="py-6 md:pt-36 mb:pb-6  text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl 2xl:text-7xl font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Mentorship Program
        </motion.h2>
      </div>

      {/* Layout Container */}
      <div className="flex items-center justify-center py-6  w-[80%] mx-auto sm:w-full text-white">
        <div className="grid grid-cols-5 gap-[0.3rem] w-full sm:w-3/4">
          {/* Top Row */}
          {[
            MentoshipImg1,
            MentoshipImg3,
            MentoshipImg2,
            MentoshipImg4,
            Img5,
          ].map((image, index) => (
            <img
              key={`top-${index}`}
              src={image}
              alt={`Top Image ${index + 1}`}
              className="h-12 md:h-36 xl:h-[11rem] 2xl:h-[15rem]  bg-gray-200 grayscale hover:grayscale-0"
            />
          ))}

          {/* Left Column destop */}
          <div className="col-start-1 row-span-5 hidden sm:flex sm:flex-col space-y-[0.3rem]">
            {[Img3, Img4, Img2].map((image, index) => (
              <img
                key={`left-${index}`}
                src={image}
                alt={`Left Image ${index + 1}`}
                className="h-30 bg-gray-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>

          {/* Left Column mobile */}
          <div className="col-start-1 row-span-5 sm:hidden flex flex-col space-y-[0.3rem]">
            {[Img3, Img4, Img2, Img1].map((image, index) => (
              <img
                key={`left-${index}`}
                src={image}
                alt={`Left Image ${index + 1}`}
                className="h-30 bg-gray-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>

          {/* Central Content with Video Background */}
          <div className="relative col-span-3 flex flex-col items-center justify-center text-center p-6 md:p-12">
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative top-1/2 -translate-y-1/2 left-0 w-full h-full 3xl:h-[141%]  object-cover rounded-xl opacity-50"
            >
              <source src={bagroundimage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-[100%] sm:h-full lg:h-[119%] 2xl:h-[110%] 2.5xl:h-[122%] bg-black bg-opacity-50 rounded-xl"></div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute z-10 translate-y-1/2"
            >
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem]">
                Gain a better understanding of option trading
              </p>
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem] 2xl:mt-4">
                Trade alongside experienced mentors
              </p>
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem] 2xl:mt-4">
                Mentors will shape your trading psychology as needed
              </p>
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem]">
                Get daily counseling from mentors
              </p>
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem] 2xl:mt-4 bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text ">
                Access the trading lounge from 9 AM – 5 PM
              </p>
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem] 2xl:mt-4">
                Pre and Post trades evaluation
              </p>
              <p className="text-[0.5rem] sm:text-base  2xl:text-[1.3rem] 2xl:mt-4">
                Weekly trade journal analysis
              </p>
            </motion.div>

          </div>

          {/* Right Column destop view */}
          <div className="col-start-5 row-span-5 hidden sm:flex sm:flex-col space-y-[0.3rem]">
            {[Img1, MentoshipImg4, MentoshipImg2].map((image, index) => (
              <img
                key={`right-${index}`}
                src={image}
                alt={`Right Image ${index + 1}`}
                className="h-30 bg-gray-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>

          {/* Right Column mobile screen*/}
          <div className="col-start-5 row-span-5 sm:hidden flex flex-col space-y-[0.3rem]">
            {[Img1, MentoshipImg4, MentoshipImg2, Img3].map((image, index) => (
              <img
                key={`right-${index}`}
                src={image}
                alt={`Right Image ${index + 1}`}
                className="h-30 bg-gray-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>

      <ContactUsForm />
      <Footer />
    </div>
  );
};

export default MentorshipProgram;
