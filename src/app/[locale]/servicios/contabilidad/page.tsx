import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'QuickBooks Accounting in Coral Springs, FL | Hispanic Financial'
      : 'Contabilidad QuickBooks en Coral Springs, FL | Hispanic Financial',
    description: isEn
      ? 'Professional bookkeeping and QuickBooks accounting services for businesses in Coral Springs, FL. Bank reconciliations, P&L, Balance Sheet. Bilingual service. (954) 464-5458.'
      : 'Servicios profesionales de contabilidad y QuickBooks para empresas en Coral Springs, FL. Conciliaciones, Estado de Resultados, Balance General. Servicio en español. (954) 464-5458.',
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/contabilidad`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/contabilidad',
        'en': 'https://hispanic.financial/en/servicios/contabilidad',
        'x-default': 'https://hispanic.financial/en/servicios/contabilidad',
      },
    },
    openGraph: {
      title: isEn ? 'QuickBooks Accounting Coral Springs | Hispanic Financial' : 'Contabilidad QuickBooks Coral Springs | Hispanic Financial',
      description: isEn
        ? 'Expert QuickBooks bookkeeping for small and medium businesses in South Florida. Monthly financial reports, bank reconciliations, and more.'
        : 'Contabilidad experta con QuickBooks para pequeñas y medianas empresas en el sur de Florida. Reportes financieros mensuales, conciliaciones y más.',
      url: `https://hispanic.financial/${locale}/servicios/contabilidad`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  };
}

export default async function AccountingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEn ? "Accounting & QuickBooks Bookkeeping" : "Contabilidad y Bookkeeping QuickBooks",
    "description": isEn
      ? "Professional bookkeeping, QuickBooks accounting, bank reconciliations, P&L statements, and balance sheets for businesses in South Florida."
      : "Contabilidad profesional, bookkeeping con QuickBooks, conciliaciones bancarias, estado de resultados y balance general para empresas en el sur de Florida.",
    "provider": {
      "@type": "AccountingService",
      "name": "Hispanic Financial",
      "url": "https://hispanic.financial",
      "telephone": "+19544645458",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7401 Wiles Rd. Suite 126",
        "addressLocality": "Coral Springs",
        "addressRegion": "FL",
        "postalCode": "33067",
        "addressCountry": "US"
      }
    },
    "areaServed": { "@type": "State", "name": "Florida" },
    "url": `https://hispanic.financial/${locale}/servicios/contabilidad`,
  };

  const content = {
    es: {
      badge: 'Contabilidad & QuickBooks',
      title: 'Contabilidad y QuickBooks para Empresas en Coral Springs, FL',
      subtitle: 'Mantén tus finanzas en orden con nuestros servicios contables profesionales. Usamos QuickBooks para darte reportes claros y precisos en tiempo real.',
      description: 'Una contabilidad bien llevada es la base de cualquier negocio exitoso. En Hispanic Financial, ofrecemos servicios contables completos utilizando QuickBooks, la plataforma líder en gestión financiera para pequeñas y medianas empresas. Nuestros expertos bilingües procesan todas tus transacciones, reconcilian tus cuentas bancarias y te entregan reportes financieros claros cada mes para que tomes decisiones informadas sobre tu negocio.',
      included: [
        'Proceso mensual de transacciones de ingresos y gastos',
        'Conciliaciones bancarias y de tarjetas de crédito',
        'Estado de Resultados (Profit & Loss Statement) mensual',
        'Balance General (Balance Sheet)',
        'Análisis de variaciones y comparativos entre períodos',
        'Configuración y mantenimiento de QuickBooks Online',
        'Categorización contable correcta para máximas deducciones',
        'Reportes personalizados para gestión de negocio',
      ],
      benefits: [
        { icon: '📊', title: 'Decisiones con Datos', desc: 'Con reportes financieros precisos cada mes, sabes exactamente cómo está tu negocio y puedes tomar mejores decisiones.' },
        { icon: '✅', title: 'Lista para Impuestos', desc: 'Tu contabilidad ordenada con QuickBooks hace que la preparación de impuestos sea más rápida, precisa y económica.' },
        { icon: '🕐', title: 'Ahorra Tiempo', desc: 'Delega la contabilidad a expertos y dedica ese tiempo a hacer crecer tu negocio. Nos encargamos de todo.' },
      ],
      faqs: [
        { q: '¿Por qué usar QuickBooks para mi negocio?', a: 'QuickBooks es la plataforma contable más utilizada en EE.UU. Permite automatizar procesos, generar reportes profesionales, y prepararse fácilmente para los impuestos. Además, es aceptada por casi todos los bancos e instituciones financieras.' },
        { q: '¿Necesito tener QuickBooks ya instalado?', a: 'No es necesario. Podemos configurar QuickBooks Online para tu empresa desde cero. También podemos tomar el control de una cuenta existente de QuickBooks y ordenarla si ya tienes una.' },
        { q: '¿Qué pasa si mis transacciones están desorganizadas o no tengo registros históricos?', a: 'Podemos organizar y reconstruir registros contables desde el principio, incluyendo periodos anteriores. Muchos clientes llegan con años de transacciones sin categorizar y los ponemos al día.' },
        { q: '¿Con qué frecuencia recibo reportes?', a: 'Normalmente entregamos reportes mensuales (Estado de Resultados y Balance General). También podemos generar reportes semanales o trimestrales según las necesidades de tu negocio.' },
        { q: '¿Sirve para cualquier tipo de negocio?', a: 'Sí. Manejamos contabilidad para restaurantes, construcción, salud, retail, servicios profesionales, e-commerce, y más. Adaptamos nuestra categorización a las necesidades específicas de tu industria.' },
      ],
      ctaTitle: '¿Quieres tener tus finanzas en orden?',
      ctaDesc: 'Empieza el mes con una contabilidad clara y profesional. Contacta a nuestros expertos en QuickBooks en Coral Springs.',
    },
    en: {
      badge: 'Accounting & QuickBooks',
      title: 'QuickBooks Accounting for Businesses in Coral Springs, FL',
      subtitle: 'Keep your finances in order with our professional accounting services. We use QuickBooks to give you clear, accurate real-time reports.',
      description: 'Sound bookkeeping is the foundation of any successful business. At Hispanic Financial, we offer comprehensive accounting services using QuickBooks, the leading financial management platform for small and medium businesses. Our bilingual experts process all your transactions, reconcile your bank accounts, and deliver clear monthly financial reports so you can make informed business decisions.',
      included: [
        'Monthly income and expense transaction processing',
        'Bank and credit card reconciliations',
        'Monthly Profit & Loss Statement',
        'Balance Sheet',
        'Period-over-period variance and comparative analysis',
        'QuickBooks Online setup and maintenance',
        'Proper accounting categorization for maximum deductions',
        'Custom reports for business management',
      ],
      benefits: [
        { icon: '📊', title: 'Data-Driven Decisions', desc: 'With accurate monthly financial reports, you know exactly how your business is performing and can make better decisions.' },
        { icon: '✅', title: 'Tax-Ready', desc: 'Your organized QuickBooks accounting makes tax preparation faster, more accurate, and more affordable.' },
        { icon: '🕐', title: 'Save Time', desc: 'Delegate your bookkeeping to experts and spend that time growing your business. We handle everything.' },
      ],
      faqs: [
        { q: 'Why use QuickBooks for my business?', a: 'QuickBooks is the most widely used accounting platform in the US. It automates processes, generates professional reports, and makes tax preparation easy. It\'s also accepted by virtually all banks and financial institutions.' },
        { q: 'Do I need to already have QuickBooks installed?', a: 'No. We can set up QuickBooks Online for your company from scratch. We can also take over an existing QuickBooks account and clean it up if you already have one.' },
        { q: 'What if my transactions are disorganized or I\'m missing historical records?', a: 'We can organize and reconstruct accounting records from the beginning, including prior periods. Many clients come to us with years of uncategorized transactions and we bring them current.' },
        { q: 'How often do I receive reports?', a: 'We typically deliver monthly reports (Profit & Loss and Balance Sheet). We can also generate weekly or quarterly reports based on your business needs.' },
        { q: 'Does this work for any type of business?', a: 'Yes. We handle accounting for restaurants, construction, healthcare, retail, professional services, e-commerce, and more. We adapt our categorization to your industry\'s specific needs.' },
      ],
      ctaTitle: 'Ready to get your finances in order?',
      ctaDesc: 'Start each month with clear, professional accounting. Contact our QuickBooks experts in Coral Springs.',
    },
  };

  const c = isEn ? content.en : content.es;

  return (
    <ServicePageLayout
      locale={locale}
      badge={c.badge}
      title={c.title}
      subtitle={c.subtitle}
      description={c.description}
      included={c.included}
      benefits={c.benefits}
      faqs={c.faqs}
      ctaTitle={c.ctaTitle}
      ctaDesc={c.ctaDesc}
      serviceSchema={serviceSchema}
    />
  );
}
