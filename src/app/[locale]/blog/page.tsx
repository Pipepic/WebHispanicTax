import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Financial & Tax Blog for Hispanics in Florida'
      : 'Blog Financiero y Fiscal para Hispanos en Florida',
    description: isEn
      ? 'Expert articles on taxes, LLC formation, accounting, and financial planning for the Hispanic community in Florida. Bilingual guides from Coral Springs.'
      : 'Artículos expertos sobre impuestos, creación de LLC, contabilidad y planificación financiera para la comunidad hispana en Florida. Guías bilingües desde Coral Springs.',
    keywords: isEn
      ? ['hispanic financial blog', 'tax tips florida hispanic', 'LLC guide florida',
         'accounting articles florida', 'financial resources hispanic community']
      : ['blog impuestos florida', 'guías LLC florida', 'artículos contabilidad hispano',
         'recursos financieros hispanos florida', 'blog fiscal coral springs'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/blog`,
      languages: {
        'es': 'https://hispanic.financial/es/blog',
        'en': 'https://hispanic.financial/en/blog',
        'x-default': 'https://hispanic.financial/en/blog',
      },
    },
    openGraph: {
      title: isEn ? 'Financial Blog for Hispanics in Florida | Hispanic Financial' : 'Blog Financiero para Hispanos en Florida | Hispanic Financial',
      url: `https://hispanic.financial/${locale}/blog`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn ? 'Financial & Tax Blog for Hispanics in Florida' : 'Blog Financiero y Fiscal para Hispanos en Florida',
    },
  };
}

interface Post {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  titleEs: string;
  titleEn: string;
  excerptEs: string;
  excerptEn: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    slug: 'como-obtener-itin-2026',
    category: 'Impuestos',
    date: 'Marzo 2026',
    readTime: '9 min',
    featured: true,
    titleEs: 'Cómo Obtener el ITIN en 2026: Guía Completa Paso a Paso',
    titleEn: 'How to Get Your ITIN in 2026: Complete Step-by-Step Guide',
    excerptEs: 'Quién lo necesita, documentos requeridos, Formulario W-7, tiempos de procesamiento, renovación y los 5 errores más comunes al solicitar el ITIN.',
    excerptEn: 'Who needs it, required documents, Form W-7, processing times, renewal, and the 5 most common mistakes when applying for an ITIN.',
  },
  {
    slug: 'impuestos-inmigrantes-usa',
    category: 'Impuestos',
    date: 'Febrero 2026',
    readTime: '10 min',
    titleEs: 'Cómo Declarar Impuestos en USA si Eres Inmigrante: Guía Completa 2026',
    titleEn: 'How to File Taxes as an Immigrant in the USA: Complete 2026 Guide',
    excerptEs: 'Todo lo que necesitas saber: ITIN vs SSN, qué ingresos reportar, fechas límite, formularios clave y los 5 errores más comunes que debes evitar.',
    excerptEn: 'Everything you need to know: ITIN vs SSN, what income to report, key deadlines, forms, and the 5 most common mistakes to avoid.',
  },
  {
    slug: 'como-crear-llc-florida',
    category: 'LLC',
    date: 'Enero 2026',
    readTime: '8 min',
    titleEs: 'Cómo Crear una LLC en Florida: Guía Completa para Hispanos (2026)',
    titleEn: 'How to Form an LLC in Florida: Complete Guide for Hispanics (2026)',
    excerptEs: 'Requisitos, costos reales, proceso paso a paso y los errores más comunes al crear tu LLC en Florida. Todo explicado en español.',
    excerptEn: 'Requirements, real costs, step-by-step process, and the most common mistakes when forming your LLC in Florida.',
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Impuestos': { bg: 'bg-brand-green/10', text: 'text-[#4a9428]' },
  'LLC': { bg: 'bg-brand-blue/10', text: 'text-brand-blue' },
  'Contabilidad': { bg: 'bg-amber-50', text: 'text-amber-700' },
  'Patrimonio': { bg: 'bg-purple-50', text: 'text-purple-700' },
};

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const featured = posts.find(p => p.featured)!;
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="premium-gradient text-white pt-28 pb-20 px-6 relative overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-green/10 blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 text-white/90 font-bold text-[10px] tracking-[0.3em] uppercase mb-8 border border-white/15">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green/70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            {isEn ? 'Financial Blog' : 'Blog Financiero'}
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            {isEn ? (
              <>Guides & Resources<br /><span className="text-brand-green">for Hispanic Entrepreneurs</span></>
            ) : (
              <>Guías y Recursos<br /><span className="text-brand-green">para Emprendedores Hispanos</span></>
            )}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {isEn
              ? 'Practical articles on taxes, LLC formation, accounting, and wealth protection — written by experts for the Hispanic community in Florida.'
              : 'Artículos prácticos sobre impuestos, creación de LLC, contabilidad y protección patrimonial — escritos por expertos para la comunidad hispana en Florida.'}
          </p>

          {/* Stats strip */}
          <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10">
            {[
              { n: '2', label: isEn ? 'Articles' : 'Artículos' },
              { n: '2', label: isEn ? 'Languages' : 'Idiomas' },
              { n: '20+', label: isEn ? 'Years of experience' : 'Años de experiencia' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-brand-green">{stat.n}</div>
                <div className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Featured post */}
        <div className="mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-6">
            {isEn ? '— Featured Article' : '— Artículo Destacado'}
          </p>
          <Link
            href={`/${locale}/blog/${featured.slug}`}
            className="group block premium-gradient rounded-3xl p-8 md:p-12 text-white hover:shadow-2xl hover:shadow-[#0D2B5B]/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-green/10 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-brand-green text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {featured.category}
                </span>
                <span className="text-white/40 text-xs">{featured.date}</span>
                <span className="text-white/40 text-xs">·</span>
                <span className="text-white/40 text-xs">{featured.readTime} {isEn ? 'read' : 'lectura'}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-tight mb-4 group-hover:text-brand-green transition-colors duration-300">
                {isEn ? featured.titleEn : featured.titleEs}
              </h2>
              <p className="text-white/65 leading-relaxed mb-8 max-w-2xl">
                {isEn ? featured.excerptEn : featured.excerptEs}
              </p>
              <div className="inline-flex items-center gap-2 text-brand-green font-black text-sm uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                {isEn ? 'Read article' : 'Leer artículo'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Rest of posts */}
        {rest.length > 0 && (
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
              {isEn ? '— More Articles' : '— Más Artículos'}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((post) => {
                const cat = categoryColors[post.category] ?? { bg: 'bg-slate-100', text: 'text-slate-600' };
                return (
                  <Link
                    key={post.slug}
                    href={`/${locale}/blog/${post.slug}`}
                    className="group flex flex-col bg-white rounded-3xl border border-slate-100 p-7 hover:shadow-xl hover:shadow-slate-200/60 hover:border-brand-blue/20 hover:-translate-y-1 transition-all duration-400"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`${cat.bg} ${cat.text} text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full`}>
                        {post.category}
                      </span>
                      <span className="text-slate-400 text-xs">{post.date}</span>
                      <span className="text-slate-300 text-xs">·</span>
                      <span className="text-slate-400 text-xs">{post.readTime} {isEn ? 'read' : 'lectura'}</span>
                    </div>
                    <h3 className="text-lg font-black text-brand-dark leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                      {isEn ? post.titleEn : post.titleEs}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">
                      {isEn ? post.excerptEn : post.excerptEs}
                    </p>
                    <div className="flex items-center gap-2 text-brand-blue font-black text-xs uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                      {isEn ? 'Read more' : 'Leer más'}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Newsletter-style */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue mb-2">
              {isEn ? 'Free Advisory' : 'Asesoría Gratuita'}
            </p>
            <h3 className="text-2xl font-black text-brand-dark leading-tight mb-2">
              {isEn ? 'Do you have specific questions?' : '¿Tienes preguntas específicas?'}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              {locale === 'en'
                ? 'Our team of bilingual experts is available to answer your tax and business questions. Contact us today.'
                : 'Nuestro equipo de expertos bilingües está disponible para responder tus preguntas sobre impuestos y negocios. Contáctanos hoy mismo.'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={`/${locale}#contact`}
              className="bg-brand-dark hover:bg-brand-blue text-white font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors text-center"
            >
              {isEn ? 'Contact Us' : 'Contáctanos'}
            </a>
            <a
              href="tel:+19544645458"
              className="border border-brand-dark/20 hover:border-brand-blue hover:text-brand-blue text-brand-dark font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors text-center"
            >
              {locale === 'en' ? 'Call Us Now' : 'Llámanos Ahora'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
