"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import styles from "./Navbar.module.scss"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Bell Island 1942", href: "/bell-island-1942" },
  { name: "Expedition Objectives", href: "/expedition-objectives" },
  { name: "Our Team", href: "/our-team" },
  { name: "Virtual Memorial", href: "/virtual-memorial" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Support the Expedition", href: "/support-the-expedition" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
  className={`${styles.header} ${
    isScrolled ? styles.scrolled : ""
  }`}
>

      <div className={styles.container}>

        <div className={styles.inner}>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={130}
              height={70}
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className={styles.menu}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button title="Menu" aria-label="Mobile Menu"
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.mobileButton} ${
              isOpen ? styles.open : ""
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileList}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

    </header>
  )
}