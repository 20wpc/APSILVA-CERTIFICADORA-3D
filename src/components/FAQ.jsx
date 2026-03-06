import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const faqs = [
    {
        question: "Preciso sair de casa para emitir certificado?",
        answer: "Não. Nosso processo pode ser feito 100% online por videoconferência, dependendo das documentações previamente cadastradas (como CNH digital)."
    },
    {
        question: "Quais documentos eu preciso para pessoa física (e-CPF)?",
        answer: "Geralmente apenas CNH (com foto digital) ou RG recente, CPF e comprovante de residência. O processo é muito simples e orientado."
    },
    {
        question: "Quais documentos para pessoa jurídica (e-CNPJ)?",
        answer: "Cartão CNPJ, Contrato Social (ou Requerimento do Empresário/Certificado MEI), e documento de identificação do Representante Legal."
    },
    {
        question: "Em quanto tempo meu certificado fica pronto?",
        answer: "Após a validação da videoconferência, seu certificado digital é emitido praticamente na mesma hora e já está pronto para uso em sistemas da receita, emissão de notas, etc."
    }
];

const FAQ = () => {
    const { openModal } = useModal();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#020202] py-24 relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 lg:px-12 max-w-4xl">

                <div className="mb-12">
                    <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">FAQ</span>
                        <div className="w-4 h-4 rounded-full bg-aura-accent/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-aura-accent"></div>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                        Perguntas mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent to-emerald-400 italic font-medium">Frequentes</span>
                    </h2>
                </div>

                <div className="space-y-2 mb-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/10 pb-2">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors ${openIndex === index ? 'text-aura-accent' : 'text-white group-hover:text-neutral-300'}`}>
                                    {faq.question}
                                </span>
                                <div className={`ml-4 w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${openIndex === index ? 'border-aura-accent bg-aura-accent/10 text-aura-accent' : 'border-white/10 bg-white/5 text-neutral-400 group-hover:bg-white/10 group-hover:text-white'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                                <p className="text-neutral-400 font-light pr-12 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div className="border-t border-white/10 pt-16 flex flex-col items-start">
                    <div className="flex items-center space-x-2 text-neutral-400 mb-6 font-light">
                        <MessageCircle className="w-5 h-5 text-neutral-500" />
                        <span>Ainda ficou com alguma dúvida?
                            <button onClick={openModal} className="text-white hover:text-aura-accent underline underline-offset-4 ml-2 transition-colors">Entre em Contato</button>
                        </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                        Ainda tenho <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent to-emerald-400 font-light">dúvidas</span><br />
                        sobre a cer<span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent to-emerald-400 font-light">tificação</span>!
                    </h3>

                    <button
                        onClick={openModal}
                        className="bg-transparent border border-aura-accent/50 hover:border-aura-accent hover:bg-aura-accent/10 px-8 py-4 rounded-xl flex items-center space-x-3 transition-colors text-white"
                    >
                        <span className="font-bold text-sm uppercase tracking-widest text-aura-accent">Falar com o Suporte</span>
                        <MessageCircle size={20} className="text-aura-accent" />
                    </button>
                    <p className="mt-4 text-xs font-light text-neutral-500">Atendimento Rápido e Seguro!</p>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
