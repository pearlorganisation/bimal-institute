import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import StudentReviews from "./StudentReviews";
import StillQue from "../../StillQue";
import ContactUsForm from "../../ContactUsForm";
import Footer from "../../Footer";
import Navbar from "../../../pages/Navbar";
import FixedSidebarButtons from "../../../pages/FixedSidebarButtons";
import Img1 from "../../../assets/mentor11.webp";
import Img2 from "../../../assets/mentor12.webp";
import Img3 from "../../../assets/mentor13.webp";
import Img4 from "../../../assets/mentor14.webp";
import Img5 from "../../../assets/mentor15.webp";
import AnimatedText from "./AnimatedText";
import TimelineItem from "./TimelineItem";
import LearningEarningText from "./LearningEarningText";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const MembershipProgram = () => {
  const timelineData = [
    {
      id: 1,
      title: "What is the Membership Program?",
      content: "The Membership Program is an exclusive offering designed to further enhance your chart reading capabilities under the guidance of Manish Sir. Enrolled members gain access to exclusive sessions conducted by him.",
      image: Img1,
      imageLeft: true,
    },
    {
      id: 2,
      title: "Why Do You Need Membership?",
      content:
        "Many students struggle to find a trading environment as effective as our trading lounge after completing the course. Membership provides a 1-month extended access to our premium trading lounges, ensuring you continue to learn and grow in a professional setting.",
      image: Img2,
      imageLeft: false,
    },
    {
      id: 3,
      title: "How Membership Works?",
      content:
        "Getting further trained under Manish Sir gives students a competitive edge after course completion. This process helps them identify their unique trading style and develop a clear roadmap to achieve success.",
      image: Img3,
      imageLeft: true,
    },
    {
      id: 4,
      title: "Who is Eligible?",
      content:
        "Students who have opted for and successfully completed their mentorship program are eligible for membership.",
      image: Img4,
      imageLeft: false,
    },
    {
      id: 5,
      title: "Benefits of Membership Program",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Get 1-month extended access to our trading lounge.</li>
          <li>Receive further guidance from Manish Bimal Sir.</li>
          <li>Mentors will be available at scheduled times.</li>
          <li>Psychology sessions.</li>
          <li>Brainstorming sessions with Manish Sir.</li>
        </ul>
      ),
      image: Img5,
      imageLeft: true,
    },
  ];
  // const [activeSection, setActiveSection] = useState(0);
  // const sectionRefs = useRef([]);

  // const [scrollPercentage, setScrollPercentage] = useState(0);

  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const timelineContainerRef = useRef(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  // GSAP ScrollTrigger for scrollPercentage
  useEffect(() => {
    const container = timelineContainerRef.current;

    // GSAP Context for scoped animations and easier cleanup
    const ctx = gsap.context(() => {
      // Use matchMedia for responsive ScrollTriggers
      ScrollTrigger.matchMedia({
        // Desktop setup (matches Tailwind's 'md' breakpoint, typically 768px)
        "(min-width: 768px)": function () {
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
        "(max-width: 767px)": function () {
 
          setScrollPercentage(0);
        
        }
      });
    }, timelineContainerRef); // Scope the context to the container if needed, or use document

    return () => {
      ctx.revert();
    };
  }, []); 

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

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  
  const { scrollY } = useScroll(); // page scroll

  useEffect(() => {
    return scrollY.onChange((v) => {
      console.log("ScrollY:", v);
    });
  }, [scrollY]);

  return (
    <>
      <Navbar />
      <FixedSidebarButtons />
      {/* heading */}
      <div className=" py-6 md:pt-36 mb:pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl  text-center md:text-5xl 2xl:text-[5.4rem] font-semibold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Membership Program
        </motion.h1>
      </div>

      {/* SHUBHAM CODE*/}
      <div className=" hidden md:flex items-center justify-center mt-20 mb-[300px] ">
        <LearningEarningText />
      </div>

      <div className="min-h-screen hidden md:block bg-black text-white p-4">
        <div className="max-w-4xl mx-auto relative" ref={timelineContainerRef}>
          <div className="relative">
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

            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"
              style={{ top: 0 }}
            ></div>

            <div className="relative z-10">
              <div className="h-[50px]"></div>
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  sectionRefs={sectionRefs}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"></div>
          </div>
        </div>
      </div>

      {/* mobile view ///// */}
      <main class=" flex md:hidden w-[80%] mx-auto text-white relative py-8 flex-wrap">
        {/* <!--left  Sidebar --> */}
        <div class="sidebar-1 w-full h-max md:w-6/12 border-r-0 md:border-r-2 border-white relative flex flex-col">
          {/* text content module 1 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card  h-[18rem] flex-1 flex flex-col justify-center items-center pt-10 md:pt-24 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div class="text-white text-5xl 2xl:text-[6rem] font-semibold text-center">
              <p>{timelineData[0].title}</p>

              <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem]  leading-relaxed">
                {timelineData[0].content}
              </p>
            </div>
          </motion.div>

          {/* Media Components Module1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div className="w-full max-w-[95%] md:max-w-[90%] rounded-[3.2rem] border-2 border-white overflow-hidden">
              <img
                src={Img1}
                alt="img1"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* content components */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1   h-[18rem] pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.5rem] font-semibold mb-4 2xl:mb-8">
              {timelineData[1].title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem]  leading-relaxed">
              {timelineData[1].content}
            </p>
          </motion.div>

          {/* media components module 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <div className="w-full max-w-[95%] md:max-w-[90%] rounded-[3.2rem] border-2 border-white overflow-hidden">
              <img
                src={Img2}
                alt="img1"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* content components */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 h-[18rem] pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.5rem] font-semibold mb-4 2xl:mb-8">
              {timelineData[2].title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem] leading-relaxed">
              {timelineData[2].content}
            </p>
          </motion.div>

          {/* media components modue3*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <div className="w-full max-w-[95%] md:max-w-[90%] rounded-[3.2rem] border-2 border-white overflow-hidden">
              <img
                src={Img3}
                alt="img1"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/*  rightside ..<!-- Main Content --> */}
        <div class="main-container-1 w-full md:w-6/12 flex flex-col">
          {/* content components */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 h-[18rem] pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.5rem] font-semibold 2xl:mb-8 mb-4">
              {timelineData[3].title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem] leading-relaxed">
              {timelineData[3].content}
            </p>
          </motion.div>

          {/* media components module 5*/}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <div className="w-full max-w-[95%] md:max-w-[90%] rounded-[3.2rem] border-2 border-white overflow-hidden">
              <img
                src={Img5}
                alt="img1"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
          {/* content components */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1  h-[24rem] pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.5rem] font-semibold mb-4 2xl:mb-8">
              {timelineData[4].title}
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem] leading-relaxed">
              <ul>{timelineData[4].content}</ul>
            </p>
          </motion.div>

          {/* media components module 4 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card flex-1 pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            {" "}
            <div className="w-full max-w-[95%] md:max-w-[90%] rounded-[3.2rem] border-2 border-white overflow-hidden">
              <img
                src={Img4}
                alt="img1"
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </main>

      {/* <StillQue /> */}
      <ContactUsForm />
      <Footer />
    </>
  );
};

export default MembershipProgram;
