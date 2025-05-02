import React, { useEffect } from "react";
import StillQue from "../../StillQue";
import ContactUsForm from "../../ContactUsForm";
import Footer from "../../Footer";
import Navbar from "../../../pages/Navbar";
import FixedSidebarButtons from "../../../pages/FixedSidebarButtons";
import { motion } from "framer-motion";

function InnerProgram() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <>
      <Navbar />
      <FixedSidebarButtons />
      <div className="flex items-center justify-center min-h-screen ">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl  text-center md:text-5xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Inner Circle Program
          </motion.h2>
        </div>
      </div>
      {/* <StillQue /> */}
      <ContactUsForm />
      <Footer />
    </>
  );
}

export default InnerProgram;
