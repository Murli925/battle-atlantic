import Image from "next/image"
import Link from "next/link"
import styles from "./ContentSection.module.scss"

type Props = {
  title?: string
  description?: React.ReactNode
  image?: string
  images?: string[]
  video?: string 
  reverse?: boolean

  buttonText?: string
  buttonLink?: string
  buttonVariant?: "primary" | "secondary" | "accent"
  className?: string
}

export default function ContentSection({
  title,
  description,
  image,
  images,
  video,
  reverse = false,
  buttonText,
  buttonLink = "#",
  buttonVariant = "primary",
  className = ""
}: Props) {
  const showText =
    title || description || buttonText

const showMedia =
  (images && images.length > 0) ||
  (image && image.trim() !== "") ||
  (video && video.trim() !== "")

  return (
    <section className={`py-10 ${className} md:py-20`}>
      <div className="max-w-7xl mx-auto px-5" data-aos="fade-up">
        <div
          className={`flex gap-4 md:gap-12 flex-col md:flex-row items-stretch ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >

          {/* Text Section */}
          {showText && (
            <div className="flex-1 order-2 md:order-1 md:my-4">
              <div className="max-w-full md:mx-0">

                {title && (
                  <h2 className="md:text-3xl heading">
                    {title}
                  </h2>
                )}

                {description && (
                  <div className={styles.description}>
                    {description}
                  </div>
                )}

                {buttonText && (
                  <Link
                    href={buttonLink}
                    className={`btn btn-${buttonVariant}`}
                  >
                    {buttonText}
                  </Link>
                )}

              </div>
            </div>
          )}

          {/* Image Section */}
          {showMedia && (
  <div className="flex-1 w-full order-1 md:order-2 flex">
    <div className="relative w-full min-h-[250px] md:min-h-full overflow-hidden">

      {/* 🎥 VIDEO */}
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : images && images.length === 2 ? (

        /* 🖼️ TWO IMAGE GRID */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
          {images.map((img, i) => (
            <div key={i} className="relative w-full h-full min-h-[250px]">
              <Image
                src={img}
                alt={`image-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      ) : (

        /* 🖼️ SINGLE IMAGE */

        <Image
          src={image!}
          alt={title || "Section image"}
          fill
          className={styles.image}
        />
      )}

    </div>
  </div>
)}

        </div>
      </div>
    </section>
  )
}