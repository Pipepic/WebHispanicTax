import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ── City data ─────────────────────────────────────────────────────────────────
const CITIES = {
  'fort-lauderdale': {
    nameEs: 'Fort Lauderdale', nameEn: 'Fort Lauderdale',
    regionEs: 'Condado de Broward, Florida', regionEn: 'Broward County, Florida',
    miles: 15, route: 'I-595 Oeste',
    titleEs: 'Contador y Asesor Fiscal Bilingüe en Fort Lauderdale, FL',
    titleEn: 'Bilingual Tax Accountant & Financial Advisor in Fort Lauderdale, FL',
    descEs: 'Impuestos, LLC, contabilidad, nómina e ITIN para la comunidad hispana de Fort Lauderdale. Oficina en Coral Springs a 15 min. Atención en español. (954) 464-5458.',
    descEn: 'Tax preparation, LLC formation, accounting, payroll, and ITIN for the Hispanic community in Fort Lauderdale. Office in Coral Springs, 15 min away. Bilingual service. (954) 464-5458.',
    kwEs: ['contador bilingüe fort lauderdale', 'impuestos fort lauderdale hispano', 'LLC fort lauderdale fl', 'contabilidad fort lauderdale', 'preparación impuestos fort lauderdale'],
    kwEn: ['bilingual accountant fort lauderdale', 'tax preparation fort lauderdale', 'LLC fort lauderdale fl', 'accounting fort lauderdale hispanic', 'tax preparer fort lauderdale fl'],
    heroEs: 'Atendemos a familias y emprendedores hispanos de Fort Lauderdale con servicios de impuestos, LLC, contabilidad, nómina e ITIN. Nuestra oficina en Coral Springs está a solo 15 minutos — y también atendemos de forma completamente virtual.',
    heroEn: 'We serve Hispanic families and entrepreneurs in Fort Lauderdale with tax preparation, LLC formation, accounting, payroll, and ITIN services. Our Coral Springs office is just 15 minutes away — and we also serve clients fully virtually.',
    faqsEs: [
      { q: '¿Dónde está su oficina y cómo llego desde Fort Lauderdale?', a: 'Nuestra oficina está en 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067, a aproximadamente 15 minutos tomando la I-595 Oeste desde Fort Lauderdale. También ofrecemos atención virtual completa por videollamada, WhatsApp o correo electrónico.' },
      { q: '¿Atienden restaurantes y negocios hispanos en Fort Lauderdale?', a: 'Sí. Manejamos contabilidad mensual, nómina, impuestos corporativos y declaraciones de sales tax para restaurantes, tiendas, salones de belleza, empresas de construcción y muchos otros negocios hispanos en el área de Fort Lauderdale y Broward County.' },
      { q: '¿Pueden crear mi LLC desde Fort Lauderdale?', a: 'Sí, completamente en remoto. Manejamos todo el proceso de creación de tu LLC en Florida: Artículos de Organización, EIN, Acuerdo de Operación y orientación para abrir cuenta bancaria empresarial. No necesitas venir a la oficina.' },
    ],
    faqsEn: [
      { q: 'Where is your office and how do I get there from Fort Lauderdale?', a: 'Our office is at 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067, approximately 15 minutes via I-595 West from Fort Lauderdale. We also offer full virtual service by video call, WhatsApp, or email.' },
      { q: 'Do you serve restaurants and Hispanic businesses in Fort Lauderdale?', a: 'Yes. We handle monthly accounting, payroll, corporate taxes, and sales tax returns for restaurants, retail shops, salons, construction companies, and many other Hispanic businesses in the Fort Lauderdale and Broward County area.' },
      { q: 'Can you form my LLC from Fort Lauderdale?', a: 'Yes, completely remotely. We handle the entire Florida LLC formation process: Articles of Organization, EIN, Operating Agreement, and business bank account guidance. No need to come to the office.' },
    ],
  },
  'boca-raton': {
    nameEs: 'Boca Ratón', nameEn: 'Boca Raton',
    regionEs: 'Condado de Palm Beach, Florida', regionEn: 'Palm Beach County, Florida',
    miles: 20, route: 'I-95 Norte',
    titleEs: 'Asesoría Financiera, Fiscal y Patrimonial en Boca Ratón, FL',
    titleEn: 'Financial, Tax & Wealth Advisory in Boca Raton, FL',
    descEs: 'Impuestos, protección patrimonial, LLC y contabilidad para la comunidad hispana de Boca Ratón. Oficina en Coral Springs a 20 min. Servicio bilingüe. (954) 464-5458.',
    descEn: 'Tax preparation, wealth protection, LLC formation, and accounting for the Hispanic community in Boca Raton. Office in Coral Springs, 20 min away. Bilingual service. (954) 464-5458.',
    kwEs: ['contador bilingüe boca ratón', 'impuestos boca raton', 'protección patrimonial boca ratón', 'LLC boca raton fl', 'asesoría financiera boca ratón hispano'],
    kwEn: ['bilingual accountant boca raton', 'tax preparation boca raton fl', 'wealth protection boca raton', 'LLC boca raton', 'financial advisor boca raton hispanic'],
    heroEs: 'Asesoramos a empresarios y familias hispanas de Boca Ratón en impuestos, protección patrimonial, creación de LLC y contabilidad. Con 20+ años de experiencia sirviendo a la comunidad hispana del sur de Florida, ofrecemos consultas presenciales y virtuales.',
    heroEn: 'We advise Hispanic entrepreneurs and families in Boca Raton on taxes, wealth protection, LLC formation, and accounting. With 20+ years serving South Florida\'s Hispanic community, we offer both in-person and virtual consultations.',
    faqsEs: [
      { q: '¿Atienden clientes en Palm Beach County desde su oficina en Coral Springs?', a: 'Sí. Nuestra oficina en Coral Springs está a 20 minutos de Boca Ratón por la I-95 o el Turnpike. También ofrecemos atención virtual completa para clientes que prefieran no desplazarse.' },
      { q: '¿Ofrecen servicios de protección patrimonial para empresarios de Boca Ratón?', a: 'Sí. Diseñamos estructuras LLC, Trust y Holding para proteger activos y minimizar impuestos para empresarios de alto patrimonio en Boca Ratón, Delray Beach y toda Palm Beach County.' },
      { q: '¿Ayudan a inversionistas extranjeros con propiedades en Boca Ratón?', a: 'Absolutamente. Asistimos a inversionistas no residentes con reclamos FIRPTA, declaraciones 1040-NR, ITINs y análisis de estructura de compra para propiedades en Boca Ratón y Palm Beach County.' },
    ],
    faqsEn: [
      { q: 'Do you serve clients in Palm Beach County from your Coral Springs office?', a: 'Yes. Our Coral Springs office is 20 minutes from Boca Raton via I-95 or the Turnpike. We also offer full virtual service for clients who prefer not to travel.' },
      { q: 'Do you offer wealth protection services for Boca Raton entrepreneurs?', a: 'Yes. We design LLC, Trust, and Holding structures to protect assets and minimize taxes for high-net-worth business owners in Boca Raton, Delray Beach, and all of Palm Beach County.' },
      { q: 'Do you help foreign investors with properties in Boca Raton?', a: 'Absolutely. We assist non-resident investors with FIRPTA claims, 1040-NR filings, ITINs, and purchase structure analysis for properties in Boca Raton and Palm Beach County.' },
    ],
  },
  'pompano-beach': {
    nameEs: 'Pompano Beach', nameEn: 'Pompano Beach',
    regionEs: 'Condado de Broward, Florida', regionEn: 'Broward County, Florida',
    miles: 10, route: 'SR-869 / Sawgrass Expressway',
    titleEs: 'Impuestos, Contabilidad y Nómina en Pompano Beach, FL',
    titleEn: 'Tax Preparation, Accounting & Payroll in Pompano Beach, FL',
    descEs: 'Impuestos, contabilidad, nómina, LLC e ITIN para la comunidad hispana de Pompano Beach. Oficina en Coral Springs a 10 min. Servicio en español. (954) 464-5458.',
    descEn: 'Tax preparation, accounting, payroll, LLC, and ITIN for the Hispanic community in Pompano Beach. Office in Coral Springs, 10 min away. Bilingual service. (954) 464-5458.',
    kwEs: ['impuestos pompano beach hispano', 'contador bilingüe pompano beach', 'contabilidad pompano beach', 'nómina pompano beach', 'LLC pompano beach fl'],
    kwEn: ['tax preparation pompano beach', 'bilingual accountant pompano beach', 'accounting pompano beach hispanic', 'payroll pompano beach', 'LLC pompano beach fl'],
    heroEs: 'Servimos a familias y negocios hispanos de Pompano Beach con preparación de impuestos, contabilidad mensual, nómina, LLC e ITIN. A solo 10 minutos en Coral Springs, con servicio bilingüe y personalizado.',
    heroEn: 'We serve Hispanic families and businesses in Pompano Beach with tax preparation, monthly accounting, payroll, LLC formation, and ITIN services. Just 10 minutes away in Coral Springs, with personalized bilingual service.',
    faqsEs: [
      { q: '¿Cuánto queda Coral Springs de Pompano Beach?', a: 'Nuestra oficina en 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067 está a aproximadamente 10 minutos de Pompano Beach por el Turnpike o la SR-869. También atendemos de forma virtual para tu comodidad.' },
      { q: '¿Atienden trabajadores independientes y contratistas en Pompano Beach?', a: 'Sí. Preparamos declaraciones para freelancers, contratistas (1099) y dueños de negocios en Pompano Beach. También tramitamos el ITIN si no tienes SSN y procesamos la nómina si tienes empleados.' },
      { q: '¿Pueden ayudar con la contabilidad de mi negocio en Pompano Beach?', a: 'Sí. Manejamos contabilidad mensual con QuickBooks, conciliaciones bancarias, estado de resultados, declaraciones de sales tax y nómina para restaurantes, salones, constructoras y muchos otros negocios hispanos en Pompano Beach.' },
    ],
    faqsEn: [
      { q: 'How far is Coral Springs from Pompano Beach?', a: 'Our office at 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067 is approximately 10 minutes from Pompano Beach via the Turnpike or SR-869. We also offer virtual consultations for your convenience.' },
      { q: 'Do you serve freelancers and independent contractors in Pompano Beach?', a: 'Yes. We prepare returns for freelancers, contractors (1099), and small business owners in Pompano Beach. We also process ITINs if you don\'t have an SSN and handle payroll if you have employees.' },
      { q: 'Can you help with accounting for my Pompano Beach business?', a: 'Yes. We handle monthly QuickBooks accounting, bank reconciliations, P&L statements, sales tax filings, and payroll for restaurants, salons, construction companies, and many other Hispanic businesses in Pompano Beach.' },
    ],
  },
  'miami': {
    nameEs: 'Miami', nameEn: 'Miami',
    regionEs: 'Condado de Miami-Dade, Florida', regionEn: 'Miami-Dade County, Florida',
    miles: 40, route: 'I-75 / Turnpike',
    titleEs: 'Contador Bilingüe en Miami, FL — Impuestos, LLC y Patrimonio',
    titleEn: 'Bilingual Accountant in Miami, FL — Taxes, LLC & Wealth Protection',
    descEs: 'Impuestos, LLC, contabilidad, ITIN y protección patrimonial para la comunidad hispana de Miami. Consultas presenciales y virtuales. Servicio en español. (954) 464-5458.',
    descEn: 'Tax preparation, LLC, accounting, ITIN, and wealth protection for the Hispanic community in Miami. In-person and virtual consultations. Bilingual service. (954) 464-5458.',
    kwEs: ['contador bilingüe miami', 'impuestos miami hispano', 'crear LLC miami', 'contabilidad miami hispano', 'ITIN miami', 'asesoría fiscal miami fl'],
    kwEn: ['bilingual accountant miami', 'tax preparation miami hispanic', 'LLC formation miami', 'accounting miami hispanic', 'ITIN miami', 'CPA miami hispanic fl'],
    heroEs: 'Asesoramos a emprendedores y familias hispanas de Miami — venezolanos, colombianos, cubanos, argentinos y de toda América Latina — en impuestos, LLC, contabilidad, ITIN y protección patrimonial. Consultas virtuales disponibles; sin necesidad de viajar a Coral Springs.',
    heroEn: 'We advise Hispanic entrepreneurs and families in Miami — Venezuelans, Colombians, Cubans, Argentines, and clients from across Latin America — on taxes, LLC formation, accounting, ITIN, and wealth protection. Virtual consultations available; no need to travel to Coral Springs.',
    faqsEs: [
      { q: '¿Atienden a clientes de Miami de forma virtual?', a: 'Sí. Para clientes en Miami ofrecemos consultas por videollamada, WhatsApp y correo electrónico. Podemos gestionar impuestos, LLC, contabilidad e ITIN completamente en remoto — sin que necesites viajar a Coral Springs.' },
      { q: '¿Tienen experiencia con inmigrantes venezolanos, colombianos y argentinos en Miami?', a: 'Sí. Trabajamos con la comunidad hispana diversa de Miami: venezolanos, colombianos, argentinos, cubanos y de toda América Latina. Entendemos las necesidades fiscales específicas de cada comunidad, incluyendo ITIN, declaraciones de no residentes y LLC para inversiones internacionales.' },
      { q: '¿Pueden tramitar el ITIN para clientes en Miami?', a: 'Sí. Como Agentes Certificados de Aceptación (CAA) del IRS, tramitamos ITINs para clientes en Miami sin SSN. Certificamos los documentos virtualmente o en nuestra oficina — sin que debas enviar tu pasaporte original al IRS.' },
    ],
    faqsEn: [
      { q: 'Do you serve Miami clients virtually?', a: 'Yes. For Miami clients we offer consultations by video call, WhatsApp, and email. We can handle taxes, LLC formation, accounting, and ITIN completely remotely — no need to travel to Coral Springs.' },
      { q: 'Do you have experience with Venezuelan, Colombian, and Argentine immigrants in Miami?', a: 'Yes. We work with Miami\'s diverse Hispanic community: Venezuelans, Colombians, Argentines, Cubans, and clients from across Latin America. We understand the specific tax needs of each community, including ITINs, non-resident returns, and LLCs for international investments.' },
      { q: 'Can you process ITIN for clients in Miami?', a: 'Yes. As IRS Certified Acceptance Agents (CAAs), we process ITINs for Miami clients without an SSN. We certify documents virtually or at our office — no need to mail your original passport to the IRS.' },
    ],
  },
  'deerfield-beach': {
    nameEs: 'Deerfield Beach', nameEn: 'Deerfield Beach',
    regionEs: 'Condado de Broward, Florida', regionEn: 'Broward County, Florida',
    miles: 12, route: 'Sawgrass Expressway',
    titleEs: 'Impuestos, Contabilidad y LLC en Deerfield Beach, FL',
    titleEn: 'Taxes, Accounting & LLC in Deerfield Beach, FL',
    descEs: 'Preparación de impuestos, contabilidad, LLC e ITIN para la comunidad hispana de Deerfield Beach. A 12 minutos en Coral Springs. Servicio en español. (954) 464-5458.',
    descEn: 'Tax preparation, accounting, LLC formation, and ITIN for the Hispanic community in Deerfield Beach. 12 minutes away in Coral Springs. Bilingual service. (954) 464-5458.',
    kwEs: ['impuestos deerfield beach hispano', 'contador bilingüe deerfield beach', 'contabilidad deerfield beach', 'LLC deerfield beach fl', 'ITIN deerfield beach'],
    kwEn: ['tax preparation deerfield beach', 'bilingual accountant deerfield beach', 'accounting deerfield beach hispanic', 'LLC deerfield beach fl', 'ITIN deerfield beach'],
    heroEs: 'Prestamos servicios de impuestos, contabilidad, LLC e ITIN para familias y negocios hispanos de Deerfield Beach. A solo 12 minutos por el Sawgrass Expressway, con servicio bilingüe y personalizado.',
    heroEn: 'We provide tax, accounting, LLC, and ITIN services for Hispanic families and businesses in Deerfield Beach. Just 12 minutes via the Sawgrass Expressway, with personalized bilingual service.',
    faqsEs: [
      { q: '¿Cuánto queda su oficina de Deerfield Beach?', a: 'Nuestra oficina en 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067 está a aproximadamente 12 minutos de Deerfield Beach por el Sawgrass Expressway. También ofrecemos atención completamente virtual.' },
      { q: '¿Atienden pequeños negocios en Deerfield Beach?', a: 'Sí. Preparamos impuestos corporativos, manejamos contabilidad mensual y procesamos nómina para negocios en Deerfield Beach. También ayudamos a crear LLC y mantener el cumplimiento anual.' },
      { q: '¿Tramitan el ITIN para residentes de Deerfield Beach?', a: 'Sí. Como Agentes Certificados de Aceptación del IRS, tramitamos el ITIN para residentes de Deerfield Beach sin SSN. Certificamos tus documentos en nuestra oficina y preparamos la declaración adjunta.' },
    ],
    faqsEn: [
      { q: 'How far is your office from Deerfield Beach?', a: 'Our office at 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067 is approximately 12 minutes from Deerfield Beach via the Sawgrass Expressway. We also offer fully virtual service.' },
      { q: 'Do you serve small businesses in Deerfield Beach?', a: 'Yes. We prepare corporate taxes, handle monthly accounting, and process payroll for businesses in Deerfield Beach. We also help form LLCs and maintain annual compliance.' },
      { q: 'Do you process ITIN for Deerfield Beach residents?', a: 'Yes. As IRS Certified Acceptance Agents, we process ITINs for Deerfield Beach residents without an SSN. We certify your documents at our office and prepare the attached tax return.' },
    ],
  },
} as const;

type CitySlug = keyof typeof CITIES;

const SERVICES = [
  { slug: 'impuestos', icon: '🧾', labelEs: 'Impuestos', labelEn: 'Tax Preparation' },
  { slug: 'creacion-de-llc', icon: '🏛️', labelEs: 'Creación de LLC', labelEn: 'LLC Formation' },
  { slug: 'contabilidad', icon: '📊', labelEs: 'Contabilidad', labelEn: 'Accounting' },
  { slug: 'real-estate', icon: '🏠', labelEs: 'Real Estate & FIRPTA', labelEn: 'Real Estate & FIRPTA' },
  { slug: 'proteccion-patrimonial', icon: '🛡️', labelEs: 'Protección Patrimonial', labelEn: 'Wealth Protection' },
  { slug: 'payroll', icon: '💼', labelEs: 'Nómina / Payroll', labelEn: 'Payroll' },
  { slug: 'itin', icon: '🪪', labelEs: 'ITIN', labelEn: 'ITIN' },
];

export async function generateStaticParams() {
  return (Object.keys(CITIES) as CitySlug[]).map((ciudad) => ({ ciudad }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; ciudad: string }>;
}): Promise<Metadata> {
  const { locale, ciudad } = await params;
  const city = CITIES[ciudad as CitySlug];
  if (!city) return {};
  const isEn = locale === 'en';
  return {
    title: isEn ? city.titleEn : city.titleEs,
    description: isEn ? city.descEn : city.descEs,
    keywords: isEn ? [...city.kwEn] : [...city.kwEs],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/ciudades/${ciudad}`,
      languages: {
        es: `https://hispanic.financial/es/ciudades/${ciudad}`,
        en: `https://hispanic.financial/en/ciudades/${ciudad}`,
        'x-default': `https://hispanic.financial/en/ciudades/${ciudad}`,
      },
    },
    openGraph: {
      title: isEn ? city.titleEn : city.titleEs,
      description: isEn ? city.descEn : city.descEs,
      url: `https://hispanic.financial/${locale}/ciudades/${ciudad}`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn ? city.titleEn : city.titleEs,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; ciudad: string }>;
}) {
  const { locale, ciudad } = await params;
  const city = CITIES[ciudad as CitySlug];
  if (!city) notFound();

  const isEn = locale === 'en';
  const cityName = isEn ? city.nameEn : city.nameEs;
  const faqs = isEn ? city.faqsEn : city.faqsEs;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': 'https://hispanic.financial/#organization',
    name: 'Hispanic Financial',
    description: isEn ? city.descEn : city.descEs,
    url: `https://hispanic.financial/${locale}/ciudades/${ciudad}`,
    telephone: '+19544645458',
    email: 'apatino@hispanictaxinc.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7401 Wiles Rd. Suite 126',
      addressLocality: 'Coral Springs',
      addressRegion: 'FL',
      postalCode: '33067',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: isEn ? city.nameEn : city.nameEs },
      { '@type': 'City', name: 'Coral Springs' },
    ],
    knowsLanguage: ['en', 'es'],
    priceRange: '$$',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://hispanic.financial/${locale}` },
      { '@type': 'ListItem', position: 2, name: isEn ? 'Cities' : 'Ciudades', item: `https://hispanic.financial/${locale}/ciudades/${ciudad}` },
      { '@type': 'ListItem', position: 3, name: cityName },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">

        {/* ── Header ── */}
        <div className="premium-gradient text-white pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← {isEn ? 'Back to Home' : 'Volver al Inicio'}
            </Link>
            <div className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              📍 {cityName}, FL
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              {isEn ? `Hispanic Financial — Serving ${cityName}, FL` : `Hispanic Financial — Sirviendo a ${cityName}, FL`}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {isEn ? city.heroEn : city.heroEs}
            </p>

            {/* Distance badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
              <span className="text-2xl">🗺️</span>
              <div>
                <p className="font-black text-sm">
                  {isEn
                    ? `${city.miles} min from ${cityName}`
                    : `A ${city.miles} min de ${cityName}`}
                </p>
                <p className="text-white/60 text-xs">{city.route} · {isEn ? 'Virtual consultations available' : 'Atención virtual disponible'}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href={`/${locale}#contact`} className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors shadow-lg">
                {isEn ? 'Contact Us' : 'Contáctanos'}
              </a>
              <a href="tel:+19544645458" className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors">
                (954) 464-5458
              </a>
            </div>
          </div>
        </div>

        {/* ── Services grid ── */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-3">
            {isEn ? `Our Services Available in ${cityName}` : `Nuestros Servicios Disponibles en ${cityName}`}
          </h2>
          <p className="text-slate-500 mb-10">
            {isEn
              ? `All services are available to clients in ${cityName} — in-person at our Coral Springs office or fully virtual.`
              : `Todos los servicios están disponibles para clientes en ${cityName} — presencialmente en Coral Springs o completamente en virtual.`}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${locale}/servicios/${s.slug}`}
                className="group flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all"
              >
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <span className="font-black text-brand-dark text-sm group-hover:text-brand-blue transition-colors">
                  {isEn ? s.labelEn : s.labelEs} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Why HF ── */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-10">
              {isEn
                ? `Why Hispanic Clients in ${cityName} Choose Us`
                : `Por Qué los Hispanos de ${cityName} nos Eligen`}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🌎',
                  title: isEn ? 'Fully Bilingual' : 'Totalmente Bilingüe',
                  desc: isEn
                    ? 'Our entire team serves you in English or Spanish, whichever you prefer. No language barriers, no confusion.'
                    : 'Todo nuestro equipo te atiende en español o inglés según tu preferencia. Sin barreras de idioma.',
                },
                {
                  icon: '📱',
                  title: isEn ? 'In-Person or Virtual' : 'Presencial o Virtual',
                  desc: isEn
                    ? `Visit us at our Coral Springs office or let us handle everything remotely by video call, WhatsApp, or email.`
                    : `Visítanos en Coral Springs o déjanos manejar todo virtualmente por videollamada, WhatsApp o correo.`,
                },
                {
                  icon: '⭐',
                  title: isEn ? '20+ Years, 1,500+ Clients' : '20+ Años, 1,500+ Clientes',
                  desc: isEn
                    ? 'Over two decades serving South Florida\'s Hispanic community with a 99% satisfaction rate and 5-star reviews.'
                    : 'Más de dos décadas sirviendo a la comunidad hispana del sur de Florida con 99% de satisfacción y reseñas 5 estrellas.',
                },
              ].map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-black text-brand-dark mb-2">{b.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── International note ── */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-brand-dark/5 to-brand-blue/5 border border-brand-blue/15 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="text-4xl flex-shrink-0">🌍</div>
            <div className="flex-1">
              <h3 className="font-black text-brand-dark text-lg mb-1">
                {isEn ? 'Not in Florida? We Serve International Clients Too.' : '¿No estás en Florida? También atendemos clientes internacionales.'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEn
                  ? 'If you\'re outside the US and want to form an LLC, get an ITIN, or file a US tax return, we can help you 100% remotely.'
                  : 'Si estás fuera de EE.UU. y quieres crear una LLC, obtener un ITIN o declarar impuestos en USA, te ayudamos 100% en remoto.'}
              </p>
            </div>
            <Link
              href={`/${locale}/internacional`}
              className="flex-shrink-0 bg-brand-blue hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              {isEn ? 'International Services →' : 'Servicios Internacionales →'}
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-brand-dark mb-8">
              {isEn ? `FAQ — Hispanic Financial in ${cityName}` : `Preguntas Frecuentes — Hispanic Financial en ${cityName}`}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-slate-200 group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-brand-dark list-none">
                    {faq.q}
                    <span className="text-brand-blue group-open:rotate-45 transition-transform text-xl flex-shrink-0 ml-4">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="premium-gradient text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              {isEn
                ? `Ready to work with a bilingual financial expert?`
                : `¿Listo para trabajar con un experto financiero bilingüe?`}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {isEn
                ? `Serving ${cityName} and all of South Florida. Free initial consultation.`
                : `Sirviendo a ${cityName} y todo el sur de Florida. Consulta inicial gratuita.`}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`/${locale}#contact`} className="bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors shadow-xl">
                {isEn ? 'Contact Us Now' : 'Contáctanos Ahora'}
              </a>
              <a
                href={`https://wa.me/19544645458?text=${encodeURIComponent(isEn ? `Hello, I\'m in ${city.nameEn} and I need help with my finances.` : `Hola, estoy en ${city.nameEs} y necesito ayuda con mis finanzas.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="border-2 border-white/30 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── Trust bar ── */}
        <div className="border-t border-slate-100 py-8 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { v: '20+', l: isEn ? 'Years Experience' : 'Años de Experiencia', c: 'text-brand-dark' },
              { v: '1,500+', l: isEn ? 'Satisfied Clients' : 'Clientes Satisfechos', c: 'text-brand-green' },
              { v: '99%', l: isEn ? 'Satisfaction Rate' : 'Índice de Satisfacción', c: 'text-brand-dark' },
              { v: 'ES · EN', l: isEn ? 'Bilingual' : 'Bilingüe', c: 'text-brand-blue' },
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
