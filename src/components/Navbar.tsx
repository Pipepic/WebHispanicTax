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
    const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
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
        { name: t('services'), href: isHomePage ? '#services' : `/${locale}#services` },
        { name: t('calendar'), href: isHomePage ? '#calendar' : `/${locale}#calendar` },
        { name: t('resources'), href: isHomePage ? '#resources' : `/${locale}#resources` },
        { name: t('about'), href: isHomePage ? '#about' : `/${locale}#about` },
        { name: t('news'), href: isHomePage ? '#news' : `/${locale}#news` },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // El "punto focal" matemático está al 40% de la altura de la pantalla
            // (Ligeramente más arriba del centro absoluto, que es donde miramos al leer)
            const focalPoint = window.innerHeight * 0.4; 
            
            // Recolectar todos los IDs a observar extrayendo solo el fragmento después del #
            const allIds = ['hero', ...navLinks.map(l => l.href.split('#')[1]), 'contact', 'footer'].filter(Boolean);
            
            let detectedSection = '';
            
            for (const id of allIds) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Si el inicio de la sección ya cruzó el punto focal (arriba)
                    // Y el final de la sección todavía no lo ha pasado (abajo)
                    if (rect.top <= focalPoint && rect.bottom >= focalPoint) {
                        detectedSection = id;
                        break; // ¡Encontrado! Matemática simple impide duplicados.
                    }
                }
            }

            if (['hero', 'contact', 'footer'].includes(detectedSection)) {
                setActiveSection(''); // Zona Muerta
            } else if (detectedSection) {
                setActiveSection(`#${detectedSection}`); // Sección de navegación
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Ejecución inicial por si carga ya desplazado
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    useEffect(() => {
        // Función para manejar el scroll al hash
        const handleInitialHash = () => {
            if (typeof window !== 'undefined' && window.location.hash) {
                const hash = window.location.hash;
                const targetId = hash.substring(1);
                const element = document.getElementById(targetId);
                
                if (element) {
                    const navbarHeight = 84; 
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        };

        // Si entramos a la home desde otra subpágina (isHomePage cambia a true)
        if (isHomePage) {
            const timer = setTimeout(handleInitialHash, 500); 
            return () => clearTimeout(timer);
        }
    }, [isHomePage]); // Depender de isHomePage asegura que solo corra al aterrizar en el inicio

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow,padding] duration-500 ease-in-out ${isScrolled
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
                            setActiveSection('');
                        }
                    }}
                >
                    <motion.div
                        whileHover={{
                            scale: 1.05,
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
                            style={{ width: 'auto' }}
                            className={`object-contain transition-all duration-300 ease-in-out ${isScrolled ? 'h-7 md:h-9 lg:h-8' : 'h-10 md:h-14 lg:h-16'
                                }`}
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Actions & Menu */}
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Desktop Main Links - Only for large screens */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-bold transition-all duration-300 relative group py-2
                                        ${isActive 
                                            ? 'text-brand-blue scale-110' 
                                            : 'text-brand-dark/70 hover:text-brand-blue'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 
                                        ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} 
                                    />
                                    {isActive && (
                                        <motion.span 
                                            layoutId="activeBubble"
                                            className="absolute -inset-x-2 -inset-y-1 bg-brand-blue/5 rounded-lg -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Shared Buttons (Desktop Only) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1.5 rounded-full border border-brand-blue/20 text-brand-blue text-xs font-bold hover:bg-brand-blue hover:text-white transition-all"
                        >
                            {locale === 'en' ? 'ES' : 'EN'}
                        </button>

                        <a
                            href={isHomePage ? '#contact' : `/${locale}#contact`}
                            className="group relative overflow-hidden bg-brand-gold text-brand-dark px-4 py-2 rounded-full text-[11px] font-black shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all uppercase tracking-tighter"
                        >
                            <span className="absolute inset-0 bg-white rounded-full translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                            <span className="relative z-10">{t('contact_us')}</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button - Shown on Mobile and Tablet (< 1024px) */}
                    <button
                        className="lg:hidden relative z-50 text-brand-dark p-2"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 right-0 bg-white shadow-xl pt-24 pb-8 px-6 lg:hidden flex flex-col gap-6 border-b border-slate-100"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-xl font-bold transition-colors ${activeSection === link.href ? 'text-brand-blue' : 'text-brand-dark'}`}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px bg-slate-100 w-full my-4" />
                        
                        <a
                            href={isHomePage ? '#contact' : `/${locale}#contact`}
                            className="bg-brand-gold text-brand-dark py-4 rounded-xl text-center font-black text-lg shadow-xl shadow-brand-gold/10 hover:bg-brand-gold/90 transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {t('contact_us')}
                        </a>

                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsMobileOpen(false);
                            }}
                            className="text-center py-2 text-brand-blue font-bold tracking-widest uppercase text-xs"
                        >
                            {locale === 'en' ? 'Ver en Español' : 'Switch to English'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
