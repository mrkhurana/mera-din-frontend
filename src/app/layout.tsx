import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baseUrl = 'https://mera-din.vercel.app'

export const metadata: Metadata = {
  title: 'Mera Din Kaisa Jayega? | Daily Star Ratings',
  description: 'Check today\'s star ratings for money, work, health, relationships, and luck. For entertainment purposes only.',
  keywords: 'daily horoscope, star ratings, zodiac, astrology, daily forecast',
  authors: [{ name: 'Mera Din' }],
  openGraph: {
    title: 'Mera Din Kaisa Jayega? | Daily Star Ratings',
    description: 'Check today\'s star ratings for money, work, health, relationships, and luck.',
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
    title: 'Mera Din Kaisa Jayega? | Daily Star Ratings',
    description: 'Check today\'s star ratings for money, work, health, relationships, and luck.',
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
  canonicalUrl: baseUrl,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden bg-gray-950 text-white">
        {children}
        <footer className="text-center text-xs text-slate-500 py-4 px-4 mt-8">
          Yeh page aaj ka din ko samajhne ke liye simple star rating format use karta hai.
          Isme money, work, health, relationships aur luck ke alag sections me score dikhte hain.
          Yeh ratings quick daily overview ke liye hain, taaki aap apne focus areas ko aasani se dekh saken.
          Content ka tone neutral rakha gaya hai, jisse aap planning ke liye clear snapshot le saken.
          Use with caution. Not advice or prediction.
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
