import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const FinalCTA = () => {
    const { openModal } = useModal();

    return (
        <section className="bg-black py-24 px-4 relative z-20">
            <div className="container mx-auto max-w-5xl">

                <div className="relative rounded-3xl border border-white/10 bg-[#050505] p-12 md:p-24 overflow-hidden group hover:border-aura-accent/30 transition-colors duration-700">

                    {/* Glow effect matching the reference */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-aura-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-aura-accent/10 transition-colors duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        <h2 className="text-3xl md:text-5xl font-light mb-10 text-white tracking-tight">
                            Garanta sua <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-aura-accent to-emerald-400">emissão</span> agora
                        </h2>

                        <button
                            onClick={openModal}
                            className="bg-aura-accent text-black font-bold text-lg md:text-xl py-5 px-10 rounded-full flex items-center space-x-3 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]"
                        >
                            <span>Emitir Agora</span>
                            <ArrowRight size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
