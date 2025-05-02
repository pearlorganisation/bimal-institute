import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { motion } from "framer-motion";

const VideoComponent = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null); // No video plays initially
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const componentRef = useRef(null);

  const videoData = [
    {
      id: 1,
      url: "https://youtu.be/uKwIQNqplDc?si=oGQlzppXamomuVCj",
      label: "Student",
    },
    {
      id: 2,
      url: "https://youtu.be/AG61e5A_ygQ?si=6-sEd7pB4uMtTjGF",
      label: "Student",
    },
    {
      id: 3,
      url: "https://youtu.be/Zy18zaHFufw?feature=sharedhttps://youtu.be/Zy18zaHFufw?si=nlukrlMyUC3Av7iy",
      label: "Student",
    },
    {
      id: 4,
      url: "https://youtu.be/hcbx7tKwCo0?si=fkttiDECf5XY3luh",
      label: "Student",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsComponentVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setPlayingVideoId(null); // Pause videos when out of view
        }
      },
      { threshold: 0.5 }
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

  const handleVideoClick = (id) => {
    setPlayingVideoId(id === playingVideoId ? null : id); // Toggle play/pause
  };

  return (
    <div
      ref={componentRef}
      className="text-white py-10 w-[80%] 3xl:w-[75%] mx-auto"
    >
      <div className="bg-[#030303] text-center mb-10 rounded-3xl">
        {/* <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-5xl py-12"
        >
          Chronicles of BI
        </motion.h2> */}

        <div className="text-center py-8 lg:py-12">
          <div className="flex justify-center items-center text-left">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl lg:text-6xl 2xl:text-[4.2rem] font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              Chronicles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-gray-300 text-left text-xs sm:text-sm md:text-lg  2xl:text-[1.3rem] items-end  mt-[0.5rem] xl:mt-[1rem] 2xl:mt-[1.3rem] pl-3 font-medium tracking-widest"
              style={{
                fontFamily: "'Merriweather', serif",
              }}
            >
              of BI
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[90%] xl:pb-4 mx-auto">
          {videoData.map((video) => (
            <div
              key={video.id}
              className="flex flex-col items-center overflow-hidden"
            >
              <div className="w-full aspect-[2/3] rounded-3xl border border-white overflow-hidden">
                <ReactPlayer
                  url={video.url}
                  playing={playingVideoId === video.id}
                  controls
                  width="100%"
                  height="100%"
                  light={true} // Show thumbnail first
                  onClickPreview={() => handleVideoClick(video.id)} // Click to play
                />
              </div>
              <p className="bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text my-2 3xl:my-4 text-lg xl:text-[1.7rem] 3xl:text-[1.9rem] xl:font-medium opacity-45">
                {video.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
