import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Open a US LLC from Anywhere in the World | Hispanic Financial'
      : 'Crea tu LLC en USA desde Cualquier País | Hispanic Financial',
    description: isEn
      ? 'Form a US LLC, get your ITIN, and file US taxes — 100% remotely. No need to visit the US. We serve non-residents from Colombia, Mexico, Venezuela, Argentina and all of Latin America. Bilingual experts. (954) 464-5458.'
      : 'Crea una LLC en USA, obtén tu ITIN y declara impuestos en EE.UU. — 100% en remoto. Sin visitar Estados Unidos. Atendemos no residentes de Colombia, México, Venezuela, Argentina y toda América Latina. Expertos bilingües. (954) 464-5458.',
    keywords: isEn
      ? ['open LLC USA from abroad', 'US LLC non-resident', 'form US company internationally',
         'ITIN non-resident USA', 'US tax return non-resident', 'LLC USA from Latin America',
         'Hispanic financial services international', 'US company formation foreigners']
      : ['crear LLC en USA desde el exterior', 'LLC USA no residente', 'abrir empresa en estados unidos desde otro país',
         'ITIN no residente USA', 'declarar impuestos USA no residente', 'LLC USA desde latinoamérica',
         'servicios financieros hispanos internacional', 'crear empresa USA siendo extranjero'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/internacional`,
      languages: {
        es: 'https://hispanic.financial/es/internacional',
        en: 'https://hispanic.financial/en/internacional',
        'x-default': 'https://hispanic.financial/en/internacional',
      },
    },
    openGraph: {
      title: isEn
        ? 'Open a US LLC from Anywhere | Hispanic Financial'
        : 'Crea tu LLC en USA desde Cualquier País | Hispanic Financial',
      description: isEn
        ? '100% remote US LLC formation, ITIN, and tax filing for non-residents worldwide. We speak your language and understand your situation.'
        : 'Creación de LLC en USA, ITIN y declaración de impuestos 100% en remoto para no residentes en todo el mundo. Hablamos tu idioma y entendemos tu situación.',
      url: `https://hispanic.financial/${locale}/internacional`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn
        ? 'Open a US LLC from Anywhere in the World | Hispanic Financial'
        : 'Crea tu LLC en USA desde Cualquier País | Hispanic Financial',
    },
  };
}

const COUNTRIES = [
  { slug: 'colombia', flag: '🇨🇴', nameEs: 'Colombia', nameEn: 'Colombia' },
  { slug: 'mexico', flag: '🇲🇽', nameEs: 'México', nameEn: 'Mexico' },
  { slug: 'venezuela', flag: '🇻🇪', nameEs: 'Venezuela', nameEn: 'Venezuela' },
  { slug: 'argentina', flag: '🇦🇷', nameEs: 'Argentina', nameEn: 'Argentina' },
  { slug: 'peru', flag: '🇵🇪', nameEs: 'Perú', nameEn: 'Peru' },
  { slug: 'chile', flag: '🇨🇱', nameEs: 'Chile', nameEn: 'Chile' },
  { slug: 'ecuador', flag: '🇪🇨', nameEs: 'Ecuador', nameEn: 'Ecuador' },
  { slug: 'espana', flag: '🇪🇸', nameEs: 'España', nameEn: 'Spain' },
];

export default async function InternacionalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isEn ? 'International Services — US LLC & Tax for Non-Residents' : 'Servicios Internacionales — LLC y Fiscal USA para No Residentes',
    description: isEn
      ? 'Complete US LLC formation, ITIN application, and tax filing services for non-US residents. 100% remote process — no need to visit the United States.'
      : 'Creación de LLC en USA, solicitud de ITIN y declaración de impuestos para personas que no viven en EE.UU. Proceso 100% remoto — sin necesidad de visitar Estados Unidos.',
    provider: {
      '@type': 'AccountingService',
      '@id': 'https://hispanic.financial/#organization',
      name: 'Hispanic Financial',
      url: 'https://hispanic.financial',
    },
    areaServed: [
      { '@type': 'State', name: 'Florida' },
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Country', name: 'Mexico' },
      { '@type': 'Country', name: 'Venezuela' },
      { '@type': 'Country', name: 'Argentina' },
      { '@type': 'Country', name: 'Peru' },
      { '@type': 'Country', name: 'Chile' },
      { '@type': 'Country', name: 'Ecuador' },
      { '@type': 'Country', name: 'Spain' },
    ],
    url: `https://hispanic.financial/${locale}/internacional`,
  };

  const faqsEs = [
    { q: '¿Un extranjero puede ser dueño de una LLC en USA sin vivir allí?', a: 'Sí, absolutamente. Las LLC en Estados Unidos pueden ser propiedad de extranjeros no residentes. No necesitas ciudadanía, green card ni visa para abrir una LLC en USA. Solo necesitas un pasaporte válido y nosotros tramitamos todo de forma remota.' },
    { q: '¿Necesito viajar a Estados Unidos para crear mi LLC?', a: 'No. El proceso completo de creación de tu LLC en Florida se puede hacer 100% en remoto: enviamos los documentos digitalmente, tramitamos los Artículos de Organización ante el estado de Florida, obtenemos tu EIN del IRS y preparamos el Acuerdo de Operación — todo sin que salgas de tu país.' },
    { q: '¿Puedo abrir una cuenta bancaria en USA con mi LLC como no residente?', a: 'Sí. Con tu LLC activa y un EIN del IRS, puedes abrir cuentas bancarias en bancos como Mercury o Relay que trabajan con no residentes de forma 100% digital. También puedes abrir cuentas de PayPal Business, Stripe, o Wise en nombre de tu LLC.' },
    { q: '¿Cuánto cuesta crear una LLC en USA desde el exterior?', a: 'El costo del estado de Florida es $125 para los Artículos de Organización más $138.75 de Reporte Anual cada año. Nuestros honorarios de servicio incluyen el trámite completo: artículos, EIN, Acuerdo de Operación y orientación para la cuenta bancaria. Contáctanos para una cotización exacta.' },
    { q: '¿La LLC en USA genera obligaciones fiscales en mi país?', a: 'Depende de tu país de residencia y del tratado fiscal entre ese país y EE.UU. En general, si tu LLC opera como "disregarded entity" (un solo miembro) y no tiene presencia ni empleados en EE.UU., puede no generar impuesto federal en USA. Sin embargo, sí puede generar obligaciones en tu país de origen. Te asesoramos sobre las implicaciones fiscales específicas a tu situación.' },
    { q: '¿Qué es el ITIN y lo necesito si vivo fuera de USA?', a: 'El ITIN (Individual Taxpayer Identification Number) es el número fiscal del IRS para personas que no tienen SSN. Lo necesitas si tu LLC genera ingresos en EE.UU. que debes declarar, si eres socio de una LLC con varios miembros, o si haces transacciones de bienes raíces en USA (FIRPTA). Como Agentes Certificados de Aceptación, lo tramitamos para ti sin que vengas a Estados Unidos.' },
  ];

  const faqsEn = [
    { q: 'Can a foreigner own a US LLC without living there?', a: 'Yes, absolutely. US LLCs can be owned by foreign non-residents. You don\'t need US citizenship, a green card, or a visa to open a US LLC. You just need a valid passport and we handle everything remotely.' },
    { q: 'Do I need to travel to the United States to form my LLC?', a: 'No. The entire Florida LLC formation process can be done 100% remotely: we submit documents digitally, file the Articles of Organization with the State of Florida, obtain your IRS EIN, and prepare the Operating Agreement — all without you leaving your country.' },
    { q: 'Can I open a US bank account for my LLC as a non-resident?', a: 'Yes. With an active LLC and an IRS EIN, you can open bank accounts at banks like Mercury or Relay that work with non-residents 100% digitally. You can also open PayPal Business, Stripe, or Wise accounts in your LLC\'s name.' },
    { q: 'How much does it cost to form a US LLC from abroad?', a: 'Florida\'s state filing fee is $125 for the Articles of Organization, plus a $138.75 Annual Report each year. Our service fees include the complete process: articles, EIN, Operating Agreement, and bank account guidance. Contact us for an exact quote.' },
    { q: 'Does a US LLC create tax obligations in my home country?', a: 'It depends on your country of residence and the tax treaty between that country and the US. Generally, if your LLC operates as a disregarded entity (single member) with no US presence or employees, it may not generate federal US tax. However, it may create obligations in your home country. We advise you on the specific tax implications for your situation.' },
    { q: 'What is an ITIN and do I need one if I live outside the US?', a: 'An ITIN (Individual Taxpayer Identification Number) is the IRS tax number for people who don\'t have an SSN. You need one if your LLC generates US-sourced income that must be reported, if you\'re a partner in a multi-member LLC, or if you make US real estate transactions (FIRPTA). As Certified Acceptance Agents, we process it for you without you coming to the United States.' },
  ];

  const faqs = isEn ? faqsEn : faqsEs;

  const steps = isEn ? [
    { n: '1', icon: '📱', t: 'Contact us', d: 'Reach out by WhatsApp, email, or video call. We evaluate your situation and recommend the right structure for your business or investment.' },
    { n: '2', icon: '📄', t: 'Send your documents', d: 'We need a copy of your passport. Everything is handled digitally — no original documents need to be mailed to the US.' },
    { n: '3', icon: '🏛️', t: 'We file everything', d: 'We prepare and file the Articles of Organization with Florida, obtain your EIN from the IRS, and draft your Operating Agreement. Process: 5–7 business days.' },
    { n: '4', icon: '🏦', t: 'You receive your documents', d: 'You receive your LLC certificate, EIN, and Operating Agreement by email. We guide you on opening a business bank account remotely.' },
  ] : [
    { n: '1', icon: '📱', t: 'Contáctanos', d: 'Escríbenos por WhatsApp, correo o videollamada. Evaluamos tu situación y recomendamos la estructura correcta para tu negocio o inversión.' },
    { n: '2', icon: '📄', t: 'Envía tus documentos', d: 'Necesitamos copia de tu pasaporte. Todo se gestiona digitalmente — no necesitas enviar documentos originales a EE.UU.' },
    { n: '3', icon: '🏛️', t: 'Nosotros tramitamos todo', d: 'Preparamos y presentamos los Artículos de Organización ante Florida, obtenemos tu EIN del IRS y redactamos tu Acuerdo de Operación. Proceso: 5–7 días hábiles.' },
    { n: '4', icon: '🏦', t: 'Recibes tus documentos', d: 'Recibes el certificado de tu LLC, EIN y Acuerdo de Operación por correo electrónico. Te orientamos para abrir tu cuenta bancaria empresarial de forma remota.' },
  ];

  const services = [
    {
      slug: 'creacion-de-llc', icon: '🏛️',
      titleEs: 'Creación de LLC en USA', titleEn: 'US LLC Formation',
      descEs: 'Abre tu empresa en Florida en 5–7 días hábiles, completamente en remoto. EIN, Artículos y Acuerdo de Operación incluidos.',
      descEn: 'Open your Florida company in 5–7 business days, fully remotely. EIN, Articles, and Operating Agreement included.',
    },
    {
      slug: 'itin', icon: '🪪',
      titleEs: 'Trámite de ITIN', titleEn: 'ITIN Application',
      descEs: 'Obtén tu número fiscal de EE.UU. sin salir de tu país. Somos Agentes Certificados de Aceptación del IRS.',
      descEn: 'Get your US tax ID without leaving your country. We are IRS Certified Acceptance Agents.',
    },
    {
      slug: 'impuestos', icon: '🧾',
      titleEs: 'Declaración de Impuestos USA', titleEn: 'US Tax Return Filing',
      descEs: 'Preparamos tu declaración 1040-NR (no residente) o 1040, y las declaraciones de tu LLC en USA.',
      descEn: 'We prepare your 1040-NR (non-resident) or 1040 return, and your US LLC tax filings.',
    },
    {
      slug: 'real-estate', icon: '🏠',
      titleEs: 'FIRPTA e Inversiones Inmobiliarias', titleEn: 'FIRPTA & Real Estate Investment',
      descEs: 'Asesoría para inversionistas extranjeros en bienes raíces en EE.UU.: FIRPTA, estructura de compra y declaraciones.',
      descEn: 'Advisory for foreign investors in US real estate: FIRPTA withholding, purchase structure, and tax returns.',
    },
    {
      slug: 'contabilidad', icon: '📊',
      titleEs: 'Contabilidad para tu LLC', titleEn: 'Accounting for Your LLC',
      descEs: 'Estado de resultados, conciliaciones y cumplimiento contable para tu LLC en USA, todo de forma remota.',
      descEn: 'P&L statements, bank reconciliations, and accounting compliance for your US LLC, all remotely.',
    },
    {
      slug: 'proteccion-patrimonial', icon: '🛡️',
      titleEs: 'Protección Patrimonial Internacional', titleEn: 'International Wealth Protection',
      descEs: 'Estructuras holding y trust para proteger tu patrimonio y diversificarlo internacionalmente a través de EE.UU.',
      descEn: 'Holding and trust structures to protect your wealth and diversify it internationally through the US.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="premium-gradient text-white pt-28 pb-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-green/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-[100px]" />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 border border-brand-green/30 text-white/90 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              🌍 {isEn ? 'International Services' : 'Servicios Internacionales'}
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 max-w-3xl">
              {isEn
                ? <>Open Your US Company<br /><span className="text-brand-green">From Anywhere in the World</span></>
                : <>Abre tu Empresa en USA<br /><span className="text-brand-green">Desde Cualquier País del Mundo</span></>}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-10">
              {isEn
                ? 'You don\'t need to be a US resident to own a US LLC, open a US business bank account, or file a US tax return. We handle everything 100% remotely, in English or Spanish.'
                : 'No necesitas ser residente de EE.UU. para tener una LLC estadounidense, abrir una cuenta bancaria empresarial en USA o declarar impuestos allí. Manejamos todo 100% en remoto, en español o inglés.'}
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {(isEn
                ? ['100% Remote', '5–7 Business Days', 'No US Visa Required', 'Bilingual Service']
                : ['100% En Remoto', '5–7 Días Hábiles', 'Sin Visa de EE.UU.', 'Servicio en Español']
              ).map((fact) => (
                <div key={fact} className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-center">
                  <p className="font-black text-sm text-white">{fact}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/19544645458?text=${encodeURIComponent(isEn ? 'Hello, I\'m outside the US and want to open a US LLC.' : 'Hola, estoy fuera de EE.UU. y quiero abrir una LLC en USA.')}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors shadow-lg"
              >
                💬 WhatsApp
              </a>
              <a href={`/${locale}#contact`} className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-colors">
                {isEn ? 'Contact Us' : 'Contáctanos'}
              </a>
            </div>
          </div>
        </div>

        {/* ── How it works ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-3">
            {isEn ? 'How It Works — 100% Remote Process' : 'Cómo Funciona — Proceso 100% Remoto'}
          </h2>
          <p className="text-slate-500 mb-12">
            {isEn ? 'From your phone or computer, from any country in the world.' : 'Desde tu teléfono o computadora, desde cualquier país del mundo.'}
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center font-black text-lg mb-4">{step.n}</div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-black text-brand-dark mb-2">{step.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section className="bg-slate-50 py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-10">
              {isEn ? 'Services Available for International Clients' : 'Servicios Disponibles para Clientes Internacionales'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/servicios/${s.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-brand-blue/40 hover:shadow-lg transition-all flex flex-col gap-3"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-black text-brand-dark group-hover:text-brand-blue transition-colors">
                    {isEn ? s.titleEn : s.titleEs} →
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{isEn ? s.descEn : s.descEs}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why open a US LLC ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-3">
            {isEn ? 'Why Open a US LLC if You\'re Outside the US?' : '¿Para Qué Sirve una LLC en USA si Vives Fuera?'}
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl">
            {isEn
              ? 'A US LLC gives you access to the US financial system and market without you needing to move there.'
              : 'Una LLC en EE.UU. te da acceso al sistema financiero y mercado estadounidense sin necesidad de mudarte.'}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {(isEn ? [
              { icon: '🏦', t: 'US Business Bank Account', d: 'Receive payments in USD, use services like Stripe, PayPal, Amazon, and Shopify under a US company name. Open accounts at Mercury or Relay 100% online.' },
              { icon: '🛡️', t: 'Asset Protection', d: 'Separate your personal assets from your business\'s liabilities. If the company has debts or lawsuits, your personal wealth is protected.' },
              { icon: '🌐', t: 'US Market Access', d: 'Operate as a US company, sign contracts with US clients, and offer your services or products in the largest economy in the world.' },
              { icon: '💰', t: 'Tax Optimization', d: 'Depending on your country of residence, a well-structured US LLC can reduce your overall tax burden. We advise you on the best approach for your specific situation.' },
              { icon: '📈', t: 'Credibility & Trust', d: 'Invoicing as a US company generates more trust with international clients and opens doors to opportunities that would otherwise be closed to a foreign company.' },
              { icon: '🔒', t: 'International Diversification', d: 'Protect your assets from political or economic instability in your home country by having a legal entity and bank account in the United States.' },
            ] : [
              { icon: '🏦', t: 'Cuenta Bancaria Empresarial en USA', d: 'Recibe pagos en USD, usa servicios como Stripe, PayPal, Amazon y Shopify a nombre de una empresa estadounidense. Abre cuentas en Mercury o Relay 100% en línea.' },
              { icon: '🛡️', t: 'Protección de Activos', d: 'Separa tu patrimonio personal de las obligaciones de tu empresa. Si el negocio tiene deudas o demandas, tu patrimonio personal queda protegido.' },
              { icon: '🌐', t: 'Acceso al Mercado Estadounidense', d: 'Opera como empresa americana, firma contratos con clientes en EE.UU. y ofrece tus servicios o productos en la economía más grande del mundo.' },
              { icon: '💰', t: 'Optimización Fiscal', d: 'Según tu país de residencia, una LLC bien estructurada puede reducir tu carga fiscal total. Te asesoramos sobre el mejor enfoque para tu situación específica.' },
              { icon: '📈', t: 'Credibilidad y Confianza', d: 'Facturar como empresa americana genera más confianza en clientes internacionales y abre puertas a oportunidades que de otro modo estarían cerradas.' },
              { icon: '🔒', t: 'Diversificación Internacional', d: 'Protege tu patrimonio de la inestabilidad política o económica de tu país teniendo una entidad legal y cuenta bancaria en Estados Unidos.' },
            ]).map((item) => (
              <div key={item.t} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-white">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-black text-brand-dark mb-1">{item.t}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Country pages ── */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-brand-dark mb-3">
              {isEn ? 'Country-Specific Guides' : 'Guías por País'}
            </h2>
            <p className="text-slate-500 mb-8">
              {isEn
                ? 'Read our guides tailored to entrepreneurs from your country.'
                : 'Lee nuestra guía adaptada a las necesidades de emprendedores de tu país.'}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {COUNTRIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${locale}/internacional/${c.slug}`}
                  className="group flex flex-col items-center gap-2 p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all text-center"
                >
                  <span className="text-4xl">{c.flag}</span>
                  <span className="font-black text-brand-dark text-sm group-hover:text-brand-blue transition-colors">
                    {isEn ? c.nameEn : c.nameEs}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-black text-brand-dark mb-8">
            {isEn ? 'Frequently Asked Questions — International Clients' : 'Preguntas Frecuentes — Clientes Internacionales'}
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
        </section>

        {/* ── CTA ── */}
        <section className="premium-gradient text-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              {isEn ? 'Start your US LLC today — from anywhere.' : 'Inicia tu LLC en USA hoy — desde donde estés.'}
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              {isEn
                ? 'WhatsApp, email, or video call — we work in your time zone. Free initial consultation.'
                : 'WhatsApp, correo o videollamada — trabajamos en tu huso horario. Consulta inicial gratuita.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/19544645458?text=${encodeURIComponent(isEn ? 'Hello, I\'m outside the US and want to open a US LLC.' : 'Hola, estoy fuera de EE.UU. y quiero crear una LLC en USA.')}`}
                target="_blank" rel="noopener noreferrer"
                className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors shadow-xl"
              >
                💬 WhatsApp
              </a>
              <a href={`/${locale}#contact`} className="border-2 border-white/30 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-colors">
                {isEn ? 'Email / Contact Form' : 'Email / Formulario'}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
