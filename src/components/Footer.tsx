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
  const footerLinks = {
    product: [
      { name: 'Características', href: '#features' },
      { name: 'Precios', href: '#pricing' },
      { name: 'Demo', href: '#' },
      { name: 'App Móvil', href: '#' }
    ],
    company: [
      { name: 'Sobre nosotros', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Contacto', href: '#contact' }
    ],
    resources: [
      { name: 'Centro de ayuda', href: '#' },
      { name: 'Documentación', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Estado del sistema', href: '#' }
    ],
    legal: [
      { name: 'Privacidad', href: '#' },
      { name: 'Términos', href: '#' },
      { name: 'RGPD', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaInstagram, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <BsGrid3X3GapFill className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xl text-white">
                  RRHH Portal
                </div>
                <div className="text-xs text-gray-400">Gestión Inteligente</div>
              </div>
            </motion.div>
            <p className="text-sm mb-6 text-gray-400 leading-relaxed">
              La solución completa para la gestión de recursos humanos de tu empresa. 
              Simplifica, automatiza y optimiza.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white mb-4">Producto</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Recursos</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="w-4 h-4 text-white" />
              </div>
              <span>contacto@rrhhportal.es</span>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhone className="w-4 h-4 text-white" />
              </div>
              <span>+34 900 123 456</span>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="w-4 h-4 text-white" />
              </div>
              <span>Madrid, España</span>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 RRHH Portal. Todos los derechos reservados. Hecho con ❤️ en España
          </p>
        </div>
      </div>
    </footer>
  );
}
