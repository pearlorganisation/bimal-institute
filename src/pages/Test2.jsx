import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PixelsWithPurpose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when slightly in view

  return (
    <section
      ref={ref}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >


      <motion.img
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full blur-[2px]"
        src="/halftone-bg.svg"
      />



      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-white text-6xl md:text-8xl font-bold text-center leading-tight z-1"
      >
        Creating Traders
        <br />
        Since 2016
      </motion.h1>
    </section>
  );
}
