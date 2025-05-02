import React, { useEffect } from "react";
import Trumpimg from "../../assets/trump economy.png";
import { motion } from "framer-motion";
import Navbar from "../../pages/Navbar";
const TrumpEconomy = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full text-white overflow-hidden p-6 md:p-12 lg:p-16 text-center">
        {/* Image at the beginning */}
        <div className="w-full relative flex justify-center mb-6">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="absolute  left-56 2xl:left-[23%] 2.5xl:left-[27%] 3xl:left-[31%] top-0 px-2 py-1  text-[#0940E6] rounded-lg  font-medium transition"
          >
            ← Back
          </button>
          <img
            src={Trumpimg}
            alt="Trump Economy"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ amount: 0.2 }}
          className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold mb-6 drop-shadow-lg bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          The Trump Effect on Global Economy
        </motion.h1>

        {/* Main Content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ amount: 0.2 }}
          className="text-lg xl:text-xl 2xl:text-[1.7rem] max-w-3xl leading-relaxed text-gray-200 mx-auto"
        >
          Ever since Trump assumed the presidency of the United States, the
          global economic landscape has undergone significant shifts. Financial
          markets have witnessed extreme volatility, leading to substantial
          wealth redistribution—some investors have suffered massive losses,
          while others have reaped extraordinary gains. Under Trump’s
          leadership, financial markets have seen major swings, causing
          significant shifts in investor confidence and wealth distribution. His
          administration imposed tariffs on key trading partners, leading to
          counter-tariffs and potential global trade disruptions. Trump also
          expressed ambitions to extend U.S. influence, discussing the
          integration of Canada and Greenland, which raised international
          concerns. Additionally, tariffs raised prices for U.S. consumers,
          affecting global supply chains and potentially slowing economic growth
          worldwide. These factors collectively shaped the economic climate
          during his tenure, leaving lasting impacts on global markets and trade
          dynamics.
        </motion.p>
      </div>
    </>
  );
};

export default TrumpEconomy;
