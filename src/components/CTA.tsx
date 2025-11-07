import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { FaCheck, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

export function CTA() {
  const benefits = [
    { icon: FaCheck, text: '14 días gratis' },
    { icon: FaCheck, text: 'Sin tarjeta de crédito' },
    { icon: FaCheck, text: 'Cancela cuando quieras' },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
    >
      {/* Light effect */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Text + Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <HiSparkles className="w-8 h-8 text-blue-500" />
              <span className="uppercase tracking-wider text-sm text-blue-400">
                Comienza gratis hoy
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforma la gestión de tu equipo con una plataforma todo-en-uno
            </h2>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Ahorra tiempo, mejora la productividad y lleva tus recursos humanos al siguiente nivel.
            </p>

            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-3 h-3 text-white" />
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/80 rounded-2xl p-10 shadow-2xl border border-gray-700/60 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Empieza tu prueba gratuita
            </h3>
            <p className="text-gray-400 mb-8">
              Crea una cuenta en menos de 1 minuto. Sin compromiso.
            </p>

            <div className="flex flex-col gap-4 mb-6">
              <Input
                placeholder="Nombre completo"
                className="h-12 px-5 rounded-xl border border-gray-700/60 bg-gray-900/70 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
              <Input
                placeholder="tu@email.com"
                className="h-12 px-5 rounded-xl border border-gray-700/60 bg-gray-900/70 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
              <Input
                placeholder="Empresa"
                className="h-12 px-5 rounded-xl border border-gray-700/60 bg-gray-900/70 text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>

            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 rounded-xl shadow-lg hover:shadow-blue-700/30 transition-all cursor-pointer"
            >
              <FaRocket className="mr-2" />
              Empezar ahora
            </Button>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Sin tarjeta requerida · Cancela en cualquier momento
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
