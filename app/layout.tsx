import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

export const jakarta = Plus_Jakarta_Sans({ 
  weight: '400', 
  preload: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} antialiased dark:bg-gray-800`} >{children}</body>
    </html>
  )
}
