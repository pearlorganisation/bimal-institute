import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
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

const MembershipProgram = () => {
  const timelineData = [
    {
      id: 1,
      title: "Process",
      content: "",
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const docHeight = document.body.scrollHeight - window.innerHeight;
  //     const scrolled = (scrollTop / docHeight) * 100;
  //     setScrollPercentage(Math.min(100, Math.max(0, scrolled)));
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // useEffect(() => {
  //   sectionRefs.current = sectionRefs.current.slice(0, timelineData.length);

  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight / 2;

  //     sectionRefs.current.forEach((section, index) => {
  //       if (!section) return;

  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;

  //       if (
  //         scrollPosition >= sectionTop &&
  //         scrollPosition < sectionTop + sectionHeight
  //       ) {
  //         setActiveSection(index);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [timelineData.length]);

  // const { scrollY } = useScroll();

  // const learningOpacity = useTransform(scrollY, [100, 250], [1, 0]);
  // const strikeThroughOpacity = useTransform(
  //   scrollY,
  //   [200, 300, 450],
  //   [0, 1, 0]
  // );
  // const earningOpacity = useTransform(scrollY, [350, 450], [0, 1]);
  // const earningY = useTransform(scrollY, [350, 450], [50, 0]);

  const targetRef = useRef(null); // only needed if using a scrollable container
  const { scrollY } = useScroll(); // page scroll

  // Scroll-based motion values
  const learningOpacity = useTransform(scrollY, [100, 250], [1, 0]);

  const strikeThroughOpacity = useTransform(
    scrollY,
    [200, 300, 450],
    [0, 1, 0]
  );
  const strikeThroughY = useTransform(scrollY, [200, 300], [20, 0]);

  const earningOpacity = useTransform(scrollY, [350, 450], [0, 1]);
  const earningY = useTransform(scrollY, [350, 450], [50, 0]);

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
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl  text-center md:text-5xl 2xl:text-[5.4rem] font-semibold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Membership Program
        </motion.h2>
      </div>

      {/* SHUBHAM CODE*/}
      <div className=" hidden md:flex items-center justify-center min-h-screen ">
        <motion.div
          className="relative text-center w-[80%] cursor-pointer"
          whileHover="hover"
          initial="initial"
        >
          {/* LEARNING Text */}
          <motion.h1
            variants={{
              initial: { opacity: 1 },
              hover: { opacity: 0.4 },
            }}
            transition={{ duration: 0.4 }}
            className="text-white text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            LEARNING
          </motion.h1>

          {/* Strike-through line */}
          <motion.span
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 left-[200px] h-[4px] sm:h-[10px] w-[70%] bg-white"
            // style={{ transform: "translate(-50%, -50%)" }}
          />

          {/* EARNING Text */}
          <motion.h1
            variants={{
              initial: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 top-1/2 text-white text-[5vh] sm:text-[11vw] font-bold uppercase tracking-wide"
            style={{
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            EARNING
          </motion.h1>
        </motion.div>
      </div>

      <div className="min-h-screen hidden md:block bg-black text-white p-4">
        <div className="max-w-4xl mx-auto" ref={timelineContainerRef}>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
              <div
                className="absolute top-0 left-0 w-full transition-all duration-300 ease-in-out"
                style={{
                  height: `${scrollPercentage}%`,
                  background: `linear-gradient(to bottom, #0980FF ${scrollPercentage}%)`,
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
        <div class="sidebar-1 w-full md:w-6/12 border-r-0 md:border-r-2 border-white relative flex flex-col">
          <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute top-52 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[-1rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[36rem]  xl:bottom-[38rem] 2xl:bottom-[39rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[68rem] xl:bottom-[67rem] 2xl:bottom-[72rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[89rem] xl:bottom-[93rem] 2xl:bottom-[100rem]  right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>
          <div class="absolute bottom-[13rem] right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full hidden md:block"></div>

          {/* text content module 1 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            class="card  h-[18rem] flex-1 flex flex-col justify-center items-center pt-10 md:pt-24 pb-5 md:pb-24 px-5 md:px-10"
          >
            <div class="text-white text-5xl 2xl:text-[6rem] font-semibold text-center">
              Process
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
              Why Do You Need Membership?
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem]  leading-relaxed">
              Getting further trained under Manish Sir gives students a
              competitive edge after course completion. This process helps them
              identify their unique trading style and develop a clear roadmap to
              achieve success.
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
              How Membership Works ?
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem] leading-relaxed">
              <ul>
                · Get 1-month extended access to our trading lounge. <br />·
                Receive further guidance from Manish Bimal Sir. <br />
                · Mentors will be available at scheduled times.
                <br />· Psychology sessions.
                <br />· Brainstorming sessions with Manish Sir.
              </ul>
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
              Who is Eligible?
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem] leading-relaxed">
              Students who have opted for and successfully completed their
              mentorship program are eligible for membership.
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
            class="card flex-1  h-[18rem] pt-5 md:pt-24 pb-5 md:pb-24 px-5 md:px-10 "
          >
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[2.5rem] font-semibold mb-4 2xl:mb-8">
              Benefits of Membership Program
            </h2>
            <p className="text-sm md:text-base lg:text-lg 2xl:text-[1.7rem] leading-relaxed">
              <ul>
                · Get 1-month extended access to our trading lounge. <br />·
                Receive further guidance from Manish Bimal Sir. <br />
                · Mentors will be available at scheduled times.
                <br />· Psychology sessions.
                <br />· Brainstorming sessions with Manish Sir.
              </ul>
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
