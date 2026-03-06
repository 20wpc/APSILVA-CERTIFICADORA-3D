import React from 'react';
import { storeConfig } from '../data/config';
import logoImg from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="bg-[#020202] py-16 border-t border-white/5 relative z-10 flex flex-col justify-end">

            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10 mt-auto">

                {/* Logo Escudozinho Aumentada */}
                <div className="mb-6">
                    <img src={logoImg} alt={storeConfig.storeName} className="max-h-24 md:max-h-[110px] w-auto object-contain mix-blend-screen rounded-full" />
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full text-neutral-600 text-[10px] uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} {storeConfig.storeName.toUpperCase()}. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        {storeConfig.supportLinks.map((link, i) => (
                            <a key={i} href={link.url} className="hover:text-white transition-colors">{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
