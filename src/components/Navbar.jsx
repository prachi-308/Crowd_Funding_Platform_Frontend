import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, Users, Trophy, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-48 h-12">
              <Link to="/">
                <img
                  src="/navImage.png"
                  alt="Logo placeholder"
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  `transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                }
              >
                About Us
              </NavLink>
              <NavLink 
                to="/donate"
                className={({ isActive }) => 
                  `transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                }
              >
                Donate
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  `transition-colors ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                  }`
                }
              >
                Contact
              </NavLink>
              <NavLink 
                to="/donate"
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md ${
                    isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'
                  }`
                }
              >
                Donate
              </NavLink>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;