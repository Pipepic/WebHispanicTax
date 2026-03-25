import Brochure3D from '@/components/Brochure3D';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Brochure' });
  
  return {
    title: `${t('title')} | Hispanic Financial`,
    description: t('subtitle'),
  };
}

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-[#333333] selection:bg-brand-blue selection:text-white relative">
      {/* 
        Overriding global CSS smooth scroll strictly on this page 
        so that Next.js scroll restoration doesn't animate from the previous page's bottom to top,
        causing a 100% -> 0% scroll spike which falsely triggers the brochure animations at full speed.
      */}
      <style dangerouslySetInnerHTML={{ __html: `html { scroll-behavior: auto !important; }` }} />
      
      <Link 
        href="/" 
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-white/80 hover:text-white hover:bg-black/50 border border-white/10 transition-all font-medium text-sm tracking-wide"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver
      </Link>
      
      <Brochure3D />
    </main>
  );
}
