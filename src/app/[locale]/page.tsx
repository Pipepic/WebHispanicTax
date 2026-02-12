import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import PersonaSelector from '@/components/PersonaSelector';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import About from '@/components/About';
import BrochureDownload from '@/components/BrochureDownload';
import FiscalCalendar from '@/components/FiscalCalendar';
import MobileFAB from '@/components/MobileFAB';
import dynamic from 'next/dynamic';

const NewsFeed = dynamic(() => import('@/components/NewsFeed'), {
  loading: () => (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="w-12 h-12 border-2 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin mx-auto" />
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-gold/30">
      <Navbar />
      <Hero />
      <TrustBar />
      <PersonaSelector />
      <Services />
      <FiscalCalendar />
      <BrochureDownload />
      <About />
      <NewsFeed />
      <ContactForm />
      <MobileFAB />
    </main>
  );
}
