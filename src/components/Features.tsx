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

export function Features() {
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

  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="text-xl text-gray-600">
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
              <Card className="h-full bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
