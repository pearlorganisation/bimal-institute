import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ item, index, sectionRefs }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variantsLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const variantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={(el) => (sectionRefs.current[index] = el)}
      className="flex items-center min-h-[300px] py-16"
    >
      {/* Left Side */}
      <motion.div
        ref={ref}
        className={`w-1/2 ${item.imageLeft ? "pr-12" : "text-right pr-12"}`}
        initial="hidden"
        animate={controls}
        variants={item.imageLeft ? variantsLeft : variantsRight}
      >
        {item.imageLeft ? (
          <div className="rounded-3xl overflow-hidden">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
            <div className="text-gray-300">{item.content}</div>
          </div>
        )}
      </motion.div>

      {/* Center Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-20"></div>

      {/* Right Side */}
      <motion.div
        className={`w-1/2 ${item.imageLeft ? "pl-12" : "pl-12"}`}
        initial="hidden"
        animate={controls}
        variants={item.imageLeft ? variantsRight : variantsLeft}
      >
        {item.imageLeft ? (
          <div>
            <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
            <div className="text-gray-300">{item.content}</div>
          </div>
        ) : (
          <div className="rounded-3xl overflow-hidden">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TimelineItem;
