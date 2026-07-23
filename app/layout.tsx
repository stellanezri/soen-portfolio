import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/content'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const siteUrl = 'https://soen-portfolio.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} - Portfolio`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: `${site.name} - Portfolio`,
    title: `${site.name} - Portfolio`,
    description: site.metaDescription,
    images: [
      {
        url: '/og-image.png', // 1200x630, à créer (voir note plus bas)
        width: 1200,
        height: 630,
        alt: `${site.name} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} - Portfolio`,
    description: site.metaDescription,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f1ea',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} bg-background`}>
      <body className="font-sans">
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
