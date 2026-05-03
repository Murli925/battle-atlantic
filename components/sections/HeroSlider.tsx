"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import styles from "./HeroSlider.module.scss"

type Slide = {
  image: string
  alt?: string
  title?: string
  subtitle?: string
  description?: React.ReactNode
  buttons?: {
    text: string
    link: string
    variant?: "primary" | "secondary" | "accent"
  }[]
}

type Props = {
  slides: Slide[]
  autoplayDelay?: number
  showNavigation?: boolean
  showPagination?: boolean
  className?: string
}

export default function HeroSlider({
  slides,
  autoplayDelay = 4500,
  showNavigation = true,
  showPagination = true,
  className = ""
}: Props) {
  return (
    <section className={`${styles.hero} ${className}`}>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        loop={true}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        speed={1200}
      >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              
              <Image
                src={slide.image}
                alt={slide.alt || "Slide Image"}
                fill
                priority={index === 0}
                className={styles.image}
              />

              <div className={styles.overlay}>
                <div className={styles.content}>

                  {slide.title && <h1>{slide.title}</h1>}
                  {slide.subtitle && (
                    <h2 className="mb-2">{slide.subtitle}</h2>
                  )}

                  {slide.description && <div>{slide.description}</div>}

                  {slide.buttons && (
                    <div className={styles.buttons}>
                      {slide.buttons.map((btn, i) => (
                        <Link
                          key={i}
                          href={btn.link}
                          className={`btn btn-${btn.variant || "primary"}`}
                        >
                          {btn.text}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  )
}