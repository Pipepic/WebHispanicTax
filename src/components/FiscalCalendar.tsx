'use client';

import { Calendar, Building, User, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const events = [
    {
        id: 'jan_15',
        date: '2026-01-15',
        type: 'both', // Both Personal & Business (Estimated Tax)
        googleDate: '20260115/20260116'
    },
    {
        id: 'jan_31',
        date: '2026-01-31',
        type: 'business',
        googleDate: '20260131/20260201'
    },
    {
        id: 'mar_16',
        date: '2026-03-16', // Mar 15 is Sunday
        type: 'business',
        googleDate: '20260316/20260317'
    },
    {
        id: 'apr_15',
        date: '2026-04-15',
        type: 'both',
        googleDate: '20260415/20260416'
    },
    {
        id: 'may_15',
        date: '2026-05-15',
        type: 'business',
        googleDate: '20260515/20260516'
    },
    {
        id: 'jun_15',
        date: '2026-06-15',
        type: 'both',
        googleDate: '20260615/20260616'
    },
    {
        id: 'sep_15',
        date: '2026-09-15',
        type: 'business',
        googleDate: '20260915/20260916'
    },
    {
        id: 'oct_15',
        date: '2026-10-15',
        type: 'both',
        googleDate: '20261015/20261016'
    },
    {
        id: 'dec_31',
        date: '2026-12-31',
        type: 'both',
        googleDate: '20261231/20270101'
    }
];

export default function FiscalCalendar() {
    const t = useTranslations('fiscal_calendar');
    const [filter, setFilter] = useState<'all' | 'business' | 'personal'>('all');

    const filteredEvents = events.filter(ev =>
        filter === 'all' || ev.type === 'both' || ev.type === filter
    );

    const getGoogleCalendarUrl = (event: typeof events[0], title: string, desc: string) => {
        const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
        const details = encodeURIComponent(`${desc}\n\nProvided by Hispanic Financial`);
        const text = encodeURIComponent(title);
        return `${baseUrl}&text=${text}&dates=${event.googleDate}&details=${details}`;
    };

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4"
                    >
                        <Calendar className="w-4 h-4" />
                        <span>2026</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-brand-dark mb-4"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12">
                    {[
                        { id: 'all', label: t('filter_all'), icon: Calendar },
                        { id: 'business', label: t('filter_business'), icon: Building },
                        { id: 'personal', label: t('filter_personal'), icon: User },
                    ].map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setFilter(btn.id as any)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${filter === btn.id
                                ? 'bg-brand-dark text-white shadow-lg scale-105'
                                : 'bg-white text-brand-dark/70 hover:bg-slate-100'
                                }`}
                        >
                            <btn.icon className="w-4 h-4" />
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
                    {filteredEvents.map((event, index) => {
                        const title = t(`events.${event.id}.title`);
                        const desc = t(`events.${event.id}.desc`);
                        const dateObj = new Date(event.date);

                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col md:flex-row items-center group"
                            >
                                {/* Date Bubble - Mobile Left, Desktop Center */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-green z-10 group-hover:scale-125 transition-transform" />

                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                                    <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-blue">
                                        <div className={`text-brand-gold font-bold text-sm mb-1 uppercase tracking-wider flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            {dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            {event.type === 'business' && <Building className="w-4 h-4 text-slate-400" />}
                                            {event.type === 'personal' && <User className="w-4 h-4 text-slate-400" />}
                                        </div>
                                        <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
                                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{desc}</p>

                                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                            <a
                                                href={getGoogleCalendarUrl(event, title, desc)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-dark transition-colors"
                                            >
                                                {t('add_to_calendar')}
                                                <ChevronRight className="w-3 h-3" />
                                            </a>
                                        </div>

                                        {/* SEO Schema for Event */}
                                        <script
                                            type="application/ld+json"
                                            dangerouslySetInnerHTML={{
                                                __html: JSON.stringify({
                                                    "@context": "https://schema.org",
                                                    "@type": "Event",
                                                    "name": title,
                                                    "startDate": event.date,
                                                    "endDate": event.date,
                                                    "eventStatus": "https://schema.org/EventScheduled",
                                                    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                                                    "location": {
                                                        "@type": "VirtualLocation",
                                                        "url": "https://www.hispanictaxinc.com"
                                                    },
                                                    "description": desc,
                                                    "organizer": {
                                                        "@type": "Organization",
                                                        "@id": "https://www.hispanictaxinc.com/#organization",
                                                        "name": "Hispanic Financial",
                                                        "url": "https://www.hispanictaxinc.com"
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
