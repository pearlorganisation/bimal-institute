import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PixelsWithPurpose() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const img = imgRef.current;
    const section = sectionRef.current;

    if (img && section) {
      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "50% bottom",
            end: "bottom bottom",
            scrub: 5, // smoother scrub
            markers: true, // Enable for debugging
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.img
        ref={imgRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/polkaBg.webp"
        alt="Polka background"
      />

      {/* Text on top */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-white text-6xl md:text-8xl font-bold text-center leading-tight z-10"
      >
        Creating Traders
        <br />
        Since 2016
      </motion.h1>
    </section>
  );
}
