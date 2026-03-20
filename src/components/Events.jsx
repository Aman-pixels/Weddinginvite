import React from 'react';
import { motion } from 'framer-motion';

const events = [
    {
        title: "Shri Ramayan Path Begins",
        date: "April 19, 2026 (Sunday)",
        time: "10:00 AM",
        location: "Shri Ram Kripa Niwas, Village Dhobda",
        image: "/rampath.jpg"
    },
    {
        title: "Completion & Preeti Bhoj",
        date: "April 20, 2026 (Monday)",
        time: "Path Completion at 10:00 AM, Lunch at 1:00 PM",
        location: "Shri Ram Kripa Niwas, Village Dhobda",
        image: "/c661ce996617cffb686a21846ec4dc43.jpg"
    },
    {
        title: "Wedding & Reception",
        date: "April 25, 2026 (Saturday)",
        time: "Baarat Welcome 8:00 PM | Doli Under Starry Sky",
        location: "Uday Resorts, Jasswali, Pathankot",
        image: "/wed.jpg"
    }
];

const EventCard = ({ event, index }) => (
    <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-wedding-gold/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
    >
        <div className="h-48 overflow-hidden">
            <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="font-serif text-2xl text-wedding-charcoal mb-2">{event.title}</h3>
            <div className="w-12 h-[1px] bg-wedding-gold mx-auto mb-4"></div>
            <p className="font-sans text-stone-600 mb-1">{event.date}</p>
            <p className="font-sans text-stone-500 text-sm mb-3">{event.time}</p>
            <p className="font-serif text-stone-400 italic text-sm">{event.location}</p>
        </div>
    </motion.div>
);

const Events = () => {
    return (
        <section className="py-20 px-4 bg-wedding-beige/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="font-script text-5xl md:text-6xl text-wedding-gold mb-4">Wedding Events</h2>
                    <p className="font-serif text-stone-500 italic">Join us in our celebration</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
