"use client"
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ui/themeMode';
import { Toast } from './components/Toast';
import { Loading } from './components/loader';
import { useEffect, useState } from 'react';


export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000; // 3 segundos

    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      <ThemeProvider>
        <Header />
        <Toast />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
