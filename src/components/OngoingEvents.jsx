import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Blood Donation Camp",
    image:
      "https://mgmhealthcare.in/wp-content/uploads/2022/06/Amazing-things-that-happen-to-your-body-when-you-donate-blood-big-1.jpg",
    description:
      "Join us for our monthly blood donation drive. Every drop counts! Together we can save lives and make a difference in our community.",
    date: "24th Feb 2025",
    location: "IIITM Campus",
  },
  {
    id: 2,
    title: "Educational Workshop",
    image:
      "https://cdn.prod.website-files.com/6284b6718db6e6a221b3f55a/62ea33c5c69f445885ff9e68_what-is-a-workshop.jpg",
    description:
      "Free educational workshop for underprivileged children. Help us empower the next generation through knowledge and skills.",
    date: "1st March 2025",
    location: "Community Center",
  },
  {
    id: 3,
    title: "Tree Plantation Drive",
    image:
      "https://ius-sdb.com/wp-content/uploads/2023/07/IND-dbcPune-001-1.jpg",
    description:
      "Let's make our planet greener! Join our massive tree plantation campaign and contribute to environmental sustainability.",
    date: "5th March 2025",
    location: "City Park",
  },
];

const OngoingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-12">
      <div className="relative w-full mx-auto max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-extrabold text-center text-gray-800"
        >
          🌟 Ongoing Events
        </motion.h2>

        {/* Event Wrapper */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-4 transition -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-8 h-8 text-gray-800" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-4 transition -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-gray-100"
          >
            <ChevronRight className="w-8 h-8 text-gray-800" />
          </button>

          {/* Event Card */}
          <div className="relative w-full max-w-5xl overflow-hidden bg-white shadow-xl rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Event Image */}
                <div className="relative h-[500px] w-full">
                  <img
                    src={events[currentIndex].image}
                    alt={events[currentIndex].title}
                    className="object-cover w-full h-full rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-xl" />
                </div>

                {/* Event Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-2 text-3xl font-bold"
                  >
                    {events[currentIndex].title}
                  </motion.h3>
                  <p className="max-w-2xl mb-4 text-lg leading-relaxed">
                    {events[currentIndex].description}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="px-3 py-1 rounded-md bg-gray-800/70">
                      📅 {events[currentIndex].date}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-gray-800/70">
                      📍 {events[currentIndex].location}
                    </span>
                  </div>
                  <button className="px-6 py-3 mt-2 font-semibold text-black transition-all bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500">
                    Take Part
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-blue-600 w-10 h-3 rounded-lg"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingEvents;
