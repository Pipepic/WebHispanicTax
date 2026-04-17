'use client';

import { motion } from 'framer-motion';
import { User, Building2, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PersonaSelector() {
    const t = useTranslations('persona_selector');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">{t('title')}</h2>
                    <p className="text-slate-600">{t('subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Personal Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue/5 to-transparent p-8 border border-brand-blue/10 hover:border-brand-blue/30 transition-all cursor-pointer"
                        onClick={() => scrollToSection('services')}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <User className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 text-brand-blue">
                                <User className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{t('personal.title')}</h3>
                            <p className="text-slate-600 mb-6">{t('personal.desc')}</p>
                            <span className="inline-flex items-center text-brand-blue font-semibold text-sm group-hover:gap-2 transition-all">
                                {t('personal.cta')} <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </motion.div>

                    {/* Business Card */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green/5 to-transparent p-8 border border-brand-green/10 hover:border-brand-green/30 transition-all cursor-pointer"
                        onClick={() => scrollToSection('services')}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Building2 className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{t('business.title')}</h3>
                            <p className="text-slate-600 mb-6">{t('business.desc')}</p>
                            <span className="inline-flex items-center text-brand-green font-semibold text-sm group-hover:gap-2 transition-all">
                                {t('business.cta')} <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
