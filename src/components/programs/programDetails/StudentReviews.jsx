import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";

const StudentReviews = () => {
  const videos = [
    "https://youtu.be/Le38moznWlc?si=sy0ecaXmnWEbl0v5",
    "https://youtu.be/3eZn0DunGeY?si=zZC7PQe10PaS4dOL",
    "https://youtu.be/RbUv_5_oBvk?si=uroDuFzZH_a3FmMN",
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 15000); // Auto-switch video every 15 seconds

    return () => clearInterval(timer);
  }, [videos.length]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      ref={componentRef}
      className="flex flex-col items-center w-[80%] mx-auto text-white py-24"
    >
      <motion.h1
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl md:text-5xl font-semibold mb-8 bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        {"Student Reviews".split("").map((char, index) => (
          <motion.span key={index} variants={textVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Main Video Player */}
        <div className="relative w-full lg:w-[650px] h-[270px] sm:h-[300px] lg:h-[391px] bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
          <ReactPlayer
            url={videos[currentVideo]}
            playing={isVisible} // Only play when component is visible
            controls
            width="100%"
            height="100%"
          />
        </div>

        {/* Video Thumbnails */}
        <div className="flex lg:flex-col gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`relative w-[100px] h-[70px] lg:w-[184px] lg:h-[121px] bg-gray-800 rounded-3xl overflow-hidden cursor-pointer ${
                index === currentVideo ? "ring-4 ring-white" : ""
              }`}
              onClick={() => setCurrentVideo(index)}
            >
              <ReactPlayer url={video} width="100%" height="100%" light />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 ${
                  index === currentVideo ? "hidden" : "block"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
