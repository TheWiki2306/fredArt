import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio-domain.com'),
  title: {
    default: 'Art Portfolio | Contemporary African Art',
    template: '%s | Art Portfolio',
  },
  description:
    'Explore contemporary African art through a curated collection of paintings, sculptures, and mixed media works.',
  keywords: [
    'art',
    'contemporary art',
    'African art',
    'portfolio',
    'artist',
    'paintings',
    'sculptures',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-domain.com',
    title: 'Art Portfolio | Contemporary African Art',
    description:
      'Explore contemporary African art through a curated collection of paintings, sculptures, and mixed media works.',
    siteName: 'Art Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Art Portfolio | Contemporary African Art',
    description:
      'Explore contemporary African art through a curated collection of paintings, sculptures, and mixed media works.',
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
  alternates: {
    canonical: 'https://your-portfolio-domain.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
