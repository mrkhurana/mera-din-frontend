import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import './globals.css'

const baseUrl = 'https://whereskyaligns.com'

export const metadata: Metadata = {
  title: 'Where Sky Aligns | Personal Alignment Through Celestial Cycles',
  description:
    'Explore your personal alignment through celestial cycles. Enter your birth details to receive a structured alignment reading based on your Moon sign and rhythmic patterns.',
  keywords: 'daily alignment, moon sign, birth chart, celestial cycles, where sky aligns, compatibility, alignment patterns',
  authors: [{ name: 'Where Sky Aligns' }],
  openGraph: {
    title: 'Where Sky Aligns | Personal Alignment Through Celestial Cycles',
    description:
      'Explore your personal alignment through celestial cycles. Enter your birth details to receive a structured alignment reading based on your Moon sign and rhythmic patterns.',
    url: baseUrl,
    siteName: 'Where Sky Aligns',
    images: [
      {
        url: `${baseUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: 'Where Sky Aligns',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where Sky Aligns | Personal Alignment Through Celestial Cycles',
    description:
      'Explore your personal alignment through celestial cycles. Enter your birth details to receive a structured alignment reading based on your Moon sign and rhythmic patterns.',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  manifest: '/site.webmanifest',
  alternates: { canonical: baseUrl },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden h-full">
      <body className="overflow-x-hidden bg-[#ede8de] text-stone-900 min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          {children}
        </main>
        <footer className="text-center text-xs text-stone-400 py-6 px-4 mt-64 border-t border-stone-200">
          <p className="mb-1">&copy; 2026 Where Sky Aligns. All rights reserved.</p>
          <p className="mb-2">Alignment scores and compatibility readings are based on birth details and are intended for informational purposes only. They do not constitute advice, prediction, or any factual claim.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/privacy-policy" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-stone-600 transition-colors">Terms of Service</a>
            <a href="/disclaimer" className="hover:text-stone-600 transition-colors">Disclaimer</a>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
