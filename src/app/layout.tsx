import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './nav-bar'
// import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-white dark:bg-black"}>
        {/* <body className={twmerge(inter.className, "bg-white dark:bg-black")}>  */}
        <NavBar></NavBar>
        <main className="w-1/3 mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}