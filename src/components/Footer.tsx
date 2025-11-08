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
import { BsGrid3X3GapFill } from 'react-icons/bs';

export function Footer() {
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
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 py-16">
      {/* Glowing background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Main container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Logo section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 mb-4">
            <BsGrid3X3GapFill className="w-7 h-7" />
          </div>
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-2">
            RRHH Portal
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            Potenciando la gestión de tu equipo con tecnología moderna, diseño humano y datos inteligentes.
          </p>
        </motion.div>

        {/* Neon link ring */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl animate-pulse" />
          <ul className="flex flex-wrap justify-center gap-6 px-8 py-6 backdrop-blur-xl border border-gray-800/60 rounded-full bg-gray-900/50 shadow-inner">
            {links.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1 }}
                className="text-sm font-medium cursor-pointer"
              >
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, y: -4 }}
              className="w-11 h-11 bg-gray-800/70 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-md hover:shadow-blue-600/40 transition-all duration-300 cursor-pointer"
            >
              <social.icon className="w-4 h-4 text-white" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact info in line */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl text-sm mb-12">
          {[
            { icon: FaEnvelope, text: 'contacto@rrhhportal.es' },
            { icon: FaPhone, text: '+34 900 123 456' },
            { icon: FaMapMarkerAlt, text: 'Madrid, España' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="flex items-center justify-center gap-2 text-gray-400"
            >
              <div className="w-8 h-8 bg-blue-600/70 rounded-lg flex items-center justify-center">
                <item.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider + Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-800/80 w-full text-center pt-8"
        >
          <p className="text-xs text-gray-500 tracking-wide">
            © 2025 RRHH Portal · Diseñado con ❤️ y tecnología en España
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
