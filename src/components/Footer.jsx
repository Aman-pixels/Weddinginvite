import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-wedding-charcoal text-wedding-beige py-12 text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="font-script text-4xl mb-4">Damini & Rohin</h2>
                <p className="font-serif text-sm tracking-widest uppercase mb-8">Forever & Always</p>
                
                <div className="mb-8 space-y-2">
                    <p className="font-serif text-sm md:text-base text-stone-300">With Best Compliments From:</p>
                    <p className="font-sans text-sm md:text-base">Aditya Saini – 94781-94387</p>
                    <p className="font-sans text-sm md:text-base">Afreshdeep Saini – 96736-13182</p>
                    <p className="font-serif italic text-sm md:text-base mt-2">& Entire Saini Family</p>
                </div>

                <p className="font-sans text-xs text-stone-400">
                    &copy; 2026 Wedding Invitation. Made with love.
                    ~Aman✨
                </p>
            </div>
        </footer>
    );
};

export default Footer;
