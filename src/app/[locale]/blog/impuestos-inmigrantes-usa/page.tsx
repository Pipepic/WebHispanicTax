import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'How to File Taxes as an Immigrant in the USA: 2026 Guide | Hispanic Financial'
      : 'Cómo Declarar Impuestos en USA si Eres Inmigrante: Guía 2026 | Hispanic Financial',
    description: isEn
      ? 'Complete guide to filing taxes in the USA as an immigrant or non-resident. ITIN, W-2, 1099, FBAR, and which income to report. Bilingual expert advice from Coral Springs, FL.'
      : 'Guía completa para declarar impuestos en USA siendo inmigrante o no residente. ITIN, W-2, 1099, FBAR y qué ingresos reportar. Asesoría experta bilingüe en Coral Springs, FL.',
    alternates: {
      canonical: `https://hispanic.financial/${locale}/blog/impuestos-inmigrantes-usa`,
      languages: {
        'es': 'https://hispanic.financial/es/blog/impuestos-inmigrantes-usa',
        'en': 'https://hispanic.financial/en/blog/impuestos-inmigrantes-usa',
        'x-default': 'https://hispanic.financial/en/blog/impuestos-inmigrantes-usa',
      },
    },
    openGraph: {
      title: isEn
        ? 'How to File Taxes as an Immigrant in the USA: 2026 Guide'
        : 'Cómo Declarar Impuestos en USA si Eres Inmigrante: Guía 2026',
      description: isEn
        ? 'Everything an immigrant needs to know about US taxes: ITIN vs SSN, taxable income, deadlines, penalties and how to avoid common mistakes.'
        : 'Todo lo que un inmigrante necesita saber sobre impuestos en USA: ITIN vs SSN, ingresos gravables, plazos, multas y cómo evitar errores comunes.',
      url: `https://hispanic.financial/${locale}/blog/impuestos-inmigrantes-usa`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'article',
    },
  };
}

export default async function BlogImmigrantTaxesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isEn
      ? "How to File Taxes as an Immigrant in the USA: Complete 2026 Guide"
      : "Cómo Declarar Impuestos en USA si Eres Inmigrante: Guía Completa 2026",
    "description": isEn
      ? "Complete guide to filing US taxes as an immigrant or non-resident in 2026."
      : "Guía completa para declarar impuestos en USA siendo inmigrante o no residente en 2026.",
    "author": {
      "@type": "Person",
      "name": "Alvaro Patino",
      "jobTitle": "Founder & CEO",
      "worksFor": { "@type": "Organization", "name": "Hispanic Financial" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hispanic Financial",
      "url": "https://hispanic.financial",
      "logo": { "@type": "ImageObject", "url": "https://hispanic.financial/logo.png" }
    },
    "datePublished": "2026-02-10",
    "dateModified": "2026-06-01",
    "url": `https://hispanic.financial/${locale}/blog/impuestos-inmigrantes-usa`,
    "image": "https://hispanic.financial/og-image.jpg",
    "inLanguage": isEn ? "en" : "es",
    "about": { "@type": "Thing", "name": "US Tax Filing for Immigrants" },
  };

  if (isEn) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <div className="min-h-screen bg-white">
          <div className="premium-gradient text-white pt-28 pb-16 px-6">
            <div className="max-w-3xl mx-auto">
              <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
                ← Back to Blog
              </Link>
              <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Tax Guide · February 2026
              </span>
              <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                How to File Taxes in the USA as an Immigrant: Complete 2026 Guide
              </h1>
              <p className="text-white/80 text-lg">By Alvaro Patino, Founder & CEO — Hispanic Financial | Coral Springs, FL</p>
            </div>
          </div>

          <article className="max-w-3xl mx-auto px-6 py-16">
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              One of the most common concerns among the Hispanic immigrant community is knowing how to comply with US tax obligations. The good news: filing taxes in the US is more accessible than it seems, even if you don't have a Social Security Number or you're not yet a permanent resident. This guide explains everything you need to know for 2026.
            </p>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Do Immigrants Have to File Taxes in the USA?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              <strong>Yes.</strong> If you earned income in the United States — whether as an employee, self-employed person, or business owner — you are required to file a federal tax return regardless of your immigration status. This includes undocumented immigrants, visa holders (H-1B, L-1, F-1, etc.), permanent residents, and recent citizens.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The IRS (Internal Revenue Service) requires you to report all income earned in the US. Not filing can result in significant penalties, interest on unpaid taxes, and in extreme cases, complications with immigration processes.
            </p>

            <div className="bg-brand-green/10 border border-[#72BF44]/20 rounded-2xl p-6 mb-8">
              <p className="text-brand-dark font-black mb-1">Important:</p>
              <p className="text-slate-700 text-sm leading-relaxed">Filing taxes can actually <strong>benefit</strong> your immigration process. It demonstrates economic compliance and contributions to the country, which is favorably considered in many residency and citizenship petitions.</p>
            </div>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">ITIN vs. Social Security Number: What Do You Need?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              If you don't have a Social Security Number (SSN), you'll need an <strong>ITIN (Individual Taxpayer Identification Number)</strong>. This is a 9-digit number the IRS issues to people who need to comply with US tax laws but are not eligible for an SSN.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Social Security Number (SSN)', items: ['US citizens', 'Permanent residents (Green Card)', 'Authorized work visa holders (H-1B, L-1, etc.)'], color: '#22689B' },
                { title: 'ITIN', items: ['Foreign non-residents with US income', 'Undocumented immigrants', 'Visa holders not authorized to work (but with passive income)', 'Spouses and dependents of certain visa holders'], color: '#72BF44' },
              ].map((col) => (
                <div key={col.title} className="bg-slate-50 rounded-2xl p-5">
                  <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: col.color }} />
                  <h3 className="font-black text-brand-dark mb-3 text-sm">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-slate-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">We help you apply for your ITIN as part of our tax preparation service. The process takes 6-10 weeks when submitting along with your tax return.</p>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">What Income Do You Need to Report?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">All income earned in the United States must be reported, including:</p>
            <ul className="list-none space-y-3 mb-6">
              {[
                'Wages and salaries (reported on Form W-2)',
                'Self-employment or freelance income (Form 1099-NEC)',
                'Business income',
                'Rental income from US properties',
                'Dividends and interest from US accounts',
                'Tips and commissions',
                'Winnings from games of chance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you also earned income in your home country, the treatment depends on your tax status: residents (Green Card or Substantial Presence Test) must report worldwide income; non-residents only report US-sourced income.
            </p>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Key Tax Deadlines for 2026</h2>
            <div className="bg-slate-50 rounded-2xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead><tr className="bg-brand-dark text-white"><th className="text-left px-5 py-3 font-black">Deadline</th><th className="text-left px-5 py-3 font-black">What</th></tr></thead>
                <tbody className="text-slate-600">
                  {[
                    ['January 31, 2026', 'Employers send W-2; clients send 1099'],
                    ['April 15, 2026', 'Deadline for individual tax returns (Form 1040/1040-NR)'],
                    ['June 15, 2026', 'Automatic deadline for non-residents living abroad'],
                    ['October 15, 2026', 'Deadline with extension (you must request by April 15)'],
                    ['April 15, 2026', 'FBAR — Foreign bank accounts over $10,000 (FinCEN 114)'],
                  ].map(([date, desc]) => (
                    <tr key={date} className="border-b border-slate-100">
                      <td className="px-5 py-3 font-bold text-brand-dark whitespace-nowrap">{date}</td>
                      <td className="px-5 py-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">5 Common Mistakes Immigrants Make with Their Taxes</h2>
            {[
              { t: 'Not filing because "the IRS won\'t find me"', d: 'The IRS has significant information exchange agreements with other countries and access to employment and banking records. Not filing increases risk and forfeits potential refunds you\'re entitled to.' },
              { t: 'Confusing resident and non-resident status', d: 'Tax status (resident vs. non-resident for IRS purposes) is independent of immigration status. A person without papers may be a tax resident if they meet the Substantial Presence Test. Each has different forms and rules.' },
              { t: 'Not reporting cash income', d: 'All income — including tips, cash payments, informal work — must be reported. If you work in construction, cleaning, restaurants, or similar, the IRS expects you to report 100% of what you earned, not just the documented portion.' },
              { t: 'Not applying for available credits', d: 'Many immigrants don\'t know they may qualify for the Child Tax Credit, Earned Income Credit (EITC), or education credits. These can result in significant refunds even if you didn\'t earn much.' },
              { t: 'Not reporting foreign bank accounts (FBAR)', d: 'If you have bank accounts outside the US with a combined balance over $10,000 at any point during the year, you must file FBAR (FinCEN 114). The penalty for not filing is $10,000 per violation.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 mb-6 p-5 bg-red-50/50 rounded-2xl border border-red-100">
                <span className="text-red-500 font-black text-lg flex-shrink-0">✗</span>
                <div>
                  <p className="font-black text-brand-dark mb-1">Mistake {i + 1}: {item.t}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">What Forms Do You Need?</h2>
            <div className="space-y-3 mb-8">
              {[
                { form: 'Form 1040', desc: 'Standard individual return for residents and Green Card holders' },
                { form: 'Form 1040-NR', desc: 'Non-resident alien individual return (for those without Green Card who don\'t pass the Substantial Presence Test)' },
                { form: 'Form W-7', desc: 'ITIN application (if you don\'t have SSN)' },
                { form: 'Schedule C', desc: 'Self-employment income (freelancers, independent contractors)' },
                { form: 'FinCEN 114 (FBAR)', desc: 'Foreign bank accounts over $10,000' },
                { form: 'Form 2555', desc: 'Foreign Earned Income Exclusion (for those living abroad part of the year)' },
              ].map((item) => (
                <div key={item.form} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                  <span className="font-black text-brand-blue text-sm flex-shrink-0 w-32">{item.form}</span>
                  <span className="text-slate-600 text-sm">{item.desc}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-dark text-white rounded-2xl p-8 mt-12">
              <h2 className="text-2xl font-black mb-3">Need help filing your taxes as an immigrant?</h2>
              <p className="text-white/80 mb-6">At Hispanic Financial, we prepare tax returns for immigrants, non-residents, and ITIN holders. We speak your language and understand your situation. Serving Coral Springs and all of South Florida.</p>
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
              <p className="text-sm text-slate-400">This article is for informational purposes only and does not constitute legal or tax advice. Tax laws may change; consult a qualified professional for advice specific to your situation.</p>
            </div>
          </article>
        </div>
      </>
    );
  }

  // Spanish version
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-white">
        <div className="premium-gradient text-white pt-28 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← Volver al Blog
            </Link>
            <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Guía de Impuestos · Febrero 2026
            </span>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              Cómo Declarar Impuestos en USA si Eres Inmigrante: Guía Completa 2026
            </h1>
            <p className="text-white/80 text-lg">Por Alvaro Patino, Founder & CEO — Hispanic Financial | Coral Springs, FL</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Una de las preguntas más frecuentes en la comunidad hispana inmigrante es cómo cumplir con las obligaciones tributarias en Estados Unidos. La buena noticia: declarar impuestos en USA es más accesible de lo que parece, incluso si no tienes Número de Seguro Social o aún no eres residente permanente. Esta guía explica todo lo que necesitas saber para 2026.
          </p>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Los inmigrantes deben declarar impuestos en USA?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            <strong>Sí.</strong> Si obtuviste ingresos en Estados Unidos — ya sea como empleado, trabajador independiente o dueño de negocio — estás obligado a presentar una declaración de impuestos federal independientemente de tu estatus migratorio. Esto incluye inmigrantes indocumentados, titulares de visa (H-1B, L-1, F-1, etc.), residentes permanentes y ciudadanos recientes.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            El IRS (Internal Revenue Service) requiere que reportes todos los ingresos obtenidos en EE.UU. No declarar puede resultar en multas significativas, intereses sobre impuestos no pagados y en casos extremos, complicaciones en procesos migratorios.
          </p>

          <div className="bg-brand-green/10 border border-[#72BF44]/20 rounded-2xl p-6 mb-8">
            <p className="text-brand-dark font-black mb-1">Dato importante:</p>
            <p className="text-slate-700 text-sm leading-relaxed">Declarar impuestos puede <strong>beneficiar</strong> tu proceso migratorio. Demuestra cumplimiento económico y aportes al país, lo cual es considerado favorablemente en muchas peticiones de residencia y ciudadanía.</p>
          </div>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">ITIN vs. Número de Seguro Social: ¿qué necesitas?</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Si no tienes Número de Seguro Social (SSN), necesitarás un <strong>ITIN (Individual Taxpayer Identification Number)</strong>. Es un número de 9 dígitos que el IRS emite a personas que necesitan cumplir con las leyes fiscales de EE.UU. pero no son elegibles para obtener un SSN.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Número de Seguro Social (SSN)', items: ['Ciudadanos estadounidenses', 'Residentes permanentes (Green Card)', 'Titulares de visa de trabajo autorizada (H-1B, L-1, etc.)'], color: '#22689B' },
              { title: 'ITIN', items: ['Extranjeros no residentes con ingresos en USA', 'Inmigrantes indocumentados', 'Titulares de visa no autorizados para trabajar (pero con ingresos pasivos)', 'Cónyuges y dependientes de ciertos titulares de visa'], color: '#72BF44' },
            ].map((col) => (
              <div key={col.title} className="bg-slate-50 rounded-2xl p-5">
                <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: col.color }} />
                <h3 className="font-black text-brand-dark mb-3 text-sm">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-slate-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">Te ayudamos a solicitar tu ITIN como parte de nuestro servicio de preparación de impuestos. El proceso tarda 6-10 semanas al enviarlo junto con tu declaración.</p>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Qué ingresos debes reportar?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Todos los ingresos obtenidos en Estados Unidos deben ser reportados, incluyendo:</p>
          <ul className="list-none space-y-3 mb-6">
            {[
              'Salarios y sueldos (reportados en el Formulario W-2)',
              'Ingresos por cuenta propia o freelance (Formulario 1099-NEC)',
              'Ingresos de negocio propio',
              'Ingresos por alquiler de propiedades en USA',
              'Dividendos e intereses de cuentas en USA',
              'Propinas y comisiones',
              'Ganancias de juegos de azar',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-slate-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            Si también obtuviste ingresos en tu país de origen, el tratamiento depende de tu estatus tributario: los residentes (Green Card o Prueba de Presencia Sustancial) deben reportar ingresos mundiales; los no residentes solo reportan ingresos de fuente estadounidense.
          </p>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Fechas límite importantes para 2026</h2>
          <div className="bg-slate-50 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead><tr className="bg-brand-dark text-white"><th className="text-left px-5 py-3 font-black">Fecha</th><th className="text-left px-5 py-3 font-black">Qué vence</th></tr></thead>
              <tbody className="text-slate-600">
                {[
                  ['31 enero 2026', 'Empleadores envían W-2; clientes envían 1099'],
                  ['15 abril 2026', 'Plazo para declaración individual (Form 1040 / 1040-NR)'],
                  ['15 junio 2026', 'Plazo automático para no residentes viviendo en el exterior'],
                  ['15 octubre 2026', 'Plazo con extensión (debes solicitarla antes del 15 de abril)'],
                  ['15 abril 2026', 'FBAR — Cuentas bancarias extranjeras superiores a $10,000 (FinCEN 114)'],
                ].map(([date, desc]) => (
                  <tr key={date} className="border-b border-slate-100">
                    <td className="px-5 py-3 font-bold text-brand-dark whitespace-nowrap">{date}</td>
                    <td className="px-5 py-3">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">5 errores comunes que cometen los inmigrantes con sus impuestos</h2>
          {[
            { t: 'No declarar porque "el IRS no me va a encontrar"', d: 'El IRS tiene importantes acuerdos de intercambio de información con otros países y acceso a registros de empleo y banca. No declarar aumenta el riesgo y además renuncia a posibles reembolsos a los que tienes derecho.' },
            { t: 'Confundir el estatus de residente vs. no residente', d: 'El estatus fiscal (residente vs. no residente para el IRS) es independiente del estatus migratorio. Una persona sin papeles puede ser residente fiscal si cumple la Prueba de Presencia Sustancial. Cada uno tiene formularios y reglas distintas.' },
            { t: 'No reportar ingresos en efectivo', d: 'Todos los ingresos — incluyendo propinas, pagos en cash, trabajos informales — deben ser reportados. Si trabajas en construcción, limpieza, restaurantes o similares, el IRS espera que reportes el 100% de lo que ganaste, no solo la parte documentada.' },
            { t: 'No solicitar los créditos disponibles', d: 'Muchos inmigrantes no saben que pueden calificar para el Child Tax Credit, el Earned Income Credit (EITC) o créditos educativos. Estos pueden generar reembolsos significativos incluso si no ganaste mucho.' },
            { t: 'No reportar cuentas bancarias en el exterior (FBAR)', d: 'Si tienes cuentas bancarias fuera de USA con un saldo combinado superior a $10,000 en cualquier momento del año, debes presentar el FBAR (FinCEN 114). La multa por no hacerlo es de $10,000 por violación.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-6 p-5 bg-red-50/50 rounded-2xl border border-red-100">
              <span className="text-red-500 font-black text-lg flex-shrink-0">✗</span>
              <div>
                <p className="font-black text-brand-dark mb-1">Error {i + 1}: {item.t}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Qué formularios necesitas?</h2>
          <div className="space-y-3 mb-8">
            {[
              { form: 'Formulario 1040', desc: 'Declaración individual estándar para residentes y titulares de Green Card' },
              { form: 'Formulario 1040-NR', desc: 'Declaración para extranjeros no residentes (los que no tienen Green Card y no pasan la Prueba de Presencia Sustancial)' },
              { form: 'Formulario W-7', desc: 'Solicitud de ITIN (si no tienes SSN)' },
              { form: 'Schedule C', desc: 'Ingresos de trabajo por cuenta propia (freelancers, contratistas independientes)' },
              { form: 'FinCEN 114 (FBAR)', desc: 'Cuentas bancarias extranjeras con saldo superior a $10,000' },
              { form: 'Formulario 2555', desc: 'Exclusión de Ingresos del Trabajo en el Extranjero (para quienes vivieron fuera de USA parte del año)' },
            ].map((item) => (
              <div key={item.form} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                <span className="font-black text-brand-blue text-sm flex-shrink-0 w-40">{item.form}</span>
                <span className="text-slate-600 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="bg-brand-dark text-white rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-black mb-3">¿Necesitas ayuda con tu declaración de impuestos como inmigrante?</h2>
            <p className="text-white/80 mb-6">En Hispanic Financial, preparamos declaraciones para inmigrantes, no residentes y titulares de ITIN. Hablamos tu idioma y entendemos tu situación. Atendemos en Coral Springs y todo el sur de Florida.</p>
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
            <p className="text-sm text-slate-400">Este artículo es solo para fines informativos y no constituye asesoramiento legal ni fiscal. Las leyes tributarias pueden cambiar; consulta a un profesional calificado para obtener asesoramiento específico a tu situación.</p>
          </div>
        </article>
      </div>
    </>
  );
}
