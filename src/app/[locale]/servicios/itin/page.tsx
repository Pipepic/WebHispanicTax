import type { Metadata } from 'next';
import ServicePageLayout from '@/components/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'ITIN Application & Renewal — Certified Acceptance Agent Florida'
      : 'Solicitud y Renovación de ITIN — Agente Certificado Florida',
    description: isEn
      ? 'Apply for or renew your ITIN with a Certified Acceptance Agent (CAA) in Coral Springs, FL. Form W-7, document certification, no need to mail your passport. Bilingual service. Call (954) 464-5458.'
      : 'Solicita o renueva tu ITIN con un Agente Certificado de Aceptación (CAA) en Coral Springs, FL. Formulario W-7, certificación de documentos, sin enviar tu pasaporte por correo. Servicio bilingüe. Llama (954) 464-5458.',
    keywords: isEn
      ? ['ITIN application florida', 'certified acceptance agent coral springs', 'ITIN renewal florida',
         'form W-7 help florida', 'ITIN for immigrants florida', 'ITIN without SSN florida',
         'ITIN tax return florida', 'ITIN FIRPTA florida']
      : ['solicitar ITIN florida', 'agente certificado aceptación coral springs', 'renovar ITIN florida',
         'formulario W-7 ayuda florida', 'ITIN para inmigrantes florida', 'ITIN sin seguro social florida',
         'ITIN declaración impuestos florida', 'ITIN FIRPTA florida'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/servicios/itin`,
      languages: {
        'es': 'https://hispanic.financial/es/servicios/itin',
        'en': 'https://hispanic.financial/en/servicios/itin',
        'x-default': 'https://hispanic.financial/en/servicios/itin',
      },
    },
    openGraph: {
      title: isEn
        ? 'ITIN Application & Renewal — CAA in Coral Springs, FL | Hispanic Financial'
        : 'Solicitud y Renovación de ITIN — CAA en Coral Springs, FL | Hispanic Financial',
      description: isEn
        ? 'Certified Acceptance Agent (CAA) for ITIN applications and renewals in Florida. We certify your documents and file Form W-7 — no passport mailing required.'
        : 'Agente Certificado de Aceptación (CAA) para solicitudes y renovaciones de ITIN en Florida. Certificamos tus documentos y presentamos el Formulario W-7 — sin enviar tu pasaporte por correo.',
      url: `https://hispanic.financial/${locale}/servicios/itin`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn
        ? 'ITIN Application & Renewal — Certified Acceptance Agent Florida'
        : 'Solicitud y Renovación de ITIN — Agente Certificado Florida',
    },
  };
}

export default async function ITINPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': isEn
      ? 'ITIN Application & Renewal — Certified Acceptance Agent'
      : 'Solicitud y Renovación de ITIN — Agente Certificado de Aceptación',
    'description': isEn
      ? 'Complete ITIN application and renewal service through a Certified Acceptance Agent (CAA) authorized by the IRS. We prepare Form W-7, certify your identity documents, and file your tax return — all without you needing to mail original documents to the IRS.'
      : 'Servicio completo de solicitud y renovación de ITIN a través de un Agente Certificado de Aceptación (CAA) autorizado por el IRS. Preparamos el Formulario W-7, certificamos tus documentos de identidad y presentamos tu declaración de impuestos — sin necesidad de enviar documentos originales al IRS por correo.',
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
    'url': `https://hispanic.financial/${locale}/servicios/itin`,
  };

  const content = {
    es: {
      badge: 'ITIN — Agente CAA',
      title: 'Solicita o Renueva tu ITIN con un Agente Certificado en Coral Springs',
      subtitle: 'Como Agentes Certificados de Aceptación (CAA) autorizados por el IRS, gestionamos tu solicitud de ITIN de principio a fin: sin que tengas que enviar tu pasaporte por correo, en español, y junto con tu declaración de impuestos.',
      description: 'El ITIN (Individual Taxpayer Identification Number) es el número de identificación fiscal que necesitas si no tienes Número de Seguro Social pero recibes ingresos en Estados Unidos o debes declarar impuestos. En Hispanic Financial somos Agentes Certificados de Aceptación (CAA) autorizados por el IRS, lo que significa que podemos certificar copias de tus documentos de identidad en nuestra oficina — sin necesidad de enviar tu pasaporte u otros documentos originales al IRS. Gestionamos todo el proceso en español: Formulario W-7, declaración de impuestos adjunta, y seguimiento con el IRS hasta que recibas tu número.',
      included: [
        'Evaluación de elegibilidad: determinamos si calificas para ITIN o SSN',
        'Preparación y revisión del Formulario W-7 (Application for IRS Individual Taxpayer Identification Number)',
        'Certificación de documentos de identidad en oficina — sin enviar originales al IRS',
        'Selección correcta del código de razón (casilla a–h) según tu situación específica',
        'Preparación de la declaración de impuestos (1040 / 1040-NR) adjunta al W-7',
        'Gestión de ITIN para cónyuges y dependientes en la misma solicitud',
        'Renovación de ITIN vencidos (dígitos intermedios expirados o sin uso por 3 años)',
        'ITIN para inversionistas extranjeros (FIRPTA y tratados fiscales)',
        'Seguimiento de la solicitud y comunicación con el IRS si hay retrasos',
      ],
      benefits: [
        { icon: '🛡️', title: 'Sin Enviar tu Pasaporte', desc: 'Como CAA, certificamos copias de tus documentos en nuestra oficina. No tienes que enviar tu pasaporte original al IRS y arriesgarte a perderlo.' },
        { icon: '✅', title: 'Primera Vez Bien Hecho', desc: 'Los errores en el W-7 causan rechazos y retrasos de semanas. Nuestros expertos aseguran que tu solicitud esté perfectamente preparada desde el primer intento.' },
        { icon: '🌎', title: 'Todo en Español', desc: 'Explicamos cada paso del proceso en español, respondemos tus preguntas sobre el IRS y te notificamos cuando tu ITIN sea aprobado.' },
      ],
      faqs: [
        { q: '¿Cuánto tiempo tarda el IRS en emitir el ITIN?', a: 'El IRS procesa las solicitudes de ITIN en 6–11 semanas. Durante la temporada de impuestos (enero–abril) puede tardar hasta 11 semanas. Una vez aprobado, recibirás la carta CP565 con tu número por correo. Si presentaste tu declaración junto con el W-7 y el ITIN llega después del 15 de abril, el IRS considera tu declaración presentada a tiempo.' },
        { q: '¿Qué es un Agente Certificado de Aceptación (CAA) y por qué es mejor usarlo?', a: 'Un CAA es una persona o empresa autorizada por el IRS para verificar y certificar documentos de identidad para solicitudes de ITIN. La ventaja principal: un CAA puede certificar copias de tu pasaporte o cédula en su oficina, de modo que no tienes que enviar tus documentos originales al IRS por correo — lo cual es riesgoso, ya que los documentos pueden perderse o tardar semanas en ser devueltos.' },
        { q: '¿Necesito el ITIN si ya tengo permiso de trabajo o green card?', a: 'No. Si tienes autorización de trabajo (permiso de trabajo, green card) o eres ciudadano estadounidense, debes solicitar un Número de Seguro Social (SSN) — el IRS no emitirá un ITIN a personas elegibles para SSN. El ITIN es solo para quienes no pueden obtener un SSN.' },
        { q: '¿Puedo solicitar el ITIN para mis hijos o cónyuge?', a: 'Sí. Puedes incluir a tu cónyuge y dependientes en la misma solicitud si tampoco tienen SSN. Esto es común en familias donde uno de los cónyuges no tiene autorización de trabajo pero debe aparecer en la declaración de impuestos conjunta, o para reclamar el Child Tax Credit por hijos nacidos fuera de EE.UU.' },
        { q: '¿Mi ITIN puede vencer?', a: 'Sí. Los ITIN no usados en una declaración de impuestos federal por tres años consecutivos vencen automáticamente. Además, el IRS ha vencido ITINs con ciertos dígitos intermedios (70–88, 90–92, 94–99). Si tu ITIN está vencido y lo usas en tu declaración, el IRS procesará la declaración sin aplicar ciertos créditos como el Child Tax Credit, lo que puede reducir significativamente tu reembolso.' },
        { q: '¿Qué pasa con el ITIN cuando obtengo el SSN?', a: 'Cuando obtienes un SSN, debes notificar al IRS para que tu historial de declaraciones se transfiera de tu ITIN a tu nuevo SSN. Esto es importante para que tu historial fiscal quede asociado a tu identidad correcta. Nosotros te ayudamos con este proceso de transición.' },
      ],
      ctaTitle: '¿Necesitas tu ITIN? Te ayudamos hoy.',
      ctaDesc: 'Como Agentes Certificados de Aceptación, gestionamos tu solicitud de principio a fin — sin enviar tu pasaporte por correo y completamente en español. Atendemos en Coral Springs y todo el sur de Florida.',
    },
    en: {
      badge: 'ITIN — CAA Agent',
      title: 'Apply or Renew Your ITIN with a Certified Acceptance Agent in Coral Springs',
      subtitle: 'As IRS-authorized Certified Acceptance Agents (CAAs), we handle your ITIN application from start to finish: no mailing your passport, in English or Spanish, and together with your tax return.',
      description: 'An ITIN (Individual Taxpayer Identification Number) is the tax ID you need if you don\'t have a Social Security Number but receive income in the United States or must file a tax return. Hispanic Financial is an IRS-authorized Certified Acceptance Agent (CAA), which means we can certify copies of your identity documents in our office — without you needing to mail your passport or other original documents to the IRS. We manage the entire process: Form W-7, the attached tax return, and follow-up with the IRS until you receive your number.',
      included: [
        'Eligibility assessment: determining whether you qualify for an ITIN or an SSN',
        'Preparation and review of Form W-7 (Application for IRS Individual Taxpayer Identification Number)',
        'In-office identity document certification — no mailing originals to the IRS',
        'Correct reason code selection (boxes a–h) based on your specific situation',
        'Attached tax return preparation (1040 / 1040-NR) filed with the W-7',
        'ITIN applications for spouses and dependents in the same filing',
        'Expired ITIN renewals (expired middle digits or unused for 3+ years)',
        'ITIN for foreign investors (FIRPTA and tax treaty cases)',
        'Application tracking and IRS communication if delays occur',
      ],
      benefits: [
        { icon: '🛡️', title: 'Keep Your Passport Safe', desc: 'As a CAA, we certify copies of your documents in our office. No need to mail your original passport to the IRS and risk losing it.' },
        { icon: '✅', title: 'Done Right the First Time', desc: 'W-7 errors cause rejections and weeks of delays. Our experts ensure your application is perfectly prepared on the first attempt.' },
        { icon: '🌎', title: 'Bilingual Service', desc: 'We explain every step of the process in English or Spanish, answer your IRS questions, and notify you when your ITIN is approved.' },
      ],
      faqs: [
        { q: 'How long does the IRS take to issue an ITIN?', a: 'The IRS processes ITIN applications in 6–11 weeks. During tax season (January–April), it can take up to 11 weeks. Once approved, you\'ll receive letter CP565 with your number by mail. If you filed your return with the W-7 and the ITIN arrives after April 15, the IRS considers your return timely filed.' },
        { q: 'What is a Certified Acceptance Agent (CAA) and why is it better?', a: 'A CAA is a person or company authorized by the IRS to verify and certify identity documents for ITIN applications. The key advantage: a CAA can certify copies of your passport or national ID in their office, so you don\'t have to mail your original documents to the IRS — which is risky since documents can be lost or take weeks to be returned.' },
        { q: 'Do I need an ITIN if I already have work authorization or a green card?', a: 'No. If you have work authorization (work permit, green card) or are a U.S. citizen, you must apply for a Social Security Number (SSN) — the IRS will not issue an ITIN to people eligible for an SSN. The ITIN is only for those who cannot obtain an SSN.' },
        { q: 'Can I apply for an ITIN for my children or spouse?', a: 'Yes. You can include your spouse and dependents in the same application if they also lack an SSN. This is common in families where one spouse doesn\'t have work authorization but needs to appear on a joint tax return, or to claim the Child Tax Credit for children born outside the U.S.' },
        { q: 'Can my ITIN expire?', a: 'Yes. ITINs not used on a federal tax return for three consecutive years expire automatically. Additionally, the IRS has expired ITINs with certain middle digits (70–88, 90–92, 94–99). If you use an expired ITIN on your return, the IRS will process it without applying certain credits like the Child Tax Credit, which can significantly reduce your refund.' },
        { q: 'What happens to my ITIN when I get an SSN?', a: 'When you get an SSN, you must notify the IRS so your tax return history is transferred from your ITIN to your new SSN. This is important so your tax history is associated with the correct identity. We help you with this transition process.' },
      ],
      ctaTitle: 'Need your ITIN? We can help today.',
      ctaDesc: 'As Certified Acceptance Agents, we manage your application from start to finish — without mailing your passport and in English or Spanish. Serving Coral Springs and all of South Florida.',
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
