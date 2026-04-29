import Image from "next/image"

type Props = {
  subtitle:string
  title: string
  image: string
  imageAlt?: string
  className?: string
}

export default function InnerBanner({
  subtitle,
  title,
  image,
  imageAlt = "Banner image",
  className = ""
}: Props) {
  return (
    <section
      className={`relative h-[80vh] min-h-[520px] overflow-hidden ${className}`}
    >
      {/* Background */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-10"></div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] z-20"
        style={{
          background:
            "linear-gradient(to top, var(--primary-color) 0%, transparent 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-5">
        <div className="flex h-full items-end pb-8 md:pb-16">
          <div className="w-full max-w-3xl">
<span className="text-white subtitle">{subtitle}</span>
            <h1 className="text-white heading leading-tight font-semibold">
              {title}
            </h1>

            
          </div>
        </div>
      </div>
    </section>
  )
}