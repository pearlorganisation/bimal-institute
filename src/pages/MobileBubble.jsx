import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

const elements = [
  "Investment",
  // "Volume Analysis",
  // "Global Markets",
  "Sector Analysis",
  // "Peer Analysis",
  // "Candlesticks",
  // "Balance Sheet Analysis",
  // "PnL Analysis",
  // "Trading Journal Analysis",
  // "Moving Averages",
  // "Result Analysis",
  "Forex",
  "Crypto",
  // "Equities",
  // "Ipo",
  // "Live Trading",
  "Mutual Funds",
  // "Portfolio Analysis",
  // "Intraday Strategies",
  "Price Action",
  "Indicators",
  // "Smart Money Concepts",
  "Chart Patterns",
  "Order Blocks",
  // "Fundamental Analysis",
  // "Support & Resistance",
  "Option Buying",
  // "Hedging",
  // "Option Selling",
  "Swing trading",
];

// Generate non-overlapping bubbles
const bubbles = [];
const existingPositions = [];
for (let i = 0; i < elements.length; i++) {
  let initialX, initialY;
  let isColliding;
  do {
    initialX = Math.random() * 80 + 15;
    initialY = Math.random() * 80 + 10;
    isColliding = existingPositions.some((pos) => {
      const dx = Math.abs(pos.initialX - initialX);
      const dy = Math.abs(pos.initialY - initialY);
      return dx < 10 && dy < 10;
    });
  } while (isColliding);

  existingPositions.push({ initialX, initialY });
  bubbles.push({ id: i, text: elements[i], initialX, initialY });
}

const Bubble = ({ id, text, floating, initialX, initialY }) => {
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1420);

  useEffect(() => {
    const handleResize = () => setIsXlScreen(window.innerWidth >= 1420);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const springProps = useSpring({
    transform: floating
      ? `translate(${Math.random() * 230 - 120}px, ${
          Math.random() * 250 - 120
        }px)`
      : "translate(0px, 0px)",
    opacity: floating ? 0 : 1,
    config: { tension: 50, friction: 10 },
  });

  // Increase size only for xl screens
  const bubbleSize = isXlScreen ? "w-36 h-36" : "w-20 h-20";
  const fontSize = isXlScreen
    ? Math.max(24, 28 - text.length * 0.4)
    : Math.max(14, 18 - text.length * 0.4);

  return (
    <animated.div
      className={`absolute rounded-full cursor-pointer flex items-center justify-center text-white font-semibold text-center border border-gray-700 ${bubbleSize}`}
      style={{
        ...springProps,
        top: `${initialY}%`,
        left: `${initialX}%`,
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.8) 20%, rgba(96, 107, 135, 0.7) 80%)",
        boxShadow: "0 0 8px rgba(149, 167, 170, 0.4)",
        borderColor: "rgba(104, 138, 143, 0.6)",
      }}
    >
      <span
        className="relative z-10 px-3 text-black"
        style={{ fontSize: `${fontSize}px`, maxWidth: "100%" }}
      >
        {text}
      </span>
    </animated.div>
  );
};

const MbBubbleComponent = () => {
  const [floatingBubbles, setFloatingBubbles] = useState({});

  const handleHover = (id) => {
    setFloatingBubbles((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setFloatingBubbles((prev) => {
        const newState = { ...prev };
        delete newState[id];
        return newState;
      });
    }, 3000);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Vibes&display=swap&family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="relative  flex flex-col sm:hidden items-center justify-center h-[110vh]    text-white overflow-hidden pt-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl mb-6 mt-8 lg:text-5xl font-bold uppercase"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        <span className="font-bold text-6xl lg:text-6xl  2xl:text-[5.2rem] bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text">
          WHAT
        </span>
        <span
          className="text-white text-lg lg:text-lg  2xl:text-[1.5rem] font-normal ml-2"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          We Teach
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 0.23, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute text-6xl md:text-[9.5rem]   font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text opacity-55"
        style={{ fontFamily: "'League Spartan', sans-serif" }}
      >
        Everything
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative mb-44 mr-28 xl:mr-40 w-full max-w-7xl  lg:max-w-[88%] h-[75vh] 2xl:h-[90vh] 2.5xl:h-[80vh]"
      >
        {bubbles.map(({ id, text, initialX, initialY }) => (
          <div key={id} onMouseEnter={() => handleHover(id)}>
            <Bubble
              id={id}
              text={text}
              floating={floatingBubbles[id]}
              initialX={initialX}
              initialY={initialY}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MbBubbleComponent;
