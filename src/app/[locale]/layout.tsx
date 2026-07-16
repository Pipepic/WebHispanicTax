import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from 'next/script';
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import StructuredData from "@/components/StructuredData";
import AIAssistant from "@/components/AIAssistant";
import Navbar from "@/components/Navbar";
import MobileFAB from "@/components/MobileFAB";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const isEn = locale === 'en';
  const title = isEn
    ? 'Tax Prep, Accounting & LLC in Coral Springs, FL | Hispanic Financial'
    : 'Impuestos, Contabilidad y LLC en Coral Springs, FL | Hispanic Financial';
  const description = isEn
    ? 'Expert tax preparation, business accounting, LLC formation, and wealth protection in Coral Springs, FL. Bilingual CPA services for the Hispanic community. Call (954) 464-5458.'
    : 'Expertos en impuestos, contabilidad, creación de LLC y protección patrimonial en Coral Springs, FL. Servicios bilingües para la comunidad hispana. Llama (954) 464-5458.';

  return {
    title: {
      template: '%s | Hispanic Financial',
      default: title,
    },
    description,
    keywords: isEn
      ? ['tax preparation coral springs', 'bilingual accountant florida', 'hispanic cpa coral springs',
         'LLC formation florida', 'accounting coral springs', 'FIRPTA florida',
         'wealth protection florida', 'tax planning south florida', 'hispanic financial']
      : ['impuestos coral springs', 'contador hispano florida', 'preparación impuestos florida',
         'crear LLC florida', 'contabilidad coral springs', 'asesoría fiscal hispana',
         'protección patrimonial florida', 'FIRPTA florida', 'hispanic financial'],
    alternates: {
      canonical: `https://hispanic.financial/${locale}`,
      languages: {
        'en': 'https://hispanic.financial/en',
        'es': 'https://hispanic.financial/es',
        'x-default': 'https://hispanic.financial/en',
      },
    },
    openGraph: {
      title: isEn
        ? 'Tax Prep, Accounting & LLC in Coral Springs, FL | Hispanic Financial'
        : 'Impuestos, Contabilidad y LLC en Coral Springs, FL | Hispanic Financial',
      description: description,
      url: `https://hispanic.financial/${locale}`,
      siteName: 'Hispanic Financial',
      images: [
        {
          url: 'https://hispanic.financial/og-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: isEn ? 'en_US' : 'es_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        template: '%s | Hispanic Financial',
        default: 'Hispanic Financial',
      },
      description: description,
      images: ['https://hispanic.financial/og-image.jpg'],
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
      <head />
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-background text-foreground overflow-x-hidden`}
        suppressHydrationWarning
      >
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <AIAssistant />
          <MobileFAB />
          <Footer />
        </NextIntlClientProvider>

        <SpeedInsights />
        <Analytics />
        <GoogleTagManager gtmId="GTM-PJDR9NCR" />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
