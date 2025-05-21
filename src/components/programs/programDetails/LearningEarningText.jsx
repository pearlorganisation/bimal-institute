import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LearningEarningText = () => {
  const controls = useAnimation();
  // ref for Intersection Observer to trigger initial "visible" state
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
    triggerOnce: true, // Animation runs only once when it enters the viewport
  });

  useEffect(() => {
    if (inView) {
      // When in view, start the animation to the "visible" state
      // The "hover" state will then be handled by whileHover on the parent motion.div
      controls.start("visible");
    }
    // No "else" needed if triggerOnce is true and you don't want to reset
  }, [inView, controls]);

  // Variants for the parent container to control children on hover
  const containerVariants = {
    initial: {
      // Nothing specific needed here for the parent initially,
      // children will handle their own 'hidden' state
    },
    visible: {
      // This state is achieved when 'inView' becomes true
      // Children will transition to their 'visible' or 'initial' states
    },
    hover: {
      // This state will be applied to children when the parent is hovered
    },
  };

  const learningTextVariants = {
    hidden: { opacity: 1 }, // Start hidden before inView
    visible: { opacity: 0.4, transition: { duration: 0.4 } }, // Fade in when inView
    inView: { opacity: 0.4, transition: { duration: 0.4 } }, // Fade partially on parent hover
  };

  const strikeThroughLineVariants = {
    hidden: { scaleX: 0, originX: 0 }, // Start scaled out, originX for direction
    visible: { scaleX: 0, originX: 0, transition: { duration: 0.4 } }, // Line remains hidden initially after view
    inView: { scaleX: 1, transition: { duration: 0.4, delay: 0.1 } }, // Scale in on parent hover
  };

  const earningTextVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
    visible: { opacity: 1, y: 20, transition: { duration: 0.4 } }, // Remain hidden initially after view
    inView: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }, // Fade in and move up on parent hover
  };

  return (
    <motion.div
      ref={ref} // Assign the ref for Intersection Observer here
      className="relative text-center w-[80%] cursor-pointer mx-auto my-20" // Added mx-auto and my-20 for spacing
      variants={containerVariants} // Not strictly necessary if children define all states
      initial="hidden" // Children will use their own 'hidden' state
      animate={controls} // Controls will set children to 'visible' when inView
      whileHover="hover" // Trigger 'hover' state on children when this div is hovered
    >
      {/* LEARNING Text */}
      <motion.h2
        variants={learningTextVariants}
        // initial & animate are inherited or can be explicitly set if different from parent
        // transition prop here is for its own state changes (hidden -> visible, visible -> hover)
        className="text-white text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        LEARNING
      </motion.h2>

      {/* Strike-through line */}
      <motion.span
        variants={strikeThroughLineVariants}
        className="absolute top-1/2 left-0 h-[4px] sm:h-[10px] w-full bg-white" // Changed to full width and left-0
        style={{ transform: "translateY(-50%)" }} // Vertical centering
      />

      {/* EARNING Text */}
      <motion.h2
        variants={earningTextVariants}
        className="absolute top-full inset-0 flex items-center justify-center text-white text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide" // Used flex for centering
        style={{
          fontFamily: "'Quicksand', sans-serif",
          // transform: "translateY(-50%)", // Not needed if using flex on parent
        }}
      >
        EARNING
      </motion.h2>
    </motion.div>
  );
};

export default LearningEarningText;