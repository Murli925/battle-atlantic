import ContentSection from "@/components/sections/ContentSection"
import ServicesSection from "@/components/sections/ServiceSection"
import QuoteSection from "@/components/sections/QuoteSection"
import CheckList from "@/components/CheckList"

export default function Home() {
  return (
    <>

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
    "Four Second World War shipwrecks in Conception Bay",
    "The remains of Scotia Pier",
    "A preserved coastal artillery battery",
    "The Seamen&rsquo;s Cemetery at Lance Cove",
    "Flooded iron ore mine workings"
  ]}
/>

  </>}
  image="/images/banner-2.jpg"
  reverse
  buttonText="Support Us"
  buttonLink="/support-us"
  buttonVariant="secondary"
/>

<ContentSection
  title="A Memorial Built Through Science and Exploration"
  description={<>
  
  <ul>
<li><strong>Underwater archaeology &mdash;</strong> high-resolution 3D documentation</li>
<li><strong>Digital Terrain Model (DTM) &mdash;</strong> integrated seabed, shoreline, and land mapping</li>
<li><strong>Marine science &mdash;</strong> biological and ecological baseline studies</li>
<li><strong>Graduate student training &mdash;</strong> field and research participation</li>
<li><strong>Public interpretation and heritage tourism &mdash;</strong> accessible digital and on-site engagement</li>
</ul>
<p>This work builds on the HMCS Canada Expedition, which produced a complete three-dimensional photogrammetric model of Canada&rsquo;s first purpose-built warship.</p>
  
  </>}
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