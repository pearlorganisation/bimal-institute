import React, { useEffect } from "react";

function Download() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Quicksand:wght@681&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <div className="text-center w-[80%] mx-auto pt-16">
      <h2
        className="text-3xl font-semibold mb-6"
        style={{
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        Download Brochure
      </h2>
      <a
        href="/assets/test.pdf" // Make sure the path is correct
        download="Bimal_Institute_Brochure.pdf"
        className="inline-block cursor-pointer bg-[#1c1d20] text-white px-8 py-2 rounded-2xl font-[Dancing Script] tracking-widest hover:bg-gray-600 transition"
      >
        Click Here for Download Brochure
      </a>
    </div>
  );
}

export default Download;
