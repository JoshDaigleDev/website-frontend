import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

import localFont from 'next/font/local'

const robotoRegular = localFont({
  src: '../../public/Roboto-Regular.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Josh Daigle\'s Website',
  description: 'Created By Josh Daigle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoRegular.className} text-white bg-black`}>
        <div className="z-30">
          <Header />
        </div>
        
        <div className="z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
