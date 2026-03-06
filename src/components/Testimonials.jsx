import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Carlos Mendes",
        role: "Empresário",
        content: "Emissão incrivelmente rápida! Fiz a videoconferência e em poucos minutos o e-CNPJ da minha empresa já estava ativo."
    },
    {
        name: "Ana Pires",
        role: "Advogada",
        content: "Atendimento excelente pelo WhatsApp. Me orientaram em todos os passos para a renovação do meu certificado."
    },
    {
        name: "Roberto Silva",
        role: "Contador",
        content: "Já utilizo a APSILVA para certificar todos os meus clientes. O processo sem burocracia facilita muito a rotina contábil."
    },
    {
        name: "Julia Costa",
        role: "Autônoma",
        content: "Eu não tinha ideia de como fazer o e-CPF. Me explicaram perfeitamente e funcionou de primeira na Receita Federal."
    },
    {
        name: "Marcos Nogueira",
        role: "Diretor Comercial",
        content: "Segurança total no processo. Precisava assinar contratos urgentes e o suporte deles me salvou. Recomendo fortemente!"
    },
    {
        name: "Fernanda Lima",
        role: "Gestora de RH",
        content: "Ambiente muito seguro e criptografado. Emitir o certificado corporativo nunca foi tão fácil ágil e transparente como agora."
    }
];

// Duplicamos a array para criar o efeito infinito sem cortes (Marquee)
const doubledTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = ({ name, role, content }) => (
    <div className="w-[300px] md:w-[400px] shrink-0 bg-[#050505] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-aura-accent/30 transition-colors mx-3">
        <div className="flex text-aura-accent mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} className="mr-1" />
            ))}
        </div>
        <p className="text-neutral-300 font-light mb-6 text-sm md:text-base leading-relaxed">"{content}"</p>
        <div>
            <h4 className="text-white font-bold">{name}</h4>
            <span className="text-xs text-aura-accent tracking-widest uppercase">{role}</span>
        </div>
    </div>
);

const Testimonials = () => {
    return (
        <section className="bg-black py-20 overflow-hidden relative" id="depoimentos">
            {/* Gradientes laterais para criar o efeito de "fade" nas bordas da tela */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 mb-16 text-center relative z-20">
                <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                    <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">Avaliações</span>
                    <Star size={12} className="text-aura-accent fill-aura-accent" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    Aprovado por <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-accent to-emerald-400">Centenas</span> de Clientes
                </h2>
            </div>

            {/* Container Pai com Perspectiva 3D */}
            <div className="flex flex-col items-center justify-center w-full" style={{ perspective: '1200px' }}>

                {/* Linha Superior (Indo para a Direita, inclinada no eixo X/Y) */}
                <div
                    className="flex w-max animate-marquee-reverse mb-6"
                    style={{ transform: 'rotateX(20deg) rotateZ(-5deg)' }}
                >
                    {doubledTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} {...testimonial} />
                    ))}
                </div>

                {/* Linha Inferior (Indo para a Esquerda, inclinada no eixo X/Y invertido) */}
                <div
                    className="flex w-max animate-marquee"
                    style={{ transform: 'rotateX(20deg) rotateZ(5deg)' }}
                >
                    {doubledTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={`row2-${index}`} {...testimonial} />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Testimonials;
