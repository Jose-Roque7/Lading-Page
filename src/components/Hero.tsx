import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { FaRocket, FaPlay, FaStar, FaCheck, FaArrowRight } from 'react-icons/fa';
import { HiSparkles, HiTrendingUp, HiUsers, HiLightningBolt } from 'react-icons/hi';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const features = [
    { icon: HiLightningBolt, text: 'Configuración rápida' },
    { icon: FaCheck, text: 'Sin tarjeta de crédito' },
    { icon: HiUsers, text: '+10,000 empresas' }
  ];

  const floatingElements = [
    { delay: 0, duration: 4, x: 20, y: -20 },
    { delay: 1, duration: 5, x: -30, y: 30 },
    { delay: 2, duration: 6, x: 40, y: 20 }
  ];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24 pb-32"
      style={{ minHeight: 'calc(100vh - 80px)' }} // Ajusta 80px según altura real del navbar
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"
        />
        {floatingElements.map((elem, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, elem.y, 0], x: [0, elem.x, 0], rotate: [0, 180, 360] }}
            transition={{ duration: elem.duration, repeat: Infinity, ease: 'linear', delay: elem.delay }}
            className="absolute w-20 h-20 border-2 border-cyan-600/30 rounded-lg"
            style={{ top: `${15 + i * 25}%`, left: `${10 + i * 30}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Dashboard (solo visible en lg) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-700/30 to-indigo-700/20 rounded-3xl opacity-30 blur-2xl"></div>

              <div className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI0NjMzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dashboard RRHH"
                  className="w-full h-auto"
                />

                {/* Floating Stats inside image */}
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-5 right-5 bg-gray-900/80 text-white px-4 py-2 rounded-xl shadow-lg text-sm">
                  +47% Productividad
                </motion.div>
                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-5 left-5 bg-gray-900/70 text-white px-4 py-2 rounded-xl shadow-lg text-sm flex items-center gap-2">
                  <FaCheck /> Asistencia: 09:00 AM
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text (centrado en móvil) */}
          <div className="space-y-6 text-center lg:text-left flex flex-col justify-center items-center lg:items-start min-h-[calc(100vh-80px)]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/20 text-cyan-100 border border-cyan-400">
                <HiSparkles className="w-4 h-4" /> Líder en RRHH
              </Badge>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-lg">
                Gestiona tu equipo de forma{' '}
                <span className="text-cyan-400 relative">
                  inteligente
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute bottom-0 left-0 h-2 bg-cyan-600 rounded-full -z-0"
                  />
                </span>
              </h1>
              <p className="mt-4 text-gray-300 max-w-md">
                Automatiza la gestión de RRHH y ahorra hasta <span className="text-cyan-400 font-semibold">20 horas semanales</span>.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white h-16 px-8 shadow-lg shadow-cyan-500/40 group">
                <span>Empieza gratis</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-8 text-white border border-cyan-500 hover:bg-cyan-600/20">
                <FaPlay className="mr-2" /> Ver demo
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-white rounded-full border border-cyan-600">
                  <feature.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>

  );
}
