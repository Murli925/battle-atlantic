"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Image from "next/image"
import Link from "next/link"
import styles from "./HeroSlider.module.scss"

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

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
    <h1>Canada’s Battle of the Atlantic Virtual Memorial</h1>
    <h2 className="mb-2">Bell Island, Newfoundland and Labrador — 1942</h2>
    <p>
      Unlike land warfare, naval combat leaves few visible traces. Ships sink offshore, crews are lost, and families are often left without graves or places to remember. The Battle of the Atlantic—the longest campaign of the Second World War—remains one of the least visible, yet most consequential chapters in Canada’s history.</p>
<p>This project will make that invisible battlefield visible—through archaeology, marine science, and digital reconstruction.
    </p>


    <div className={styles.buttons}>
      <Link href="/support-us" className="btn btn-accent">
        Support the Expedition
      </Link>
      <Link href="/project" className="btn btn-primary">
        Explore the Memorial
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
    <h1>Bell Island, Newfoundland and Labrador — 1942</h1>
    <p>
      Unlike land warfare, naval combat leaves few visible traces. Ships sink offshore, crews are lost, and families are often left without graves or places to remember. The Battle of the Atlantic—the longest campaign of the Second World War—remains one of the least visible, yet most consequential chapters in Canada’s history.</p>
<p>This project will make that invisible battlefield visible—through archaeology, marine science, and digital reconstruction.
    </p>

    <div className={styles.buttons}>
      <Link href="/support-us" className="btn btn-accent">
        Support the Expedition
      </Link>
      <Link href="/project" className="btn btn-primary">
        Explore the Memorial
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