'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, TrendingUp, Calendar, ExternalLink, Newspaper } from 'lucide-react';
import Image from 'next/image';

interface NewsItem {
    id: string;
    title: string;
    source: string;
    date: string;
    summary: string;
    link: string;
    image?: string;
}

export default function NewsFeed() {
    const t = useTranslations('NewsFeed');
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchNews = useCallback(async () => {
        try {
            const res = await fetch('/api/rss');
            if (res.ok) {
                const data = await res.json();
                setNews(data);
            }
        } catch (error) {
            console.error('Failed to fetch news:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchNews();
        const interval = setInterval(fetchNews, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, [fetchNews]);

    if (loading) return (
        <div className="py-32 text-center bg-white flex flex-col items-center justify-center gap-6">
            <div className="relative">
                <motion.div
                    className="w-12 h-12 border-2 border-brand-blue/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 w-12 h-12 border-t-2 border-brand-blue rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
            </div>
            <span className="text-slate-400 font-bold text-xs tracking-[0.3em] uppercase animate-pulse">
                {t('loading')}
            </span>
        </div>
    );

    return (
        <section id="news" className="py-32 bg-gradient-to-b from-white via-[#fafbfc] to-white relative overflow-hidden">
            {/* Ambient background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-20">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-green/[0.06] text-brand-green font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-brand-green/10"
                        >
                            <Newspaper className="w-3 h-3" />
                            {t('section_label')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl font-black text-brand-dark tracking-tight leading-[1.05]"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-24 h-1.5 bg-brand-gold/40 rounded-full mt-8 origin-left"
                        />
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {news.map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -12 }}
                                className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100/80 shadow-sm hover:shadow-2xl hover:shadow-black/[0.08] transition-all duration-700 h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                                            <Newspaper size={40} className="text-slate-300" />
                                        </div>
                                    )}

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />


                                    {/* Link Icon */}
                                    <div className="absolute bottom-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="p-2.5 rounded-full bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/40">
                                            <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Padding */}
                                <div className="p-8 flex flex-col flex-1">
                                    {/* Meta Row */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Calendar size={12} className="text-brand-blue/40" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider">{item.date}</span>
                                        </div>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                                            transition={{ repeat: Infinity, duration: 3 }}
                                        >
                                            <TrendingUp size={14} className="text-brand-gold" />
                                        </motion.div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-500 line-clamp-3 leading-tight">
                                        {item.title}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-slate-500 text-sm mb-6 line-clamp-3 font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        {item.summary}
                                    </p>

                                    {/* Spacer to push "Read More" to bottom */}
                                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between group-hover:border-brand-blue/10 transition-colors duration-500">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/50 group-hover:text-brand-blue transition-colors duration-500 flex items-center gap-2">
                                            Read More
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                        </span>

                                        {/* Shimmer line indicator */}
                                        <div className="w-12 h-0.5 bg-slate-100 rounded-full overflow-hidden relative">
                                            <motion.div
                                                className="absolute inset-0 bg-brand-gold"
                                                initial={{ x: '-100%' }}
                                                whileHover={{ x: '0%' }}
                                                transition={{ duration: 0.4 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Glass Shimmer Effect on Card - Right to Left Sweep */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                    style={{
                                        background: 'linear-gradient(285deg, transparent 30%, rgba(255,255,255,0.1) 38%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 62%, transparent 70%)',
                                        backgroundSize: '200% 100%',
                                        animation: `glass-shimmer-rtl 12s ease-in-out infinite`,
                                        animationDelay: `${(news.length - 1 - index) * 0.3}s`,
                                    }}
                                />
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
