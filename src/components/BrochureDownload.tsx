'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, useAnimationControls } from 'framer-motion';
import { Download, FileText, Sparkles } from 'lucide-react';
import { useRef, useCallback } from 'react';

export default function BrochureDownload() {
    const t = useTranslations('Brochure');
    const locale = useLocale();
    const buttonControls = useAnimationControls();
    const isAnimating = useRef(false);

    const brochureUrl = locale === 'es' ? '/brochure/brochure-es.pdf' : '/brochure/brochure-en.pdf';
    const downloadName = locale === 'es' ? 'Hispanic Financial - Catálogo de Servicios 2026.pdf' : 'Hispanic Financial - Service Catalog 2026.pdf';

    const triggerButtonFlash = useCallback(async () => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        try {
            // Flash white
            await buttonControls.start({
                backgroundColor: '#ffffff',
                color: '#263A69',
                boxShadow: '0 0 40px rgba(255,255,255,0.5)',
                transition: { duration: 0.15 },
            });

            // Return to original
            await buttonControls.start({
                backgroundColor: '#D5CD27',
                color: '#263A69',
                boxShadow: '0 20px 50px rgba(213, 205, 39, 0.25)',
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            });

            // Reset shadow
            await buttonControls.start({
                boxShadow: '0 10px 25px rgba(213, 205, 39, 0.2)',
                transition: { duration: 0.3 },
            });
        } finally {
            isAnimating.current = false;
        }
    }, [buttonControls]);

    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#fafbfc] to-white">
            {/* Top separator line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark/10 to-transparent" />

            {/* Animated ambient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[20%] left-[-8%] w-[35vw] h-[35vw] bg-brand-gold/4 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute bottom-[10%] right-[-5%] w-[25vw] h-[25vw] bg-brand-dark/3 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Main card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-[2.5rem] overflow-hidden"
                    >
                        {/* Card background with premium gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-[#1a2a4e]" />

                        {/* Subtle pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.03]"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                                backgroundSize: '32px 32px',
                            }}
                        />

                        {/* Diagonal gold accent glow */}
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
                        >
                            <div className="absolute top-[-50%] right-[-20%] w-full h-full bg-brand-gold/[0.06] rounded-full blur-[80px]" />
                        </motion.div>

                        {/* Glass shimmer sweep */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.02) 38%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 62%, transparent 70%)',
                                backgroundSize: '200% 100%',
                                animation: 'glass-shimmer 15s ease-in-out infinite',
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 p-10 md:p-16 lg:p-20">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                                {/* Left: Text content */}
                                <div className="flex-1 text-center lg:text-left">
                                    {/* Label badge */}
                                    <motion.span
                                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-brand-gold/20"
                                    >
                                        <Sparkles className="w-3 h-3" />
                                        {t('label')}
                                    </motion.span>

                                    {/* Title */}
                                    <motion.h2
                                        initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-3xl md:text-5xl xl:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
                                    >
                                        {t('title')}
                                    </motion.h2>

                                    {/* Gold accent bar */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-20 h-1 bg-brand-gold/50 rounded-full mb-8 mx-auto lg:mx-0 origin-left"
                                    />

                                    {/* Subtitle */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
                                    >
                                        {t('subtitle')}
                                    </motion.p>

                                    {/* CTA Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                                    >
                                        <motion.a
                                            href={brochureUrl}
                                            download={downloadName}
                                            animate={buttonControls}
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: '0 20px 50px rgba(213, 205, 39, 0.3)',
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                                transition: { type: 'spring', stiffness: 500, damping: 20 },
                                            }}
                                            className="relative overflow-hidden inline-flex items-center gap-3 px-10 py-5 bg-brand-gold text-brand-dark rounded-full font-bold text-xs tracking-widest uppercase shadow-xl shadow-brand-gold/20 group"
                                        >
                                            {/* Button sweep effect */}
                                            <span className="absolute inset-0 bg-white rounded-full translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                            <Download className="w-5 h-5 relative z-10" />
                                            <span className="relative z-10">{t('button')}</span>
                                        </motion.a>

                                        <span className="text-[11px] text-white/30 font-semibold tracking-wider uppercase">
                                            {t('file_info')}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Right: Document preview visual */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="hidden lg:block relative"
                                    onMouseEnter={triggerButtonFlash}
                                >
                                    <motion.div
                                        whileHover={{
                                            rotate: -2,
                                            y: -8,
                                            transition: { type: 'spring', stiffness: 200, damping: 15 },
                                        }}
                                        className="relative"
                                    >
                                        {/* Document shadow */}
                                        <div className="absolute inset-4 bg-brand-gold/10 rounded-3xl blur-[40px]" />

                                        {/* Main document card */}
                                        <div className="relative w-[220px] h-[300px] bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-6">
                                            {/* Shimmer on document */}
                                            <div
                                                className="absolute inset-0 rounded-3xl pointer-events-none"
                                                style={{
                                                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.03) 38%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 62%, transparent 70%)',
                                                    backgroundSize: '200% 100%',
                                                    animation: 'glass-shimmer 12s ease-in-out infinite',
                                                    animationDelay: '4s',
                                                }}
                                            />

                                            <div className="p-5 rounded-2xl bg-brand-gold/10 border border-brand-gold/20">
                                                <FileText className="w-10 h-10 text-brand-gold" />
                                            </div>

                                            <div className="text-center">
                                                <p className="text-white/80 font-bold text-sm mb-1">Brochure 2026</p>
                                                <p className="text-white/30 text-[10px] font-semibold uppercase tracking-wider">Hispanic Financial</p>
                                            </div>

                                            {/* Fake content lines */}
                                            <div className="w-full space-y-2 px-2">
                                                <div className="h-1 bg-white/[0.06] rounded-full w-full" />
                                                <div className="h-1 bg-white/[0.06] rounded-full w-4/5" />
                                                <div className="h-1 bg-white/[0.06] rounded-full w-3/5" />
                                            </div>
                                        </div>

                                        {/* Floating badge on document */}
                                        <motion.div
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                            className="absolute -top-4 -right-4 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-brand-green/30"
                                        >
                                            2026
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
