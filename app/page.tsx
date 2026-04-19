import ContentSection from "@/components/sections/ContentSection"
import ServicesSection from "@/components/sections/ServiceSection"

export default function Home() {
  return (
    <>
<ContentSection
  title="Battle of the Atlantic"
  description="The longest continuous campaign of WWII..."
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