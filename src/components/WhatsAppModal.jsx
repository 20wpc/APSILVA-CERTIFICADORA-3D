import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { getWhatsAppUrl, storeConfig } from '../data/config';

const WhatsAppModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = getWhatsAppUrl(formData.name, formData.phone, formData.email);
        window.open(url, '_blank', 'noopener,noreferrer');
        closeModal();
        // Reset form after submission
        setFormData({ name: '', phone: '', email: '' });
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/60">
            {/* Background click to close */}
            <div className="absolute inset-0 z-0" onClick={closeModal}></div>

            {/* Modal Container */}
            <div className="relative z-10 w-full max-w-md bg-[#050505] rounded-2xl border border-white/10 shadow-2xl shadow-aura-accent/10 overflow-hidden">

                {/* Header Motifs */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aura-accent to-transparent"></div>
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-8 pb-10">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-aura-accent/10 rounded-full flex items-center justify-center border border-aura-accent/30">
                            <ShieldCheck className="w-5 h-5 text-aura-accent" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Atendimento Seguro</h2>
                            <p className="text-xs text-aura-accent uppercase tracking-widest">{storeConfig.storeName} Certificadora</p>
                        </div>
                    </div>

                    <p className="text-sm text-neutral-400 font-light mb-8">
                        Para agilizar seu atendimento com um de nossos especialistas, por favor, insira seus dados de contato abaixo.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Nome Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-aura-accent/50 focus:ring-1 focus:ring-aura-accent/50 transition-all font-light"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Celular / WhatsApp</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-aura-accent/50 focus:ring-1 focus:ring-aura-accent/50 transition-all font-light"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">E-mail Profissional</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com.br"
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-700 focus:outline-none focus:border-aura-accent/50 focus:ring-1 focus:ring-aura-accent/50 transition-all font-light"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 bg-aura-accent text-black font-bold uppercase tracking-widest text-sm py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-white transition-colors"
                        >
                            <span>Continuar no WhatsApp</span>
                            <ArrowRight size={18} />
                        </button>
                        <p className="text-center text-[10px] text-neutral-600 mt-4 px-4 uppercase tracking-wider">
                            Seus dados estão protegidos por criptografia ponta a ponta.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WhatsAppModal;
