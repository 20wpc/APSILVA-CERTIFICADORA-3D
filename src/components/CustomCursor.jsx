import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        document.body.style.cursor = 'none';
        const hoverElements = document.querySelectorAll('a, button, input, textarea');

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursorRef.current, { x: clientX, y: clientY, duration: 0, ease: 'none' });
            gsap.to(followerRef.current, { x: clientX, y: clientY, duration: 0.2, ease: 'power2.out' });
        };

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', onMouseMove);
        hoverElements.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
            el.style.cursor = 'none';
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            hoverElements.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-aura-accent rounded-full pointer-events-none z-[9999]" style={{ transform: 'translate(-50%, -50%)' }} />
            <div ref={followerRef} className={`fixed top-0 left-0 rounded-full border border-aura-accent pointer-events-none z-[9998] transition-all duration-300 ease-out flex items-center justify-center ${isHovering ? 'w-16 h-16 bg-aura-accent/10 backdrop-blur-sm' : 'w-8 h-8 opacity-50'}`} style={{ transform: 'translate(-50%, -50%)' }} />
        </>
    );
};

export default CustomCursor;
