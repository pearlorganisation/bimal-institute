import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TraderProgram = () => {
  const Video1 = "/Module1Market pe charcha.mp4";
  const Video2 = "/Module2Chartneeti.mp4";
  const Video3 = "/Module3Smartneeti.mp4";
  const Video4 = "/Module4Gurugyaan.mp4";
  const Video5 = "/Module5Trader hai hum.mp4";
  const Video6 = "/Module6Option Mantra.mp4";

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div div className="w-[80%] 3xl:w-[75%] mx-auto">
      <div className="py-6 md:pt-32 2xl:pt-40 pb-6 flex justify-center items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Be A Trader Program 2.0
        </motion.h2>
      </div>
      {/* /////////destop view------ */}
      <main class="hidden sm:flex  text-white relative pt-8 pb-8 3xl:py-20  sm:py-16 flex-wrap">
        {/* <!--left  Sidebar --> */}
        <div class="sidebar-1 w-full md:w-6/12 border-r-0 md:border-r-2 border-white relative flex flex-col">
          <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[-1rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          {/* module components */}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
            <div
              class="   rounded-[1.8rem] p-8 md:pt-12 md:px-4 lg:pt-8 lg:px-3   h-[182px] md:h-[230px] lg:h-[215px]  "
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
                class="text- md:text-[2rem] lg:text-[2.2rem]  font-semibold opacity-40"
              >
                Module-1
              </motion.h1>
              {/* Hindi Ti
              tle */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem] font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                मार्केट पे चर्चा
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[1.9rem]  font-medium opacity-25  text-gray-300 pt-3   "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Market pe Charcha
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
              transition={{ duration: 0.7, ease: "easeOut" }}
              class=" pt-2 text-justify text-sm md:text-base lg:text-base 2xl:text-lg leading-relaxed font-Afacad text-gray-300"
            >
              Understanding Basic Terminologies <br /> a. Bid Ask
              <br /> b. Volume <br /> c. Quantity <br />
              d. Turnover <br />
              e. Intraday Vs Delivery <br />
              f. Stop Loss
              <br /> g. Bull Vs Bear <br />
              h. Circuits <br />
              i. OHLC
              <br />
              Calculations for Intraday/Margin/Delivery Trading Live Market
              Tracking Introductions to Futures & Its Calculations (Equity /
              Commodity) Introduction to Crypto & Forex
            </motion.p>
          </div>

          {/* video components module 2 */}
          <div class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24 ">
            {" "}
            <video
              // ref={(el) => (videosRef.current[0] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] xl:h-[60%] 2xl:h-[61%] 2.5xl:h-[75%] 3xl:h-[80%]"
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* module components  smartneeti 3*/}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-24 xl:pt-9 pb-5 md:pb-24  px-5 md:px-10 3xl:px-24">
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
                class="text- md:text-[2rem] lg:text-[2.2rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Module-3
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem] font-semibold  pt-3 "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                स्मार्टनीति
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[1.9rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Smartneeti
              </motion.h2>
            </div>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2 text-sm md:text-base lg:text-base 2xl:text-lg  font-Afacad list-disc list-inside text-gray-300"
            >
              <li>Time Frame Selection Using TWR</li>
              <li>Ripple Effect : Retailers VS Smart Retailers VS FII/DII</li>
              <li>How to Deal With Breakouts</li>
              <li>Break Of Structure & Change Of Character</li>
              <li>Order Blocks (Demand & Supply Zones)</li>
              <li> Point Of Interest & Imbalances </li>
              <li>Fair Value Gaps & Liquidity Sweeps </li>
              <li> Understanding Price Action </li>
              <li> Trend line With Smoothing </li>
              <li> Creating Bhramastra (SMC + Price Action) </li>
            </motion.ul>
          </div>

          {/* video components  module 4*/}
          <div class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
            {" "}
            <video
              // ref={(el) => (videosRef.current[1] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] xl:h-[60%] 2xl:h-[61%] 2.5xl:h-[75%]  3xl:h-[80%]"
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* module components sada profitable 5 */}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
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
                class="text- md:text-[2rem] lg:text-[2.2rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Module-5
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem]   font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                ट्रेडर हैं हम{" "}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[1.9rem]   font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Trader Hai Hum{" "}
              </motion.h2>
            </div>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2 text-sm md:text-base lg:text-base 2xl:text-lg  font-Afacad list-disc list-inside text-gray-300"
            >
              <li>Swing Strategies By Manish Bimal</li>
              <li> Fundamental Analysis </li>
              <li>Artificial Intelligence</li>
              <li>Portfolio Creation & Management</li>
              <li>Sector Rotation & Theme Based Trading</li>
              <li> Smart Screeners</li>
            </motion.ul>
            <p></p>
            <br />
          </div>

          {/* video components  module 6*/}
          <div class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
            {" "}
            <video
              // ref={(el) => (videosRef.current[2] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] xl:h-[60%] 2.5xl:h-[75%]   2xl:h-[61%] 3xl:h-[80%]"
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/*  rightside ..<!-- Main Content --> */}
        <div class="main-container-1 w-full md:w-6/12 flex flex-col">
          {/* video components module 1 */}
          <div class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
            {" "}
            <video
              // ref={(el) => (videosRef.current[3] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* module components  chartneeti 2*/}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-[28rem]  xl:pt-[22rem] 2xl:pt-[23rem] 2.5xl:pt-[14.5rem] 3xl:pt-[14rem] pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
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
                class="text- md:text-[2rem] lg:text-[2.2rem]   font-semibold opacity-40"
              >
                Module-2
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem]  font-semibold  pt-3 "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                चार्टनीति
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[1.9rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Chartneeti
              </motion.h2>
            </div>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2 text-sm md:text-base lg:text-base 2xl:text-lg  font-Afacad list-disc list-inside text-gray-300"
            >
              <li>Charts & Trends</li>
              <li>Support & Resistance</li>
              <li>Decoding Candlesticks</li>
              <li>Chart Patterns</li>
              <li>Indicators</li>
            </motion.ul>
            <p></p>
            <br />
            <p></p>
            <p></p>
            <br />
            <p></p>
            <p></p>
            <br />
            <p></p>
          </div>

          {/* video components module 3 */}
          <div class="card flex-1 pt-5 md:pt-40 xl:pt-32 2xl:pt-36 2.5xl:pt-36 pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
            {" "}
            <video
              // ref={(el) => (videosRef.current[4] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* module components  gurugyan 4*/}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-40 xl:pt-[18rem] 2xl:pt-[17rem]  2.5xl:pt-[15rem] pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
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
                class="text- md:text-[2rem] lg:text-[2.2rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Module-4
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem]  font-semibold  pt-3 "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                गुरुज्ञान
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[1.9rem]  font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Guru Gyan{" "}
              </motion.h2>
            </div>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2 text-sm md:text-base lg:text-base 2xl:text-lg  font-Afacad list-disc text-gray-300 list-inside"
            >
              <li> Intraday Strategies by Manish Bimal</li>
              <li>Risk Management</li>
              <li>Intraday Trading Psychology</li>
            </motion.ul>
            <p></p>
            <br />
            <p></p>
            <p></p>
            <br />
            <p></p>
            <p></p>
            <br />
            <p></p>
          </div>

          {/* video components module 5 */}
          <div class="card flex-1 pt-5 md:pt-40 xl:pt-[15rem] 2.5xl:pt-[17rem] pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
            {" "}
            <video
              // ref={(el) => (videosRef.current[5] = el)}
              controls
              className="w-full md:w-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* module components  optionMantra 6*/}
          <div class="card flex-1 flex flex-col  pt-5 md:pt-40 xl:pt-[18rem] 2.5xl:pt-[15rem] pb-5 md:pb-24 px-5 md:px-10 3xl:px-24">
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
                class="text- md:text-[2rem] lg:text-[2.2rem]  font-semibold opacity-40"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Module-6
              </motion.h1>
              {/* Hindi Title */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem]  font-semibold  pt-3  "
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                  fontStyle: "normal",
                  opacity: 1,
                }}
              >
                ऑप्शन मंत्र
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                transition={{ duration: 0.7, ease: "easeOut" }}
                class="text-lg md:text-[1.7rem] lg:text-[1.9rem]   font-medium opacity-25  text-gray-300 pt-3 "
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Option Mantra{" "}
              </motion.h2>
            </div>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2 text-sm md:text-base lg:text-base 2xl:text-lg font-Afacad list-disc list-inside text-gray-300"
            >
              <li> Option Chain Analysis</li>
              <li>OI Built Up Analysis</li>
              <li> Max Pain Analysis</li>
              <li>India Vix & Implied Volatility Analysis</li>
              <li> Option Greeks</li>
              <li>Tracking FII / DII Derivative Statistics</li>
              <li> Option Buyer VS Option Writer</li>
              <li> Margin Reduction Using Hedging</li>
              <li> Role of India VIX & Implied Volatility While Writing</li>
              <li>Iron Condor Strategy & Its Adjustments</li>
              <li> YNJ Strategy (Spread)</li>
            </motion.ul>
          </div>
        </div>
      </main>

      {/* ////monbile view----------------------- ////monbile */}
      <main class="flex sm:hidden  text-white relative pt-8 pb-8  sm:py-16 flex-wrap">
        {/* <!--left  Sidebar --> */}
        <div class="sidebar-1 w-full md:w-6/12 border-r-0 md:border-r-2 border-white relative flex flex-col">
          <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[-1rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          {/* module components */}
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
                Module-1
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
                मार्केट पे चर्चा
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
                Market pe Charcha
              </motion.h2>
            </motion.div>
            <p class=" pt-2 text-justify text-sm md:text-base lg:text-lg font-Afacad">
              Understanding Basic Terminologies <br /> a. Bid Ask
              <br /> b. Volume <br /> c. Quantity <br />
              d. Turnover <br />
              e. Intraday Vs Delivery <br />
              f. Stop Loss
              <br /> g. Bull Vs Bear <br />
              h. Circuits <br />
              i. OHLC Calculations for Intraday/Margin/Delivery Trading Live
              Market Tracking Introductions to Futures & Its Calculations
              (Equity / Commodity) Introduction to Crypto & Forex
            </p>
          </div>

          {/* video components module 1 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <video
              // ref={(el) => (videosRef.current[3] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[100%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* module components  chartneeti 2*/}
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
              >
                Module-2
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
                चार्टनीति
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
                Chartneeti
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              <li>Charts & Trends</li>
              <li>Support & Resistance</li>
              <li>Decoding Candlesticks</li>
              <li>Chart Patterns</li>
              <li>Indicators</li>
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
              <source src={Video2} type="video/mp4" />
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
                Module-3
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
                स्मार्टनीति
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
                Smartneeti
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              <li>Time Frame Selection Using TWR</li>
              <li>Ripple Effect : Retailers VS Smart Retailers VS FII/DII</li>
              <li>How to Deal With Breakouts</li>
              <li>Break Of Structure & Change Of Character</li>
              <li>Order Blocks (Demand & Supply Zones)</li>
              <li> Point Of Interest & Imbalances </li>
              <li>Fair Value Gaps & Liquidity Sweeps </li>
              <li> Understanding Price Action </li>
              <li> Trend line With Smoothing </li>
              <li> Creating Bhramastra (SMC + Price Action) </li>
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
              <source src={Video3} type="video/mp4" />
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
                Module-4
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
                गुरुज्ञान
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
                Guru Gyan{" "}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              <li> Intraday Strategies by Manish Bimal</li>
              <li>Risk Management</li>
              <li>Intraday Trading Psychology</li>
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
              <source src={Video4} type="video/mp4" />
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
                Module-5
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
                ट्रेडर हैं हम{" "}
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
                Trader Hai Hum{" "}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              <li>Swing Strategies By Manish Bimal</li>
              <li> Fundamental Analysis </li>
              <li>Artificial Intelligence</li>
              <li>Portfolio Creation & Management</li>
              <li>Sector Rotation & Theme Based Trading</li>
              <li> Smart Screeners</li>
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
              <source src={Video5} type="video/mp4" />
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
                Module-6
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
                ऑप्शन मंत्र
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
                Option Mantra{" "}
              </motion.h2>
            </div>
            <ul className="pt-2 text-sm md:text-base lg:text-lg font-Afacad list-disc list-inside">
              <li> Option Chain Analysis</li>
              <li>OI Built Up Analysis</li>
              <li> Max Pain Analysis</li>
              <li>India Vix & Implied Volatility Analysis</li>
              <li> Option Greeks</li>
              <li>Tracking FII / DII Derivative Statistics</li>
              <li> Option Buyer VS Option Writer</li>
              <li> Margin Reduction Using Hedging</li>
              <li> Role of India VIX & Implied Volatility While Writing</li>
              <li>Iron Condor Strategy & Its Adjustments</li>
              <li> YNJ Strategy (Spread)</li>
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
            {" "}
            <video
              // ref={(el) => (videosRef.current[2] = el)}
              controls
              className="w-full md:w-full  rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block md:h-[128%] lg:h-[94%] "
              // poster="https://via.placeholder.com/400x200?text=Video+Placeholder"
            >
              <source src={Video6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default TraderProgram;
