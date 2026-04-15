import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from 'next/script';
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import StructuredData from "@/components/StructuredData";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const isEn = locale === 'en';
  const title = isEn ? 'Tax Prep & Business Accounting | Hispanic Financial' : 'Asesoría Fiscal y Creación de LLC | Hispanic Financial';
  const description = isEn
    ? 'Expert tax preparation, corporate accounting, and business incorporation in Coral Springs. Maximize your IRS returns with Hispanic Financial.'
    : 'Expertos en impuestos, contabilidad y creación de LLC en Coral Springs. Maximiza tus devoluciones y protege tu patrimonio con Hispanic Financial.';

  return {
    title: {
      template: '%s | Hispanic Financial',
      default: title,
    },
    description,
    keywords: [
      'impuestos', 'taxes', 'tax preparation', 'preparación de impuestos',
      'contabilidad', 'accounting', 'QuickBooks bookkeeping florida',
      'creación de empresas', 'business incorporation', 'LLC', 'EIN',
      'real estate', 'bienes raíces', 'FIRPTA',
      'payroll', 'nómina',
      'protección patrimonial', 'wealth protection', 'trust', 'holding',
      'IRS taxes', 'tax planning', 'planeación fiscal', 'asesoría fiscal hispana',
      'hispanic', 'hispano', 'latino',
      'hispanic financial',
      'coral springs', 'florida', 'USA', 'estados unidos',
    ],
    alternates: {
      canonical: `https://www.hispanictaxinc.com/${locale}`,
      languages: {
        'en': 'https://www.hispanictaxinc.com/en',
        'es': 'https://www.hispanictaxinc.com/es',
        'x-default': 'https://www.hispanictaxinc.com/en',
      },
    },
    openGraph: {
      title: 'Hispanic Financial',
      description: description,
      url: `https://www.hispanictaxinc.com/${locale}`,
      siteName: 'Hispanic Financial',
      images: [
        {
          url: 'https://www.hispanictaxinc.com/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hispanic Financial',
      description: description,
      images: ['https://www.hispanictaxinc.com/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    other: {
      'geo.region': 'US-FL',
      'geo.placename': 'Coral Springs',
      'geo.position': '26.286282;-80.244302',
      'ICBM': '26.286282, -80.244302',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // We know routing.locales includes string types, but TypeScript might want a narrower literal or string type.
  // Casting to string array to check includes.
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth" className="relative">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJDR9NCR');
          `}
        </Script>
      </head>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJDR9NCR"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }} 
          />
        </noscript>
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
