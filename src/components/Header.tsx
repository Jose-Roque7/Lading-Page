"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { HiMenu, HiX, HiLogin, HiSun, HiMoon } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useIsMobile } from "./ui/use-mobile";
import { useTheme } from "./ui/themeMode";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Características", href: "#features" },
    { name: "Precios", href: "#pricing" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b shadow-md transition-colors duration-300
        ${theme === "dark"
          ? "bg-gray-900 text-white border-gray-800" // Fondo oscuro intenso pero no negro puro
          : "bg-white text-gray-900 border-gray-200"
        }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <BsGrid3X3GapFill className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-semibold">RRHH Portal</div>
              <div className="text-xs text-blue-600">Gestión Inteligente</div>
            </div>
          </motion.div>

          {/* Desktop nav */}
          {!isMobile && (
            <>
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`relative group transition-colors
                      ${theme === "dark"
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-3">
                <motion.a
                  href="#"
                  className={`flex items-center relative group transition-colors
                    ${theme === "dark"
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiLogin className="w-5 h-5 mr-2" /> Iniciar sesión
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
                <a href="#pricing">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg cursor-pointer">
                    <FaRocket className="w-4 h-4 mr-2" /> Iniciar ahora
                  </Button>
                </a>
                {/* Botón para alternar tema global */}
                <button
                  onClick={toggleTheme}
                  className="cursor-pointer ml-3 p-2 rounded-md transition-colors"
                  aria-label="Alternar tema claro/oscuro"
                >
                  {theme === "light"
                    ? <HiMoon className="w-5 h-5" />
                    : <HiSun className="w-5 h-5" />}
                </button>
              </div>
            </>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${theme === "dark" ? "text-white hover:text-blue-400" : "text-gray-900 hover:text-blue-600"
                  }`}
              >
                {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </Button>
            </div>
          )}
        </div>

        {/* Mobile nav list */}
        {isMobile && (
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`lg:hidden overflow-hidden transition-colors duration-300
                  ${theme === "dark"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"}`}
              >
                <div className="mt-4 pb-4 space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className={`block py-2 transition-colors
                        ${theme === "dark"
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-700 hover:text-blue-600"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.a
                    onClick={toggleTheme}
                    className={`block py-2 cursor-pointer transition-colors
                      ${theme === "dark"
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (navLinks.length + 1) * 0.1 }}
                  >
                    {theme === "light" ? "Modo oscuro" : "Modo claro"}
                  </motion.a>
                  <motion.a
                    href="#"
                    className={`flex items-center block py-2 transition-colors cursor-pointer
                      ${theme === "dark"
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <HiLogin className="w-5 h-5 mr-2" /> Iniciar sesión
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>
    </motion.header>
  );
}
