import TeamMemberCard from "@/components/TeamMemberCard"

type Member = {
  name: string
  role?: string
  subtitle?: string
  bio?: React.ReactNode
  image?: string
}

type Props = {
  members: Member[]
  className?: string
}

export default function TeamSection({
  members,
  className = ""
}: Props) {
  return (
    <section className={`py-10 md:py-20 ${className} bg-[var(--secondary-bg-color)]`}>

      <div className="max-w-7xl mx-auto px-5">

        <div className="space-y-10">

          {members.map((member, index) => (
            <TeamMemberCard
              key={member.name || index}
              {...member}
            />
          ))}

        </div>

      </div>

    </section>
  )
}