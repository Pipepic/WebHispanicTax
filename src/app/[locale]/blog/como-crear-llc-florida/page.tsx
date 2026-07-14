import type { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'How to Form an LLC in Florida: Complete Guide for Hispanics (2026)'
      : 'Cómo Crear una LLC en Florida: Guía Completa para Hispanos (2026)',
    description: isEn
      ? 'Step-by-step guide to forming an LLC in Florida in 2026. Requirements, costs, EIN, Operating Agreement, and tips for Hispanic entrepreneurs. Expert advice from Coral Springs.'
      : 'Guía paso a paso para crear una LLC en Florida en 2026. Requisitos, costos, EIN, Acuerdo de Operación y consejos para emprendedores hispanos. Asesoría experta desde Coral Springs.',
    keywords: isEn
      ? ['how to form LLC florida 2026', 'LLC formation guide florida', 'LLC for hispanics florida',
         'EIN LLC florida', 'articles of organization florida', 'operating agreement florida',
         'LLC costs florida 2026', 'start business florida']
      : ['cómo crear LLC florida 2026', 'crear LLC florida guía', 'LLC para hispanos florida',
         'EIN LLC florida', 'artículos organización florida', 'acuerdo operación florida',
         'costos LLC florida 2026', 'abrir empresa estados unidos'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}/blog/como-crear-llc-florida`,
      languages: {
        'es': 'https://hispanic.financial/es/blog/como-crear-llc-florida',
        'en': 'https://hispanic.financial/en/blog/como-crear-llc-florida',
        'x-default': 'https://hispanic.financial/en/blog/como-crear-llc-florida',
      },
    },
    openGraph: {
      title: isEn
        ? 'How to Form an LLC in Florida: Complete Guide for Hispanics 2026'
        : 'Cómo Crear una LLC en Florida: Guía Completa para Hispanos 2026',
      description: isEn
        ? 'Everything you need to know to form your LLC in Florida: requirements, costs, step-by-step process, and tax tips for Hispanic entrepreneurs.'
        : 'Todo lo que necesitas saber para crear tu LLC en Florida: requisitos, costos, proceso paso a paso y consejos fiscales para emprendedores hispanos.',
      url: `https://hispanic.financial/${locale}/blog/como-crear-llc-florida`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'article',
    },
    twitter: {
      title: isEn
        ? 'How to Form an LLC in Florida: Complete Guide for Hispanics (2026)'
        : 'Cómo Crear una LLC en Florida: Guía Completa para Hispanos (2026)',
    },
  };
}

export default async function BlogLLCPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isEn
      ? "How to Form an LLC in Florida: Complete Guide for Hispanics (2026)"
      : "Cómo Crear una LLC en Florida: Guía Completa para Hispanos (2026)",
    "description": isEn
      ? "Step-by-step guide to forming an LLC in Florida in 2026 for Hispanic entrepreneurs."
      : "Guía paso a paso para crear una LLC en Florida en 2026 para emprendedores hispanos.",
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
    "datePublished": "2026-01-15",
    "dateModified": "2026-06-01",
    "url": `https://hispanic.financial/${locale}/blog/como-crear-llc-florida`,
    "image": "https://hispanic.financial/og-image.jpg",
    "inLanguage": isEn ? "en" : "es",
    "about": { "@type": "Thing", "name": "LLC Formation in Florida" },
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
                LLC Guide · January 2026
              </span>
              <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                How to Form an LLC in Florida: Complete Guide for Hispanic Entrepreneurs (2026)
              </h1>
              <p className="text-white/80 text-lg">By Alvaro Patino, Founder & CEO — Hispanic Financial | Coral Springs, FL</p>
            </div>
          </div>

          {/* Article body */}
          <article className="max-w-3xl mx-auto px-6 py-16 prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-8">
              <Link href={`/${locale}/servicios/creacion-de-llc`} className="text-brand-blue hover:underline font-bold">Forming an LLC in Florida</Link> is one of the most important steps a Hispanic entrepreneur can take to protect their personal assets and formalize their business in the United States. In this guide, we explain the complete process step by step, the real costs, and the most common mistakes to avoid.
            </p>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">What is an LLC and Why Should You Form One?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An LLC (Limited Liability Company) is a business entity that combines the simplicity of a sole proprietorship with the asset protection of a corporation. In simple terms: if your business gets sued or has debts, your personal property (house, car, savings) is protected.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              For the Hispanic community in Florida, an LLC also opens doors to business bank accounts, contracts with larger companies, credit in the company name, and a more professional image for your clients.
            </p>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Requirements to Form an LLC in Florida</h2>
            <p className="text-slate-600 leading-relaxed mb-4">To form an LLC in Florida you need:</p>
            <ul className="list-none space-y-3 mb-6">
              {['A unique name for your LLC (must include "LLC" or "Limited Liability Company")', 'At least one registered member (can be a foreign national)', 'A Registered Agent in Florida (a person or company that receives legal notices on behalf of the LLC)', 'Articles of Organization filed with the Florida Division of Corporations', '$125 state registration fee', 'An EIN (Employer Identification Number) from the IRS'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Step-by-Step Process</h2>
            {[
              { n: '1', t: 'Choose and verify the name', d: 'Search the Florida Division of Corporations database (sunbiz.org) to confirm your desired name is available. It must include "LLC" or "L.L.C." and must not be identical or confusingly similar to existing companies.' },
              { n: '2', t: 'Designate a Registered Agent', d: 'You need a person or company with a Florida physical address to receive legal and official notices. This can be you (if you live in Florida), a team member, or a Registered Agent service. We offer this service at Hispanic Financial.' },
              { n: '3', t: 'File the Articles of Organization', d: 'File online at sunbiz.org or by mail. The filing fee is $125. Processing takes approximately 5-7 business days online, or up to 15 business days by mail.' },
              { n: '4', t: 'Get your EIN from the IRS', d: 'The EIN is your LLC\'s tax identification number. You need it to open business bank accounts, hire employees, and file taxes. You can apply directly at irs.gov (free) or we do it for you as part of our service.' },
              { n: '5', t: 'Create an Operating Agreement', d: 'Although not legally required in Florida, an Operating Agreement is essential. It defines ownership percentages, voting rights, profit distribution, and what happens if a member leaves. Without it, you\'re subject to Florida\'s generic LLC laws which may not reflect your actual intentions.' },
              { n: '6', t: 'Open a business bank account', d: 'Never mix personal and business funds. A business bank account in your LLC\'s name protects your liability protection and makes bookkeeping much simpler. You\'ll need your EIN and Articles of Organization to open it.' },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-black text-sm">{step.n}</div>
                <div>
                  <h3 className="font-black text-brand-dark mb-1">{step.t}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Real Costs of Forming an LLC in Florida (2026)</h2>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-slate-200"><th className="text-left py-2 text-brand-dark font-black">Item</th><th className="text-right py-2 text-brand-dark font-black">Cost</th></tr></thead>
                <tbody className="text-slate-600">
                  {[['Articles of Organization (state)', '$125'], ['Annual Report (due each year)', '$138.75'], ['EIN (IRS)', 'Free'], ['Operating Agreement (DIY)', 'Free – $150'], ['Business bank account', '$0 – $25/month'], ['Registered Agent (if using service)', '$49 – $299/year'], ['Professional service (like ours)', 'Contact for quote']].map(([item, cost]) => (
                    <tr key={item} className="border-b border-slate-100"><td className="py-2">{item}</td><td className="py-2 text-right font-medium">{cost}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mb-6">Note: Florida requires filing an Annual Report each year to keep the LLC active. The fee is $138.75 and is due by May 1st each year.</p>

            <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">5 Common Mistakes Hispanic Entrepreneurs Make When Forming an LLC</h2>
            {['Mixing personal and business money: This destroys your liability protection. Always use separate bank accounts.', 'Not having an Operating Agreement: Verbal agreements don\'t hold up. A written Operating Agreement protects you in case of disputes.', 'Forgetting the Annual Report: Florida cancels LLCs that don\'t file their annual report. Set a reminder for May 1st every year.', 'Using the wrong structure: For some businesses, an S-Corp or C-Corp offers better tax advantages than an LLC. Consult an expert before deciding.', 'Not planning taxes from day one: The type of entity, how you pay yourself, and how you structure expenses has a huge tax impact. Plan it from the start.'].map((item, i) => (
              <div key={i} className="flex gap-3 mb-4">
                <span className="text-red-500 font-black flex-shrink-0">✗</span>
                <p className="text-slate-600"><strong>Mistake {i + 1}:</strong> {item}</p>
              </div>
            ))}

            {/* Related Services */}
            <div className="mt-12 mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Related Services</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {([
                  { href: `/${locale}/servicios/creacion-de-llc`, icon: '🏛️', title: 'LLC Formation', desc: 'Full Florida LLC setup: Articles, EIN, Operating Agreement, and bank account.' },
                  { href: `/${locale}/servicios/contabilidad`, icon: '📊', title: 'Accounting & QuickBooks', desc: 'Monthly bookkeeping and financial reporting once your business is up and running.' },
                  { href: `/${locale}/servicios/proteccion-patrimonial`, icon: '🛡️', title: 'Wealth Protection', desc: 'Protect your assets with LLC, Trust, and Holding structures.' },
                ]).map(s => (
                  <Link key={s.href} href={s.href} className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all group">
                    <span className="text-xl">{s.icon}</span>
                    <span className="font-black text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{s.title} →</span>
                    <span className="text-xs text-slate-500 leading-relaxed">{s.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-brand-dark text-white rounded-2xl p-8 mt-12">
              <h2 className="text-2xl font-black mb-3">Need help forming your LLC in Florida?</h2>
              <p className="text-white/80 mb-6">At Hispanic Financial, we handle the complete LLC formation process for you — in English or Spanish. From the Articles of Organization to the business bank account, we guide you every step of the way.</p>
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
              <p className="text-sm text-slate-400">This article is for informational purposes only and does not constitute legal or tax advice. Consult a qualified professional for advice specific to your situation.</p>
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
        {/* Header */}
        <div className="premium-gradient text-white pt-28 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
              ← Volver al Blog
            </Link>
            <span className="inline-block bg-white/10 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Guía de LLC · Enero 2026
            </span>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              Cómo Crear una LLC en Florida: Guía Completa para Emprendedores Hispanos (2026)
            </h1>
            <p className="text-white/80 text-lg">Por Alvaro Patino, Founder & CEO — Hispanic Financial | Coral Springs, FL</p>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            <Link href={`/${locale}/servicios/creacion-de-llc`} className="text-brand-blue hover:underline font-bold">Crear una LLC en Florida</Link> es uno de los pasos más importantes que puede dar un emprendedor hispano para proteger su patrimonio personal y formalizar su negocio en Estados Unidos. En esta guía, te explicamos el proceso completo paso a paso, los costos reales y los errores más comunes que debes evitar.
          </p>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">¿Qué es una LLC y por qué deberías crear una?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Una LLC (Limited Liability Company o Compañía de Responsabilidad Limitada) es una entidad empresarial que combina la simplicidad de un negocio unipersonal con la protección patrimonial de una corporación. En palabras simples: si tu negocio enfrenta una demanda o tiene deudas, tu patrimonio personal (casa, carro, ahorros) está protegido.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Para la comunidad hispana en Florida, una LLC también abre puertas a cuentas bancarias empresariales, contratos con empresas más grandes, crédito a nombre de la empresa y una imagen más profesional ante tus clientes.
          </p>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Requisitos para Crear una LLC en Florida</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Para crear una LLC en Florida necesitas:</p>
          <ul className="list-none space-y-3 mb-6">
            {['Un nombre único para tu LLC (debe incluir "LLC" o "Limited Liability Company")', 'Al menos un miembro registrado (puede ser un extranjero no residente)', 'Un Agente Registrado (Registered Agent) en Florida', 'Artículos de Organización presentados ante la División de Corporaciones de Florida', '$125 dólares de tarifa estatal de registro', 'Un EIN (Número de Identificación del Empleador) del IRS'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Proceso Paso a Paso para Crear tu LLC en Florida</h2>
          {[
            { n: '1', t: 'Elige y verifica el nombre', d: 'Busca en la base de datos de la División de Corporaciones de Florida (sunbiz.org) que el nombre que quieres esté disponible. Debe incluir "LLC" o "L.L.C." y no puede ser igual ni confusamente similar a empresas existentes.' },
            { n: '2', t: 'Designa un Agente Registrado (Registered Agent)', d: 'Necesitas una persona o empresa con dirección física en Florida que reciba notificaciones legales y oficiales en nombre de tu LLC. Puede ser tú mismo (si vives en Florida), alguien de tu equipo, o un servicio de Registered Agent. En Hispanic Financial ofrecemos este servicio.' },
            { n: '3', t: 'Presenta los Artículos de Organización', d: 'Radica en línea en sunbiz.org o por correo. La tarifa es de $125. El procesamiento toma aproximadamente 5-7 días hábiles en línea, o hasta 15 días por correo.' },
            { n: '4', t: 'Obtén tu EIN del IRS', d: 'El EIN es el número de identificación fiscal de tu LLC. Lo necesitas para abrir cuentas bancarias empresariales, contratar empleados y presentar impuestos. Puedes solicitarlo directamente en irs.gov (gratis) o nosotros lo tramitamos por ti como parte de nuestro servicio.' },
            { n: '5', t: 'Crea el Acuerdo de Operación (Operating Agreement)', d: 'Aunque no es obligatorio legalmente en Florida, el Operating Agreement es fundamental. Define los porcentajes de propiedad, derechos de voto, distribución de ganancias y qué pasa si un miembro se retira. Sin él, quedas sujeto a las leyes genéricas de LLC de Florida, que pueden no reflejar lo que acordaste verbalmente.' },
            { n: '6', t: 'Abre una cuenta bancaria empresarial', d: 'Nunca mezcles dinero personal con el del negocio. Una cuenta bancaria empresarial a nombre de tu LLC protege tu responsabilidad limitada y simplifica enormemente la contabilidad. Necesitas tu EIN y los Artículos de Organización para abrirla.' },
          ].map((step) => (
            <div key={step.n} className="flex gap-4 mb-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-black text-sm">{step.n}</div>
              <div>
                <h3 className="font-black text-brand-dark mb-1">{step.t}</h3>
                <p className="text-slate-600 leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">Costos Reales de Crear una LLC en Florida (2026)</h2>
          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-200"><th className="text-left py-2 text-brand-dark font-black">Concepto</th><th className="text-right py-2 text-brand-dark font-black">Costo</th></tr></thead>
              <tbody className="text-slate-600">
                {[['Artículos de Organización (estatal)', '$125'], ['Reporte Anual (cada año)', '$138.75'], ['EIN (IRS)', 'Gratis'], ['Operating Agreement (por tu cuenta)', 'Gratis – $150'], ['Cuenta bancaria empresarial', '$0 – $25/mes'], ['Agente Registrado (si usas un servicio)', '$49 – $299/año'], ['Servicio profesional (como el nuestro)', 'Consulta para cotización']].map(([item, cost]) => (
                  <tr key={item} className="border-b border-slate-100"><td className="py-2">{item}</td><td className="py-2 text-right font-medium">{cost}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-sm mb-6">Nota: Florida requiere presentar un Reporte Anual (Annual Report) cada año para mantener la LLC activa. La tarifa es de $138.75 y vence el 1 de mayo de cada año.</p>

          <h2 className="text-2xl font-black text-brand-dark mt-12 mb-4">5 Errores Comunes que Cometen los Hispanos al Crear una LLC</h2>
          {['Mezclar dinero personal con el del negocio: Esto destruye tu protección de responsabilidad. Siempre usa cuentas separadas.', 'No tener un Operating Agreement: Los acuerdos verbales no tienen valor legal. Un Operating Agreement escrito te protege en caso de disputas entre socios.', 'Olvidar el Reporte Anual: Florida cancela las LLCs que no presentan su reporte anual. Pon un recordatorio para el 1 de mayo cada año.', 'Elegir la estructura equivocada: Para algunos negocios, una S-Corp o C-Corp ofrece mejores ventajas fiscales que una LLC. Consulta a un experto antes de decidir.', 'No planificar los impuestos desde el primer día: El tipo de entidad, cómo te pagas y cómo estructuras los gastos tiene un impacto fiscal enorme. Planealo desde el inicio.'].map((item, i) => (
            <div key={i} className="flex gap-3 mb-4">
              <span className="text-red-500 font-black flex-shrink-0">✗</span>
              <p className="text-slate-600"><strong>Error {i + 1}:</strong> {item}</p>
            </div>
          ))}

          {/* Servicios Relacionados */}
          <div className="mt-12 mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-4">Servicios Relacionados</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {([
                { href: `/${locale}/servicios/creacion-de-llc`, icon: '🏛️', title: 'Creación de LLC', desc: 'Constitución completa de LLC en Florida: Artículos, EIN, Operating Agreement y cuenta bancaria.' },
                { href: `/${locale}/servicios/contabilidad`, icon: '📊', title: 'Contabilidad y QuickBooks', desc: 'Contabilidad mensual e informes financieros para tu negocio una vez que esté en marcha.' },
                { href: `/${locale}/servicios/proteccion-patrimonial`, icon: '🛡️', title: 'Protección Patrimonial', desc: 'Protege tus activos con estructuras LLC, Trust y Holding.' },
              ]).map(s => (
                <Link key={s.href} href={s.href} className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all group">
                  <span className="text-xl">{s.icon}</span>
                  <span className="font-black text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{s.title} →</span>
                  <span className="text-xs text-slate-500 leading-relaxed">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-brand-dark text-white rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-black mb-3">¿Necesitas ayuda para crear tu LLC en Florida?</h2>
            <p className="text-white/80 mb-6">En Hispanic Financial, manejamos el proceso completo de creación de tu LLC, completamente en español. Desde los Artículos de Organización hasta la apertura de tu cuenta bancaria empresarial, te acompañamos en cada paso.</p>
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
            <p className="text-sm text-slate-400">Este artículo es solo para fines informativos y no constituye asesoramiento legal ni fiscal. Consulta a un profesional calificado para obtener asesoramiento específico a tu situación.</p>
          </div>
        </article>
      </div>
    </>
  );
}
