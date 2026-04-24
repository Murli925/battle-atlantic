import HeroSlider from "@/components/sections/HeroSlider"
import ContentSection from "@/components/sections/ContentSection"
import ServicesSection from "@/components/sections/ServiceSection"
import QuoteSection from "@/components/sections/QuoteSection"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"
import CTASection from "@/components/sections/CTASection"

export default function Bell_island_1942() {

const slides = [
    {
      image: "/images/banner-1-1.jpg",
      alt: "The Bell Island Attacks, 1942",
      title: "The Bell Island Attacks, 1942",
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
      image: "/images/banner-1-1.jpg",
      alt: "The Bell Island Attacks, 1942",
      title: "The Bell Island Attacks, 1942",
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
    }
    
  ]


  return (
    <>
{/* --------------------------------------------  Section 1 -------------------------------------------- */}
<HeroSlider slides={slides}/>
{/* --------------------------------------------  Section 2 -------------------------------------------- */}
<ContentSection
  title="Bell Island in the Atlantic Wartime System"
  description={<><p className="mb-2">Bell Island formed part of a vast and interconnected wartime maritime system. Ships anchored in Conception Bay in 1942 were not operating in isolation. They would be joining convoys with other ships, some of which may have begun their voyages in the Caribbean, carrying oil loaded in Trinidad and the refineries of Aruba and Cura&ccedil;ao&mdash;among Britain&rsquo;s most important wartime fuel sources&mdash;north along the eastern seaboard of the United States.</p>
<p className="mb-2">From Caribbean, American, Canadian, and Newfoundland ports&mdash;including Port of Spain, Aruba and Cura&ccedil;ao, Guant&aacute;namo, Philadelphia, New York, Boston, Halifax, Sydney, and St. John&rsquo;s&mdash;ships moved through an interconnected convoy system linking North America to Britain. Halifax served as the primary convoy assembly port, Sydney as a secondary assembly port for slower convoys, and St. John&rsquo;s as the base of the Newfoundland Escort Force, functioning as a critical escort transition and staging port for mid-ocean convoy operations.</p>
<p>What appears to be a local Newfoundland anchorage was, in reality, part of a global wartime network. The ships lying at anchor at Bell Island were part of that system&mdash;and therefore part of the war.</p></>}
  image="/images/GhostBowReneeJILL8747l.jpg"
  buttonText="Learn More"
  buttonLink="/project"
  buttonVariant="primary"
imageHeight="650px"
  imageHeightMobile="320px"
/>
{/* --------------------------------------------  Section 3 -------------------------------------------- */}
{/* <ServicesSection/> */}
{/* --------------------------------------------  Section 4 -------------------------------------------- */}
<ContentSection
  title="The 1942 Attacks"
  description={<>
  <p className="mb-2">In 1942, Bell Island, Newfoundland&mdash;then a separate Dominion under British administration&mdash;was a critical iron-ore loading centre supplying steel production for Canada and Britain. At the time, its Wabana mining complex included what was then the world&rsquo;s largest subsea iron ore mine.</p>
<p className="mb-2">Ironically, prior to the First World War Germany had been one of its largest clients, and from the mid-1930s until 1939 it was the mine&rsquo;s single largest customer&mdash;making Bell Island familiar to German naval planners. Yet the island&rsquo;s sheltered anchorage inside Conception Bay was regarded as relatively secure from submarine attack, even though the adequacy of its defences was a matter of concern. Its coastal artillery, intended to defend against surface warships, was ineffective against submarines.</p>
<p>On 5 September and 2 November 1942, German submarines U-513 and U-518 penetrated Conception Bay and torpedoed Allied vessels lying at anchor or engaged in loading operations off Bell Island. Four vessels were sunk, dozens of sailors were killed, and Bell Island became the site of the only confirmed sinkings of Allied shipping inside a defended industrial harbour along the east coast of either Canada or the United States during the Second World War.</p>
  {/* <CheckList
  items={[
    "Four Second World War shipwrecks in Conception Bay",
    "The remains of Scotia Pier",
    "A preserved coastal artillery battery",
    "The Seamen&rsquo;s Cemetery at Lance Cove",
    "Flooded iron ore mine workings"
  ]}
/> */}

  </>}
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
  className="bg-[var(--secondary-bg-color)]"
/>
{/* --------------------------------------------  Section 5 -------------------------------------------- */}
{/* <CenterImageSection
  className="bg-[var(--primary-color)] text-white"

  image="/images/GhostBowReneeJILL8747l.jpg"
  imageAlt="Historic submarine"
centertitle="Allied Vessels Sunk at Bell Island"
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
/> */}
{/* --------------------------------------------  Section 6 -------------------------------------------- */}

<ContentSection
  title="Allied Vessels Sunk at Bell Island"
  
  description={
    <>
      <h3 className="heading text-2xl my-5">SS Saganaga</h3>

      <CheckList
  items={[
    { text: "Nationality: British" },
    { text: "Type: Steam ore carrier" },
    { text: "Gross Register Tonnage: ~5,450 GRT" },
    { text: "Length: ~125 m (410 ft)" },
    { text: "Owner: Christian Salvesen & Co. Ltd." },
    { text: "Operator / Manager: South Georgia Co. (Salvesen group)" },
    { text: "Home Port: Leith (Edinburgh), Scotland" },
    {
      text: "Crew Complement: ~45–50 total",
      children: [
        "Merchant Navy officers and crew",
        "Royal Navy DEMS gun detachment"
      ]
    },
    { text: "Defensive Armament: Stern-mounted naval gun" },
    { text: "Attack: Torpedoed 5 September 1942 by U-513" },
    { text: "Time to Sink: Well under one minute" },
    { text: "Wreck Depth: ~25–30 m" },
    { text: "Fatalities: 29" },
    { text: "Rescue: Survivors recovered by nearby vessels and taken ashore" }
  ]}
/>
    </>
  }
  
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
/>
{/* --------------------------------------------  Section 7 -------------------------------------------- */}
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