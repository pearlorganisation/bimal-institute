// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import Img1 from "../../assets/lab/lb1.webp";
// import Img2 from "../../assets/lab/lb2.webp";
// import Img3 from "../../assets/lab/lb3.webp";
// import Img4 from "../../assets/lab/lb4.webp";
// import Img5 from "../../assets/lab/lb5.webp";
// import Img6 from "../../assets/lab/lb6.webp";
// import Img7 from "../../assets/lab/lb7.webp";
// import Img8 from "../../assets/lab/lb8.webp";
// import Img9 from "../../assets/lab/lb9.webp";
// import Img10 from "../../assets/lab/lb10.webp";
// import Img11 from "../../assets/lab/lb11.webp";
// import Img12 from "../../assets/lab/lb12.webp";
// import Img13 from "../../assets/lab/lb13.webp";
// import Img14 from "../../assets/lab/lb14.webp";
// import Img15 from "../../assets/lab/lb15.webp";
// import Img16 from "../../assets/lab/lb16.webp";
// import Img17 from "../../assets/lab/lb17.webp";
// import Img18 from "../../assets/lab/lb18.webp";
// import Img19 from "../../assets/lab/lb19.webp";
// import Img20 from "../../assets/lab/lb20.webp";
// import Img21 from "../../assets/lab/lb21.webp";
// import Img22 from "../../assets/lab/lb22.webp";
// import Img23 from "../../assets/lab/lb23.webp";
// import Img24 from "../../assets/lab/lb24.webp";

// const images = [
//   Img1,
//   Img2,
//   Img3,
//   Img4,
//   Img5,
//   Img6,
//   Img7,
//   Img8,
//   Img9,
//   Img10,
//   Img11,
//   Img12,
//   Img13,
//   Img14,
//   Img15,
//   Img16,
//   Img17,
//   Img18,
//   Img19,
//   Img20,
//   Img21,
//   Img22,
//   Img23,
//   Img24,
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setSelectedImage(null);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <div className="flex flex-col items-center py-10">
//       <div className="text-center py-16">
//         <div className="flex justify-center items-end">
//           <h2
//             className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
//             style={{ fontFamily: "'League Spartan', sans-serif" }}
//           >
//             LIFE
//           </h2>
//           <p
//             className="text-gray-300 text-sm md:text-lg pl-3 font-medium tracking-widest"
//             style={{ fontFamily: "'Merriweather', serif" }}
//           >
//             at Bimal Institute
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[80%] mx-auto">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg group"
//           >
//             <img
//               src={src}
//               alt={`Gallery Image ${index + 1}`}
//               loading="lazy"
//               className="w-full h-60 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
//               onClick={() => setSelectedImage(src)}
//             />
//           </div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative p-4 max-w-4xl mx-auto"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-500"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 &times;
//               </button>
//               <img
//                 src={selectedImage}
//                 alt="Enlarged view"
//                 className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Gallery;

// import React, { useState, useEffect } from "react";
// import Img1 from "../../assets/lab/lb1.webp";
// import Img2 from "../../assets/lab/lb2.webp";
// import Img3 from "../../assets/lab/lb3.webp";
// import Img4 from "../../assets/lab/lb4.webp";
// import Img5 from "../../assets/lab/lb5.webp";
// import Img6 from "../../assets/lab/lb6.webp";
// import Img7 from "../../assets/lab/lb7.webp";
// import Img8 from "../../assets/lab/lb8.webp";
// import Img9 from "../../assets/lab/lb9.webp";
// import Img10 from "../../assets/lab/lb10.webp";
// import Img11 from "../../assets/lab/lb11.webp";
// import Img12 from "../../assets/lab/lb12.webp";
// import Img13 from "../../assets/lab/lb13.webp";
// import Img14 from "../../assets/lab/lb14.webp";
// import Img15 from "../../assets/lab/lb15.webp";
// import Img16 from "../../assets/lab/lb16.webp";
// import Img17 from "../../assets/lab/lb17.webp";
// import Img18 from "../../assets/lab/lb18.webp";
// import Img19 from "../../assets/lab/lb19.webp";
// import Img20 from "../../assets/lab/lb20.webp";
// import Img21 from "../../assets/lab/lb21.webp";
// import Img22 from "../../assets/lab/lb22.webp";
// import Img23 from "../../assets/lab/lb23.webp";
// import Img24 from "../../assets/lab/lb24.webp";

// const allImages = [
//   Img1,
//   Img2,
//   Img3,
//   Img4,
//   Img5,
//   Img6,
//   Img7,
//   Img8,
//   Img9,
//   Img10,
//   Img11,
//   Img12,
//   Img13,
//   Img14,
//   Img15,
//   Img16,
//   Img17,
//   Img18,
//   Img19,
//   Img20,
//   Img21,
//   Img22,
//   Img23,
//   Img24,
// ];

// const Gallery = () => {
//   const [visibleImages, setVisibleImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   // Load initial images and progressively preload the rest
//   useEffect(() => {
//     setVisibleImages(allImages.slice(0, 24)); // Initial batch
//     let i = 12;

//     const preloadNext = () => {
//       if (i < allImages.length) {
//         const img = new Image();
//         img.src = allImages[i];
//         img.onload = () => {
//           setVisibleImages((prev) => [...prev, allImages[i]]);
//           i++;
//           setTimeout(preloadNext, 150); // Adjust delay as needed
//         };
//       }
//     };

//     preloadNext();
//   }, []);

//   const closeModal = () => setSelectedImage(null);

//   return (
//     <div className="flex flex-col items-center py-10">
//       <div className="text-center py-16">
//         <div className="flex justify-center items-center text-left">
//           <h2
//             className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#4da3ff] via-[#298df7] to-[#007afb] text-transparent bg-clip-text"
//             style={{ fontFamily: "'League Spartan', sans-serif" }}
//           >
//             LIFE
//           </h2>
//           <p
//             className="text-gray-300 text-left text-sm md:text-lg mt-[0.5rem] pl-3 font-medium tracking-widest"
//             style={{ fontFamily: "'Merriweather', serif" }}
//           >
//             at Bimal Institute
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[80%] mx-auto">
//         {visibleImages.map((src, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg group"
//           >
//             <img
//               src={src}
//               alt={`Gallery Image ${index + 1}`}
//               className="w-full h-60 object-cover cursor-pointer"
//               onClick={() => setSelectedImage(src)}
//             />
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div className="relative p-4 max-w-4xl mx-auto">
//             <button
//               className="absolute top-2 right-4 text-white text-3xl font-bold hover:text-red-500"
//               onClick={closeModal}
//             >
//               &times;
//             </button>
//             <img
//               src={selectedImage}
//               alt="Enlarged"
//               className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
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

const allImages = [
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
];

const GalleryImage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-lg shadow-lg group"
    >
      {inView && (
        <img
          src={src}
          alt="Gallery"
          onLoad={() => setLoaded(true)}
          loading="lazy"
          className={`w-full h-60 object-cover cursor-pointer transition-opacity duration-700 ease-in-out ${
            loaded
              ? "opacity-100 blur-0"
              : "opacity-10 blur-sm border-2 border-red-400"
          }`}
        />
      )}
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        {allImages.map((src, index) => (
          <div key={index} onClick={() => setSelectedImage(src)}>
            <GalleryImage src={src} />
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
