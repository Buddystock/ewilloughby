import type { Metadata } from 'next'
import { mplus1 } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ellington Willoughby | Portland, OR',
  description: 'Official website for the band Ellington Willoughby',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mplus1.className}`}>
        {children}
      </body>
    </html>
  )
}
