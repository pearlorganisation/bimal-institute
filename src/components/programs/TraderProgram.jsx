import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Img1 from "../../assets/mentor11.webp";
import Img2 from "../../assets/mentor12.webp";
import Img3 from "../../assets/mentor13.webp";
import Img4 from "../../assets/mentor14.webp";
import Img5 from "../../assets/mentor15.webp";
import TraderTimelineItem from "./TraderTimelineItem"; // Ensure this component is set up correctly

const Video1 = "/Module1Market pe charcha.mp4";
const Video2 = "/Module2Chartneeti.mp4";
const Video3 = "/Module3Smartneeti.mp4";
const Video4 = "/6.mp4";
const Video5 = "/5.mp4";
const Video6 = "/Module6Option Mantra.mp4";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TraderProgram = () => {
  const timelineData = [
    {
      id: 1,
      title: "Module-1",
      hindiTitle: "मार्केट पे चर्चा",
      subTitle: "Market pe Charcha",
      video: Video1,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Understanding Basic Terminologies</li>
          <ul className="list-item pl-5 space-y-2">
            <li> a. Bid Ask </li>
            <li> b. Volume </li>
            <li> c. Quantity </li>
            <li> d. Turnover </li>
            <li> e. Intraday Vs Delivery </li>
            <li> f. Stop Loss </li>
            <li> g. Bull Vs Bear </li>
            <li> h. Circuits </li>
            <li> i. OHLC </li>
          </ul>
          <li>
            Calculations for Intraday /Margin /Delivery Trading Live Market
            Tracking
          </li>
          <li>
            Introductions to Futures & Its Calculations (Equity / Commodity)
          </li>
          <li>Chart Patterns</li>
          <li>Introduction to Crypto & Forex</li>
        </ul>
      ),
      image: Img1,
      imageLeft: false,
    },
    {
      id: 2,
      hindiTitle: "चार्टनीति",
      subTitle: "Chartneeti",
      title: "Module-2",
      video: Video2,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Charts & Trends</li>
          <li>Support & Resistance</li>
          <li>Decoding Candlesticks</li>
          <li>Chart Patterns</li>
          <li>Indicators</li>
        </ul>
      ),
      image: Img2,
      imageLeft: true,
    },
    {
      id: 3,
      title: "Module-3",
      hindiTitle: "स्मार्टनीति",
      subTitle: "Smartneeti",
      video: Video3,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Time Frame Selection Using TWR</li>
          <li>Ripple Effect : Retailers VS Smart Retailers VS FII/DII</li>
          <li>How to Deal With Breakouts</li>
          <li>Break Of Structure & Change Of Character</li>

          <li>Order Blocks (Demand & Supply Zones)</li>
          <li>Point Of Interest & Imbalances</li>
          <li>Fair Value Gaps & Liquidity Sweeps</li>
          <li>Understanding Price Action</li>

          <li>Trend line With Smoothing</li>
          <li>Creating Bhramastra (SMC + Price Action)</li>
        </ul>
      ),
      image: Img3,
      imageLeft: false,
    },
    {
      id: 4,
      title: "Module-4",
      hindiTitle: "ट्रेडर हैं हम",
      video: Video5,
      subTitle: "Trader Hai Hum",
      content: (

        <ul className="list-disc pl-5 space-y-2">
          <li>Intraday Strategies by Manish Bimal</li>
          <li>Risk Management</li>
          <li>Intraday Trading Psychology</li>
        </ul>
      ),
      image: Img5,
      imageLeft: true,
    },
    {
      id: 5,
      title: "Module-5",
      hindiTitle: "गुरुज्ञान",
      subTitle: "Guru Gyan",
      video: Video4,
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Swing Strategies By Manish Bimal</li>
          <li>Fundamental Analysis</li>
          <li>Artificial Intelligence</li>
          <li>Portfolio Creation & Management</li>
          <li>Sector Rotation & Theme Based Trading</li>
          <li>Smart Screeners</li>
        </ul>
      ),
      image: Img4,
      imageLeft: false,
    },

    {
      id: 6,
      title: "Module-6",
      hindiTitle: "ऑप्शन मंत्र",
      video: Video6,
      subTitle: "Option Mantra",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Option Chain Analysis</li>
          <li>OI Built Up Analysis</li>
          <li>Max Pain Analysis</li>
          <li>Option Greeks</li>
          <li>Tracking FII / DII Derivative Statistics</li>
          <li>Option Buyer VS Option Writer</li>
          <li>Margin Reduction Using Hedging</li>
          <li>Role of India VIX & Implied Volatility While Writing</li>
          <li>Iron Condor Strategy & Its Adjustments</li>
          <li>YNJ Strategy (Spread)</li>
        </ul>
      ),
      image: Img5,
      imageLeft: true,
    },
  ];

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]); // To be populated by TraderTimelineItem children
  const timelineContainerRef = useRef(null); // For the desktop timeline container
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // GSAP ScrollTrigger for scrollPercentage
  useEffect(() => {
    const container = timelineContainerRef.current;

    // GSAP Context for scoped animations and easier cleanup
    const ctx = gsap.context(() => {
      // Use matchMedia for responsive ScrollTriggers
      ScrollTrigger.matchMedia({
        // Desktop setup (matches Tailwind's 'md' breakpoint, typically 768px)
        "(min-width: 768px)": function() {
          if (container) {
            ScrollTrigger.create({
              trigger: container,
              start: "top center", // When the top of the container hits the center of the viewport
              end: "bottom center", // When the bottom of the container hits the center of the viewport
              scrub: 4, // Smoothly update on scroll
              // markers: process.env.NODE_ENV === "development", // Uncomment for debugging
              onUpdate: (self) => {
                setScrollPercentage(self.progress * 100);
              },
              onLeaveBack: (self) => { // When scrolling up past the start
                if (self.progress === 0) setScrollPercentage(0);
              },
              onEnter: (self) => { // When scrolling down past the end
                if (self.progress === 1) setScrollPercentage(100);
              }
            });
            // console.log("GSAP ScrollTrigger for desktop timeline INITIALIZED");
          }
        },
        // Mobile setup
        "(max-width: 767px)": function() {
          // On mobile, the desktop timeline is hidden.
          // Ensure scrollPercentage is 0 and no ScrollTrigger is active for it.
          setScrollPercentage(0);
          // console.log("GSAP ScrollTrigger: Mobile view, scrollPercentage set to 0");
        }
      });
    }, timelineContainerRef); // Scope the context to the container if needed, or use document

    return () => {
      ctx.revert(); // Cleanup GSAP animations and ScrollTriggers
      // console.log("GSAP Context REVERTED for scrollPercentage");
    };
  }, []); // Empty dependency array: runs once on mount and cleans up on unmount

    const handleActiveSectionScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let newActiveSection = -1;

    sectionRefs.current.forEach((section, index) => {
      if (!section || section.offsetParent === null) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        sectionHeight > 0 &&
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        newActiveSection = index;
      }
    });

    if (newActiveSection !== -1 && newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [activeSection]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, timelineData.length);

    if (timelineData.length > 0) {
      // Initial call after a slight delay to ensure layout
      const timer = setTimeout(() => handleActiveSectionScroll(), 100);
      window.addEventListener("scroll", handleActiveSectionScroll);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleActiveSectionScroll);
      };
    }
  }, [timelineData.length, handleActiveSectionScroll]);


  // Effect for loading Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&family=Hind:wght@600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);


  return (
    <div className="w-[80%] 3xl:w-[75%] mx-auto">
      <div className="py-6 md:pt-32 2xl:pt-40 pb-6 flex justify-center items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Be A Trader Program 2.0
        </motion.h2>
      </div>

      {/* DESKTOP TIMELINE */}
      <div className="min-h-screen hidden md:block text-white p-4">
        <div className="max-w-4xl mx-auto relative" ref={timelineContainerRef}>
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700">
            {/* Scroll-based Fill */}
            <div
              className="absolute top-0 left-0 w-full bg-[#0980FF] !transition-all !duration-500" // No transition here, GSAP handles smooth updates via 'scrub'
              style={{
                height: `${scrollPercentage}%`,
              }}
            ></div>
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"></div>
          <div className="relative z-10">
            <div className="h-[50px]"></div>
            {timelineData.map((item, index) => (
              <TraderTimelineItem
                key={item.id}
                item={item}
                index={index}
                // Pass sectionRefs and index to allow TraderTimelineItem to set its ref
                sectionRefs={sectionRefs}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"></div>
        </div>
      </div>

      {/* MOBILE VIEW - Mapped for maintainability */}
      <main className="flex md:hidden text-white relative pt-8 pb-8 sm:py-16 flex-col">
        {timelineData.map((item) => (
          <div key={item.id} className="w-full">
            {/* Module Info Card */}
            <div className="card flex-1 flex flex-col pt-5 pb-5 px-5">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="rounded-[1.8rem] p-8 mb-4"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  backgroundColor: "rgba(72, 72, 72, 0.2)",
                }}
              >
                <motion.h1 /* ... title ... */ className="text-md md:text-[2rem] lg:text-[2.3rem] font-semibold opacity-40">
                  {item.title}
                </motion.h1>
                <motion.h2 /* ... hindi title ... */ className="text-lg md:text-[2rem] lg:text-[2.3rem] font-semibold pt-3" style={{ fontFamily: "'Hind', serif", fontWeight: "600" }}>
                  {item.hindiTitle}
                </motion.h2>
                <motion.h2 /* ... subtitle ... */ className="text-lg md:text-[1.7rem] lg:text-[2rem] font-medium opacity-25 text-gray-300 pt-3">
                  {item.subTitle}
                </motion.h2>
              </motion.div>
              {/* Module Content */}
              <div className="pt-2 text-sm md:text-base lg:text-lg mb-4" style={{ fontFamily: "'Afacad', sans-serif" }}>
                {item.content}
              </div>
            </div>
            {/* Video Card */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="card flex-1 pt-5 pb-5 px-5 mb-8"
            >
              <video controls className="w-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white">
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default TraderProgram;