import Image from "next/image"
import Link from "next/link"
import styles from "./CenterImageSection.module.scss"

type SideBlock = {
  title?: string
  description?: React.ReactNode
  buttonText?: string
  buttonLink?: string
  buttonVariant?: "primary" | "secondary" | "accent"
}

type Props = {
  left?: SideBlock
  right?: SideBlock
  image?: string
  imageAlt?: string
  backgroundImage?: string
  className?: string
}

export default function CenterImageSection({
  left,
  right,
  image,
  imageAlt = "Section image",
  backgroundImage,
  className = ""
}: Props) {
  const showLeft =
    left &&
    (left.title || left.description || left.buttonText)

  const showRight =
    right &&
    (right.title || right.description || right.buttonText)

  const showImage = image && image.trim() !== ""

  const showBg = backgroundImage && backgroundImage.trim() !== ""

  return (
    <section className={`relative py-10 md:py-20 overflow-hidden ${className}`}>
      
      {/* Background Image */}
      {showBg && (
        <div className="absolute inset-0 -z-20">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5">
        <div
          className="flex gap-2 md:gap-12 flex-col md:flex-row items-stretch"
          data-aos="fade-up"
        >

          {/* Left Content */}
          {showLeft && (
            <div className={`p-6 flex-1 ${styles.cicontentcolumn}`}>
              {left.title && (
                <h2 className={styles.heading}>{left.title}</h2>
              )}

              {left.description && (
                <div className={styles.description}>
                  {left.description}
                </div>
              )}

              {left.buttonText && (
                <Link
                  href={left.buttonLink || "#"} title={left.buttonText}
                  className={`btn btn-${left.buttonVariant || "primary"}`}
                >
                  {left.buttonText}
                </Link>
              )}
            </div>
          )}

          {/* Center Image */}
          {showImage && (
            <div className="flex-1">
              <div className="relative w-full h-[280px] md:h-full">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          )}

          {/* Right Content */}
          {showRight && (
            <div className={`p-6 flex-1 ${styles.cicontentcolumn}`}>
              {right.title && (
                <h2 className={styles.heading}>{right.title}</h2>
              )}

              {right.description && (
                <div className={styles.description}>
                  {right.description}
                </div>
              )}

              {right.buttonText && (
                <Link
                  href={right.buttonLink || "#"}
                  title={right.buttonText}
                  className={`btn btn-${right.buttonVariant || "primary"}`}
                >
                  {right.buttonText}
                </Link>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}