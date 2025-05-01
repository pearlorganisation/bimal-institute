import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CollageImg from "../assets/collage1.jpg";

const ExpertPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
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
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setNumber("");
        setCity("");
        setMessage("");
        setShowPopup(false);
      })
      .catch(() => {
        toast.error("Failed to send the message. Please try again.");
      });
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white w-full max-w-5xl rounded-xl overflow-hidden shadow-xl relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-3xl font-bold text-gray-500 hover:text-black"
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>

        {/* Left Side - Images */}
        <div className="hidden md:block md:w-1/2 h-[600px] overflow-hidden">
          <img
            src={CollageImg}
            alt="Expert"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 space-y-4 text-black ">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Connect with our Expert
          </h2>
          <p className="text-sm text-gray-900">
            Have a question? We’d love to speak with you & answer your questions
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded text-sm"
              required
            />

            <div className="flex gap-2">
              <span
                className="pr-2 text-sm content-center"
                style={{ width: "80px" }}
              >
                IN +91
              </span>
              <input
                type="tel"
                placeholder="Phone"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-2/3 border p-3 rounded text-sm"
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

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border p-3 rounded text-sm h-24 resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;
