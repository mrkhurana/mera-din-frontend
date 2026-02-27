import type { Metadata } from 'next'

const baseUrl = 'https://meradinkaisajayega.online'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a Sun sign and a Moon sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Sun sign is determined by the position of the Sun at your date of birth and changes roughly once a month. The Moon sign is determined by the position of the Moon and changes approximately every two and a half days. The Sun sign is associated with identity and outward character; the Moon sign relates to emotional patterns, instinctive responses, and inner life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the time of birth matter for calculating a Moon sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Moon moves through the zodiac in approximately 27 days, meaning it can shift from one sign to the next within a 24-hour period. Without an accurate time of birth, if the Moon is transitioning between signs on that day, the calculation may be approximate or uncertain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can your Moon sign change over the course of your life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Moon sign refers to the position of the Moon at the moment of birth and remains fixed. It does not change over the course of a person\'s life.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I do not know my time of birth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your time of birth is unknown, a probable Moon sign can still be calculated provided the Moon was not transitioning between signs on your date of birth. In borderline cases the result will be marked as approximate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Moon sign more important than the Sun sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is objectively more important. The Sun sign broadly relates to identity and outward character. The Moon sign relates to emotional life and instinctive responses. Both are individual factors within a larger birth chart.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Moon Signs Explained | Emotional Astrology Guide',
  description:
    'Find your Moon sign and explore all 12 placements — emotional patterns, reaction styles, and relationship tone. Free Moon sign calculator included.',
  keywords:
    'moon sign, moon sign calculator, moon in aries, moon sign guide, emotional astrology, birth chart moon, mera din',
  openGraph: {
    title: 'Moon Signs Explained | Emotional Astrology Guide',
    description:
      'Find your Moon sign and explore all 12 placements — emotional patterns, reaction styles, and relationship tone. Free Moon sign calculator included.',
    url: `${baseUrl}/moon-signs`,
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
    title: 'Moon Signs Explained | Emotional Astrology Guide',
    description:
      'Find your Moon sign and explore all 12 placements — emotional patterns, reaction styles, and relationship tone.',
  },
  alternates: { canonical: `${baseUrl}/moon-signs` },
}

export default function MoonSignsLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
