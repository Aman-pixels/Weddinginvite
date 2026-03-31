import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const DetailCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        className="flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-sm shadow-sm border border-stone-100 rounded-lg hover:border-wedding-gold/30 transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.2)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay }}
    >
        <div className="p-4 rounded-full bg-wedding-beige/50 mb-4 text-wedding-gold">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl text-wedding-charcoal mb-2 tracking-wide">{title}</h3>
        <p className="font-sans text-stone-600 leading-relaxed max-w-xs text-sm">{description}</p>
    </motion.div>
);

const Details = () => {
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
                    <h2 className="font-script text-5xl md:text-6xl text-wedding-gold mb-4">Celebration Details</h2>
                    <p className="font-serif text-stone-500 italic">We can't wait to celebrate with you</p>
                </motion.div>

                <motion.div
                    className="p-8 md:p-12 text-center"
                    style={{ willChange: 'transform, opacity' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="font-serif text-wedding-gold text-lg md:text-xl mb-4 tracking-widest uppercase">Wedding Ceremony</h3>
                    <p className="font-serif text-stone-600 mb-6 leading-relaxed">
                        Join us as we celebrate a night of joy, dancing, and eternal love under the starry sky.
                    </p>
                    <div className="w-12 h-[1px] bg-wedding-gold/30 mx-auto my-6"></div>
                    <p className="font-serif text-sm text-stone-500 uppercase tracking-widest">8:00 PM</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <DetailCard
                        icon={Calendar}
                        title="The Date"
                        description="Saturday, April 25th, 2026"
                        delay={0.2}
                    />
                    <DetailCard
                        icon={Clock}
                        title="The Time"
                        description="Baarat Welcome at 8:00 PM. Doli under the starry sky."
                        delay={0.4}
                    />
                    <DetailCard
                        icon={MapPin}
                        title="The Venue"
                        description={
                            <span>
                                Udhay Resorts
                                <br />
                                Jasswali, Pathankot
                                <br />
                                <a
                                    href="#"
                                    className="text-wedding-gold hover:underline text-sm font-bold mt-2 inline-block"
                                >
                                    View on Map
                                </a>
                            </span>
                        }
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default Details;
