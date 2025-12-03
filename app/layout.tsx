import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIGH TECH TIME BANK',
  description: 'Conviértete en tu mejor versión tecnológica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-primary-navy text-white antialiased">
        {children}
      </body>
    </html>
  )
}