'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function MobileFAB() {
    const t = useTranslations('Hero');
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.a
                            initial={{ opacity: 0, y: 15, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            href="tel:+19544645458"
                            className="bg-brand-blue text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-brand-blue/90 transition-all border border-white/20"
                        >
                            <span className="text-xs font-bold px-2">Llámanos</span>
                            <Phone className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 15, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.05 }}
                            href={`https://wa.me/19544645458?text=${encodeURIComponent(t('whatsapp_message'))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#22c35e] transition-all border border-white/20"
                        >
                            <span className="text-xs font-bold px-2">WhatsApp</span>
                            <MessageCircle className="w-5 h-5" />
                        </motion.a>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, rotate: -180, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0, rotate: 180, filter: 'blur(10px)' }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.6
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1, rotate: isOpen ? 45 : 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`group p-4 rounded-full shadow-2xl text-white transition-all duration-300 relative ${isOpen
                                ? 'bg-slate-800 rotate-45'
                                : 'bg-[#25D366] hover:bg-[#22c35e]'
                            }`}
                    >
                        <div className="relative w-6 h-6 flex items-center justify-center">
                            {isOpen ? (
                                <>
                                    <span className="absolute w-6 h-0.5 bg-white rotate-45" />
                                    <span className="absolute w-6 h-0.5 bg-white -rotate-45" />
                                </>
                            ) : (
                                <MessageCircle className="w-6 h-6" />
                            )}
                        </div>

                        {/* Subtle indicator */}
                        {!isOpen && (
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
