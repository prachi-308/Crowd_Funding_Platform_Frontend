import React from 'react'
import { Heart, Users, Trophy, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Menu } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
         <div className="max-w-7xl mx-auto px-4">
           <div className="grid md:grid-cols-4 gap-8">
             <div>
               <h3 className="text-xl font-semibold mb-4">About Rotaract IIITM</h3>
               <p className="text-gray-400">Empowering communities through innovative solutions and dedicated service.</p>
             </div>
             
             <div>
               <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
               <ul className="space-y-2 text-gray-400">
                 <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
               </ul>
             </div>
             
             <div>
               <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
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
               <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
               <div className="flex space-x-4">
                 <a href="#" className="hover:text-blue-400 transition-colors">
                   <Facebook size={24} />
                 </a>
                 <a href="#" className="hover:text-blue-400 transition-colors">
                   <Twitter size={24} />
                 </a>
                 <a href="#" className="hover:text-blue-400 transition-colors">
                   <Instagram size={24} />
                 </a>
               </div>
             </div>
           </div>
           
           <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
             <p>&copy; {new Date().getFullYear()} Rotaract IIITM. All rights reserved.</p>
           </div>
         </div>
       </footer>
  )
}

export default Footer