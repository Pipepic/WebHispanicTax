'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView, animate, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Cpu, BrainCircuit, BarChart3, RefreshCw } from 'lucide-react';

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration,
                onUpdate: (latest) => setCount(Math.floor(latest)),
                ease: 'easeOut',
            });
            return controls.stop;
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
}

const techItems = [
    { label: 'AI', icon: Cpu },
    { label: 'Machine Learning', icon: BrainCircuit },
    { label: 'Big Data', icon: BarChart3 },
    { label: 'Reinvention', icon: RefreshCw },
];

export default function About() {
    const t = useTranslations('About');

    // Mouse tilt for CEO photo
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    // Smooth spring motion for "premium" feel
    const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 120 });
    const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 120 });

    const photoRotateX = useTransform(smoothMouseY, [0, 1], [10, -10]);
    const photoRotateY = useTransform(smoothMouseX, [0, 1], [-10, 10]);

    // Parallax layers movement
    const bgX = useTransform(smoothMouseX, [0, 1], [15, -15]);
    const bgY = useTransform(smoothMouseY, [0, 1], [15, -15]);
    const fgX = useTransform(smoothMouseX, [0, 1], [-20, 20]);
    const fgY = useTransform(smoothMouseY, [0, 1], [-20, 20]);

    const handlePhotoMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }, [mouseX, mouseY]);

    const handlePhotoMouseLeave = useCallback(() => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    }, [mouseX, mouseY]);

    return (
        <section id="about" className="py-32 bg-brand-dark text-white relative overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Ambient orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-brand-blue/8 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute bottom-[-5%] left-[-5%] w-[25vw] h-[25vw] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"
            />

            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-8 sm:px-12 lg:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Label badge */}
                            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-brand-gold/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold/40" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                                </span>
                                {t('label')}
                            </span>

                            {/* Title */}
                            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                                {t('title')}
                            </h2>

                            {/* Gold accent bar */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="w-24 h-1.5 bg-brand-gold/40 rounded-full mb-10 origin-left"
                            />

                            {/* Paragraphs */}
                            <div className="space-y-6">
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-base md:text-lg text-slate-300/80 leading-relaxed md:leading-relaxed"
                                >
                                    {t('p1')}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-base md:text-lg text-slate-300/80 leading-relaxed md:leading-relaxed"
                                >
                                    {t('p2')}
                                </motion.p>
                            </div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-16 flex flex-col sm:flex-row gap-12 sm:gap-16"
                            >
                                <div className="group">
                                    <div className="text-5xl md:text-6xl font-black text-brand-gold mb-3 tabular-nums group-hover:text-white transition-colors duration-500">
                                        <Counter value={20} />+
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold group-hover:text-brand-gold transition-colors duration-500">
                                        {t('stat_years')}
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px bg-white/5" />
                                <div className="group">
                                    <div className="text-5xl md:text-6xl font-black text-brand-gold mb-3 tabular-nums group-hover:text-white transition-colors duration-500">
                                        <Counter value={1500} />+
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold group-hover:text-brand-gold transition-colors duration-500">
                                        {t('stat_clients')}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: CEO Photo */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
                            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                rotateX: photoRotateX,
                                rotateY: photoRotateY,
                                transformPerspective: 1200,
                            }}
                            onMouseMove={handlePhotoMouseMove}
                            onMouseLeave={handlePhotoMouseLeave}
                            className="relative"
                        >
                            {/* Decorative offset frame */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="absolute inset-0 border border-brand-gold/15 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10"
                            />

                            {/* Gold glow behind photo */}
                            <div className="absolute inset-8 bg-brand-gold/[0.06] rounded-[2.5rem] blur-[60px] -z-10" />

                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-brand-blue/10 border border-white/[0.06] group shadow-2xl shadow-black/30 relative preserve-3d">
                                {/* Background Layer */}
                                <motion.div
                                    style={{ x: bgX, y: bgY, scale: 1.1 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src="/images/ceo/ceo-bg.png"
                                        alt="Background"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* CEO (Foreground) Layer */}
                                <motion.div
                                    style={{ x: fgX, y: fgY, scale: 1.1, z: 50 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src="/images/ceo/ceo-fg.png"
                                        alt="Alvaro Patino - CEO Hispanic Financial"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-contain mt-12 scale-[1.3] filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    />
                                </motion.div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-80" />

                                {/* Glass shimmer */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                    style={{
                                        background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.02) 38%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 62%, transparent 70%)',
                                        backgroundSize: '200% 100%',
                                        animation: 'glass-shimmer 12s ease-in-out infinite',
                                    }}
                                />

                                {/* CEO info at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-black mb-1 tracking-tight">Alvaro Patino</h3>
                                        <div className="text-brand-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                                            Founder & CEO
                                        </div>

                                        {/* Quote with subtle glass background */}
                                        <div className="bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-4 md:p-5">
                                            <p className="text-slate-200/80 italic font-light leading-relaxed text-sm md:text-base">
                                                &ldquo;{t('quote')}&rdquo;
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Innovation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-32 pt-32 border-t border-white/5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[10px] tracking-[0.3em] uppercase border border-brand-blue/15">
                                <Cpu className="w-3 h-3" />
                                {t('innovation_title')}
                            </span>

                            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">
                                {t('innovation_desc_title')}
                            </h3>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="w-16 h-1 bg-brand-blue/30 rounded-full origin-left"
                            />

                            <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                                {t('innovation_desc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {techItems.map((tech, i) => {
                                const Icon = tech.icon;
                                return (
                                    <motion.div
                                        key={tech.label}
                                        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.2 + i * 0.1,
                                            duration: 0.8,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { type: 'spring', stiffness: 300, damping: 20 },
                                        }}
                                        className="p-6 md:p-8 bg-white/[0.03] rounded-2xl border border-white/[0.06] flex flex-col items-center justify-center text-center gap-4 group cursor-default hover:bg-brand-blue/10 hover:border-brand-blue/15 transition-colors duration-500"
                                    >
                                        <div className="p-3 rounded-xl bg-brand-gold/10 group-hover:bg-brand-gold/20 transition-colors duration-500">
                                            <Icon className="w-5 h-5 text-brand-gold" />
                                        </div>
                                        <span className="text-xs font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors duration-500">
                                            {tech.label}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
