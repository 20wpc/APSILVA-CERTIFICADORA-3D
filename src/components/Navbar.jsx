import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { storeConfig } from '../data/config';
import { useModal } from '../context/ModalContext';
import logoImg from '../assets/logo.jpg';

const Navbar = () => {
    const { openModal } = useModal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? 'bg-black/70 backdrop-blur-md pt-16 pb-4 border-b border-white/10'
                : 'bg-transparent pt-20 pb-6'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center w-full">
                {/* LOGO */}
                <div className="flex items-center flex-shrink-0">
                    <img src={logoImg} alt={storeConfig.storeName} className="max-h-16 md:max-h-20 w-auto object-contain mix-blend-screen rounded-full" />
                </div>
                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                    <a href="#certificados" className="hover:text-aura-accent transition-colors">Certificados</a>
                    <a href="#tecnologia" className="hover:text-aura-accent transition-colors">Tecnologia</a>
                    <a href="#automacao" className="hover:text-aura-accent transition-colors">Automação</a>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <button
                        onClick={openModal}
                        className="hidden md:flex bg-aura-accent/10 border border-aura-accent text-aura-accent px-6 py-2 rounded-full text-sm font-bold hover:bg-aura-accent hover:text-black transition-all"
                    >
                        Emitir Agora
                    </button>
                    <button
                        className="md:hidden p-2 text-white hover:text-aura-accent transition-colors z-[60]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl font-bold tracking-widest transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                style={{ top: '72px', height: 'calc(100vh - 72px)' }}
            >
                <a href="#certificados" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-aura-accent">Certificados</a>
                <a href="#tecnologia" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-aura-accent">Tecnologia</a>
                <a href="#automacao" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-aura-accent">Automação</a>
                <button
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        openModal();
                    }}
                    className="text-aura-accent hover:text-white mt-8 px-8 py-3 border border-aura-accent rounded-full font-bold uppercase"
                >
                    Emitir Agora
                </button>
            </div>
        </nav >
    );
};

export default Navbar;
