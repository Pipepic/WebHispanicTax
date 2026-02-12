'use client';

import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import {
    Building2,
    FileText,
    Home,
    ShieldCheck,
    BarChart3,
    ChevronDown,
    ArrowRight
} from 'lucide-react';

const icons = {
    incorporation: Building2,
    taxes: FileText,
    real_estate: Home,
    protection: ShieldCheck,
    accounting: BarChart3,
};

const accentColors: Record<string, { bg: string; text: string; border: string; glow: string; hoverBg: string; hoverBorder: string }> = {
    incorporation: {
        bg: 'bg-brand-blue/5',
        text: 'text-brand-blue',
        border: 'border-brand-blue/10',
        glow: 'rgba(34,104,155,0.15)',
        hoverBg: 'rgba(34,104,155,0.03)',
        hoverBorder: 'rgba(34,104,155,0.15)',
    },
    taxes: {
        bg: 'bg-brand-green/5',
        text: 'text-brand-green',
        border: 'border-brand-green/10',
        glow: 'rgba(114,191,68,0.15)',
        hoverBg: 'rgba(114,191,68,0.03)',
        hoverBorder: 'rgba(114,191,68,0.15)',
    },
    real_estate: {
        bg: 'bg-amber-500/5',
        text: 'text-amber-600',
        border: 'border-amber-500/10',
        glow: 'rgba(245,158,11,0.12)',
        hoverBg: 'rgba(245,158,11,0.03)',
        hoverBorder: 'rgba(245,158,11,0.15)',
    },
    protection: {
        bg: 'bg-brand-dark/5',
        text: 'text-brand-dark',
        border: 'border-brand-dark/10',
        glow: 'rgba(38,58,105,0.12)',
        hoverBg: 'rgba(38,58,105,0.03)',
        hoverBorder: 'rgba(38,58,105,0.12)',
    },
    accounting: {
        bg: 'bg-emerald-500/5',
        text: 'text-emerald-600',
        border: 'border-emerald-500/10',
        glow: 'rgba(16,185,129,0.15)',
        hoverBg: 'rgba(16,185,129,0.03)',
        hoverBorder: 'rgba(16,185,129,0.15)',
    },
};

function ServiceCard({
    id,
    title,
    desc,
    details,
    index,
    viewLabel,
    closeLabel,
}: {
    id: string;
    title: string;
    desc: string;
    details: string[];
    index: number;
    viewLabel: string;
    closeLabel: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = icons[id as keyof typeof icons] || Building2;
    const colors = accentColors[id] || accentColors.incorporation;

    // Mouse tilt effect
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
    const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
        setIsOpen(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
                scale: 1.04,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={handleMouseLeave}
            className={`relative group rounded-[2rem] border p-8 md:p-10 overflow-hidden cursor-default bg-white transition-shadow duration-700 ${isOpen
                ? `ring-2 ring-brand-blue/15 shadow-2xl`
                : `border-slate-100/80`
                }`}
        >
            {/* Color tint background on hover */}
            <div
                className="absolute inset-0 rounded-[2rem] pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: colors.hoverBg }}
            />
            {/* Colored border overlay on hover */}
            <div
                className="absolute inset-0 rounded-[2rem] pointer-events-none border-2 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                style={{ borderColor: colors.hoverBorder }}
            />

            {/* Glass shimmer effect */}
            <div
                className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 38%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 62%, transparent 70%)',
                    backgroundSize: '200% 100%',
                    animation: 'glass-shimmer 10s ease-in-out infinite',
                    animationDelay: `${index * 1.5}s`,
                }}
            />

            {/* Ambient glow - top right */}
            <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[100px] transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: colors.glow }}
            />
            {/* Ambient glow - bottom left */}
            <div
                className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-[80px] transition-opacity duration-700 opacity-0 group-hover:opacity-60 pointer-events-none"
                style={{ background: colors.glow }}
            />

            <div className="relative z-10">
                {/* Icon + Expand Toggle Row */}
                <div className="flex items-start justify-between mb-7">
                    <motion.div
                        className={`p-4 rounded-2xl ${colors.bg} transition-all duration-500`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        <Icon className={`w-7 h-7 ${colors.text} transition-colors duration-300`} />
                    </motion.div>

                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`p-2.5 rounded-full border transition-all duration-500 ${isOpen
                            ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                            : 'border-slate-200 text-slate-400 group-hover:border-brand-blue/30 group-hover:text-brand-blue'
                            }`}
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 leading-tight transition-colors duration-500 ${isOpen ? 'text-brand-blue' : 'text-brand-dark group-hover:text-brand-blue'
                    }`}>
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {desc}
                </p>

                {/* Expandable Details */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="pt-6 border-t border-slate-100 space-y-3">
                                {details.map((detail, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -15, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            delay: i * 0.06,
                                            duration: 0.6,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="flex items-start gap-3 text-sm text-slate-600 font-medium"
                                    >
                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ backgroundColor: colors.glow.replace(/[\d.]+\)$/, '0.6)') }}
                                        />
                                        {detail}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom action label */}
                <div className="mt-8 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-dark/50 group-hover:text-brand-blue flex items-center gap-2 transition-colors duration-500">
                        {isOpen ? closeLabel : viewLabel}
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? 'rotate-[-90deg]' : 'group-hover:translate-x-1'
                            }`} />
                    </span>

                    {/* Detail count badge */}
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all duration-500 ${isOpen
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : 'bg-slate-50 text-slate-400 group-hover:bg-brand-blue/5 group-hover:text-brand-blue'
                        }`}>
                        {details.length}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default function Services() {
    const t = useTranslations('Services');
    const serviceKeys = ['incorporation', 'taxes', 'real_estate', 'protection', 'accounting'];

    return (
        <section id="services" className="py-32 bg-gradient-to-b from-white via-[#fafbfc] to-white relative overflow-hidden">
            {/* Ambient background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[10%] left-[-5%] w-[30vw] h-[30vw] bg-brand-blue/3 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute bottom-[5%] right-[-5%] w-[25vw] h-[25vw] bg-brand-green/3 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-blue/[0.06] text-brand-blue font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-brand-blue/10"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue/40"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        {t('label')}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl xl:text-7xl font-black text-brand-dark mb-8 tracking-tight leading-[1.05]"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-24 h-1.5 bg-brand-gold/40 rounded-full mx-auto mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-brand-dark/60 leading-relaxed font-medium"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* Services Grid - Masonry-like stagger */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {serviceKeys.map((key, index) => (
                        <ServiceCard
                            key={key}
                            id={key}
                            title={t(`items.${key}.title`)}
                            desc={t(`items.${key}.desc`)}
                            details={t.raw(`items.${key}.details`)}
                            index={index}
                            viewLabel={t('view_details')}
                            closeLabel={t('close')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
