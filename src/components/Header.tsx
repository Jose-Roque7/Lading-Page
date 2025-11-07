"use client"
import { useState } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { HiMenu, HiX, HiLogin } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';
import { BsGrid3X3GapFill } from 'react-icons/bs';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Características', href: '#features' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <BsGrid3X3GapFill className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl text-gray-900">RRHH Portal</div>
              <div className="text-xs text-gray-500">Gestión Inteligente</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost"
              className="hover:text-blue-600"
            >
              <HiLogin className="w-5 h-5 mr-2" />
              Iniciar sesión
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
            >
              <FaRocket className="w-4 h-4 mr-2" />
              Prueba gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 space-y-3">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <Button variant="outline" className="w-full">
                    <HiLogin className="w-5 h-5 mr-2" />
                    Iniciar sesión
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <FaRocket className="w-4 h-4 mr-2" />
                    Prueba gratis
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
