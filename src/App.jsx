import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Heart, Users, Trophy, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Menu } from 'lucide-react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import DonationPage from './components/DonationPage';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Hero/>} />
        
        <Route path="/about" element={
          <>
          <Navbar/><AboutUs/><Footer/>
          </>} />
        
        <Route path="/contact" element={
          <>
          <Navbar/>
          <ContactPage/>
          <Footer/>
          </>
        } />
        <Route path="/donate" element={
          <>
          <Navbar/>
          <DonationPage/>
          <Footer/>
          </>
        } />
      </Routes>
    </Router>
    </>
  );
};

export default App;