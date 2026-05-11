"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Bell Island 1942", href: "/bell-island-1942" },
  { name: "Expedition Objectives", href: "/expedition-objectives" },
  { name: "Our Team", href: "/our-team" },
  { name: "Virtual Memorial", href: "/virtual-memorial" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Support the Expedition", href: "/support-the-expedition" }
]

export default function Footer() {

  const pathname = usePathname()

  return (

<footer
  className="bg-gray-900 text-gray-300 relative"
  style={{
    backgroundImage: "url('/images/dot-grid.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  }}
>

      {pathname === "/support-the-expedition" || pathname === "/" && (
        <Image
          src="/images/Bell-Island-Battle-of-the-Atlantic-Expedition-Banner.jpg"
          className="w-full"
          width={1920}
          height={300}
          alt="Donation Banner"
        />
      )}
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 py-14">

        <div>
          <Link href="/"> <Image src={`/images/logo.png`}
              alt="Battle of Atlantic Logo"
              width={100}
              height={60}
              priority /></Link>

        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>

          <ul className="space-y-2 text-sm">
           {navLinks.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className="block"
              >
                {link.name}
              </Link>

            ))}
          </ul>
        </div>

<div>
  <h4 className="text-white font-semibold mb-3">Contact</h4>

  <p className="text-sm">
    Email:{" "}
    <a
      href="mailto:bellislandexpedition@gmail.com"
      className="underline hover:text-white"
    >
      bellislandexpedition@gmail.com
    </a>
  </p>

  {/* Social Icons */}
  <div className="flex gap-4 mt-6">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <Facebook size={30} />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <Instagram size={30} />
    </a>
  </div>
</div>

      </div>

      <div className="border-t border-gray-800 text-center text-sm py-4 copyright-bar">
        Copyright © Battle of the Atlantic Virtual Memorial 2026 | All Rights Reserved | Powered By <a href="https://www.adaan.com/" target="_blank" className="underline">Adaan Digital Solutions Pvt Limited</a>
      </div>

    </footer>
  )
}