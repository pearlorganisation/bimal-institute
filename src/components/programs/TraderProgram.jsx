import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TimelineItem from "./programDetails/TimelineItem";
import Img1 from "../../assets/mentor11.webp";
import Img2 from "../../assets/mentor12.webp";
import Img3 from "../../assets/mentor13.webp";
import Img4 from "../../assets/mentor14.webp";
import Img5 from "../../assets/mentor15.webp";
import TraderTimelineItem from "./TraderTimelineItem";

const Video1 = "/Module1Market pe charcha.mp4";
const Video2 = "/Module2Chartneeti.mp4";
const Video3 = "/Module3Smartneeti.mp4";
const Video4 = "/6.mp4";
const Video5 = "/5.mp4";
const Video6 = "/Module6Option Mantra.mp4";

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
          <li>Swing Strategies By Manish Bimal</li>
          <li>Fundamental Analysis</li>
          <li>Artificial Intelligence</li>
          <li>Portfolio Creation & Management</li>
          <li>Sector Rotation & Theme Based Trading</li>
          <li>Smart Screeners</li>
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
          <li>Intraday Strategies by Manish Bimal</li>
          <li>Risk Management</li>
          <li>Intraday Trading Psychology</li>
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
  const sectionRefs = useRef([]);

  const timelineContainerRef = useRef(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;

      const timelineTop = timelineContainerRef.current.offsetTop;
      const timelineHeight = timelineContainerRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight / 2;

      const relativeScroll = scrollY - timelineTop;
      const percentage = (relativeScroll / timelineHeight) * 100;

      setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, timelineData.length);
  }, [timelineData.length]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, timelineData.length);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timelineData.length]);

  return (
    <div div className="w-[80%] 3xl:w-[75%] mx-auto">
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

      {/* SHUBHAM CODE*/}

      <div className="min-h-screen hidden md:block text-white p-4">
        <div className="max-w-4xl mx-auto relative" ref={timelineContainerRef}>
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700">
            {/* Scroll-based Fill */}
            <div
              className="absolute top-0 left-0 w-full transition-all duration-300 ease-in-out"
              // style={{
              //   height: `${scrollPercentage}%`,
              //   background: `linear-gradient(to bottom, blue ${scrollPercentage}%)`,
              // }}
              style={{
                height: `${scrollPercentage}%`,
                background: `linear-gradient(to bottom, #0980FF ${scrollPercentage}%)`,
              }}
            ></div>
          </div>

          {/* Top Circular Marker */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"></div>

          {/* Timeline Items */}
          <div className="relative z-10">
            <div className="h-[50px]"></div>
            {timelineData.map((item, index) => (
              <TraderTimelineItem
                key={item.id}
                item={item}
                index={index}
                sectionRefs={sectionRefs}
              />
            ))}
            {/* <div className="h-[200px]"></div> */}
          </div>

          {/* Bottom Circular Marker */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"></div>
        </div>
      </div>

      {/* ////monbile view----------------------- ////monbile */}
      <main class="flex sm:hidden  text-white relative pt-8 pb-8  sm:py-16 flex-wrap">
        <div class="sidebar-1 w-full md:w-6/12 border-r-0 md:border-r-2 border-white relative flex flex-col">
          <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[-1rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>

          <div class="card flex-1 flex flex-col  pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              class="   rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3 xl:pt-8 xl:py-28 xl:px h-[182px] md:h-[230px] lg:h-[215px] "
              style={{
                fontFamily: "'Quicksand', sans-serif",
                backgroundColor: "rgba(72, 72, 72, 0.2)", // Background only 10% visible
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text- md:text-[2rem] lg:text-[2.3rem]  font-semibold opacity-40"
              >
                {timelineData[0].title}
              </motion.h1>
              {/* Hindi Ti
              tle */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.3rem] font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                {timelineData[0].hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[2rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[0].subTitle}
              </motion.h2>
            </motion.div>
            <p class=" pt-2  text-sm md:text-base lg:text-lg font-Afacad">
              {timelineData[0].content}
            </p>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <video
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
            >
              <source src={timelineData[0].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 flex flex-col  pt-5 md:pt-40 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div
              class="   rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3  h-[182px] md:h-[230px] lg:h-[215px] "
              style={{
                backgroundColor: "rgba(72, 72, 72, 0.2)",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text- md:text-[2rem] lg:text-[2.3rem]  font-semibold opacity-40"
              >
                {timelineData[1].title}
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.3rem]  font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                {timelineData[1].hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[2rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[1].subTitle}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              {timelineData[1].content}
            </ul>
          </motion.div>

          {/* video components module 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <video
              // ref={(el) => (videosRef.current[0] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={timelineData[1].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* module components  smartneeti 3*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 flex flex-col  pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div
              class=" rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3  h-[182px] md:h-[230px] lg:h-[215px] "
              style={{
                fontFamily: "'Quicksand', sans-serif",
                backgroundColor: "rgba(72, 72, 72, 0.2)", // Background only 10% visible
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text- md:text-[2rem] lg:text-[2.3rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[2].title}
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.3rem]  font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                {timelineData[2].hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[2rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[2].subTitle}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              {timelineData[2].content}
            </ul>
          </motion.div>

          {/* video components module 3 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-40 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <video
              // ref={(el) => (videosRef.current[4] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={timelineData[2].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>

        {/*  rightside ..<!-- Main Content --> */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          class="main-container-1 w-full md:w-6/12 flex flex-col"
        >
          {/* module components  gurugyan 4*/}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-40 pb-5 md:pb-24 px-5 md:px-10">
            <div
              class="   rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3 h-[182px] md:h-[230px] lg:h-[215px] "
              style={{
                backgroundColor: "rgba(72, 72, 72, 0.2)", // Background only 10% visible
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text- md:text-[2rem] lg:text-[2.3rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[3].title}
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.3rem]  font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                {timelineData[3].hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[2rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[3].subTitle}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              {timelineData[3].content}
            </ul>
          </div>

          {/* video components  module 4*/}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <video
              // ref={(el) => (videosRef.current[1] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={timelineData[3].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* module components sada profitable 5 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 flex flex-col  pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div
              class="   rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3 h-[182px] md:h-[230px] lg:h-[215px] "
              style={{
                backgroundColor: "rgba(72, 72, 72, 0.2)", // Background only 10% visible
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text- md:text-[2rem] lg:text-[2.3rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[4].title}
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.3rem]  font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                {timelineData[4].hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[2rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[4].subTitle}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              {timelineData[4].content}
            </ul>
          </motion.div>

          {/* video components module 5 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-40 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <video
              // ref={(el) => (videosRef.current[5] = el)}
              controls
              className="w-full md:w-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={timelineData[4].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* module components  optionMantra 6*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 flex flex-col  pt-5 md:pt-40 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div
              class="   rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3  h-[182px] md:h-[230px] lg:h-[215px] "
              style={{
                backgroundColor: "rgba(72, 72, 72, 0.2)", // Background only 10% visible
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text- md:text-[2rem] lg:text-[2.3rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {}
                {timelineData[5].title}
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.3rem]  font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                {timelineData[5].hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[2rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {timelineData[5].subTitle}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              {timelineData[5].content}
            </ul>
          </motion.div>

          {/* video components  module 6*/}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <video
              // ref={(el) => (videosRef.current[2] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] "
            >
              <source src={timelineData[5].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default TraderProgram;
