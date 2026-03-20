import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause } from 'lucide-react';

const MusicButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <audio ref={audioRef} loop>
                <source src="/othaiyadi-pathayila-koshalworldcom_YHRe138r.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            <div className="relative">
                {isPlaying && (
                    <motion.div
                        className="absolute inset-0 bg-wedding-gold rounded-full opacity-50"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}

                <motion.button
                    onClick={togglePlay}
                    className="relative w-12 h-12 rounded-full bg-wedding-gold text-white flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                >
                    {isPlaying ? <Pause size={20} /> : <Music size={20} />}
                </motion.button>
            </div>
        </div>
    );
};

export default MusicButton;
