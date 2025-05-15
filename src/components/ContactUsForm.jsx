import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contactForm.css";
import Logo from "../assets/biglogo.png";
import CreatableSelect from "react-select/creatable";
import { motion } from "framer-motion";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const serviceId = "service_25k40w9";
    const templateId = "template_8t5qdnz";
    const publicKey = "TUFnuNaPfjGvjVc3A";
    // const serviceId = process.env.SERVICEID;
    // const templateId = process.env.TEMPLATEID;
    // const publicKey = process.env.PUBLICKEY;

    console.log("serviceId", serviceId, templateId, publicKey);
    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      from_city: city,
      to_name: "Bimal Institude Team",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully!", {
          className: "custom-toast-success",
        });
        setName("");
        setEmail("");
        setNumber("");
        setCity("");
        setMessage("");
      })
      .catch((error) => {
        toast.error("Failed to send the message. Please try again.", {
          className: "custom-toast-error",
        });
      });
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="text-white py-10 2xl:py-16 w-[80%] 3xl:w-[75%]  max-w-6xl mx-auto">
      {/* Logo and Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="flex flex-col items-center text-center mb-10 "
      >
        <img
          src={Logo}
          alt="Logo"
          className="max-w-28   md:wax-w-40 md:h-30 pb-6"
        />
        <h2
          className="text-2xl sm:text-4xl   font-semibold mb-4 "
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Bimal Institute For Market Research
        </h2>
        <p
          className="text-xl sm:text-2xl    font-bold bg-gradient-to-r from-[#4da3ff ] via-[#298df7] to-[#0940E6] text-transparent bg-clip-text mb-4"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Connect With Us
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
        className="max-w-4xl mx-auto flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        <div className="col-span-1">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-gray-500 text-white py-3 text-lg  outline-none placeholder-white"
            required
          />
        </div>

        <div className="col-span-1">
          <div className="flex items-center">
            <span className="pr-2 text-lg " style={{ width: "80px" }}>
              IN +91
            </span>
            <input
              type="tel"
              placeholder="Phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full bg-transparent border-b border-gray-500 text-white py-3 text-lg  outline-none placeholder-white"
            />
          </div>
        </div>

        <div className="col-span-1">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-gray-500 text-white py-3 text-lg  outline-none placeholder-white"
            required
          />
        </div>

        <div className="col-span-1">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent border-b border-gray-500 text-white py-3 text-lg  outline-none placeholder-white"
          />
        </div>

        <div className="col-span-2 border-b flex items-center justify-center">
          <textarea
            id="message"
            rows="4"
            placeholder="Message Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent placeholder-white text-white py-3 text-lg  outline-none text-center"
          ></textarea>
        </div>

        <div className="col-span-2 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            type="submit"
            // className="bg-[#0980FF] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300"
            className="inline-block cursor-pointer text-white px-10 py-3 text-base   rounded-2xl font-[Dancing Script] tracking-widest bg-gradient-to-r from-[#3195FF] to-[#0980FF] font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929]"
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactUsForm;
