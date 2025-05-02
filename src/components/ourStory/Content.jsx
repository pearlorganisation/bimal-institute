import { motion } from "framer-motion";
import React, { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 xl:py-20 px-4 md:px-10 lg:px-20">
      <div className="text-center py-4">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-gray-300 text-left text-sm md:text-base  2xl:text-[1.5rem]   tracking-widest"
          style={{
            fontFamily: "'Merriweather', serif",
          }}
        >
          Our Story
        </motion.p>

        <div className="flex justify-center items-center text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-5xl  2xl:text-[4.5rem] font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Manish Bimal
          </motion.h2>
        </div>
      </div>
      <div className="text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gray-200  sm:w-[100%] w-[80%] mx-auto  text-left text-sm md:text-base  2xl:text-[1.2rem]   mt-4 leading-relaxed"
          style={{ fontFamily: "'Afacad', sans-serif" }}
        >
          Manish Bimal, the visionary behind Bimal Institute is one of India’s
          foremost stock market educators. His journey into trading began in
          2008, amidst one of the most turbulent market periods. Instead of
          being discouraged, his curiosity led him to explore the world of stock
          trading, an interest sparked by a friend’s elder brother.
          <br />
          <br />
          By 2014, after completing his post-graduation, he delved deeply into
          derivatives trading. Over the next two years, he read extensively—more
          than 30 books—testing numerous strategies and developing seven unique
          trading setups, each tailored to different trading styles.
          <br />
          <br />
          Recognizing a crucial gap in trading education by 2016, Manish sought
          to transform how trading was taught. Many courses were overly
          theoretical, failing to prepare traders for real-world market
          conditions. Determined to change this, he established Bimal Institute,
          Central India’s first live trading institute. His approach was
          practical and application-based, ensuring students could translate
          knowledge into profitable trades.
          <br />
          <br />
          The institute quickly gained recognition, becoming one of India’s
          top-rated stock market training centers. Many of its students have
          gone on to become successful traders, attributing their growth to
          Manish’s hands-on mentoring.
          <br />
          <br />
          Though proficient in multiple trading styles, Manish is best known for
          his expertise in swing trading, earning him the nickname 'Swing Ke
          King.' In trading circles, there is a common belief that no one
          matches his ability to read and capitalize on market swings.
          <br />
          <br />
          More than just an educator, Manish embodies the art of trading. His
          mentorship goes beyond strategies—he instills the right mindset,
          sharpens risk management skills, and guides traders toward financial
          independence.
          <br />
          <br />
          Under his leadership, Bimal Institute continues to revolutionize
          trading education in India. His vision remains steadfast: to make
          trading accessible, understandable, and profitable for all who seek to
          master it.
        </motion.p>
      </div>
    </div>
  );
};

export default Content;
