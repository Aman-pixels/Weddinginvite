import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Invitation from '../components/Invitation';
import Details from '../components/Details';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import MusicButton from '../components/MusicButton';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-sans text-stone-800"
        >
            <Hero />
            <Invitation />
            <Details />
            <Events />
            <Gallery />
            <Footer />
            <MusicButton />
        </motion.div>
    );
};

export default Home;
