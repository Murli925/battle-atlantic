import Image from "next/image"

type Props = {
  name: string
  role?: string
  subtitle?: string
  bio?: React.ReactNode
  image?: string
}

export default function TeamMemberCard({
  name,
  role,
  subtitle,
  bio,
  image
}: Props) {

const profileImage = image || "/images/default-team-member.jpg"

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center p-3 bg-[var(--primary-bg-color)]" data-aos="fade-up">

      {/* Image */}
      <div className="relative w-full h-full aspect-[4/5] overflow-hidden">

        <Image
          src={profileImage}
          alt={name}
          fill
          className="object-cover h-full min-h-[350px] duration-700 hover:scale-110"
        />

      </div>

      {/* Content */}
      <div className="md:col-span-2 py-4">

        <h2 className="text-3xl heading">
          {name}
        </h2>

        {role && (
          <h3 className="mt-4 text-md font-semibold text-[var(--primary-color)]">
            {role}
          </h3>
        )}

        {subtitle && (
          <p className="mt-2 text-sm opacity-80">
            {subtitle}
          </p>
        )}

        {bio && (
          <div className="mt-6 space-y-4">
            {bio}
          </div>
        )}

      </div>

    </div>
  )
}