import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Wealth Protection — LLC, Trust & Holding Florida'
      : 'Protección Patrimonial — LLC, Trust y Holding Florida',
    description: isEn
      ? 'Protect your wealth with LLCs, Trusts, and Holding structures in Florida. Bilingual asset protection and tax planning experts. Call (954) 464-5458.'
      : 'Protege tu patrimonio con LLC, Trust y estructuras Holding en Florida. Expertos bilingües en protección patrimonial y planeación fiscal. Llama (954) 464-5458.',
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/proteccion-patrimonial`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/proteccion-patrimonial',
        'en': 'https://hispanic.financial/en/servicios/proteccion-patrimonial',
        'x-default': 'https://hispanic.financial/en/servicios/proteccion-patrimonial',
      },
    },
    openGraph: {
      title: isEn ? 'Wealth Protection: LLC, Trust & Holding Florida | Hispanic Financial' : 'Protección Patrimonial: LLC, Trust y Holding Florida | Hispanic Financial',
      description: isEn
        ? 'Protect your personal and business assets with LLCs, Trusts, and Holding structures. Expert bilingual financial advisory in Coral Springs, FL.'
        : 'Protege tu patrimonio personal y empresarial con LLC, Trust y estructuras Holding. Asesoría financiera bilingüe experta en Coral Springs, FL.',
      url: `https://hispanic.financial/${locale}/servicios/proteccion-patrimonial`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  };
}

export default async function WealthProtectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEn ? "Wealth Protection & Strategic Planning" : "Protección y Planeación Patrimonial",
    "description": isEn
      ? "Asset protection and tax minimization through LLC structures, Trusts, and Holding companies for individuals and businesses in Florida."
      : "Protección de activos y minimización de impuestos mediante estructuras LLC, Trust y empresas Holding para individuos y empresas en Florida.",
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
    "url": `https://hispanic.financial/${locale}/servicios/proteccion-patrimonial`,
  };

  const content = {
    es: {
      badge: 'Protección Patrimonial',
      title: 'Protege tu Patrimonio con LLC, Trust y Holding en Florida',
      subtitle: 'Diseñamos estructuras fiscales y societarias personalizadas para reducir tu carga tributaria, proteger tus activos y asegurar el legado de tu familia.',
      description: 'Construir riqueza es solo la mitad del trabajo — el otro 50% es protegerla. En Hispanic Financial, trabajamos contigo para crear estructuras legales y fiscales que blindan tu patrimonio personal y empresarial contra demandas, acreedores y cargas fiscales innecesarias. Utilizando LLC, Trusts y estructuras Holding, diseñamos una estrategia a medida para tu situación específica.',
      included: [
        'Análisis de estructura societaria actual y recomendaciones de mejora',
        'Creación y configuración de estructura Holding (empresa madre + subsidiarias)',
        'Establecimiento de Limited Liability Companies (LLC) para protección de activos',
        'Creación de Trusts (fideicomisos) para planificación patrimonial y sucesoria',
        'Estrategias de minimización fiscal para empresas y personas de alto patrimonio',
        'Planificación de transferencia de riqueza entre generaciones',
      ],
      benefits: [
        { icon: '🛡️', title: 'Protección Total', desc: 'Tu patrimonio personal queda separado y protegido de los riesgos del negocio. Demandas y deudas empresariales no pueden tocar tus activos personales.' },
        { icon: '💵', title: 'Menos Impuestos', desc: 'Una estructura bien diseñada puede reducir significativamente tu carga fiscal de forma completamente legal, aumentando lo que retienes de tus ingresos.' },
        { icon: '🏛️', title: 'Legado Familiar', desc: 'Planificamos cómo transferirás tu patrimonio a tus herederos de forma eficiente y con el menor impacto fiscal posible.' },
      ],
      faqs: [
        { q: '¿Qué es una estructura Holding y cuándo la necesito?', a: 'Una Holding es una empresa que posee acciones o participaciones en otras empresas. Es útil cuando tienes múltiples negocios o propiedades y quieres centralizar la gestión, proteger activos entre las entidades, y optimizar el flujo de fondos entre empresas con ventajas fiscales.' },
        { q: '¿Cuál es la diferencia entre un Trust y una LLC para protección de activos?', a: 'Una LLC protege tus activos de responsabilidades futuras (demandas, deudas) pero es más flexible operacionalmente. Un Trust (fideicomiso) es más útil para planificación sucesoria, privacidad, y en ciertos casos para protección contra acreedores existentes. Muchas veces la estrategia óptima combina ambos.' },
        { q: '¿Es legal reducir impuestos con estas estructuras?', a: 'Absolutamente. La planificación fiscal es completamente legal y es la estrategia que utilizan las empresas más grandes del mundo. Existen múltiples incentivos y estructuras previstas por el IRS y el código fiscal de EE.UU. Lo que no es legal es la evasión fiscal (no reportar ingresos), que es diferente a la planificación fiscal.' },
        { q: '¿Puedo usar estas estructuras si soy extranjero no residente?', a: 'Sí. Las LLCs y Trusts están disponibles para extranjeros. De hecho, muchos inversionistas internacionales usan estructuras LLC en Florida para proteger sus inversiones en EE.UU. Existen consideraciones fiscales especiales para no residentes que te explicamos en detalle.' },
        { q: '¿Cuánto tiempo toma configurar una estructura de protección patrimonial?', a: 'Depende de la complejidad. Una LLC simple puede estar lista en una semana. Una estructura Holding con múltiples LLCs y un Trust puede tomar 4-8 semanas incluyendo la configuración de cuentas bancarias y acuerdos operativos.' },
      ],
      ctaTitle: '¿Quieres proteger lo que has construido?',
      ctaDesc: 'Agenda una consulta con nuestros especialistas en protección patrimonial en Coral Springs. Analizamos tu situación y diseñamos la estrategia ideal para ti.',
    },
    en: {
      badge: 'Wealth Protection',
      title: 'Protect Your Wealth with LLC, Trust & Holding in Florida',
      subtitle: 'We design customized legal and tax structures to reduce your tax burden, protect your assets, and secure your family\'s legacy.',
      description: 'Building wealth is only half the work — the other 50% is protecting it. At Hispanic Financial, we work with you to create legal and tax structures that shield your personal and business assets from lawsuits, creditors, and unnecessary tax burdens. Using LLCs, Trusts, and Holding structures, we design a strategy tailored to your specific situation.',
      included: [
        'Analysis of current corporate structure and improvement recommendations',
        'Holding structure creation and setup (parent company + subsidiaries)',
        'Limited Liability Company (LLC) establishment for asset protection',
        'Trust creation for estate planning and wealth transfer',
        'Tax minimization strategies for high-net-worth individuals and businesses',
        'Intergenerational wealth transfer planning',
      ],
      benefits: [
        { icon: '🛡️', title: 'Complete Protection', desc: 'Your personal assets are separated and protected from business risks. Lawsuits and business debts cannot touch your personal property.' },
        { icon: '💵', title: 'Lower Taxes', desc: 'A well-designed structure can significantly reduce your tax burden in a completely legal manner, increasing what you keep from your income.' },
        { icon: '🏛️', title: 'Family Legacy', desc: 'We plan how you\'ll transfer your wealth to your heirs in an efficient way with the least possible tax impact.' },
      ],
      faqs: [
        { q: 'What is a Holding structure and when do I need one?', a: 'A Holding company owns shares in other companies. It\'s useful when you have multiple businesses or properties and want to centralize management, protect assets between entities, and optimize cash flow between companies with tax advantages.' },
        { q: 'What\'s the difference between a Trust and an LLC for asset protection?', a: 'An LLC protects your assets from future liabilities (lawsuits, debts) and is more flexible operationally. A Trust is more useful for estate planning, privacy, and in certain cases for protection against existing creditors. The optimal strategy often combines both.' },
        { q: 'Is it legal to reduce taxes with these structures?', a: 'Absolutely. Tax planning is completely legal and is the strategy used by the world\'s largest companies. There are multiple incentives and structures provided for in the IRS code and US tax law. What is illegal is tax evasion (not reporting income), which is different from tax planning.' },
        { q: 'Can I use these structures as a foreign non-resident?', a: 'Yes. LLCs and Trusts are available to foreigners. In fact, many international investors use LLC structures in Florida to protect their US investments. There are special tax considerations for non-residents that we explain in detail.' },
        { q: 'How long does it take to set up a wealth protection structure?', a: 'It depends on complexity. A simple LLC can be ready in a week. A Holding structure with multiple LLCs and a Trust can take 4-8 weeks including bank account setup and operating agreements.' },
      ],
      ctaTitle: 'Want to protect what you\'ve built?',
      ctaDesc: 'Schedule a consultation with our wealth protection specialists in Coral Springs. We analyze your situation and design the ideal strategy for you.',
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
