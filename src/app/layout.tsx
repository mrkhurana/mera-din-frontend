import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baseUrl = 'https://meradinkaisajayega.online'

export const metadata: Metadata = {
  title: 'Mera Din | Today\'s Alignment',
  description: 'Check your personal alignment score for today based on your birth details. For entertainment purposes only.',
  keywords: 'daily alignment, moon sign, astrology, daily overview, personal score',
  authors: [{ name: 'Mera Din' }],
  openGraph: {
    title: 'Mera Din | Today\'s Alignment',
    description: 'Check your personal alignment score for today based on your birth details.',

    url: baseUrl,
    siteName: 'Mera Din',
    images: [
      {
        url: `${baseUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: 'Mera Din Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mera Din | Today\'s Alignment',
    description: 'Check your personal alignment score for today based on your birth details.',
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
        <header className="w-full border-b border-stone-300 bg-white px-6 py-3 text-center">
          <span className="text-base font-semibold text-stone-800 tracking-tight">
            Mera Din Kaisa Jayega
          </span>
        </header>
        <main className="flex-1 flex items-center justify-center px-4 py-10">
          {children}
        </main>
        <footer className="text-center text-xs text-stone-400 py-6 px-4 mt-64 max-w-sm mx-auto">
          Mera Din shows a daily alignment score based on your birth details. It is intended for informational and entertainment purposes only. The score does not constitute advice, prediction, or any factual claim about your day. Use with caution.
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
