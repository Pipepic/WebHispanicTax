import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import MobileFAB from '@/components/MobileFAB';
import dynamic from 'next/dynamic';

const SectionSkeleton = () => (
  <section className="py-32 bg-white/5">
    <div className="container mx-auto px-6 flex justify-center">
      <div className="w-10 h-10 border-2 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin" />
    </div>
  </section>
);

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <SectionSkeleton />,
});
const FiscalCalendar = dynamic(() => import('@/components/FiscalCalendar'), {
  loading: () => <SectionSkeleton />,
});
const BrochureDownload = dynamic(() => import('@/components/BrochureDownload'), {
  loading: () => <SectionSkeleton />,
});
const About = dynamic(() => import('@/components/About'), {
  loading: () => <SectionSkeleton />,
});
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <SectionSkeleton />,
});
const NewsFeed = dynamic(() => import('@/components/NewsFeed'), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-gold/30">
      <Navbar />
      <Hero />
      <TrustBar />
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
