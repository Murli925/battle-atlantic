import Image from "next/image"
import Link from "next/link"
import styles from "./ContentSection.module.scss"

type Props = {
  title?: string
  description?: React.ReactNode
  image?: string
  images?: string[]
  video?: string 
  caption?: string
  reverse?: boolean

  buttonText?: string
  buttonLink?: string
  buttonTarget?: string

  buttonVariant?: "primary" | "secondary" | "accent"
  className?: string
}

export default function ContentSection({
  title,
  description,
  image,
  images,
  video,
  caption,
  reverse = false,
  buttonText,
  buttonTarget,
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
    <section className={`content-section py-10 ${className} md:py-20`}>
      <div className="max-w-7xl mx-auto px-5">
        <div
          className={`flex gap-4 md:gap-12 flex-col md:flex-row items-stretch ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >

          {/* Text Section */}
          {showText && (
            <div className="flex-1 order-2 md:order-1 md:my-4 col-primary">
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
                    target={buttonTarget}
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
  <div className="flex-1 w-full order-1 md:order-2 flex col-secondary">
    
    <div className="w-full">

      {/* Media Wrapper */}
      <div className="relative w-full min-h-[250px] md:min-h-full overflow-hidden">

        {/* 🎥 VIDEO */}
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="inset-0 w-full h-full object-cover absolute"
          />
        ) : images && images.length === 2 ? (

          /* 🖼️ TWO IMAGE GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-full min-h-[450px]"
              >
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

      {/* Caption */}
      {caption && (
        <p className="text-sm mt-1 text-foreground-color media-caption">
          {caption}
        </p>
      )}

    </div>

  </div>
)}

        </div>
      </div>
    </section>
  )
}