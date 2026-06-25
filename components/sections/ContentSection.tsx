"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./ContentSection.module.scss"
import { useEffect, useRef } from "react"

type Props = {
  title?: React.ReactNode
  description?: React.ReactNode

  image?: string
  imageAlt?: string

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
  imageAlt,

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

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 10
    }
  }, [])

  return (
    <section className={`content-section py-10 ${className} md:py-20`}>

      <div className="max-w-7xl mx-auto px-5">

        <div
          className={`flex gap-4 md:gap-12 flex-col md:flex-row items-stretch ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >

          {/* TEXT SECTION */}
          {showText && (
            <div className="flex-1 order-2 md:order-1 md:my-2 col-primary">

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
                    title={
                      typeof buttonText === "string"
                        ? buttonText
                        : "Section button"
                    }
                    target={buttonTarget}
                    className={`btn btn-${buttonVariant}`}
                  >
                    {buttonText}
                  </Link>
                )}

              </div>

            </div>
          )}

          {/* MEDIA SECTION */}
          {showMedia && (

            <div className="flex-1 w-full order-1 md:order-2 flex col-secondary">

              <div className="w-full">

                {/* MEDIA WRAPPER */}
                <div className="relative w-full min-h-[250px] md:min-h-full overflow-hidden">

                  {/* VIDEO */}
                  {video ? (

                    <video
                      src={video}
                      loop
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      ref={videoRef}
                      className="absolute inset-0 w-full min-h-[250px] md:min-h-[400px] object-cover"
                    />

                  ) : images && images.length === 2 ? (

                    /* TWO IMAGE GRID */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">

                      {images.map((img, i) => (

                        <div
                          key={i}
                          className="relative w-full h-full min-h-[450px]"
                        >

                          <Image
                            src={img}
                            alt={`Gallery image ${i + 1}`}
                            fill
                            loading="lazy"
                            className="object-cover"
                          />

                        </div>

                      ))}

                    </div>

                  ) : (

                    /* SINGLE IMAGE */
                    <Image
                      src={image!}
                      alt={imageAlt || "Section image"}
                      fill
                      loading="lazy"
                      className={styles.image}
                    />

                  )}

                </div>

                {/* CAPTION */}
                {caption && (
                  <figcaption className="text-sm mt-2 opacity-75 media-caption">
                    {caption}
                  </figcaption>
                )}

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  )
}
