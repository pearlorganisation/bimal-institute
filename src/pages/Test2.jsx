import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PixelsWithPurpose() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <motion.h1
        style={{ y, opacity }}
        className="text-white text-6xl md:text-8xl font-bold text-center leading-tight"
      >
        Pixels
        <br />
        with Purpose
      </motion.h1>
    </section>
  );
}
