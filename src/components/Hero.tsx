import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { FaRocket, FaPlay, FaStar, FaCheck, FaArrowRight } from 'react-icons/fa';
import { HiSparkles, HiTrendingUp, HiUsers, HiLightningBolt } from 'react-icons/hi';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const features = [
    { icon: HiLightningBolt, text: 'Configuración en 5 minutos' },
    { icon: FaCheck, text: 'Sin tarjeta de crédito' },
    { icon: HiUsers, text: '+10,000 empresas' }
  ];

  const floatingElements = [
    { delay: 0, duration: 4, x: 20, y: -20 },
    { delay: 1, duration: 5, x: -30, y: 30 },
    { delay: 2, duration: 6, x: 40, y: 20 }
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        {floatingElements.map((elem, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, elem.y, 0],
              x: [0, elem.x, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: elem.duration,
              repeat: Infinity,
              ease: "linear",
              delay: elem.delay
            }}
            className="absolute w-20 h-20 border-2 border-blue-500/20 rounded-lg"
            style={{
              top: `${20 + i * 25}%`,
              left: `${10 + i * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                <HiSparkles className="w-4 h-4" />
                <span>Líder en Gestión de RRHH</span>
                <FaStar className="w-3 h-3 text-yellow-500" />
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-[0.95] tracking-tight">
                La forma más{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">inteligente</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute bottom-2 left-0 h-3 bg-blue-200/60 -z-0"
                  />
                </span>
                {' '}de gestionar tu equipo
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
                Automatiza la gestión de RRHH y ahorra hasta{' '}
                <span className="text-blue-600">20 horas semanales</span>.
                Desde asistencia hasta nóminas, todo en un solo lugar.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white h-16 px-8 text-lg shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-all group"
              >
                <span>Empieza gratis ahora</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="h-16 px-8 text-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 group"
              >
                <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                Ver demo en vivo
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200"
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-gray-200"
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-900">10,000+</span> empresas satisfechas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              {/* Decorative elements behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-20 blur-2xl"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758876202980-0a28b744fb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI0NjMzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Dashboard RRHH"
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-200 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <HiTrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl text-gray-900">+47%</div>
                    <div className="text-xs text-gray-500">Productividad</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-200 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                    <FaCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900">Asistencia</div>
                    <div className="text-xs text-gray-500">✓ 09:00 AM Registrada</div>
                  </div>
                </div>
              </motion.div>

              {/* Small floating badge */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm hidden lg:block"
              >
                En vivo
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
