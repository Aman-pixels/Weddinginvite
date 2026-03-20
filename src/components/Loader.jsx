import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onOpen }) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        if (isOpened) return;
        setIsOpened(true);
        setTimeout(onOpen, 2000);
    };

    return (
        <AnimatePresence>
            {!isOpened && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    {/* Premium Textured Background - Lighter warm beige */}
                    <div 
                        className="absolute inset-0 z-0 bg-gradient-to-br from-[#f8f5f0] via-[#efeadc] to-[#e1d7c4]"
                    >
                        {/* Soft Vignette Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)] mix-blend-multiply"></div>
                        {/* Simulated Fabric/Paper Texture */}
                        <div 
                            className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
                        ></div>
                    </div>

                    {/* 3D Scene Container */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center perspective-[2500px]">

                        {/* Envelope Object - Darker rich tone for contrast */}
                        <motion.div
                            className="relative w-[75vw] md:w-[60vw] max-w-[450px] aspect-[1.4/1] preserve-3d cursor-pointer group mt-[-5vh]"
                            initial={{ y: 0, rotateX: 10, rotateZ: -1 }}
                            animate={isOpened
                                ? { y: 600, opacity: 0, rotateX: 45, rotateZ: 0 }
                                : { y: [0, -15, 0], rotateX: [10, 8, 10], rotateZ: [-1, 0, -1] }
                            }
                            whileHover={!isOpened ? {
                                scale: 1.05,
                                y: -25,
                                rotateX: 5,
                            } : {}}
                            transition={isOpened
                                ? { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }
                                : { y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" } }
                            }
                            onClick={handleOpen}
                        >
                            {/* Stronger Realistic Drop Shadow */}
                            <div className="absolute -bottom-[25%] left-[5%] right-[5%] h-[20%] bg-black/40 blur-[30px] rounded-[100%] transition-all duration-500 group-hover:scale-90 group-hover:opacity-30 group-hover:blur-[35px] group-hover:bottom-[-40%]"></div>

                            {/* --- ENVELOPE BACK (Inside body) --- */}
                            <div className="absolute inset-0 bg-[#d8cca8] rounded-md overflow-hidden border border-[#b8ae8e] shadow-[inset_0_-15px_30px_rgba(0,0,0,0.1)]">
                                {/* Deep inner pocket shadow */}
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(0,0,0,0.15)_100%)]"></div>
                                {/* Dark contrasting Inner Lining */}
                                <div className="absolute top-0 left-0 w-full h-[60%] bg-[#4a5d4e] opacity-90 shadow-[inset_0_4px_15px_rgba(0,0,0,0.3)]" 
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}>
                                </div>
                            </div>

                            {/* --- INVITATION CARD (Slides out) --- */}
                            <motion.div
                                className="absolute inset-[4px] mx-auto w-[96%] bg-[#fffdfa] shadow-[0_5px_20px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center text-center p-4 z-10 origin-bottom border border-[#c6a769]/50 rounded-sm"
                                initial={{ y: 0, opacity: 0 }}
                                animate={isOpened ? { y: "-80%", opacity: 1, zIndex: 45, rotateX: 2, rotateZ: 1 } : { y: 0, opacity: 0 }}
                                transition={{ 
                                    opacity: { duration: 0.5, delay: isOpened ? 0.6 : 0 },
                                    y: { duration: 1.8, ease: "circOut", delay: isOpened ? 0.5 : 0 }
                                }}
                            >
                                <div className="w-full h-full border-[1.5px] border-double border-[#c6a769]/60 flex flex-col items-center justify-center px-4 py-8 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                                    <p className="font-serif text-[clamp(10px,2vw,12px)] tracking-[0.3em] text-[#c6a769] uppercase mb-3">The Wedding Of</p>
                                    <h2 className="font-script text-[clamp(2rem,6vw,3.5rem)] text-stone-900 mb-3 drop-shadow-sm leading-none">Damini & Rohin</h2>
                                    <div className="w-12 h-[1px] bg-[#c6a769]/70 mb-3"></div>
                                    <p className="font-serif text-[clamp(10px,2vw,12px)] tracking-[0.2em] text-stone-700 uppercase font-medium">April 25, 2026</p>
                                </div>
                            </motion.div>

                            {/* --- ENVELOPE FRONT FLAPS --- */}
                            {/* Darker richer gradients with inner shadows and top highlights */}
                            
                            {/* Left Flap */}
                            <div className="absolute top-[1px] bottom-0 left-[1px] w-[50%] h-full z-20 pointer-events-none shadow-[inset_1px_1px_3px_rgba(255,255,255,0.4)] drop-shadow-[5px_0_10px_rgba(0,0,0,0.15)]"
                                style={{
                                    clipPath: 'polygon(0 0, 0% 100%, 100% 50%)',
                                    background: 'linear-gradient(135deg, #e4d8bc 0%, #c9bb99 100%)',
                                }}>
                            </div>

                            {/* Right Flap */}
                            <div className="absolute top-[1px] bottom-0 right-[1px] w-[50%] h-full z-20 pointer-events-none shadow-[inset_-1px_1px_3px_rgba(255,255,255,0.4)] drop-shadow-[-5px_0_10px_rgba(0,0,0,0.15)]"
                                style={{
                                    clipPath: 'polygon(100% 0, 100% 100%, 0 50%)',
                                    background: 'linear-gradient(-135deg, #eedb9 0%, #d8caa7 100%)',
                                }}>
                            </div>

                            {/* Bottom Flap */}
                            <div className="absolute bottom-[1px] left-0 w-full h-[60%] z-30 pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.15)] flex items-end justify-center"
                                style={{
                                    clipPath: 'polygon(0 100%, 100% 100%, 50% 15%)',
                                    background: 'linear-gradient(to top, #c7ba98 0%, #e2d6b9 100%)',
                                }}>
                                {/* Soft top-edge highlight */}
                                <div className="absolute inset-0 border-t-[1.5px] border-white/60" style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 15%)' }}></div>
                            </div>

                            {/* --- TOP FLAP (Animated hinge) --- */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full origin-top z-40 preserve-3d"
                                initial={{ rotateX: 0 }}
                                animate={isOpened ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
                                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                            >
                                {/* Flap Outer (Visible when closed) */}
                                <div className="absolute -top-[1px] -left-[1px] w-[calc(100%+2px)] h-[65%] backface-hidden z-50 flex items-center justify-center drop-shadow-[0_8px_15px_rgba(0,0,0,0.25)]"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                                        background: 'linear-gradient(to bottom, #ebdccc 0%, #d2c19d 100%)',
                                    }}>
                                    
                                    {/* Bright Highlight edge styling on top flap */}
                                    <div className="absolute inset-0 pointer-events-none border-b-[2px] border-white/40" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>

                                    {/* LUXURY GOLD WAX SEAL */}
                                    <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-[50%] z-50">
                                        <motion.div
                                            className="relative w-[20vw] max-w-[90px] h-[20vw] max-h-[90px] rounded-full flex items-center justify-center"
                                            style={{
                                                background: 'radial-gradient(circle at 35% 35%, #e0c890 0%, #c6a769 50%, #8c713b 100%)',
                                                boxShadow: '0 10px 20px rgba(0,0,0,0.3), inset -4px -4px 10px rgba(0,0,0,0.4), inset 4px 4px 10px rgba(255,255,255,0.6)'
                                            }}
                                            animate={isOpened ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Irregular organic wax shape feel */}
                                            <div className="absolute inset-0 rounded-full border-[1.5px] border-[#ffe8b3]/40 mix-blend-overlay filter blur-[0.5px]"></div>
                                            
                                            {/* Inner Embossed Ring */}
                                            <div className="w-[80%] h-[80%] rounded-full border border-[#ffe099]/30 flex items-center justify-center bg-gradient-to-br from-[#d4b779] to-[#a38549] shadow-[inset_0_3px_6px_rgba(0,0,0,0.5)]">
                                                {/* Wax Initials */}
                                                <span className="font-script text-[clamp(1.4rem,4.5vw,2.2rem)] text-[#fff5de] drop-shadow-[0_-1px_2px_rgba(0,0,0,0.6)] select-none ml-1">D&R</span>
                                            </div>

                                            {/* Specular Highlight Gloss (Glassy effect) */}
                                            <div className="absolute top-[12%] left-[18%] w-[25%] h-[15%] bg-white/50 rounded-[50%] blur-[2px] transform -rotate-45 pointer-events-none"></div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Flap Inner (Visible when open) */}
                                <div className="absolute -top-[1px] -left-[1px] w-[calc(100%+2px)] h-[65%] bg-[#c0b08b] backface-visible rotate-x-180 z-40"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                                        transform: 'rotateX(180deg)',
                                        boxShadow: 'inset 0 -15px 25px rgba(0,0,0,0.2)'
                                    }}>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* High-visibility Tap Instruction */}
                        <motion.div
                            className="absolute bottom-[8%] flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
                            initial={{ opacity: 0, y: 10 }}
                            animate={!isOpened ? { opacity: [0.8, 1, 0.8], y: [0, -6, 0] } : { opacity: 0 }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            onClick={handleOpen}
                        >
                            <p className="font-serif text-[#c6a769] text-[clamp(14px,3.5vw,16px)] font-bold tracking-[0.5em] uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] mb-3">
                                Tap to Open
                            </p>
                            <div className="text-[#c6a769] text-2xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
                                ✦
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
