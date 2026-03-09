import './globals.css'
import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { Footer } from '@/components/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sincero — Design + Engineering Studio',
  description:
    'A one-stop design and software development studio. Husband and wife team building products and services since 2017.',
  metadataBase: new URL('https://www.sincero.tech'),
  openGraph: {
    title: 'Sincero — Design + Engineering Studio',
    description:
      'A one-stop design and software development studio. Husband and wife team building products and services since 2017.',
    url: 'https://www.sincero.tech',
    siteName: 'Sincero',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sincero — Design + Engineering Studio',
    description:
      'A one-stop design and software development studio. Husband and wife team building products and services since 2017.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-text font-body antialiased overflow-x-hidden">
        <NoiseOverlay />
        <ScrollProgress />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  )
}
