import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mera Din Kaisa Jayega',
  description: 'Discover how your day will be',
  icons: {
    icon: '/favicon.svg',
  },
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
        <footer className="text-center text-xs text-slate-500 py-4 px-4 mt-8">
          Use with caution. Not advice or prediction.
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
