import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Payroll Services for Small Businesses in Florida'
      : 'Servicios de Nómina para Pequeñas Empresas en Florida',
    description: isEn
      ? 'Complete payroll processing for small businesses in Florida. W-2, 941, 940, direct deposit, payroll tax filings, and new hire reporting. Bilingual service in Coral Springs. Call (954) 464-5458.'
      : 'Procesamiento de nómina completo para pequeñas empresas en Florida. W-2, 941, 940, depósito directo, declaraciones de nómina y reporte de nuevos empleados. Servicio bilingüe en Coral Springs. Llama (954) 464-5458.',
    keywords: isEn
      ? ['payroll services florida', 'small business payroll coral springs', 'payroll processing florida',
         'form 941 florida', 'W-2 preparation florida', 'bilingual payroll service florida',
         'payroll tax filing florida', 'payroll for hispanic businesses florida']
      : ['servicios de nómina florida', 'nómina pequeñas empresas coral springs', 'procesamiento nómina florida',
         'formulario 941 florida', 'preparación W-2 florida', 'servicio nómina bilingüe florida',
         'declaraciones nómina florida', 'nómina empresas hispanas florida'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/payroll`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/payroll',
        'en': 'https://hispanic.financial/en/servicios/payroll',
        'x-default': 'https://hispanic.financial/en/servicios/payroll',
      },
    },
    openGraph: {
      title: isEn
        ? 'Payroll Services in Coral Springs, FL | Hispanic Financial'
        : 'Servicios de Nómina en Coral Springs, FL | Hispanic Financial',
      description: isEn
        ? 'Full-service payroll processing for small businesses: W-2, 941, 940, direct deposit, tax filings, and compliance. Bilingual experts with 20+ years of experience.'
        : 'Procesamiento de nómina completo para pequeñas empresas: W-2, 941, 940, depósito directo, declaraciones y cumplimiento. Expertos bilingües con 20+ años de experiencia.',
      url: `https://hispanic.financial/${locale}/servicios/payroll`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn
        ? 'Payroll Services for Small Businesses in Florida'
        : 'Servicios de Nómina para Pequeñas Empresas en Florida',
    },
  };
}

export default async function PayrollPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': isEn ? 'Payroll Processing Services' : 'Servicios de Procesamiento de Nómina',
    'description': isEn
      ? 'Complete payroll processing for small and medium businesses in Florida: salary calculations, payroll tax withholding, W-2 preparation, Forms 941 and 940, direct deposit setup, and compliance with federal and state employment laws.'
      : 'Procesamiento de nómina completo para pequeñas y medianas empresas en Florida: cálculo de salarios, retenciones de impuestos de nómina, preparación de W-2, Formularios 941 y 940, configuración de depósito directo y cumplimiento con las leyes laborales federales y estatales.',
    'provider': {
      '@type': 'AccountingService',
      'name': 'Hispanic Financial',
      'url': 'https://hispanic.financial',
      'telephone': '+19544645458',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '7401 Wiles Rd. Suite 126',
        'addressLocality': 'Coral Springs',
        'addressRegion': 'FL',
        'postalCode': '33067',
        'addressCountry': 'US',
      },
    },
    'areaServed': { '@type': 'State', 'name': 'Florida' },
    'url': `https://hispanic.financial/${locale}/servicios/payroll`,
  };

  const content = {
    es: {
      badge: 'Nómina / Payroll',
      title: 'Servicios de Nómina para Pequeñas Empresas en Florida',
      subtitle: 'Procesamos tu nómina completa: cálculo de salarios, retenciones, depósito directo y todas las declaraciones federales y estatales. Tú te enfocas en tu negocio, nosotros manejamos el papeleo.',
      description: 'Manejar la nómina de tu negocio no tiene que ser un dolor de cabeza. En Hispanic Financial ofrecemos servicios completos de procesamiento de nómina para pequeñas y medianas empresas en Coral Springs y todo el sur de Florida. Calculamos salarios, retenemos y remitimos impuestos, preparamos los formularios federales (941, 940, W-2, W-3), gestionamos el depósito directo de tus empleados y te mantenemos en cumplimiento total con el IRS y el Departamento de Trabajo de Florida. Todo en español o inglés, según tu preferencia.',
      included: [
        'Cálculo de salarios, horas extras y deducciones de empleados',
        'Cálculo y retención de impuestos federales y estatales (federal income tax, Social Security, Medicare)',
        'Procesamiento de depósito directo a cuentas de empleados',
        'Preparación y presentación del Formulario 941 (trimestral)',
        'Preparación y presentación del Formulario 940 (FUTA — anual)',
        'Preparación de W-2 para empleados y W-3 para el IRS al cierre del año',
        'Reporte de nuevos empleados (New Hire Reporting) al estado de Florida',
        'Gestión de impuesto de Reempleo (Reemployment Tax) de Florida (RT-6)',
        'Coordinación con tu sistema contable o QuickBooks',
      ],
      benefits: [
        { icon: '⏱️', title: 'Ahorra Tiempo', desc: 'Deja de preocuparte por cálculos, fechas límite y formularios. Nos encargamos de todo para que tú te concentres en hacer crecer tu negocio.' },
        { icon: '⚖️', title: 'Cumplimiento Total', desc: 'Las multas por errores en la nómina son costosas. Garantizamos cumplimiento con el IRS, el Departamento de Trabajo y las regulaciones estatales de Florida.' },
        { icon: '🌎', title: 'Servicio Bilingüe', desc: 'Atendemos a empresarios hispanos en español. Explicamos cada detalle de tu nómina en tu idioma y resolvemos cualquier duda con el IRS.' },
      ],
      faqs: [
        { q: '¿Con qué frecuencia debo presentar los formularios de nómina?', a: 'El Formulario 941 (para empleadores que retienen impuestos federales) se presenta trimestralmente: 30 de abril, 31 de julio, 31 de octubre y 31 de enero. El Formulario 940 (FUTA) se presenta anualmente antes del 31 de enero. Los depósitos de impuestos pueden ser semanales o mensuales dependiendo del tamaño de tu nómina.' },
        { q: '¿Qué pasa si no presento la nómina a tiempo?', a: 'Las penalidades del IRS por presentación tardía de formularios 941 y 940 pueden ser del 2% al 15% de los impuestos adeudados, más intereses. Además, Florida aplica penalidades separadas por el impuesto de Reempleo. Nosotros gestionamos todas las fechas límite para que nunca te atrases.' },
        { q: '¿Pueden manejar la nómina de una empresa con empleados en múltiples estados?', a: 'Sí. Podemos procesar nómina para empresas con empleados en Florida y otros estados. Cada estado tiene sus propias regulaciones de nómina y nosotros nos encargamos del cumplimiento en cada jurisdicción.' },
        { q: '¿Qué diferencia hay entre un empleado (W-2) y un contratista (1099)?', a: 'Un empleado W-2 trabaja bajo tu dirección y control — debes retener impuestos y pagar la parte patronal del Social Security y Medicare. Un contratista 1099 es independiente — no hay retención de impuestos pero debes reportar sus pagos si superan $600 al año con el Formulario 1099-NEC. Clasificar incorrectamente a un empleado como contratista puede resultar en multas significativas del IRS.' },
        { q: '¿Ofrecen servicio de nómina para empresas recién creadas?', a: 'Sí, ayudamos a empresas nuevas a configurar su sistema de nómina desde cero: obtener el EIN, registrarse como empleador en Florida, configurar las retenciones correctas y procesar el primer pago. También integramos la nómina con QuickBooks si ya usas ese sistema.' },
      ],
      ctaTitle: '¿Listo para simplificar tu nómina?',
      ctaDesc: 'Contáctanos para una consulta sin costo. Te explicamos cómo podemos manejar toda tu nómina en español y mantenerte en cumplimiento total.',
    },
    en: {
      badge: 'Payroll Services',
      title: 'Payroll Services for Small Businesses in Florida',
      subtitle: 'We handle your complete payroll: salary calculations, tax withholding, direct deposit, and all federal and state filings. You focus on your business — we handle the paperwork.',
      description: 'Managing your business payroll doesn\'t have to be a headache. Hispanic Financial offers complete payroll processing services for small and medium businesses in Coral Springs and throughout South Florida. We calculate wages, withhold and remit taxes, prepare all federal forms (941, 940, W-2, W-3), handle direct deposit for your employees, and keep you in full compliance with the IRS and the Florida Department of Revenue — all in English or Spanish, whichever you prefer.',
      included: [
        'Salary, overtime, and employee deduction calculations',
        'Federal and state tax withholding calculation and remittance (federal income tax, Social Security, Medicare)',
        'Direct deposit processing to employee accounts',
        'Form 941 preparation and filing (quarterly)',
        'Form 940 preparation and filing (FUTA — annual)',
        'W-2 preparation for employees and W-3 for the IRS at year-end',
        'New hire reporting to the State of Florida',
        'Florida Reemployment Tax management (RT-6)',
        'Integration with your accounting system or QuickBooks',
      ],
      benefits: [
        { icon: '⏱️', title: 'Save Time', desc: 'Stop worrying about calculations, deadlines, and forms. We handle everything so you can focus on growing your business.' },
        { icon: '⚖️', title: 'Full Compliance', desc: 'Payroll errors are costly. We guarantee compliance with the IRS, the Department of Labor, and Florida state regulations.' },
        { icon: '🌎', title: 'Bilingual Service', desc: 'We serve Hispanic business owners in Spanish. We explain every detail of your payroll and handle any IRS issues in the language you prefer.' },
      ],
      faqs: [
        { q: 'How often do I need to file payroll forms?', a: 'Form 941 (for employers who withhold federal taxes) is filed quarterly: April 30, July 31, October 31, and January 31. Form 940 (FUTA) is filed annually by January 31. Tax deposits may be required weekly or monthly depending on your payroll size.' },
        { q: 'What happens if I miss a payroll filing deadline?', a: 'IRS penalties for late 941 and 940 filings can range from 2% to 15% of taxes owed, plus interest. Florida also applies separate penalties for the Reemployment Tax. We manage all deadlines so you\'re never late.' },
        { q: 'Can you handle payroll for a business with employees in multiple states?', a: 'Yes. We can process payroll for businesses with employees in Florida and other states. Each state has its own payroll regulations, and we handle compliance in each jurisdiction.' },
        { q: 'What\'s the difference between an employee (W-2) and a contractor (1099)?', a: 'A W-2 employee works under your direction and control — you must withhold taxes and pay the employer portion of Social Security and Medicare. A 1099 contractor is independent — no tax withholding, but you must report payments over $600/year on Form 1099-NEC. Misclassifying an employee as a contractor can result in significant IRS penalties.' },
        { q: 'Do you offer payroll setup for newly formed businesses?', a: 'Yes. We help new businesses set up their payroll system from scratch: obtaining the EIN, registering as an employer with the State of Florida, configuring correct withholdings, and processing the first payroll run. We also integrate with QuickBooks if you already use it.' },
      ],
      ctaTitle: 'Ready to simplify your payroll?',
      ctaDesc: 'Contact us for a free consultation. We\'ll show you how we can handle your entire payroll in English or Spanish and keep you in full compliance.',
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
