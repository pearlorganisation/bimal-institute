import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // {
    //   question: "Does this course cover live trading?",
    //   answer: "Yes, out of 60 days, live trading will be covered for 40 days.",
    // },
    {
      question: "Does This Course Cover Practical Approach ?",
      answer: "Yes"
    },
    {
      question:
        "I have zero knowledge about trading. Will this course be suitable for me?",
      answer:
        "Yes, this course is designed to be beneficial for both beginners and experienced traders.",
    },
    {
      question: "How is this program different from free content on YouTube?",
      answer:
        "We specialize in training individuals to become successful traders and have been doing so since 2016. This course is carefully structured to provide only filtered, high-quality knowledge along with hands-on support in live markets—something that is difficult to find on YouTube.",
    },
    {
      question:
        "Is there any age or education requirement to enroll in the `Be a Trader` program?",
      answer:
        "Yes, as per the laws set by the Government of India, only individuals above 16 years of age can enroll. However, there are no specific educational qualifications required to join the program.",
    },
    {
      question: "How Much Capital Is Required?",
      answer: "same as provided"
    },

    // {
    //   question: "How much capital is needed for live trading?",
    //   answer:
    //     "We recommend a minimum capital of ₹25,000 to ensure an effective learning experience and to grasp the right trading curve.",
    // },
    {
      question: "After completing the course, will I receive guidance?",
      answer:
        "Yes, definitely. We understand that students need ongoing guidance after course completion, as becoming a profitable trader is not a two-month journey.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-[80%] 3xl:w-[75%] mx-auto py-16 text-white">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center mb-8 lg:mb-0">
        <div className="text-center py-4">
          <div className="flex flex-col items-start justify-center text-left">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl lg:text-6xl  2xl:text-[4.2rem] font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              EVERYTHING
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-gray-300 w-full md:w-auto text-center text-xl md:text-left md:text-3xl  2xl:text-4xl font-medium tracking-widest mt-1"
              style={{
                fontFamily: "'Merriweather', serif",
              }}
            >
              You Need To Know
            </motion.p>
          </div>
        </div>
      </div>

      {/* Right Section - Responsive FAQ Box */}
      <div className="lg:w-1/2  2xl:w-[49%] bg-gray-900 p-6  2xl:p-8 rounded-2xl border border-[#0940E6] shadow-lg">
        {faqs.map((faq, index) => (
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: -5 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            key={index}
            className="border-b border-gray-700 py-6   sm:mb-6 "
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span
                className="text-lg 2xl:text-[1.25rem] text-gray-300 font-semibold"
                style={{
                  fontFamily: "'Afacad', sans-serif",
                }}
              >
                {faq.question}
              </span>
              <span className="text-xl  2xl:text-2xl font-bold text-blue-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div
                className="mt-4  text-gray-400 text-sm transition-opacity duration-300"
                style={{
                  fontFamily: "'Afacad', sans-serif",
                }}
              >
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
