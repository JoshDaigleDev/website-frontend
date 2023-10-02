import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'

import localFont from 'next/font/local'

const myFont = localFont({
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
      <body className={myFont.className}>
        <div className=" bg-gradient-to-t from-red-400 to-orange-300 ">
          <Header />
          <div className="grid grid-cols-12">
            <div className="col-span-6 col-start-4 ">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
