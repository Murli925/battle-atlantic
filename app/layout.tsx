import Navbar from "@/components/Navbar"
import AOSInit from "@/components/AOSInit"
import Footer from "@/components/Footer"
import { Barlow, Source_Serif_4 } from "next/font/google"

import "./globals.scss"
import Slider from "@/components/sections/HeroSlider"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const sourceserif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})

export const metadata = {
  title: "Battle of the Atlantic Virtual Memorial",
  description: "Historical memorial project"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <AOSInit/>
        <Navbar/>
        <Slider/>

        <main className="mx-auto">
          {children}
        </main>

        <Footer />

      </body>

    </html>
  )
}