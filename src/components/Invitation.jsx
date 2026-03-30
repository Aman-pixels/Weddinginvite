import React from 'react';
import { motion } from 'framer-motion';

const Invitation = () => {
    return (
        <section className="py-24 px-6 bg-stone-50 flex flex-col items-center justify-center text-center">
            <motion.div
                className="max-w-2xl mx-auto flex flex-col items-center space-y-6 md:space-y-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
            >
                <motion.p 
                    className="font-serif italic text-stone-500 text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    By the infinite grace of the Almighty,
                </motion.p>
                
                <div className="w-16 h-[1px] bg-wedding-gold/40 my-4 md:my-8"></div>

                <div className="space-y-4 md:space-y-6">
                    <p className="font-serif text-stone-600 text-base md:text-lg leading-relaxed">
                        Smt. Savita and Shri Rakesh Kumar Saini<br/>
                        cordially invite you to the wedding of their beloved daughter
                    </p>
                    
                    <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-wedding-gold my-6 md:my-10">
                        Damini Saini
                    </h2>
                    
                    <p className="font-serif text-stone-500 italic text-lg md:text-xl">
                        with
                    </p>
                    
                    <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-wedding-gold my-6 md:my-10">
                        Rohin Saini
                    </h2>
                    
                    <p className="font-sans text-stone-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                        (Son of Shri Rajkumar Saini & Smt. Anu Saini, Pathankot)
                    </p>
                </div>
                
                <div className="w-16 h-[1px] bg-wedding-gold/40 my-4 md:my-8"></div>
            </motion.div>
        </section>
    );
};

export default Invitation;
