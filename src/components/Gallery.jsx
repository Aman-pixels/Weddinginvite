import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "/couple%201.jpeg",
    "/couple%202.jpeg",
    "https://placehold.co/400x500/f5f5dc/333333?text=Details",
    "https://placehold.co/500x500/e6e6fa/333333?text=Moments",
    "https://placehold.co/400x600/ffe4e1/333333?text=Love",
    "https://placehold.co/600x400/f0f8ff/333333?text=Decor"
];

const Gallery = () => {
    return (
        <section className="py-20 px-4 bg-stone-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="font-script text-5xl md:text-6xl text-wedding-gold mb-4">Our Gallery</h2>
                    <p className="font-serif text-stone-500 italic">Captured Moments</p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid overflow-hidden rounded-lg shadow-md mb-4 group relative"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
