import type { Metadata } from 'next'

const baseUrl = 'https://whereskyaligns.com'

export const metadata: Metadata = {
  title: 'Where Sky Aligns | Compatibility & Emotional Alignment',
  description:
    'Compare Moon sign placements for two people and receive a compatibility reading based on their birth details and celestial cycles. Enter date, time, and place of birth.',
  keywords:
    'astrology compatibility, moon sign compatibility, birth chart comparison, relationship alignment, compatibility cycles, where sky aligns',
  openGraph: {
    title: 'Where Sky Aligns | Compatibility & Emotional Alignment',
    description:
      'Compare Moon sign placements for two people and receive a compatibility reading based on their birth details and celestial cycles.',
    url: `${baseUrl}/compatibility`,
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
    title: 'Where Sky Aligns | Compatibility & Emotional Alignment',
    description:
      'Compare Moon sign placements for two people and receive a compatibility reading based on their birth details and celestial cycles.',
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
