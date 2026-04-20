'use client'

import GenericCarousel from "@/components/GenericCarousel"
import Card from "@/components/Card"
import styles from "./ServiceSection.module.scss"
import { link } from "fs"

const services = [
  {
    title: "Submarine Exploration",
    description: "Explore underwater missions.",
    image: "/images/banner-1.jpg",
    link:"https://www.google.com/"
  },
    {
    title: "Submarine Exploration",
    description: "Explore underwater missions.",
    image: "/images/banner-1.jpg",
    link:"https://www.google.com/"
  },
    {
    title: "Submarine Exploration",
    description: "Explore underwater missions.",
    image: "/images/banner-1.jpg",
    link:"https://www.google.com/"
  },
  {
    title: "Naval History",
    description: "Learn about WWII battles.",
    image: "/images/banner-2.jpg",
    link:"https://www.google.com/"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[var(--secondary-bg-color)]">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl mb-10 text-center">
          Our Services
        </h2>

        <GenericCarousel
          items={services}
          autoplay
          renderItem={(item) => (
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          )}
        />

      </div>

    </section>
  )
}