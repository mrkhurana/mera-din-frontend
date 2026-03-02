import type { Metadata } from 'next'

const baseUrl = 'https://whereskyaligns.com'

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Where Sky Aligns',
  url: `${baseUrl}/about`,
  description:
    'Where Sky Aligns is a personal alignment space grounded in celestial cycles. We interpret your Moon sign and natal chart to offer a structured daily reading — interpretive, not predictive.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Where Sky Aligns',
    url: baseUrl,
  },
  about: {
    '@type': 'Thing',
    name: 'Astrological alignment and Moon sign readings',
  },
}

export const metadata: Metadata = {
  title: 'About Where Sky Aligns | Personal Alignment Space Grounded in Celestial Cycles',
  description:
    'Where Sky Aligns is a personal alignment space grounded in celestial cycles. Enter your birth details to receive a structured daily alignment reading based on your Moon sign — interpretive, not predictive.',
  keywords:
    'about where sky aligns, daily alignment, moon sign calculator, celestial cycle reading, personal alignment score, moon sign meaning, astrological alignment, birth chart alignment, alignment space',
  openGraph: {
    title: 'About Where Sky Aligns | Personal Alignment Space Grounded in Celestial Cycles',
    description:
      'Where Sky Aligns is a personal alignment space grounded in celestial cycles. Enter your birth details to receive a structured daily alignment reading based on your Moon sign — interpretive, not predictive.',
    url: `${baseUrl}/about`,
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
    title: 'About Where Sky Aligns | Personal Alignment Space Grounded in Celestial Cycles',
    description:
      'Where Sky Aligns is a personal alignment space grounded in celestial cycles. Enter your birth details to receive a structured daily alignment reading based on your Moon sign — interpretive, not predictive.',
  },
  alternates: { canonical: `${baseUrl}/about` },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  )
}
