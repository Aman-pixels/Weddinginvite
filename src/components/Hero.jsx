import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 300], [0, 100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: 'url("/wed%20bg.jpg")',
                    filter: 'brightness(1.05) contrast(1.05)'
                }}
            >
                <div className="absolute inset-0 bg-white/10"></div>
            </div>

            <motion.div
                className="relative z-10 h-full flex flex-col items-center justify-center text-center text-stone-800 px-4"
                style={{ y: yText, opacity: opacityText }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                {/* Top Text */}
                <motion.p
                    className="font-serif text-[clamp(0.7rem,2vw,1rem)] tracking-[0.5em] uppercase mb-8 md:mb-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    We Are Getting Married
                </motion.p>

                {/* Names */}
                <motion.h1
                    className="font-script text-[clamp(3.5rem,10vw,8rem)] mb-8 md:mb-10 text-stone-800 drop-shadow-[0_0_25px_rgba(255,255,255,1)] leading-none"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                >
                    Damini <span className="text-wedding-gold text-[clamp(2rem,6vw,4.5rem)] align-middle drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">&</span> Rohin
                </motion.h1>

                {/* Date */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <div className="w-16 h-[1px] bg-wedding-gold/60 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"></div>
                    <p className="font-serif text-[clamp(1rem,3vw,1.5rem)] tracking-[0.2em] uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-medium">
                        April 25, 2026
                    </p>
                    <div className="w-16 h-[1px] bg-wedding-gold/60 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"></div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="absolute bottom-12 md:bottom-16 w-full text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    <p className="font-serif text-[10px] md:text-xs tracking-[0.4em] uppercase text-stone-500 mb-2">
                        RSVP
                    </p>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-wedding-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    >
                        ✦
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Hero;
