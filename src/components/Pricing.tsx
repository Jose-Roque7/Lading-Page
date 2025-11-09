"use client";

import { useTheme } from "./ui/themeMode"; // 👈 tu hook global
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { FaCheck, FaStar, FaRocket } from 'react-icons/fa';

export function Pricing() {
  const { theme } = useTheme(); // 👈 obtenemos el tema global

  // Definir constantes según el tema
  const isDarkMode = theme === "dark";

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const accentColor = "text-blue-700"; // Azul fuerte y sólido (no luminoso)
  const badgeBg = "bg-blue-700 border-blue-700"; // Azul fuerte para el badge

  const cardBg = isDarkMode ? "bg-gray-800/90 border-gray-800" : "bg-white/80 border-gray-200";
  const cardText = isDarkMode ? "text-gray-300" : "text-gray-700";

  const hoverCardBg = "hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10";

  // Fondo más elegante para el card popular (con un toque oscuro pero no tan fuerte)
  const popularCardBg = isDarkMode
    ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700" // Fondo oscuro suave en dark mode
    : "bg-white";
  const popularCardText = isDarkMode ? "text-white" : "text-gray-900";

  const plans = [
    {
      name: 'Básico',
      price: '39',
      description: 'Ideal para pequeñas empresas que buscan controlar asistencia y horarios',
      popular: false,
      features: [
        'Hasta 10 empleados',
        'Registro de entrada y salida',
        'Control de almuerzos y permisos',
        'Gestión de vacaciones',
        'Asignación de horarios',
        'Perfil del empleado (horas trabajadas y salario estimado)',
        'App móvil para empleados',
        'Soporte por email',
        '5GB de almacenamiento',
      ],
    },
    {
      name: 'Profesional',
      price: '89',
      description: 'Perfecto para empresas en crecimiento que necesitan automatizar nómina y reportes',
      popular: true,
      features: [
        'Hasta 50 empleados',
        'Todo en Básico, más:',
        'Nómina automática integrada',
        'Reportes detallados de asistencia y horas extras',
        'Gestión avanzada de permisos y vacaciones',
        'Panel administrativo completo',
        'Integraciones con sistemas contables',
        'Soporte prioritario',
        '50GB de almacenamiento',
      ],
    },
    {
      name: 'Empresarial',
      price: 'Custom',
      description: 'Solución completa para grandes organizaciones con necesidades personalizadas',
      popular: false,
      features: [
        'Empleados ilimitados',
        'Todo en Profesional, más:',
        'Personalización total del sistema',
        'Gestor de cuenta dedicado',
        'Soporte 24/7',
        'Implementación y capacitación personalizada',
        'API y conectores avanzados',
        'Almacenamiento ilimitado',
        'SLA garantizado',
      ],
    },
  ];


  return (
    <section
      id="pricing"
      className={`py-20 md:py-32 relative overflow-hidden ${bgColor}`} // Fondo según el tema
    >

      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}>
            Planes flexibles para cada empresa
          </h2>
          <p className={`text-lg md:text-xl ${subTextColor}`}>
            Sin costos ocultos. Cancela cuando quieras. Inicia ahora tu experiencia.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <Badge className={`${badgeBg} text-white border-0 shadow-lg shadow-blue-500/30`}>
                    <FaStar className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}

              {/* Card */}
              <Card
                className={`h-full overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  plan.popular
                    ? `${popularCardBg} text-white border-gray-300 ${hoverCardBg}`
                    : `${cardBg}  border-blue-300  ${hoverCardBg}`
                }`}
              >
                {/* Header */}
                <div
                  className={`p-8 ${
                    plan.popular
                      ? 'bg-blue-700 text-white'
                      : `${isDarkMode ? 'bg-gray-900/80 text-gray-100' : 'bg-blue-100 text-gray-900'}`
                    }`}
                >
                  <h3 className="text-2xl font-semibold mb-2 text-center">{plan.name}</h3>
                  <p className={`text-sm mb-4 text-center ${plan.popular ? 'text-white' : cardText}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center justify-center gap-3">
                      {plan.price === 'Custom' ? (
                        <div className="text-4xl font-medium">Contactar</div>
                      ) : (
                        <>
                          <span className="text-5xl font-bold">{plan.price}$US</span>
                          <span
                            className={`text-sm ${plan.popular ? "text-white" : isDarkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                          >
                            /mes
                          </span>
                        </>
                      )}
                    </div>

                  </div>
                </div>

                {/* Features */}
                <CardContent className="p-8 space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${accentColor}/20`}>
                          <FaCheck className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a href="#contact">
                    <Button
                      size="lg"
                      className={`w-full font-semibold transition-all duration-300 cursor-pointer ${
                        plan.popular
                          ? 'border border-gray-400 bg-white text-gray-900 hover:bg-gray-200 shadow-lg'
                          : `border border-blue-300 text-blue-400 hover:border-blue-700 hover:text-blue-700`
                      }`}
                    >
                      <FaRocket className="mr-2" />
                      Contactar ventas
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className={`text-lg ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            Todos los planes incluyen actualizaciones gratuitas y soporte técnico
          </p>
        </motion.div>
      </div>
    </section>
  );
}
