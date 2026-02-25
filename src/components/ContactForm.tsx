'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {
    Send,
    CheckCircle,
    AlertCircle,
    MapPin,
    Phone,
    Mail,
    Clock,
    Instagram,
    Facebook,
    Linkedin,
    ArrowUpRight,
    Sparkles,
    Loader2
} from 'lucide-react';

export default function ContactForm() {
    const t = useTranslations('ContactForm');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const contactItems = [
        {
            icon: <MapPin className="w-5 h-5" />,
            label: t('address_label'),
            value: "7401 Wiles Rd. Suite 126, Coral Springs, FL 33067",
            accent: "blue",
            link: "https://maps.app.goo.gl/TEyhaFLDw37udX4n9"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: t('phone_label'),
            value: "+1 (954) 464-5458",
            accent: "gold",
            link: "tel:+19544645458"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "apatino@hispanictaxinc.com",
            accent: "green",
            link: "mailto:apatino@hispanictaxinc.com"
        },
        {
            icon: <Clock className="w-5 h-5" />,
            label: t('work_hours_label'),
            value: t('work_hours_value'),
            accent: "dark",
            link: null
        }
    ];

    const getAccentStyles = (accent: string) => {
        switch (accent) {
            case 'gold': return { bg: 'bg-brand-gold/10', text: 'text-brand-gold', border: 'group-hover:border-brand-gold/30' };
            case 'green': return { bg: 'bg-brand-green/10', text: 'text-brand-green', border: 'group-hover:border-brand-green/30' };
            case 'blue': return { bg: 'bg-brand-blue/10', text: 'text-brand-blue', border: 'group-hover:border-brand-blue/30' };
            default: return { bg: 'bg-brand-dark/10', text: 'text-brand-dark', border: 'group-hover:border-brand-dark/30' };
        }
    };

    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
            {/* Top separator line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark/5 to-transparent" />

            {/* Ambient background orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.08, 0.03],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-blue rounded-full blur-[150px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-[0%] left-[-10%] w-[40vw] h-[40vw] bg-brand-gold rounded-full blur-[150px] pointer-events-none"
            />

            {/* Pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #263A69 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-brand-blue/[0.04] text-brand-blue font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-brand-blue/10"
                        >
                            <Sparkles className="w-3 h-3" />
                            {t('title')}
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl xl:text-7xl font-black text-brand-dark tracking-tight leading-[1.05]"
                        >
                            Construyamos tu <span className="text-brand-gold">Futuro</span>
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-24 h-1.5 bg-brand-gold/40 rounded-full mt-10 origin-left"
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

                        {/* Left Column: Contact Details & Socials */}
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl text-brand-dark/60 leading-relaxed mb-12 max-w-xl font-medium"
                            >
                                {t('subtitle')}
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                                {contactItems.map((item, idx) => {
                                    const styles = getAccentStyles(item.accent);
                                    const Content = (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            whileHover={{ x: 8 }}
                                            className={`p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 group cursor-pointer ${styles.border} hover:shadow-2xl hover:shadow-black/[0.05] flex items-start gap-6`}
                                        >
                                            <div className={`w-14 h-14 rounded-2xl ${styles.bg} ${styles.text} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-sm shadow-black/[0.02]`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col gap-1.5 overflow-hidden">
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-dark/40 transition-colors">
                                                    {item.label}
                                                </span>
                                                <p className="text-brand-dark font-bold text-lg leading-snug group-hover:text-brand-blue transition-colors truncate lg:whitespace-normal">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );

                                    return item.link ? (
                                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                                            {Content}
                                        </a>
                                    ) : (
                                        <div key={idx}>{Content}</div>
                                    );
                                })}

                                {/* Social Box (Bento Style) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="p-10 bg-brand-dark rounded-[2.5rem] text-white flex flex-col sm:flex-row justify-between items-center gap-8 relative overflow-hidden group shadow-2xl shadow-brand-dark/20"
                                >
                                    {/* Subtle pattern background for social box */}
                                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-[3s]"
                                        style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}
                                    />

                                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] relative z-10">
                                        {t('social_label')}
                                    </h4>

                                    <div className="flex gap-4 relative z-10">
                                        {[
                                            { icon: <Instagram size={22} />, href: "https://instagram.com/hispanictaxinc" },
                                            { icon: <Facebook size={22} />, href: "https://facebook.com/hispanictaxinc" },
                                            { icon: <Linkedin size={22} />, href: "https://linkedin.com/company/hispanictaxinc" }
                                        ].map((social, i) => (
                                            <motion.a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -6, scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/15 hover:border-white/20 hover:text-brand-gold shadow-lg"
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Column: Premium Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30, filter: 'blur(12px)' }}
                            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] relative flex flex-col gap-12"
                        >
                            {/* Decorative element background */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/[0.04] rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    {/* Name Input */}
                                    <div className="group relative flex flex-col gap-3">
                                        <label htmlFor="name" className="text-[10px] font-black text-slate-400 group-focus-within:text-brand-blue uppercase tracking-[0.2em] px-1 transition-colors">
                                            {t('name_label')}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                placeholder={t('name_placeholder')}
                                                className="w-full bg-slate-50/80 border border-slate-100 hover:bg-slate-100 focus:bg-white focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/[0.03] outline-none px-8 py-5 rounded-[1.5rem] transition-all duration-500 font-bold text-brand-dark placeholder:text-slate-300 placeholder:font-medium"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="group relative flex flex-col gap-3">
                                        <label htmlFor="email" className="text-[10px] font-black text-slate-400 group-focus-within:text-brand-blue uppercase tracking-[0.2em] px-1 transition-colors">
                                            {t('email_label')}
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                placeholder={t('email_placeholder')}
                                                className="w-full bg-slate-50/80 border border-slate-100 hover:bg-slate-100 focus:bg-white focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/[0.03] outline-none px-8 py-5 rounded-[1.5rem] transition-all duration-500 font-bold text-brand-dark placeholder:text-slate-300 placeholder:font-medium"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="group relative flex flex-col gap-3">
                                    <label htmlFor="message" className="text-[10px] font-black text-slate-400 group-focus-within:text-brand-blue uppercase tracking-[0.2em] px-1 transition-colors">
                                        {t('message_label')}
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            placeholder={t('message_placeholder')}
                                            className="w-full bg-slate-50/80 border border-slate-100 hover:bg-slate-100 focus:bg-white focus:border-brand-blue/30 focus:ring-4 focus:ring-brand-blue/[0.03] outline-none px-8 py-5 rounded-[2rem] transition-all duration-500 resize-none font-bold text-brand-dark placeholder:text-slate-300 placeholder:font-medium"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button Portfolio Style */}
                                <motion.div className="pt-2">
                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full relative py-6 px-10 rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-700 overflow-hidden shadow-2xl flex items-center justify-center gap-4 group ${status === 'success' ? 'bg-brand-green shadow-brand-green/30 text-white' :
                                            status === 'error' ? 'bg-red-500 shadow-red-200 text-white' :
                                                'bg-brand-blue text-white shadow-brand-blue/25 hover:bg-brand-dark'
                                            }`}
                                    >
                                        {/* Button shimmer sweep */}
                                        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                                        <AnimatePresence mode="wait">
                                            {status === 'loading' ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>PROCESANDO...</span>
                                                </motion.div>
                                            ) : status === 'success' ? (
                                                <motion.div
                                                    key="success"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                    <span>{t('success_msg')}</span>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="idle"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    {status === 'error' ? <AlertCircle className="w-5 h-5" /> : <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />}
                                                    <span>{status === 'error' ? t('error_msg') : t('submit_btn')}</span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.button>
                                </motion.div>
                            </form>

                            {/* Trust badges below form */}
                            <div className="pt-6 border-t border-slate-50 flex items-center justify-center gap-8 text-[10px] font-black tracking-widest text-slate-300 uppercase relative z-10">
                                <span className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-brand-green" />
                                    Respuesta en 24h
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle size={14} className="text-brand-gold" />
                                    Consulta Inicial
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
