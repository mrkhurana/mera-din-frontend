import type { Metadata } from 'next'

const baseUrl = 'https://whereskyaligns.com'

export const metadata: Metadata = {
  title: 'Where Sky Aligns | Privacy Policy',
  description:
    'Read the Where Sky Aligns Privacy Policy to understand how we handle information you provide when using our alignment and compatibility features.',
  openGraph: {
    title: 'Where Sky Aligns | Privacy Policy',
    description:
      'Read the Where Sky Aligns Privacy Policy to understand how we handle information you provide when using our alignment and compatibility features.',
    url: `${baseUrl}/privacy-policy`,
    siteName: 'Where Sky Aligns',
    type: 'website',
  },
  alternates: { canonical: `${baseUrl}/privacy-policy` },
  robots: { index: false },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
