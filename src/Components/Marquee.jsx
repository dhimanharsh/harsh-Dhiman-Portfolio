import React from "react";
import { motion } from "framer-motion";

export default function Marquee() {
  const upperMarquee = [
    "/react.svg",
    "/bootstrap.svg",
    "/css-3-svgrepo-com.svg",
    "/express.svg",
    "/html-5-svgrepo-com.svg",
    "/nodejs-icon-svgrepo-com.svg",
    "/tailwind.svg",
    "mongodb-logo-svgrepo-com.svg",
    "js-svgrepo-com.svg"

    
  ];

  return (
    <div className="container mx-auto">
      <div className="overflow-hidden border">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex"
        >
          {upperMarquee.concat(upperMarquee).map((image, index) => (
            <img className="h-40 w-56 p-12" src={image} key={index} alt="" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
