import React, { useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const INDIA_TOPOJSON =
  "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@dc5d493/geojson/india.geojson";

const markers = [
  { name: "Andhra Pradesh", coordinates: [79.74, 15.9129] },
  { name: "Arunachal Pradesh", coordinates: [94.7278, 28.1004] },
  { name: "Assam", coordinates: [92.9376, 26.2006] },
  { name: "Bihar", coordinates: [86.3131, 25.5961] },
  { name: "Chhattisgarh", coordinates: [81.8661, 21.2787] },
  // { name: "Goa", coordinates: [74.124, 15.2993] },
  { name: "Gujarat", coordinates: [71.1924, 22.2587] },
  { name: "Haryana", coordinates: [76.4856, 29.0588] },
  { name: "Himachal Pradesh", coordinates: [77.5712, 31.9048] },
  { name: "Jharkhand", coordinates: [85.2799, 23.6102] },
  { name: "Karnataka", coordinates: [75.7139, 15.3173] },
  // { name: "Kerala", coordinates: [76.2711, 10.8505] },
  { name: "Madhya Pradesh", coordinates: [78.6569, 23.2599] },
  { name: "Maharashtra", coordinates: [74.8567, 19.6515] },
  { name: "Manipur", coordinates: [93.9063, 24.4637] },
  // { name: "Meghalaya", coordinates: [91.3662, 25.467] },
  // { name: "Mizoram", coordinates: [92.9376, 23.1645] },
  // { name: "Nagaland", coordinates: [94.5624, 26.1584] },
  { name: "Odisha", coordinates: [85.0985, 20.9517] },
  { name: "Punjab", coordinates: [75.6573, 30.8471] },
  { name: "Rajasthan", coordinates: [73.8478, 27.0238] },
  // { name: "Sikkim", coordinates: [88.5122, 27.533] },
  { name: "Tamil Nadu", coordinates: [78.6569, 11.1271] },
  { name: "Telangana", coordinates: [79.0193, 18.1124] },
  // { name: "Tripura", coordinates: [91.9882, 23.9408] },
  { name: "Uttar Pradesh", coordinates: [80.9462, 26.8467] },
  { name: "Uttarakhand", coordinates: [79.3193, 30.0668] },
  { name: "West Bengal", coordinates: [88.0639, 22.8726] },
  { name: "Jammu and Kashmir", coordinates: [76.9762, 34.2996] },
  // { name: "Ladakh", coordinates: [77.577, 34.1526] },
];

const IndiaMap = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Quicksand:wght@681&family=League+Spartan:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row text-white pb-12 w-[100%] sm:w-[80%] 3xl:w-[75%] mx-auto">
      {/* Left Section */}
      <div className="lg:w-[50%] w-full flex items-center justify-center mb-10 ml-4 lg:mb-0">
        <div className="text-center md:text-left px-6 md:px-0  xl:pl-2 2xl:pl-12 lg:pl-10">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl lg:text-5xl xl:text-[3.3rem] 2xl:text-[3.9rem] font-semibold mb-4 leading-snug"
            style={{ fontFamily: "'League Spartan', sans-serif" }}
          >
            Which <br className=" pb-1" />
            state of <br className="pt-1" />
            India <br className="pt-1" />
            do our <br className="pt-1" />
            Students <br className="pt-1" />
            come from?
          </motion.h2>
        </div>
      </div>

      {/* Right Section (Map) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:[w-50%]"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1050, // Adjust scale for smaller screens
            center: [78.9629, 23.5937],
          }}
          // className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh]" // Dynamic height adjustment
          className="w-full" // Dynamic height adjustment
        >
          {/* Geographies */}
          <Geographies geography={INDIA_TOPOJSON}>
            {({ geographies }) =>
              geographies
                .filter(
                  (geo) =>
                    geo.properties.st_nm !== "Andaman and Nicobar Islands" &&
                    geo.properties.st_nm !== "Lakshadweep"
                )
                .map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#131313",
                        stroke: "#ece7e7",
                        strokeWidth: 0.4,
                      },
                      hover: {
                        stroke: "#0980ff",
                        strokeWidth: 0.9,
                      },
                      pressed: {
                        fill: "transparent",
                        stroke: "#0980ff",
                        strokeWidth: 1.2,
                      },
                    }}
                  />
                ))
            }
          </Geographies>

          {/* Markers */}
          {markers.map(({ name, coordinates }, index) => (
            <Marker key={index} coordinates={coordinates}>
              <image
                href={Logo}
                width={25}
                height={25}
                x="-15"
                y="-15"
                style={{
                  animation: "blink 2s infinite",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              />
            </Marker>
          ))}
        </ComposableMap>
      </motion.div>

      {/* Blinking Effect */}
      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IndiaMap;
