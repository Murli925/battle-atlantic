'use client'

import Image from "next/image"
import "./CarouselSection.module.scss"
import GenericCarousel from "@/components/GenericCarousel"

type Item = {
  image: string
  link?: string
  alt?: string
}

type Props = {
  title?: string
  items: Item[]
  className?: string
  bodytext:string
}

export default function CarouselSection({
  title,
  items,
  bodytext,
  className = ""
}: Props) {
  return (
    <section
      className={`py-10 md:py-20 bg-[var(--background-color)] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-5">

        {title && (
          <h2 className="text-3xl !mb-10 d-block text-center heading">
            {title}
          </h2>
        )}

        <GenericCarousel
          items={items}
          autoplay
          renderItem={(item) => (
            <a
              href={item.link || "#"}
              className="block relative w-full w-100  h-35"
            >
              <Image
                src={item.image}
                alt={item.alt || "Carousel Image"}
                fill
                className="object-contain"
              />
            </a>
          )}

        />
<p className="mt-10 text-center max-w-4xl mx-auto px-5">{bodytext}</p>
<Image src={"/images/In Kind Contributions chart.png"} width={700} height={100} className="mt-4 mx-auto" alt="In Kind Contributions chart" />
      </div>
    </section>
  )
}