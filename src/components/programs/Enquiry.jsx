import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Enquiry = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:wght@400;700&family=Quicksand:wght@681&family=League+Spartan:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const serviceId = "service_25k40w9";
    const templateId = "template_8t5qdnz";
    const publicKey = "TUFnuNaPfjGvjVc3A";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      from_city: city,
      to_name: "Bimal jii",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setCity("");
      })
      .catch((error) => {
        toast.error("Failed to send the message. Please try again.");
      });
  };

  return (
    <>
      <div className="py-20 w-[80%] mx-auto text-white flex flex-col items-center justify-center">
        <div className="bg-black text-white rounded-2xl py-10 px-1 w-[90%] md:w-[80%] xl:w-[100%] 2xl:w-[85%] 2.5xl:w-[70%] 3xl:w-[55%]  mx-auto">
          {/* Logo and Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="flex flex-col items-center text-center mb-10"
          >
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-4xl 2xl:text-6xl font-semibold md:mb-8 2xl:mb-10"
              style={{ fontFamily: "'League Spartan', sans-serif" }}
            >
              Enquiry Form
            </motion.h1>

            {/* Form Section */}
            {/* Form */}
          </motion.div>

          <div className="max-w-xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ amount: 0.2 }}
              className="max-w-4xl mx-auto grid grid-cols-2  gap-6"
              onSubmit={handleSubmit}
            >
              <div className="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 text-white py-2 outline-none placeholder-white"
                  required
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center">
                  <span className="pr-2" style={{ width: "70px" }}>
                    IN +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-500 text-white py-2 outline-none placeholder-white"
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 text-white py-2 outline-none placeholder-white"
                  required
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 text-white py-2 outline-none placeholder-white"
                />
              </div>

              <div className="col-span-2 flex justify-center ">
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ amount: 0.2 }}
                  type="submit"
                  // className="bg-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300 transition duration-300"
                  className="inline-block cursor-pointer text-white px-8 py-2 text-xl rounded-xl font-[Dancing Script] tracking-widest bg-gradient-to-r from-[#3195FF] to-[#0980FF] font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enquiry;
