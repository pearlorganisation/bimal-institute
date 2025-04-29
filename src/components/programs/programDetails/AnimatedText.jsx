import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedText = () => {
  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState({
    learning: [30, 100], // Trigger earlier on mobile
    strikeThrough: [90, 130, 220],
    earning: [200, 300],
  });

  //   // Dynamically adjust animation ranges for mobile
  //   useEffect(() => {
  //     if (window.innerWidth < 640) {
  //       setScrollRanges({
  //         learning: [30, 100], // Trigger earlier on mobile
  //         strikeThrough: [120, 200, 300],
  //         earning: [250, 350],
  //       });
  //     }
  //   }, []);

  const learningOpacity = useTransform(scrollY, scrollRanges.learning, [1, 0]);
  const strikeThroughOpacity = useTransform(
    scrollY,
    scrollRanges.strikeThrough,
    [0, 1, 0]
  );
  const earningOpacity = useTransform(scrollY, scrollRanges.earning, [0, 1]);
  const earningY = useTransform(scrollY, scrollRanges.earning, [50, 0]);

  return (
    <div className="py-16 sm:py-36 flex sm:hidden items-center justify-center min-h-[50vh]">
      <div className="relative text-center w-[80%]">
        {/* LEARNING */}
        <motion.h1
          style={{
            opacity: learningOpacity,
            fontFamily: "'Quicksand', sans-serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="absolute inset-0 text-white text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide bg-white"
        >
          LEARNING
        </motion.h1>

        {/* LEARNING (Strikethrough) */}
        <motion.h1
          style={{
            opacity: strikeThroughOpacity,
            y: strikeThroughOpacity,
            fontFamily: "'Quicksand', sans-serif",
            background: "linear-gradient(to top, #FFFFFF, #1E1E1E 50%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="absolute inset-0 text-gray-500 text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide"
        >
          LEARNING
          <motion.span
            style={{ opacity: strikeThroughOpacity }}
            className="absolute inset-0 flex items-center justify-center sm:mt-7"
          >
            <span
              className="h-[4px] sm:h-[10px] w-[76%]"
              style={{
                background: "linear-gradient(to top, #2F2F2F, #2F2F2F 30%)",
              }}
            ></span>
          </motion.span>
        </motion.h1>

        {/* FINAL "EARNING" */}
        <motion.h1
          style={{
            opacity: earningOpacity,
            y: earningY,
            fontFamily: "'Quicksand', sans-serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className=" text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide bg-white"
        >
          EARNING
        </motion.h1>
      </div>
    </div>
  );
};

export default AnimatedText;
