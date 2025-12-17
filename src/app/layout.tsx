import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { GlobalAudio } from './global-audio'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Love Letter',
  description: 'Love Letter to My Love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalAudio />
          {children}
        </Providers>
      </body>
    </html>
  )
}

