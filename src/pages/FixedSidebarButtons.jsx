import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const FixedSidebarButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

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
      to_name: "Bimal jii",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Downloaded successfully!", {
          className: "custom-toast-success",
        });

        // Clear form fields
        setName("");
        setEmail("");
        setNumber("");

        // Automatically trigger PDF download
        downloadPDF();

        // Close modal after submission
        setIsModalOpen(false);
      })
      .catch((error) => {
        toast.error("Failed to send the message. Please try again.", {
          className: "custom-toast-error",
        });
      });
  };

  // Function to trigger PDF download
  const downloadPDF = () => {
    const pdfUrl = "/assets/test.pdf"; // Replace with the correct file path
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Brochure.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      {/* Sidebar Buttons */}
      <div className="fixed   left-[-2.7rem] sm:left-0 3xl:left-12 top-[40%] z-50 flex flex-col space-y-2">
        {/* Download Brochure Button */}
        <div className="transform -rotate-90 mb-[65%]">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-[#3195FF]  to-[#0980FF] rounded text-white text-[0.75rem] sm:text-base   3xl:text-[1rem]   2xl:px-3   3xl:py-[0.4rem] font-semibold px-3 py-1 w-54 
                     text-center origin-left rounded-r-lg shadow-md"
          >
            Download Brochure{" "}
          </motion.button>
        </div>

        {/* WhatsApp Us Button */}
        <div className="transform -rotate-90">
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            href="https://wa.me/918889422299"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#3195FF]  to-[#0980FF] rounded text-white text-[0.75rem] sm:text-base 3xl:text-[1.2rem]  2xl:px-3     3xl:py-[0.9rem] font-semibold px-4 py-2 xl:py-[0.3] 
                     text-center origin-left rounded-r-lg shadow-md"
            style={{
              fontFamily: "'League Spartan', sans-serif",
            }}
          >
            WhatsApp Us
          </motion.a>
        </div>
      </div>

      {/* Modal Popup Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-start sm:justify-center bg-black bg-opacity-50 z-50 px-4">
          <div
            className="relative bg-[#0F172A] text-white p-6 rounded-lg max-w-[18rem] sm:max-w-sm  w-full border border-gray-700 shadow-lg 
                    before:absolute before:inset-0 before:-m-1 before:rounded-lg 
                    before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500
                    before:blur-lg before:opacity-50 before:-z-10"
          >
            <h2
              className="text-xl font-semibold mb-4 text-center"
              style={{
                fontFamily: "'League Spartan', sans-serif",
              }}
            >
              Download Brochure
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-300 text-sm font-bold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-600 bg-[#1E293B] text-white rounded-md p-2"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-300 text-sm font-bold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-600 bg-[#1E293B] text-white rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-300 text-sm font-bold mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full border border-gray-600 bg-[#1E293B] text-white rounded-md p-2"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-600 px-4 py-2 rounded-md text-white w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // className="bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300 transition duration-300"
                  className="inline-block cursor-pointer text-white px-8 py-2 text-xl rounded-xl font-[Dancing Script] tracking-widest bg-gradient-to-r from-[#3195FF] to-[#0980FF] font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default FixedSidebarButtons;
