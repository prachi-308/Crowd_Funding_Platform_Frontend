import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background-holdTogether.jpg"; // Import the image

export default function HopeSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }} // Smooth fade-in & zoom-in
      >
        {/* Dark Overlay */}
        <motion.div
          className="absolute inset-0 bg-blue-900 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }} // Fades in overlay
        ></motion.div>
      </motion.div>

      {/* Animated Text Content */}
      <motion.div
        className="relative z-10 px-6 text-center text-white md:px-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} // Text slides up
      >
        <h2 className="mb-4 text-4xl font-bold tracking-wide md:text-5xl">
          WE ALWAYS SEE HOPE
        </h2>
        <p className="text-lg italic md:text-xl">
          <span className="text-3xl text-yellow-400">“</span>
          To contribute to the structural improvement of the health of
          disadvantaged groups in South East Asia
          <span className="text-3xl text-yellow-400">”</span>
        </p>
      </motion.div>
    </section>
  );
}
