import React from 'react';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Features = () => {
    const { openModal } = useModal();
    return (
        <section id="tecnologia" className="py-32 bg-[#020202] relative overflow-hidden border-t border-aura-accent/10">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-sm text-aura-accent font-bold tracking-[0.2em] uppercase mb-4">Arquitetura de Segurança</h2>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">Infraestrutura Definitiva</h3>
                </div>

                {/* Bento Box */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Box 1 */}
                    <div className="bg-[#0a0a0a] p-10 rounded-xl border border-white/5 hover:border-aura-accent/30 transition-colors group">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow">
                            <ShieldCheck className="w-8 h-8 text-aura-accent" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4 text-white">Chaves Criptográficas</h4>
                        <p className="text-neutral-400 font-light leading-relaxed">
                            Assinaturas digitais blindadas e com validade jurídica instantânea de acordo com as especificações rígidas do ITI e da ICP-Brasil.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-[#0a0a0a] p-10 rounded-xl border border-white/5 md:col-span-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-aura-accent/10 rounded-full blur-[80px] group-hover:bg-aura-accent/20 transition-all pointer-events-none" />
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8 relative z-10">
                            <Cpu className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-3xl font-bold mb-4 relative z-10 text-white">Renovação Automatizada</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <p className="text-neutral-400 font-light leading-relaxed">
                                Pare de perder tempo lidando com burocracias ou lembrando de senhas. Nossos sistemas detectam o ciclo de expiração e acionam fluxos robóticos.
                            </p>
                            <ul className="space-y-3 text-sm text-neutral-300 font-medium">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-accent rounded-full mr-3"></span> Videoconferência Ágil</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-accent rounded-full mr-3"></span> Emissão CNH/Biometria</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-accent rounded-full mr-3"></span> API de Integração ERP</li>
                            </ul>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-aura-accent/5 p-10 rounded-xl border border-aura-accent/20 md:col-span-3 hover:bg-aura-accent/10 transition-colors flex flex-col md:flex-row items-center justify-between group">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center space-x-4 mb-4">
                                <Zap className="w-6 h-6 text-aura-accent" />
                                <h4 className="text-xl font-bold text-white">Velocidade como Diferencial</h4>
                            </div>
                            <p className="text-neutral-300 max-w-xl">Do agendamento à emissão final, o processo da APSILVA foi otimizado por engenheiros para cortar pela metade o tempo que sua empresa perde com certificados velhos.</p>
                        </div>
                        <button
                            onClick={openModal}
                            className="px-8 py-4 bg-transparent border-2 border-aura-accent text-aura-accent font-bold uppercase tracking-widest text-sm hover:bg-aura-accent hover:text-black transition-all"
                        >
                            Solicitar Contato
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
