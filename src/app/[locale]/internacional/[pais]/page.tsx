import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ── Country data ───────────────────────────────────────────────────────────────
const COUNTRIES = {
  colombia: {
    nameEs: 'Colombia', nameEn: 'Colombia',
    flag: '🇨🇴',
    titleEs: 'Crear LLC en USA desde Colombia | Hispanic Financial',
    titleEn: 'Open a US LLC from Colombia | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde Colombia — 100% en remoto. LLC, ITIN, cuenta bancaria y declaración de impuestos USA sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Colombia — 100% remotely. LLC, ITIN, bank account, and US tax filing without traveling. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde Colombia', 'abrir empresa en estados unidos desde Colombia', 'LLC colombiano en USA', 'ITIN colombiano sin SSN', 'declarar impuestos USA colombiano no residente', 'cuenta bancaria LLC Colombia'],
    kwEn: ['open LLC USA from Colombia', 'US LLC Colombian', 'form US company from Colombia', 'ITIN Colombia no SSN', 'US tax return Colombian non-resident'],
    heroEs: 'Como colombiano, puedes ser dueño de una LLC en Estados Unidos sin necesitar visa ni residencia. Gestionamos todo el proceso de forma 100% remota: desde la creación de tu empresa hasta el ITIN, la cuenta bancaria y tus declaraciones de impuestos anuales.',
    heroEn: 'As a Colombian, you can own a US LLC without needing a visa or US residency. We manage the entire process 100% remotely: from company formation to your ITIN, bank account, and annual tax filings.',
    whatsappText: 'Hola, soy de Colombia y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un colombiano puede ser dueño de una LLC en EE.UU.?', a: 'Sí. La ley estadounidense permite que extranjeros de cualquier país, incluyendo Colombia, sean miembros únicos o socios de una LLC en Estados Unidos. No necesitas visa, green card ni residencia para constituir y operar una LLC en USA.' },
      { q: '¿Necesito viajar a Estados Unidos para crear mi LLC?', a: 'No. El proceso es 100% remoto. Te pedimos documentos de identidad vigentes, tomamos tus datos y nosotros gestionamos los Artículos de Organización ante el estado de Florida, el EIN ante el IRS y el Acuerdo de Operación — todo sin que salgas de Colombia.' },
      { q: '¿Puedo abrir una cuenta bancaria en USA desde Colombia?', a: 'Sí. Con tu LLC constituida y tu EIN, puedes abrir cuentas en bancos de EE.UU. que atienden no residentes, o usar servicios como Mercury, Relay o Wise Business. Te orientamos sobre cuál es la mejor opción según tu situación.' },
      { q: '¿Qué impuestos paga un colombiano con LLC en USA?', a: 'Una LLC de miembro único es fiscalmente transparente: los ingresos se reportan en tu declaración personal (Form 1040-NR). Si tu LLC opera únicamente fuera de EE.UU. o tiene clientes extranjeros, puede que no generes impuestos en USA. Te asesoramos sobre tu situación específica.' },
      { q: '¿Cuánto cuesta y cuánto tarda?', a: 'La constitución de la LLC tarda 5–7 días hábiles. Los costos incluyen la tarifa estatal de Florida (~$125) más nuestros honorarios de servicio. Contáctanos por WhatsApp para un presupuesto exacto según tus necesidades.' },
    ],
    faqsEn: [
      { q: 'Can a Colombian own a US LLC?', a: 'Yes. US law allows foreigners from any country, including Colombia, to be sole members or partners in a US LLC. You don\'t need a visa, green card, or US residency to form and operate an LLC in the United States.' },
      { q: 'Do I need to travel to the US to form my LLC?', a: 'No. The process is 100% remote. We need your valid ID documents, collect your information, and file the Articles of Organization with Florida, the EIN with the IRS, and the Operating Agreement — all without you leaving Colombia.' },
      { q: 'Can I open a US bank account from Colombia?', a: 'Yes. With your LLC and EIN, you can open accounts at US banks that serve non-residents, or use services like Mercury, Relay, or Wise Business. We guide you on the best option for your situation.' },
      { q: 'What taxes does a Colombian with a US LLC pay?', a: 'A single-member LLC is tax-transparent: income is reported on your personal return (Form 1040-NR). If your LLC operates exclusively outside the US or has foreign clients, you may not owe US taxes. We advise on your specific situation.' },
      { q: 'How much does it cost and how long does it take?', a: 'LLC formation takes 5–7 business days. Costs include the Florida state fee (~$125) plus our service fee. Contact us on WhatsApp for an exact quote based on your needs.' },
    ],
  },
  mexico: {
    nameEs: 'México', nameEn: 'Mexico',
    flag: '🇲🇽',
    titleEs: 'Crear LLC en USA desde México | Hispanic Financial',
    titleEn: 'Open a US LLC from Mexico | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde México — 100% en remoto. LLC, ITIN, cuenta bancaria y declaración de impuestos USA sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Mexico — 100% remotely. LLC, ITIN, bank account, and US tax filing without traveling. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde México', 'abrir empresa en estados unidos desde México', 'LLC mexicano en USA', 'ITIN mexicano sin SSN', 'declarar impuestos USA mexicano no residente', 'empresa usa desde mexico'],
    kwEn: ['open LLC USA from Mexico', 'US LLC Mexican non-resident', 'form US company from Mexico', 'ITIN Mexico', 'US tax return Mexican non-resident'],
    heroEs: 'Como mexicano, puedes ser dueño de una LLC en Estados Unidos sin necesitar visa ni residencia. Gestionamos todo el proceso de forma 100% remota: desde la creación de tu empresa hasta el ITIN, la cuenta bancaria y tus declaraciones de impuestos anuales.',
    heroEn: 'As a Mexican national, you can own a US LLC without needing a visa or US residency. We manage the entire process 100% remotely: from company formation to your ITIN, bank account, and annual tax filings.',
    whatsappText: 'Hola, soy de México y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un mexicano puede ser dueño de una LLC en EE.UU.?', a: 'Sí. La ley estadounidense permite que extranjeros, incluyendo ciudadanos mexicanos, sean propietarios de una LLC sin necesitar visa, green card ni residencia en EE.UU.' },
      { q: '¿Necesito viajar a Estados Unidos para crear mi LLC?', a: 'No. Todo el proceso es remoto. Nos envías tus documentos de identidad, y nosotros nos encargamos de los Artículos de Organización ante Florida, el EIN ante el IRS y el Acuerdo de Operación.' },
      { q: '¿Mi LLC en USA afecta mis obligaciones fiscales en México?', a: 'Posiblemente sí. México exige declarar ingresos de fuentes extranjeras. Te recomendamos consultar también con un contador en México para cumplir con el SAT. Nosotros nos encargamos del lado estadounidense de tus obligaciones.' },
      { q: '¿Puedo usar mi LLC para vender en Amazon o Shopify desde México?', a: 'Absolutamente. Muchos emprendedores mexicanos usan una LLC en USA para operar tiendas en Amazon USA, Shopify, o servicios digitales, lo que les da acceso a procesadores de pago como Stripe y PayPal para negocios en EE.UU.' },
      { q: '¿Cuánto cuesta y cuánto tarda?', a: 'La LLC se constituye en 5–7 días hábiles. Los costos incluyen la tarifa de Florida (~$125) más nuestros honorarios. Escríbenos por WhatsApp para un presupuesto personalizado.' },
    ],
    faqsEn: [
      { q: 'Can a Mexican citizen own a US LLC?', a: 'Yes. US law allows foreigners, including Mexican citizens, to own an LLC without needing a visa, green card, or US residency.' },
      { q: 'Do I need to travel to the US to form my LLC?', a: 'No. The entire process is remote. You send us your ID documents, and we handle the Articles of Organization in Florida, the EIN with the IRS, and the Operating Agreement.' },
      { q: 'Does my US LLC affect my tax obligations in Mexico?', a: 'Possibly. Mexico requires declaring income from foreign sources. We recommend consulting a Mexican accountant for SAT compliance. We handle the US side of your obligations.' },
      { q: 'Can I use my LLC to sell on Amazon or Shopify from Mexico?', a: 'Absolutely. Many Mexican entrepreneurs use a US LLC to operate Amazon US stores, Shopify, or digital services, giving them access to US payment processors like Stripe and PayPal.' },
      { q: 'How much does it cost and how long does it take?', a: 'LLC formation takes 5–7 business days. Costs include the Florida state fee (~$125) plus our service fee. Message us on WhatsApp for a personalized quote.' },
    ],
  },
  venezuela: {
    nameEs: 'Venezuela', nameEn: 'Venezuela',
    flag: '🇻🇪',
    titleEs: 'Crear LLC en USA desde Venezuela | Hispanic Financial',
    titleEn: 'Open a US LLC from Venezuela | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde Venezuela — 100% en remoto. LLC, ITIN, cuenta bancaria y declaración de impuestos USA. Sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Venezuela — 100% remotely. LLC, ITIN, bank account, and US tax filing. No travel required. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde Venezuela', 'abrir empresa en estados unidos venezolano', 'LLC venezolano en USA', 'ITIN venezolano sin SSN', 'empresa USA venezolano exiliado', 'cuenta bancaria USA venezolano'],
    kwEn: ['open LLC USA from Venezuela', 'US LLC Venezuelan non-resident', 'form US company from Venezuela', 'ITIN Venezuela'],
    heroEs: 'Los venezolanos pueden constituir una LLC en Estados Unidos sin importar dónde vivan. Gestionamos todo de forma 100% remota: empresa, ITIN, cuenta bancaria y cumplimiento fiscal en EE.UU. — para venezolanos en Venezuela, Colombia, España o cualquier otro país.',
    heroEn: 'Venezuelans can form a US LLC regardless of where they live. We manage everything 100% remotely: company formation, ITIN, bank account, and US tax compliance — for Venezuelans in Venezuela, Colombia, Spain, or anywhere in the world.',
    whatsappText: 'Hola, soy venezolano y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un venezolano puede abrir una LLC en USA?', a: 'Sí. No importa si estás en Venezuela, Colombia, España o cualquier otro país — cualquier extranjero puede ser propietario de una LLC en Estados Unidos sin necesitar visa ni residencia.' },
      { q: '¿Tienen experiencia con venezolanos en el exterior?', a: 'Sí. Atendemos a una gran comunidad venezolana — tanto a quienes están en EE.UU. como a los que están en Colombia, Ecuador, España y otros países. Nuestro equipo bilingüe entiende las necesidades específicas de la diáspora venezolana.' },
      { q: '¿Puedo hacer todo por WhatsApp?', a: 'Absolutamente. Gestionamos todo el proceso por WhatsApp, correo electrónico o videollamada — sin necesidad de venir a ninguna oficina. Subimos y enviamos documentos de forma digital.' },
      { q: '¿Necesito un ITIN para mi LLC?', a: 'Depende. Si eres el único miembro de la LLC y no tienes empleados en EE.UU., puedes operar con el EIN de la empresa. Sin embargo, si debes presentar una declaración de impuestos personal en EE.UU. (Form 1040-NR), necesitarás un ITIN. Te orientamos según tu situación.' },
      { q: '¿Cuánto tarda la constitución?', a: 'Normalmente 5–7 días hábiles para la LLC en Florida. El EIN puede tardar 1–4 semanas adicionales si se solicita por fax. Contáctanos para una estimación según tu situación actual.' },
    ],
    faqsEn: [
      { q: 'Can a Venezuelan open a US LLC?', a: 'Yes. It doesn\'t matter if you\'re in Venezuela, Colombia, Spain, or anywhere else — any foreigner can own a US LLC without needing a visa or US residency.' },
      { q: 'Do you have experience with Venezuelans abroad?', a: 'Yes. We serve a large Venezuelan community — both those in the US and those in Colombia, Ecuador, Spain, and other countries. Our bilingual team understands the specific needs of the Venezuelan diaspora.' },
      { q: 'Can I do everything via WhatsApp?', a: 'Absolutely. We manage the entire process via WhatsApp, email, or video call — no need to visit any office. We upload and send documents digitally.' },
      { q: 'Do I need an ITIN for my LLC?', a: 'It depends. If you\'re the sole member and have no US employees, you can operate with the company\'s EIN. However, if you must file a US personal tax return (Form 1040-NR), you\'ll need an ITIN. We advise based on your situation.' },
      { q: 'How long does formation take?', a: 'Typically 5–7 business days for the Florida LLC. The EIN may take an additional 1–4 weeks if requested by fax. Contact us for an estimate based on your current situation.' },
    ],
  },
  argentina: {
    nameEs: 'Argentina', nameEn: 'Argentina',
    flag: '🇦🇷',
    titleEs: 'Crear LLC en USA desde Argentina | Hispanic Financial',
    titleEn: 'Open a US LLC from Argentina | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde Argentina — 100% en remoto. LLC, ITIN, cuenta bancaria en USD y declaración de impuestos USA. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Argentina — 100% remotely. LLC, ITIN, USD bank account, and US tax filing. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde Argentina', 'abrir empresa en estados unidos argentino', 'LLC argentino en USA', 'cuenta bancaria USD argentino LLC', 'ITIN argentino no residente USA', 'dolarizar ingresos LLC Argentina'],
    kwEn: ['open LLC USA from Argentina', 'US LLC Argentine non-resident', 'form US company from Argentina', 'USD bank account Argentina LLC'],
    heroEs: 'Muchos argentinos abren una LLC en Estados Unidos para facturar en dólares, acceder a cuentas bancarias en USD y diversificar sus ingresos. Nosotros gestionamos todo el proceso de forma 100% remota, con expertos que entienden la situación económica argentina.',
    heroEn: 'Many Argentines open a US LLC to invoice in dollars, access USD bank accounts, and diversify their income. We manage the entire process 100% remotely, with experts who understand the Argentine economic context.',
    whatsappText: 'Hola, soy de Argentina y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Por qué los argentinos abren LLCs en USA?', a: 'Las razones principales son: facturar en dólares directamente desde clientes del exterior, tener una cuenta bancaria en USD (protegida del corralito y de la devaluación), acceder al mercado estadounidense y a plataformas como Stripe y PayPal Business, y diversificar activos fuera de Argentina.' },
      { q: '¿Necesito un ITIN o SSN?', a: 'No para abrir la LLC — solo necesitas el EIN de la empresa. Sin embargo, si debes presentar una declaración de impuestos personal en EE.UU. (porque tienes ingresos de fuente estadounidense), necesitarás un ITIN. Te orientamos según tu situación.' },
      { q: '¿Debo declarar mi LLC en AFIP?', a: 'Depende de tu situación fiscal en Argentina. En general, los residentes argentinos deben declarar activos y participaciones en el exterior. Te recomendamos consultar también con un contador en Argentina para el cumplimiento con AFIP. Nosotros nos ocupamos del lado de EE.UU.' },
      { q: '¿Puedo abrir cuenta bancaria en USA siendo argentino no residente?', a: 'Sí. Con tu LLC y EIN, puedes abrir cuentas en Mercury, Relay, Wise Business u otros bancos orientados a emprendedores internacionales. Te guiamos en el proceso.' },
      { q: '¿Cuánto tarda y cuánto cuesta?', a: 'La LLC en Florida se constituye en 5–7 días hábiles. Los costos incluyen la tarifa estatal (~$125) más nuestros honorarios de servicio. Contáctanos por WhatsApp para un presupuesto detallado.' },
    ],
    faqsEn: [
      { q: 'Why do Argentines open US LLCs?', a: 'Main reasons: invoice in dollars directly from international clients, have a USD bank account (protected from local economic instability), access the US market and platforms like Stripe and PayPal Business, and diversify assets outside Argentina.' },
      { q: 'Do I need an ITIN or SSN?', a: 'Not to open the LLC — you only need the company EIN. However, if you need to file a US personal tax return (because you have US-source income), you\'ll need an ITIN. We advise based on your situation.' },
      { q: 'Must I declare my US LLC to AFIP?', a: 'It depends on your Argentine tax situation. Generally, Argentine residents must declare foreign assets and interests. We recommend consulting an Argentine accountant for AFIP compliance. We handle the US side.' },
      { q: 'Can I open a US bank account as an Argentine non-resident?', a: 'Yes. With your LLC and EIN, you can open accounts at Mercury, Relay, Wise Business, or other banks for international entrepreneurs. We guide you through the process.' },
      { q: 'How long does it take and how much does it cost?', a: 'Florida LLC formation takes 5–7 business days. Costs include the state fee (~$125) plus our service fee. Contact us on WhatsApp for a detailed quote.' },
    ],
  },
  peru: {
    nameEs: 'Perú', nameEn: 'Peru',
    flag: '🇵🇪',
    titleEs: 'Crear LLC en USA desde Perú | Hispanic Financial',
    titleEn: 'Open a US LLC from Peru | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde Perú — 100% en remoto. LLC, ITIN, cuenta bancaria y declaración de impuestos USA sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Peru — 100% remotely. LLC, ITIN, bank account, and US tax filing without traveling. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde Perú', 'abrir empresa en estados unidos peruano', 'LLC peruano en USA', 'ITIN peruano no residente', 'cuenta bancaria USA desde Perú'],
    kwEn: ['open LLC USA from Peru', 'US LLC Peruvian non-resident', 'form US company from Peru', 'ITIN Peru'],
    heroEs: 'Peruanos emprendedores abren LLCs en EE.UU. para expandir sus negocios al mercado americano, acceder a cuentas bancarias en dólares y facturar internacionalmente. Todo el proceso 100% remoto, desde Perú.',
    heroEn: 'Peruvian entrepreneurs open US LLCs to expand their businesses to the American market, access dollar bank accounts, and invoice internationally. The entire process is 100% remote, from Peru.',
    whatsappText: 'Hola, soy de Perú y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un peruano puede abrir una LLC en EE.UU.?', a: 'Sí. Cualquier ciudadano peruano puede ser propietario de una LLC en Estados Unidos sin necesitar visa, green card ni residencia en EE.UU.' },
      { q: '¿Necesito viajar a EE.UU. para el proceso?', a: 'No. Todo es 100% remoto. Nos envías tus documentos de identidad y nosotros gestionamos la constitución, el EIN y el Acuerdo de Operación sin que salgas del Perú.' },
      { q: '¿Qué ventajas tiene una LLC en USA para un emprendedor peruano?', a: 'Acceso al sistema financiero en USD, posibilidad de cobrar a clientes internacionales con Stripe/PayPal Business, presencia legal en el mercado más grande del mundo, y potencial optimización fiscal con un asesor apropiado.' },
      { q: '¿Debo declarar la LLC en SUNAT?', a: 'Sí, en general los residentes peruanos deben declarar participaciones en empresas extranjeras ante SUNAT. Consulta con un contador en Perú para el cumplimiento local. Nosotros manejamos las obligaciones ante el IRS.' },
      { q: '¿Cuánto cuesta y cuánto tarda?', a: '5–7 días hábiles para la LLC. Costos: tarifa de Florida (~$125) más honorarios de servicio. Contáctanos por WhatsApp para un presupuesto.' },
    ],
    faqsEn: [
      { q: 'Can a Peruvian citizen open a US LLC?', a: 'Yes. Any Peruvian citizen can own a US LLC without needing a visa, green card, or US residency.' },
      { q: 'Do I need to travel to the US?', a: 'No. Everything is 100% remote. Send us your ID documents and we handle the formation, EIN, and Operating Agreement without you leaving Peru.' },
      { q: 'What are the benefits of a US LLC for a Peruvian entrepreneur?', a: 'Access to the USD financial system, ability to receive international payments via Stripe/PayPal Business, legal presence in the world\'s largest market, and potential tax optimization with proper advice.' },
      { q: 'Must I declare the LLC to SUNAT?', a: 'Yes, Peruvian residents generally must declare foreign company interests to SUNAT. Consult a Peruvian accountant for local compliance. We handle IRS obligations.' },
      { q: 'How much does it cost and how long?', a: '5–7 business days for the LLC. Costs: Florida state fee (~$125) plus service fee. Contact us on WhatsApp for a quote.' },
    ],
  },
  chile: {
    nameEs: 'Chile', nameEn: 'Chile',
    flag: '🇨🇱',
    titleEs: 'Crear LLC en USA desde Chile | Hispanic Financial',
    titleEn: 'Open a US LLC from Chile | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde Chile — 100% en remoto. LLC, ITIN, cuenta bancaria y declaración de impuestos USA sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Chile — 100% remotely. LLC, ITIN, bank account, and US tax filing without traveling. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde Chile', 'abrir empresa en estados unidos chileno', 'LLC chileno en USA', 'ITIN chileno no residente USA', 'empresa USA desde Chile'],
    kwEn: ['open LLC USA from Chile', 'US LLC Chilean non-resident', 'form US company from Chile', 'ITIN Chile no SSN'],
    heroEs: 'Emprendedores y profesionales chilenos abren LLCs en Estados Unidos para acceder al mercado americano, cobrar en dólares y diversificar sus negocios. Gestionamos todo 100% en remoto desde Chile.',
    heroEn: 'Chilean entrepreneurs and professionals open US LLCs to access the American market, collect payments in dollars, and diversify their businesses. We manage everything 100% remotely from Chile.',
    whatsappText: 'Hola, soy de Chile y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un chileno puede ser dueño de una LLC en USA?', a: 'Sí. La ley estadounidense no restringe la propiedad de LLCs por extranjeros. Los chilenos pueden ser propietarios únicos o socios sin necesitar visa ni residencia.' },
      { q: '¿El tratado tributario Chile-USA me afecta?', a: 'Chile y EE.UU. tienen un tratado de doble tributación que puede reducir las retenciones sobre dividendos e intereses. Te asesoramos sobre cómo aprovechar el tratado para tu LLC. También te recomendamos consultar con un contador en Chile.' },
      { q: '¿Puedo usar la LLC para exportar servicios desde Chile?', a: 'Absolutamente. Muchos chilenos usan una LLC en USA para facturar servicios de tecnología, consultoría y marketing a clientes en EE.UU. y el mundo, accediendo así a procesadores de pago internacionales.' },
      { q: '¿Cuánto tiempo tarda y cuál es el costo?', a: '5–7 días hábiles para la LLC en Florida. Los costos incluyen la tarifa estatal (~$125) más nuestros honorarios. Escríbenos por WhatsApp para un presupuesto personalizado.' },
    ],
    faqsEn: [
      { q: 'Can a Chilean citizen own a US LLC?', a: 'Yes. US law does not restrict LLC ownership by foreigners. Chileans can be sole owners or partners without needing a visa or residency.' },
      { q: 'Does the Chile-US tax treaty affect me?', a: 'Chile and the US have a double taxation treaty that can reduce withholdings on dividends and interest. We advise on how to use the treaty for your LLC. We also recommend consulting a Chilean accountant.' },
      { q: 'Can I use the LLC to export services from Chile?', a: 'Absolutely. Many Chileans use a US LLC to invoice tech, consulting, and marketing services to US and global clients, accessing international payment processors.' },
      { q: 'How long does it take and what does it cost?', a: '5–7 business days for the Florida LLC. Costs include the state fee (~$125) plus our fee. Message us on WhatsApp for a personalized quote.' },
    ],
  },
  ecuador: {
    nameEs: 'Ecuador', nameEn: 'Ecuador',
    flag: '🇪🇨',
    titleEs: 'Crear LLC en USA desde Ecuador | Hispanic Financial',
    titleEn: 'Open a US LLC from Ecuador | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde Ecuador — 100% en remoto. LLC, ITIN, cuenta bancaria y declaración de impuestos USA sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Ecuador — 100% remotely. LLC, ITIN, bank account, and US tax filing without traveling. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde Ecuador', 'abrir empresa en estados unidos ecuatoriano', 'LLC ecuatoriano en USA', 'ITIN ecuatoriano no residente USA', 'empresa USA desde Ecuador'],
    kwEn: ['open LLC USA from Ecuador', 'US LLC Ecuadorian non-resident', 'form US company from Ecuador', 'ITIN Ecuador'],
    heroEs: 'Ecuador ya usa el dólar — abrir una LLC en EE.UU. es el siguiente paso lógico para emprendedores ecuatorianos que quieren acceder al mercado americano, cobrar internacionalmente y proteger sus activos. Todo en remoto.',
    heroEn: 'Ecuador already uses the dollar — opening a US LLC is the logical next step for Ecuadorian entrepreneurs who want to access the American market, collect international payments, and protect their assets. All remotely.',
    whatsappText: 'Hola, soy de Ecuador y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un ecuatoriano puede tener una LLC en USA?', a: 'Sí. Los ciudadanos ecuatorianos pueden ser propietarios de una LLC en Estados Unidos sin necesitar visa ni residencia. Ecuador no restringe esto y EE.UU. tampoco.' },
      { q: '¿Qué ventajas tiene para un ecuatoriano tener LLC en USA?', a: 'Acceso a plataformas como Amazon, Stripe y PayPal Business; cuenta bancaria en dólares en un banco estadounidense; mayor credibilidad ante clientes internacionales; y separación legal entre tus activos personales y los del negocio.' },
      { q: '¿Puedo hacer todo desde Ecuador sin viajar?', a: 'Sí, 100% remoto. Nos envías tus documentos de identidad por correo electrónico o WhatsApp y nosotros gestionamos todo el proceso de constitución, incluyendo el EIN ante el IRS.' },
      { q: '¿Cuánto cuesta?', a: 'Los costos incluyen la tarifa del estado de Florida (~$125) más nuestros honorarios de servicio. Contáctanos por WhatsApp para un presupuesto exacto.' },
    ],
    faqsEn: [
      { q: 'Can an Ecuadorian own a US LLC?', a: 'Yes. Ecuadorian citizens can own a US LLC without needing a visa or US residency. Ecuador doesn\'t restrict this, nor does the US.' },
      { q: 'What are the advantages for an Ecuadorian to have a US LLC?', a: 'Access to platforms like Amazon, Stripe, and PayPal Business; a dollar bank account at a US bank; greater credibility with international clients; and legal separation between personal and business assets.' },
      { q: 'Can I do everything from Ecuador without traveling?', a: 'Yes, 100% remote. Send us your ID documents by email or WhatsApp and we handle the entire formation process, including the EIN with the IRS.' },
      { q: 'How much does it cost?', a: 'Costs include the Florida state fee (~$125) plus our service fee. Contact us on WhatsApp for an exact quote.' },
    ],
  },
  espana: {
    nameEs: 'España', nameEn: 'Spain',
    flag: '🇪🇸',
    titleEs: 'Crear LLC en USA desde España | Hispanic Financial',
    titleEn: 'Open a US LLC from Spain | Hispanic Financial',
    descEs: 'Abre tu empresa en Estados Unidos desde España — 100% en remoto. LLC, ITIN, cuenta bancaria en USD y declaración de impuestos USA sin viajar. Expertos bilingües. (954) 464-5458.',
    descEn: 'Open your US company from Spain — 100% remotely. LLC, ITIN, USD bank account, and US tax filing without traveling. Bilingual experts. (954) 464-5458.',
    kwEs: ['crear LLC en USA desde España', 'abrir empresa en estados unidos español', 'LLC español en USA', 'ITIN español no residente USA', 'empresa USA desde España', 'LLC USA autónomo español'],
    kwEn: ['open LLC USA from Spain', 'US LLC Spanish non-resident', 'form US company from Spain', 'ITIN Spain no SSN', 'US LLC from Europe Spanish'],
    heroEs: 'Autónomos, startups y empresas españolas abren LLCs en EE.UU. para acceder al mayor mercado del mundo, cobrar en dólares y expandir sus operaciones internacionales. Proceso 100% remoto, sin salir de España.',
    heroEn: 'Spanish freelancers, startups, and companies open US LLCs to access the world\'s largest market, collect payments in dollars, and expand international operations. 100% remote process, without leaving Spain.',
    whatsappText: 'Hola, soy de España y quiero abrir una LLC en USA. ¿Me pueden ayudar?',
    faqsEs: [
      { q: '¿Un ciudadano español puede abrir una LLC en EE.UU.?', a: 'Sí. Los ciudadanos de la Unión Europea, incluyendo España, pueden ser propietarios de una LLC en Estados Unidos. No se requiere visa, residencia ni número de seguridad social americano.' },
      { q: '¿El tratado fiscal España-USA me beneficia?', a: 'España y EE.UU. tienen un Convenio para Evitar la Doble Imposición. Según tu situación, puede reducir la retención sobre dividendos, royalties e intereses pagados desde EE.UU. Te asesoramos sobre cómo aplicarlo a tu LLC.' },
      { q: '¿Tengo que declarar la LLC en la AEAT (Hacienda)?', a: 'Sí. Los residentes fiscales españoles deben declarar la participación en entidades extranjeras (Modelo 720 y otros). Consulta con un asesor fiscal en España para el cumplimiento con Hacienda. Nosotros gestionamos el lado del IRS.' },
      { q: '¿Puedo usar una LLC de EE.UU. para mi startup española?', a: 'Sí. Muchas startups europeas se incorporan en Delaware o Florida para atraer inversión estadounidense, acceder a incubadoras y aceleradoras de EE.UU. y facturar en dólares. Te asesoramos sobre la estructura más conveniente.' },
      { q: '¿Cuánto cuesta y cuánto tiempo tarda?', a: '5–7 días hábiles para la LLC en Florida. Los costos incluyen la tarifa estatal (~$125) más nuestros honorarios. Escríbenos por WhatsApp para un presupuesto personalizado.' },
    ],
    faqsEn: [
      { q: 'Can a Spanish citizen open a US LLC?', a: 'Yes. EU citizens, including Spanish nationals, can own a US LLC. No visa, residency, or US Social Security number is required.' },
      { q: 'Does the Spain-US tax treaty benefit me?', a: 'Spain and the US have a Convention to Avoid Double Taxation. Depending on your situation, it can reduce withholding on dividends, royalties, and interest paid from the US. We advise on how to apply it to your LLC.' },
      { q: 'Must I declare the LLC to AEAT (Hacienda)?', a: 'Yes. Spanish tax residents must declare interests in foreign entities (Form 720 and others). Consult a tax advisor in Spain for Hacienda compliance. We handle the IRS side.' },
      { q: 'Can I use a US LLC for my Spanish startup?', a: 'Yes. Many European startups incorporate in Delaware or Florida to attract US investment, access US incubators and accelerators, and invoice in dollars. We advise on the most convenient structure.' },
      { q: 'How much does it cost and how long does it take?', a: '5–7 business days for the Florida LLC. Costs include the state fee (~$125) plus our fee. Message us on WhatsApp for a personalized quote.' },
    ],
  },
} as const;

type PaisSlug = keyof typeof COUNTRIES;
const VALID_SLUGS = Object.keys(COUNTRIES) as PaisSlug[];

// ── Static params ──────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return VALID_SLUGS.flatMap((pais) => [
    { pais, locale: 'es' },
    { pais, locale: 'en' },
  ]);
}

// ── Metadata ───────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; pais: string }>;
}): Promise<import('next').Metadata> {
  const { locale, pais } = await params;
  if (!VALID_SLUGS.includes(pais as PaisSlug)) return {};
  const c = COUNTRIES[pais as PaisSlug];
  const isEn = locale === 'en';
  return {
    title: isEn ? c.titleEn : c.titleEs,
    description: isEn ? c.descEn : c.descEs,
    keywords: isEn ? c.kwEn : c.kwEs,
    alternates: {
      canonical: `https://hispanic.financial/${locale}/internacional/${pais}`,
      languages: {
        es: `https://hispanic.financial/es/internacional/${pais}`,
        en: `https://hispanic.financial/en/internacional/${pais}`,
        'x-default': `https://hispanic.financial/es/internacional/${pais}`,
      },
    },
    openGraph: {
      title: isEn ? c.titleEn : c.titleEs,
      description: isEn ? c.descEn : c.descEs,
      url: `https://hispanic.financial/${locale}/internacional/${pais}`,
      siteName: 'Hispanic Financial',
      images: [{ url: 'https://hispanic.financial/og-image.jpg', width: 1200, height: 630 }],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      title: isEn ? c.titleEn : c.titleEs,
    },
  };
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function PaisPage({
  params,
}: {
  params: Promise<{ locale: string; pais: string }>;
}) {
  const { locale, pais } = await params;
  if (!VALID_SLUGS.includes(pais as PaisSlug)) notFound();

  const c = COUNTRIES[pais as PaisSlug];
  const isEn = locale === 'en';

  const countryName = isEn ? c.nameEn : c.nameEs;
  const title = isEn ? c.titleEn : c.titleEs;
  const hero = isEn ? c.heroEn : c.heroEs;
  const faqs = isEn ? c.faqsEn : c.faqsEs;
  const waText = encodeURIComponent(c.whatsappText);

  // JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: isEn
          ? `US LLC Formation for ${countryName} Residents — Hispanic Financial`
          : `Creación de LLC en USA para Residentes de ${countryName} — Hispanic Financial`,
        description: isEn ? c.descEn : c.descEs,
        provider: {
          '@type': 'AccountingService',
          name: 'Hispanic Financial',
          url: 'https://hispanic.financial',
          telephone: '+19544645458',
        },
        areaServed: { '@type': 'Country', name: isEn ? c.nameEn : c.nameEs },
        url: `https://hispanic.financial/${locale}/internacional/${pais}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : 'Inicio', item: `https://hispanic.financial/${locale}` },
          { '@type': 'ListItem', position: 2, name: isEn ? 'International' : 'Internacional', item: `https://hispanic.financial/${locale}/internacional` },
          { '@type': 'ListItem', position: 3, name: countryName, item: `https://hispanic.financial/${locale}/internacional/${pais}` },
        ],
      },
    ],
  };

  const SERVICES = [
    { slug: 'creacion-de-llc', icon: '🏛️', labelEs: 'Creación de LLC', labelEn: 'LLC Formation' },
    { slug: 'itin',            icon: '🪪', labelEs: 'ITIN para No Residentes', labelEn: 'ITIN for Non-Residents' },
    { slug: 'impuestos',       icon: '📋', labelEs: 'Declaración de Impuestos USA', labelEn: 'US Tax Return' },
    { slug: 'real-estate',     icon: '🏠', labelEs: 'Real Estate & FIRPTA', labelEn: 'Real Estate & FIRPTA' },
    { slug: 'contabilidad',    icon: '📊', labelEs: 'Contabilidad & QuickBooks', labelEn: 'Accounting & QuickBooks' },
    { slug: 'proteccion-patrimonial', icon: '🛡️', labelEs: 'Protección Patrimonial', labelEn: 'Wealth Protection' },
  ];

  const benefits = isEn
    ? [
        { icon: '🌐', title: '100% Remote', desc: `You never need to visit the US. We handle everything from your home in ${countryName}.` },
        { icon: '⚡', title: '5–7 Business Days', desc: 'Your LLC in Florida, ready in less than a week with all documents included.' },
        { icon: '🇺🇸🇪🇸', title: 'Bilingual Experts', desc: 'Our team speaks English and Spanish — and we understand the international context of our clients.' },
        { icon: '📱', title: 'WhatsApp First', desc: 'Start your process right now via WhatsApp — the fastest way to get started.' },
      ]
    : [
        { icon: '🌐', title: '100% Remoto', desc: `Nunca necesitas visitar EE.UU. Gestionamos todo desde tu hogar en ${countryName}.` },
        { icon: '⚡', title: '5–7 Días Hábiles', desc: 'Tu LLC en Florida, lista en menos de una semana con todos los documentos incluidos.' },
        { icon: '🇺🇸🇪🇸', title: 'Expertos Bilingües', desc: 'Nuestro equipo habla inglés y español — y entendemos el contexto internacional de nuestros clientes.' },
        { icon: '📱', title: 'WhatsApp Primero', desc: 'Comienza tu proceso ahora mismo por WhatsApp — la forma más rápida de empezar.' },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-white">
        {/* ── Breadcrumb ── */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-xs text-slate-500">
              <Link href={`/${locale}`} className="hover:text-brand-blue transition-colors">
                {isEn ? 'Home' : 'Inicio'}
              </Link>
              <span>/</span>
              <Link href={`/${locale}/internacional`} className="hover:text-brand-blue transition-colors">
                {isEn ? 'International' : 'Internacional'}
              </Link>
              <span>/</span>
              <span className="text-brand-dark font-medium">{countryName}</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-brand-dark via-slate-800 to-brand-blue text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-4">{c.flag}</div>
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6">
              {isEn ? `LLC Formation • ${countryName}` : `Creación de LLC • ${countryName}`}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
              {isEn
                ? `Open Your US LLC from ${countryName}`
                : `Crea tu LLC en USA desde ${countryName}`}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              {hero}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/19544645458?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-8 py-4 rounded-2xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>💬</span>
                {isEn ? 'Start on WhatsApp' : 'Comenzar por WhatsApp'}
              </a>
              <a
                href="tel:+19544645458"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all"
              >
                <span>📞</span>
                (954) 464-5458
              </a>
            </div>
          </div>
        </section>

        {/* ── Benefits strip ── */}
        <section className="bg-brand-blue/5 border-y border-brand-blue/10 py-10 px-4">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="text-3xl mb-2">{b.icon}</div>
                <p className="font-black text-brand-dark text-sm mb-1">{b.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-2">
              {isEn ? 'What We Handle for You' : 'Qué Gestionamos por Ti'}
            </p>
            <h2 className="text-2xl font-black text-brand-dark mb-8">
              {isEn
                ? `Complete US LLC Package from ${countryName}`
                : `Paquete Completo de LLC en USA desde ${countryName}`}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(isEn ? [
                'Articles of Organization filed with Florida Division of Corporations',
                'EIN (Employer Identification Number) from the IRS',
                'Operating Agreement in English and Spanish',
                'Registered Agent for the first year',
                'Guidance on opening a US business bank account',
                'Annual Report reminder for Florida compliance',
                'ITIN application if required (add-on)',
                'US tax return preparation (Form 1040-NR, add-on)',
              ] : [
                'Artículos de Organización ante la División de Corporaciones de Florida',
                'EIN (Número de Identificación del Empleador) ante el IRS',
                'Acuerdo de Operación en inglés y español',
                'Agente Registrado durante el primer año',
                'Orientación para abrir cuenta bancaria empresarial en USA',
                'Recordatorio del Informe Anual para cumplimiento en Florida',
                'Solicitud de ITIN si es necesario (servicio adicional)',
                'Preparación de declaración de impuestos USA (Form 1040-NR, adicional)',
              ]).map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-brand-blue mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services for international clients ── */}
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-2">
              {isEn ? 'Complete Services' : 'Servicios Completos'}
            </p>
            <h2 className="text-2xl font-black text-brand-dark mb-8">
              {isEn
                ? `Everything You Need to Operate in the US from ${countryName}`
                : `Todo lo que Necesitas para Operar en EE.UU. desde ${countryName}`}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${locale}/servicios/${s.slug}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-blue/40 hover:shadow-md transition-all group"
                >
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <span className="font-bold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">
                    {isEn ? s.labelEn : s.labelEs} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest text-brand-blue mb-2">FAQ</p>
            <h2 className="text-2xl font-black text-brand-dark mb-8">
              {isEn
                ? `Frequently Asked Questions — US LLC from ${countryName}`
                : `Preguntas Frecuentes — LLC en USA desde ${countryName}`}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none hover:bg-slate-50 transition-colors">
                    <span className="font-bold text-brand-dark text-sm leading-snug">{faq.q}</span>
                    <span className="text-brand-blue flex-shrink-0 text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-br from-brand-dark to-slate-800 text-white py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">{c.flag}</div>
            <h2 className="text-2xl font-black mb-4">
              {isEn
                ? `Ready to open your US LLC from ${countryName}?`
                : `¿Listo para abrir tu LLC en USA desde ${countryName}?`}
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              {isEn
                ? 'Write us on WhatsApp right now — we respond within hours and guide you step by step through the entire process.'
                : 'Escríbenos por WhatsApp ahora mismo — respondemos en horas y te guiamos paso a paso en todo el proceso.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/19544645458?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-8 py-4 rounded-2xl text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>💬</span>
                {isEn ? 'Start on WhatsApp' : 'Comenzar por WhatsApp'}
              </a>
              <Link
                href={`/${locale}/internacional`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all"
              >
                {isEn ? '← International Services' : '← Servicios Internacionales'}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
