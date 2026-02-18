'use client';

import { useTranslations } from 'next-intl';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const logos = [
    { name: 'ACFE', src: '/images/logos/ACFE.webp' },
    { name: 'AICPA', src: '/images/logos/AICPA.webp' },
    { name: 'AAA', src: '/images/logos/American_Accounting_Association.webp' },
];

export default function TrustBar() {
    const t = useTranslations('TrustBar');
    const controls = useAnimation();

    useEffect(() => {
        let isMounted = true;

        const triggerRandomShimmer = async () => {
            if (!isMounted) return;

            // Animate shimmer across the bar with high visibility
            await controls.start({
                x: ['-120%', '120%'],
                opacity: [0, 1, 0],
                transition: { duration: 2.5, ease: "easeInOut" }
            });

            // Wait for a random interval between 5 and 12 seconds
            const nextDelay = Math.random() * 7000 + 5000;
            if (isMounted) {
                setTimeout(triggerRandomShimmer, nextDelay);
            }
        };

        triggerRandomShimmer();

        return () => {
            isMounted = false;
        };
    }, [controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            rotateX: 45,
            filter: 'blur(10px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <section className="md:hidden lg:block py-12 bg-white border-t border-b border-slate-100/50 overflow-hidden relative group/section">
            {/* Cinematic light sweep effect (Random repeat) */}
            <motion.div
                animate={controls}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent -skew-x-12 pointer-events-none z-10"
                style={{ width: '150%' }}
            />

            {/* Subtle background light effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/[0.04] to-transparent pointer-events-none" />

            <motion.div
                className="container mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
                    <motion.div variants={itemVariants} className="relative">
                        <span className="text-xs font-bold tracking-[0.4em] text-slate-400 uppercase text-center md:text-left block">
                            {t('title')}
                        </span>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                            className="absolute -bottom-2 left-0 right-0 h-[1px] bg-brand-gold/40 origin-left"
                        />
                    </motion.div>

                    <div className="flex items-center gap-10 md:gap-16">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={logo.name}
                                variants={itemVariants}
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        transition: { duration: 0.4, ease: "easeOut" as any }
                                    }}
                                    className="relative group cursor-default"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="h-7 md:h-10 w-auto object-contain opacity-100 drop-shadow-sm transition-all duration-700"
                                    />
                                    {/* Glass shimmer on logo */}
                                    <div
                                        className="absolute inset-x-[-20%] inset-y-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] opacity-0 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"
                                        style={{ backgroundSize: '200% 100%' }}
                                    />
                                    <div className="absolute -inset-6 bg-brand-blue/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
