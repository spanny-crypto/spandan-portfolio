import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/data';
import { buildJsonLd } from '@/lib/seo';
import './globals.css';

const title = 'Spandan Parakh - Student, Builder, Founder | 6Falcon';
const description =
  'Spandan Parakh is a student, builder and founder of 6Falcon Technologies. Winner of Kumbhathon 2023, creator of Falcon OS, Mimo, Haven and the Arkh language. Currently working on Janus.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  applicationName: 'Spandan Parakh Portfolio',
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  keywords: [
    'Spandan Parakh', 'Spandan', '6Falcon', '6Falcon Technologies', 'Janus', 'Falcon OS', 'Mimo',
    'Haven', 'KumbhOS', 'Kumbhathon winner', 'Arkh programming language', 'student founder',
    'young founder India', 'portfolio',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'profile',
    url: siteConfig.url,
    siteName: 'Spandan Parakh',
    title,
    description,
    firstName: 'Spandan',
    lastName: 'Parakh',
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'Spandan Parakh - Student, Builder, Founder' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [siteConfig.ogImage] },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAFA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable summary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c') }}
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg">
        {children}
      </body>
    </html>
  );
}
