'use client'

import GenericCarousel from "@/components/GenericCarousel"
import Card from "@/components/Card"
import styles from "./ServiceSection.module.scss"
import { link } from "fs"

const services = [
  {
    title: "Underwater archaeology",
    description: "High-resolution 3D documentation",
    image: "/images/underwater-archaeology.jpg",
    link:"/bell-island-1942"
  },
    {
    title: "Digital Terrain Model (DTM)",
    description: "Integrated seabed, shoreline, and land mapping",
    image: "/images/Creating-a-DTM.jpg",
    link:"/bell-island-1942"
  },
    {
    title: "Marine science",
    description: "Biological and ecological baseline studies",
    image: "/images/marine-science.jpg",
    link:"/bell-island-1942"
  },
  {
    title: "Graduate student training",
    description: "Field and research participation",
    image: "/images/Graduate-Students.jpg",
    link:"/virtual-memorial"
  },
  {
    title: "Public interpretation and heritage tourism",
    description: "Accessible digital and on-site engagement",
    image: "/images/U-505.jpg",
    link:"/virtual-memorial"
  }
]

export default function ServicesSection() {
  return (
    <section className={`py-10 md:py-20 bg-[var(--primary-color)] depthShadow ${styles.servicesSection}`}>

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl mb-10 text-center text-white">
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
        {/* <p className="mt-10 text-center max-w-4xl mx-auto px-5">This work builds on the HMCS Canada Expedition, which produced a complete three-dimensional photogrammetric model of Canada’s first purpose-built warship.</p> */}
<p className="mt-10 text-center max-w-4xl mx-auto px-5 text-white">This work builds on the HMCS <i>Canada</i> Expedition 2025, which produced a complete three-dimensional photogrammetric model of Canada&rsquo;s first purpose-built warship, as part of an integrated archaeological and marine science investigation, and NOAA&rsquo;s 2016 Battle of the Atlantic Expedition, which documented the wrecks of the German submarine U-<i>576</i> and the freighter <i>Bluefields</i> off North Carolina.</p>
      </div>

    </section>
  )
}