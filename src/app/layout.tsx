import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infinizai',
  description: 'Проект для amoCRM',
  icons: [{ rel: "icon", url: "/shared/logoIcon.svg" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
