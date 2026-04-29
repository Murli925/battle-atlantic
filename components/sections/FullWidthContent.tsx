import Link from "next/link"
import styles from "./ContentSection.module.scss"

type Block = {
  title?: string
  description?: React.ReactNode
  buttonText?: string
  buttonLink?: string
  buttonVariant?: "primary" | "secondary" | "accent"
  blockClassName?: string
}

type Props = {
  blocks: Block[]
  className?: string
}

export default function FullWidthContent({
  blocks,
  className = ""
}: Props) {
  return (
    <section className={`py-10 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-5" data-aos="fade-up">

        <div className="space-y-8">

          {blocks.map((block, index) => (
            <div
              key={index}
              className={`w-full p-6 ${block.blockClassName || ""}`}
            >

              {block.title && (
                <h2 className="md:text-3xl heading">
                  {block.title}
                </h2>
              )}

              {block.description && (
                <div className={`!mb-0 ${styles.description}`}>
                  {block.description}
                </div>
              )}

              {block.buttonText && (
                <Link
                  href={block.buttonLink || "#"}
                  className={`btn btn-${block.buttonVariant || "primary"}`}
                >
                  {block.buttonText}
                </Link>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}