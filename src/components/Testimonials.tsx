"use client";

import { useTheme } from "./ui/themeMode"; // 👈 tu hook global
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { motion } from 'motion/react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export function Testimonials() {
  const { theme } = useTheme(); // Obtener el tema actual

  // Definir constantes según el tema
  const isDarkMode = theme === "dark";

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const accentColor = isDarkMode ? "text-blue-600" : "text-blue-700"; // Cambié el azul para hacerlo más suave en modo claro
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300"; // Color del borde de las tarjetas

  const cardBg = isDarkMode ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200";
  const cardText = isDarkMode ? "text-gray-300" : "text-gray-700";

  const hoverCardBg = isDarkMode ? "hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20" : "hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10";

  const testimonials = [
    {
      name: 'Carlos Martínez',
      role: 'Director de RRHH',
      company: 'TechCorp SL',
      content:
        'Desde que implementamos este sistema, hemos reducido el tiempo de gestión de nóminas en un 70%. Absolutamente recomendable.',
      rating: 5,
      avatar: 'CM',
    },
    {
      name: 'Laura Sánchez',
      role: 'CEO',
      company: 'Innovate Partners',
      content:
        'La mejor inversión que hemos hecho. Nuestros empleados aman la app móvil y el proceso de solicitar vacaciones es ahora muy simple.',
      rating: 5,
      avatar: 'LS',
    },
    {
      name: 'Miguel Rodríguez',
      role: 'Gerente de Operaciones',
      company: 'Retail Plus',
      content:
        'Gestionar turnos de 200 empleados nunca fue tan fácil. El soporte técnico es excepcional, siempre están disponibles.',
      rating: 5,
      avatar: 'MR',
    },
    {
      name: 'Ana López',
      role: 'Responsable de Talento',
      company: 'Creative Studio',
      content:
        'Los reportes y análisis nos han ayudado a identificar patrones de productividad. Una herramienta imprescindible.',
      rating: 5,
      avatar: 'AL',
    },
    {
      name: 'David García',
      role: 'Fundador',
      company: 'StartUp Lab',
      content:
        'Como startup necesitábamos algo simple pero potente. Este sistema cumple con todo y el precio es muy competitivo.',
      rating: 5,
      avatar: 'DG',
    },
    {
      name: 'Isabel Torres',
      role: 'Directora Administrativa',
      company: 'Consulting Group',
      content:
        'La integración con nuestras otras herramientas fue perfecta. Ahorramos horas cada semana en tareas administrativas.',
      rating: 5,
      avatar: 'IT',
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 md:py-32 relative overflow-hidden ${bgColor}`} // Fondo adaptado según el tema
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center max-w-3xl mx-auto mb-16 ${textColor}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Más de 10,000 empresas confían en nosotros
          </h2>
          <p className={`text-xl ${subTextColor}`}>
            Descubre por qué somos la opción #1 para la gestión de RRHH
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`h-full ${cardBg} border ${borderColor} rounded-2xl hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 ${isDarkMode ? 'bg-blue-600/80' : 'bg-blue-500/80'} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <FaQuoteLeft className="w-6 h-6 text-white/90" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className={`text-gray-300 mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    “{testimonial.content}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-700/60">
                    <Avatar className={`w-12 h-12 ${isDarkMode ? 'bg-blue-600/80' : 'bg-blue-500/80'} text-white font-semibold`}>
                      <AvatarFallback className="bg-transparent text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className={`text-sm text-gray-100 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
