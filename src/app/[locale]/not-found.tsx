'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import {
    Home,
    Briefcase,
    MessageSquare,
    ArrowRight,
    Search,
    ChevronRight,
    HelpCircle
} from 'lucide-react';

export default function NotFound() {
    const t = useTranslations('NotFound');
    const navT = useTranslations('Navbar');

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    const moveX = useTransform(mouseX, [0, 1], [-20, 20]);
    const moveY = useTransform(mouseY, [0, 1], [-20, 20]);
    const moveXReverse = useTransform(mouseX, [0, 1], [40, -40]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    return (
        <main
            onMouseMove={handleMouseMove}
            className="min-h-screen bg-[#fafafa] relative overflow-hidden flex flex-col items-center justify-center px-6 py-20"
        >
            {/* Background Decorative Elements */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div
                style={{ x: moveXReverse, y: moveY }}
                className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="container max-w-5xl mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Content Column */}
                    <div className="text-left">
                        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
                            <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-brand-gold/20">
                                {t('badge')}
                            </span>
                            <div className="h-[1px] w-12 bg-slate-200" />
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                                {t('status')}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-8xl font-bold text-brand-dark mb-6 tracking-tight leading-none"
                        >
                            {t('title_part1')} <br />
                            <span className="text-brand-green">{t('title_part2')}</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-slate-500 mb-10 max-w-md font-light leading-relaxed"
                        >
                            {t('description')}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <Link href="/">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-brand-green text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-brand-green/20 hover:shadow-brand-green/30 transition-all flex items-center gap-3 pr-6"
                                >
                                    <Home size={18} />
                                    {t('cta')}
                                </motion.div>
                            </Link>

                            <Link href="/#services">
                                <motion.div
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(38, 58, 105, 1)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3"
                                >
                                    <Briefcase size={18} />
                                    {navT('services')}
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Navigation Bento Column */}
                    <div className="flex flex-col gap-4">
                        {/* Big Card - Internationalized and Simplified */}
                        <motion.div
                            variants={itemVariants}
                            className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all group overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-6">
                                <Search size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{t('box_title')}</h3>
                            <p className="text-slate-500 text-sm font-light mb-6">{t('box_desc')}</p>
                            <Link href="/#contact" className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                {t('box_cta')} <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Watermark */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
                >
                    <span className="text-[300px] md:text-[450px] font-black tracking-tighter text-brand-gold/40">404</span>
                </motion.div>
            </div>
        </main>
    );
}
