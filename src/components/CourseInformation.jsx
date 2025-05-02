import React, { useEffect } from "react";
import micman from "../assets/cropimg.png"; // Background image
import "@google/model-viewer";
import { motion } from "framer-motion";

const CourseInformation = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="relative py-8  min-h-screen bg-black text-white "
      style={{
        backgroundImage: `url(${micman})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] 2xl:w-[85%] 3xl:w-[80%] mx-auto flex flex-col items-center sm:items-start justify-center lg:flex-row lg:justify-between px-4 md:px-8 lg:px-16  3xl:px-20 2xl:px-10 relative min-h-screen gap-12">
        {/* Left Content */}
        <div className="w-full max-w-[95%] items-center md:max-w-[40%] 2xl:max-w-[30%] pb-6 sm:mt-40 2xl:mt-36 ">
          <Section
            title="Market Pe Charcha"
            description="Gain a strong foundation in trading by learning essential market terminologies, trading calculations, and live market tracking, along with an introduction to Indian (Equity / Commodity) and Other markets (Forex / Crypto)."
            align="left"
          />

          <Section
            title="Smartneeti"
            description="We dive deep into Price Action and Smart Money Concepts (SMC)—the strategies used by professional traders and institutions. You'll learn to analyze pure price movements without relying on indicators, identify institutional footprints, and anticipate market moves with precision."
            align="left"
          />

          <Section
            title="Guru Gyan"
            description="Learn expert swing trading strategies, risk management, and portfolio building to make informed entry, stop-loss, and target decisions for long-term wealth creation with Manish Bimal."
            align="left"
          />
        </div>

        {/* 3D Book Model */}
        <div className="sm:sticky top-[45%] 2xl:mt-8 transform -translate-y-[15%] sm:-translate-y-[45%] 2xl:-translate-y-[9%] 3xl:-translate-y-[15%] 3xl:mt-36 z-10 sm:mt-80">
          <model-viewer
            src="/book.glb"
            alt="3D Book"
            ar
            auto-rotate
            camera-controls
            disable-zoom
            disable-pan
            interaction-prompt="none"
            loading="eager"
            poster="/book.jpg"
            rotation-per-second="50deg"
            className="w-[250px] h-[320px] md:w-[280px] md:h-[380px] lg:w-[340px] lg:h-[450px]  2xl:w-[380px] 2xl:h-[500px] 3xl:h-[580px] 3xl:w-[430px]"
          ></model-viewer>
        </div>

        {/* Right Content */}
        <div className="w-full max-w-[95%] items-center md:max-w-[40%] 2xl:max-w-[30%]  sm:pt-12 md:mt-[29rem] 2xl:mt-[30rem] ">
          <Section
            title="Chartneeti"
            description="Master the art of technical analysis by learning chart patterns, trends, support & resistance, and key indicators, with expert insights from Manish Bimal on candlesticks."
            align="right"
          />
          <Section
            title="Trader Hai Hum"
            description="How to capitalize on short-term market movements, identify high-probability trade setups, and manage risk effectively. From reading market trends to executing quick entries and exits, we'll cover essential strategies, including scalping, momentum trading, and breakout techniques."
            align="right"
          />
          <Section
            title="Option Mantra"
            description="Delve into high-level market insights to refine your option trading approach. You'll learn to analyze market sentiment, track institutional activity, and manage risk efficiently. With a focus on strategic positioning and volatility-based adjustments, this module will help you enhance trade execution, optimize capital usage, and improve overall profitability in option trading."
            align="right"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, description, align = "left" }) => {
  return (
    <div className={`text-white pb-16  md:pb-80 2xl:pb-[22rem] text-${align}`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text text-3xl md:text-5xl   2xl:text-[4rem] 2xl:font-bold font-semibold"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        {title}
      </motion.h2>

      <p
        className="font-medium text-[14px] md:text-[18px] xl:text-[19px]  2xl:text-[21px] 2xl:font-semibold  leading-[1.6] text-gray-400 opacity-80 mt-2"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
};

export default CourseInformation;
