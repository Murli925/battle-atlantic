import Image from "next/image"
import Link from "next/link"
import styles from "./CenterImageSection.module.scss"

type SideBlock = {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  buttonVariant?: "primary" | "secondary" | "accent"
}

type Props = {
  left: SideBlock
  right: SideBlock
  image: string
  imageAlt?: string
  className?: string
}

export default function CenterImageSection({
  left,
  right,
  image,
  imageAlt = "Section image",
  className = ""
}: Props) {
  return (
    <section className={`py-10 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          data-aos="fade-up"
        >
          {/* Left Content */}
          <div className={`p-6 ${styles.cicontentcolumn}`}>
            <h2 className={styles.heading}>{left.title}</h2>
            <div className={styles.description}>{left.description}</div>

            {left.buttonText && (
              <Link
                href={left.buttonLink || "#"}
                className={`btn btn-${left.buttonVariant || "primary"}`}
              >
                {left.buttonText}
              </Link>
            )}
          </div>

          {/* Center Image */}
          <div>
            <div className="relative w-full h-[280px] md:h-[400px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className={styles.image}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`p-6 ${styles.cicontentcolumn}`}>
            <h2 className={styles.heading}>{right.title}</h2>
            <div className={styles.description}>{right.description}</div>

            {right.buttonText && (
              <Link
                href={right.buttonLink || "#"}
                className={`btn btn-${right.buttonVariant || "primary"}`}
              >
                {right.buttonText}
              </Link>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}