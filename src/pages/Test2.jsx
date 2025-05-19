import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PixelsWithPurpose() {
  const ref = useRef(null);
  const imgRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when slightly in view


  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(el, { scale: 0 }, {
      scale: 3, duration: 1, scrollTrigger: {
        trigger: el
      }
    })
  }, [])


  // let tl = gsap.timeline({
  //   // yes, we can add it to an entire timeline!
  //   scrollTrigger: {
  //     trigger: '.container',
  //     pin: true, // pin the trigger element while active
  //     start: 'top top', // when the top of the trigger hits the top of the viewport
  //     end: '+=500', // end after scrolling 500px beyond the start
  //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //     snap: {
  //       snapTo: 'labels', // snap to the closest label in the timeline
  //       duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //       delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //       ease: 'power1.inOut' // the ease of the snap animation ("power3" by default)
  //     }
  //   }
  // });



  return (
    <section
      ref={ref}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
    >


      <motion.img
        ref={imgRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute"
        src="/polkaBg.webp"
      />



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
