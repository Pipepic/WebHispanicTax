import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'LLC Formation in Florida | Coral Springs'
      : 'Creación de LLC en Florida | Coral Springs',
    description: isEn
      ? 'Form your LLC in Florida with expert bilingual guidance. EIN, Operating Agreement, Corporate Kit. Fast, affordable, stress-free. Call (954) 464-5458.'
      : 'Crea tu LLC en Florida con guía experta bilingüe. EIN, Acuerdo de Operación, Corporate Kit. Rápido, asequible y sin estrés. Llama (954) 464-5458.',
    keywords: isEn
      ? ['LLC formation florida', 'how to form LLC florida', 'business incorporation florida',
         'EIN registration florida', 'operating agreement florida', 'LLC for immigrants florida',
         'start business florida hispanic', 'LLC coral springs']
      : ['crear LLC florida', 'cómo crear LLC florida 2026', 'incorporación empresa florida',
         'EIN florida', 'acuerdo operación florida', 'LLC para inmigrantes florida',
         'abrir empresa florida hispano', 'LLC coral springs'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/creacion-de-llc`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/creacion-de-llc',
        'en': 'https://hispanic.financial/en/servicios/creacion-de-llc',
        'x-default': 'https://hispanic.financial/en/servicios/creacion-de-llc',
      },
    },
    openGraph: {
      title: isEn ? 'LLC Formation in Florida | Hispanic Financial' : 'Crear LLC en Florida en Español | Hispanic Financial',
      description: isEn
        ? 'Bilingual LLC formation experts in Florida. We handle all paperwork: Articles, EIN, Operating Agreement, bank account setup.'
        : 'Expertos en creación de LLC en Florida en español. Manejamos todo el papeleo: Artículos, EIN, Acuerdo de Operación, cuenta bancaria.',
      url: `https://hispanic.financial/${locale}/servicios/creacion-de-llc`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn ? 'LLC Formation in Florida | Coral Springs' : 'Creación de LLC en Florida | Coral Springs',
    },
  };
}

export default async function LLCFormationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEn ? "LLC Formation & Business Incorporation" : "Creación de LLC y Registro de Empresas",
    "description": isEn
      ? "Complete LLC formation and business incorporation services in Florida, including Articles of Incorporation, EIN registration, Operating Agreement, and business bank account setup."
      : "Servicios completos de creación de LLC e incorporación de empresas en Florida, incluyendo Artículos de Incorporación, registro de EIN, Acuerdo de Operación y apertura de cuenta bancaria.",
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
    "url": `https://hispanic.financial/${locale}/servicios/creacion-de-llc`,
  };

  const content = {
    es: {
      badge: 'Creación de Empresas',
      title: 'Crea tu LLC en Florida — Guía Experta en Español',
      subtitle: 'Te guiamos en cada paso para establecer tu empresa en Estados Unidos. Desde los Artículos de Incorporación hasta la apertura de tu cuenta bancaria empresarial.',
      description: 'Crear una LLC (Limited Liability Company) en Florida es uno de los pasos más importantes para proteger tu patrimonio y formalizar tu negocio en Estados Unidos. En Hispanic Financial, hacemos este proceso simple, rápido y completamente en español. Nuestro equipo con más de 20 años de experiencia se encarga de todo el papeleo para que tú puedas enfocarte en hacer crecer tu negocio.',
      included: [
        'Artículos de Organización y Certificado de Existencia',
        'Registro del Employer Identification Number (EIN) ante el IRS',
        'Acuerdo de Operación (Operating Agreement) personalizado',
        'Minutas o actas de constitución',
        'Planeación fiscal preliminar para tu nueva empresa',
        'Corporate Kit completo (libro de minutas, sellos, acciones)',
        'Asistencia en apertura de cuenta bancaria empresarial',
        'Asesoría sobre estructura societaria óptima (LLC vs S-Corp vs C-Corp)',
      ],
      benefits: [
        { icon: '🏛️', title: 'Protección Legal', desc: 'Una LLC separa tu patrimonio personal del negocio. Si la empresa tiene deudas, tus activos personales están protegidos.' },
        { icon: '💼', title: 'Todo en Español', desc: 'Explicamos cada documento en español. Entenderás exactamente qué estás firmando y por qué es importante.' },
        { icon: '⚡', title: 'Proceso Rápido', desc: 'Gestionamos todo el papeleo. Tu LLC puede estar registrada en Florida en tan solo 5-7 días hábiles.' },
      ],
      faqs: [
        { q: '¿Cuánto cuesta crear una LLC en Florida?', a: 'El costo estatal de registro en Florida es de $125. Los honorarios de nuestros servicios varían según lo que necesites. Contáctanos para un presupuesto completo que incluya todos los servicios.' },
        { q: '¿Puedo crear una LLC en Florida si no soy ciudadano americano?', a: 'Sí. No es necesario ser ciudadano ni residente de EE.UU. para crear una LLC en Florida. Solo necesitas un pasaporte válido y nosotros te guiamos en el proceso completo.' },
        { q: '¿Cuál es la diferencia entre LLC, S-Corp y C-Corp?', a: 'Una LLC ofrece la mayor flexibilidad y protección con menos requisitos administrativos. Una S-Corp puede ofrecer ventajas fiscales adicionales si tienes ganancias significativas. Una C-Corp es ideal para empresas que buscan inversores externos. Te asesoramos sobre la mejor estructura para tu situación.' },
        { q: '¿Qué es el EIN y para qué sirve?', a: 'El EIN (Employer Identification Number) es como el número de seguro social de tu empresa. Lo necesitas para abrir cuentas bancarias empresariales, contratar empleados, presentar impuestos y en muchos contratos comerciales.' },
        { q: '¿Puedo manejar múltiples negocios bajo una sola LLC?', a: 'Sí, pero generalmente es mejor tener LLCs separadas para proteger cada negocio individualmente. También existe la opción de la estructura Holding, donde una empresa madre posee varias subsidiarias. Te asesoramos sobre la mejor estrategia.' },
      ],
      ctaTitle: '¿Listo para crear tu empresa en USA?',
      ctaDesc: 'Da el primer paso hacia la formalización de tu negocio. Nuestros expertos en Coral Springs te guían en todo el proceso, completamente en español.',
    },
    en: {
      badge: 'Business Incorporation',
      title: 'Form Your LLC in Florida — Expert Bilingual Guidance',
      subtitle: 'We guide you through every step to establish your business in the United States. From Articles of Incorporation to opening your business bank account.',
      description: 'Forming an LLC (Limited Liability Company) in Florida is one of the most important steps to protect your personal assets and formalize your business in the United States. At Hispanic Financial, we make this process simple, fast, and bilingual. Our team with 20+ years of experience handles all the paperwork so you can focus on growing your business.',
      included: [
        'Articles of Organization and Certificate of Existence',
        'Employer Identification Number (EIN) IRS registration',
        'Customized Operating Agreement',
        'Minutes and incorporation certificates',
        'Preliminary tax planning for your new business',
        'Complete Corporate Kit (minutes book, seals, shares)',
        'Business bank account setup assistance',
        'Advisory on optimal corporate structure (LLC vs S-Corp vs C-Corp)',
      ],
      benefits: [
        { icon: '🏛️', title: 'Legal Protection', desc: 'An LLC separates your personal assets from the business. If the company has debts, your personal assets are protected.' },
        { icon: '💼', title: 'Bilingual Service', desc: 'We explain every document in English or Spanish. You\'ll understand exactly what you\'re signing and why it matters.' },
        { icon: '⚡', title: 'Fast Process', desc: 'We handle all the paperwork. Your Florida LLC can be registered in as little as 5-7 business days.' },
      ],
      faqs: [
        { q: 'How much does it cost to form an LLC in Florida?', a: 'The Florida state registration fee is $125. Our service fees vary depending on what you need. Contact us for a complete quote that includes all services.' },
        { q: 'Can I form an LLC in Florida if I\'m not a US citizen?', a: 'Yes. You do not need to be a US citizen or resident to form an LLC in Florida. You just need a valid passport and we guide you through the entire process.' },
        { q: 'What is the difference between an LLC, S-Corp, and C-Corp?', a: 'An LLC offers the most flexibility and protection with fewer administrative requirements. An S-Corp can provide additional tax benefits if you have significant profits. A C-Corp is ideal for companies seeking outside investors. We advise on the best structure for your situation.' },
        { q: 'What is an EIN and what is it used for?', a: 'The EIN (Employer Identification Number) is like your company\'s social security number. You need it to open business bank accounts, hire employees, file taxes, and in many commercial contracts.' },
        { q: 'Can I manage multiple businesses under one LLC?', a: 'Yes, but it\'s generally better to have separate LLCs to protect each business individually. There\'s also the Holding structure option, where a parent company owns multiple subsidiaries. We advise on the best strategy.' },
      ],
      ctaTitle: 'Ready to start your business in the USA?',
      ctaDesc: 'Take the first step toward formalizing your business. Our Coral Springs experts guide you through the entire process, in English or Spanish.',
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
