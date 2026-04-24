import Slider from "@/components/sections/HeroSlider"
import ContentSection from "@/components/sections/ContentSection"
import ServicesSection from "@/components/sections/ServiceSection"
import QuoteSection from "@/components/sections/QuoteSection"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"
import CTASection from "@/components/sections/CTASection"

export default function Home() {

const slides = [
    {
      image: "/images/banner-1-1.jpg",
      alt: "Battle of the Atlantic",
      title: "Canada’s Battle of the Atlantic Virtual Memorial",
      subtitle: "Bell Island, Newfoundland and Labrador — 1942",
      description: [
        "Unlike land warfare, naval combat leaves few visible traces. Ships sink offshore, crews are lost, and families are often left without graves or places to remember. The Battle of the Atlantic—the longest campaign of the Second World War—remains one of the least visible, yet most consequential chapters in Canada’s history.",
        "This project will make that invisible battlefield visible—through archaeology, marine science, and digital reconstruction.",
      ],
      buttons: [
        {
          label: "Support the Expedition",
          href: "/support-us",
          className: "btn btn-accent",
        },
        {
          label: "Explore the Memorial",
          href: "/project",
          className: "btn btn-primary",
        },
      ],
    },
    {
      image: "/images/banner-1.jpg",
      alt: "Memorial Wreck Site",
      title: "Canada’s Battle of the Atlantic Virtual Memorial",
      subtitle: "Bell Island, Newfoundland and Labrador — 1942",
      description: [
        "Unlike land warfare, naval combat leaves few visible traces. Ships sink offshore, crews are lost, and families are often left without graves or places to remember. The Battle of the Atlantic—the longest campaign of the Second World War—remains one of the least visible, yet most consequential chapters in Canada’s history.",
        "This project will make that invisible battlefield visible—through archaeology, marine science, and digital reconstruction.",
      ],
      buttons: [
        {
          label: "Support the Expedition",
          href: "/support-us",
          className: "btn btn-accent",
        },
        {
          label: "Explore the Memorial",
          href: "/project",
          className: "btn btn-primary",
        },
      ],
    },
  ]


  return (
    <>
<Slider slides={slides}/>
<QuoteSection/>
<ContentSection
  title="An Invisible Battlefield"
  description={<><p className='mb-2'>Unlike traditional battlefields, the Battle of the Atlantic left no preserved front lines, monuments, or cemeteries to convey its scale. Thousands of sailors and merchant seamen were lost at sea, often without graves, and families were left without a place to visit or remember. As a result, much of this defining campaign remains physically and publicly invisible.</p> <p>The Bell Island Virtual Memorial addresses this absence by creating a permanent, accessible representation of one of Canada’s most significant wartime environments.</p></>}
  image="/images/GhostBowReneeJILL8747l.jpg"
  buttonText="Learn More"
  buttonLink="/project"
  buttonVariant="primary"
/>
<ServicesSection/>
<ContentSection
  title="Bell Island: A Rare Wartime Landscape"
  description={<>
  <p className='mb-2'>Bell Island preserves a unique concentration of wartime features linked within a single geographic setting:</p>
  <CheckList
  items={[
    { text: "Four Second World War shipwrecks in Conception Bay" },
    { text: "The remains of Scotia Pier" },
    { text: "A preserved coastal artillery battery" },
    { text: "The Seamen&rsquo;s Cemetery at Lance Cove" },
    { text: "Flooded iron ore mine workings" },
  ]}
/>

  </>}
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
/>

<CenterImageSection
  className="bg-[var(--primary-color)] text-white"

  image="/images/GhostBowReneeJILL8747l.jpg"
  imageAlt="Historic submarine"

  left={{
    title: "Newfoundland and the War at Sea",
    description:
      "Bell Island’s iron ore was essential to Allied steel production, making it a strategic target within the North Atlantic war. What appears to be a local anchorage was, in reality, part of a global system linking North America to Britain through convoy routes, naval bases, and industrial supply chains.",
    buttonText: "Learn More",
    buttonLink: "/project",
    buttonVariant: "primary"
  }}

  right={{
    title: "From Seafloor to Digital Memorial",
    description:"This project creates an integrated three-dimensional landscape linking wrecks, shoreline, and industrial infrastructure into a single, coherent virtual environment—transforming Bell Island from a series of isolated sites into a unified historical battlefield.",
    buttonText: "Support Us",
    buttonLink: "/support-us",
    buttonVariant: "accent"
  }}
/>

<ContentSection
  title="Expedition Partners and Collaborators"
  description={<>

  <CheckList

  items={[
    { text: "Marine Institute, Memorial University of Newfoundland (MI–MUN)" },
    { text: "Shipwreck Preservation Society of Newfoundland and Labrador (SPSNL)" },
    { text: "VOYIS Imaging" },
    { text: "Royal Canadian Geographical Society (RCGS)" },
    { text: "HMCS Canada Expedition Dive Team" }
  ]}
/>
  <p className='mb-2'>The expedition has received grant support from the Royal Canadian Geographical Society and is further advanced through significant in-kind contributions from academic and technical partners.</p>
  <p className='mb-2'>Additional support from private donors, foundations, government programs, and corporate partners will enable the full realization of the Virtual Memorial.</p>
  </>}
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
/>

<CTASection
        title="Support the Virtual Memorial"
        backgroundImage="/images/GhostBowReneeJILL8747l.jpg"
        buttons={[
          {
            text: "Support the Expedition",
            link: "/support-us",
            variant: "primary"
          },
          {
            text: "Contact Us About Partnership Opportunities",
            link: "/contact",
            variant: "accent"
          }
        ]}
      />
</>
  )
}