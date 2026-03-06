import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { storeConfig } from '../data/config';
import { useModal } from '../context/ModalContext';
// We will use the dynamically generated core image for the hero
import coreImg from '../assets/apsilva_core_1772779061801.png';

const Hero = () => {
    const { openModal } = useModal();
    const container = useRef();
    const title1 = useRef();
    const title2 = useRef();
    const subtitle = useRef();
    const mainImage = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(title1.current, { y: 100, opacity: 0, duration: 1, ease: "power4.out", delay: 0.2 })
            .from(title2.current, { y: 100, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
            .from(subtitle.current, { opacity: 0, y: 20, duration: 1, ease: "power2.out" }, "-=0.6")
            .from(mainImage.current, { scale: 1.2, opacity: 0, filter: "blur(20px)", duration: 2, ease: "power3.out" }, "-=1.2");

        gsap.to(mainImage.current, {
            y: -20,
            rotation: 2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-aura-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between h-full pt-20">

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full order-2 md:order-1 z-20">
                    <div className="overflow-hidden mb-2">
                        <h1 ref={title1} className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                            Identidade
                        </h1>
                    </div>
                    <div className="overflow-hidden mb-8">
                        <h1 ref={title2} className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-transparent" style={{ WebkitTextStroke: '2px #10b981' }}>
                            Infalível.
                        </h1>
                    </div>
                    <p ref={subtitle} className="text-lg md:text-xl text-neutral-400 max-w-md font-light tracking-wide mb-10 border-l-2 border-aura-accent pl-4">
                        {storeConfig.storeDescription}
                    </p>
                    <button
                        onClick={openModal}
                        className="px-8 py-4 bg-aura-accent text-black font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
                    >
                        Renovar ou Emitir Agora
                    </button>
                </div>

                {/* 3D Asset */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative order-1 md:order-2 flex items-center justify-center">
                    <img
                        ref={mainImage}
                        src={coreImg}
                        alt="APSILVA Security Core"
                        className="w-full h-full object-contain max-w-[800px] mixed-blend-screen opacity-90"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
