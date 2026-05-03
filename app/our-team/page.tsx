import ContentSection from "@/components/sections/ContentSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import FullWidthContent from "@/components/sections/FullWidthContent"

export default function Our_Team() {


  return (
    <>
<InnerBanner
subtitle="Our Team"
  title="Our Team"
  image="/images/Header-U=576-u576_sonar.jpg"
  imageAlt="Bell Island Expedition Team"
/>

<ContentSection
  title="Expedition Team"
  description={
    <>
      <p className="mt-2">
        The Bell Island Battle of the Atlantic Virtual Memorial Expedition 2027
        brings together a multidisciplinary team of technical divers, marine
        scientists, archaeologists, historians, and expedition specialists with
        extensive experience in underwater documentation, cold-water
        operations, and maritime heritage research.
      </p>

      <p className="mt-2">
        Members of the expedition have participated in major projects involving
        shipwreck archaeology, naval operations, marine technology development,
        and scientific fieldwork in Canada, the United States, Europe, and the
        polar regions. The project builds directly on the experience and
        methodologies developed during the HMCS Canada Expedition and extends
        them into a complex, multi-site wartime landscape.
      </p>

      <p className="mt-2">
        The Bell Island project requires expertise not only in diving, but also
        in remote sensing, cartography, marine biology, archival research, and
        expedition logistics. The integration of these disciplines allows the
        expedition to document the site accurately, safely, and with full
        respect for its historical and commemorative significance.
      </p>
    </>
  }
  image="/images/HMCS-Canada_Starboard.jpg"
/>

<ContentSection
  title="Joseph Frey, CD, FRCGS"
  description={
    <>
      <h3 className="heading mt-2">
        Expedition Lead and Project Director (Historical and Scientific Integration)
      </h3>

      <p className="mt-2">
        Joseph Frey is a former military officer, explorer, science writer, and
        expedition leader specializing in the integration of historical
        research, underwater archaeology, and advanced marine imaging
        technologies.
      </p>

      <p className="mt-2">
        His work focuses on bringing together archival analysis, field
        operations, and digital documentation to interpret complex maritime
        heritage sites. He has participated in major international expeditions,
        including the discovery of HMS Erebus and NOAA’s survey of the German
        submarine U-576—a Battle of the Atlantic wreck off North Carolina—as
        well as leading the HMCS Canada Expedition, which produced the first
        comprehensive three-dimensional record of Canada’s first purpose-built
        warship.
      </p>

      <p className="mt-2">
        In addition to fieldwork, Joseph has written extensively on
        exploration, archaeology, field sciences, and maritime history for
        publications including TIME, The Globe and Mail, National Post, and
        Canadian Geographic, and has contributed to multiple books on polar
        exploration and history.
      </p>

      <p className="mt-2">
        He is a Fellow and senior leader of the Royal Canadian Geographical Society, where he serves as Vice-President and Chair of the College of Fellows, and is a former Vice-President and Director of The Explorers Club. His career brings together academic institutions, government agencies, technology partners, and expedition teams to deliver integrated scientific and historical outcomes.
      </p>

      <p className="mt-2">
        For the Bell Island Expedition, Frey is responsible for overall project direction, the integration of historical and scientific research, and the coordination of field operations and partner contributions. The project reflects a broader effort to develop new methods for documenting and interpreting maritime battlefields through large-scale digital terrain modelling and public-facing virtual reconstruction.
      </p>
    </>
  }
  image="/images/Joseph-Frey.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>


<FullWidthContent
className="bg-[var(--primary-color)]"
  blocks={[
    {
    blockClassName: "bg-[var(--background-color)] p-5",
      title: "Marine Institute, Memorial University of Newfoundland",
      image: "/images/marine-institute.jpg",
      description: (
        <>
          <h3 className="heading mt-2">
            Principal Academic and Operational Partner
          </h3>
          <p className="mt-2">
          The Marine Institute of Memorial University of Newfoundland serves as
          the expedition’s principal academic and operational partner.
        </p>

        <p className="mt-4">
          The Institute provides research-vessel support, technical expertise,
          and integration of marine science and survey technologies. With
          extensive experience in ocean research and applied marine technology
          in Atlantic Canadian waters, the Marine Institute enables the
          expedition to combine archaeological documentation, environmental
          study, and digital terrain mapping within a unified framework.
        </p>

        <p className="mt-4">
          Kirk Regular and colleagues at the Marine Institute are supporting
          expedition planning, vessel operations, survey systems, and the
          integration of academic research with field documentation. The
          project will also provide opportunities for graduate student
          participation in fieldwork and data analysis.
        </p>
        </>
      )
    },
    {
    blockClassName: "bg-[var(--background-color)] p-5",
      title: "Shipwreck Preservation Society of Newfoundland and Labrador",
      image: "/images/ms2.jpg",
      description: (
        <>
          <h3 className="heading mt-2">
            Heritage Partner
          </h3>
         <p className="mt-2">
          The Shipwreck Preservation Society of Newfoundland and Labrador
          contributes regional expertise, historical knowledge, and heritage
          stewardship.
        </p>

        <p className="mt-4">
          The Society has long been involved in the documentation and
          protection of maritime heritage sites in Newfoundland waters and
          plays a key role in liaison with provincial authorities, local
          communities, and the diving community.
        </p>

        <p className="mt-4">
          Neil Burgess and members of the Society provide historical research
          support, local operational knowledge, and coordination with heritage
          stakeholders, ensuring that all work aligns with established cultural
          heritage practices.
        </p>
        </>
      )
    },
    {
        blockClassName: "bg-[var(--background-color)] p-5",
      title: "VOYIS",
      image: "/images/voyis.jpg",
      description: (
        <>
          <h3 className="heading mt-2">
            Underwater Imaging and Survey Technology
          </h3>
         <p className="mt-2">
          VOYIS provides advanced underwater imaging systems and technical
          expertise for three-dimensional photogrammetry and digital mapping.
        </p>

        <p className="mt-4">
          Their technology enables high-resolution documentation of large-scale
          wreck sites in low-visibility, cold-water environments—conditions
          characteristic of Bell Island. This capability is central to the
          creation of an integrated Digital Terrain Model (DTM) of the
          battlefield.
        </p>

        <p className="mt-4">
          Brenden St. John and the VOYIS engineering team support the
          expedition through imaging systems, survey integration, and on-site
          technical operations.
        </p>
        </>
      )
    },
        {
    blockClassName: "bg-[var(--background-color)] p-5",
      title: "Royal Canadian Geographical Society (RCGS)",
      image: "/images/Can Geo logo.jpg",
      description: (
        <>
<h3 className="heading mt-2">Expedition Partner</h3>
         <p className="mt-2">
          The Royal Canadian Geographical Society supports the expedition
          through its national expedition program, cartographic expertise, and
          educational outreach.
        </p>

        <p className="mt-4">
          The Society has awarded the Bell Island Expedition a Major Grant and
          authorizes the expedition to fly the official RCGS Expedition Flag.
        </p>

        <p className="mt-4">
          Tim Joyce and the Society’s cartographic and education teams assist
          with mapping, public outreach, and the development of educational
          material based on the expedition’s results.
        </p>

        <p className="mt-4">
          Through Canadian Geographic and Canadian Geographic Education, the
          Society will help communicate the results of the expedition to
          national and international audiences.
        </p>
        </>
      )
    }
  ]}
/>


<ContentSection
  title="Technical Dive Team"
  description={
    <>
      <p className="mt-2">
        The expedition dive team consists of highly experienced technical divers
        with backgrounds in deep-water, cold-water, and wreck-diving
        operations.
      </p>

      <p className="mt-2">
        Team members have participated in underwater archaeology projects,
        scientific surveys, and expedition diving in challenging environments
        across multiple regions. Their work includes diver-based
        photogrammetry, mine-diving documentation, and operational support for
        remote survey systems.
      </p>

      <p className="mt-2">
        Guy Shockey and members of the technical dive team are responsible for
        in-water imaging operations and ensuring that all diving activities are
        conducted safely, efficiently, and in accordance with non-intrusive
        archaeological protocols.
      </p>
    </>
  }
  image="/images/RCGS Expedition Flag.jpg"
  reverse
/>

<ContentSection
  title="A Collaborative Expedition"
  description={
    <>
      <p className="mt-2">
        The Bell Island Battle of the Atlantic Virtual Memorial Expedition is a
        volunteer-driven initiative supported by academic institutions,
        heritage organizations, marine-technology specialists, and experienced
        expedition personnel.
      </p>

      <p className="mt-2">
        By integrating scientific research, historical investigation, and
        advanced imaging technology, the team contributes to a broader effort
        to document and interpret the Battle of the Atlantic—one of the
        longest and most strategically decisive campaigns of the Second World
        War.
      </p>

      <p className="mt-2">
        While much of that conflict unfolded across vast ocean spaces, Bell
        Island represents a rare and intact coastal battlefield where multiple
        shipwrecks, defensive positions, and industrial infrastructure can be
        understood together as a single historical landscape.
      </p>

      <p className="mt-2">
        Through this work, the expedition seeks not only to preserve the Bell
        Island site, but also to enhance public understanding of Canada’s role
        in the Battle of the Atlantic and the wider North Atlantic war.
      </p>
    </>
  }
  image="/images/VOYIS-tethered.jpg"
  className="bg-[var(--secondary-bg-color)]"
/>

<CTASection
  title="Support the Bell Island Expedition Team"
  backgroundImage="/images/GhostBowReneeJILL8747l.jpg"
  buttons={[
    {
      text: "Support the Expedition",
      link: "/support-us",
      variant: "primary"
    }

  ]}
/>
</>
  )
}