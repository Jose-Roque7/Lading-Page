import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { FaRocket, FaCheck } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

export function CTA() {
  const benefits = [
    { icon: FaCheck, text: '14 días gratis' },
    { icon: FaCheck, text: 'Sin tarjeta de crédito' },
    { icon: FaCheck, text: 'Cancela cuando quieras' }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <HiSparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 leading-tight">
            Comienza a transformar tu gestión de RRHH hoy
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Únete a miles de empresas que ya optimizan su tiempo con nuestra plataforma
          </p>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-10"
          >
            <Input
              placeholder="tu@email.com"
              className="h-14 px-6 text-lg rounded-xl border-0 shadow-2xl bg-white text-gray-900"
            />
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 h-14 px-10 text-lg shadow-2xl hover:scale-105 transition-all rounded-xl"
            >
              <FaRocket className="mr-2" />
              Empezar gratis
            </Button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-12 border-t border-gray-700"
          >
            <div>
              <div className="text-4xl mb-2">10,000+</div>
              <div className="text-sm text-gray-400">Empresas activas</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50M+</div>
              <div className="text-sm text-gray-400">Horas registradas</div>
            </div>
            <div>
              <div className="text-4xl mb-2">99.9%</div>
              <div className="text-sm text-gray-400">Satisfacción</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
