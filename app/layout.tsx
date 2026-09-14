import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andra Pratama — Web Developer & Cyber Security Specialist',
  description:
    'Membantu UMKM, startup, dan perusahaan membangun website modern, cepat, dan aman untuk meningkatkan kepercayaan pelanggan serta memperkuat kehadiran digital.',
  keywords: [
    'jasa pembuatan website',
    'web developer Indonesia',
    'cyber security',
    'website UMKM',
    'company profile',
    'landing page',
    'keamanan website',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Andra Pratama — Web Developer & Cyber Security Specialist',
    description:
      'Membangun website profesional, cepat, dan aman untuk bisnis Anda.',
    locale: 'id_ID',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e1726',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="dark bg-background">
      <body
        className={`${jakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
