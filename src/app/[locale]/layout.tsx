import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import StructuredData from "@/components/StructuredData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const isEn = locale === 'en';
  const title = isEn ? 'Hispanic Financial - Expert Financial & Tax Services' : 'Hispanic Financial - Servicios Financieros Integrales';
  const description = isEn
    ? 'Your strategic ally in the US. Professional tax preparation, accounting, payroll, and business incorporation for the Hispanic community.'
    : 'Tu aliado estratégico en Estados Unidos. Servicios de impuestos, contabilidad, nómina y creación de empresas para la comunidad hispana.';

  return {
    title: {
      template: '%s | Hispanic Financial',
      default: title,
    },
    description,
    keywords: [
      'impuestos', 'taxes', 'tax preparation', 'preparación de impuestos',
      'contabilidad', 'accounting', 'QuickBooks',
      'creación de empresas', 'business incorporation', 'LLC', 'EIN',
      'real estate', 'bienes raíces', 'FIRPTA',
      'payroll', 'nómina',
      'protección patrimonial', 'wealth protection', 'trust', 'holding',
      'IRS', 'tax planning', 'planeación fiscal',
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
      icon: '/favicon.png',
      apple: '/favicon.png',
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

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased bg-background text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
