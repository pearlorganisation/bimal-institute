import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import ContactUsForm from "../components/ContactUsForm";
import Content from "../components/ourStory/Content";
import HeaderSmall from "../assets/HeaderSmall.png";
import FixedSidebarButtons from "./FixedSidebarButtons";

function OurStory() {
  return (
    <div>
      <Navbar />
      <FixedSidebarButtons /> {/* Sidebar buttons fixed on the left */}
      <Content />
      <ContactUsForm />
      <Footer />
      {/* Smooth Image Animation */}
      <motion.img
        src={HeaderSmall}
        alt="header"
        className="mx-auto mt-6" // Adjust margins as needed
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for smoothness
        }}
      />
    </div>
  );
}

export default OurStory;
