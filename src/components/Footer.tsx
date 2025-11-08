import { motion } from 'motion/react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useTheme } from './ui/themeMode'; // 👈 tu hook global
import { BsGrid3X3GapFill } from 'react-icons/bs';

export function Footer() {
  const { theme } = useTheme(); // Obtener el tema global

  const isDarkMode = theme === 'dark';

  // Variables de colores
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const subTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const accentColor = 'text-blue-700'; // Azul fuerte para resaltar
  const buttonColor = isDarkMode ? 'bg-blue-600' : 'bg-blue-500';
  const inputBgColor = isDarkMode ? 'bg-gray-900/70' : 'bg-gray-100/90';
  const inputBorderColor = isDarkMode ? 'border-gray-700/60' : 'border-gray-300/60';
  const inputFocusColor = 'focus:ring-blue-600 focus:border-blue-600';
  const inputTextColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';

  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' }
  ];

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Características', href: '#features' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Privacidad', href: '#' },
    { name: 'Términos', href: '#' }
  ];

  return (
    <footer className={`py-16 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`w-16 h-16 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} rounded-full flex items-center justify-center mb-4 shadow-md`}
          >
            <BsGrid3X3GapFill className="w-7 h-7 text-white" />
          </motion.div>
          <h2 className="text-3xl font-semibold mb-2">RRHH Portal</h2>
          <p className={`text-sm ${subTextColor} max-w-md`}>
            Potenciando la gestión de tu equipo con tecnología moderna, diseño humano y datos inteligentes.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {links.map((link, i) => (
              <motion.li key={i} whileHover={{ scale: 1.1 }} className="cursor-pointer">
                <a
                  href={link.href}
                  className={`transition-all duration-300 ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -4 }}
              className={`w-10 h-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <social.icon
                className={`w-5 h-5 ${isDarkMode ? 'text-white' : 'text-blue-700'}`}
              />
            </motion.a>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-sm">
          {[
            { icon: FaEnvelope, text: 'contacto@rrhhportal.es' },
            { icon: FaPhone, text: '+34 900 123 456' },
            { icon: FaMapMarkerAlt, text: 'Madrid, España' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className={`flex items-center justify-center gap-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            >
              <div className={`w-8 h-8 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} rounded-full flex items-center justify-center`}>
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>


        {/* Divider and Copyright */}
        <div className="border-t border-gray-800/20 mt-12 pt-6 text-center">
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} tracking-wide`}>
            © 2025 RRHH Portal · Diseñado con ❤️ y tecnología en España
          </p>
        </div>
      </div>
    </footer>
  );
}
