import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../context/ModalContext';

import smartcardImg from '../assets/apsilva_smartcard_1772779028726.png';
import tokenImg from '../assets/apsilva_token_1772779046658.png';
import coreImg from '../assets/apsilva_core_1772779061801.png';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: 'Certificado A1 Pessoa Física',
        description: 'Instalação imediata no seu computador ou celular. Ideal para o dia a dia.',
        price: 'R$ 190,00',
        img: smartcardImg, // Representação genérica
    },
    {
        id: 2,
        name: 'Certificado CNPJ A1',
        description: 'Validade de 1 ano com emissão rápida e integração total com notas fiscais.',
        price: 'R$ 210,00',
        img: coreImg, // Representação de Nuvem/Digi
    },
    {
        id: 3,
        name: 'Certificado CNPJ A3',
        description: 'Armazenado em mídia criptográfica (Token/Smartcard) com validade de até 3 anos.',
        price: 'R$ 450,00',
        img: tokenImg, // Representação A3 Física
    }
];

const ProductShowcase = () => {
    const { openModal } = useModal();
    const container = useRef();
    const pinnedSection = useRef();
    const imagesRef = useRef([]);
    const textRefs = useRef([]);

    imagesRef.current = [];
    textRefs.current = [];

    const addToRefs = (el, type) => {
        if (el && type === 'img' && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
        if (el && type === 'text' && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const pinTl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinnedSection.current,
                    start: 'top top',
                    end: '+=300%', // Total scroll distance (100% per item)
                    pin: true,
                    scrub: 1,
                }
            });

            products.forEach((_, i) => {
                if (i > 0) {
                    pinTl.to(textRefs.current[i - 1], {
                        opacity: 0,
                        y: -50,
                        duration: 1
                    }, `phase${i}`);

                    pinTl.to(imagesRef.current[i - 1], {
                        scale: 0.5,
                        opacity: 0,
                        rotation: -10,
                        y: -100,
                        duration: 1
                    }, `phase${i}`);

                    pinTl.fromTo(textRefs.current[i], {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1
                    }, `phase${i}`);

                    pinTl.fromTo(imagesRef.current[i], {
                        scale: 1.5,
                        opacity: 0,
                        y: 200,
                        rotation: 10
                    }, {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        rotation: 0,
                        duration: 1
                    }, `phase${i}`);
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="certificados" className="bg-black relative">
            <div
                ref={pinnedSection}
                className="h-screen w-full flex items-center justify-center overflow-hidden relative border-y border-aura-accent/10"
            >
                <div className="absolute inset-0 bg-[#050505] pointer-events-none -translate-y-1/2 rounded-full blur-[150px] top-1/2" />

                <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center w-full h-full relative z-10">

                    {/* Images Container */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center">
                        {products.map((p, i) => (
                            <img
                                key={`img-${p.id}`}
                                ref={(el) => addToRefs(el, 'img')}
                                src={p.img}
                                alt={p.name}
                                className="absolute w-full h-full object-contain max-h-[70vh] mixed-blend-screen drop-shadow-2xl opacity-90"
                                style={{
                                    opacity: i === 0 ? 1 : 0,
                                    zIndex: products.length - i
                                }}
                            />
                        ))}
                    </div>

                    {/* Texts Container */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center md:items-start justify-center flex-col text-center md:text-left">
                        {products.map((p, i) => (
                            <div
                                key={`txt-${p.id}`}
                                ref={(el) => addToRefs(el, 'text')}
                                className="absolute inset-x-0 md:inset-x-auto md:relative flex flex-col justify-center"
                                style={{
                                    opacity: i === 0 ? 1 : 0,
                                    position: i === 0 ? 'relative' : 'absolute',
                                    top: i === 0 ? 'auto' : '50%',
                                    transform: i === 0 ? 'none' : 'translateY(-50%)'
                                }}
                            >
                                <div className="text-aura-accent text-sm font-black tracking-[0.3em] uppercase mb-4">
                                    0{i + 1} / Tipos de Certificado
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight mb-6 text-white">
                                    {p.name}
                                </h2>
                                <p className="text-neutral-400 text-lg md:text-xl max-w-md font-light mb-8 mx-auto md:mx-0">
                                    {p.description}
                                </p>
                                <div className="flex items-center justify-center md:justify-start space-x-6">
                                    <span className="text-2xl font-light text-white/90">{p.price}</span>
                                    <button
                                        onClick={openModal}
                                        className="px-6 py-3 border border-aura-accent/30 hover:bg-aura-accent hover:border-aura-accent hover:text-black text-aura-accent transition-all uppercase tracking-widest text-xs font-bold rounded-sm inline-block"
                                    >
                                        Solicitar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
