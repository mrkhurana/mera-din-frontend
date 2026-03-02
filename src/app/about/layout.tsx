import type { Metadata } from 'next'

const baseUrl = 'https://whereskyaligns.com'

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Where Sky Aligns',
  url: `${baseUrl}/about`,
  description:
    'Where Sky Aligns is a personal alignment tool that uses your Moon sign and celestial cycles to generate a structured daily alignment reading. Free, informational, and based on birth details.',
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
  title: 'About Where Sky Aligns | Daily Alignment Tool Based on Moon Sign',
  description:
    'Where Sky Aligns uses your birth date, time, and place to calculate your Moon sign and generate a structured daily alignment score. Free, informational, and based on established astrological frameworks.',
  keywords:
    'about where sky aligns, daily alignment tool, moon sign calculator, celestial cycle reading, personal alignment score, moon sign meaning, astrological alignment, birth chart alignment',
  openGraph: {
    title: 'About Where Sky Aligns | Daily Alignment Tool Based on Moon Sign',
    description:
      'Where Sky Aligns uses your birth date, time, and place to calculate your Moon sign and generate a structured daily alignment score. Free, informational, and based on established astrological frameworks.',
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
    title: 'About Where Sky Aligns | Daily Alignment Tool Based on Moon Sign',
    description:
      'Where Sky Aligns uses your birth date, time, and place to calculate your Moon sign and generate a structured daily alignment score. Free, informational, and based on established astrological frameworks.',
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
