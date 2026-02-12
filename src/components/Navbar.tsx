'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 10);
    });

    const toggleLanguage = () => {
        const nextLocale = locale === 'es' ? 'en' : 'es';
        const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
        router.push(newPath);
    };

    const navLinks = [
        { name: t('home'), href: '#' },
        { name: t('services'), href: '#services' },
        { name: t('about'), href: '#about' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
                : 'bg-transparent py-5'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold origin-left z-50"
                style={{ scaleX }}
            />

            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href={`/${locale}`}
                    className="relative z-50"
                    onClick={(e) => {
                        if (pathname === `/${locale}` || pathname === `/${locale}/`) {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(213, 205, 39, 0.2))'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="flex items-center"
                    >
                        <Image
                            src="/images/hflogo/logo-brand.webp"
                            alt="Hispanic Financial Logo"
                            width={200}
                            height={40}
                            className={`w-auto object-contain transition-all duration-300 ease-in-out ${isScrolled ? 'h-7 md:h-8' : 'h-10 md:h-12'
                                }`}
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative group ${isScrolled ? 'text-brand-dark hover:text-brand-blue' : 'text-brand-dark hover:text-brand-blue'
                                }`}
                            onClick={(e) => {
                                if (link.href === '#') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
                        </a>
                    ))}

                    <button
                        onClick={toggleLanguage}
                        className="px-4 py-1.5 rounded-full border border-brand-blue/20 text-brand-blue text-xs font-bold hover:bg-brand-blue hover:text-white transition-all"
                    >
                        {locale === 'en' ? 'ES' : 'EN'}
                    </button>

                    <a
                        href="#contact"
                        className="bg-brand-gold text-brand-dark px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-0.5 transition-all"
                    >
                        {t('contact_us')}
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 text-brand-dark"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                >
                    {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 right-0 bg-white shadow-xl pt-24 pb-8 px-6 md:hidden flex flex-col gap-6 border-b border-slate-100"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl font-medium text-brand-dark"
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px bg-slate-100 w-full my-2" />
                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsMobileOpen(false);
                            }}
                            className="text-lg font-medium text-brand-blue"
                        >
                            {locale === 'en' ? 'Español' : 'English'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
