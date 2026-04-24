import Image from "next/image"
import Link from "next/link"
import styles from "./ContentSection.module.scss"

type Props = {
  title: string
  description: string
  image: string
  reverse?: boolean

  buttonText?: string
  buttonLink?: string
  buttonVariant?: "primary" | "secondary" | "accent"
  className?: string
}

export default function ContentSection({
  title,
  description,
  image,
  reverse = false,
  buttonText,
  buttonLink = "#",
  buttonVariant = "primary",
  className = ""
}: Props) {
  return (
    <section className={`py-10 ${className} md:py-20`} >

  <div className="max-w-7xl mx-auto px-5" data-aos="fade-up">

    <div
      className={`flex gap-4 md:gap-12 flex-col md:flex-row items-stretch ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >

      {/* Text */}
      <div className="flex-1 order-2 md:order-1 my-4">
        <div className="max-w-full md:mx-0">

          <h2 className={`md:text-3xl heading`}>{title}</h2>

          <div className={styles.description}>{description}</div>

          {buttonText && (
            <Link
              href={buttonLink}
              className={`btn btn-${buttonVariant}`}
            >
              {buttonText}
            </Link>
          )}

        </div>
      </div>

      {/* Image */}
      <div className="flex-1 w-full order-1 md:order-2 flex">
        <div className="relative w-full min-h-[250px] md:min-h-full">
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
          />
        </div>
      </div>

    </div>

  </div>

</section>
  )
}