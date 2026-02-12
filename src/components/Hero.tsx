'use client';

import { motion, useMotionValue, useTransform, animate, useScroll, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useRef, useEffect } from 'react';
import IntroSequence from './IntroSequence';
import { Building2, Calculator, Landmark, BarChart3, MessageCircle } from 'lucide-react';

function ExperienceCounter() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const timeout = setTimeout(() => {
            animate(count, 20, { duration: 2.5, ease: "easeOut" });
        }, 1200);
        return () => clearTimeout(timeout);
    }, []);

    return <motion.span>{rounded}</motion.span>;
}

const trustLogos = [
    { id: 1, name: 'ACFE', src: '/images/logos/ACFE.webp' },
    { id: 2, name: 'AICPA', src: '/images/logos/AICPA.webp' },
    { id: 3, name: 'AAA', src: '/images/logos/American_Accounting_Association.webp' },
];

export default function Hero() {
    const t = useTranslations('Hero');
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    const moveX = useTransform(mouseX, [0, 1], [30, -30]);
    const moveY = useTransform(mouseY, [0, 1], [30, -30]);

    // Extracted from JSX to respect React hooks rules
    const ambientX = useTransform(mouseX, [0, 1], [-40, 40]);
    const ambientY = useTransform(mouseY, [0, 1], [-40, 40]);

    // Multi-layered Parallax Scroll Logic for the right column (Desktop only)
    const { scrollY } = useScroll();
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    // Precise Multi-layered Parallax (Desktop only)
    // Speeds: Ultra-Fast (-550px), Very-Fast (-420px), Fast (-300px), Slow (-180px)
    const y1 = useTransform(scrollY, [0, 1000], [0, isDesktop ? -550 : 0]);
    const y2 = useTransform(scrollY, [0, 1000], [0, isDesktop ? -420 : 0]);
    const y3 = useTransform(scrollY, [0, 1000], [0, isDesktop ? -300 : 0]);
    const y4 = useTransform(scrollY, [0, 1000], [0, isDesktop ? -180 : 0]);

    const rightY1 = useSpring(y1, { stiffness: 100, damping: 30 });
    const rightY2 = useSpring(y2, { stiffness: 100, damping: 30 });
    const rightY3 = useSpring(y3, { stiffness: 100, damping: 30 });
    const rightY4 = useSpring(y4, { stiffness: 100, damping: 30 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.8,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    const logoContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 1.8,
            }
        }
    };

    const logoItemVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    const serviceIcons = [
        { icon: Calculator, label: t('service_1'), color: '#D5CD27', textColor: '#263A69' },
        { icon: Building2, label: t('service_2'), color: '#72BF44', textColor: '#ffffff' },
        { icon: BarChart3, label: t('service_3'), color: '#22689B', textColor: '#ffffff' },
        { icon: Landmark, label: t('service_4'), color: '#263A69', textColor: '#ffffff' },
    ];

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-24 pb-12"
            onMouseMove={handleMouseMove}
        >
            {/* Cinematic Intro Animation Background */}
            <IntroSequence />

            {/* Ambient circles - unified blue tones */}
            <motion.div
                style={{ x: moveX, y: moveY }}
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.35, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-brand-blue/4 rounded-full blur-[150px] pointer-events-none z-[1]"
            />

            <motion.div
                style={{ x: ambientX, y: ambientY }}
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-brand-blue/3 rounded-full blur-[150px] pointer-events-none z-[1]"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="lg:w-3/5 xl:w-1/2 text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="relative inline-flex items-center gap-3 py-2 px-6 rounded-full bg-brand-green/15 text-brand-green font-bold text-xs mb-8 tracking-[0.2em] uppercase border border-brand-green/30 shadow-[0_0_20px_rgba(114,191,68,0.2)] backdrop-blur-sm"
                        >
                            {/* Pulsing attention dot */}
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green/60"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green shadow-[0_0_8px_rgba(114,191,68,0.5)]"></span>
                            </span>

                            <span className="flex items-center text-sm">
                                <ExperienceCounter />+
                            </span>
                            <span className="opacity-90">{t('badge_suffix')}</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl xl:text-8xl font-black text-brand-dark tracking-tight mb-8 leading-[1.05] drop-shadow-sm"
                        >
                            {t.rich('title', {
                                highlight: (chunks) => (
                                    <span className="relative inline-block">
                                        <span className="text-brand-blue">{chunks}</span>
                                        <motion.span
                                            className="absolute -bottom-2 left-0 w-full h-1.5 bg-brand-gold/40 rounded-full"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    </span>
                                )
                            })}
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="relative mb-12 max-w-xl group"
                        >
                            <div className="absolute -inset-x-6 -inset-y-4 bg-white/[0.03] backdrop-blur-xl rounded-3xl -z-10 border border-white/5" />
                            <p className="text-lg md:text-xl text-brand-dark/75 leading-relaxed font-medium">
                                {t('subtitle')}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-5 items-start flex-wrap"
                        >
                            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-xs tracking-widest uppercase shadow-xl shadow-brand-dark/20 hover:shadow-brand-dark/40 transition-all duration-300"
                                >
                                    {t('cta_primary')}
                                </a>
                            </motion.div>
                            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <a
                                    href={`https://wa.me/19544645458?text=${encodeURIComponent(t('whatsapp_message'))}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-10 py-5 bg-brand-green text-white rounded-full font-bold text-xs tracking-widest uppercase shadow-xl shadow-brand-green/20 hover:shadow-brand-green/40 transition-all duration-300"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </a>
                            </motion.div>
                            <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <a
                                    href="#services"
                                    className="inline-flex items-center px-10 py-5 bg-white text-brand-blue border border-brand-blue/20 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    {t('cta_secondary')}
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Balanced with logos, stats, and service highlights */}
                    <motion.div
                        className="lg:w-2/5 flex flex-col items-center lg:items-end gap-6 mt-12 lg:mt-0"
                        variants={logoContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Trust Logos */}
                        <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5 w-full max-w-2xl lg:max-w-[280px]">
                            {trustLogos.map((logo, index) => {
                                // Assign different parallax speeds based on index
                                const parallaxes = [rightY1, rightY2, rightY3];
                                const yValue = parallaxes[index % 3];

                                return (
                                    <motion.div
                                        key={logo.id}
                                        variants={logoItemVariants}
                                        style={{ y: yValue }}
                                        className="relative p-4 lg:p-7 bg-brand-blue/[0.06] backdrop-blur-md border border-brand-blue/10 rounded-2xl lg:rounded-[2.5rem] flex items-center justify-center group transition-all duration-700 ease-out hover:bg-white hover:border-brand-gold/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 overflow-hidden"
                                    >
                                        {/* Glass shimmer reflection */}
                                        <div
                                            className="absolute inset-0 rounded-2xl lg:rounded-[2.5rem] pointer-events-none"
                                            style={{
                                                background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 38%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 62%, transparent 70%)',
                                                backgroundSize: '200% 100%',
                                                animation: 'glass-shimmer 10s ease-in-out infinite',
                                                animationDelay: `${logo.id * 2}s`,
                                            }}
                                        />
                                        <img
                                            src={logo.src}
                                            alt={logo.name}
                                            className="h-6 md:h-8 lg:h-11 w-auto object-contain transition-all duration-700 opacity-100 relative z-10"
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Strategic Partners Label */}
                        <motion.div
                            variants={logoItemVariants}
                            style={{ y: rightY3 }}
                            className="text-right hidden lg:block"
                        >
                            <motion.span
                                className="font-bold uppercase tracking-[0.4em] border-r-2 pr-4 inline-block"
                                initial={{
                                    fontSize: '12px',
                                    color: '#D5CD27',
                                    borderColor: 'rgba(213, 205, 39, 0.8)',
                                    textShadow: '0 0 20px rgba(213, 205, 39, 0.4)',
                                    letterSpacing: '0.5em',
                                }}
                                animate={{
                                    fontSize: '10px',
                                    color: '#94a3b8',
                                    borderColor: 'rgba(213, 205, 39, 0.5)',
                                    textShadow: '0 0 0px rgba(213, 205, 39, 0)',
                                    letterSpacing: '0.4em',
                                }}
                                transition={{
                                    delay: 4,
                                    duration: 2,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {t('strategic_partners')}
                            </motion.span>
                        </motion.div>

                        {/* Mini Stats Row (desktop only) */}
                        <motion.div
                            variants={logoItemVariants}
                            style={{ y: rightY4 }}
                            className="hidden lg:flex items-center gap-6 mt-2 w-full max-w-[280px]"
                        >
                            <div className="flex-1 text-right pr-6 border-r border-brand-dark/10">
                                <motion.p
                                    className="text-2xl font-black text-brand-dark"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {t('stat_clients_number')}
                                </motion.p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-0.5">
                                    {t('stat_clients')}
                                </p>
                            </div>
                            <div className="flex-1">
                                <motion.p
                                    className="text-2xl font-black text-brand-green"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {t('stat_satisfaction_number')}
                                </motion.p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-0.5">
                                    {t('stat_satisfaction')}
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Highlights (desktop only) */}
                        <motion.div
                            variants={logoItemVariants}
                            style={{ y: rightY4 }}
                            className="hidden lg:block w-full max-w-[280px] mt-2"
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">
                                {t('right_label')}
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {serviceIcons.map((service, index) => (
                                    <motion.a
                                        key={service.label}
                                        href="#services"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 3.2 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            backgroundColor: service.color,
                                        }}
                                        className="flex items-center gap-2 py-2.5 px-4 rounded-xl shadow-lg border-0 group transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:scale-95"
                                    >
                                        <service.icon
                                            className="w-4 h-4 shrink-0"
                                            style={{ color: service.textColor }}
                                        />
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-[0.05em] leading-tight"
                                            style={{ color: service.textColor }}
                                        >
                                            {service.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-12 hidden lg:flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex flex-col items-center gap-2">
                    <motion.div
                        className="w-[1px] h-12 bg-gradient-to-b from-brand-blue/40 via-brand-blue/20 to-transparent"
                        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold rotate-[-90deg] origin-left">Scroll</span>
            </motion.div>
        </div>
    );
}
