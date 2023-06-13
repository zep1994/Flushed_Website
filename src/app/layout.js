import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flushed',
  description: 'A Healthier You One Flush At a Time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1413499394085097" crossorigin="anonymous"></script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
