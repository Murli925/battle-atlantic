'use client'

import GenericCarousel from "@/components/GenericCarousel"
import Card from "@/components/Card"

const supports = [
  {
    title: "Vessel Operations",
    description: "Field deployment",
    image: "/images/vessel.jpg",
    link:""
  },
    {
    title: "Imaging Systems",
    description: "Photogrammetry & sonar",
    image: "/images/imaging.jpg",
    link:""
  },
    {
    title: "Underwater Archaeology",
    description: "Wreck investigation & documentation",
    image: "/images/underwater.jpg",
    link:""
  },
  {
    title: "Marine Biology/ Marine Ecology",
    description: "Habitat assessment & biodiversity",
    image: "/images/marine.jpg",
    link:""
  },
  {
    title: "Field Logistics",
    description: "Equipment staging & at-sea support",
    image: "/images/field.jpg",
    link:""
  },
    {
    title: "Student Training",
    description: "MI-MUN participation",
    image: "/images/student.jpg",
    link:""
  },
    {
    title: "Virtual Memorial",
    description: "Public access platform",
    image: "/images/virtual-memorial.jpg",
    link:""
  }
]

export default function SupportSection() {
  return (
    <section className="py-10 md:py-20 bg-[var(--secondary-bg-color)]">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-3xl mb-10 text-center">
          What Your Support Enables
        </h2>

        <GenericCarousel
          items={supports}
          autoplay
          slidesPerView={4}
          spaceBetween={30}
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