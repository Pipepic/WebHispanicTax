import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  locale: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  benefits: { icon: string; title: string; desc: string }[];
  faqs: FAQItem[];
  ctaTitle: string;
  ctaDesc: string;
  serviceSchema: object;
}

export default function ServicePageLayout({
  locale,
  badge,
  title,
  subtitle,
  description,
  included,
  benefits,
  faqs,
  ctaTitle,
  ctaDesc,
  serviceSchema,
}: ServicePageLayoutProps) {
  const isEn = locale === 'en';

  // Derive page URL from serviceSchema for breadcrumb
  const pageUrl = (serviceSchema as { url?: string }).url ?? `https://hispanic.financial/${locale}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://hispanic.financial/${locale}` },
      { "@type": "ListItem", "position": 2, "name": isEn ? "Services" : "Servicios", "item": `https://hispanic.financial/${locale}#services` },
      { "@type": "ListItem", "position": 3, "name": badge, "item": pageUrl },
    ],
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  } : null;

  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* JSON-LD FAQPage Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="min-h-screen bg-white">
        {/* ── Header ── */}
        <div className="premium-gradient text-white pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              ← {isEn ? 'Back to Home' : 'Volver al Inicio'}
            </Link>
            <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              {badge}
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`/${locale}#contact`}
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors shadow-lg"
              >
                {isEn ? 'Contact Us' : 'Contáctanos'}
              </a>
              <a
                href="tel:+19544645458"
                className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors"
              >
                {isEn ? 'Call Us Now' : 'Llámanos Ahora'}
              </a>
            </div>
          </div>
        </div>

        {/* ── About this service ── */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
        </section>

        {/* ── What's included ── */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-10">
              {isEn ? 'What\'s Included' : 'Qué Incluye'}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-10">
            {isEn ? 'Why Choose Hispanic Financial?' : '¿Por qué elegir Hispanic Financial?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gradient-to-br from-brand-dark/5 to-brand-blue/5 rounded-2xl p-6 border border-brand-blue/10">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-black text-brand-dark mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-10">
              {isEn ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-slate-200 group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-brand-dark list-none">
                    {faq.q}
                    <span className="text-brand-blue group-open:rotate-45 transition-transform text-xl flex-shrink-0 ml-4">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="premium-gradient text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-4">{ctaTitle}</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`/${locale}#contact`}
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors shadow-xl"
              >
                {isEn ? 'Contact Us Now' : 'Contáctanos Ahora'}
              </a>
              <a
                href={`https://wa.me/19544645458?text=${encodeURIComponent(isEn ? 'Hello, I am interested in your services.' : 'Hola, tengo interés en los servicios de Hispanic.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust Bar ── */}
        <div className="border-t border-slate-100 py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-black text-brand-dark">20+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{isEn ? 'Years Experience' : 'Años de Experiencia'}</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div>
              <p className="text-2xl font-black text-brand-green">1,500+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{isEn ? 'Satisfied Clients' : 'Clientes Satisfechos'}</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div>
              <p className="text-2xl font-black text-brand-dark">99%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{isEn ? 'Satisfaction Rate' : 'Índice de Satisfacción'}</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div>
              <p className="text-sm font-bold text-slate-600">Coral Springs, FL 33067</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">(954) 464-5458</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
