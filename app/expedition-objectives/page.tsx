import ContentSection from "@/components/sections/ContentSection"
import CheckList from "@/components/CheckList"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import type { Metadata } from "next"
import Image from "next/image"


export const metadata: Metadata = {
  title: "Expedition Objectives | Bell Island Virtual Memorial Project",
  description:
    "Discover the objectives of the Bell Island Expedition, including underwater archaeology, marine science, and digital reconstruction of a Second World War naval battlefield.",
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

export default function Expedition_Objectives() {


  return (
    <>

          <InnerBanner
          subtitle="Expedition Objectives"
        title="Documenting and Interpreting the Bell Island Battlefield"
        image="/images/expedition-objective-1.jpg"
        imageAlt="Bell Island Harbour"
      />
{/* --------------------------------------------  Section 1 -------------------------------------------- */}
{/* --------------------------------------------  Section 2 -------------------------------------------- */}
<ContentSection
  title="Expedition Objectives"
  description={<><p className="mb-2">The Bell Island Battle of the Atlantic Expedition is designed to document, interpret, and make accessible one of the most intact Second World War naval battle landscapes in North America.</p> <p>The project brings together underwater archaeology, marine science—including marine biology and environmental study—advanced imaging technologies, and historical research to produce a comprehensive digital record of the 1942 attacks and their wider operational and geographic context within the Battle of the Atlantic, while also supporting responsible heritage interpretation and long-term scientific study in Newfoundland and Labrador.</p>
</>}
  image="/images/Integrated Battlefield diagram.png"
  caption="Integrated reconstruction of the Bell Island battlefield linking wrecks, shoreline infrastructure,
coastal defence positions, and community landscape into a unified spatial interpretation model.
This is an illustration"
  // buttonText="Learn More"
  // buttonLink="/virtual-memorial"
  // buttonVariant="primary"
/>
{/* --------------------------------------------  Section 3 -------------------------------------------- */}
{/* <ServicesSection/> */}




<ContentSection
  title="Creation of a High-Resolution Digital Terrain Model (DTM)"
  
  description={
    <>
      {/* <h3 className="heading text-2xl my-5">SS Saganaga</h3> */}

      
    <Image src="/images/Creating-a-DTM.png" alt="Cross section Bell Island iron mines" className="w-full object-cover mb-4" width={100} height={100} />

<p className="text-gray-500 text-sm mb-2">Integrated workflow combining diver-based photogrammetry, multibeam sonar, USBL positioning,
drone imaging, and terrestrial laser scanning into a unified Digital Terrain Model (DTM) of the Bell
Island battlefield. This is an illustration</p>

<p className="mb-2">At the core of the expedition is the development of a fully integrated three-dimensional Digital Terrain Model (DTM) of the Bell Island battlefield.</p>
<p className="mb-2">This model will combine:</p>
      <CheckList
  items={[
    {
      text: (
        <>
          <p>High-resolution photogrammetry of all four wrecks:</p>
        </>
      ),
      children: [
        "Saganaga (British)",
        "Lord Strathcona (Canadian)",
        "Rose Castle (Canadian)",
        "PLM-27 (Free French under British wartime control)"
      ]
    },
    {
      text: (
        <>
          <p>Multibeam and acoustic mapping of the surrounding seafloor</p>
        </>
      )
    },
    {
      text: (
        <>
          <p>Precise georeferencing using USBL positioning systems</p>
        </>
      )
    },
    {
      text: (
        <>
          <p>Aerial drone imaging conducted by a licensed operator from Memorial University’s Marine Institute, providing high-resolution coverage of:</p>
        </>
      ),
      children: [
        "The wreck sites and surrounding waters in Conception Bay",
        "Scotia Pier and the former loading infrastructure",
        "The Seamen’s Cemetery at Lance Cove",
        "The Cemetery Hill / Coastal Road artillery battery",
        "The Bell Island Community Museum and No. 2 Mine"
      ]
    },
    {
      text: (
        <>
          <p>Terrestrial laser scanning of:</p>
        </>
      ),
      children: [
        "The Cemetery Hill coastal artillery battery",
        "The remains of Scotia Pier",
        "The Seamen’s Cemetery at Lance Cove"
      ]
    }
  ]}
/>
<p>The result will be a unified digital reconstruction of the battlefield—linking seabed, shoreline,
and land-based wartime infrastructure into a single coherent spatial model.</p>
    </>
  }
  
  // image="/images/Creating-a-DTM.png"
  // reverse
  className="bg-[var(--secondary-bg-color)]"
/>



{/* --------------------------------------------  Section 4 -------------------------------------------- */}
<ContentSection
  title="Underwater Archaeological Documentation and Site Condition Assessment"
  description={<>
  <iframe title="HMCS Canada (SS Queen of Nassau)" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/201457d4ee034ff9a3c25a34e560bf89/embed" width="100%" height="500"> </iframe>

<p className="text-gray-500 text-sm mt-2 mb-2">High-resolution diver-based photogrammetry enables precise three-dimensional documentation
of complex wreck structures, forming the archaeological foundation of the Digital Terrain Model (DTM).</p>

<p>
  The expedition will conduct systematic, non-intrusive archaeological
  recording of the wrecks.
</p>

<p className="mt-2 mb-2">This includes:</p>

<CheckList
  items={[
    { text: <>Structural documentation of hulls, cargo remains, and damage patterns</> },
    { text: <>Identification of torpedo impact points and blast effects</> },
    { text: <>Assessment of site integrity and long-term preservation conditions</> },
    { text: <>Comparative analysis between wrecks from the September and November 1942 attacks</> }
  ]}
/>

<p className="mt-2">In addition to documentation, the expedition will establish a baseline record of the physical condition of each vessel. This will provide a reference for future monitoring of structural change, material degradation, and site evolution over time.</p>
<p className="mt-2">All work will be conducted in accordance with established underwater cultural heritage protocols, ensuring that the sites are documented but not disturbed.</p>
<p className="mt-2">The expedition is undertaken in consultation with the Shipwreck Preservation Society of Newfoundland and Labrador, ensuring alignment with provincial heritage practices and community interests.</p>

  </>}

  // image="/images/1b24e84f974e42068251f5928464e540.jpeg"
/>
{/* --------------------------------------------  Section 5 -------------------------------------------- */}

{/* --------------------------------------------  Section 6 -------------------------------------------- */}

<ContentSection
  title="Marine Ecology and Environmental Baseline Study"
  
  description={
    <>
<p className="mt-2">
  After more than eighty years on the seabed, the wrecks have become
  established artificial reef systems within Conception Bay.
</p>

<p className="mt-2 mb-2">The expedition will document:</p>

<CheckList
  items={[
    { text: <>Species presence and biodiversity associated with each wreck</> },
    { text: <>Structural habitat complexity and ecological variation between sites</> },
    { text: <>Environmental indicators, including water temperature and biological distribution</> }
  ]}
/>

<p className="mt-2">
  This work will establish a baseline dataset for long-term environmental monitoring, supporting future research into ecological change and the interaction between marine environments and submerged cultural heritage.
</p>
    </>
  }
  
      images={[
"/images/cold-water-coral-by-PLM-torpedo-Hole-JILL.jpg",
    "/images/Cold-Water-coral-on-deck-Gun-Strathcona.jpg"
  ]}
  caption="Cold-water coral growth on the Bell Island wrecks illustrates the development of complex marine
habitats and provides a measurable baseline for future ecological change due to climate change."
    reverse
  className="bg-[var(--secondary-bg-color)]"

/>
{/* --------------------------------------------  Section 7 -------------------------------------------- */}

<ContentSection
  title="Technology Demonstration and Method Development"
  description={
    <>
      <p className="mt-2">
        A key objective of the expedition is to evaluate and refine advanced marine imaging technologies in a complex, cold-water North Atlantic environment.
      </p>

      <p className="mt-2 mb-2">This includes:</p>

      <CheckList
        items={[
          { text: <>Diver-based photogrammetry using high-resolution imaging systems</> },
          { text: <>Deployment of stereo camera platforms and autonomous or semi-autonomous survey systems</> },
          { text: <>Integration of optical, acoustic, and positioning data into a unified geospatial model</> }
        ]}
      />

      <p className="mt-2">
       Particular emphasis will be placed on comparing diver-acquired datasets with those generated by remotely operated systems, informing best practices in underwater documentation and digital reconstruction.
      </p>
    </>
  }
  
  video="/videos/Roger-Lacasse-at-bow-Ewan-1.MP4"

  // image="/images/Joe-Hoyt-photographing-U-576.jpg"

/>

{/* --------------------------------------------  Section 8 -------------------------------------------- */}
<ContentSection
  title="Integration of Sea, Shore, and Industrial Landscape"
  description={
    <>
      <p className="mt-2">
        Unlike most naval engagements, the Bell Island attacks occurred within a
        defended industrial harbour.
      </p>

      <p className="mt-2 mb-2">The expedition will therefore integrate:</p>

      <CheckList
        items={[
          { text: <>The wrecks on the seabed</> },
          { text: <>Coastal defensive positions</> },
          { text: <>Industrial infrastructure linked to iron ore loading and export</> },
          { text: <>The surrounding community landscape</> }
        ]}
      />

      <p className="mt-2">
        This approach treats Bell Island not as a collection of isolated sites, but as a complete wartime system in which industry, geography, and naval conflict intersect.
      </p>
      <Image src="/images/xlQzr7gp.png" alt="Mini Graphic Illustration" className="w-full object-cover mt-4 mb-0" width={100} height={100} />
    <p className="text-sm mt-3 text-foreground-color media-caption">Integrated interpretation linking seabed wrecks, coastal defence positions, industrial
infrastructure, and the Bell Island community landscape into a unified wartime system.</p>
    </>
  }

image="/images/Bell_Island_Newfoundland.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>

{/* --------------------------------------------  Section 8 -------------------------------------------- */}

<ContentSection
  title="Public Interpretation and Digital Access"
  description={
    <>
    {/* <iframe title="HMCS Canada (SS Queen of Nassau)" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" src="https://sketchfab.com/models/201457d4ee034ff9a3c25a34e560bf89/embed" width="100%" height="500"> </iframe> */}
      
    <video src="videos/HMCS-Canada_Travel_w_Background.mp4" className="inset-0 w-full w-100 h-full" controls></video>
      
      <p className="mt-2">
        A central goal of the project is to make this history accessible to
        Canadians and an international audience.
      </p>

      <p className="mt-2 mb-2">Outputs will include:</p>

      <CheckList
        items={[
          { text: <>An interactive three-dimensional digital model accessible online</> },
          { text: <>Visualizations for museum and educational use</> },
          { text: <>Interpretive materials linking Bell Island to the wider Battle of the Atlantic</> },
          { text: <>On-site interpretive potential, including QR-linked access points</> }
        ]}
      />

      <p className="mt-2">
        The project supports the responsible development of heritage tourism in Newfoundland and Labrador by connecting Bell Island to related wartime sites across the province, including St. John’s Harbour, Signal Hill, Cape Spear, Argentia, and Gander, as well as smaller communities associated with radar, weather, and coastal defence operations.
      </p>
    </>
  }
  // image="/images/U-576-sonar.jpg"

/>


<ContentSection
  title="Training and Academic Collaboration"
  description={
    <>
      <p className="mt-2">
        The expedition will support the involvement of students and researchers
        through Memorial University’s Marine Institute.
      </p>

      <p className="mt-2 mb-2">This includes:</p>

      <CheckList
        items={[
          { text: <>Participation in field operations</> },
          { text: <>Exposure to advanced survey and imaging technologies</> },
          { text: <>Integration of expedition data into academic research projects</> }
        ]}
      />

      <p className="mt-2">
       The project serves as both a documentation initiative and a training platform for the next generation of marine scientists and archaeologists.
      </p>
    </>
  }
  image="/images/ZpDWntlM.jpeg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>




<ContentSection
  title="Contribution to National Commemoration"
  description={
    <>
      <p className="mt-2">
        The Bell Island attacks brought the Battle of the Atlantic directly to Newfoundland, then a
separate Dominion, striking a vital Allied industrial and shipping centre and linking the island’s
wartime experience to the wider struggle for control of the North Atlantic.
      </p>

      <p className="mt-2 mb-2">
        By documenting and interpreting this site, the expedition contributes
        to:
      </p>

      <CheckList
        items={[
          { text: <>Recognition of the Royal Canadian Navy, the Royal Canadian Air Force, the Newfoundland
Escort Force, the Merchant Navy, and sailors and aircrew from many nations who perished
during the Battle of the Atlantic—the longest continuous campaign of the Second World War</> },
          { text: <>Greater public understanding of the roles played by Canada and Newfoundland—then a
separate Dominion—in the Battle of the Atlantic</> },
          { text: <>The creation of an enduring digital memorial to those who served and were lost during the
Battle of the Atlantic</> }
        ]}
      />

    </>
  }
  image="/images/hdFatPHZ.jpg"

/>




<ContentSection
  title="Looking Ahead"
  description={
    <>
    <Image src="/images/looking-ahead.jpg" alt="Looking Ahead" className="w-full object-cover mb-4" width={100} height={100} />
    
    <p className="text-gray-600 text-sm mb-4">Conceptual illustration of the Bell Island Battle of the Atlantic Virtual Memorial
Expedition’s integrated documentation approach, showing the relationship between
seabed wrecks, shoreline infrastructure, convoy routes, and digital terrain modelling
within the wider North Atlantic system. Diagram is illustrative and interpretive in nature;
positions, scales, and spatial relationships are not survey-accurate and do not represent
final expedition data products.</p>
    
    <p className="mt-2">
The Bell Island Expedition 2027 represents the foundation of a long-term effort to document, understand, and interpret Canada’s wartime heritage in its full geographic context—from seabed to shoreline to inland infrastructure.
      </p>

      <p className="mt-2">
Building on methods developed during NOAA’s 2016 Battle of the Atlantic expedition and
the HMCS Canada Expedition 2025, this project extends integrated documentation
methods to a larger and more complex battlefield environment, linking scientific research,
historical interpretation, and commemoration within the broader North Atlantic system.
      </p>
    </>
  }
  // image="/images/looking-ahead.jpg"
  // reverse
  className="bg-[var(--secondary-bg-color)]"

/>

{/* --------------------------------------------  Section 8 -------------------------------------------- */}


<CTASection
  title="Support the Bell Island Expedition 2027"
  description=""
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
