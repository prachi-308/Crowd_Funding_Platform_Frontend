import React, { useState } from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    date: "FEB 20, 2025",
    title: "Community Raises $500K for Local School Renovation",
    image: "/src/assets/OIP.jpeg",
    content: "A local crowdfunding campaign successfully raised over $500K to renovate a public school, proving the power of community-driven initiatives.",
  },
  {
    date: "FEB 18, 2025",
    title: "Medical Fundraiser Helps Cover Life-Saving Surgery Costs",
    image: "/src/assets/ca485001-c197-4b3b-91cf-834a5edebc16.jpeg",
    content: "Thousands of donors came together to support a family in need, raising funds for an urgent medical procedure through crowdfunding.",
  },
  {
    date: "FEB 15, 2025",
    title: "Nonprofit Uses Crowdfunding to Provide Clean Water Access",
    image: "/src/assets/7ec94533-4af8-4472-ad78-dfd8a3dfc74e.jpg",
    content: "A nonprofit organization successfully raised enough funds to build new water wells in remote villages, bringing clean water to hundreds.",
  },
];

// Default main news before clicking anything
const defaultMainNews = {
  date: "FEB 22, 2025",
  title: "Crowdfunding Campaign Saves Local Charity from Closure",
  image: "/src/assets/OIP (1).jpeg",
  content: "A struggling charity found hope through crowdfunding, raising enough money to continue supporting underprivileged families.",
};

export default function LatestNews() {
  const [mainNews, setMainNews] = useState(defaultMainNews);

  const updateMainNews = (news) => {
    setMainNews(news);
  };

  return (
    <section className="bg-[#F5F3EB] py-16 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <motion.h2
          className="mb-12 text-3xl font-bold text-center md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Latest Crowdfunding News
        </motion.h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12">
          
          {/* Left Side: Main News */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={mainNews.image}
              alt={mainNews.title}
              className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-white rounded-b-xl">
              <p className="text-sm tracking-widest text-gray-600 uppercase">
                NEWS | {mainNews.date}
              </p>
              <h2 className="mt-2 text-2xl font-bold md:text-4xl">
                {mainNews.title}
              </h2>
              <p className="mt-2 text-gray-600">{mainNews.content}</p>
              <button className="px-6 py-3 mt-4 font-semibold text-black transition-all bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500">
                READ MORE
              </button>
            </div>
          </motion.div>

          {/* Right Side: News List */}
          <motion.div
            className="bg-[#EDE7DA] p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {newsData.map((news, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 mb-6 transition-all cursor-pointer hover:scale-105"
                whileHover={{ scale: 1.05 }}
                onClick={() => updateMainNews(news)}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="object-cover w-24 h-24 rounded-lg"
                  />
                  <div>
                    <p className="text-xs text-gray-500 uppercase">{news.date}</p>
                    <h3 className="text-lg font-semibold leading-tight">
                      {news.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
