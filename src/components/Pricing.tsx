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
        '5GB almacenamiento'
      ]
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
        'API access'
      ]
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
        'Formación incluida'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Planes transparentes para cada necesidad
          </h2>
          <p className="text-xl text-gray-600">
            Sin costos ocultos. Cancela cuando quieras. 14 días de prueba gratis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="px-4 py-2 bg-blue-600 text-white border-0 shadow-lg">
                    <FaStar className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}

              <Card className={`h-full overflow-hidden ${
                  plan.popular 
                    ? 'border-2 border-blue-600 shadow-2xl bg-white' 
                    : 'border-2 border-gray-200 hover:border-blue-300 shadow-xl bg-white'
                } transition-all duration-300`}
              >
                {/* Header */}
                <div className={`p-8 ${plan.popular ? 'bg-blue-600' : 'bg-gray-900'} text-white`}>
                  <h3 className="text-2xl mb-2">{plan.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl">Contactar</div>
                    ) : (
                      <>
                        <span className="text-5xl">{plan.price}€</span>
                        <span className="text-white/80">/mes</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <CardContent className="p-8 space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    className={
                      plan.popular
                        ? 'w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'w-full hover:border-blue-600 hover:text-blue-600'
                    }
                  >
                    <FaRocket className="mr-2" />
                    {plan.price === 'Custom' ? 'Contactar ventas' : 'Empezar prueba gratis'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 text-gray-600"
        >
          <p className="text-lg">Todos los planes incluyen actualizaciones gratuitas y soporte técnico</p>
        </motion.div>
      </div>
    </section>
  );
}
