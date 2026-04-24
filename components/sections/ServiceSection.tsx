'use client'

import GenericCarousel from "@/components/GenericCarousel"
import Card from "@/components/Card"
import styles from "./ServiceSection.module.scss"
import { link } from "fs"

const services = [
  {
    title: "Underwater archaeology",
    description: "High-resolution 3D documentation",
    image: "/images/banner-1.jpg",
    link:"#"
  },
    {
    title: "Digital Terrain Model (DTM)",
    description: "Integrated seabed, shoreline, and land mapping",
    image: "/images/banner-1.jpg",
    link:"#"
  },
    {
    title: "Marine science",
    description: "Biological and ecological baseline studies",
    image: "/images/banner-1.jpg",
    link:"#"
  },
  {
    title: "Graduate student training",
    description: "Field and research participation",
    image: "/images/banner-2.jpg",
    link:"#"
  },
  {
    title: "Public interpretation and heritage tourism",
    description: "Accessible digital and on-site engagement",
    image: "/images/banner-2.jpg",
    link:"#"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-10 md:py-20 bg-[var(--secondary-bg-color)]">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl mb-10 text-center">
          A Memorial Built Through Science and Exploration
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
        <p className="mt-10 text-center max-w-4xl mx-auto px-5">This work builds on the HMCS Canada Expedition, which produced a complete three-dimensional photogrammetric model of Canada’s first purpose-built warship.</p>

      </div>

    </section>
  )
}