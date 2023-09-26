import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSM pro',
  description: 'Js Mastery pro site - learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins text-slate-100'>{children}</body>
    </html>
  )
}
