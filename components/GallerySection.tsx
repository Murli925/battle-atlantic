"use client"

import LightGallery from "lightgallery/react"
import React from "react"

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
  caption?: React.ReactNode
}

type Props = {
  items: Item[]
  className?: string

  mobileCols?: 1 | 2 | 3 | 4 | 5 | 6
  tabletCols?: 1 | 2 | 3 | 4 | 5 | 6
  desktopCols?: 1 | 2 | 3 | 4 | 5 | 6
}

export default function Gallery({
  items,
  className = "",

  mobileCols = 2,
  tabletCols = 3,
  desktopCols = 4

}: Props) {

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6"
  }

  const mdGridCols = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6"
  }

  const lgGridCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6"
  }

  return (
    <section className={`py-4 ${className}`}>

      <div className="max-w-7xl mx-auto">

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames={`
            grid
            ${gridCols[mobileCols]}
            ${mdGridCols[tabletCols]}
            ${lgGridCols[desktopCols]}
            gap-4
          `}
        >

          {items.map((item, index) => (

            <a
              key={index}
              href={item.src}
              data-lg-size="1400-900"
              className="relative block overflow-hidden group"
            >

              <div className="relative w-full h-[250px] overflow-hidden">

                <Image
                  src={item.thumb || item.src}
                  alt={item.alt || "Gallery image"}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {item.caption && (
                <figcaption className="text-center text-sm mt-2">
                  {item.caption}
                </figcaption>
              )}

            </a>

          ))}

        </LightGallery>

      </div>

    </section>
  )
}