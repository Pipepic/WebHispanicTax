import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Financial Services in Coral Springs, FL'
      : 'Servicios Financieros en Coral Springs, FL',
    description: isEn
      ? 'Tax preparation, LLC formation, accounting, real estate advisory, and wealth protection in Coral Springs, FL. Bilingual CPA services for the Hispanic community. Call (954) 464-5458.'
      : 'Preparación de impuestos, creación de LLC, contabilidad, asesoría en bienes raíces y protección patrimonial en Coral Springs, FL. Servicios bilingües para la comunidad hispana. Llama (954) 464-5458.',
    keywords: isEn
      ? ['financial services coral springs', 'bilingual CPA florida', 'tax accounting LLC florida',
         'hispanic financial services florida', 'accounting firm coral springs',
         'tax preparation LLC formation florida']
      : ['servicios financieros coral springs', 'contador bilingüe florida', 'impuestos contabilidad LLC florida',
         'servicios financieros hispanos florida', 'firma contable coral springs',
         'impuestos creación LLC florida'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios',
        'en': 'https://hispanic.financial/en/servicios',
        'x-default': 'https://hispanic.financial/en/servicios',
      },
    },
    openGraph: {
      title: isEn
        ? 'Financial Services in Coral Springs, FL | Hispanic Financial'
        : 'Servicios Financieros en Coral Springs, FL | Hispanic Financial',
      description: isEn
        ? 'Expert bilingual financial services: tax preparation, LLC formation, accounting, FIRPTA, and wealth protection. 20+ years serving South Florida.'
        : 'Servicios financieros bilingües expertos: impuestos, LLC, contabilidad, FIRPTA y protección patrimonial. 20+ años sirviendo el sur de Florida.',
      url: `https://hispanic.financial/${locale}/servicios`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn
        ? 'Financial Services in Coral Springs, FL'
        : 'Servicios Financieros en Coral Springs, FL',
    },
  };
}

export default async function ServiciosIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: isEn ? 'Financial Services — Hispanic Financial' : 'Servicios Financieros — Hispanic Financial',
    description: isEn
      ? 'Complete portfolio of bilingual financial services for individuals and businesses in South Florida.'
      : 'Portafolio completo de servicios financieros bilingües para individuos y empresas en el sur de Florida.',
    url: `https://hispanic.financial/${locale}/servicios`,
    itemListElement: [
      {
        '@type': 'ListItem', position: 1,
        item: { '@type': 'Service', name: isEn ? 'Tax Preparation & Planning' : 'Preparación de Impuestos', url: `https://hispanic.financial/${locale}/servicios/impuestos` },
      },
      {
        '@type': 'ListItem', position: 2,
        item: { '@type': 'Service', name: isEn ? 'LLC & Business Formation' : 'Creación de LLC y Empresas', url: `https://hispanic.financial/${locale}/servicios/creacion-de-llc` },
      },
      {
        '@type': 'ListItem', position: 3,
        item: { '@type': 'Service', name: isEn ? 'Accounting & QuickBooks' : 'Contabilidad y QuickBooks', url: `https://hispanic.financial/${locale}/servicios/contabilidad` },
      },
      {
        '@type': 'ListItem', position: 4,
        item: { '@type': 'Service', name: isEn ? 'Real Estate & FIRPTA' : 'Real Estate y FIRPTA', url: `https://hispanic.financial/${locale}/servicios/real-estate` },
      },
      {
        '@type': 'ListItem', position: 5,
        item: { '@type': 'Service', name: isEn ? 'Wealth Protection' : 'Protección Patrimonial', url: `https://hispanic.financial/${locale}/servicios/proteccion-patrimonial` },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://hispanic.financial/${locale}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Services' : 'Servicios', item: `https://hispanic.financial/${locale}/servicios` },
    ],
  };

  const services = isEn ? [
    {
      slug: 'impuestos',
      icon: '🧾',
      badge: 'Tax Services',
      title: 'Tax Preparation & Planning',
      desc: 'Personal and corporate tax returns, IRS compliance, back taxes, sales tax, and strategic tax planning to minimize your tax burden.',
      highlights: ['Form 1040 & corporate returns', 'IRS audit representation', 'Tax planning & strategy', 'Back taxes & extensions'],
    },
    {
      slug: 'creacion-de-llc',
      icon: '🏛️',
      badge: 'Business Formation',
      title: 'LLC & Business Formation',
      desc: 'Full LLC setup in Florida in 5–7 business days. Articles of Organization, EIN, Operating Agreement, Corporate Kit, and bank account guidance.',
      highlights: ['Articles of Organization', 'EIN registration', 'Operating Agreement', 'Bank account setup'],
    },
    {
      slug: 'contabilidad',
      icon: '📊',
      badge: 'Accounting',
      title: 'Accounting & QuickBooks',
      desc: 'Monthly bookkeeping, P&L statements, balance sheets, bank reconciliations, and financial reporting using QuickBooks for your business.',
      highlights: ['Monthly P&L statements', 'Bank reconciliations', 'Balance sheet', 'QuickBooks setup & training'],
    },
    {
      slug: 'real-estate',
      icon: '🏠',
      badge: 'Real Estate',
      title: 'Real Estate & FIRPTA',
      desc: 'Tax advisory for property buyers and foreign investors in Florida. FIRPTA withholding claims, investment property analysis, non-resident tax filings.',
      highlights: ['FIRPTA withholding claims', 'Foreign investor tax filings', 'Investment property analysis', 'Non-resident tax planning'],
    },
    {
      slug: 'proteccion-patrimonial',
      icon: '🛡️',
      badge: 'Wealth Protection',
      title: 'Wealth Protection',
      desc: 'Protect your assets with LLCs, Trusts, and Holding structures. Strategic planning to separate personal and business assets and minimize exposure.',
      highlights: ['LLC asset protection', 'Trust structures', 'Holding companies', 'Strategic tax planning'],
    },
    {
      slug: 'payroll',
      icon: '💼',
      badge: 'Payroll',
      title: 'Payroll Services',
      desc: 'Complete payroll processing: salary calculations, tax withholding, direct deposit, W-2, Forms 941 & 940, and Florida Reemployment Tax.',
      highlights: ['W-2 & 1099 preparation', 'Forms 941 & 940', 'Direct deposit setup', 'New hire reporting'],
    },
    {
      slug: 'itin',
      icon: '🪪',
      badge: 'ITIN — CAA Agent',
      title: 'ITIN Application & Renewal',
      desc: 'Apply for or renew your ITIN as a Certified Acceptance Agent (CAA). We certify your documents in-office — no mailing your passport to the IRS.',
      highlights: ['Form W-7 preparation', 'In-office document certification', 'ITIN renewal', 'FIRPTA ITIN'],
    },
  ] : [
    {
      slug: 'impuestos',
      icon: '🧾',
      badge: 'Impuestos',
      title: 'Preparación de Impuestos y Planeación',
      desc: 'Declaraciones personales y corporativas, cumplimiento con el IRS, back taxes, impuesto sobre ventas y planeación fiscal estratégica para reducir tu carga tributaria.',
      highlights: ['Forma 1040 y declaraciones corporativas', 'Representación ante el IRS', 'Planeación fiscal estratégica', 'Back taxes y extensiones'],
    },
    {
      slug: 'creacion-de-llc',
      icon: '🏛️',
      badge: 'Creación de Empresas',
      title: 'Creación de LLC y Empresas',
      desc: 'Constitución completa de LLC en Florida en 5–7 días hábiles. Artículos de Organización, EIN, Acuerdo de Operación, Corporate Kit y apertura de cuenta bancaria.',
      highlights: ['Artículos de Organización', 'Registro EIN', 'Acuerdo de Operación', 'Apertura cuenta bancaria'],
    },
    {
      slug: 'contabilidad',
      icon: '📊',
      badge: 'Contabilidad',
      title: 'Contabilidad y QuickBooks',
      desc: 'Contabilidad mensual, estado de resultados, balance general, conciliaciones bancarias e informes financieros con QuickBooks para tu empresa.',
      highlights: ['Estado de resultados mensual', 'Conciliaciones bancarias', 'Balance general', 'Configuración y capacitación QuickBooks'],
    },
    {
      slug: 'real-estate',
      icon: '🏠',
      badge: 'Real Estate',
      title: 'Asesoría en Real Estate y FIRPTA',
      desc: 'Asesoría fiscal para compradores e inversionistas extranjeros en Florida. Reclamos FIRPTA, análisis de propiedades de inversión y declaraciones para no residentes.',
      highlights: ['Reclamos de retención FIRPTA', 'Declaraciones inversionistas extranjeros', 'Análisis propiedades de inversión', 'Planeación fiscal no residentes'],
    },
    {
      slug: 'proteccion-patrimonial',
      icon: '🛡️',
      badge: 'Patrimonio',
      title: 'Protección y Planeación Patrimonial',
      desc: 'Protege tus activos con LLC, Trust y estructuras Holding. Estrategias para separar patrimonio personal del empresarial y minimizar la exposición fiscal.',
      highlights: ['LLC protección de activos', 'Estructuras Trust', 'Empresas Holding', 'Planeación fiscal estratégica'],
    },
    {
      slug: 'payroll',
      icon: '💼',
      badge: 'Nómina / Payroll',
      title: 'Servicios de Nómina',
      desc: 'Procesamiento de nómina completo: cálculo de salarios, retenciones, depósito directo, W-2, Formularios 941 y 940, e impuesto de Reempleo de Florida.',
      highlights: ['Preparación W-2 y 1099', 'Formularios 941 y 940', 'Configuración depósito directo', 'Reporte nuevos empleados'],
    },
    {
      slug: 'itin',
      icon: '🪪',
      badge: 'ITIN — Agente CAA',
      title: 'Solicitud y Renovación de ITIN',
      desc: 'Solicita o renueva tu ITIN como Agente Certificado de Aceptación (CAA). Certificamos tus documentos en oficina — sin enviar tu pasaporte al IRS.',
      highlights: ['Preparación Formulario W-7', 'Certificación de documentos en oficina', 'Renovación de ITIN', 'ITIN para FIRPTA'],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">

        {/* ── Header ── */}
        <div className="premium-gradient text-white pt-28 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            >
              ← {isEn ? 'Back to Home' : 'Volver al Inicio'}
            </Link>
            <div className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              {isEn ? 'Our Services' : 'Nuestros Servicios'}
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              {isEn
                ? 'Expert Bilingual Financial Services'
                : 'Servicios Financieros Expertos y Bilingües'}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {isEn
                ? 'From tax preparation to business formation and wealth protection — we cover every financial need of the Hispanic community in South Florida.'
                : 'Desde preparación de impuestos hasta creación de empresas y protección patrimonial — cubrimos cada necesidad financiera de la comunidad hispana en el sur de Florida.'}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              {[
                { n: '20+', l: isEn ? 'Years Experience' : 'Años de Experiencia' },
                { n: '1,500+', l: isEn ? 'Satisfied Clients' : 'Clientes Satisfechos' },
                { n: '7', l: isEn ? 'Core Services' : 'Servicios Principales' },
                { n: '99%', l: isEn ? 'Satisfaction Rate' : 'Satisfacción' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <p className="text-2xl font-black">{n}</p>
                  <p className="text-xs text-white/60 uppercase tracking-wider mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/${locale}/servicios/${service.slug}`}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-4xl font-black text-slate-100 group-hover:text-brand-blue/10 transition-colors select-none">
                  0{i + 1}
                </span>

                {/* Icon + Badge */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Title + Desc */}
                <div>
                  <h2 className="text-xl font-black text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="grid grid-cols-1 gap-2 mt-auto">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA arrow */}
                <div className="flex items-center gap-2 text-brand-blue text-sm font-bold mt-2 group-hover:gap-3 transition-all">
                  {isEn ? 'Learn more' : 'Ver más'}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}

            {/* Contact card — spans full width on last row if odd */}
            <div className="md:col-span-2 bg-gradient-to-r from-brand-dark to-brand-blue rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                  {isEn ? 'Free initial consultation' : 'Consulta inicial gratuita'}
                </p>
                <h2 className="text-2xl font-black mb-1">
                  {isEn ? 'Not sure which service you need?' : '¿No sabes qué servicio necesitas?'}
                </h2>
                <p className="text-white/70 text-sm">
                  {isEn
                    ? 'Tell us about your situation and we\'ll recommend the right solution.'
                    : 'Cuéntanos tu situación y te recomendamos la solución correcta.'}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a
                  href={`/${locale}#contact`}
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-colors shadow-lg whitespace-nowrap"
                >
                  {isEn ? 'Contact Us' : 'Contáctanos'}
                </a>
                <a
                  href="tel:+19544645458"
                  className="border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-colors whitespace-nowrap"
                >
                  (954) 464-5458
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div className="border-t border-slate-100 py-8 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { v: '20+', l: isEn ? 'Years Experience' : 'Años de Experiencia', c: 'text-brand-dark' },
              { v: '1,500+', l: isEn ? 'Satisfied Clients' : 'Clientes Satisfechos', c: 'text-brand-green' },
              { v: '99%', l: isEn ? 'Satisfaction Rate' : 'Índice de Satisfacción', c: 'text-brand-dark' },
              { v: 'ES · EN', l: isEn ? 'Bilingual Service' : 'Servicio Bilingüe', c: 'text-brand-blue' },
            ].map(({ v, l, c }, i, arr) => (
              <div key={l} className="flex items-center gap-8">
                <div>
                  <p className={`text-2xl font-black ${c}`}>{v}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">{l}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-10 bg-slate-200 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
