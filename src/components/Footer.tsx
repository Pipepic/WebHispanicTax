'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Footer');
    const navT = useTranslations('Navbar');
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: navT('services'), href: '#services' },
        { name: navT('calendar'), href: '#calendar' },
        { name: navT('resources'), href: '#resources' },
        { name: navT('about'), href: '#about' },
        { name: navT('news'), href: '#news' },
    ];

    const socialLinks = [
        { icon: <Instagram size={20} />, href: "https://instagram.com/hispanictaxinc" },
        { icon: <Facebook size={20} />, href: "https://facebook.com/hispanictaxinc" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/hispanictaxinc" }
    ];

    return (
        <footer id="footer" className="bg-brand-dark text-white pt-24 pb-10 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Dotted Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 mb-20">
                    
                    {/* Column 1: Brand & Description */}
                    <div className="lg:col-span-4 lg:col-start-1 flex flex-col gap-8">
                        <Link href="#" className="inline-block group" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            <Image
                                src="/images/hflogo/logo-brand.webp"
                                alt="Hispanic Financial Logo"
                                width={180}
                                height={40}
                                style={{ width: 'auto' }}
                                className="h-10 object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                        <p className="text-white/60 leading-relaxed font-medium">
                            {t('description')}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-brand-gold text-white/80"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6">
                        <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">
                            {t('quick_links')}
                        </h4>
                        <nav className="flex flex-col gap-4">
                            {quickLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    className="text-white/70 hover:text-brand-gold hover:translate-x-1 transition-all duration-300 font-medium w-fit"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
                        <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.3em]">
                            {t('contact')}
                        </h4>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-start gap-4 text-white/70 group">
                                <MapPin className="w-5 h-5 shrink-0 text-brand-blue group-hover:text-brand-gold transition-colors mt-0.5" />
                                <a href="https://maps.app.goo.gl/TEyhaFLDw37udX4n9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    {t('address')}
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-white/70 group">
                                <Phone className="w-5 h-5 shrink-0 text-brand-blue group-hover:text-brand-gold transition-colors" />
                                <a href="tel:+19544645458" className="hover:text-white transition-colors">
                                    {t('phone')}
                                </a>
                            </li>
                            <li className="flex items-center gap-4 text-white/70 group">
                                <Mail className="w-5 h-5 shrink-0 text-brand-blue group-hover:text-brand-gold transition-colors" />
                                <a href="mailto:apatino@hispanictaxinc.com" className="hover:text-white transition-colors">
                                    {t('email')}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Legal Section */}
                <div className="border-t border-white/10 pt-10 flex flex-col gap-6">
                    {/* Disclaimer Text */}
                    <p className="text-[11px] leading-relaxed text-white/40 text-center md:text-left max-w-5xl">
                        {t('disclaimer')}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] font-medium text-white/50">
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="hover:text-brand-gold transition-colors">
                                {t('privacy_policy')}
                            </Link>
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            <Link href="/terms" className="hover:text-brand-gold transition-colors">
                                {t('terms_of_service')}
                            </Link>
                        </div>
                        <p>
                            &copy; {currentYear} Hispanic Financial. {t('rights_reserved')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
