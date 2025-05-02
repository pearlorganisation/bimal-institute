import React, { useEffect } from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <footer className="text-white text-center py-6 w-[80%] sm:w-[90%] xl:w-[80%] 2xl:w-[75%] mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="text-md  2xl:text-lg tracking-widest mb-2"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        © 2025 Bimal Institute. All Rights Reserved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="border-t  border-gray-400 w-[100%] sm:w-[50%]  2xl:w-[30%] mx-auto mb-2"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="flex flex-wrap justify-center space-x-4 text-md  2xl:text-lg mb-4 sm:tracking-widest"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        <a
          href="/assets/Disclaimers.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
        >
          Disclaimer
        </a>
        <span>|</span>
        <a
          href="/assets/Privacy_policy_for_website.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline tracking-wide bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
        >
          Privacy Policy
        </a>
        <span>|</span>
        <a
          href="/assets/Fee_policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline tracking-wide bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
        >
          Refund Policy
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="flex justify-center space-x-6 text-lg  2xl:text-xl"
      >
        <a
          href="https://www.facebook.com/bimalinstitute/"
          target="_blank"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/@bimalinstitute4118"
          target="_blank"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/bimalinstitute"
          target="_blank"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
