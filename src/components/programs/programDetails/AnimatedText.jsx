import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const containerRef = useRef(null);
  const learningRef = useRef(null);
  const strikeThroughRef = useRef(null);
  const earningRef = useRef(null);

  useEffect(() => {
    const learningEl = learningRef.current;
    const strikeEl = strikeThroughRef.current;
    const earningEl = earningRef.current;
    const containerEl = containerRef.current;

    if (!learningEl || !strikeEl || !earningEl || !containerEl) return;

    // Set initial states using GSAP for elements animated by GSAP
    gsap.set(earningEl, { opacity: 0, y: 50 }); // Start earning text hidden and below
    gsap.set(strikeEl, { scaleX: 0, transformOrigin: "left center" }); // Strikethrough starts with 0 width (from left)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerEl,
        start: "center center", // Trigger when the center of the container hits the center of the viewport
        end: "+=300", // End the animation after scrolling 300px past the start
        scrub: 1, // Smoothly scrubs the animation along with scroll (1 second lag)
        markers: true, // Uncomment for debugging ScrollTrigger positions
        pin: true, // Uncomment if you want the container to be pinned during the animation
      },
    });

    // Add animations to the timeline
    tl
      // 1. Animate strikethrough
      .to(strikeEl, {
        scaleX: 1, // Animate width from 0 to 100%
        duration: 0.5,
        ease: "power2.inOut",
      })
      // 2. Animate "EARNING" in and "LEARNING" out
      //    These can happen somewhat concurrently or sequentially with the strikethrough
      .to(
        earningEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3" // Start this animation 0.3s before the previous one finishes
      )
      .to(
        learningEl,
        {
          opacity: 0, // Fade out "LEARNING"
          duration: 0.4,
          ease: "power2.in",
        },
        "<+0.1" // Start this 0.1s after the earning animation starts
      );

    // Cleanup function to kill ScrollTrigger and timeline instances on unmount
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerEl) {
          trigger.kill();
        }
      });
    };
  }, []);

  const commonH1Class =
    "text-[clamp(30px,8vw,80px)] sm:text-[clamp(50px,10vw,120px)] font-bold uppercase tracking-wide";
  const textFillTransparent = {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "'Quicksand', sans-serif",
  };

  return (
    <div
      ref={containerRef}
      className="py-16 sm:py-36 flex items-center justify-center min-h-[80vh] sm:min-h-screen relative"
    >
      <div className="relative text-center w-[80%] max-w-4xl h-[1em]" style={{ fontSize: "clamp(30px,8vw,80px)" }}>
        {/* LEARNING (will be faded out) */}
        <h1
          ref={learningRef}
          style={{
            ...textFillTransparent,
            // Initial opacity is 1, GSAP will fade it out
          }}
          className={`${commonH1Class} absolute inset-0 bg-white`}
        >
          LEARNING
        </h1>

        {/* Strikethrough Line (initially hidden, animated by GSAP) */}
        {/* Positioned over the "LEARNING" text */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            ref={strikeThroughRef}
            className="block h-[4px] sm:h-[6px] md:h-[8px] bg-white" // Strikethrough color
            // Initial scaleX is 0 (set by GSAP), transformOrigin is left
          ></span>
        </div>

        {/* EARNING (initially hidden, animated in by GSAP) */}
        <h1
          ref={earningRef}
          style={{
            ...textFillTransparent,
            // Initial opacity 0 and y: 50 set by GSAP
          }}
          className={`${commonH1Class} absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500`}
        >
          EARNING
        </h1>
      </div>
    </div>
  );
};

export default AnimatedText;