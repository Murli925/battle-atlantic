import ContentSection from "@/components/sections/ContentSection";
import CheckList from "@/components/CheckList";
import CenterImageSection from "@/components/sections/CenterImageSection";
import CTASection from "@/components/sections/CTASection";
import InnerBanner from "@/components/sections/Inner-banner";
import Accordion from "@/components/AccordionSection";
import Gallery from "@/components/GallerySection";
import type { Metadata } from "next"
import Image from "next/image";


export const metadata: Metadata = {
  title: "Bell Island 1942 | Submarine Attacks in the Battle of the Atlantic",
  description:
    "Explore the 1942 submarine attacks on Bell Island, Newfoundland—where German U-boats struck Allied ships in a defended harbour during the Battle of the Atlantic.",
  keywords: [
    "Bell Island",
    "Battle of the Atlantic",
    "naval history",
    "donation",
    "virtual memorial"
  ],
    robots: {
    index: true,
    follow: true,
  }
}


export default function Bell_island_1942() {
  return (
    <>
      {/* --------------------------------------------  Section 1 -------------------------------------------- */}
      <InnerBanner
        subtitle="Bell Island 1942"
        title="Bell Island in the Second World War"
        image="/images/U-518-at-sea.jpg"
        imageAlt="Bell Island Harbour"
      />
      {/* --------------------------------------------  Section 2 -------------------------------------------- */}
      <ContentSection
        title="Bell Island in the Atlantic Wartime System"
        description={
          <>
            <p>
              In 1942, Bell Island, Newfoundland&mdash;then a separate Dominion
              under British administration&mdash;was a critical iron-ore loading
              centre supplying steel production for both Canada and Britain. The
              Wabana mining complex, extending beneath the seabed of Conception
              Bay, was at that time the largest subsea iron ore operation in the
              world, producing high-grade ore essential for wartime
              shipbuilding, armaments, and industrial production.
            </p>
            <p className="mt-2">
              The strategic importance of Bell Island was well
              understood&mdash;on both sides of the Atlantic.
            </p>
            <p className="mt-2">
              Prior to the First World War, Germany had been one of the
              principal consumers of Bell Island ore. From the mid-1930s until
              the outbreak of war in 1939, it had become the mine&rsquo;s single
              largest customer. As a result, the geography, shipping patterns,
              and industrial significance of Bell Island were familiar to German
              planners. When war came, this knowledge became operationally
              relevant.
            </p>
            <p className="mt-2">
              Despite its importance, Bell Island was not defended as a
              front-line battlefield. The anchorage inside Conception Bay was
              considered relatively secure due to its distance from the open
              Atlantic and the perceived difficulty submarines would face in
              penetrating the bay. However, this assumption masked a critical
              vulnerability: the island&rsquo;s fixed coastal
              artillery&mdash;positioned at Cemetery Hill&mdash;was designed to
              defend against surface warships, not submerged threats.
              Anti-submarine defences were limited, and harbour protection
              measures such as anti-torpedo nets were not yet in place.
            </p>
            <p className="mt-2 mb-4">
              Bell Island was, in effect, a vital industrial node operating
              within a global convoy system&mdash;but without the defensive
              depth that system required.
            </p>
          </>
        }
        image="/images/convoy-routes.jpeg"
        caption="Caption: North Atlantic convoy routes and escort zones during the Second World War, illustrating
Newfoundland’s strategic position within the Allied Atlantic supply system."
        buttonText="Learn More"
        buttonLink="/virtual-memorial"
        buttonVariant="primary"
      />

      {/* --------------------------------------------  Section 3 -------------------------------------------- */}

      <ContentSection
        title="The 1942 Attacks"
        description={
          <>
            <p className="mb-2">
              In 1942, Bell Island, Newfoundland&mdash;then a separate Dominion
              under British administration&mdash;was a critical iron-ore loading
              centre supplying steel production for Canada and Britain. At the
              time, its Wabana mining complex included what was then the
              world&rsquo;s largest subsea iron ore mine.
            </p>
            <p className="mb-2">
              Ironically, prior to the First World War Germany had been one of
              its largest clients, and from the mid-1930s until 1939 it was the
              mine&rsquo;s single largest customer&mdash;making Bell Island
              familiar to German naval planners. Yet the island&rsquo;s
              sheltered anchorage inside Conception Bay was regarded as
              relatively secure from submarine attack, even though the adequacy
              of its defences was a matter of concern. Its coastal artillery,
              intended to defend against surface warships, was ineffective
              against submarines.
            </p>
            <p>
              On 5 September and 2 November 1942, German submarines U-513 and
              U-518 penetrated Conception Bay and torpedoed Allied vessels lying
              at anchor or engaged in loading operations off Bell Island. Four
              vessels were sunk, dozens of sailors were killed, and Bell Island
              became the site of the only confirmed sinkings of Allied shipping
              inside a defended industrial harbour along the east coast of
              either Canada or the United States during the Second World War.
            </p>
          </>
        }
        image="/images/fHE6J28H.png"
        caption="Caption: Conception Bay and Bell Island during the Second World War, showing the iron ore anchorage,
loading piers, and coastal defence positions associated with the 1942 attacks."
        reverse
        buttonText="Support Us"
        buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
        buttonVariant="accent"
        buttonTarget="_blank"
        className="bg-[var(--secondary-bg-color)]"
      />

      {/* --------------------------------------------  Section 4 -------------------------------------------- */}

      <Accordion
        className="bg-[var(--primary-color)] text-white"
        blocks={[
          {
            blockClassName: "bg-[var(--background-color)] text-black",
            title:(<>5 September 1942 — U-boat <i>U-513</i> Attack</>),
            description: (
              <>
              <Image src="/images/wIePj3CQ.jpeg" alt="Burning Ship" className="w-full h-130 object-cover mb-4 rounded" width={100} height={100} />
                
                

                <ContentSection
                  title=""
                  description={<>
                <p className="mt-2">
                  On 5 September 1942, the German submarine <i>U-513</i>—a long-range
                  Type IXC U-boat under the command of Korvettenkapitän Rolf
                  Rüggeberg— entered Conception Bay. Navigating through narrow
                  approaches, shoals, and tidal currents, the submarine
                  penetrated deep into the bay and approached the anchorage off
                  Bell Island.
                </p>

                <p className="mt-2">
                  There, several ore carriers lay at anchor or were engaged in
                  loading operations.
                </p>

                <p className="mt-2">
                  At approximately 11:00 a.m., <i>U-513</i> fired torpedoes into the
                  anchored ships. The British vessel Saganaga was struck first.
                  The explosion was catastrophic: the ship sank in well under a
                  minute, giving the crew almost no time to respond. Twenty-nine
                  men were killed.
                </p>

                <p className="mt-2">
                  Nearby, the Canadian vessel Lord Strathcona had already begun
                  taking evasive action after witnessing the destruction of
                  Saganaga. Her crew abandoned ship before she was struck. When
                  the torpedo hit, the vessel sank rapidly—but remarkably, there
                  were no fatalities.
                </p>

                <p className="mt-2">
                  The attack occurred within sight of shore. Residents of Bell
                  Island witnessed the explosions, the sinking ships, and the
                  aftermath as survivors struggled in the water. Local vessels
                  and civilians participated in rescue efforts, bringing
                  survivors ashore.
                </p>

                <p className="mt-2 font-semibold">
                  This was no longer a distant ocean war.
                </p>
                  </>}
                reverse
                  image="/images/U-576-on-war-patrol.jpg"
                  className="!px-0 !py-4"
                />
                
<Gallery
              items={[
                {
                  src: "/images/0vipgwHf.jpeg",
                  alt: "New photograph of Saganaga",
                },
                {
                  src: "/images/ARX6eTou.jpeg",
                  alt: "Lord Strathcona",
                }
              ]}
            />

                
                
                
                
                
              </>
            ),
          },

          {
            blockClassName: "bg-[var(--background-color)] text-black",
            title: (<>2 November 1942 — U-boat <i>U-518</i> Attack</>),
            description: (
              <>
              <Image src="/images/NCeCXwlK.jpeg" alt="Burning Ship" className="w-full h-130 object-cover mb-4" width={100} height={100} />
                
                
              <ContentSection
                  title=""
                  description={<>
                <p className="mt-2">
                  Nearly two months later, on 2 November 1942, a second German
                  submarine <i>U-518</i>, also a Type IXC boat under the command of
                  Oberleutnant zur See Friedrich-Wilhelm Wissmann—repeated the
                  feat.
                </p>

                <p className="mt-2">
                  Once again, a U-boat penetrated Conception Bay and reached the
                  Bell Island anchorage.
                </p>

                <p className="mt-2">
                  Operating under cover of darkness and exploiting the same
                  defensive weaknesses, <i>U-518</i> launched torpedo attacks against
                  vessels at anchor. The Canadian ore carrier Rose Castle was
                  struck and sank within minutes, with the loss of twenty-four
                  crew members.
                </p>

                <p className="mt-2">
                  Shortly thereafter, the vessel PLM-27—a Free French ship
                  operating under British wartime control—was also torpedoed.
                  Lacking defensive armament and with a smaller crew, she sank
                  quickly. Twelve men were killed.
                </p>

                <p className="mt-2">
                  As in the September attack, survivors were rescued by a
                  combination of Royal Canadian Navy patrol craft—particularly
                  Fairmile motor launches— and local civilian vessels. Many
                  reached shore directly.
                </p>
                  </>}
                
                  image="/images/RSusYdY_.jpeg"
                  className="!px-0 !py-4"
                />
                
                
                <Gallery
              items={[
                {
                  src: "/images/13vYV2sj.png",
                  alt: "Rose Castle",
                },
                {
                  src: "/images/QF8LK0LI.jpeg",
                  alt: "PLM-27",
                },
                {
                  src: "/images/14HWecDg.png",
                  alt: "U-518-at-sea",
                }
              ]}
            />
                
                
                
                
              </>
            ),
          },

          {
            blockClassName: "bg-[var(--background-color)] text-black",
            title: "Operational Significance",
            description: (
              <>

<Image src="/images/rEGdk7WS.jpeg" alt="Convoy Route Map" className="w-full h-130 object-cover mb-4" width={100} height={100} />

                <p className="mt-2">
                  The success of both attacks reflected a combination of German
                  operational audacity and Allied defensive limitations.
                </p>

                <p className="mt-2">
                  To reach Bell Island, the submarines had to navigate confined
                  coastal waters in large ocean-going boats designed primarily
                  for open Atlantic operations.
                </p>

                <p className="mt-2">
                  Within the harbour environment, attack conditions were equally
                  complex. Targets were stationary but often closely spaced
                  among piers, loading structures, and other vessels.
                </p>

                <p className="mt-2">
                  That both <i>U-513</i> and <i>U-518</i> succeeded underscores both the skill
                  of their commanders and the absence of effective
                  anti-submarine defences at Bell Island in 1942.
                </p>


<Gallery
              items={[
                {
                  src: "/images/iAFrLRHR.png",
                  alt: "MSS-4-wrecks-named-multibeam",
                },
                {
                  src: "/images/FEVVYn17.png",
                  alt: "U-boat and Allied shipping losses",
                }
              ]}
            />


              </>
            ),
          },

          {
            blockClassName: "bg-[var(--background-color)] text-black",
            title: "A Defended Harbour Breached",
            description: (
              <>


<Image src="/images/Newfoundland military bases map.jpeg" alt="Newfoundland military bases map" className="w-full h-130 object-cover mb-4" width={100} height={100} />

                <CheckList
                  items={[
                    {
                      text: (
                        <>
                          Four ore carriers were sunk (Saganaga, Lord
                          Strathcona, Rose Castle, PLM-27)
                        </>
                      ),
                    },
                    {
                      text: (
                        <>
                          Approximately 65 sailors were killed (with some
                          sources citing slightly higher totals)
                        </>
                      ),
                    },
                    { text: <>Critical industrial shipping was disrupted</> },
                    {
                      text: (
                        <>
                          A major North Atlantic war zone was extended directly
                          into a coastal harbour
                        </>
                      ),
                    },
                  ]}
                />

                <p className="mt-2">
                  Bell Island thus became the site of the only confirmed
                  sinkings of Allied shipping within a defended industrial
                  harbour along the east coast of either Canada or the United
                  States during the Second World War.
                </p>



<Gallery
              items={[
                {
                  src: "/images/Rya9Uput.jpeg",
                  alt: "RCN Fairmile patrol",
                },
                {
                  src: "/images/9tFuTaeV.jpeg",
                  alt: "RCAF on patrol",
                },
                {
                  src: "/images/QEzDTTh.jpeg",
                  alt: "Cemetery Hill Coastal Artillery",
                },
                {
                  src: "/images/Wyai9Mxw.jpeg",
                  alt: "Scotia Pier loading ships",
                }
              ]}
            />
              </>
            ),
          },

          {
            blockClassName: "bg-[var(--background-color)] text-black",
            title: "From Industrial Site to Naval Battlefield",
            description: (
              <>


<Image src="/images/89fKBUQ.png" alt="Cross section Bell Island iron mines" className="w-full h-130 object-cover mb-4" width={100} height={100} />


                <p className="mt-2">
                  What makes Bell Island historically unique is not simply that
                  ships were sunk—but where they were sunk.
                </p>

                <p className="mt-2 mb-2">The attacks occurred:</p>

                <CheckList
                  items={[
                    { text: <>Within a functioning industrial harbour</> },
                    { text: <>In close proximity to shore</> },
                    { text: <>In full view of civilian populations</> },
                    {
                      text: (
                        <>
                          Within a defined and geographically concentrated area
                        </>
                      ),
                    },
                  ]}
                />

                <p className="mt-2">
                  The result is a rare form of naval battlefield—one that exists
                  simultaneously across seabed, shoreline, industrial landscape
                  and community memory.
                </p>

                <p className="mt-2">
                  What had been an industrial anchorage became, in two brief and
                  violent episodes, part of the Battle of the Atlantic itself.
                </p>
<Gallery
              items={[
                {
                  src: "/images/R2-Bell Island.webp",
                  alt: "R2-Bell Island.webp",
                },
                {
                  src: "/images/R6. Torpedo strike on Scotia Pier.gif",
                  alt: "Torpedo strike on Scotia Pier",
                },
                {
                  src: "/images/R11. Lance Cove Cemetary.jpg",
                  alt: "Lance Cove Cemetary",
                },
                {
                  src: "/images/R17. Saganaga Anchor.jpg",
                  alt: "Saganaga Anchor",
                }
              ]}
            />



              </>
            ),
          },
        ]}
      />
      {/* --------------------------------------------  Section 5 -------------------------------------------- */}
      <ContentSection
        title="Allied Vessels Sunk at Bell Island"
        description={
          <>
            <h3 className="heading text-2xl my-5">SS <i>Saganaga</i></h3>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Nationality:</strong> British
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Type:</strong> Steam ore carrier
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Gross Register Tonnage:</strong> ~5,450 GRT
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Length:</strong> ~125 m (410 ft)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Owner:</strong> Christian Salvesen & Co. Ltd.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Operator / Manager:</strong> South Georgia Co.
                      (Salvesen group)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Home Port:</strong> Leith (Edinburgh), Scotland
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Crew Complement:</strong> ~45–50 total
                    </>
                  ),
                  children: [
                    "Merchant Navy officers and crew",
                    "Royal Navy DEMS gun detachment",
                  ],
                },
                {
                  text: (
                    <>
                      <strong>Defensive Armament:</strong> Stern-mounted naval
                      gun
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Attack:</strong> Torpedoed 5 September 1942 by
                      U-513
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Time to Sink:</strong> Well under one minute
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Wreck Depth:</strong> ~25–30 m
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Fatalities:</strong> 29
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Rescue:</strong> Survivors recovered by nearby
                      vessels and taken ashore
                    </>
                  ),
                },
              ]}
            />
          </>
        }
        image="/images/5LP4BcOg.jpeg"
      />

      {/* --------------------------------------------  Section 6 -------------------------------------------- */}
      <ContentSection
        title=""
        description={
          <>
            <h3 className="heading text-2xl my-5">SS <i>Lord Strathcona</i></h3>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Nationality:</strong> Canadian
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Type:</strong> Steam ore carrier
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Gross Register Tonnage:</strong> ~7,300 GRT
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Length:</strong> ~130 m (425 ft)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Owner / Operator:</strong> Dominion Shipping
                      Company Ltd.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Home Port:</strong> Montreal, Quebec
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Crew Complement:</strong> ~55–60 total
                    </>
                  ),
                  children: [
                    "Canadian Merchant Navy crew",
                    "DEMS gun detachment",
                  ],
                },
                {
                  text: (
                    <>
                      <strong>Defensive Armament:</strong> Stern-mounted naval
                      gun
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Attack:</strong> Torpedoed 5 September 1942 by
                      <i>U-513</i>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Time to Sink:</strong> ~1–2 minutes
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Wreck Depth:</strong> ~30–35 m
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Fatalities:</strong> 0
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Rescue:</strong> Entire crew rescued
                    </>
                  ),
                },
              ]}
            />
          </>
        }
        image="/images/lord_strathcona.jpeg"
        reverse
        className="bg-[var(--secondary-bg-color)]"
        // buttonText="Support Us"
        // buttonLink="/support-us"
        // buttonVariant="secondary"
      />
      {/* --------------------------------------------  Section 7 -------------------------------------------- */}
      <ContentSection
        title=""
        description={
          <>
            <h3 className="heading text-2xl my-5">SS <i>Rose Castle</i></h3>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Nationality:</strong> Canadian
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Type:</strong> Steam ore carrier
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Gross Register Tonnage:</strong> ~7,800 GRT
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Length:</strong> ~122 m (400 ft)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Owner:</strong> Rose Castle Steamship Company Ltd.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Manager:</strong> Donaldson Brothers Ltd.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Home Port:</strong> Halifax, Nova Scotia
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Crew Complement:</strong> ~45–50
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Defensive Armament:</strong> Stern-mounted naval
                      gun
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Attack:</strong> Torpedoed 2 November 1942 by
                      <i>U-518</i>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Time to Sink:</strong> Within minutes
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Wreck Depth:</strong> ~40–45 m
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Fatalities:</strong> 24
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Rescue:</strong> Survivors recovered by RCN
                      Fairmile launches and local vessels
                    </>
                  ),
                },
              ]}
            />
          </>
        }
        image="/images/Rose_Castle.webp"

        // buttonText="Support Us"
        // buttonLink="/support-us"
        // buttonVariant="secondary"
      />

      {/* --------------------------------------------  Section 8 -------------------------------------------- */}

      <ContentSection
        title=""
        description={
          <>
            <h3 className="heading text-2xl my-5">SS <i>PLM-27</i></h3>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Nationality:</strong> British-registered, Free
                      French-controlled
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Type:</strong> Ore-handling vessel
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Gross Register Tonnage:</strong> ~5,600 GRT
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Owner:</strong> Gibbs & Co.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Home Port:</strong> Cardiff, Wales
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Crew Complement:</strong> ~20–25
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Defensive Armament:</strong> None
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Attack:</strong> Torpedoed 2 November 1942 by
                      <i>U-518</i>
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Time to Sink:</strong> ~1 minute
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Wreck Depth:</strong> ~25–30 m
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Fatalities:</strong> 12
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Rescue:</strong> Survivors reached shore and were
                      assisted by civilians
                    </>
                  ),
                },
              ]}
            />
          </>
        }
        image="/images/PLM-27.jpg"
        reverse
        className="bg-[var(--secondary-bg-color)]"
        // buttonText="Support Us"
        // buttonLink="/support-us"
        // buttonVariant="secondary"
      />

      <ContentSection
        title="Fatalities Summary"
        description={
          <>
            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Saganaga:</strong> 29
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Lord Strathcona:</strong> 0
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Rose Castle:</strong> 24
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>PLM-27:</strong> 12
                    </>
                  ),
                },
              ]}
            />

            <p className="mt-2">
              <strong>Total:</strong> 65 confirmed dead, with some sources
              citing up to ~69 due to unrecovered bodies and differing
              accounting conventions. The Lance Cove Seamen’s Memorial reflects
              the lower, community-validated total.
            </p>
          </>
        }
        image="/images/Lance_Cove_Cemetary.jpg"
        buttonText="Support Us"
        buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
        buttonVariant="primary"
        buttonTarget="_blank"
      />

      <ContentSection
        title="German Submarines Involved"
        description={
          <>
            <h3 className="heading text-2xl my-5"><i>U-513</i></h3>
            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Type:</strong> Type IXC long-range submarine
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Displacement:</strong> ~1,120 tons (surfaced);
                      ~1,232 tons (submerged)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Patrol Range:</strong> ~13,450 nautical miles at
                      10 knots (surfaced)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Torpedoes Carried:</strong> Up to 22
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Torpedo Tubes:</strong> 6 (4 bow, 2 stern)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Crew Complement:</strong> Typically 48–56 officers
                      and men
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Bell Island Attack:</strong> 5 September 1942
                    </>
                  ),
                },
              ]}
            />

            <p className="my-4">
              <strong>Commanding Officer:</strong> Rolf Rüggeberg
            </p>

            <CheckList
              items={[

                {
                  text: (
                    <>
                      <strong>RN/RCN Equivalent:</strong> Commander
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>USN Equivalent:</strong> Commander (O-5)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Vessels Sunk at Bell Island:</strong> Saganaga,
                      Lord Strathcona
                    </>
                  ),
                },


              ]}
            />

            <p className="my-4">
              <strong>Korvettenkapitän</strong>
            </p>


        <CheckList
              items={[

                {
                  text: (
                    <>
                      <strong>RN/RCN Equivalent:</strong> Lieutenant-Commander
                    </>
                  ),
                },

                {
                  text: (
                    <>
                      <strong>USN Equivalent: </strong> Lieutenant-Commander (O-5)
                    </>
                  ),
                },

              ]}
            />

            <p className="mt-4">
              <strong>Later Fate:</strong> U-513 was sunk off the coast of
              Brazil in the South Atlantic on 19 July 1943 by U.S. Navy
              aircraft. Seven crewmen survived while 46 died.
            </p>

            <p className="mt-4">
              <strong>Additional Notes:</strong> From June 1943 until the end of
              the war, and later promoted to Fregattenkapitän, Rüggeberg
              commanded the 13th Flotilla at Trondheim, Norway. Upon creation of
              the post-war West German Navy, he rejoined as a naval officer and
              later served as a West German Naval Attaché in London in the early
              1960s.
            </p>
          </>
        }
        image="/images/Ruggeburg_display_at_Bell_Island_Museum.jpg"
        reverse
        className="bg-[var(--secondary-bg-color)]"
        // buttonText="Support Us"
        // buttonLink="/support-us"
        // buttonVariant="primary"
      />

      <ContentSection
        title=""
        description={
          <>
            <h3 className="heading text-2xl my-5"><i>U-518</i></h3>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Type:</strong> Type IXC long-range submarine
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Displacement:</strong> ~1,120 tons (surfaced);
                      ~1,232 tons (submerged)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Patrol Range:</strong> ~13,450 nautical miles at
                      10 knots (surfaced)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Torpedoes Carried:</strong> Up to 22
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Torpedo Tubes:</strong> 6 (4 bow, 2 stern)
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Crew Complement:</strong> Typically 50–56 officers
                      and men
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>Bell Island Attack:</strong> 2 November 1942
                    </>
                  ),
                },
              ]}
            />

            <p className="my-4">
              <strong>Commanding Officer:</strong> Friedrich-Wilhelm Wissmann
            </p>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <strong>Rank:</strong> Oberleutnant zur See
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>RN/RCN Equivalent:</strong> Lieutenant
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <strong>USN Equivalent:</strong> Lieutenant (O-3)
                    </>
                  ),
                },
              ]}
            />

            <p className="mt-4">
              <strong>Vessels Sunk at Bell Island:</strong> <i>Rose Castle, PLM-27</i>
            </p>

            <p className="mt-4">
              <strong>Later Fate:</strong> <i>U-518</i> was sunk on 22 April 1945 in
              the North Atlantic northwest of the Azores by depth charges from
              the U.S. destroyer escorts USS Carter and USS Neal A. Scott, with
              the loss of all 56 hands.
            </p>
            <p className="mt-4">
              <strong>Additional notes:</strong> After sinking Rose Castle and
              <i>PLM-27</i>, Wissmann successfully landed a German intelligence agent
              at Baie des Chaleurs in Quebec on 9 November 1942. By December,
              Wissmann was promoted to Kapitänleutnant (Lieutenant Commander).
              After leaving U-518, he served as a training officer with the 2nd,
              10th, and 26th (Training) Flotillas until the end of the war in
              May 1945.
            </p>
          </>
        }
        image="/images/U-518-at-sea.jpg"
      />

      <CenterImageSection
        backgroundImage="/images/banner-2.jpg"
        className="bg-[var(--primary-color-70-alpha)] text-white"
        image="/images/U-505.jpg"
        imageAlt="Historic submarine"
        left={{
          title: "U-Boat Platform Selection: Type VII vs. Type IXC",
          description:
            "Although the Type VII was the most numerous and widely used U-boat of the German Kriegsmarine, the long distance to Newfoundland and the need for sustained operations deep inside Conception Bay made the longer-ranged Type IXC the only practical platform for the Bell Island attacks. (For comparison: a typical Type VII U-boat had a surfaced range of ~6,500–8,500 nautical miles, carried 11–14 torpedoes, and had significantly less fuel endurance, whereas the Type IXC had a surfaced range of ~13,450 nautical miles and carried up to 22 torpedoes.)",
          buttonText: "Learn More",
          buttonLink: "/virtual-memorial",
          buttonVariant: "primary",
        }}
      />

      <ContentSection
        title="Security Improvements After the Attacks"
        description={
          <>
            <p className="my-2">
              The September and November 1942 sinkings prompted significant
              improvements to Bell Island’s security and harbour protection:
            </p>
            <CheckList
              items={[
                {
                  text: (
                    <>
                      Increased Royal Canadian Navy patrols throughout
                      Conception Bay, supported by regional Royal Canadian Air
                      Force maritime patrols
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Regular deployment of Fairmile motor launches for
                      anti-submarine surveillance
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Improved harbour control, reporting procedures, and
                      coordination between naval and air forces
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Installation of anti-torpedo netting (boom defences) at
                      loading areas in 1943
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      Expanded coastal observation and harbour defence
                      measures—including the use of searchlights for night-time
                      surveillance—were introduced or strengthened following the
                      attacks
                    </>
                  ),
                },
              ]}
            />

            <p className="mt-2">
              No further submarine attacks occurred at Bell Island after
              November 1942.
            </p>
          </>
        }
        image="/images/FWpMYm_3.jpeg"
        caption="Caption: Fairmile motor launches formed part of the expanded anti-submarine and harbour defence
measures introduced after the Bell Island attacks."
        className="bg-[var(--secondary-bg-color)]"
      />

      <ContentSection
        title=""
        description={
          <>
            <h3 className="heading text-2xl my-5">
              The Wrecks Today — A Defined Battlefield
            </h3>

            <p>
              The four ships sunk at Bell Island lie within a relatively compact
              area of Conception Bay, forming a coherent underwater landscape.
            </p>

            <CheckList
              items={[
                {
                  text: (
                    <>
                      <i className="mr-2">Saganaga</i> Rests in approximately
                      25–30 metres of water, her structure broken by the force
                      of the explosion.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <i className="mr-2">Lord Strathcona </i> Lies nearby at
                      30–35 metres, largely intact.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <i className="mr-2">PLM-27 </i> Rests in 25–30 metres, her
                      midsection damaged, machinery exposed.
                    </>
                  ),
                },
                {
                  text: (
                    <>
                      <i className="mr-2">Rose Castle </i> The deepest of the
                      four, lies in 40–45 metres, one of the most intact wrecks
                      in the area.
                    </>
                  ),
                },
              ]}
            />

            <p className="mt-4">
              The proximity of the wrecks reflects the nature of the attacks:
              ships anchored within a working harbour, struck where they lay.
            </p>

            <p className="mt-4">
              Conditions in Conception Bay are typical of the North
              Atlantic—cold water, variable visibility, and generally moderate
              currents. Over time, the wrecks have become part of the marine
              environment while preserving the physical evidence of the attacks.
            </p>
          </>
        }
        image="/images/Saganaga-Anchor.jpg"
        reverse
      />

      <ContentSection
        title="Why Bell Island Matters"
        description={
          <>
            <p>The Battle of the Atlantic was fought across an ocean.</p>

            <p className="mt-4">
              Ships were sunk far from land. Crews were lost without witnesses.
              For many, there were no graves.
            </p>

            <p className="mt-4">
              <strong>Bell Island is different.</strong>
            </p>

            <p className="mt-4">
              Here, the war came into a harbour. It was seen from shore.
              Survivors were brought in by civilians. The dead were buried on
              the island. The ships sank close to shore and in relatively
              shallow waters.
            </p>

            <p className="mt-4">
              What had not been intended as a battlefield became one—across both
              sea and shore.
            </p>

            <p className="mt-4">
              Unlike most naval battlefields, where wrecks lie far apart and out
              of reach, Bell Island remains accessible—its history preserved
              within a single relatively compact, defined space.
            </p>

            <p className="mt-4">
              The purpose of this project is to make that landscape visible
              through 3D photogrammetry and Digital Terrain Mapping (DTM),
              allowing visitors, historians, and marine scientists to visualize
              both the seabed and the shoreline together as a single, integrated
              three-dimensional landscape.
            </p>
          </>
        }
        image="/images/MSS-4-wrecks-named-multibeam.jpg"
        className="bg-[var(--secondary-bg-color)]"
      />

      <ContentSection
        title="A Wider Atlantic Legacy"
        description={
          <>
            <p>
              The Bell Island attacks brought the Battle of the Atlantic
              directly to Newfoundland&rsquo;s shores. The four Allied vessels,
              the surviving coastal defences, the remnants of Scotia Pier, the
              Lance Cove cemetery, and the iron ore mine together form one of
              the most intact and geographically concentrated Second World War
              naval battlefields in eastern North America.
            </p>
            <p className="mt-3">
              Across the ocean, thousands of ships were sunk far from land.
              Crews were lost without witnesses. For many, there were no marked
              graves. Sailors of the Royal Canadian Navy, the Royal Navy, the
              United States Navy, and the Merchant Navies of many
              nations&mdash;and those of Germany and Italy&mdash;died in waters
              where no memorial could be built and no cemetery established.
            </p>
            <Gallery
              items={[
                {
                  src: "/images/Burning_ship.jpg",
                  alt: "Torpedoed freighter",
                },
                {
                  src: "/images/HMCS_Penetang.webp",
                  alt: "HMCS Penetang",
                },
                {
                  src: "/images/Second_Torpedoed ship.jpg",
                  alt: "Torpedoed freighter",
                },
              ]}
            />
            <p className="text-gray-500">
              (From left to right: Torpedoed freighter (left), HMCS Penetang (middle), Torpedoed freighter (right))
            </p>
            <p className="mt-3">
              More than 4,600 Canadians of the Royal Canadian Navy, Royal
              Canadian Air Force, and Canadian Merchant Navy were lost during
              the Battle of the Atlantic. As Newfoundland was not yet part of
              Canada during the war, its losses are recorded separately.
              Approximately 150 to 200 members of the Newfoundland Royal Naval
              Reserve were killed, along with several hundred Newfoundland
              seamen serving in the Merchant Navy and Allied merchant fleets,
              many of them in the Atlantic.
            </p>
            <p className="mt-3">
              The Royal Navy suffered more than 50,000 fatalities during the
              Second World War, a significant proportion of them in Atlantic
              convoy operations, while the British Merchant Navy lost more than
              30,000 seamen, the majority in the Battle of the Atlantic. The
              United States Merchant Marine suffered approximately 9,500
              fatalities during the war, most of them in the Atlantic, while an
              estimated 5,000 to 6,000 United States Navy personnel were killed
              in Atlantic convoy escort, anti-submarine, and coastal defence
              operations.
            </p>
            <Gallery
              items={[
                {
                  src: "/images/RCAF-on-patrol.jpg",
                  alt: "Wreck Site",
                },
                {
                  src: "/images/RCAF-sub-killers.jpg",
                  alt: "Underwater Survey",
                },
                {
                  src: "/images/RCAF-flying-over-convoy.jpg",
                  alt: "Bell Island",
                },
              ]}
            />

            <p className="text-gray-500">
              (From left to right: RCAF Liberator Searching for U-boats (left), RCAF Liberators Attacking U-Boat (middle), RCAF
Liberator Flying Protecting Convoy (right))
            </p>

            <p className="mt-3">
              Air power was also central to the Atlantic war. Aircraft of the
              Royal Air Force, the Royal Canadian Air Force, and the United
              States Navy and Army Air Forces flew long-range patrols over the
              North Atlantic, often in extreme weather and at the limits of
              their range. Many crews were lost in operations far from land,
              their aircraft disappearing into the sea they were tasked to
              defend. German and Italian air forces also sustained losses in
              maritime patrol, reconnaissance, and anti-shipping operations
              across the Atlantic theatre.
            </p>
            <p className="mt-3">
              The Battle of the Atlantic was a multinational effort. Sailors,
              airmen, and merchant seamen from across the Allied
              world&mdash;including those from Britain, Canada, Newfoundland,
              the United States, Norway, and other occupied and allied
              nations&mdash;served in convoy escort, merchant shipping, and
              maritime air operations. Many were lost at sea or in the air,
              often far from their home countries and without marked graves.
            </p>
            <Gallery
              items={[
                {
                  src: "/images/U-boat-sinking.jpg",
                  alt: "U boat sinking",
                },
                {
                  src: "/images/RCN-dropping-depth-charges.jpg",
                  alt: "RCN dropping depth charges",
                },
                {
                  src: "/images/U-576-First-photograph-of-U-576.jpg",
                  alt: "U-576 First photograph of U-576",
                },
              ]}
            />
            <p className="mt-3">
              On the opposing side, more than 30,000 German submariners died at
              sea&mdash;while thousands of additional German naval personnel and
              merchant sailors, as well as approximately 2,900 Italian naval and
              merchant personnel, were also lost, most with no grave but the
              ocean.
            </p>
            <Gallery
              items={[
                {
                  src: "/images/KXNZU36.png",
                  alt: "Submarine & Allied shipping losses",
                },
              ]}
            />
            <p className="mt-3">
              At Bell Island, the dead were brought ashore and buried. The
              attacks were seen from land. Survivors were rescued by civilians.
              The ships remain within reach.
            </p>
            <p className="mt-3">
              What is dispersed across an ocean can, here, be understood in one
              place.
            </p>
            <p className="mt-3">
              The purpose of this project is not to replace existing memorials,
              but to extend their meaning&mdash;to use 3D photogrammetry and
              Digital Terrain Mapping (DTM) to make visible a wider Atlantic
              landscape of loss, service, and sacrifice, much of which lies
              beyond sight beneath the sea.
            </p>
          </>
        }
      />

      {/* --------------------------------------------  Section 8 -------------------------------------------- */}

      <CTASection
        title="Support the Virtual Memorial"
        backgroundImage="/images/GhostBowReneeJILL8747l.jpg"
        buttons={[
          {
            text: "Support the Expedition",
            link: "https://secure.qgiv.com/for/bellislandexpedition/",
            variant: "primary",
            buttonTarget: "_blank",
          },
          {
            text: "Contact Us About Partnership Opportunities",
            link: "/sponsors",
            variant: "accent",
            buttonTarget: "",
          },
        ]}
      />
    </>
  );
}
