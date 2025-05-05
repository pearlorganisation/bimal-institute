import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TraderTimelineItem = ({ item, index, sectionRefs }) => {
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
      className="flex items-start gap-6 min-h-[300px] py-16 relative"
    >
      {/* Left Section */}
      <motion.div
        ref={ref}
        className={`w-1/2 flex flex-col justify-start ${
          item.imageLeft ? "pr-12" : "text-left pr-12"
        }`}
        initial="hidden"
        animate={controls}
        variants={item.imageLeft ? variantsLeft : variantsRight}
      >
        {item.imageLeft ? (
          <div className="h-full rounded-3xl overflow-hidden">
            <div className="card h-full flex-1  relative">
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />
              <video
                controls
                className="w-full h-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          <div className="card h-full flex flex-col  rounded-[1.8rem] ">
            <div
              className="p-8 md:pt-12 md:px-4 lg:pt-2 lg:px-3 rounded-[1.8rem]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                backgroundColor: "rgba(72, 72, 72, 0.2)",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-md md:text-[2rem] lg:text-[2.2rem] font-semibold opacity-40"
              >
                {item.title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem] font-semibold pt-3"
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                }}
              >
                {item.hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[1.7rem] lg:text-[1.9rem] font-medium opacity-25 text-gray-300 pt-3"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {item.subTitle}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2  text-justify text-sm md:text-base lg:text-base 2xl:text-lg leading-relaxed font-Afacad text-gray-300"
            >
              {item.content}
            </motion.p>
          </div>
        )}
      </motion.div>

      {/* Right Section */}
      <motion.div
        className={`w-1/2 flex flex-col justify-start ${
          item.imageLeft ? "pl-6" : "pl-6"
        }`}
        initial="hidden"
        animate={controls}
        variants={item.imageLeft ? variantsRight : variantsLeft}
      >
        {!item.imageLeft ? (
          <div className="h-full rounded-3xl overflow-hidden">
            <div className="card h-full flex-1  relative">
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-20" />
              <video
                controls
                className="w-full h-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          <div className="card h-full flex flex-col  rounded-[1.8rem]">
            <div
              className="p-8 md:pt-12 md:px-4 lg:pt-2 lg:px-3 rounded-[1.8rem]"
              style={{
                fontFamily: "'Quicksand', sans-serif",
                backgroundColor: "rgba(72, 72, 72, 0.2)",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-md md:text-[2rem] lg:text-[2.2rem] font-semibold opacity-40"
              >
                {item.title}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[2rem] lg:text-[2.2rem] font-semibold pt-3"
                style={{
                  fontFamily: "'Hind', serif",
                  fontWeight: "600",
                }}
              >
                {item.hindiTitle}
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 0.25, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-lg md:text-[1.7rem] lg:text-[1.9rem] font-medium opacity-25 text-gray-300 pt-3"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {item.subTitle}
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="pt-2 text-justify text-sm md:text-base lg:text-base 2xl:text-lg leading-relaxed font-Afacad text-gray-300"
            >
              {item.content}
            </motion.p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TraderTimelineItem;

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const TraderTimelineItem = ({ item, index, sectionRefs }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [inView, controls]);

//   const variantsLeft = {
//     hidden: { x: -100, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
//   };

//   const variantsRight = {
//     hidden: { x: 100, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
//   };

//   return (
//     <div
//       ref={(el) => (sectionRefs.current[index] = el)}
//       className="flex items-stretch gap-6 min-h-[300px] py-16 relative"
//     >
//       {/* Left Section */}
//       <motion.div
//         ref={ref}
//         className={`w-1/2 flex flex-col justify-start ${
//           item.imageLeft ? "pr-12" : "text-left pr-12"
//         }`}
//         initial="hidden"
//         animate={controls}
//         variants={item.imageLeft ? variantsLeft : variantsRight}
//       >
//         {item.imageLeft ? (
//           <div className=" rounded-3xl overflow-hidden">
//             <div className="card  bg-red-500 relative">
//               <video
//                 controls
//                 className="w-full h-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block"
//               >
//                 <source src={item.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         ) : (
//           <div className="card h-full flex flex-col rounded-[1.8rem]">
//             <div
//               className="p-8 md:pt-12 md:px-4 lg:pt-2 lg:px-3 rounded-[1.8rem]"
//               style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 backgroundColor: "rgba(72, 72, 72, 0.2)",
//               }}
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 0.4, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="text-md md:text-[2rem] lg:text-[2.2rem] font-semibold opacity-40"
//               >
//                 {item.title}
//               </motion.h1>
//               <motion.h2
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="text-lg md:text-[2rem] lg:text-[2.2rem] font-semibold pt-3"
//                 style={{
//                   fontFamily: "'Hind', serif",
//                   fontWeight: "600",
//                 }}
//               >
//                 {item.hindiTitle}
//               </motion.h2>
//               <motion.h2
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 0.25, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="text-lg md:text-[1.7rem] lg:text-[1.9rem] font-medium opacity-25 text-gray-300 pt-3"
//                 style={{ fontFamily: "'Quicksand', sans-serif" }}
//               >
//                 {item.subTitle}
//               </motion.h2>
//             </div>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.2 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className="pt-2 pl-5 text-justify text-sm md:text-base lg:text-base 2xl:text-lg leading-relaxed font-Afacad text-gray-300"
//             >
//               {item.content}
//             </motion.p>
//           </div>
//         )}
//       </motion.div>

//       {/* Center Dot */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
//         <div className="w-4 h-4 bg-white rounded-full" />
//       </div>

//       {/* Right Section */}
//       <motion.div
//         className={`w-1/2 flex flex-col justify-start ${
//           item.imageLeft ? "pl-6" : "pl-6"
//         }`}
//         initial="hidden"
//         animate={controls}
//         variants={item.imageLeft ? variantsRight : variantsLeft}
//       >
//         {!item.imageLeft ? (
//           <div className="h-full rounded-3xl overflow-hidden">
//             <div className="card  flex-1 bg-red-500 relative">
//               <video
//                 controls
//                 className="w-full rounded-[1.2rem] sm:rounded-[2.2rem] border-2 border-white block"
//               >
//                 <source src={item.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         ) : (
//           <div className="card h-full flex flex-col rounded-[1.8rem]">
//             <div
//               className="p-8 md:pt-12 md:px-4 lg:pt-2 lg:px-3 rounded-[1.8rem]"
//               style={{
//                 fontFamily: "'Quicksand', sans-serif",
//                 backgroundColor: "rgba(72, 72, 72, 0.2)",
//               }}
//             >
//               <motion.h1
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 0.4, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="text-md md:text-[2rem] lg:text-[2.2rem] font-semibold opacity-40"
//               >
//                 {item.title}
//               </motion.h1>
//               <motion.h2
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="text-lg md:text-[2rem] lg:text-[2.2rem] font-semibold pt-3"
//                 style={{
//                   fontFamily: "'Hind', serif",
//                   fontWeight: "600",
//                 }}
//               >
//                 {item.hindiTitle}
//               </motion.h2>
//               <motion.h2
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 0.25, y: 0 }}
//                 viewport={{ once: false, amount: 0.2 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//                 className="text-lg md:text-[1.7rem] lg:text-[1.9rem] font-medium opacity-25 text-gray-300 pt-3"
//                 style={{ fontFamily: "'Quicksand', sans-serif" }}
//               >
//                 {item.subTitle}
//               </motion.h2>
//             </div>
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: false, amount: 0.2 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//               className="pt-2 text-justify text-sm md:text-base lg:text-base 2xl:text-lg leading-relaxed font-Afacad text-gray-300"
//             >
//               {item.content}
//             </motion.p>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default TraderTimelineItem;
