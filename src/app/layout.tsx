import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { GlobalAudio } from './global-audio'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lá thư tình',
  description: 'Lá thư tình gửi đến người yêu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="vi">
      <body className={inter.className}>
        <Providers>
          <GlobalAudio />
          {children}
        </Providers>
      </body>
    </html>
  )
}

