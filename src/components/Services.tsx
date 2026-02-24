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
        hoverBg: 'rgba(34,104,155,0.02)',
        hoverBorder: 'rgba(34,104,155,0.1)',
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
        bg: 'bg-brand-dark/5',
        text: 'text-brand-dark',
        border: 'border-brand-dark/10',
        glow: 'rgba(38,58,105,0.12)',
        hoverBg: 'rgba(38,58,105,0.03)',
        hoverBorder: 'rgba(38,58,105,0.12)',
    },
    protection: {
        bg: 'bg-brand-blue/5',
        text: 'text-brand-blue',
        border: 'border-brand-blue/10',
        glow: 'rgba(34,104,155,0.15)',
        hoverBg: 'rgba(34,104,155,0.03)',
        hoverBorder: 'rgba(34,104,155,0.15)',
    },
    accounting: {
        bg: 'bg-brand-green/5',
        text: 'text-brand-green',
        border: 'border-brand-green/10',
        glow: 'rgba(114,191,68,0.15)',
        hoverBg: 'rgba(114,191,68,0.03)',
        hoverBorder: 'rgba(114,191,68,0.15)',
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
    image,
}: {
    id: string;
    title: string;
    desc: string;
    details: string[];
    index: number;
    viewLabel: string;
    closeLabel: string;
    image?: string;
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
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300, damping: 25 }
            }}
            style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={handleMouseLeave}
            className={`relative group rounded-[2rem] border min-h-[440px] flex flex-col p-8 md:p-10 overflow-hidden cursor-default bg-white transition-all duration-700 ${isOpen
                ? `ring-4 ring-brand-blue/5 shadow-2xl border-brand-blue/20`
                : `border-slate-100/80`
                }`}
        >
            {/* Color tint background on hover */}
            <div
                className="absolute inset-0 rounded-[2rem] pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: colors.hoverBg }}
            />

            {/* Glass shimmer effect */}
            <div
                className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 38%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.4) 62%, transparent 70%)',
                    backgroundSize: '200% 100%',
                    animation: 'glass-shimmer 12s ease-in-out infinite',
                }}
            />

            {/* Ambient glow */}
            <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[100px] transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: colors.glow }}
            />

            {/* Background Icon Watermark */}
            <motion.div
                animate={{ opacity: isOpen ? 0.03 : 0.12 }}
                transition={{ duration: 0.7 }}
                className="absolute -bottom-10 -left-10 pointer-events-none"
            >
                <Icon size={240} strokeWidth={1} className={colors.text} />
            </motion.div>

            <div className="relative z-10 w-full flex flex-col h-full">
                {/* Header Section */}
                <motion.div
                    initial={false}
                    animate={{ height: isOpen ? '24rem' : '15rem' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative -mx-8 md:-mx-10 -mt-8 md:-mt-10 mb-8 overflow-hidden group/img rounded-t-[1.5rem]"
                >
                    {image ? (
                        <motion.img
                            src={image}
                            alt={title}
                            animate={{ scale: isOpen ? 1 : 1.15 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br transition-all duration-700 ${id === 'taxes' ? 'from-brand-green/20 via-brand-green/5 to-white' :
                            id === 'real_estate' ? 'from-brand-dark/20 via-brand-dark/5 to-white' :
                                id === 'protection' ? 'from-brand-blue/20 via-brand-blue/5 to-white' :
                                    'from-brand-green/20 via-brand-green/5 to-white'
                            }`}>
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center opacity-20"
                            >
                                <Icon size={120} strokeWidth={1} className={colors.text} />
                            </motion.div>
                        </div>
                    )}

                    <motion.div
                        animate={{ opacity: isOpen ? 0.2 : 0.5 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none"
                    />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1500 ease-in-out" />
                    </div>

                    <AnimatePresence mode="wait">
                        {!isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 1.05 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute bottom-6 left-4 right-4 p-5 rounded-[1.5rem] bg-white/10 backdrop-blur-[24px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] pointer-events-none"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30" />
                                <div className="relative flex items-center gap-4">
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center border border-white/30`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-[1.05rem] md:text-[1.15rem] font-bold text-white leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                                        {title.split('\n').map((line, i) => (
                                            <div key={i} className="whitespace-nowrap">{line}</div>
                                        ))}
                                    </h3>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        animate={{
                            rotate: isOpen ? 180 : 0,
                            backgroundColor: isOpen ? 'rgba(34,104,155,1)' : 'rgba(255,255,255,0.15)'
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="absolute top-6 right-6 p-3 rounded-full border border-white/20 backdrop-blur-md text-white z-20 cursor-pointer shadow-lg hover:scale-110"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>

                {/* Body Content */}
                <div className="flex flex-col flex-grow">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-black text-brand-dark tracking-normal leading-tight">
                                    {title.split('\n').map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </h3>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <p className="text-slate-500 text-[15px] leading-relaxed mb-8 font-medium">
                        {desc}
                    </p>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="mb-6"
                            >
                                <div className="pt-6 border-t border-slate-100 space-y-4 px-2">
                                    {details.map((detail, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: i * 0.08, duration: 0.8 }}
                                            className="flex items-start gap-4 text-[14px] text-slate-700 font-semibold group/item py-1"
                                        >
                                            <div className="pt-1.5 flex-shrink-0 overflow-visible">
                                                <div
                                                    className="w-2 h-2 min-w-[8px] min-h-[8px] rounded-full ring-1 ring-white/10 transition-all duration-500 ease-out group-hover/item:scale-150 group-hover/item:shadow-[0_0_15px_rgba(34,104,155,0.5)] will-change-transform"
                                                    style={{ backgroundColor: colors.text.includes('blue') ? '#22689B' : '#72BF44' }}
                                                />
                                            </div>
                                            <span className="leading-relaxed">{detail}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Section */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                    <motion.span
                        animate={{ color: isOpen ? 'rgb(34,104,155)' : 'rgb(38,58,105)' }}
                        className="text-[12px] font-black uppercase tracking-[0.2em] flex items-center gap-3"
                    >
                        {isOpen ? closeLabel : viewLabel}
                        <ArrowRight className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-[-90deg]' : 'group-hover:translate-x-2'}`} />
                    </motion.span>

                    <div className={`text-[11px] font-black px-3 py-1.5 rounded-lg transition-all duration-500 ${isOpen
                        ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                        : 'bg-slate-50 text-slate-400 group-hover:bg-brand-blue/5 group-hover:text-brand-blue'
                        }`}>
                        {details.length} ITEMS
                    </div>
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
                            image={
                                key === 'incorporation' ? '/images/services/incorporation.webp' :
                                    key === 'taxes' ? '/images/services/taxes.webp' :
                                        key === 'real_estate' ? '/images/services/real_estate.webp' :
                                            key === 'protection' ? '/images/services/protection.webp' :
                                                key === 'accounting' ? '/images/services/accounting.webp' :
                                                    undefined
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
