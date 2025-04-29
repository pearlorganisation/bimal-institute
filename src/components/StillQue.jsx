import React, { useEffect } from "react";

function StillQue() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <>
      <div className="bg-[#10171a] text-white py-12 my-4 w-[80%] mx-auto  rounded-3xl text-center ">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          Still Have Questions?
        </h2>
        <p
          className="mb-6 text-white"
          style={{
            fontFamily: "'Afacad', sans-serif",
          }}
        >
          Can't find the answer you're looking for? Please chat with our
          friendly team.
        </p>
        <button
          className="bg-white text-black px-8 py-2 text-lg rounded-full font-medium hover:bg-gray-200"
          style={{
            fontFamily: "'Afacad', sans-serif",
          }}
        >
          <a href="https://wa.me/918889890298" target="_blank">
            Get in Touch
          </a>
        </button>
      </div>
    </>
  );
}

export default StillQue;
