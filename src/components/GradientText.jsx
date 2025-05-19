import { useEffect, useRef } from "react";
import ManishOnStage from "../assets/manish-on-stage.png"
import CountUp from "react-countup";
import "./scadit.css";
import { motion, useInView } from "framer-motion";


const GradientText = ({ setShowPopup }) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})


  useEffect(() => {
    if(isInView) {
      setShowPopup(true)
    }
  }, [isInView, ref.current])


  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Quicksand:wght@681&family=Stick+No+Bills:wght@200..800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);


  return (
    <div ref={ref} className="flex flex-col w-[80%] 3xl:w-[75%] mx-auto items-center">
      <div className="flex flex-col justify-center items-center py-8 xl:pb-12">
        <h1
          className="st-text text-4xl md:text-8xl lg:text-9xl 2xl:text-[8.3rem] font-semibold text-transparent bg-clip-text"
          style={{
            fontFamily: "'Stick No Bills', serif",
            backgroundImage: `linear-gradient(90deg, #A12FFB 0%, #FF5B79 18%, #FFB86F 68%, #FF3B6F 100%)`,
            WebkitBackgroundClip: "text",
          }}
        >
          <span style={{ fontFamily: "'Stick No Bills', sans-serif" }}>
            <CountUp start={0} end={150000} duration={5} separator="," />+{" "}
          </span>
        </h1>
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light md:text-5xl lg:text-6xl 2xl:text-[4rem] mt-4 text-center text-transparent bg-clip-text"
          style={{
            fontFamily: "'Stick No Bills', serif",
            backgroundImage: `linear-gradient(90deg, #FFF0E0 0%, #C36EB4 33%, #FFFCF1 66%, #82CFFF 100%)`,
            WebkitBackgroundClip: "text",
          }}
        >
          People Made BI Community
        </motion.span>
      </div>

      <div className="image-part my-4 ">
        <img
          src={ManishOnStage}
          className="grayscale hover:grayscale-0"
          alt="Community graphic"
          style={{
            filter: "grayscale(100%)",
            transition: "filter 1.5s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter = "grayscale(100%)")
          }
        />
      </div>
    </div>
  );
};

export default GradientText;
