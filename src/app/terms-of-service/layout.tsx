import type { Metadata } from 'next'

const baseUrl = 'https://whereskyaligns.com'

export const metadata: Metadata = {
  title: 'Where Sky Aligns | Terms of Service',
  description:
    'Read the Where Sky Aligns Terms of Service. By using this site you agree to these terms, which govern how our astrological features and content may be used.',
  openGraph: {
    title: 'Where Sky Aligns | Terms of Service',
    description:
      'Read the Where Sky Aligns Terms of Service. By using this site you agree to these terms, which govern how our astrological features and content may be used.',
    url: `${baseUrl}/terms-of-service`,
    siteName: 'Where Sky Aligns',
    type: 'website',
  },
  alternates: { canonical: `${baseUrl}/terms-of-service` },
  robots: { index: false },
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
