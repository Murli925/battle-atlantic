import Link from "next/link"
import styles from './CTASection.module.scss'
type CTAButton = {
  text: string
  link: string
  variant?: "primary" | "secondary" | "accent"
}

type Props = {
  title: string
  backgroundImage: string
  overlayClassName?: string
  className?: string
  buttons: CTAButton[]
}

export default function CTASection({
  title,
  backgroundImage,
  overlayClassName = "bg-[rgba(18,42,64,0.72)]",
  className = "",
  buttons
}: Props) {
  return (
    <section
      className={`relative py-16 md:py-24 bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">

        <h2 className={`text-white ${styles.heading} mb-8 `}>
          {title}
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">

          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.link}
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