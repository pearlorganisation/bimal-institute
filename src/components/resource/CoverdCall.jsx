import React, { useEffect } from "react";
import Coverd from "../../assets/covered call trading.png";
import { motion } from "framer-motion";
import Navbar from "../../pages/Navbar";
const CoveredCall = () => {
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
      <div className=" w-full  text-white overflow-hidden md:p-12 lg:p-16 text-center">
        {/* Background Image with Gradient Overlay */}
        <div className="w-full relative flex justify-center mb-6">
          <button
            onClick={handleBack}
            className="absolute  left-56 2xl:left-[23%] 2.5xl:left-[27%] 3xl:left-[31%] top-0 px-2 py-1  text-[#0940E6] rounded-lg  font-medium transition"
          >
            ← Back
          </button>
          <img
            src={Coverd}
            alt="Trump Economy"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>

        {/* Content Over Image */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 md:p-12 lg:p-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ amount: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Covered Call
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ amount: 0.2 }}
            className="text-lg md:text-xl max-w-3xl leading-relaxed text-gray-200"
          >
            In this falling market, if you were an investor, you couldn’t make
            much money if you don’t know about this hedging strategy. This
            strategy is called covered call, which lets you earn some money when
            the market is not moving much. Investors use this strategy when they
            feel that no big move will come in the market for their holdings.
            Now we understand this strategy well.
          </motion.p>

          {/* Key Sections */}
          <div className="mt-8 space-y-8 max-w-3xl text-left">
            <div className="p-4  bg-opacity-50 rounded-lg shadow-lg">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-2xl font-semibold 2xl:text-[2.2rem] mb-2 bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
                style={{ fontFamily: "'League Spartan', sans-serif" }}
              >
                1. What is Covered Call?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-gray-300 2xl:text-2xl"
              >
                The Covered Call strategy is a popular approach in options
                trading where an investor holds a stock and sells a call option
                on that same stock. By doing this, you collect a premium from
                the buyer of the option, which acts as extra income. Investors
                often turn to this method when they expect the stock market to
                stay stable or move sideways, ensuring they profit from the
                premium without worrying about big price swings in their
                holdings. The Covered Call technique offers a smart solution.
                You keep ownership of your shares while selling the right for
                someone else to buy them at a set price, known as the strike
                price, before the option expires. This works best when you
                believe your stock won’t surge dramatically, letting you pocket
                the premium safely. It’s a low-risk way to make money,
                especially when the stock market isn’t showing much action. For
                those new to trading strategies, think of Covered Call as a way
                to rent out your stocks without letting them go. You earn cash
                upfront from the option sale, and if the stock price doesn’t
                climb past the strike price, you keep both the premium and your
                shares. This approach shines in a falling or flat market, giving
                you a cushion against losses while still holding onto your
                investments for the long haul. It’s a practical tool for steady
                gains without betting on big market shifts.
              </motion.p>
            </div>
            <div className="p-4  bg-opacity-50 rounded-lg shadow-lg">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-2xl font-semibold mb-2 2xl:text-[2.2rem]  bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
                style={{ fontFamily: "'League Spartan', sans-serif" }}
              >
                {" "}
                2.Example of How to Use Covered Call Strategy in Market
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-gray-300 2xl:text-2xl"
              >
                Imagine you own 100 shares of ABC Ltd., trading at ₹500 each on
                the NSE, and you think the price won’t move much due to a quiet
                market. You sell one call option (1 lot = 100 shares) with a
                strike price of ₹550, expiring in 30 days, and get a ₹20 premium
                per share, earning ₹2,000 instantly. If ABC Ltd. stays below
                ₹550 by the expiry date, you keep the ₹2,000 and your shares—no
                complicated steps, just extra cash. Now, suppose the market
                dips, and ABC Ltd. falls to ₹480 after two weeks. Many investors
                might panic, but with the Covered Call, you’re covered. The
                option expires worthless since it’s below ₹550, so the ₹2,000
                premium offsets your ₹20-per-share loss (₹2,000 total). It’s
                like a safety net—your shares are still yours, and you’ve
                reduced your losses without much effort. On the flip side, if
                ABC Ltd. climbs to ₹560 by expiry, the option buyer takes your
                shares at ₹550, giving you ₹55,000. Add the ₹2,000 premium, and
                you’ve made ₹57,000, beating the ₹50,000 you’d have if you just
                held at ₹500. Whether the market stays flat, dips, or rises a
                bit, this strategy keeps it simple and helps you earn more,
                perfect for Indian traders looking for steady gain.
              </motion.p>
            </div>
            <div className="p-4  bg-opacity-50 rounded-lg shadow-lg">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-2xl font-semibold mb-2 2xl:text-[2.2rem]  bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
                style={{ fontFamily: "'League Spartan', sans-serif" }}
              >
                {" "}
                3. Who Should Use Covered call Strategy?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-gray-300 2xl:text-2xl"
              >
                {" "}
                The Covered Call strategy suits investors who already own stocks
                and want to earn extra income without taking big risks. If you
                have shares—like ABC Ltd. in the Indian market—and believe the
                price won’t jump or fall sharply soon, this is for you. It’s
                perfect for people who are okay selling their stock at a
                slightly higher price while pocketing the option premium if the
                market stays steady. This strategy also works well for cautious
                traders in a slow or falling market. If you’re not expecting a
                big rally in your holdings and want to cushion losses or boost
                returns, selling a covered call can help. For example, someone
                with a long-term portfolio who doesn’t mind letting go of shares
                at a set price can use it to make money on the side. Lastly,
                it’s great for beginners in options trading who want a low-risk
                start. You don’t need to be an expert—just own the stock, sell
                the call option, and collect the premium. It’s ideal for patient
                Indian investors who prefer steady gains over gambling on wild
                market swings.
              </motion.p>
            </div>
            <div className="p-4  bg-opacity-50 rounded-lg shadow-lg">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-2xl font-semibold mb-2 2xl:text-[2.2rem]  bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
                style={{ fontFamily: "'League Spartan', sans-serif" }}
              >
                {" "}
                4.Conclusion on Covered Call
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ amount: 0.2 }}
                className="text-gray-300 2xl:text-2xl"
              >
                In conclusion, the Covered Call strategy is a smart and simple
                way for stock market investors to earn extra income while
                managing risk, especially in the Indian market. Whether you’re a
                cautious trader, a long-term shareholder, or a beginner
                exploring options trading, this approach lets you profit from
                premiums without betting on big price jumps. By using this
                strategy with stocks like ABC Ltd., you can boost returns in a
                flat or falling market, making it a must-know tool for anyone
                searching for "best options trading strategies" or "how to earn
                in a stable market" on Google. It’s a low-risk, high-reward move
                for steady gains!
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoveredCall;
