"use client";

import { useTheme } from "./ui/themeMode"; // 👈 tu hook global
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
      name: 'Lucía Fernández',
      role: 'Encargada de Recursos Humanos',
      company: 'OfiPlus',
      content:
        'Llevamos unas semanas probando el sistema y ya notamos una gran diferencia. El control de asistencia es mucho más claro y fácil de usar.',
      rating: 5,
      avatar: 'LF',
    },
    {
      name: 'Andrés Pérez',
      role: 'Gerente General',
      company: 'ServiTech',
      content:
        'Nos encantó lo intuitiva que es la plataforma. El registro de entradas y salidas funciona perfecto y el equipo de soporte ha sido muy atento.',
      rating: 5,
      avatar: 'AP',
    },
    {
      name: 'María González',
      role: 'Administradora',
      company: 'Grupo Nova',
      content:
        'Estamos en etapa de implementación y el proceso ha sido muy sencillo. La función de nómina automática promete ahorrarnos mucho tiempo.',
      rating: 4,
      avatar: 'MG',
    },
    {
      name: 'José Ramírez',
      role: 'Supervisor de Operaciones',
      company: 'Logística 24',
      content:
        'El sistema de horarios y permisos nos ha ayudado a organizarnos mejor. Todavía lo estamos explorando, pero pinta excelente.',
      rating: 4,
      avatar: 'JR',
    },
    {
      name: 'Elena Torres',
      role: 'Directora Administrativa',
      company: 'Consultoría Atlas',
      content:
        'Probamos la app móvil con algunos empleados y la experiencia fue muy buena. Fácil de usar y con las funciones necesarias.',
      rating: 5,
      avatar: 'ET',
    },
    {
      name: 'Raúl Díaz',
      role: 'Fundador',
      company: 'RH Digital',
      content:
        'Estamos en fase de prueba, pero ya se nota que es una herramienta con mucho potencial. Esperamos ver las próximas actualizaciones.',
      rating: 5,
      avatar: 'RD',
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
            Creciendo junto a empresas innovadoras
          </h2>
          <p className={`text-xl ${subTextColor}`}>
            Cada semana más equipos comienzan a usar nuestro sistema para simplificar su gestión de personal.
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
