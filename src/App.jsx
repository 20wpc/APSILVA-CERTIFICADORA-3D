import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { ModalProvider } from './context/ModalContext';
import WhatsAppModal from './components/WhatsAppModal';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import logoImg from './assets/logo.jpg';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ModalProvider>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-aura-accent selection:text-black">
        <CustomCursor />
        <WhatsAppModal />
        <Navbar />
        <main>
          <Hero />
          <ProductShowcase />
          <Features />
          <Steps />
          <FAQ />
          <Testimonials />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </ModalProvider>
  );
}

export default App;
