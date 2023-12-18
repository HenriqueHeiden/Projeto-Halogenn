import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Halogenn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <div>          
          {children}
        </div>        
      </body>
    </html>
  )
}
