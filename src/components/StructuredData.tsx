export default function StructuredData({ locale }: { locale: string }) {
    const isEn = locale === 'en';

    const organization = {
        "@type": ["FinancialService", "Organization", "LocalBusiness"],
        "@id": "https://www.hispanictaxinc.com/#organization",
        "name": "Hispanic Financial",
        "alternateName": "Hispanic Financial",
        "description": isEn
            ? "Professional tax preparation, accounting, payroll, business incorporation, and real estate advisory services for the Hispanic community in Coral Springs, FL."
            : "Servicios profesionales de preparación de impuestos, contabilidad, nómina, creación de empresas y asesoría en bienes raíces para la comunidad hispana en Coral Springs, FL.",
        "url": "https://www.hispanictaxinc.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.hispanictaxinc.com/logo.png"
        },
        "image": "https://www.hispanictaxinc.com/og-image.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "7401 Wiles Rd. Suite 126",
            "addressLocality": "Coral Springs",
            "addressRegion": "FL",
            "postalCode": "33067",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.286282,
            "longitude": -80.244302
        },
        "telephone": "+19544645458",
        "email": "apatino@hispanictaxinc.com",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/hispanictaxinc",
            "https://www.instagram.com/hispanictaxinc",
            "https://www.linkedin.com/company/hispanictaxinc"
        ],
        "areaServed": {
            "@type": "State",
            "name": "Florida"
        },
        "founder": {
            "@type": "Person",
            "name": "Alvaro Patino"
        },
        "foundingDate": "2006",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 5,
            "maxValue": 20
        },
        "knowsLanguage": ["en", "es"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": isEn ? "Financial Services" : "Servicios Financieros",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": isEn ? "Business Incorporation & Registration" : "Creación y Registro de Empresas",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Articles and Certificate of Existence" : "Artículos y Certificado de existencia" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employer Identification Number (EIN)" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Operating Agreement" : "Acuerdo de Operación" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Kit" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Business bank account assistance" : "Asistencia en apertura de cuenta bancaria" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": isEn ? "Tax Preparation & Planning" : "Preparación de Impuestos y Planeación",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Personal Income Tax Filing (IRS)" : "Preparación de impuestos personales (IRS)" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Corporate Tax Preparation" : "Preparación de impuestos corporativos" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Sales Tax Declaration" : "Declaración de impuesto sobre ventas" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Tax Planning for Companies" : "Planeación fiscal para empresas" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Payroll Tax Filing" : "Impuestos de nómina (payroll)" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": isEn ? "Real Estate Advisory" : "Asesoría en Real Estate",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Investment property purchase assistance" : "Asistencia en compra de propiedades de inversión" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Property sale tax analysis for foreigners" : "Análisis de impacto en venta de propiedades para extranjeros" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "IRS Withholding Claims (FIRPTA)" : "Reclamo de retenciones ante el IRS" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Tax declarations for foreign investors" : "Declaraciones de impuestos para inversionistas extranjeros" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": isEn ? "Wealth Protection & Strategic Planning" : "Protección Patrimonial y Planeación",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Holding Model" : "Modelo Holding" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limited Liability Company (LLC)" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Trusts" : "Trust (Fideicomisos)" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": isEn ? "Accounting & QuickBooks" : "Contabilidad y QuickBooks",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Income and expense processing" : "Proceso de transacciones" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Bank Reconciliations" : "Conciliaciones de bancos" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Profit & Loss Statements" : "Estado de Resultados" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Balance Sheet" : "Balance General" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": isEn ? "Variation and comparative analysis" : "Análisis de variaciones y comparativos" } }
                    ]
                }
            ]
        }
    };

    const faqPage = {
        "@type": "FAQPage",
        "mainEntity": isEn ? [
            {
                "@type": "Question",
                "name": "What services does Hispanic Financial offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer business incorporation, tax preparation (personal and corporate), real estate advisory, wealth protection planning (LLCs, Trusts, Holdings), and full accounting services using QuickBooks."
                }
            },
            {
                "@type": "Question",
                "name": "Do you serve clients in languages other than English?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Hispanic Financial is fully bilingual. We provide all our services in both English and Spanish to better serve the Hispanic community in the United States."
                }
            },
            {
                "@type": "Question",
                "name": "Can you help foreign investors with US real estate taxes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We specialize in assisting foreign investors with FIRPTA withholding claims, property sale tax analysis, and tax declarations for non-US residents investing in American real estate."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Hispanic Financial located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our office is located at 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067. We are open Monday through Friday from 9:00 AM to 6:00 PM."
                }
            },
            {
                "@type": "Question",
                "name": "How can I start an LLC or corporation in the US?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We guide you through every step: from Articles of Incorporation and EIN registration to Operating Agreements, Corporate Kits, and business bank account setup. Contact us to start the process."
                }
            }
        ] : [
            {
                "@type": "Question",
                "name": "¿Qué servicios ofrece Hispanic Financial?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ofrecemos creación de empresas, preparación de impuestos (personales y corporativos), asesoría en bienes raíces, protección patrimonial (LLCs, Trusts, Holdings) y servicios completos de contabilidad con QuickBooks."
                }
            },
            {
                "@type": "Question",
                "name": "¿Atienden en español?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, Hispanic Financial es completamente bilingüe. Todos nuestros servicios están disponibles en español e inglés para servir mejor a la comunidad hispana en Estados Unidos."
                }
            },
            {
                "@type": "Question",
                "name": "¿Pueden ayudar a inversionistas extranjeros con impuestos de bienes raíces en EE.UU.?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Por supuesto. Nos especializamos en asistir a inversionistas extranjeros con reclamos de retención FIRPTA, análisis de impacto fiscal en ventas de propiedades y declaraciones de impuestos para no residentes."
                }
            },
            {
                "@type": "Question",
                "name": "¿Dónde están ubicados?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nuestra oficina está en 7401 Wiles Rd. Suite 126, Coral Springs, FL 33067. Estamos abiertos de lunes a viernes de 9:00 AM a 6:00 PM."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cómo puedo crear una LLC o corporación en EE.UU.?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Te guiamos en cada paso: desde los Artículos de Incorporación y registro del EIN hasta el Acuerdo de Operación, Corporate Kit y apertura de cuenta bancaria. Contáctanos para empezar."
                }
            }
        ]
    };

    const schema = {
        "@context": "https://schema.org",
        "@graph": [organization, faqPage]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

