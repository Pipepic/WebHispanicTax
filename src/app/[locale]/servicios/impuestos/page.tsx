import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Tax Preparation & Planning in Coral Springs, FL | Hispanic Financial'
      : 'Preparación de Impuestos en Coral Springs, FL | Hispanic Financial',
    description: isEn
      ? 'Expert personal and corporate tax preparation in Coral Springs, FL. Bilingual CPA services for the Hispanic community. Maximize your IRS refund. Call (954) 464-5458.'
      : 'Expertos en preparación de impuestos personales y corporativos en Coral Springs, FL. Maximiza tu devolución del IRS. Servicio en español. Llama (954) 464-5458.',
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/impuestos`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/impuestos',
        'en': 'https://hispanic.financial/en/servicios/impuestos',
        'x-default': 'https://hispanic.financial/en/servicios/impuestos',
      },
    },
    openGraph: {
      title: isEn ? 'Tax Preparation in Coral Springs, FL | Hispanic Financial' : 'Preparación de Impuestos Coral Springs | Hispanic Financial',
      description: isEn
        ? 'Bilingual tax preparation experts in Coral Springs, FL. Personal & corporate taxes, IRS compliance, tax planning. 20+ years of experience.'
        : 'Expertos bilingües en impuestos en Coral Springs, FL. Impuestos personales y corporativos, planeación fiscal. 20+ años de experiencia.',
      url: `https://hispanic.financial/${locale}/servicios/impuestos`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
  };
}

export default async function TaxPreparationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": isEn ? "Tax Preparation & Planning" : "Preparación de Impuestos y Planeación Tributaria",
    "description": isEn
      ? "Personal and corporate tax preparation, IRS filing, sales tax declarations, and strategic tax planning for businesses and individuals in South Florida."
      : "Preparación de impuestos personales y corporativos, declaración ante el IRS, impuesto sobre ventas y planeación fiscal estratégica para empresas e individuos en el sur de Florida.",
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
    "url": `https://hispanic.financial/${locale}/servicios/impuestos`,
  };

  const content = {
    es: {
      badge: 'Servicio de Impuestos',
      title: 'Preparación de Impuestos en Coral Springs, FL',
      subtitle: 'Expertos bilingües en impuestos personales y corporativos. Maximizamos tu devolución del IRS y garantizamos cumplimiento total con la ley tributaria de Estados Unidos.',
      description: 'En Hispanic Financial, ofrecemos servicios completos de preparación y presentación de impuestos para individuos, familias y empresas en Coral Springs, Florida y todo el sur de Florida. Con más de 20 años de experiencia y 1,500+ clientes satisfechos, nuestro equipo de expertos bilingües garantiza que pagas solo lo que debes y aprovechas cada deducción disponible. Atendemos a la comunidad hispana con servicio personalizado en español.',
      included: [
        'Preparación y presentación de impuestos personales (Forma 1040)',
        'Preparación de impuestos corporativos (S-Corp, C-Corp, LLC)',
        'Declaración de impuesto sobre las ventas (Sales Tax)',
        'Planeación fiscal estratégica para reducir tu carga tributaria',
        'Presentación de formas de impuestos de nómina (Payroll)',
        'Representación ante el IRS en caso de auditoría',
        'Extensiones de tiempo para declaración',
        'Declaraciones de años anteriores (Back Taxes)',
      ],
      benefits: [
        { icon: '💰', title: 'Máxima Devolución', desc: 'Identificamos cada deducción y crédito fiscal al que tienes derecho para maximizar tu reembolso del IRS.' },
        { icon: '🛡️', title: 'Cumplimiento Total', desc: 'Garantizamos que tu declaración cumple con todas las regulaciones del IRS y evita penalidades.' },
        { icon: '🌎', title: 'Servicio en Español', desc: 'Te explicamos cada detalle de tu declaración en tu idioma. Sin términos confusos ni letra pequeña.' },
      ],
      faqs: [
        { q: '¿Cuándo es la fecha límite para presentar impuestos?', a: 'La fecha límite estándar es el 15 de abril. Si necesitas más tiempo, podemos solicitar una extensión hasta el 15 de octubre. Para S-Corps y Partnerships, el plazo es el 15 de marzo.' },
        { q: '¿Qué documentos necesito para preparar mis impuestos?', a: 'Necesitas: W-2 o 1099 de empleadores, estados de cuenta bancarios, recibos de deducciones (donaciones, gastos de negocio), ITIN o SSN, y declaración del año anterior si es posible.' },
        { q: '¿Atienden a personas que no hablan inglés?', a: 'Sí, ofrecemos servicio completo en español. Todo nuestro equipo es bilingüe y podemos preparar y explicar tu declaración completamente en español.' },
        { q: '¿Pueden ayudarme si tengo impuestos de años anteriores sin declarar?', a: 'Por supuesto. Podemos preparar declaraciones de años anteriores (back taxes) y ayudarte a regularizar tu situación con el IRS para evitar penalidades e intereses adicionales.' },
        { q: '¿Cuánto cuesta la preparación de impuestos?', a: 'El costo varía según la complejidad de tu declaración. Contacta con nosotros para una consulta inicial sin costo y te daremos un presupuesto exacto.' },
      ],
      ctaTitle: '¿Listo para maximizar tu devolución de impuestos?',
      ctaDesc: 'Nuestros expertos bilingües en Coral Springs están listos para ayudarte. Consulta inicial gratuita.',
    },
    en: {
      badge: 'Tax Services',
      title: 'Tax Preparation & Planning in Coral Springs, FL',
      subtitle: 'Bilingual tax experts for personal and corporate returns. We maximize your IRS refund and ensure full compliance with US tax law.',
      description: 'Hispanic Financial offers comprehensive tax preparation and filing services for individuals, families, and businesses in Coral Springs, FL and throughout South Florida. With 20+ years of experience and 1,500+ satisfied clients, our bilingual team of experts ensures you pay only what you owe while taking full advantage of every available deduction. We serve the Hispanic community with personalized, Spanish-language service.',
      included: [
        'Personal income tax preparation & filing (Form 1040)',
        'Corporate tax preparation (S-Corp, C-Corp, LLC)',
        'Sales Tax declaration preparation',
        'Strategic tax planning to minimize your tax burden',
        'Payroll tax form filing',
        'IRS audit representation',
        'Filing extensions',
        'Prior year returns (Back Taxes)',
      ],
      benefits: [
        { icon: '💰', title: 'Maximum Refund', desc: 'We identify every deduction and tax credit you qualify for to maximize your IRS refund.' },
        { icon: '🛡️', title: 'Full Compliance', desc: 'We ensure your return meets all IRS regulations, avoiding penalties and unnecessary audits.' },
        { icon: '🌎', title: 'Bilingual Service', desc: 'We explain every detail of your return in the language you prefer — English or Spanish.' },
      ],
      faqs: [
        { q: 'When is the tax filing deadline?', a: 'The standard deadline is April 15th. If you need more time, we can file an extension giving you until October 15th. For S-Corps and Partnerships, the deadline is March 15th.' },
        { q: 'What documents do I need for tax preparation?', a: 'You\'ll need: W-2 or 1099 from employers, bank statements, receipts for deductions (donations, business expenses), ITIN or SSN, and last year\'s return if available.' },
        { q: 'Do you serve non-English speakers?', a: 'Yes, we offer complete bilingual service. Our entire team is fluent in both English and Spanish, and we can prepare and explain your return in whichever language you prefer.' },
        { q: 'Can you help with prior year unfiled returns?', a: 'Absolutely. We can prepare prior year returns (back taxes) and help you regularize your situation with the IRS to avoid additional penalties and interest.' },
        { q: 'How much does tax preparation cost?', a: 'Cost varies based on the complexity of your return. Contact us for a free initial consultation and we\'ll provide an exact quote.' },
      ],
      ctaTitle: 'Ready to maximize your tax refund?',
      ctaDesc: 'Our bilingual experts in Coral Springs are ready to help you. Free initial consultation.',
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
