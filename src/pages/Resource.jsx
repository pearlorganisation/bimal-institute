import React, { useState } from "react";
import StockCard from "../components/resource/StockCard";
import Navbar from "./Navbar";
import StillQue from "../components/StillQue";
import ContactUsForm from "../components/ContactUsForm";
import Footer from "../components/Footer";
import FixedSidebarButtons from "./FixedSidebarButtons";
import { motion } from "framer-motion";

import axios from "axios";
import { useEffect } from "react";

function Resource() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8000/api/v1/blogs");
        if (res.data.success) {
          setBlogs(res.data.data);
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  console.log(blogs, "Nlogs Data");

  if (loading) return <div className="spinner" />;
  return (
    <>
      <Navbar />
      <FixedSidebarButtons />
      <div className=" py-6 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl text-center md:text-5xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Blogs
        </motion.h2>
      </div>

      {/* <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <img
              src={blog.thumbImage.secure_url}
              alt={blog.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h2>{blog.title}</h2>

            <p>
              <strong>By:</strong> {blog.author.name}
            </p>
          </div>
        ))}
      </div> */}
      <StockCard blogs={blogs} />
      <ContactUsForm />
      <Footer />
    </>
  );
}

export default Resource;
