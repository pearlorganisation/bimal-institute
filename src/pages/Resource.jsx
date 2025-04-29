import React from "react";
import StockCard from "../components/resource/StockCard";
import Navbar from "./Navbar";
import StillQue from "../components/StillQue";
import ContactUsForm from "../components/ContactUsForm";
import Footer from "../components/Footer";
import FixedSidebarButtons from "./FixedSidebarButtons";
import { motion } from "framer-motion";

function Resource() {
  return (
    <>
      <Navbar />
      <FixedSidebarButtons />
      <div className=" py-6 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl text-center md:text-5xl font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Blogs
        </motion.h2>
      </div>

      <StockCard />
      <ContactUsForm />
      <Footer />
    </>
  );
}

export default Resource;
