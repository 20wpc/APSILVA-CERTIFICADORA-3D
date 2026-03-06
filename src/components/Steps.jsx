import React, { useEffect, useRef } from 'react';
import { MessageSquare, FileText, CheckCircle, Award, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const steps = [
    {
        id: 1,
        title: "Contato Inicial",
        description: "Fale com nossos especialistas via WhatsApp para identificarmos o melhor tipo de certificado para você ou sua empresa.",
        icon: <MessageSquare className="w-6 h-6 text-aura-accent" />
    },
    {
        id: 2,
        title: "Envio de Documentos",
        description: "De forma 100% segura e digital, você nos envia a documentação necessária. Sem burocracia ou papelada desnecessária.",
        icon: <FileText className="w-6 h-6 text-aura-accent" />
    },
    {
        id: 3,
        title: "Validação Digital",
        description: "Agendamos uma rápida videoconferência para validar sua identidade. Rápido, prático e sem sair de casa ou do escritório.",
        icon: <CheckCircle className="w-6 h-6 text-aura-accent" />
    },
    {
        id: 4,
        title: "Emissão Concluída",
        description: "Pronto! Seu certificado digital estará emitido, configurado e pronto para uso imediato com total validade jurídica.",
        icon: <Award className="w-6 h-6 text-aura-accent" />
    }
];

const Steps = () => {
    const { openModal } = useModal();
    const sectionRef = useRef(null);

    return (
        <section id="passo-a-passo" className="bg-black py-24 relative overflow-hidden" ref={sectionRef}>
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-aura-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-aura-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Processo de Emissão <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent to-emerald-400">Simplificado</span>
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
                        Esqueça a burocracia. Na APSILVA, desenvolvemos um método ágil para que você foque no que realmente importa: o seu negócio.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2 hidden md:block"></div>
                    <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:hidden block"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex flex-col md:flex-row items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Node (Mobile & Desktop) */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-20 h-20 bg-black rounded-full border-[6px] border-black z-10 shrink-0 mt-2 md:mt-0">
                                    <div className="w-14 h-14 bg-aura-accent flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                        <span className="text-black font-bold text-xl">{step.id}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-1/2 pl-28 md:pl-0 ${index % 2 === 0 ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                                    <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-aura-accent/30 transition-colors duration-500 shadow-xl group">
                                        <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <div className="md:hidden">
                                                {step.icon}
                                            </div>
                                            <div className="hidden md:block">
                                                {step.icon}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-aura-accent transition-colors">{step.title}</h3>
                                        </div>
                                        <p className="text-neutral-400 font-light leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <div className="flex items-center justify-center space-x-2 text-neutral-400 mb-8 font-light">
                            <CheckCircle className="w-5 h-5 text-aura-accent" />
                            <span>Você nunca vai se sentir sozinho. Cada passo é guiado.</span>
                        </div>
                        <button
                            onClick={openModal}
                            className="bg-aura-accent hover:bg-white text-black font-bold uppercase tracking-widest text-sm py-5 px-10 rounded-full inline-flex items-center space-x-3 transition-colors shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span>Começar Minha Emissão Agora</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Steps;
