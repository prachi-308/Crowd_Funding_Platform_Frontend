import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import img1 from "../assets/3-2-1024x576.png";
import img2 from "../assets/crowdfunding-featured5.jpg";

export default function FundraisingSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center w-full px-6 py-16 md:px-16 lg:px-32 bg-gray-50"
    >
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
        
        {/* Left: Images */}
        <motion.div
          className="flex gap-4 md:gap-8 lg:gap-12"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 md:gap-6">
            <img
              src={img1}
              alt="Donation Hands"
              className="w-40 h-56 sm:w-52 sm:h-72 md:w-64 md:h-96 lg:w-80 lg:h-[550px] rounded-2xl shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <img
              src={img2}
              alt="Fundraising"
              className="w-40 h-56 sm:w-52 sm:h-72 md:w-64 md:h-96 lg:w-80 lg:h-[500px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="max-w-[600px] text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            We are the <span className="text-green-600">Powerful</span>, Free Fundraising Platform
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl md:text-2xl">
            Amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.
          </p>

          <ul className="mt-6 space-y-4 text-lg font-medium text-gray-800 sm:text-xl md:text-2xl">
            <li className="flex items-center gap-3"> ✅ <span>Start your campaigns</span> </li>
            <li className="flex items-center gap-3"> ✅ <span>Share with friends</span> </li>
            <li className="flex items-center gap-3"> ✅ <span>Manage Donations</span> </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
