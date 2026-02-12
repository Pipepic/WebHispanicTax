'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

export default function WhatsAppButton() {
    const t = useTranslations('WhatsApp');
    const locale = useLocale();
    const phoneNumber = '19544645458';
    const message = t('message');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            key={locale} // Force re-render on locale change
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="fixed bottom-8 right-8 z-50 group"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-[#72BF44] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                aria-label="Contact via WhatsApp"
            >
                <MessageCircle size={32} fill="white" />
            </a>
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-lg text-sm font-semibold shadow-md text-brand-dark whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block border border-slate-100">
                {t('tooltip')}
            </span>
        </motion.div>
    );
}
