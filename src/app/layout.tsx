import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/Header'
import './globals.css'

const baseUrl = 'https://meradinkaisajayega.online'

export const metadata: Metadata = {
  title: 'Mera Din Kaisa Jayega | Daily Alignment Insight',
  description:
    'Enter your birth details to get a personalised daily alignment score based on your Moon sign. Informational only — no predictions.',
  keywords: 'daily alignment, moon sign, birth chart, alignment score, mera din kaisa jayega',
  authors: [{ name: 'Mera Din' }],
  openGraph: {
    title: 'Mera Din Kaisa Jayega | Daily Alignment Insight',
    description:
      'Enter your birth details to get a personalised daily alignment score based on your Moon sign. Informational only — no predictions.',
    url: baseUrl,
    siteName: 'Mera Din Kaisa Jayega',
    images: [
      {
        url: `${baseUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: 'Mera Din Kaisa Jayega',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mera Din Kaisa Jayega | Daily Alignment Insight',
    description:
      'Enter your birth details to get a personalised daily alignment score based on your Moon sign. Informational only — no predictions.',
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
        <footer className="text-center text-xs text-stone-400 py-6 px-4 mt-64 max-w-sm mx-auto">
          Mera Din provides alignment scores and compatibility readings based on birth details. All results are intended for informational purposes only. They do not constitute advice, prediction, or any factual claim. Use with caution.
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
