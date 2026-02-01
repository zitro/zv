import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/providers/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Zitro Visuals | Commercial & Fashion Photography',
    template: '%s | Zitro Visuals',
  },
  description:
    'Award-winning commercial, fashion, portrait, and product photography. Featured in Vogue and global advertising campaigns. Los Angeles based, available worldwide.',
  keywords: [
    'commercial photography',
    'fashion photography',
    'product photography',
    'portrait photography',
    'boudoir photography',
    'videography',
    'advertising photography',
    'vogue photographer',
    'los angeles photographer',
  ],
  authors: [{ name: 'Zitro Visuals' }],
  creator: 'Zitro Visuals',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zitrovisuals.com',
    siteName: 'Zitro Visuals',
    title: 'Zitro Visuals | Commercial & Fashion Photography',
    description:
      'Award-winning commercial, fashion, portrait, and product photography. Featured in Vogue and global advertising campaigns.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zitro Visuals | Commercial & Fashion Photography',
    description:
      'Award-winning commercial, fashion, portrait, and product photography.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100">
        <SmoothScroll>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
