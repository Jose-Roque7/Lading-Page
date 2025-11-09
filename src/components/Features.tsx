"use client";

import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import {
  FaClock,
  FaCalendarAlt,
  FaDollarSign,
  FaMobileAlt,
  FaChartLine,
  FaBell,
  FaBusinessTime,
  FaUserCircle,
  FaEye
} from 'react-icons/fa';
import { useTheme } from './ui/themeMode'; // Importar el hook global

export function Features() {
  const { theme } = useTheme(); // Obtener el tema actual

  const features = [
    {
      icon: FaClock,
      title: 'Control de Asistencia',
      description: 'Registra entrada, salida y almuerzo de forma sencilla desde la app o el navegador.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Permisos y Vacaciones',
      description: 'Solicita y aprueba permisos o vacaciones fácilmente, con historial y seguimiento.'
    },
    {
      icon: FaDollarSign,
      title: 'Gestión de Nómina',
      description: 'Calcula automáticamente lo que cada empleado debe cobrar según sus horas trabajadas.'
    },
    {
      icon: FaBusinessTime,
      title: 'Asignación de Horarios',
      description: 'Crea y administra horarios personalizados para cada empleado o área.'
    },
    {
      icon: FaUserCircle,
      title: 'Perfil del Empleado',
      description: 'Cada empleado puede ver sus horas trabajadas, asistencias y estimado de pago en tiempo real.'
    },
    {
      icon: FaMobileAlt,
      title: 'App Móvil',
      description: 'Disponible para Android e iOS. Los empleados pueden registrar asistencia desde cualquier lugar.'
    },
    {
      icon: FaChartLine,
      title: 'Reportes Básicos',
      description: 'Consulta reportes de asistencia y horas trabajadas por empleado o departamento.'
    },
    {
      icon: FaBell,
      title: 'Notificaciones Automáticas',
      description: 'Recibe alertas de entradas, salidas y solicitudes pendientes directamente en la app.'
    },
    {
      icon: FaEye,
      title: 'Empleados Activos',
      description: 'Visualiza en tiempo real qué empleados están actualmente laborando según sus registros de entrada y salida.'
    }
  ];


  const isDarkMode = theme === 'dark';  // Detecta el modo oscuro

  return (
    <section
      id="features"
      className={`py-20 md:py-32 relative overflow-hidden
        ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} // Fondo adaptado según el tema
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(50,60,70,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(50,60,70,0.2)_1px,transparent_1px)] 
          bg-[size:4rem_4rem] opacity-20
          ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`} // Cambia la opacidad del fondo
      ></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center max-w-3xl mx-auto mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="text-lg md:text-xl">
            Funcionalidades completas para gestionar tu equipo de manera eficiente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={`h-full ${isDarkMode ? 'bg-gray-800/60 text-white border-gray-700' : 'bg-gray-100 text-gray-900 border-gray-300'}
                  border hover:border-blue-600/60 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group rounded-2xl backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="relative">
                    <div
                      className={`w-14 h-14 ${isDarkMode ? 'bg-gradient-to-br from-blue-700 to-blue-600' : 'bg-gradient-to-br from-blue-700 to-blue-500'} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3
                      className={`text-xl mb-3 font-semibold group-hover:text-blue-400 transition-colors
                        ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed
                      ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {feature.description}
                    </p>
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
