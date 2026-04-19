"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { ReactNode } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

type Props<T> = {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode

  slidesPerView?: number
  spaceBetween?: number
  autoplay?: boolean
  loop?: boolean
}

export default function GenericCarousel<T>({
  items,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 20,
  autoplay = true,
  loop = true
}: Props<T>) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={false}
      loop={loop}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      spaceBetween={spaceBetween}
      speed={1000}

      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView }
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {renderItem(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}