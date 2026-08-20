import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/404.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">

        <p className="text-sm md:text-base uppercase tracking-[0.3em] opacity-80 mb-4">
          Page Not Found
        </p>

        <h1 className="text-7xl md:text-[10rem] font-bold leading-none tracking-wider mb-5 accent-text">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          This page could not be found
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-90 mb-10">
          The page you are looking for may have been moved, removed, or is
          no longer available. Return to the memorial and continue exploring
          the history of the Battle of the Atlantic.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            href="/"
            title="Return to the Battle of the Atlantic Memorial homepage"
            className="btn btn-primary"
          >
            Return to Homepage
          </Link>

          <Link
            href="/virtual-memorial"
            title="Explore the Battle of the Atlantic Virtual Memorial"
            className="btn btn-secondary"
          >
            Explore the Virtual Memorial
          </Link>

        </div>

      </div>

    </main>
  )
}