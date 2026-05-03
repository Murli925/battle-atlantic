import Image from "next/image"
import ContentSection from "@/components/sections/ContentSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import CheckList from "@/components/CheckList"
import CarouselSection from "@/components/CarouselSection"
import LogoGallery from "@/components/Logogallery"

export default function Sponsors() {


  return (
    <>
<InnerBanner
subtitle="Sponsors"
  title="Extending the Expedition Through In-Kind Support"
  image="/images/diver-on-gun-deck.jpg"
  className="object-position-top"
  imageAlt="Bell Island Expedition Team"
/>

<ContentSection
  title="Institutional Sponsors"
  description={
    <>
    
      <CheckList
          items={[
            {
              text: (
                <>
              Royal Canadian Geographical Society — Major Grant
              </>
              )
            }
          ]}
          />

      <h3 className="heading mt-3 mb-2">
        Private Donors-Expedition Sponsors ($5,000 and above) 
      </h3>
<h4 className="mb-2">Names listed with permission: </h4>

      <CheckList
  items={[
    { text: <>Joseph & Diane Frey</> }
  ]}

/> 
    </>
  }


/>

<CarouselSection

        title="Significant Contributions in Kind"
          bodytext="In-kind contributions include vessel support, marine survey capability, imaging systems, and field operations, expedition dive equipment, photogrammetry technology, all significantly extending the scope and effectiveness of the expedition.To date these contributions in kind amount to approximately 45% of the expedition’s total costs."
        items={[
          {
            image: "/images/marine-institute.jpg",
            link: "#",
            alt: "marine institute"
          },
          {
            image: "/images/memorial-university.jpg",
            link: "#",
            alt: "memorial university"
          },
          {
            image: "/images/voyis.jpg",
            link: "#",
            alt: "voyis"
          },
          {
            image: "/images/hmcs-canada.jpg",
            link: "#",
            alt: "hmcs canada"
          }
        ]}

         className="bg-[var(--secondary-bg-color)]"

      />

<ContentSection
  title="Flag Expeditions"

  description={
    <>
      <p className="my-2">
        The expedition has received initial support from private and institutional donors and may also receive contributions from individuals, government agencies, corporations, and foundations. Contributions at all levels support field operations, imaging technology, expedition logistics, student participation, and the development of the Virtual Memorial. Donors may be acknowledged, with permission, through expedition materials, publications, and presentations.
      </p>
      <LogoGallery
  // className="bg-[var(--secondary-bg-color)]"
  groups={[
    {
      title: "",
      items: [
        { image: "/images/RCGS-logo.jpg" }
      ]
    },
    {
      title: "Media Partners",
      items: [
        { image: "/images/Can Geo logo.jpg" }
      ]
    },
    {
      title: "Museum Collaborations",
      items: [
        {
          image: "/images/Canadian-Naval-Memorial-Trust.jpg",
          link: "https://www.cnmt.ca/"
        },
        {
          image: "/images/MMA-logo.jpg",
          link: "https://www.cnmt.ca/"
        }
      ]
    }
  ]}
/>
    </>
  }
  image="/images/banner-2.jpg"
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
      link: "/support-us",
      variant: "primary"
    },
        {
      text: "Contact Us About Partnership Opportunities",
      link: "/contact-us",
      variant: "accent"
    }
  ]}
/>
</>
  )
}