"use client"

import { useState } from "react"

type Block = {
  title?: string
  description?: React.ReactNode
  blockClassName?: string
}

type Props = {
  blocks: Block[]
  className?: string
}

export default function Accordion({
  blocks,
  className = ""
}: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={`py-10 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 space-y-4">

        {blocks.map((block, index) => {
          const isOpen = activeIndex === index

          return (
            <div
              key={index}
              className={`overflow-hidden ${block.blockClassName || "bg-white"}`}
            >
              
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold">
                  {block.title}
                </h3>

                <span className="text-2xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-800 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px] p-5 pt-0" : "max-h-0 px-5"
                }`}
              >
                {block.description}
              </div>

            </div>
          )
        })}

      </div>
    </section>
  )
}