import ContentSection from "@/components/sections/ContentSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import CheckList from "@/components/CheckList"
import type { Metadata } from "next"




export const metadata: Metadata = {
  title: "Virtual Memorial | Bell Island Battle of the Atlantic",
  description:
    "Explore the Bell Island Virtual Memorial—a digital reconstruction of a Second World War naval battlefield, integrating underwater archaeology, mapping, and historical research.",
  keywords: [
    "Bell Island",
    "Battle of the Atlantic",
    "naval history",
    "donation",
    "virtual memorial"
  ]
}

export default function Virtual_Memorial() {


  return (
    <>
<InnerBanner
subtitle="Virtual Memorial"
  title="Digital Documentation, Mapping, and Interpretation"
  image="/images/Integrated Battlefield diagram.png"
  imageAlt="Bell Island Expedition Project"
/>

<ContentSection
  title="The Project"
  description={
    <>
<p>The Bell Island Expedition is a Canadian-led initiative to document and interpret the wrecks sunk during the German submarine attacks of 1942, and to present them within a unified wartime landscape.</p>
<p className="mt-2">Rather than treating each wreck or site in isolation, the Virtual Memorial enables the Bell Island battlefield to be understood spatially—linking events at sea to the shoreline, industrial infrastructure, and the community that witnessed the attacks.</p>
<p className="mt-2">The result is not simply a record of individual shipwrecks, but the reconstruction of a Battle of the Atlantic battlefield as a connected historical environment.</p>
    </>
  }
  image="/images/diver-with-torch.jpg"
/>




<ContentSection
  title="A Connected Battlefield"
  description={
    <>
<p className="mt-2">The four ships sunk at Bell Island lie within close proximity to one another and to surviving wartime features on land. This concentration creates a rare opportunity: to understand a naval engagement not as dispersed events across an ocean, but as a defined and coherent landscape.</p>
<p className="mt-2">Within this setting, wrecks, harbour approaches, coastal defensive positions, industrial infrastructure, and memorial sites can be examined together. The relationships between these elements reveal how the events of 1942 unfolded across both sea and shore, linking naval operations directly to the industrial and human context in which they occurred.</p>
<p className="mt-2">Together, these elements form one of the most complete surviving naval battle landscapes in North America.</p>

      
    </>
  }
  image="/images/Bell-Island-sea-floor.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>






<ContentSection
  title="What the Virtual Memorial Provides"
  description={
    <>
      <p className="mt-2">
        The Bell Island Virtual Memorial will result in a permanent digital
        reconstruction of the battlefield, designed for exploration, research,
        and public interpretation.
      </p>

      <p className="mt-2 mb-2">
        This includes:
      </p>

      <CheckList
        items={[
          { text: <>A unified three-dimensional representation of the Bell Island battlefield</> },
          { text: <>Detailed digital models of each wreck site</> },
          { text: <>Spatial visualization linking seabed, shoreline, and land-based infrastructure</> },
          { text: <>A long-term record supporting archaeological and environmental research</> },
          { text: <>Interpretive material for museum, educational, and public use</> }
        ]}
      />

      <p className="mt-2">
        For the first time, the Bell Island attacks will be experienced as a
        coherent spatial environment, allowing users to understand how
        geography, industry, and naval operations intersected during the
        events of 1942.
      </p>
    </>
  }
  image="/images/HMCS-Canada_Starboard_Fracture.jpg"

/>

<ContentSection
  title="From Documentation to Interpretation"
  description={
    <>
      <p className="mt-2">
        The significance of the Virtual Memorial lies not only in recording
        the sites, but in making their relationships understandable.
      </p>

      <p className="mt-2">
        Naval warfare is inherently difficult to interpret. Evidence is
        distributed, often inaccessible, and rarely experienced as a whole.
        By reconstructing the Bell Island battlefield as a unified digital
        environment, the Virtual Memorial allows spatial relationships to
        become clear—linking ship positions, attack patterns, industrial
        activity, and human response.
      </p>

      <p className="mt-2">
        This approach transforms documentation into interpretation, enabling
        the site to be explored as a complete historical landscape rather than
        a series of disconnected locations.
      </p>
    </>
  }
  image="/images/HMCS-Canada_Starboard_w_Background.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
  
/>


<ContentSection
  title="Foundations in Previous Expeditions"
  description={
    <>
      <p className="mt-2">
        The Bell Island Virtual Memorial builds directly on the methodology
        developed during the HMCS Canada Expedition, which produced the first
        complete three-dimensional record of Canada’s first purpose-built
        warship.
      </p>

      <p className="mt-2 mb-2">
        That expedition demonstrated how high-resolution imaging and digital
        reconstruction can:
      </p>

      <CheckList
        items={[
          { text: <>Document complex wreck sites without disturbance</> },
          { text: <>Support archaeological and ecological analysis</> },
          { text: <>Make underwater heritage accessible to a global audience</> }
        ]}
      />

      <p className="mt-2">
        Members of the expedition team also participated in the 2016 Battle of
        the Atlantic expedition led by the National Oceanic and Atmospheric
        Administration, which combined historical research, seafloor mapping,
        and high-resolution imaging to document wartime wrecks such as the
        German submarine U-576 and the freighter Bluefields.
      </p>

      <p className="mt-2">
        The Bell Island project extends these approaches from individual wreck
        documentation to the reconstruction of an entire battlefield landscape.
      </p>
    </>
  }
  image="/images/HMCS-Canada-top-view.jpg"

/>


<ContentSection
  title="An Evolving Digital Platform"
  description={
    <>
      <p className="mt-2">
        The Bell Island Virtual Memorial is designed to develop over time as
        additional material is incorporated.
      </p>

      <p className="mt-2 mb-2">
        Future development may include:
      </p>

      <CheckList
        items={[
          { text: <>Interactive maps of North Atlantic convoy routes</> },
          { text: <>Expanded three-dimensional models of additional sites</> },
          { text: <>Integration of archival photographs and documents</> },
          { text: <>Cartographic reconstruction of wartime bases and infrastructure</> },
          { text: <>Educational resources for students and researchers</> }
        ]}
      />

      <p className="mt-2">
        Future phases will expand this foundation to include a comprehensive
        interpretation of the North Atlantic system and the global naval war,
        placing Bell Island within the full operational and strategic framework
        of the Second World War.
      </p>
    </>
  }
  image="/images/Bell Island Virtual Memorial mock up.png"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>



<ContentSection
  title="A Long-Term Documentation Project"
  description={
    <>
      <p className="mt-2">
        The Bell Island Expedition 2027 represents the first stage of a
        multi-year effort to document and interpret one of the most important
        integrated naval battlefields of the Second World War.
      </p>

      <p className="mt-2">
        By combining history, maritime archaeology, marine science, and
        advanced imaging technologies, the Virtual Memorial will create a
        lasting digital record that remains accessible to researchers,
        students, and the public.
      </p>

      <p className="mt-2">
        As this work continues, Bell Island will serve as the foundation for a
        broader interpretive framework—linking Newfoundland and Labrador,
        Canada, and the wider Atlantic world within the global history of the
        Battle of the Atlantic.
      </p>
    </>
  }
  image="/images/VOYIS-7.jpg"
  
/>


<CTASection
  title="Support the Bell Island Expedition Team"
  backgroundImage="/images/virtual-memorial-call-to-action.jpg"
  buttons={[
    {
      text: "Support the Expedition",
      link: "https://secure.qgiv.com/for/bellislandexpedition/",
      variant: "primary",
      buttonTarget:"_blank"
    }

  ]}
/>
</>
  )
}