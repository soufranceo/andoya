import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ setLanguage, language }: { setLanguage: (lang: 'tr' | 'en') => void, language: 'tr' | 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    tr: ['Ana Sayfa', 'Odalarımız', 'Hakkımızda', 'Bodrum Rehberi', 'İletişim'],
    en: ['Home', 'Rooms', 'About', 'Bodrum Guide', 'Contact']
  };

  const paths = ['/', '/rooms', '/about', '/guide', '/contact'];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="text-2xl font-medium text-primary tracking-wider font-serif">
              ANDOYA
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems[language].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to={paths[index]}
                  className="text-primary-light hover:text-primary transition-colors text-sm tracking-wide font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="flex items-center text-primary-light hover:text-primary"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {menuItems[language].map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to={paths[index]}
                  className="block py-2 text-primary-light hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              onClick={() => {
                setLanguage(language === 'tr' ? 'en' : 'tr');
                setIsOpen(false);
              }}
              className="flex items-center py-2 text-primary-light hover:text-primary font-medium"
            >
              <Globe className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </motion.button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;