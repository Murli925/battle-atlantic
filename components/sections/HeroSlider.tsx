"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import styles from "./HeroSlider.module.scss"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function HeroSlider() {
  return (
    <section className={styles.hero}>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        speed={1200}
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              src="/images/banner-1-1.jpg"
              alt="Battle of the Atlantic"
              fill
              priority
              className={styles.image}
            />

<div className={styles.overlay}>
  <div className={styles.content}>
    <h1>Battle of the Atlantic Virtual Memorial</h1>
    <p>
      Honoring the longest continuous military campaign of World War II
    </p>

    <div className={styles.buttons}>
      <Link href="/project" className="btn btn-primary">
        Explore Project
      </Link>

      <Link href="/support-us" className="btn btn-accent">
        Support Us
      </Link>
    </div>
  </div>
</div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={styles.slide}>
            <Image
              src="/images/banner-1.jpg"
              alt="Submarine Warfare"
              fill
              className={styles.image}
            />

<div className={styles.overlay}>
  <div className={styles.content}>
    <h1>Battle of the Atlantic Virtual Memorial</h1>
    <p>
      Honoring the longest continuous military campaign of World War II
    </p>

    <div className={styles.buttons}>
      <Link href="/project" className="btn btn-primary">
        Explore Project
      </Link>

      <Link href="/support-us" className="btn btn-accent">
        Support Us
      </Link>
    </div>
  </div>
</div>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
  )
}