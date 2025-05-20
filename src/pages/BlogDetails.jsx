import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import moment from "moment";

const BlogDetails = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/blogs/${slug}`
        );
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

    fetchBlog();
  }, [slug]);

  if (loading) return <div className="spinner" />;

  return (
    <>
      <Navbar />

      <div className="w-full text-white overflow-hidden p-6 md:p-12 lg:p-16 ">
        {/* Back Button aligned with image start */}

        {/* Image */}
        <div className="flex flex-col w-full" >
          <button
            onClick={handleBack}
            className="w-fit px-6 py-2 text-[#ffffff] text-2xl rounded-lg font-medium transition hover:text-blue-500 sm:mb-2 mt-2 whitespace-nowrap"
          >
            ← Back
          </button>

          <div className="w-full relative flex justify-center mb-6">
            <img
              src={blogs.thumbImage.secure_url}
              alt="Blog Thumbnail"
              className="w-full max-w-3xl rounded-lg shadow-lg"
            />
          </div>
        </div>


        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ amount: 0.2 }}
          className="text-4xl md:text-5xl 2xl:text-6xl font-extrabold mb-6 drop-shadow-lg bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text text-center"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          {blogs.title}
        </motion.h1>

        {/* Main Content */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          viewport={{ amount: 0.2 }}
          className="text-lg xl:text-xl 2xl:text-[1.7rem] max-w-3xl leading-relaxed text-gray-200 mx-auto text-center"
        >
          {parse(blogs.content)}
        </motion.p>
      </div>
    </>
  );
};

export default BlogDetails;
