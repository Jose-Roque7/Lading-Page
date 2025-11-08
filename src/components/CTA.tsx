"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import { FaCheck, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useTheme } from "./ui/themeMode"; // 👈 tu hook global
import toast from "react-hot-toast";

export function CTA() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_company: "",
  });

  const handleClick = () => {
    if (!formRef.current) return;

    // 1️⃣ Primero leer los valores del formulario
    const data = new FormData(formRef.current);
    const newFormData = {
      user_name: (data.get("user_name") as string) || "",
      user_email: (data.get("user_email") as string) || "",
      user_company: (data.get("user_company") as string) || "",
    };

    // 2️⃣ Ahora validar los datos leídos
    if (
      !newFormData.user_name.trim() ||
      !newFormData.user_email.trim() ||
      !newFormData.user_company.trim()
    ) {
      toast("⚠️ Por favor completa todos los campos.");
      return;
    }

    // 3️⃣ Validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newFormData.user_email)) {
      toast("⚠️ Por favor ingresa un correo electrónico válido.");
      return;
    }

    // 4️⃣ Guardar en el estado
    setFormData(newFormData);

    // 5️⃣ Enviar con EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICES!,
        process.env.NEXT_PUBLIC_TEMPLATE!,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("✅ Email enviado:", result.text);
          toast.success("¡Mensaje enviado con éxito!");
          formRef.current?.reset();
        },
        (error) => {
          toast.error("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  const benefits = [
    { icon: FaCheck, text: "14 días gratis" },
    { icon: FaCheck, text: "Sin tarjeta de crédito" },
    { icon: FaCheck, text: "Cancela cuando quieras" },
  ];

  const { theme } = useTheme(); // Obtener el tema global

  // Definir constantes según el tema
  const isDarkMode = theme === "dark";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600"; // Subtexto con color adecuado
  const accentColor = "text-blue-700"; // Azul fuerte para resaltar
  const buttonColor = isDarkMode ? "bg-blue-600" : "bg-blue-500";
  const inputBgColor = isDarkMode ? "bg-gray-900/70" : "bg-gray-100/90"; // Fondo más suave en modo claro
  const inputBorderColor = isDarkMode ? "border-gray-700/60" : "border-gray-300/60"; // Borde suave
  const inputFocusColor = "focus:ring-blue-600 focus:border-blue-600";
  const inputTextColor = isDarkMode ? "text-gray-100" : "text-gray-900"; // Aseguramos texto oscuro en claro

  return (
    <section id="contact" className={`relative overflow-hidden py-24 ${bgColor}`}>
      {/* --- Light background effects --- */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* --- Content --- */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={textColor}
          >
            <div className="flex items-center gap-3 mb-6">
              <HiSparkles className="w-8 h-8 text-blue-500" />
              <span className={`uppercase tracking-wider text-sm ${accentColor}`}>
                Comienza gratis hoy
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforma la gestión de tu equipo con una plataforma todo-en-uno
            </h2>

            <p className={`text-lg ${subTextColor} mb-10 leading-relaxed`}>
              Ahorra tiempo, mejora la productividad y lleva tus recursos
              humanos al siguiente nivel.
            </p>

            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <benefit.icon className={`w-3 h-3 text-white`} />
                  </div>
                  <span className={subTextColor}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: EmailJS Form */}
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className={`${
    isDarkMode ? "bg-gray-800/80" : "bg-white shadow-lg" // Fondo blanco y sombra en light mode
  } rounded-2xl p-10 border ${isDarkMode ? 'border-gray-700/60' : 'border-gray-300/60'} backdrop-blur-md`}
>
  <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}>
    Empieza tu prueba gratuita
  </h3>
  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-8`}>
    Crea una cuenta en menos de 1 minuto. Sin compromiso.
  </p>

  <form ref={formRef}>
    <div className="flex flex-col gap-4 mb-6">
      <Input
        name="user_name"
        placeholder="Nombre completo"
        required
        className={`h-12 px-5 rounded-xl border ${inputBorderColor} ${inputBgColor} ${inputTextColor} placeholder:text-gray-400 ${inputFocusColor}`}
      />
      <Input
        name="user_email"
        type="email"
        placeholder="tu@email.com"
        required
        className={`h-12 px-5 rounded-xl border ${inputBorderColor} ${inputBgColor} ${inputTextColor} placeholder:text-gray-400 ${inputFocusColor}`}
      />
      <Input
        name="user_company"
        placeholder="Empresa"
        className={`h-12 px-5 rounded-xl border ${inputBorderColor} ${inputBgColor} ${inputTextColor} placeholder:text-gray-400 ${inputFocusColor}`}
      />
    </div>

    <Button
      type="button"
      size="lg"
      onClick={handleClick}
      className={`w-full ${buttonColor} hover:bg-blue-700 text-white font-semibold h-12 rounded-xl shadow-lg hover:shadow-blue-700/30 transition-all cursor-pointer`}
    >
      <FaRocket className="mr-2" />
      Empezar ahora
    </Button>
  </form>

  <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"} mt-4 text-center`}>
    Sin tarjeta requerida · Cancela en cualquier momento
  </p>
</motion.div>

        </div>
      </div>
    </section>
  );
}
