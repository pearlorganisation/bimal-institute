import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const allImages = [
  "/lab/lb1.webp",
  "/lab/lb2.webp",
  "/lab/lb3.webp",
  "/lab/lb4.webp",
  "/lab/lb5.webp",
  "/lab/lb6.webp",
  "/lab/lb7.webp",
  "/lab/lb8.webp",
  "/lab/lb9.webp",
  "/lab/lb10.webp",
  "/lab/lb11.webp",
  "/lab/lb12.webp",
  "/lab/lb13.webp",
  "/lab/lb14.webp",
  "/lab/lb15.webp",
  "/lab/lb16.webp",
  "/lab/lb17.webp",
  "/lab/lb18.webp",
  "/lab/lb19.webp",
  "/lab/lb20.webp",
  "/lab/lb21.webp",
  "/lab/lb22.webp",
  "/lab/lb23.webp",
  "/lab/lb24.webp",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [loaded, setLoaded] = useState(false);

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="flex flex-col items-center py-10">
      <div className="text-center py-16">
        <div className="flex justify-center items-center text-left">
          <h2
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            LIFE
          </h2>
          <p
            className="text-gray-300 text-left text-sm md:text-lg mt-[0.5rem] pl-3 font-medium tracking-widest"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            at Bimal Institute
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[80%] mx-auto">
        {allImages?.map((src, index) => (
          <div key={index} onClick={() => setSelectedImage(src)}>
            <LazyLoadImage
              src={src}
              width={"350px"}
              height={"280px"}
              alt="Gallery"
              effect="blur"
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: { transitionDelay: "0.2s" },
              }}
              className={`w-full h-60 object-cover cursor-pointer`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative p-4 max-w-4xl mx-auto">
            <button
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              loading="lazy"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
