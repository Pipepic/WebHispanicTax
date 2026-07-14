import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'How to Get Your ITIN in 2026: Complete Step-by-Step Guide'
      : 'Cómo Obtener el ITIN en 2026: Guía Completa Paso a Paso',
    description: isEn
      ? 'Complete guide to applying for your ITIN (Individual Taxpayer Identification Number) in 2026. Who needs it, required documents, Form W-7, processing times, and renewal. Bilingual help in Coral Springs, FL.'
      : 'Guía completa para solicitar tu ITIN (Número de Identificación Personal del Contribuyente) en 2026. Quién lo necesita, documentos, Formulario W-7, tiempos de procesamiento y renovación. Ayuda bilingüe en Coral Springs, FL.',
    keywords: isEn
      ? ['how to get ITIN 2026', 'ITIN application USA', 'form W-7 IRS', 'ITIN for immigrants florida',
         'ITIN renewal 2026', 'certified acceptance agent florida', 'ITIN without SSN',
         'individual taxpayer identification number guide']
      : ['cómo obtener ITIN 2026', 'solicitar ITIN USA', 'formulario W-7 IRS', 'ITIN para inmigrantes florida',
         'renovar ITIN 2026', 'agente certificado IRS florida', 'ITIN sin número de seguro social',
         'número de identificación personal contribuyente guía'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/blog/como-obtener-itin-2026`,
      languages: {
        'es': 'https://hispanic.financial/es/blog/como-obtener-itin-2026',
        'en': 'https://hispanic.financial/en/blog/como-obtener-itin-2026',
        'x-default': 'https://hispanic.financial/en/blog/como-obtener-itin-2026',
      },
    },
    openGraph: {
      title: isEn
        ? 'How to Get Your ITIN in 2026: Complete Step-by-Step Guide'
        : 'Cómo Obtener el ITIN en 2026: Guía Completa Paso a Paso',
      description: isEn
        ? 'Who needs an ITIN, required documents, how to complete Form W-7, processing times, and when to renew. Expert bilingual guidance from Coral Springs, FL.'
        : 'Quién necesita el ITIN, documentos requeridos, cómo completar el Formulario W-7, tiempos de procesamiento y cuándo renovarlo. Asesoría bilingüe experta en Coral Springs, FL.',
      url: `https://hispanic.financial/${locale}/blog/como-obtener-itin-2026`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'article',
    },
    twitter: {
      title: isEn
        ? 'How to Get Your ITIN in 2026: Complete Step-by-Step Guide'
        : 'Cómo Obtener el ITIN en 2026: Guía Completa Paso a Paso',
    },
  };
}

export default async function BlogITINPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': isEn
      ? 'How to Get Your ITIN in 2026: Complete Step-by-Step Guide'
      : 'Cómo Obtener el ITIN en 2026: Guía Completa Paso a Paso',
    'description': isEn
      ? 'Complete guide to applying for or renewing your ITIN in 2026. Who needs it, required documents, Form W-7, and processing times.'
      : 'Guía completa para solicitar o renovar tu ITIN en 2026. Quién lo necesita, documentos, Formulario W-7 y tiempos de procesamiento.',
    'author': {
      '@type': 'Person',
      '@id': 'https://hispanic.financial/#alvaro-patino',
      'name': 'Alvaro Patino',
      'jobTitle': 'Founder & CEO',
      'worksFor': { '@type': 'Organization', 'name': 'Hispanic Financial' },
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Hispanic Financial',
      'url': 'https://hispanic.financial',
      'logo': { '@type': 'ImageObject', 'url': 'https://hispanic.financial/logo.png' },
    },
    'datePublished': '2026-03-01',
    'dateModified': '2026-06-01',
    'url': `https://hispanic.financial/${locale}/blog/como-obtener-itin-2026`,
    'image': 'https://hispanic.financial/og-image.jpg',
    'inLanguage': isEn ? 'en' : 'es',
    'about': { '@type': 'Thing', 'name': 'ITIN Application United States' },
    'keywords': isEn
      ? 'ITIN, Form W-7, Individual Taxpayer Identification Number, IRS, immigrants taxes USA'
      : 'ITIN, Formulario W-7, Número de Identificación Personal del Contribuyente, IRS, impuestos inmigrantes USA',
  };

  if (isEn) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <div className="min-h-screen bg-white">

          {/* Header */}
          <div className="premium-gradient text-white pt-28 pb-16 px-6">
            <div className="max-w-3xl mx-auto">
              <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
                ← Back to Blog
              </Link>
              <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Tax Guide · March 2026
              </span>
              <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                How to Get Your ITIN in 2026: Complete Step-by-Step Guide
              </h1>
              <p className="text-white/80 text-lg">By Alvaro Patino, Founder & CEO — Hispanic Financial | Coral Springs, FL</p>

              {/* Reading meta */}
              <div className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-white/10 text-xs text-white/50 uppercase tracking-widest">
                <span>📅 March 2026</span>
                <span>⏱ 9 min read</span>
                <span>🇺🇸 English</span>
              </div>
            </div>
          </div>

          <article className="max-w-3xl mx-auto px-6 py-16">

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              If you don't have a Social Security Number (SSN) but earn income in the United States — or need to file a tax return — you'll need an ITIN. In this guide, we explain exactly who needs it, which documents you must present, how to complete Form W-7, and the fastest way to get it approved in 2026.
            </p>

            {/* What is ITIN */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">What is an ITIN?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An <strong>ITIN (Individual Taxpayer Identification Number)</strong> is a nine-digit tax processing number issued by the IRS in the format <strong>9XX-XX-XXXX</strong>. It is exclusively for individuals who need to comply with U.S. tax laws but are not eligible for a Social Security Number.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The ITIN does <strong>not</strong> authorize you to work in the United States, does not change your immigration status, and does not make you eligible for Social Security benefits. Its sole purpose is to allow you to fulfill your federal tax obligations with the IRS.
            </p>

            <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 mb-8">
              <p className="text-brand-dark font-black mb-2">Key fact:</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Having an ITIN and filing taxes each year <strong>builds a tax compliance history</strong> that can be very helpful in future immigration processes, including green card applications and citizenship petitions.
              </p>
            </div>

            {/* Who needs it */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Who Needs an ITIN?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">You need an ITIN if you fall into one of these categories:</p>
            <ul className="list-none space-y-3 mb-6">
              {[
                'Foreign nationals (non-residents) who earn U.S.-sourced income (rentals, investments, business income)',
                'Undocumented immigrants who are required to file a U.S. tax return',
                'Spouses and dependents of U.S. citizens or legal residents who are not eligible for an SSN',
                'Foreign students, professors, or researchers with U.S. income outside of their scholarship or fellowship',
                'Non-resident aliens claiming a tax treaty benefit',
                'Foreign investors in U.S. real estate (required for FIRPTA withholding claims)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>You do NOT need an ITIN</strong> if you are eligible for a Social Security Number — even if you haven't applied for one yet. If you qualify for an SSN, the IRS will not issue you an ITIN.
            </p>

            {/* Documents */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Documents Required to Apply for an ITIN</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The IRS requires documentation that proves your <strong>foreign status</strong> and <strong>identity</strong>. The single document that satisfies both requirements is a <strong>valid passport</strong> — this is the most straightforward option.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you don't have a passport, you can combine two documents from this list:
            </p>

            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 text-brand-dark font-black">Document</th>
                    <th className="text-center py-2 text-brand-dark font-black">Proves Identity</th>
                    <th className="text-center py-2 text-brand-dark font-black">Proves Foreign Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {[
                    ['Passport (any country)', true, true],
                    ['National identity card', true, true],
                    ['U.S. or foreign driver\'s license', true, false],
                    ['Birth certificate (under 18)', true, false],
                    ['Foreign voter registration card', true, true],
                    ['U.S. Citizenship and Immigration Services photo ID', true, true],
                    ['Visa issued by the U.S. Department of State', false, true],
                    ['Medical records (minors under 6 only)', true, false],
                    ['School records (minors under 18 only)', true, false],
                  ].map(([doc, id, foreign]) => (
                    <tr key={String(doc)} className="border-b border-slate-100">
                      <td className="py-2 pr-4">{String(doc)}</td>
                      <td className="py-2 text-center">{id ? '✅' : '—'}</td>
                      <td className="py-2 text-center">{foreign ? '✅' : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <p className="text-amber-800 font-black mb-1">⚠️ Important note about originals:</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                The IRS requires <strong>original documents or certified copies</strong> issued by the issuing authority. Notarized photocopies are generally not accepted. Using a <strong>Certified Acceptance Agent (CAA)</strong> — like Hispanic Financial — allows you to submit certified copies without sending originals to the IRS.
              </p>
            </div>

            {/* Step by step */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Step-by-Step: How to Apply for Your ITIN in 2026</h2>

            {[
              {
                n: '1',
                t: 'Complete Form W-7',
                d: 'Download Form W-7 (Application for IRS Individual Taxpayer Identification Number) from irs.gov. Fill it out carefully, selecting the correct reason for applying (Box a through h). The most common for immigrants is Box "a" (non-resident alien required to file a U.S. tax return) or Box "e" (spouse or dependent of a U.S. citizen/resident).',
              },
              {
                n: '2',
                t: 'Prepare your federal tax return',
                d: 'In most cases, Form W-7 must be submitted together with a completed federal tax return (Form 1040 or 1040-NR). There are some exceptions — such as foreign investors claiming treaty benefits or FIRPTA cases — where a return is not required. Write "ITIN APPLICATION ENCLOSED" at the top of your return.',
              },
              {
                n: '3',
                t: 'Gather your identity documents',
                d: 'Collect the original documents or certified copies that prove your identity and foreign status. The passport is the simplest option. If using a Certified Acceptance Agent (CAA), they can certify copies of your documents so you don\'t have to mail originals to the IRS.',
              },
              {
                n: '4',
                t: 'Choose how to submit your application',
                d: 'You have three options: (A) Mail everything to the IRS ITIN Operations Center in Austin, TX — risky because you send original documents. (B) Visit an IRS Taxpayer Assistance Center (TAC) in person — by appointment only. (C) Use a Certified Acceptance Agent (CAA) — the fastest and safest option. We are a CAA at Hispanic Financial.',
              },
              {
                n: '5',
                t: 'Wait for processing',
                d: 'The IRS typically processes ITIN applications in 6–11 weeks. During peak season (January–April), times can be closer to 11 weeks. Once approved, the IRS will mail your ITIN letter (CP565) to the address on your W-7. Your ITIN begins with the digit 9.',
              },
            ].map(step => (
              <div key={step.n} className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-black text-sm">{step.n}</div>
                <div>
                  <h3 className="font-black text-brand-dark mb-1">{step.t}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}

            {/* Processing times */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">ITIN Processing Times in 2026</h2>
            <div className="bg-slate-50 rounded-2xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left px-5 py-3 font-black">Submission Method</th>
                    <th className="text-left px-5 py-3 font-black">Estimated Processing Time</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {[
                    ['By mail (off-peak: May–December)', '6–8 weeks'],
                    ['By mail (peak season: January–April)', '9–11 weeks'],
                    ['In-person at IRS TAC', '6–8 weeks (same timeline, but documents returned same day)'],
                    ['Through a Certified Acceptance Agent (CAA)', '6–8 weeks (safest — no originals mailed)'],
                  ].map(([method, time]) => (
                    <tr key={String(method)} className="border-b border-slate-100">
                      <td className="px-5 py-3">{String(method)}</td>
                      <td className="px-5 py-3 font-bold text-brand-dark">{String(time)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mb-6">
              Tip: Apply as early as possible. If you file your ITIN application with your tax return and your ITIN is approved after the April 15 deadline, the IRS will consider your return timely filed.
            </p>

            {/* Renewal */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Does Your ITIN Need to Be Renewed?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>ITINs expire</strong> if they haven't been used on a federal tax return for three consecutive years. Additionally, the IRS has been systematically expiring ITINs with certain middle digit combinations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In 2026, ITINs with middle digits <strong>70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 94, 95, 96, 97, 98, or 99</strong> need to be renewed if you plan to use them this tax season.
            </p>
            <div className="bg-brand-green/10 border border-[#72BF44]/20 rounded-2xl p-6 mb-8">
              <p className="text-brand-dark font-black mb-1">How to check if your ITIN is still valid:</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Look at digits 4 and 5 of your ITIN (the "middle digits" in the format 9XX-<strong>XX</strong>-XXXX). If they match any of the numbers listed above, submit a renewal W-7 with your 2026 tax return. Renewal uses the same Form W-7 — just check the "Renewal" box.
              </p>
            </div>

            {/* Mistakes */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">5 Common ITIN Application Mistakes to Avoid</h2>
            {[
              { t: 'Sending unacceptable copies of documents', d: 'Simple photocopies — even notarized ones — are often rejected. The IRS requires originals or copies certified by the issuing authority (the embassy, consulate, or government agency that issued the document). A CAA can certify copies and save you this headache.' },
              { t: 'Not attaching a tax return to Form W-7', d: 'Unless you qualify for a specific exception, the IRS will reject a standalone W-7. You must file your tax return and W-7 together. If you owe taxes, filing with a W-7 and paying on time avoids penalties even if the ITIN is approved later.' },
              { t: 'Selecting the wrong reason code on W-7', d: 'Form W-7 has boxes "a" through "h" for the reason you need an ITIN. Selecting the wrong box is a common reason for rejection. For example, Box "a" is for non-residents who must file, while Box "h" covers other specific cases including FIRPTA and treaty claims.' },
              { t: 'Applying when you're eligible for an SSN', d: 'If you have work authorization (current or expired), the IRS may require you to apply for an SSN instead. The IRS does not issue ITINs to people who qualify for SSNs. Applying incorrectly wastes weeks.' },
              { t: 'Not renewing an expired ITIN before filing', d: 'Using an expired ITIN on your tax return means the IRS will process it without applying any credits or deductions that require a valid ITIN — including the Child Tax Credit. This can significantly reduce your refund or increase your tax bill.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-6 p-5 bg-red-50/50 rounded-2xl border border-red-100">
                <span className="text-red-500 font-black text-lg flex-shrink-0">✗</span>
                <div>
                  <p className="font-black text-brand-dark mb-1">Mistake {i + 1}: {item.t}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}

            {/* CAA explanation */}
            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">What is a Certified Acceptance Agent (CAA)?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A <strong>Certified Acceptance Agent (CAA)</strong> is an individual or entity authorized by the IRS to assist with ITIN applications. CAAs can:
            </p>
            <ul className="list-none space-y-3 mb-6">
              {[
                'Review your original documents and certify copies — so you never have to mail your passport or national ID to the IRS',
                'Complete and review Form W-7 on your behalf, ensuring it\'s filled out correctly',
                'Prepare and file your tax return alongside your ITIN application',
                'Communicate with the IRS on your behalf if there are questions or delays',
                'Handle ITIN renewals for previously issued numbers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              At <Link href={`/${locale}/servicios/impuestos`} className="text-brand-blue hover:underline font-bold">Hispanic Financial</Link>, we are a Certified Acceptance Agent. We prepare your entire ITIN application — including your tax return — in English or Spanish, and we certify your documents so you can keep your originals.
            </p>

            {/* Related Services */}
            <div className="mt-12 mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Related Services</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {([
                  { href: `/${locale}/servicios/impuestos`, icon: '🧾', title: 'Tax Preparation', desc: 'ITIN application, personal and business tax returns, and IRS representation.' },
                  { href: `/${locale}/servicios/creacion-de-llc`, icon: '🏛️', title: 'LLC Formation', desc: 'Start your business in Florida — even as a non-resident with an ITIN.' },
                  { href: `/${locale}/servicios/real-estate`, icon: '🏠', title: 'Real Estate & FIRPTA', desc: 'Foreign investors need an ITIN for FIRPTA withholding claims.' },
                ]).map(s => (
                  <Link key={s.href} href={s.href} className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all group">
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-black text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{s.title} →</span>
                    <span className="text-xs text-slate-500 leading-relaxed">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-brand-dark text-white rounded-2xl p-8 mt-12">
              <h2 className="text-2xl font-black mb-3">Need help applying for your ITIN?</h2>
              <p className="text-white/80 mb-6">
                As a Certified Acceptance Agent, we handle your entire ITIN application — Form W-7, your tax return, and document certification — all in Spanish or English. No need to mail your passport to the IRS. Serving Coral Springs and all of South Florida.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`/${locale}#contact`} className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-colors">
                  Contact Us
                </a>
                <a href="tel:+19544645458" className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-colors">
                  Call Us Now
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-400">This article is for informational purposes only and does not constitute legal or tax advice. IRS procedures and processing times may change; consult a qualified professional for advice specific to your situation.</p>
            </div>
          </article>
        </div>
      </>
    );
  }

  // ── Spanish version ──────────────────────────────────────────────────────────
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-white">

        {/* Header */}
        <div className="premium-gradient text-white pt-28 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← Volver al Blog
            </Link>
            <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Guía de Impuestos · Marzo 2026
            </span>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              Cómo Obtener el ITIN en 2026: Guía Completa Paso a Paso
            </h1>
            <p className="text-white/80 text-lg">Por Alvaro Patino, Founder & CEO — Hispanic Financial | Coral Springs, FL</p>

            <div className="flex flex-wrap gap-5 mt-8 pt-8 border-t border-white/10 text-xs text-white/50 uppercase tracking-widest">
              <span>📅 Marzo 2026</span>
              <span>⏱ 9 min lectura</span>
              <span>🇪🇸 Español</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 py-16">

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Si no tienes Número de Seguro Social (SSN) pero generas ingresos en Estados Unidos — o necesitas presentar una declaración de impuestos — necesitarás un ITIN. En esta guía te explicamos exactamente quién lo necesita, qué documentos debes presentar, cómo llenar el Formulario W-7 y la forma más rápida de obtenerlo en 2026.
          </p>

          {/* Qué es el ITIN */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Qué es el ITIN?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            El <strong>ITIN (Individual Taxpayer Identification Number)</strong> — o Número de Identificación Personal del Contribuyente — es un número fiscal de nueve dígitos emitido por el IRS en el formato <strong>9XX-XX-XXXX</strong>. Está destinado exclusivamente a personas que necesitan cumplir con las leyes fiscales de EE.UU. pero no son elegibles para obtener un Número de Seguro Social.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            El ITIN <strong>no</strong> te autoriza a trabajar en Estados Unidos, no cambia tu estatus migratorio y no te hace elegible para beneficios del Seguro Social. Su único propósito es permitirte cumplir con tus obligaciones fiscales federales ante el IRS.
          </p>

          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-2xl p-6 mb-8">
            <p className="text-brand-dark font-black mb-2">Dato clave:</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Tener un ITIN y declarar impuestos cada año <strong>construye un historial de cumplimiento fiscal</strong> que puede ser muy útil en futuros procesos migratorios, incluidas solicitudes de green card y peticiones de ciudadanía.
            </p>
          </div>

          {/* Quién lo necesita */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Quién Necesita un ITIN?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Necesitas un ITIN si estás en alguna de estas situaciones:</p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'Extranjeros no residentes que reciben ingresos de fuente estadounidense (rentas, inversiones, negocios)',
              'Inmigrantes indocumentados obligados a presentar una declaración de impuestos en EE.UU.',
              'Cónyuges y dependientes de ciudadanos estadounidenses o residentes legales que no son elegibles para SSN',
              'Estudiantes, profesores o investigadores extranjeros con ingresos en USA fuera de su beca',
              'Extranjeros no residentes que reclaman beneficios de un tratado fiscal',
              'Inversionistas extranjeros en bienes raíces en EE.UU. (requerido para reclamos de retención FIRPTA)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>NO necesitas un ITIN</strong> si eres elegible para un Número de Seguro Social, incluso si aún no lo has solicitado. Si calificas para un SSN, el IRS no te emitirá un ITIN.
          </p>

          {/* Documentos */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Documentos Requeridos para Solicitar el ITIN</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            El IRS exige documentación que pruebe tu <strong>condición de extranjero</strong> y tu <strong>identidad</strong>. El único documento que cumple ambos requisitos es un <strong>pasaporte vigente</strong> — esta es la opción más directa.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Si no tienes pasaporte, puedes combinar dos documentos de esta lista:
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-brand-dark font-black">Documento</th>
                  <th className="text-center py-2 text-brand-dark font-black">Prueba Identidad</th>
                  <th className="text-center py-2 text-brand-dark font-black">Prueba Condición Extranjero</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['Pasaporte (cualquier país)', true, true],
                  ['Documento nacional de identidad', true, true],
                  ['Licencia de conducir (USA o extranjera)', true, false],
                  ['Acta de nacimiento (menores de 18)', true, false],
                  ['Tarjeta de registro electoral extranjera', true, true],
                  ['Foto de identificación emitida por USCIS', true, true],
                  ['Visa emitida por el Dpto. de Estado de EE.UU.', false, true],
                  ['Registros médicos (solo menores de 6 años)', true, false],
                  ['Registros escolares (solo menores de 18 años)', true, false],
                ].map(([doc, id, foreign]) => (
                  <tr key={String(doc)} className="border-b border-slate-100">
                    <td className="py-2 pr-4">{String(doc)}</td>
                    <td className="py-2 text-center">{id ? '✅' : '—'}</td>
                    <td className="py-2 text-center">{foreign ? '✅' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <p className="text-amber-800 font-black mb-1">⚠️ Nota sobre documentos originales:</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              El IRS exige <strong>documentos originales o copias certificadas</strong> emitidas por la autoridad expedidora. Las fotocopias notariadas generalmente no son aceptadas. Usar un <strong>Agente Certificado de Aceptación (CAA)</strong> — como Hispanic Financial — te permite presentar copias certificadas sin enviar los originales al IRS.
            </p>
          </div>

          {/* Paso a paso */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Paso a Paso: Cómo Solicitar tu ITIN en 2026</h2>
          {[
            {
              n: '1',
              t: 'Completa el Formulario W-7',
              d: 'Descarga el Formulario W-7 (Solicitud de Número de Identificación Personal del Contribuyente del IRS) en irs.gov. Llénalo con cuidado, seleccionando la razón correcta para tu solicitud (Casilla a hasta h). La más común para inmigrantes es la Casilla "a" (extranjero no residente obligado a presentar declaración) o la Casilla "e" (cónyuge o dependiente de ciudadano o residente estadounidense).',
            },
            {
              n: '2',
              t: 'Prepara tu declaración de impuestos federal',
              d: 'En la mayoría de los casos, el Formulario W-7 debe presentarse junto con una declaración de impuestos federal completa (Formulario 1040 o 1040-NR). Existen excepciones — como inversionistas extranjeros que reclaman beneficios de tratados o casos FIRPTA — donde no se requiere declaración. Escribe "SOLICITUD DE ITIN ADJUNTA" en la parte superior de tu declaración.',
            },
            {
              n: '3',
              t: 'Reúne tus documentos de identidad',
              d: 'Recopila los documentos originales o copias certificadas que prueben tu identidad y condición de extranjero. El pasaporte es la opción más sencilla. Si usas un Agente Certificado de Aceptación (CAA), puede certificar copias de tus documentos para que no tengas que enviar los originales al IRS por correo.',
            },
            {
              n: '4',
              t: 'Elige cómo presentar tu solicitud',
              d: 'Tienes tres opciones: (A) Enviar todo por correo al Centro de Operaciones ITIN del IRS en Austin, TX — arriesgado porque envías documentos originales. (B) Visitar en persona un Centro de Asistencia al Contribuyente (TAC) del IRS — solo con cita previa. (C) Usar un Agente Certificado de Aceptación (CAA) — la opción más rápida y segura. En Hispanic Financial somos CAA.',
            },
            {
              n: '5',
              t: 'Espera el procesamiento',
              d: 'El IRS procesa las solicitudes de ITIN en 6–11 semanas. Durante la temporada de impuestos (enero–abril) los tiempos pueden acercarse a las 11 semanas. Una vez aprobado, el IRS enviará por correo tu carta de ITIN (CP565) a la dirección indicada en tu W-7. Tu ITIN comenzará con el dígito 9.',
            },
          ].map(step => (
            <div key={step.n} className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-black text-sm">{step.n}</div>
              <div>
                <h3 className="font-black text-brand-dark mb-1">{step.t}</h3>
                <p className="text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}

          {/* Tiempos */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Tiempos de Procesamiento del ITIN en 2026</h2>
          <div className="bg-slate-50 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="text-left px-5 py-3 font-black">Método de Envío</th>
                  <th className="text-left px-5 py-3 font-black">Tiempo Estimado</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['Por correo (temporada baja: mayo–diciembre)', '6–8 semanas'],
                  ['Por correo (temporada alta: enero–abril)', '9–11 semanas'],
                  ['En persona en TAC del IRS', '6–8 semanas (documentos devueltos el mismo día)'],
                  ['A través de un Agente Certificado (CAA)', '6–8 semanas (el más seguro — no se envían originales)'],
                ].map(([method, time]) => (
                  <tr key={String(method)} className="border-b border-slate-100">
                    <td className="px-5 py-3">{String(method)}</td>
                    <td className="px-5 py-3 font-bold text-brand-dark">{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            Consejo: solicita tu ITIN lo antes posible. Si presentas tu solicitud junto con tu declaración y el ITIN se aprueba después del 15 de abril, el IRS considerará tu declaración presentada a tiempo.
          </p>

          {/* Renovación */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Necesitas Renovar tu ITIN?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Los <strong>ITIN vencen</strong> si no se han utilizado en una declaración de impuestos federal durante tres años consecutivos. Además, el IRS ha estado venciendo sistemáticamente los ITIN con ciertas combinaciones de dígitos intermedios.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            En 2026, los ITIN con dígitos intermedios <strong>70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 94, 95, 96, 97, 98 o 99</strong> deben renovarse si planeas usarlos esta temporada fiscal.
          </p>
          <div className="bg-brand-green/10 border border-[#72BF44]/20 rounded-2xl p-6 mb-8">
            <p className="text-brand-dark font-black mb-1">Cómo verificar si tu ITIN sigue vigente:</p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Observa los dígitos 4 y 5 de tu ITIN (los "dígitos intermedios" en el formato 9XX-<strong>XX</strong>-XXXX). Si coinciden con alguno de los números anteriores, presenta un W-7 de renovación con tu declaración 2026. La renovación usa el mismo Formulario W-7 — simplemente marca la casilla "Renovación".
            </p>
          </div>

          {/* Errores */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">5 Errores Comunes al Solicitar el ITIN que Debes Evitar</h2>
          {[
            { t: 'Enviar copias de documentos no aceptables', d: 'Las simples fotocopias — incluso las notariadas — son rechazadas frecuentemente. El IRS exige originales o copias certificadas por la autoridad expedidora (la embajada, el consulado o el organismo gubernamental que emitió el documento). Un CAA puede certificar las copias y evitarte este problema.' },
            { t: 'No adjuntar la declaración de impuestos al Formulario W-7', d: 'A menos que califiques para una excepción específica, el IRS rechazará un W-7 sin declaración adjunta. Debes presentar tu declaración de impuestos y el W-7 juntos. Si tienes impuestos por pagar, presentar con el W-7 y pagar a tiempo evita multas aunque el ITIN se apruebe después.' },
            { t: 'Seleccionar el código de razón incorrecto en el W-7', d: 'El Formulario W-7 tiene casillas de "a" a "h" para el motivo por el que necesitas el ITIN. Seleccionar la casilla incorrecta es una razón común de rechazo. Por ejemplo, la Casilla "a" es para no residentes que deben declarar, mientras que la Casilla "h" cubre otros casos específicos como FIRPTA y reclamos de tratados.' },
            { t: 'Solicitar el ITIN cuando eres elegible para SSN', d: 'Si tienes autorización de trabajo (vigente o vencida), el IRS puede requerirte que solicites un SSN en su lugar. El IRS no emite ITIN a personas que califican para SSN. Aplicar incorrectamente puede hacer perder semanas.' },
            { t: 'No renovar un ITIN vencido antes de declarar', d: 'Usar un ITIN vencido en tu declaración significa que el IRS la procesará sin aplicar ciertos créditos y deducciones que requieren un ITIN válido — incluyendo el Crédito Tributario por Hijos. Esto puede reducir significativamente tu reembolso o aumentar tu factura fiscal.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-6 p-5 bg-red-50/50 rounded-2xl border border-red-100">
              <span className="text-red-500 font-black text-lg flex-shrink-0">✗</span>
              <div>
                <p className="font-black text-brand-dark mb-1">Error {i + 1}: {item.t}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}

          {/* CAA */}
          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Qué es un Agente Certificado de Aceptación (CAA)?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Un <strong>Agente Certificado de Aceptación (CAA)</strong> es una persona o entidad autorizada por el IRS para asistir con las solicitudes de ITIN. Los CAA pueden:
          </p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'Revisar tus documentos originales y certificar copias — para que nunca tengas que enviar tu pasaporte o cédula al IRS',
              'Completar y revisar el Formulario W-7 en tu nombre, asegurando que esté llenado correctamente',
              'Preparar y presentar tu declaración de impuestos junto con tu solicitud de ITIN',
              'Comunicarse con el IRS en tu nombre si hay preguntas o demoras',
              'Gestionar renovaciones de ITIN para números emitidos anteriormente',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            En <Link href={`/${locale}/servicios/impuestos`} className="text-brand-blue hover:underline font-bold">Hispanic Financial</Link> somos Agentes Certificados de Aceptación. Preparamos toda tu solicitud de ITIN — incluyendo tu declaración de impuestos — en español o inglés, y certificamos tus documentos para que puedas conservar los originales.
          </p>

          {/* Servicios Relacionados */}
          <div className="mt-12 mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Servicios Relacionados</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {([
                { href: `/${locale}/servicios/impuestos`, icon: '🧾', title: 'Preparación de Impuestos', desc: 'Solicitud de ITIN, declaraciones personales y corporativas, y representación ante el IRS.' },
                { href: `/${locale}/servicios/creacion-de-llc`, icon: '🏛️', title: 'Creación de LLC', desc: 'Inicia tu negocio en Florida — incluso siendo no residente con un ITIN.' },
                { href: `/${locale}/servicios/real-estate`, icon: '🏠', title: 'Real Estate y FIRPTA', desc: 'Los inversionistas extranjeros necesitan un ITIN para reclamos de retención FIRPTA.' },
              ]).map(s => (
                <Link key={s.href} href={s.href} className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all group">
                  <span className="text-xl">{s.icon}</span>
                  <span className="font-black text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{s.title} →</span>
                  <span className="text-xs text-slate-500 leading-relaxed">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-dark text-white rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-black mb-3">¿Necesitas ayuda para obtener tu ITIN?</h2>
            <p className="text-white/80 mb-6">
              Como Agentes Certificados de Aceptación, gestionamos toda tu solicitud de ITIN — Formulario W-7, tu declaración de impuestos y la certificación de documentos — completamente en español. Sin necesidad de enviar tu pasaporte al IRS. Atendemos en Coral Springs y todo el sur de Florida.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`/${locale}#contact`} className="bg-brand-green hover:bg-brand-green/90 text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-colors">
                Contáctanos
              </a>
              <a href="tel:+19544645458" className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-colors">
                Llámanos Ahora
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-400">Este artículo es solo para fines informativos y no constituye asesoramiento legal ni fiscal. Los procedimientos del IRS y los tiempos de procesamiento pueden cambiar; consulta a un profesional calificado para obtener asesoramiento específico a tu situación.</p>
          </div>
        </article>
      </div>
    </>
  );
}
