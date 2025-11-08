"use client";

import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import {
  FaClock,
  FaCalendarAlt,
  FaDollarSign,
  FaMobileAlt,
  FaChartLine,
  FaUsers,
  FaBell,
  FaFileAlt,
  FaShieldAlt,
  FaCloud,
  FaBolt,
  FaBusinessTime
} from 'react-icons/fa';
import { useTheme } from './ui/themeMode'; // Importar el hook global

export function Features() {
  const { theme } = useTheme(); // Obtener el tema actual

  const features = [
    {
      icon: FaClock,
      title: 'Control de Asistencia',
      description: 'Registro de entradas, salidas y pausas con geolocalización y reconocimiento facial opcional.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Gestión de Vacaciones',
      description: 'Solicita y aprueba vacaciones y permisos con un flujo de trabajo automatizado.'
    },
    {
      icon: FaDollarSign,
      title: 'Nóminas Automáticas',
      description: 'Cálculo automático de nóminas con deducciones, bonos y exportación a PDF.'
    },
    {
      icon: FaBusinessTime,
      title: 'Planificación de Horarios',
      description: 'Crea y gestiona turnos de trabajo con alertas automáticas para cambios.'
    },
    {
      icon: FaMobileAlt,
      title: 'App Móvil',
      description: 'Accede desde iOS y Android. Tus empleados siempre conectados.'
    },
    {
      icon: FaChartLine,
      title: 'Reportes y Análisis',
      description: 'Dashboard con métricas en tiempo real sobre productividad y asistencia.'
    },
    {
      icon: FaUsers,
      title: 'Gestión de Empleados',
      description: 'Base de datos completa con perfiles, documentos y historial laboral.'
    },
    {
      icon: FaBell,
      title: 'Notificaciones',
      description: 'Alertas por email y push para aprobaciones, recordatorios y cambios.'
    },
    {
      icon: FaFileAlt,
      title: 'Documentos Digitales',
      description: 'Almacena contratos, recibos de nómina y documentos de forma segura.'
    },
    {
      icon: FaShieldAlt,
      title: 'Seguridad RGPD',
      description: 'Cumplimiento total con normativas de protección de datos europeas.'
    },
    {
      icon: FaCloud,
      title: 'Cloud Hosting',
      description: 'Infraestructura en la nube con backups automáticos y alta disponibilidad.'
    },
    {
      icon: FaBolt,
      title: 'Integraciones',
      description: 'Conecta con Slack, Microsoft Teams, contabilidad y otras herramientas.'
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
