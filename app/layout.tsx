import Navbar from "@/components/Navbar"
import AOSInit from "@/components/AOSInit"
import Footer from "@/components/Footer"
import Script from "next/script";


import { Barlow, Source_Serif_4, Great_Vibes } from "next/font/google"

import "./globals.scss"


const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const sourceserif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
})


export const metadata = { metadataBase: new URL("https://battleoftheatlanticmemorial.org"), title: "Battle of the Atlantic Virtual Memorial", description: "A digital reconstruction of the Bell Island naval battlefield and memorial dedicated to the Battle of the Atlantic.", }

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
<Script src="https://www.googletagmanager.com/gtag/js?id=G-L0Q6LH4N38" strategy="afterInteractive" /> <Script id="google-analytics" strategy="afterInteractive"> {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-L0Q6LH4N38'); `} </Script>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "Battle of the Atlantic Virtual Memorial", url: "https://battleoftheatlanticmemorial.org", logo: "https://battleoftheatlanticmemorial.org/images/logo.png", sameAs: [], description: "A digital reconstruction of the Bell Island naval battlefield and memorial dedicated to the Battle of the Atlantic.", }), }} />

        <AOSInit/>
        <Navbar/>
        

        <main className="mx-auto overflow-hidden">
          {children}

        </main>

        <Footer />

      </body>

    </html>
  )
}