import type { Metadata } from 'next'

const baseUrl = 'https://meradinkaisajayega.online'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are zodiac signs scientifically proven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Zodiac signs are not supported by empirical scientific evidence as causal influences on personality or events. The zodiac is a symbolic framework used within astrological practice, presented here as a structural system only.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do some apps show different zodiac signs for the same birthday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common reason is the difference between the tropical and sidereal zodiac systems. Due to the precession of the equinoxes, these systems have drifted approximately 24 degrees apart. A person who is Aries in the tropical system may be Pisces in the sidereal system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What zodiac system does this site use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This site uses the tropical zodiac, the standard framework in Western astrology, where 0° Aries corresponds to the vernal equinox.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does everyone have all 12 signs somewhere in their birth chart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structurally yes — in a full birth chart the 360° ecliptic is divided into 12 houses and all 12 signs are present. However, different signs will contain different planets or none at all.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can zodiac signs change over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The signs are fixed positional divisions of the ecliptic and do not change. Within the tropical system, sign boundaries remain constant by definition. Your natal Sun, Moon, and rising sign do not change over the course of your life.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Zodiac Overview | 12 Signs, Elements & Modalities',
  description:
    'A structured reference for the 12-sign zodiac — elements, modalities, tropical vs sidereal systems, and how sign placements underpin alignment and compatibility.',
  keywords:
    'zodiac signs, 12 zodiac signs, zodiac elements, zodiac modalities, tropical zodiac, sidereal zodiac, aries to pisces, zodiac overview',
  openGraph: {
    title: 'Zodiac Overview | 12 Signs, Elements & Modalities',
    description:
      'A structured reference for the 12-sign zodiac — elements, modalities, tropical vs sidereal systems, and how sign placements underpin alignment and compatibility.',
    url: `${baseUrl}/zodiac`,
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
    title: 'Zodiac Overview | 12 Signs, Elements & Modalities',
    description:
      'A structured reference for the 12-sign zodiac — elements, modalities, tropical vs sidereal systems, and how sign placements underpin alignment and compatibility.',
  },
  alternates: { canonical: `${baseUrl}/zodiac` },
}

export default function ZodiacLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
