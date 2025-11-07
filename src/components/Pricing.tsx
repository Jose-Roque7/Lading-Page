import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { FaCheck, FaStar, FaRocket } from 'react-icons/fa';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfecto para pequeñas empresas',
      popular: false,
      features: [
        'Hasta 10 empleados',
        'Control de asistencia',
        'Gestión de vacaciones',
        'App móvil',
        'Soporte por email',
        '5GB almacenamiento',
      ],
    },
    {
      name: 'Professional',
      price: '99',
      description: 'Ideal para empresas en crecimiento',
      popular: true,
      features: [
        'Hasta 50 empleados',
        'Todo en Starter, más:',
        'Nóminas automáticas',
        'Reportes avanzados',
        'Soporte prioritario',
        'Integraciones',
        '50GB almacenamiento',
        'API access',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Para grandes organizaciones',
      popular: false,
      features: [
        'Empleados ilimitados',
        'Todo en Professional, más:',
        'Gestor de cuenta dedicado',
        'Soporte 24/7',
        'SLA garantizado',
        'Personalización completa',
        'Almacenamiento ilimitado',
        'Formación incluida',
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
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
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Planes flexibles para cada empresa
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Sin costos ocultos. Cancela cuando quieras. Prueba gratuita por 14 días.
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
                  <Badge className="px-4 py-2 bg-blue-600/90 text-white border-0 shadow-lg shadow-blue-500/30">
                    <FaStar className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}

              {/* Card */}
              <Card
                className={`h-full overflow-hidden rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gray-800/90 border border-blue-500/40 shadow-2xl shadow-blue-500/20'
                    : 'bg-gray-850/70 border border-gray-700/60 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10'
                }`}
              >
                {/* Header */}
                <div
                  className={`p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white'
                      : 'bg-gray-900/80 text-gray-100'
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-200/80 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl font-medium">Contactar</div>
                    ) : (
                      <>
                        <span className="text-5xl font-bold">{plan.price}€</span>
                        <span className="text-gray-200/80">/mes</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <CardContent className="p-8 space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="w-3 h-3 text-blue-400" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    size="lg"
                    className={`w-full font-semibold transition-all duration-300 cursor-pointer ${
                      plan.popular
                        ? 'bg-white text-gray-900 hover:bg-gray-200 shadow-lg'
                        : 'border border-blue-500/40 text-blue-400 hover:border-blue-400 hover:text-blue-300'
                    }`}
                  >
                    <FaRocket className="mr-2" />
                    {plan.price === 'Custom'
                      ? 'Contactar ventas'
                      : 'Empezar prueba gratis'}
                  </Button>
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
          className="text-center mt-12 text-gray-500"
        >
          <p className="text-lg">
            Todos los planes incluyen actualizaciones gratuitas y soporte técnico
          </p>
        </motion.div>
      </div>
    </section>
  );
}
