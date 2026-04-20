import ContentSection from "@/components/sections/ContentSection"
import ServicesSection from "@/components/sections/ServiceSection"

export default function Home() {
  return (
    <>
<ContentSection
  title="An Invisible Battlefield"
  description="Unlike traditional battlefields, the Battle of the Atlantic left no preserved front lines, monuments, or cemeteries to convey its scale. Thousands of sailors and merchant seamen were lost at sea, often without graves, and families were left without a place to visit or remember. As a result, much of this defining campaign remains physically and publicly invisible. The Bell Island Virtual Memorial addresses this absence by creating a permanent, accessible representation of one of Canada’s most significant wartime environments."
  image="/images/banner-1.jpg"
  buttonText="Learn More"
  buttonLink="/project"
  buttonVariant="primary"
/>
<ServicesSection/>
<ContentSection
  title="Support the Memorial"
  description="Help preserve naval history and honor those who served."
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
/>

<ContentSection
  title="Support the Mission"
  description="..."
  image="/images/banner-1-1.jpg"
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="accent"
  className="bg-[var(--primary-color)] text-white"
/>
<ContentSection
  title="Support the Memorial"
  description="Help preserve naval history and honor those who served."
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
  className="bg-[var(--secondary-bg-color)]"
/>
</>
  )
}