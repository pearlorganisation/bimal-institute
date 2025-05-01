import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const ProgramDesign = () => {
  const Video1 = "/MentorshipProgram.mp4";
  const Video2 = "/MembershipProgram.mp4";
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-[90%] md:w-[82%] 2xl:w-[75%] mx-auto">
      {/* Mentorship Program Section */}
      <div ref={videoRef} className="mb-8 xl:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl 2xl:text-7xl text-center font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Mentorship Program
        </motion.h2>
      </div>

      <div className="text-white flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-6 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="p-4 md:p-6 lg:p-8 2xl:p-10 rounded-3xl shadow-lg"
            style={{ backgroundColor: "rgba(72, 72, 72, 0.2)" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why You Need Mentorship?
            </h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
              This program is the backbone of the "Be a Trader 2.0"
              initiative, as it introduces aspiring traders to the market
              under the guidance of experienced mentors. Mentors provide
              hands-on support during trading, ensuring that every doubt is
              addressed and resolved. The essence of mentorship lies in
              trading under the supervision of experienced traders. Bimal
              Institute boasts a team of highly experienced mentors — the
              largest in India.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-[250px] md:h-[300px] lg:h-[350px] 2xl:h-[400px] rounded-3xl overflow-hidden"
          >
            <ReactPlayer
              url={Video1}
              width="100%"
              height="100%"
              playing={isVisible}
              controls
            />
          </motion.div>
        </div>
      </div>

      {/* Membership Program Section */}
      <div className="pt-16">
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-5xl 2xl:text-7xl text-center font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Membership Program
          </motion.h2>
        </div>

        <div className="text-white flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-6 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="p-4 md:p-6 lg:p-8 2xl:p-10 rounded-3xl shadow-lg max-w-full overflow-hidden"
              style={{ backgroundColor: "rgba(72, 72, 72, 0.2)" }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why You Need Membership?
              </h2>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">

                This program allows students to extend their access to our trading
                lounges for an additional month. Members receive direct training
                and personalized guidance from Mr. Manish Bimal. Under the
                membership program, we focus on identifying the right trading
                style for each student and developing the appropriate mindset to
                succeed.

              </p>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-[250px] md:h-[300px] lg:h-[350px] 2xl:h-[400px] rounded-3xl overflow-hidden"
            >
              <ReactPlayer
                url={Video2}
                width="100%"
                height="100%"
                playing={isVisible}
                controls
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDesign;
