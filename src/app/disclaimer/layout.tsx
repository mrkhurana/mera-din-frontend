import type { Metadata } from 'next'

const baseUrl = 'https://whereskyaligns.com'

export const metadata: Metadata = {
  title: 'Where Sky Aligns | Disclaimer',
  description:
    'Read the Where Sky Aligns Disclaimer. Our astrological content is provided for informational purposes only and does not constitute professional advice.',
  openGraph: {
    title: 'Where Sky Aligns | Disclaimer',
    description:
      'Read the Where Sky Aligns Disclaimer. Our astrological content is provided for informational purposes only and does not constitute professional advice.',
    url: `${baseUrl}/disclaimer`,
    siteName: 'Where Sky Aligns',
    type: 'website',
  },
  alternates: { canonical: `${baseUrl}/disclaimer` },
  robots: { index: false },
}

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
