import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

import { Heart, Users, Trophy, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Menu } from 'lucide-react';
import Navbar from './Navbar';
import OngoingEvents from './OngoingEvents';
import HopeSection from './HopeSection';
import FundraisingSection from './FundraisingSection';
import LatestNews from './LatestNews';
const Hero = () => {
   const { scrollYProgress } = useScroll();
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const images = [
    "/image.png",
    "https://st3.depositphotos.com/7813332/12718/i/450/depositphotos_127188310-stock-photo-portrait-of-happy-kids-outdoor.jpg",
    "https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/142875012_4213934451963824_4908626115809418460_o-1024x768.jpg",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww",
    "https://www.atd-fourthworld.org/wp-content/uploads/sites/5/2019/10/Mada-131011-pour-DIANA09-slide-1.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5500);

    return () => clearInterval(timer);
  }, []);
 
   return (
     <div className="min-h-screen bg-gray-50">
      <Navbar/>

       <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600"
    >
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[currentImageIndex]}
            alt={`Background ${currentImageIndex + 1}`}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>


      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full mix-blend-overlay"
        >
          <source src="/api/placeholder/1920/1080" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>

      <div className="absolute z-20 flex gap-2 transform -translate-x-1/2 bottom-8 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-white w-6' 
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-serif text-4xl font-extrabold text-white md:text-6xl"
        >
          ROTARACT IIITM
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 font-mono text-xl text-white md:text-2xl"
        >
          You Bestow, We Deliver
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            variant="default"
            onClick={() => window.location.href = "/donate"}
            className="relative flex items-center gap-2 px-8 py-4 text-lg font-semibold text-blue-600 transition-all bg-white border-2 border-transparent rounded-full hover:cursor-pointer hover:text-red-600 hover:border-red-600"
          >
            <span className="absolute inset-0 transition-all duration-300 border-2 border-transparent rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-transparent hover:border-red-600" />
            <span className="relative z-10 px-2 text-white transition-all duration-300 hover:text-red-600">
              <Heart className="inline-block w-6 h-6" /> Donate Now
            </span>
          </Button>
        </motion.div>
      </div>
    </motion.div>

    <FundraisingSection/>
       <section className="px-4 py-20 bg-white">
         <motion.div
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="mx-auto max-w-7xl"
         >
           <h2 className="mb-16 text-4xl font-bold text-center">Why Choose Us?</h2>
           <div className="grid gap-8 md:grid-cols-3">
             <div className="p-6 text-center transition-shadow rounded-lg bg-blue-50 hover:shadow-lg">
               <Trophy className="w-12 h-12 mx-auto mb-4 text-blue-600" />
               <h3 className="mb-3 text-xl font-semibold">Proven Impact</h3>
               <p className="text-gray-600">10+ years of successful community projects and counting. Your contribution makes a real difference.</p>
             </div>
             <div className="p-6 text-center transition-shadow rounded-lg bg-purple-50 hover:shadow-lg">
               <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600" />
               <h3 className="mb-3 text-xl font-semibold">100% Transparency</h3>
               <p className="text-gray-600">Regular updates and complete transparency on how your donations are making an impact.</p>
             </div>
             <div className="p-6 text-center transition-shadow rounded-lg bg-green-50 hover:shadow-lg">
               <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
               <h3 className="mb-3 text-xl font-semibold">Strong Community</h3>
               <p className="text-gray-600">Join a vibrant community of changemakers committed to social impact.</p>
             </div>
           </div>
         </motion.div>
       </section>
       
 <HopeSection/>
        <OngoingEvents/>

       <section className="px-4 py-20 bg-gray-50">
         <div className="mx-auto max-w-7xl">
           <motion.div
             initial={{ y: 30, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
             className="mb-12 text-center"
           >
             <h2 className="mb-6 text-5xl font-bold">Become a part of noble cause</h2>
             <p className="max-w-4xl mx-auto text-lg text-gray-600">
             Every child deserves a bright future, but many are deprived of basic necessities like food, education, and healthcare. Your contribution can make a real difference in their lives. Join us in our mission to provide underprivileged children with the care, support, and opportunities they need to thrive.
 
             </p>
           </motion.div>
 
           <motion.div
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative"
           >
             <div className="p-8 text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
               <div className="p-4 overflow-hidden bg-white rounded-lg">
                 <img
                   src="https://media.istockphoto.com/id/522397820/photo/cheerful-children-lying-dawn-on-grass.jpg?s=612x612&w=0&k=20&c=5z9pA1pHpG5jnglB568GYheF9QtRTKrLu6RXkzdkSfE="
                   alt="Children showing strength and unity"
                   className="w-full h-auto rounded-lg"
                 />
               </div>
             </div>
           </motion.div>
         </div>
       </section>
 
       <section className="px-4 py-20 text-white bg-gradient-to-r from-blue-600 to-purple-600">
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="mx-auto text-center max-w-7xl"
         >
           <h2 className="mb-8 text-4xl font-bold">Become a Part of Our Journey</h2>
           <p className="max-w-2xl mx-auto mb-12 text-xl">Join us in making a difference. Whether you're a student, professional, or organization, there's a place for you in our community.</p>
           
           <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="p-8 rounded-lg bg-white/10 backdrop-blur-lg"
             >
               <h3 className="mb-4 text-2xl font-semibold">Volunteer</h3>
               <p className="mb-6">Contribute your time and skills to meaningful projects</p>
               <Button variant="outline" className="text-white bg-transparent border-white hover:bg-white hover:text-blue-600">
                 Join as Volunteer
               </Button>
             </motion.div>
             
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="p-8 rounded-lg bg-white/10 backdrop-blur-lg"
             >
               <h3 className="mb-4 text-2xl font-semibold">Partner</h3>
               <p className="mb-6">Collaborate with us on impactful initiatives</p>
               <Button variant="outline" className="text-white bg-transparent border-white hover:bg-white hover:text-blue-600">
                 Become a Partner
               </Button>
               </motion.div>
           </div>
         </motion.div>
       </section>
 <LatestNews/>
       <footer className="py-12 text-white bg-gray-900">
         <div className="px-4 mx-auto max-w-7xl">
           <div className="grid gap-8 md:grid-cols-4">
             <div>
               <h3 className="mb-4 text-xl font-semibold">About Rotaract IIITM</h3>
               <p className="text-gray-400">Empowering communities through innovative solutions and dedicated service.</p>
             </div>
             
             <div>
               <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
               <ul className="space-y-2 text-gray-400">
                 <li><a href="#" className="transition-colors hover:text-white">Home</a></li>
                 <li><a href="#" className="transition-colors hover:text-white">About Us</a></li>
                 <li><a href="#" className="transition-colors hover:text-white">Projects</a></li>
                 <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
               </ul>
             </div>
             
             <div>
               <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
               <ul className="space-y-2 text-gray-400">
                 <li className="flex items-center gap-2">
                   <Mail size={16} />
                   <span>contact@rotaractiiitm.org</span>
                 </li>
                 <li className="flex items-center gap-2">
                   <Phone size={16} />
                   <span>+91 1234567890</span>
                 </li>
                 <li className="flex items-center gap-2">
                   <MapPin size={16} />
                   <span>IIITM Campus, City</span>
                 </li>
               </ul>
             </div>
             
             <div>
               <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
               <div className="flex space-x-4">
                 <a href="#" className="transition-colors hover:text-blue-400">
                   <Facebook size={24} />
                 </a>
                 <a href="#" className="transition-colors hover:text-blue-400">
                   <Twitter size={24} />
                 </a>
                 <a href="#" className="transition-colors hover:text-blue-400">
                   <Instagram size={24} />
                 </a>
               </div>
             </div>
           </div>
           
           <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
             <p>&copy; {new Date().getFullYear()} Rotaract IIITM. All rights reserved.</p>
           </div>
         </div>
       </footer>
     </div>
   );
 };
 
 export default Hero;