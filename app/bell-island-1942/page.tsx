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
  { text: <><strong>Nationality:</strong> British</> },
  { text: <><strong>Type:</strong> Steam ore carrier</> },
  { text: <><strong>Gross Register Tonnage:</strong> ~5,450 GRT</> },
  { text: <><strong>Length:</strong> ~125 m (410 ft)</> },
  { text: <><strong>Owner:</strong> Christian Salvesen & Co. Ltd.</> },
  { text: <><strong>Operator / Manager:</strong> South Georgia Co. (Salvesen group)</> },
  { text: <><strong>Home Port:</strong> Leith (Edinburgh), Scotland</> },
  {
    text: <><strong>Crew Complement:</strong> ~45–50 total</>,
    children: [
      "Merchant Navy officers and crew",
      "Royal Navy DEMS gun detachment"
    ]
  },
  { text: <><strong>Defensive Armament:</strong> Stern-mounted naval gun</> },
  { text: <><strong>Attack:</strong> Torpedoed 5 September 1942 by U-513</> },
  { text: <><strong>Time to Sink:</strong> Well under one minute</> },
  { text: <><strong>Wreck Depth:</strong> ~25–30 m</> },
  { text: <><strong>Fatalities:</strong> 29</> },
  { text: <><strong>Rescue:</strong> Survivors recovered by nearby vessels and taken ashore</> }
]}
/>
    </>
  }
  
  image="/images/banner-2.jpg"
  
  // buttonText="Support Us"
  // buttonLink="/support-us"
  // buttonVariant="secondary"
/>
{/* --------------------------------------------  Section 7 -------------------------------------------- */}
<ContentSection
  title=""
  
  description={
    <>
      <h3 className="heading text-2xl my-5">SS Lord Strathcona</h3>

      <CheckList
  items={[
  { text: <><strong>Nationality:</strong> Canadian</> },
  { text: <><strong>Type:</strong> Steam ore carrier</> },
  { text: <><strong>Gross Register Tonnage:</strong> ~7,300 GRT</> },
  { text: <><strong>Length:</strong> ~130 m (425 ft)</> },
  { text: <><strong>Owner / Operator:</strong> Dominion Shipping Company Ltd.</> },
  { text: <><strong>Home Port:</strong> Montreal, Quebec</> },
  {
    text: <><strong>Crew Complement:</strong> ~55–60 total</>,
    children: [
      "Canadian Merchant Navy crew",
      "DEMS gun detachment"
    ]
  },
  { text: <><strong>Defensive Armament:</strong> Stern-mounted naval gun</> },
  { text: <><strong>Attack:</strong> Torpedoed 5 September 1942 by U-513</> },
  { text: <><strong>Time to Sink:</strong> ~1–2 minutes</> },
  { text: <><strong>Wreck Depth:</strong> ~30–35 m</> },
  { text: <><strong>Fatalities:</strong> 0</> },
  { text: <><strong>Rescue:</strong> Entire crew rescued</> }
]}
/>
    </>
  }
  
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
  // buttonText="Support Us"
  // buttonLink="/support-us"
  // buttonVariant="secondary"
/>
{/* --------------------------------------------  Section 8 -------------------------------------------- */}
<ContentSection
  title=""
  
  description={
    <>
      <h3 className="heading text-2xl my-5">SS Rose Castle</h3>

      <CheckList
items={[
  { text: <><strong>Nationality:</strong> Canadian</> },
  { text: <><strong>Type:</strong> Steam ore carrier</> },
  { text: <><strong>Gross Register Tonnage:</strong> ~7,800 GRT</> },
  { text: <><strong>Length:</strong> ~122 m (400 ft)</> },
  { text: <><strong>Owner:</strong> Rose Castle Steamship Company Ltd.</> },
  { text: <><strong>Manager:</strong> Donaldson Brothers Ltd.</> },
  { text: <><strong>Home Port:</strong> Halifax, Nova Scotia</> },
  { text: <><strong>Crew Complement:</strong> ~45–50</> },
  { text: <><strong>Defensive Armament:</strong> Stern-mounted naval gun</> },
  { text: <><strong>Attack:</strong> Torpedoed 2 November 1942 by U-518</> },
  { text: <><strong>Time to Sink:</strong> Within minutes</> },
  { text: <><strong>Wreck Depth:</strong> ~40–45 m</> },
  { text: <><strong>Fatalities:</strong> 24</> },
  { text: <><strong>Rescue:</strong> Survivors recovered by RCN Fairmile launches and local vessels</> }
]}
/>
    </>
  }
  
  image="/images/banner-2.jpg"
  
  // buttonText="Support Us"
  // buttonLink="/support-us"
  // buttonVariant="secondary"
/>

{/* --------------------------------------------  Section 8 -------------------------------------------- */}

<ContentSection
  title=""
  
  description={
    <>
      <h3 className="heading text-2xl my-5">SS PLM-27</h3>

      <CheckList
items={[
  { text: <><strong>Nationality:</strong> British-registered, Free French-controlled</> },
  { text: <><strong>Type:</strong> Ore-handling vessel</> },
  { text: <><strong>Gross Register Tonnage:</strong> ~5,600 GRT</> },
  { text: <><strong>Owner:</strong> Gibbs & Co.</> },
  { text: <><strong>Home Port:</strong> Cardiff, Wales</> },
  { text: <><strong>Crew Complement:</strong> ~20–25</> },
  { text: <><strong>Defensive Armament:</strong> None</> },
  { text: <><strong>Attack:</strong> Torpedoed 2 November 1942 by U-518</> },
  { text: <><strong>Time to Sink:</strong> ~1 minute</> },
  { text: <><strong>Wreck Depth:</strong> ~25–30 m</> },
  { text: <><strong>Fatalities:</strong> 12</> },
  { text: <><strong>Rescue:</strong> Survivors reached shore and were assisted by civilians</> }
]}
/>
    </>
  }
  
  image="/images/banner-2.jpg"
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
  { text: <><strong>Saganaga:</strong> 29</> },
  { text: <><strong>Lord Strathcona:</strong> 0</> },
  { text: <><strong>Rose Castle:</strong> 24</> },
  { text: <><strong>PLM-27:</strong> 12</> }
]}
/>

      <p className="mt-2"><strong>Total:</strong> 65 confirmed dead, with some sources citing up to ~69 due to unrecovered bodies and differing accounting conventions. The Lance Cove Seamen’s Memorial reflects the lower, community-validated total.</p>

    </>
  }
  
  image="/images/banner-2.jpg"

  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="primary"
/>

<ContentSection
 title="German Submarines Involved"
  description={
    <>
    <h3 className="heading text-2xl my-5">U-513</h3>
      <CheckList
        items={[
          { text: <><strong>Type:</strong> Type IXC long-range submarine</> },
          { text: <><strong>Displacement:</strong> ~1,120 tons (surfaced); ~1,232 tons (submerged)</> },
          { text: <><strong>Patrol Range:</strong> ~13,450 nautical miles at 10 knots (surfaced)</> },
          { text: <><strong>Torpedoes Carried:</strong> Up to 22</> },
          { text: <><strong>Torpedo Tubes:</strong> 6 (4 bow, 2 stern)</> },
          { text: <><strong>Crew Complement:</strong> Typically 48–56 officers and men</> },
          { text: <><strong>Bell Island Attack:</strong> 5 September 1942</> }
        ]}
      />

      <p className="my-4"><strong>Commanding Officer:</strong> Rolf Rüggeberg</p>

      <CheckList
        items={[
           { text: <><strong>Commanding Officer:</strong> Rolf Rüggeberg</> },
          { text: <><strong>RN/RCN Equivalent:</strong> Commander</> },
          { text: <><strong>USN Equivalent:</strong> Commander (O-5)</> },
          { text: <><strong>Vessels Sunk at Bell Island:</strong> Saganaga, Lord Strathcona</> }
        ]}
      />

      <p className="mt-4">
        <strong>Later Fate:</strong> U-513 was sunk off the coast of Brazil in
        the South Atlantic on 19 July 1943 by U.S. Navy aircraft. Seven crewmen
        survived while 46 died.
      </p>

      <p className="mt-4">
        <strong>Additional Notes:</strong> From June 1943 until the end of the
        war, and later promoted to Fregattenkapitän, Rüggeberg commanded the
        13th Flotilla at Trondheim, Norway. Upon creation of the post-war West
        German Navy, he rejoined as a naval officer and later served as a West
        German Naval Attaché in London in the early 1960s.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
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
      <h3 className="heading text-2xl my-5">U-518</h3>

      <CheckList
        items={[
          { text: <><strong>Type:</strong> Type IXC long-range submarine</> },
          { text: <><strong>Displacement:</strong> ~1,120 tons (surfaced); ~1,232 tons (submerged)</> },
          { text: <><strong>Patrol Range:</strong> ~13,450 nautical miles at 10 knots (surfaced)</> },
          { text: <><strong>Torpedoes Carried:</strong> Up to 22</> },
          { text: <><strong>Torpedo Tubes:</strong> 6 (4 bow, 2 stern)</> },
          { text: <><strong>Crew Complement:</strong> Typically 50–56 officers and men</> },
          { text: <><strong>Bell Island Attack:</strong> 2 November 1942</> }
        ]}
      />

      <p className="my-4">
        <strong>Commanding Officer:</strong> Friedrich-Wilhelm Wissmann
      </p>

      <CheckList
        items={[
          { text: <><strong>Rank:</strong> Oberleutnant zur See</> },
          { text: <><strong>RN/RCN Equivalent:</strong> Lieutenant</> },
          { text: <><strong>USN Equivalent:</strong> Lieutenant (O-3)</> }
        ]}
      />

      <p className="mt-4">
        <strong>Vessels Sunk at Bell Island:</strong> Rose Castle, PLM-27
      </p>

      <p className="mt-4">
        <strong>Later Fate:</strong> U-518 was sunk on 22 April 1945 in the North
        Atlantic northwest of the Azores by depth charges from the U.S. destroyer
        escorts USS Carter and USS Neal A. Scott, with the loss of all 56 hands.
      </p>
<p className="mt-4">
      <strong>Additional notes:</strong> After sinking Rose Castle and PLM-27, Wissmann successfully landed a German intelligence agent at Baie des Chaleurs in Quebec on 9 November 1942. By December, Wissmann was promoted to Kapitänleutnant (Lieutenant Commander). After leaving U-518, he served as a training officer with the 2nd, 10th, and 26th (Training) Flotillas until the end of the war in May 1945.
    </p>
    </>
  }
  image="/images/banner-2.jpg"
  
/>




<CenterImageSection
  className="bg-[var(--primary-color)] text-white"

  image=""
  imageAlt="Historic submarine"
  left={{
    title: "Platform Selection: Type VII vs. Type IXC",
    description:
      "Although the Type VII was the most numerous and widely used U-boat of the German Kriegsmarine, the long distance to Newfoundland and the need for sustained operations deep inside Conception Bay made the longer-ranged Type IXC the only practical platform for the Bell Island attacks. (For comparison: a typical Type VII U-boat had a surfaced range of ~6,500–8,500 nautical miles, carried 11–14 torpedoes, and had significantly less fuel endurance, whereas the Type IXC had a surfaced range of ~13,450 nautical miles and carried up to 22 torpedoes.)",
    buttonText: "Learn More",
    buttonLink: "/project",
    buttonVariant: "primary"
  }}

  right={{
    title: "Operational Challenges Faced by the German Submarine Commanders",
    description:"Executing attacks inside Conception Bay imposed exceptional navigational and tactical risks. Bell Island lay deep within a semi-enclosed bay, compelling large Type IXC boats to negotiate narrow approaches, shoals, tidal streams, and limited turning room. The danger of grounding was acute for long-hulled submarines operating close to shore. Approaches had to avoid fixed coastal artillery, observation posts, and harbour surveillance, often at periscope depth amid piers, moored vessels, and industrial infrastructure. Firing solutions were constrained, and withdrawal after torpedo release required precise ship-handling along predictable exit routes. The success of both attacks underscores the operational audacity and piloting skill demanded of the commanders—and the limitations of Bell Island’s coastal defences in 1942.",
    buttonText: "Support Us",
    buttonLink: "/support-us",
    buttonVariant: "accent"
  }}
/>




<ContentSection
  title=""
  description={
    <>
      <h3 className="heading text-2xl my-5">
        Coastal Artillery and Fixed Defences
      </h3>

      <p>
        At the time of the attacks, Bell Island was defended by fixed coastal
        artillery positions, including the Cemetery Hill battery, intended
        primarily to counter surface threats. These guns were not designed to
        detect or engage submerged submarines and were not brought into action
        during either attack.
      </p>

      <p className="mt-4">
        Bell Island’s coastal artillery reflected pre-war assumptions about
        naval threats rather than the war’s emergent realities of submarine
        warfare.
      </p>

      <h3 className="heading text-2xl my-5">
        Rescue Operations
      </h3>

      <CheckList
        items={[
          { text: <>Boats from nearby anchored merchant vessels</> },
          { text: <>A Canadian customs launch</> },
          { text: <>Royal Canadian Navy Fairmile motor launches</> },
          { text: <>Bell Island civilians who assisted survivors reaching shore</> }
        ]}
      />

      <p className="mt-4">
        The proximity of the anchorage to land enabled rapid civilian and
        maritime response, saving many lives.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
/>



<ContentSection
  title="Security Improvements After the Attacks"
  description={
    <>
      <p>
        The September and November 1942 sinkings prompted significant
        improvements to Bell Island’s security and harbour protection:
      </p>

      <CheckList
        items={[
          { text: "Increased Royal Canadian Navy patrols throughout Conception Bay" },
          { text: "Regular deployment of Fairmile motor launches for anti-submarine surveillance" },
          { text: "Improved harbour control, reporting procedures, and coordination with air and naval forces" },
          { text: "Installation of anti-torpedo netting (boom defences) at loading areas in 1943" },
          { text: "Expanded coastal observation and early-warning measures" },
          { text: "Installation of searchlights as part of the harbour defence system" }
        ]}
      />

      <p className="mt-4">
        No further submarine attacks occurred at Bell Island after November 1942.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  className="bg-[var(--secondary-bg-color)]"
/>





<CenterImageSection
backgroundImage="/images/banner-2.jpg"
className="bg-[var(--primary-color-70-alpha)] text-white"
  left={{
    title: "The Wrecks Today — A Defined Battlefield",
    description: (
      <>
        <p>
          The four ships sunk at Bell Island lie within a relatively compact area
          of Conception Bay, forming a coherent underwater landscape.
        </p>

        <CheckList
          items={[
            {
              text: (
                <>
                  <i className="mr-2">Saganaga</i> Rests in approximately 25–30 metres
                  of water, her structure broken by the force of the explosion.
                </>
              )
            },
            {
              text: (
                <>
                  <i className="mr-2">Lord Strathcona </i> Lies nearby at 30–35 metres,
                  largely intact.
                </>
              )
            },
            {
              text: (
                <>
                  <i className="mr-2">PLM-27 </i> Rests in 25–30 metres, her midsection
                  damaged, machinery exposed.
                </>
              )
            },
            {
              text: (
                <>
                  <i className="mr-2">Rose Castle </i> The deepest of the four, lies in
                  40–45 metres, one of the most intact wrecks in the area.
                </>
              )
            }
          ]}
        />

        <p className="mt-4">
          The proximity of the wrecks reflects the nature of the attacks: ships
          anchored within a working harbour, struck where they lay.
        </p>

        <p className="mt-4">
          Conditions in Conception Bay are typical of the North Atlantic—cold
          water, variable visibility, and generally moderate currents. Over
          time, the wrecks have become part of the marine environment while
          preserving the physical evidence of the attacks.
        </p>
      </>
    )
  }}
  // image="/images/banner-2.jpg"
  // imageAlt="Bell Island shipwreck battlefield"

  right={{
    title: "Why Bell Island Matters",
    description: (
      <>
        <p>The Battle of the Atlantic was fought across an ocean.</p>

        <p className="mt-4">
          Ships were sunk far from land. Crews were lost without witnesses. For
          many, there were no graves.
        </p>

        <p className="mt-4"><strong>Bell Island is different.</strong></p>

        <p className="mt-4">
          Here, the war came into a harbour. It was seen from shore. Survivors
          were brought in by civilians. The dead were buried on the island. The
          ships sank close to shore and in relatively shallow waters.
        </p>

        <p className="mt-4">
          What had not been intended as a battlefield became one—across both sea
          and shore.
        </p>

        <p className="mt-4">
          Unlike most naval battlefields, where wrecks lie far apart and out of
          reach, Bell Island remains accessible—its history preserved within a
          single relatively compact, defined space.
        </p>

        <p className="mt-4">
          The purpose of this project is to make that landscape visible through
          3D photogrammetry and Digital Terrain Mapping (DTM), allowing
          visitors, historians, and marine scientists to visualize both the
          seabed and the shoreline together as a single, integrated
          three-dimensional landscape.
        </p>
      </>
    )
  }}
/>



<ContentSection
  title="A Wider Atlantic Legacy"
  description={
    <>
<p>The Bell Island attacks brought the Battle of the Atlantic directly to Newfoundland&rsquo;s shores. The four Allied vessels, the surviving coastal defences, the remnants of Scotia Pier, the Lance Cove cemetery, and the iron ore mine together form one of the most intact and geographically concentrated Second World War naval battlefields in eastern North America.</p>
<p className="mt-3">Across the ocean, thousands of ships were sunk far from land. Crews were lost without witnesses. For many, there were no marked graves. Sailors of the Royal Canadian Navy, the Royal Navy, the United States Navy, and the Merchant Navies of many nations&mdash;and those of Germany and Italy&mdash;died in waters where no memorial could be built and no cemetery established.</p>
<p className="mt-3">More than 4,000 Canadians of the Royal Canadian Navy and Canadian Merchant Navy were lost during the Battle of the Atlantic. As Newfoundland was not yet part of Canada during the war, its losses are recorded separately: approximately 150 to 200 members of the Newfoundland Royal Naval Reserve were killed, along with several hundred Newfoundland seamen serving in the Merchant Navy and Allied merchant fleets, many of them in the Atlantic.</p>
<p className="mt-3">The Royal Navy suffered more than 50,000 fatalities during the Second World War, a significant proportion of them in Atlantic convoy operations, while the British Merchant Navy lost more than 30,000 seamen, the majority in the Battle of the Atlantic. The United States Merchant Marine suffered approximately 9,500 fatalities during the war, most of them in the Atlantic, while an estimated 5,000 to 6,000 United States Navy personnel were killed in Atlantic convoy escort, anti-submarine, and coastal defence operations.</p>
<p className="mt-3">Air power was also central to the Atlantic war. Aircraft of the Royal Air Force, the Royal Canadian Air Force, and the United States Navy and Army Air Forces flew long-range patrols over the North Atlantic, often in extreme weather and at the limits of their range. Many crews were lost in operations far from land, their aircraft disappearing into the sea they were tasked to defend. German and Italian air forces also sustained losses in maritime patrol, reconnaissance, and anti-shipping operations across the Atlantic theatre.</p>
<p className="mt-3">The Battle of the Atlantic was a multinational effort. Sailors, airmen, and merchant seamen from across the Allied world&mdash;including those from Britain, Canada, Newfoundland, the United States, Norway, and other occupied and allied nations&mdash;served in convoy escort, merchant shipping, and maritime air operations. Many were lost at sea or in the air, often far from their home countries and without marked graves.</p>
<p className="mt-3">On the opposing side, more than 30,000 German submariners died at sea&mdash;while thousands of additional German naval personnel and merchant sailors, as well as approximately 2,900 Italian naval and merchant personnel, were also lost, most with no grave but the ocean.</p>
<p className="mt-3">At Bell Island, the dead were brought ashore and buried. The attacks were seen from land. Survivors were rescued by civilians. The ships remain within reach.</p>
<p className="mt-3">What is dispersed across an ocean can, here, be understood in one place.</p>
<p className="mt-3">The purpose of this project is not to replace existing memorials, but to extend their meaning&mdash;to use 3D photogrammetry and Digital Terrain Mapping (DTM) to make visible a wider Atlantic landscape of loss, service, and sacrifice, much of which lies beyond sight beneath the sea.</p>
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