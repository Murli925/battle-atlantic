"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import styles from "./CTASection.module.scss"

type CTAButton = {
  text: string
  link: string
  buttonTarget?: string
  variant?: "primary" | "secondary" | "accent"
}

type Props = {
  title: string
  description: React.ReactNode
  backgroundImage: string
  overlayClassName?: string
  className?: string
  buttons: CTAButton[]
}

export default function CTASection({
  title,
  description,
  backgroundImage,
  overlayClassName = "bg-[rgba(18,42,64,0.72)]",
  className = "",
  buttons
}: Props) {

  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const handleScroll = () => {

      if (!bgRef.current) return

      const rect =
        bgRef.current.parentElement?.getBoundingClientRect()

      if (!rect) return

      const speed = 0.3

      const offset = rect.top * speed

      bgRef.current.style.transform =
        `translateY(${offset}px) scale(1.1)`

    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <section
      className={`relative overflow-hidden py-30 md:py-30 ${className}`}
    >

      {/* Background */}
      <div
        ref={bgRef}
        className="absolute -top-120 -bottom-20 left-0 right-0 will-change-transform"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundColor: "rgba(10, 36, 60, 0.67)",
          backgroundBlendMode: "multiply"
        }}
      />

      {/* Overlay */}
      {/* <div
        className={`absolute inset-0 ${overlayClassName}`}
      /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">

        <h2 className={`text-white font-600 ${styles.heading}`}>
          {title}
        </h2>

        <div className="text-white text-md mb-6">
          {description}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">

          {buttons.map((button, index) => (
            <Link
              key={index}
              title={button.text}
              href={button.link}
              target={button.buttonTarget}
              className={`btn btn-${button.variant || "primary"}`}
            >
              {button.text}
            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}