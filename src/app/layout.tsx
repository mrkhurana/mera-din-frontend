import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mera Din Kaisa Jayega',
  description: 'Discover how your day will be',
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
        <Analytics />
      </body>
    </html>
  )
}
