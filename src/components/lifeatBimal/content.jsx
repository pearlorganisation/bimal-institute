import React, { useState } from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/lab/lb1.webp";
import Img2 from "../../assets/lab/lb2.webp";
import Img3 from "../../assets/lab/lb3.webp";
import Img4 from "../../assets/lab/lb4.webp";
import Img5 from "../../assets/lab/lb5.webp";
import Img6 from "../../assets/lab/lb6.webp";
import Img7 from "../../assets/lab/lb7.webp";
import Img8 from "../../assets/lab/lb8.webp";
import Img9 from "../../assets/lab/lb9.webp";
import Img10 from "../../assets/lab/lb10.webp";
import Img11 from "../../assets/lab/lb11.webp";
import Img12 from "../../assets/lab/lb12.webp";
import Img13 from "../../assets/lab/lb13.webp";
import Img14 from "../../assets/lab/lb14.webp";
import Img15 from "../../assets/lab/lb15.webp";
import Img16 from "../../assets/lab/lb16.webp";
import Img17 from "../../assets/lab/lb17.webp";
import Img18 from "../../assets/lab/lb18.webp";
import Img19 from "../../assets/lab/lb19.webp";
import Img20 from "../../assets/lab/lb20.webp";
import Img21 from "../../assets/lab/lb21.webp";
import Img22 from "../../assets/lab/lb22.webp";
import Img23 from "../../assets/lab/lb23.webp";
import Img24 from "../../assets/lab/lb24.webp";
import Img25 from "../../assets/lab/lb25.webp";
import Img26 from "../../assets/lab/lb26.webp";

// const Img1 = "Life at Bi Page/121A9032.JPG";
// const Img2 = "Life at Bi Page/4Y3A1146.JPG";
// const Img3 = "Life at Bi Page/936A4877.JPG";
// const Img4 = "Life at Bi Page/936A4843.JPG";
// const Img5 = "Life at Bi Page/6K1A9078.JPG";
// const Img6 = "Life at Bi Page/6K1A9066.JPG";
// const Img7 = "Life at Bi Page/6K1A8974.JPG";
// const Img8 = "Life at Bi Page/4Y3A1565.JPG";
// const Img9 = "Life at Bi Page/4Y3A1557.JPG";
// const Img10 = "Life at Bi Page/4Y3A1498.JPG";
// const Img11 = "Life at Bi Page/4Y3A1484.JPG";
// const Img12 = "Life at Bi Page/4Y3A1448.JPG";
// const Img13 = "Life at Bi Page/4Y3A1446.JPG";
// const Img14 = "Life at Bi Page/4Y3A1429.JPG";
// const Img15 = "Life at Bi Page/4Y3A1396.JPG";
// const Img16 = "Life at Bi Page/4Y3A1348.JPG";
// const Img17 = "Life at Bi Page/4Y3A1335.JPG";
// const Img18 = "Life at Bi Page/4Y3A1341.JPG";
// const Img19 = "Life at Bi Page/4Y3A1205.JPG";
// const Img20 = "Life at Bi Page/4Y3A1146.JPG";
// const Img21 = "Life at Bi Page/2D9A8307.JPG";
// const Img22 = "Life at Bi Page/2D9A8124.JPG";
// const Img23 = "Life at Bi Page/_WP_9691.JPG";
// const Img24 = "Life at Bi Page/_WP_9706.JPG";
// const Img25 = "Life at Bi Page/_WP_0929.JPG";
// const Img26 = "Life at Bi Page/r5.webp";

const images = [
  // Img26,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
  Img23,
  Img24,
  // Img25,
  // Img7,
  // Img14,
  // Img21,
];

console.log(
  "images  check ====",
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22
  // Img23,
  // Img24,
  // Img25,
  // Img26
);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close the modal when clicking outside or pressing "Esc"
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="flex flex-col items-center py-10">
      {/* Header Section */}
      {/* <div className="text-center py-16">
        <p
          className="text-gray-300 text-center text-sm md:text-base tracking-widest"
          style={{ fontFamily: "'Vibes', serif" }}
        >
          Life at
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Bimal Institute
        </h2>
      </div> */}

      <div className="text-center py-16">
        <div className="flex justify-center items-center text-left">
          <h2
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
            // transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#3195FF] to-[#0940E6] text-transparent bg-clip-text"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            LIFE
          </h2>
          <p
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false, amount: 0.2 }} // Triggers each time it enters the viewport
            // transition={{ duration: 1, ease: "easeOut" }}
            className="text-gray-300 text-left text-sm md:text-lg items-end  mt-[0.5rem] pl-3 font-medium tracking-widest"
            style={{
              fontFamily: "'Merriweather', serif",
            }}
          >
            at Bimal Institute
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[80%] mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform transition duration-300 ease-out group-hover:scale-110 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            /> */}
            <img
              key={index}
              src={src}
              alt={`Image ${index}`}
              className="w-full h-60 cursor-pointer object-cover"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>

      {/* Modal - Enlarged Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div className="relative p-4 max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-500"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Full-Screen Image */}
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
