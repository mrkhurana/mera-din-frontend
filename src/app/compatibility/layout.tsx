import type { Metadata } from 'next'

const baseUrl = 'https://meradinkaisajayega.online'

export const metadata: Metadata = {
  title: 'Compatibility Finder | Emotional Alignment Score',
  description:
    'Compare Moon sign placements for two people and receive a compatibility score based on their birth details. Enter date, time, and place of birth.',
  keywords:
    'astrology compatibility, moon sign compatibility, birth chart comparison, relationship alignment, compatibility score',
  openGraph: {
    title: 'Compatibility Finder | Emotional Alignment Score',
    description:
      'Compare Moon sign placements for two people and receive a compatibility score based on their birth details. Enter date, time, and place of birth.',
    url: `${baseUrl}/compatibility`,
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
    title: 'Compatibility Finder | Emotional Alignment Score',
    description:
      'Compare Moon sign placements for two people and receive a compatibility score based on their birth details.',
  },
  alternates: { canonical: `${baseUrl}/compatibility` },
}

export default function CompatibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
