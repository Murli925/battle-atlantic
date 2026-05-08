import HeroSlider from "@/components/sections/HeroSlider"
import ContentSection from "@/components/sections/ContentSection"
import ServicesSection from "@/components/sections/ServiceSection"
import QuoteSection from "@/components/sections/QuoteSection"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"
import CTASection from "@/components/sections/CTASection"
import ParallaxSection from "@/components/ParallaxSection"
import Image from "next/image"
import type { Metadata } from "next"


export const runtime = "edge";

export const metadata: Metadata = {
  title: "Battle of the Atlantic Virtual Memorial | Bell Island Expedition",
  description:
    "A digital reconstruction of the Bell Island naval battlefield. Explore the 1942 attacks, underwater archaeology, and the Battle of the Atlantic through immersive mapping and research.",
  keywords: [
    "Bell Island",
    "Battle of the Atlantic",
    "naval history",
    "donation",
    "virtual memorial"
  ]
}

export default function Home() {


  return (
    <>
<HeroSlider
  slides={[
    {
      image: "/images/battle-of-atlantic-p1-01.jpg",
      title: "Canada’s Battle of the Atlantic Virtual Memorial",
      subtitle: "Bell Island, Newfoundland and Labrador — 1942",
      description: (
        <>
<p>
            Unlike land warfare, naval combat leaves few visible traces. Ships sink offshore, crews are lost, and families are often left without graves or places to remember. The Battle of the Atlantic—the longest campaign of the Second World War—remains one of the least visible, yet most consequential chapters in Canada’s history.
          </p>
          <p>This project will make that invisible battlefield visible—through archaeology, marine science, and digital reconstruction.</p>
        </>
      ),
      buttons: [
        {
          text: "Support the Expedition",
          link: "https://secure.qgiv.com/for/bellislandexpedition/",
          variant: "accent"
        },
        {
          text: "Explore the Memorial",
          link: "/virtual-memorial",
          variant: "primary"
        }
      ]
    },
    {
      image: "/images/battle-of-atlantic-p1-02.jpg",
      title: "Canada’s Battle of the Atlantic Virtual Memorial",
      subtitle: "Bell Island, Newfoundland and Labrador — 1942",

      description: (
        <>
          <p>
            Unlike land warfare, naval combat leaves few visible traces. Ships sink offshore, crews are lost, and families are often left without graves or places to remember. The Battle of the Atlantic—the longest campaign of the Second World War—remains one of the least visible, yet most consequential chapters in Canada’s history.
          </p>
          <p>This project will make that invisible battlefield visible—through archaeology, marine science, and digital reconstruction.</p>
        </>
      ),
      buttons: [
        {
          text: "Support the Expedition",
          link: "https://secure.qgiv.com/for/bellislandexpedition/",
          variant: "accent"
        },
        {
          text: "Explore the Memorial",
          link: "/virtual-memorial",
          variant: "primary"
        }
      ]
    }
  ]}
/>



<QuoteSection/>

<ParallaxSection image="./images/planned-convoy-routes.jpg" />

<ContentSection
className="bg-[var(--secondary-bg-color)]"
  title="The war at sea"
  description={
    <div className="relative w-full aspect-video mt-4">
      <iframe
        src="https://www.youtube.com/embed/tJHs3biTAdI"
        title="The war at sea"
        className="absolute mt-2 inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <small>Battle of the Atlantic — Archival footage of Royal
Canadian Navy and Royal Canadian Air Force operations, Allied convoys, and the war at sea (1939–
1945).</small>
    </div>
  }
/>

<ContentSection
  title="An Invisible Battlefield"
  description={<><p className='mb-2'>Unlike traditional battlefields, the Battle of the Atlantic left no preserved front lines, monuments, or cemeteries to convey its scale. Over 4,600 Canadian sailors, air crew and merchant seamen from the Royal Canadian Navy, Newfoundland Escort Force, Royal Canadian Air Force, and Merchant Marine, were lost at sea, often without graves, and families were left without a place to visit or remember. As a result, much of this defining campaign remains physically and publicly invisible.</p> <p>The Bell Island Battle of the Atlantic Virtual Memorial addresses this absence by creating a permanent, accessible representation of one of Canada’s most significant wartime environments.</p></>}
  image="/images/GhostBowReneeJILL8747l.jpg"
  buttonText="Learn More"
  buttonLink="/bell-island-1942"
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
  image="/images/Industrial-dock-and-gantry-in-grayscale.jpg"
  reverse
  buttonText="Support Us"
  buttonTarget="_blank"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="secondary"
/>

<CenterImageSection
  className="bg-[var(--primary-color)] text-white"

  image="/images/battle-of-atlantic-p1-07.webp"
  imageAlt="Historic submarine"

  left={{
    title: "Newfoundland and the War at Sea",
    description:
      "Bell Island’s iron ore was essential to Allied steel production, making it a strategic target within the North Atlantic war. What appears to be a local anchorage was, in reality, part of a global system linking North America to Britain through convoy routes, naval bases, and industrial supply chains.",
    buttonText: "Learn More",
    buttonLink: "/bell-island-1942",
    buttonVariant: "primary"
  }}

  right={{
    title: "From Seafloor to Digital Memorial",
    description:"This project creates an integrated three-dimensional landscape linking wrecks, shoreline, and industrial infrastructure into a single, coherent virtual environment—transforming Bell Island from a series of isolated sites into a unified historical battlefield.",
    buttonText: "Know More",
    buttonLink: "/virtual-memorial",
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
  {/* <a href="https://secure.qgiv.com/for/bellislandexpedition/" className={`text-[var(--accent-color)]`}>https://secure.qgiv.com/for/bellislandexpedition/</a> */}
  </>}
  video="/videos/(U-576) wk186-monitor-merchant-mariners.mp4"
  reverse
  buttonText="Support Us"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="primary"
/>

<CTASection
        title="Support the Virtual Memorial"
        backgroundImage="/images/GhostBowReneeJILL8747l.jpg"
        buttons={[
          {
            text: "Support the Expedition",
            link: "https://secure.qgiv.com/for/bellislandexpedition/",
            variant: "primary",
            buttonTarget:"_blank"
          },
          {
            text: "Contact Us About Partnership Opportunities",
            link: "/sponsors",
            variant: "accent",
            buttonTarget:""
          }
        ]}
      />
</>
  )
}