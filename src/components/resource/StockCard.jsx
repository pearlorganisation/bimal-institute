import React, { useEffect } from "react";
import Trumpimg from "../../assets/blogTc.webp";
import Coverd from "../../assets/blogCv.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import moment from "moment";
const StockCard = ({ blogs }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Blog data with different images and titles
  // const blogs = [
  //   {
  //     id: 1,
  //     image: Trumpimg,
  //     title: "The Trump Effect on Global Economy",
  //     date: "01-01-2025",
  //     description: "Unstable Financial Markets and Shifts in Wealth",
  //     link: "/blog/trump-effect",
  //   },
  //   {
  //     id: 2,
  //     image: Coverd,
  //     title: " Mastering the Covered Call Strategy",
  //     date: "05-02-2025",
  //     description: "Use Covered Call Strategy in Market",
  //     link: "/blog/covered-call",
  //   },
  // ];

  return (
    <>
      <div className="w-[80%] mx-auto flex items-center justify-center py-8">
        <div className="bg-black rounded-[1.25rem] grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {Array.isArray(blogs) &&
            blogs.map((blog) => (
              <div key={blog.id} className="rounded-lg overflow-hidden p-3">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative"
                >
                  <img
                    src={blog.thumbImage.secure_url}
                    alt={blog.title}
                    className="rounded-t-lg  min-h-60 max-h-60 w-full object-cover"
                    // style={{ borderRadius: "1.25rem 1.25rem 0 0" }}
                  />
                  {/* Rotated Date */}
                  <div className="absolute top-20 sm:top-36  2xl:top-60 2xl:text-[1.5rem] 2.5xl:text-[1.7rem]  lg:top-40 left-2 sm:left-4 bg-gray-800 text-white text-xs sm:text-sm sm:px-2 sm:py-1 rounded-lg transform -rotate-90 origin-bottom-left">
                    {moment(blog.publishedAt).format("DD-MM-YYYY")}
                  </div>
                </motion.div>
                {/* Text Section */}
                <div className="text-center py-4">
                  <h3 className="text-xl 2xl:text-[2rem] font-semibold">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm 2xl:text-[1rem] mt-1">
                    {parse(blog.content.substring(0, 60))}...
                  </p>
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/blog/${blog.slug}`);
                    }}
                    className="mt-2 bg-gradient-to-r from-[#0980FF] to-[#292929] text-xl px-2 sm:px-6 py-2   rounded-md text-white font-semibold hover:text-[#0980FF] hover:bg-gradient-to-r hover:from-[#eff3f7] hover:to-[#eceff3] hover:border-[#292929] transition duration-300 transition duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default StockCard;
