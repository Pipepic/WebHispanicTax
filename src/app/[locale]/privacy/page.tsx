import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrivacyEn from '@/components/legal/PrivacyEn';
import PrivacyEs from '@/components/legal/PrivacyEs';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Footer' });

    return (
        <main className="min-h-screen bg-white selection:bg-brand-gold/30">
            <Navbar />
            <section className="pt-40 pb-20 container mx-auto px-6 max-w-4xl relative z-10">
                <div className="mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/5 text-brand-blue text-[10px] font-black tracking-widest uppercase mb-6">
                        Legal
                    </span>
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-brand-dark leading-tight tracking-tight">
                        {t('privacy_policy')}
                    </h1>
                    <div className="w-16 h-1.5 bg-brand-gold/40 rounded-full mt-8" />
                </div>
                
                <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    {locale === 'en' ? <PrivacyEn /> : <PrivacyEs />}
                </div>
            </section>
            <Footer />
        </main>
    );
}
