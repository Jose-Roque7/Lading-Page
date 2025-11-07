import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { motion } from 'motion/react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Martínez',
      role: 'Director de RRHH',
      company: 'TechCorp SL',
      content: 'Desde que implementamos este sistema, hemos reducido el tiempo de gestión de nóminas en un 70%. Absolutamente recomendable.',
      rating: 5,
      avatar: 'CM'
    },
    {
      name: 'Laura Sánchez',
      role: 'CEO',
      company: 'Innovate Partners',
      content: 'La mejor inversión que hemos hecho. Nuestros empleados aman la app móvil y el proceso de solicitar vacaciones es ahora muy simple.',
      rating: 5,
      avatar: 'LS'
    },
    {
      name: 'Miguel Rodríguez',
      role: 'Gerente de Operaciones',
      company: 'Retail Plus',
      content: 'Gestionar turnos de 200 empleados nunca fue tan fácil. El soporte técnico es excepcional, siempre están disponibles.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Ana López',
      role: 'Responsable de Talento',
      company: 'Creative Studio',
      content: 'Los reportes y análisis nos han ayudado a identificar patrones de productividad. Una herramienta imprescindible.',
      rating: 5,
      avatar: 'AL'
    },
    {
      name: 'David García',
      role: 'Fundador',
      company: 'StartUp Lab',
      content: 'Como startup necesitábamos algo simple pero potente. Este sistema cumple con todo y el precio es muy competitivo.',
      rating: 5,
      avatar: 'DG'
    },
    {
      name: 'Isabel Torres',
      role: 'Directora Administrativa',
      company: 'Consulting Group',
      content: 'La integración con nuestras otras herramientas fue perfecta. Ahorramos horas cada semana en tareas administrativas.',
      rating: 5,
      avatar: 'IT'
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
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
            Más de 10,000 empresas confían en nosotros
          </h2>
          <p className="text-xl text-gray-600">
            Descubre por qué somos la opción #1 para la gestión de RRHH
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all">
                    <FaQuoteLeft className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Avatar className="w-12 h-12 bg-blue-600">
                      <AvatarFallback className="text-white bg-transparent">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm text-gray-900">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">
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
