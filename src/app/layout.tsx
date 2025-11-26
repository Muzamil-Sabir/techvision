import type { Metadata } from 'next'
import { Poppins, Orbitron } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import ClientScripts from '@/components/ClientScripts'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const orbitron = Orbitron({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'TechVision Solutions - Software Development & Tech Solutions',
  description: 'Crafting cutting-edge software solutions that propel businesses into the future. From web to mobile, desktop to AI - we turn innovation into impact.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orbitron.variable}`}>
        <AnimatedBackground />
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  )
}
