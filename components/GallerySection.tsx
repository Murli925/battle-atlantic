"use client"

import LightGallery from "lightgallery/react"

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"

// styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-zoom.css"

import Image from "next/image"

type Item = {
  src: string
  thumb?: string
  alt?: string
}

type Props = {
  items: Item[]
  className?: string
}

export default function Gallery({
  items,
  className = ""
}: Props) {
  return (
    <section className={`py-4 ${className}`}>
      <div className="max-w-7xl mx-auto">

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.src}
              data-lg-size="1400-900"
              className="relative block overflow-hidden"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={item.thumb || item.src}
                  alt={item.alt || "Gallery image"}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </a>
          ))}
        </LightGallery>

      </div>
    </section>
  )
}