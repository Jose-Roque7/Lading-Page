"use client"
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",        // bordes redondeados
            padding: "16px 24px",        // más espacio interno
            background: "#1e293b",       // gris oscuro
            color: "#f1f5f9",            // texto claro
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)", // sombra suave
            fontWeight: "500",           // un texto más visible
            fontSize: "16px",
          },
          success: {
            style: {
              background: "linear-gradient(to right, #75e29dff, #00f514ff)", // verde bonito
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "linear-gradient(to right, #ee8a8aff, #ff0000ff)", // rojo elegante
              color: "#fff",
            },
          },
        }}
      />
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
