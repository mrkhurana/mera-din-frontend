import type { Metadata } from 'next'
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
    <html lang="en">
      <body className="bg-gray-950 text-white">{children}</body>
    </html>
  )
}
