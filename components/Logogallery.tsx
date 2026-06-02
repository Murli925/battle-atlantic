"use client"

import Image from "next/image"

type Item = {
  image: string
  link?: string
  alt?: string
}

type Group = {
  title?: string
  description?: string
  items: Item[]
}

type Props = {
  groups: Group[]
  className?: string
}

export default function LogoGallery({
  groups,
  className = ""
}: Props) {
  return (
    <section className={`py-2 md:py-2 ${className}`}>
      <div className="">

        {groups.map((group, index) => (
          <div key={index}>

            {/* Group Title */}
            {group.title && (
              <h3 className="heading mb-4 mt-4">
                {group.title}
              </h3>
            )}
            {group.description && (
              <p className="mb-4">
                {group.description}
              </p>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              {group.items.map((item, i) => {
                const content = (
                  <div className="relative w-full h-[80px] md:h-[100px] mb-3">
                    <Image
                      src={item.image}
                      alt={item.alt || "logo"}
                      fill
                      className="object-contain object-left transition duration-300 hover:scale-105"
                    />
                  </div>
                )

                return item.link ? (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                )
              })}

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}