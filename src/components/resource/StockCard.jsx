import React, { useEffect } from "react";
import Trumpimg from "../../assets/blogTc.webp";
import Coverd from "../../assets/blogCv.webp";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const StockCard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Blog data with different images and titles
  const blogs = [
    {
      id: 1,
      image: Trumpimg,
      title: "The Trump Effect on Global Economy",
      date: "01-01-2025",
      description: "Unstable Financial Markets and Shifts in Wealth",
      link: "/blog/trump-effect",
    },
    {
      id: 2,
      image: Coverd,
      title: " Mastering the Covered Call Strategy",
      date: "05-02-2025",
      description: "Use Covered Call Strategy in Market",
      link: "/blog/covered-call",
    },
  ];

  return (
    <>
      <div className="w-[80%] mx-auto flex items-center justify-center py-8">
        <div className="bg-black rounded-[1.25rem] grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {blogs.map((blog) => (
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
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-t-lg w-full"
                />
                {/* Rotated Date */}
                <div className="absolute top-20 sm:top-36  2xl:top-60 2xl:text-[1.5rem] 2.5xl:text-[1.7rem]  lg:top-40 left-2 sm:left-4 bg-gray-800 text-white text-xs sm:text-sm sm:px-2 sm:py-1 rounded-lg transform -rotate-90 origin-bottom-left">
                  {blog.date}
                </div>
              </motion.div>
              {/* Text Section */}
              <div className="text-center py-4">
                <h3 className="text-xl 2xl:text-[2rem] font-semibold">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm 2xl:text-[1rem] mt-1">
                  {blog.description}
                </p>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(blog.link);
                  }}
                  className="mt-4 px-4 py-2 bg-gray-800 2xl:text-[1rem] rounded-lg text-sm"
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
