import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatableSelect from "react-select/creatable";
import Logo from "../../assets/biglogo.png";
import baanertext from "../../assets/baanertext.png";
import StandardLogo from "../../assets/Business Standard (1) 1.png";
import AssetLogo from "../../assets/asets.png";
import { motion } from "framer-motion";

const ContactCard = () => {
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

    console.log("serviceId", serviceId, templateId, publicKey);
    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      from_city: city,
      to_name: "Bimal jii",
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
    <>
      <div className=" py-6 md:py-16">
        {/* <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-[80%]  mx-auto text-3xl text-center  md:text-5xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Connect
        </motion.h2> */}
      </div>

      <div className="bg-black text-white rounded-2xl py-10 px-5 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        {/* Logo and Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-24 h-auto md:w-36 lg:w-40 pb-4"
          />
          <h2
            className="text-3xl md:text-4xl font-semibold my4-2"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Bimal Institute For Market Research
          </h2>

          <h2
            className="text-2xl mb-4 md:text-3xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text mt-16"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Reach Us Out!
          </h2>

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

            <div class="col-span-2 border-b flex items-center justify-center">
              <textarea
                id="message"
                rows="4"
                placeholder="Message Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                class="w-full bg-transparent placeholder-white text-white py-2 outline-none flex items-center justify-center text-center"
              ></textarea>
            </div>

            <div className="col-span-2 flex justify-center ">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ amount: 0.2 }}
                type="submit"
                // className="bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300 transition duration-300"
                className="inline-block cursor-pointer text-white px-8 py-2 text-xl rounded-xl font-[Dancing Script] tracking-widest bg-gradient-to-r from-[#3195FF] to-[#0980FF] font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300"
              >
                Submit
              </motion.button>
            </div>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="text-center mt-16 text-white"
          >
            <p className="mt-4 underline text-lg">
              Address:{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=G-1+Ground+Floor,+Plot+no.+17,+PU4,+near+Silvotel+Hotel,+Vijay+Nagar,+Indore,+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-blue-400"
              >
                G-1 Ground Floor, Plot no. 17, PU4, near Silvotel Hotel, Vijay
                Nagar, Indore, Madhya Pradesh
              </a>
            </p>

            <p className="mt-4 text-lg underline">
              Email:{" "}
              <a
                href="mailto:contact@bimalinstitute.com"
                className="font-semibold  hover:text-blue-400"
              >
                Bimalinstitute@gmail.com
              </a>
            </p>

            <p className="mt-2 text-lg">
              Mobile No.:{" "}
              <a
                href="tel:+918889422299"
                className="font-semibold hover:text-blue-400"
              >
                8889422299
              </a>{" "}
              |{" "}
              <a
                href="tel:+918889422237"
                className="font-semibold hover:text-blue-400"
              >
                8889422237
              </a>{" "}
              |{" "}
              <a
                href="tel:+918889422238"
                className="font-semibold hover:text-blue-400"
              >
                8889422238
              </a>
            </p>

            <div className="mt-10  mb-12 ">
              <h3 className="text-3xl font-bold">
                Contact for Career Opportunities
              </h3>
              <p className="text-lg">To Team Up With Bimal Institute</p>

              <p className="mt-4 underline text-lg">
                Email:{" "}
                <a
                  href="mailto:team@bimalinstitute.com"
                  className="font-semibold  hover:text-blue-400"
                >
                  Bimalinstitute@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="text-center pt-16">
        <h2 className="text-3xl font-semibold mb-6">Download Brochure</h2>
        <a
          href="/assets/test.pdf" // Make sure the path is correct
          download="Bimal_Institute_Brochure.pdf"
          className="inline-block cursor-pointer bg-[#1c1d20] text-white px-8 py-2 rounded-2xl font-[Dancing Script] tracking-widest hover:bg-gray-600 transition"
        >
          Click Here for Download Brochure
        </a>
      </div> */}
    </>
  );
};

export default ContactCard;
