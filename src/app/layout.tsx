import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'En webbplats om vår planet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className={poppins.className}>
        <nav className="nav-menu">
          <ul>
            <li><Link href="/" className="active">Hem</Link></li>
            <li><Link href="/om-planeten">Om Planeten</Link></li>
            <li><Link href="/utforska">Utforska</Link></li>
            <li><Link href="/chat">Chat</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
        <div className="background"></div>
        <div className="page-content">
          {children}
        </div>
      </body>
    </html>
  )
} 