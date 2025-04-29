import React from "react";
import ContactCard from "../components/contact/ContactCard";
import StudentReviews from "../components/programs/StudentReview";
import StillQue from "../components/StillQue";
import Footer from "../components/Footer";
import HeaderSmall from "../assets/HeaderSmall.png";
import Navbar from "./Navbar";
import FixedSidebarButtons from "./FixedSidebarButtons";
import FAQ from "../components/FAQ";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div>
      <Navbar />
      <FixedSidebarButtons />
      <ContactCard />
      {/* <StudentReviews /> */}
      {/* <StillQue /> */}
      {/* <FAQ /> */}
      {/* <Footer /> */}
      <motion.img
        src={HeaderSmall}
        alt="header"
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

export default Contact;
