import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Real Estate Tax Advisory & FIRPTA Florida'
      : 'Asesoría Fiscal Real Estate y FIRPTA Florida',
    description: isEn
      ? 'Real estate tax advisory for foreign investors in Florida. FIRPTA withholding claims, property sale tax analysis, investment property guidance. Bilingual. (954) 464-5458.'
      : 'Asesoría fiscal en bienes raíces para inversionistas extranjeros en Florida. Reclamos FIRPTA, análisis de impacto en venta de propiedades. Servicio en español. (954) 464-5458.',
    keywords: isEn
      ? ['FIRPTA florida', 'real estate tax advisor florida', 'foreign investor tax florida',
         'FIRPTA withholding claim florida', 'investment property tax florida',
         'non-resident tax florida', 'real estate tax planning florida']
      : ['FIRPTA florida', 'asesoría fiscal bienes raíces florida', 'impuestos inversionista extranjero florida',
         'reclamo FIRPTA florida', 'impuestos propiedad inversión florida',
         'declaración no residente florida', 'planeación fiscal real estate florida'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/real-estate`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/real-estate',
        'en': 'https://hispanic.financial/en/servicios/real-estate',
        'x-default': 'https://hispanic.financial/en/servicios/real-estate',
      },
    },
    openGraph: {
      title: isEn ? 'Real Estate Tax Advisor & FIRPTA Florida | Hispanic Financial' : 'Asesor Fiscal Real Estate y FIRPTA Florida | Hispanic Financial',
      description: isEn
        ? 'Expert real estate tax advisory for Hispanic and foreign investors in Florida. FIRPTA, investment properties, tax declarations for non-residents.'
        : 'Asesoría fiscal experta en bienes raíces para inversionistas hispanos y extranjeros en Florida. FIRPTA, propiedades de inversión, declaraciones para no residentes.',
      url: `https://hispanic.financial/${locale}/servicios/real-estate`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn ? 'Real Estate Tax Advisory & FIRPTA Florida' : 'Asesoría Fiscal Real Estate y FIRPTA Florida',
    },
  };
}

export default async function RealEstatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEn ? "Real Estate Tax Advisory & FIRPTA" : "Asesoría Fiscal en Real Estate y FIRPTA",
    "description": isEn
      ? "Real estate tax advisory services including FIRPTA withholding claims, property sale tax analysis, and tax declarations for foreign investors in Florida."
      : "Servicios de asesoría fiscal en bienes raíces incluyendo reclamos de retención FIRPTA, análisis de impacto en venta de propiedades y declaraciones de impuestos para inversionistas extranjeros en Florida.",
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
    "url": `https://hispanic.financial/${locale}/servicios/real-estate`,
  };

  const content = {
    es: {
      badge: 'Asesoría en Bienes Raíces',
      title: 'Asesoría Fiscal en Real Estate y FIRPTA para Hispanos en Florida',
      subtitle: 'Especialistas en el impacto fiscal de compra y venta de propiedades en EE.UU. para inversionistas hispanos y extranjeros. Recupera tu retención FIRPTA con nuestra ayuda.',
      description: 'El mercado inmobiliario de Florida es uno de los más activos del país, y muchos hispanos e inversionistas extranjeros participan en él sin conocer las implicaciones fiscales. La ley FIRPTA (Foreign Investment in Real Property Tax Act) puede retener hasta el 15% del precio de venta de una propiedad si el vendedor es extranjero. En Hispanic Financial, te ayudamos a entender, minimizar y recuperar estos impuestos con asesoría especializada en bilingüe.',
      included: [
        'Asesoría en compra de propiedades de inversión en Florida',
        'Análisis de impacto fiscal en venta de propiedades para extranjeros',
        'Reclamo de retenciones FIRPTA ante el IRS (Withholding Certificate)',
        'Preparación de declaraciones de impuestos para inversionistas no residentes',
        'Planificación fiscal para maximizar rentabilidad en inversiones inmobiliarias',
        'Estructura societaria óptima para poseer propiedades (LLC, Trust)',
      ],
      benefits: [
        { icon: '🏠', title: 'Recupera tu FIRPTA', desc: 'Si vendiste una propiedad en EE.UU. y te retuvieron impuestos bajo FIRPTA, podemos reclamarte ese dinero de vuelta al IRS.' },
        { icon: '📈', title: 'Maximiza tu Inversión', desc: 'Estructuramos tu inversión inmobiliaria de forma fiscal-eficiente para que retengas más de cada dólar ganado.' },
        { icon: '🌎', title: 'Expertos en No Residentes', desc: 'Conocemos a fondo las reglas especiales que aplican a extranjeros e hispanos que invierten en bienes raíces en EE.UU.' },
      ],
      faqs: [
        { q: '¿Qué es FIRPTA y cómo me afecta?', a: 'FIRPTA (Foreign Investment in Real Property Tax Act) es una ley que obliga al comprador a retener hasta el 15% del precio de venta cuando el vendedor es extranjero. Si vendiste una propiedad en EE.UU. siendo no residente, es muy probable que te hayan retenido bajo FIRPTA.' },
        { q: '¿Puedo recuperar la retención FIRPTA?', a: 'Sí. Si el impuesto real que debes es menor que la retención, puedes recuperar la diferencia presentando tu declaración de impuestos. También existe el Withholding Certificate, que puede reducir o eliminar la retención antes del cierre.' },
        { q: '¿Necesito una LLC para comprar propiedades en Florida?', a: 'No es obligatorio, pero sí recomendado para inversionistas que compran para alquilar o para proteger su patrimonio personal. Una LLC bien estructurada puede también ofrecer ventajas fiscales significativas.' },
        { q: '¿Qué impuestos pago si alquilo una propiedad en Florida?', a: 'Los ingresos por alquiler de propiedades en EE.UU. están sujetos a impuestos federales y pueden estar sujetos a impuesto estatal (aunque Florida no tiene impuesto sobre la renta). También existe el Sales Tax local para alquileres a corto plazo (Airbnb, etc.).' },
        { q: '¿Cómo estructuro mis inversiones inmobiliarias de forma fiscal-eficiente?', a: 'Depende de tu situación. Las opciones incluyen LLCs individuales por propiedad, una LLC "holding" con subsidiarias, o un trust. Te asesoramos sobre la mejor estructura según tus objetivos de inversión y situación migratoria.' },
      ],
      ctaTitle: '¿Tienes propiedades o inversiones en Florida?',
      ctaDesc: 'Deja que nuestros especialistas en fiscalidad inmobiliaria protejan tu inversión. Asesoría personalizada en español.',
    },
    en: {
      badge: 'Real Estate Advisory',
      title: 'Real Estate Tax Advisory & FIRPTA for Hispanic Investors in Florida',
      subtitle: 'Specialists in the tax impact of buying and selling property in the US for Hispanic and foreign investors. Recover your FIRPTA withholding with our help.',
      description: 'Florida\'s real estate market is one of the most active in the country, and many Hispanic and foreign investors participate without fully understanding the tax implications. The FIRPTA (Foreign Investment in Real Property Tax Act) law can withhold up to 15% of the sale price of a property if the seller is a foreign national. At Hispanic Financial, we help you understand, minimize, and recover these taxes with bilingual specialized advisory.',
      included: [
        'Investment property purchase advisory in Florida',
        'Tax impact analysis for property sales by foreign nationals',
        'FIRPTA withholding claims with the IRS (Withholding Certificate)',
        'Tax return preparation for non-resident investors',
        'Tax planning to maximize real estate investment profitability',
        'Optimal ownership structure for properties (LLC, Trust)',
      ],
      benefits: [
        { icon: '🏠', title: 'Recover Your FIRPTA', desc: 'If you sold property in the US and had taxes withheld under FIRPTA, we can claim that money back from the IRS for you.' },
        { icon: '📈', title: 'Maximize Your Investment', desc: 'We structure your real estate investment in a tax-efficient way so you keep more of every dollar earned.' },
        { icon: '🌎', title: 'Non-Resident Experts', desc: 'We understand the special rules that apply to foreigners and Hispanics investing in US real estate.' },
      ],
      faqs: [
        { q: 'What is FIRPTA and how does it affect me?', a: 'FIRPTA (Foreign Investment in Real Property Tax Act) is a law that requires the buyer to withhold up to 15% of the sale price when the seller is a foreign national. If you sold property in the US as a non-resident, you were most likely subject to FIRPTA withholding.' },
        { q: 'Can I recover FIRPTA withholding?', a: 'Yes. If the actual tax you owe is less than the withholding, you can recover the difference by filing your tax return. There is also the Withholding Certificate option, which can reduce or eliminate withholding before closing.' },
        { q: 'Do I need an LLC to buy property in Florida?', a: 'It\'s not required, but it is recommended for investors buying rental properties or wanting to protect personal assets. A well-structured LLC can also offer significant tax advantages.' },
        { q: 'What taxes do I pay if I rent a property in Florida?', a: 'Rental income from US property is subject to federal taxes and may be subject to state tax (though Florida has no income tax). Short-term rentals (Airbnb, etc.) are also subject to local Sales Tax.' },
        { q: 'How do I structure my real estate investments tax-efficiently?', a: 'It depends on your situation. Options include individual LLCs per property, a "holding" LLC with subsidiaries, or a trust. We advise on the best structure based on your investment objectives and immigration status.' },
      ],
      ctaTitle: 'Do you own properties or have investments in Florida?',
      ctaDesc: 'Let our real estate tax specialists protect your investment. Personalized bilingual advisory.',
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
