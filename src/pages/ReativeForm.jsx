import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formImages } from "../utils/data";

const ExpertPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
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
      to_name: "Bimal Institude Team",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Enquiry request sent successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setCity("");
        setShowPopup(false);
      })
      .catch(() => {
        toast.error("Failed to send the enquiry request. Please try again.");
      });
  };

  if (!showPopup) return null;

  return (
    <div className="fixed w-[86%] md:w-[60%]  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-2">
      <div className="bg-white  max-w-3xl rounded-xl overflow-auto shadow-xl relative flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-3xl font-bold text-gray-500 hover:text-black"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>

        {/* Left Side - Images */}
        <div className="hidden md:block md:w-[55%] overflow-hidden p-4">
          <div className="flex flex-wrap gap-2">
            {formImages?.map((item, index) => (
              <img
                key={index}
                src={item?.path}
                alt=""
                className="w-full max-w-[160px] h-full object-contain mt-8"
              />
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-[45%] p-4 sm:p-6 md:p-8 space-y-4 text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Connect with our Expert
          </h2>
          <p className="text-sm text-gray-900">
            Have a question? We’d love to speak with you & answer your questions
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded text-sm"
              required
            />

            <div className="flex gap-2 items-center">
              <span className="pr-2 text-sm content-center bg-white rounded-md border border-gray-200 text-center w-[80px]">
                IN +91
              </span>
              <input
                type="tel"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border p-3 rounded text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded text-sm"
              required
            />

            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border p-3 rounded text-sm"
            />

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-4 py-3 rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;
