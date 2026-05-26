import Image from "next/image"
import ContentSection from "@/components/sections/ContentSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import FullWidthContent from "@/components/sections/FullWidthContent"
import type { Metadata } from "next"
import CheckList from "@/components/CheckList"
import TeamSection from "@/components/sections/TeamSection"


export const metadata: Metadata = {
  title: "Our Team | The Team Behind the Bell Island Expedition",
  description:
    "A collaborative team of researchers, divers, and partners working to document and interpret the Bell Island battlefield.",
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

export default function Our_Team() {


  return (
    <>
<InnerBanner
subtitle="Our Team"
  title="The Expedition Team"
  image="/images/Header-U=576-u576_sonar.jpg"
  imageAlt="Bringing together expertise in underwater archaeology, marine science, technical diving, digital terrain modelling, historical research, and advanced subsea imaging technologies."
/>

<ContentSection
  title="Expedition Team"
  description={
    <>
      <p className="mt-2">
The Bell Island Battle of the Atlantic Virtual Memorial Expedition 2027 brings together a multidisciplinary team of technical divers, marine scientists, archaeologists, historians, and expedition specialists with extensive experience in underwater documentation, cold-water operations, and maritime heritage research.
      </p>

      <p className="mt-2">
        Members of the expedition have participated in major projects involving shipwreck archaeology, naval operations, marine technology development, and scientific fieldwork in Canada, the United States, Europe, and the polar regions.
      </p>

      <p className="mt-2">
Building on the experience of NOAA’s 2016 Battle of the Atlantic Expedition, the HMCS Canada Expedition 2025, the Bell Island project combines historical research, advanced imaging technologies, marine science, and expedition field operations to document one of the most intact Battle of the Atlantic landscapes in North America.
      </p>
      <p  className="mb-2">The expedition integrates expertise in:</p>
      <CheckList
        items={[
    { text: <>Underwater archaeology</> },
    { text: <>Digital terrain modelling (DTM)</> },
    { text: <>Marine ecology</> },
    { text: <>Technical diving</> },
    { text: <>Cartography</> },
{ text: <>Remote sensing</> },
{ text: <>Archival research</> },
{ text: <>Subsea imaging technologies</> }
  ]}

   />
<p>Together, these disciplines allow the battlefield landscape to be documented accurately, safely, and non-intrusively while preserving its historical and commemorative significance.</p>
    </>
  }
  image="/images/cold-water-coral-by-PLM-torpedo-Hole-JILL.jpg"
/>

<TeamSection
  members={[
    {
      name: "Joseph Frey",
      role: "Expedition Lead and Project Director",
      subtitle: "Historical and Scientific Integration",
      image: "",
      bio: (
        <>
          <p>
            Joseph Frey is a Canadian explorer, science writer, retired military officer, and expedition leader specializing in the integration of historical research, underwater archaeology, marine science, and advanced marine imaging technologies. His work focuses on combining archival analysis, field operations, and digital documentation to interpret complex maritime heritage sites and underwater cultural landscapes.
          </p>

          <p>
            Frey has participated in major international expeditions, including the discovery expedition to HMS Erebus, NOAA’s survey of the German submarine U-576, and the HMCS Canada Expedition 2025, which produced the first comprehensive three-dimensional documentation of Canada’s first purpose-built warship. He serves as Vice-President and Chair of the College of Fellows of the Royal Canadian Geographical Society and is a former Vice-President and Director of The Explorers Club.
          </p>

          <p>
            For the Bell Island Expedition, Frey is responsible for overall project direction, interdisciplinary coordination, institutional partnerships, and the integration of historical and scientific research.
          </p>
        </>
      )
    },

    {
      name: "Kirk Regular",
      role: "Marine Institute, Memorial University of Newfoundland",
      subtitle: "Expedition Operations and Marine Survey Integration",
      image: "",
      bio: (
        <>
          <p>
            Kirk Regular is associated with the Marine Institute of Memorial University of Newfoundland and supports the expedition through marine operations planning, survey integration, and coordination of applied ocean technology systems. His work contributes to the integration of marine science, vessel operations, and digital survey methodologies within the expedition framework.
          </p>

          <p>
            Through the Marine Institute, Regular supports the expedition’s operational planning, research-vessel coordination, and the integration of academic and technical field activities. His experience in marine operations and applied ocean technologies contributes to the development of the expedition’s integrated Digital Terrain Model (DTM) approach.
          </p>

          <p>
            For the Bell Island Expedition, Regular assists with expedition planning, marine survey coordination, and the integration of field operations with academic research and technical documentation.
          </p>
        </>
      )
    },

    {
      name: "Neil Burgess",
      role: "Shipwreck Preservation Society of Newfoundland and Labrador",
      subtitle: "Heritage and Regional Operations Support",
      image: "",
      bio: (
        <>
          <p>
            Neil Burgess is associated with the Shipwreck Preservation Society of Newfoundland and Labrador and contributes regional expertise, heritage knowledge, and operational support for the Bell Island Expedition. His work helps connect the expedition with local heritage organizations, diving communities, and regional stakeholders.
          </p>

          <p>
            The Society has long supported the documentation and protection of maritime heritage sites in Newfoundland and Labrador waters, particularly those associated with shipwreck archaeology and underwater cultural heritage. Burgess assists in ensuring that expedition activities align with established heritage stewardship practices and local operational requirements.
          </p>

          <p>
            For the Bell Island Expedition, Burgess supports historical coordination, regional operational planning, and liaison with local heritage and diving communities.
          </p>
        </>
      )
    },

    {
      name: "Brenden St. John",
      role: "VOYIS",
      subtitle: "Underwater Imaging and Survey Technology",
      image: "",
      bio: (
        <>
          <p>
            Brenden St. John is Head of Ocean Science at VOYIS and specializes in advanced underwater imaging, photogrammetry, and subsea survey technologies. His work focuses on the development and deployment of high-resolution optical imaging systems for marine science, shipwreck documentation, and ocean exploration.
          </p>

          <p>
            St. John has been involved in major underwater imaging initiatives and technical survey projects in challenging marine environments, including work associated with deep-water archaeology and polar exploration. His expertise includes laser scanning systems, subsea imaging integration, and large-scale three-dimensional documentation workflows.
          </p>

          <p>
            For the Bell Island Expedition, St. John supports the integration of imaging systems, survey technologies, and Digital Terrain Model (DTM) development for the documentation of the battlefield landscape.
          </p>
        </>
      )
    },

    {
      name: "Tim Joyce",
      role: "Royal Canadian Geographical Society",
      subtitle: "Cartography and Educational Outreach",
      image: "",
      bio: (
        <>
          <p>
            Tim Joyce is associated with the Royal Canadian Geographical Society and supports the Bell Island Expedition through cartographic coordination, educational outreach, and public engagement initiatives. His work contributes to the development of mapping, educational resources, and geographic interpretation associated with the expedition.
          </p>

          <p>
            Through the Royal Canadian Geographical Society and Canadian Geographic Education, Joyce assists with the communication of expedition results to national and international audiences. His involvement supports the integration of cartography, storytelling, and public education within the broader Battle of the Atlantic Virtual Memorial project.
          </p>

          <p>
            For the Bell Island Expedition, Joyce supports geographic interpretation, educational development, and public-facing communication of the expedition’s historical and scientific results.
          </p>
        </>
      )
    },

    {
      name: "Guy Shockey",
      role: "Dive Team Lead",
      subtitle: "Diving Operations",
      image: "",
      bio: (
        <>
          <p>
            Guy Shockey is a Canadian technical diving instructor, expedition diver, and founder of Thermocline Diving. He is one of Canada’s most experienced technical divers and has participated in advanced wreck-diving, underwater archaeology, and expedition operations in deep-water and cold-water environments around the world.
          </p>

          <p>
            Shockey has extensive experience in technical diving instruction, closed-circuit rebreather operations, and diver-based photogrammetry. He served as Dive Team Lead during the HMCS Canada Expedition 2025, coordinating deep technical diving operations associated with the three-dimensional documentation of Canada’s first purpose-built warship.
          </p>

          <p>
            For the Bell Island Expedition, Shockey is responsible for technical diving operations, diver safety, underwater imaging coordination, and the management of in-water expedition activities.
          </p>
        </>
      )
    },

    {
      name: "Roger Lacasse",
      role: "3D Photogrammetry Lead",
      subtitle: "Photogrammetry",
      image: "",
      bio: (
        <>
          <p>
           Roger Lacasse is an accomplished technical diver with more than 900 dives across North America, the Caribbean, Europe, Asia, and Australia. A technical diver since 2002, he is trained in cave and trimix diving and specializes in underwater photogrammetry, three-dimensional modelling, and the documentation of maritime heritage sites.
          </p>

          <p>
            Roger served as 3D Photogrammetry Lead for the HMCS Canada Expedition 2025, overseeing image acquisition and model development for the first complete three-dimensional photogrammetric documentation of HMCS Canada, Canada’s first purpose-built warship. The project produced a high-resolution digital model from thousands of underwater photographs and provided new archaeological and ecological management data for NOAA and marine heritage and ecological researchers.
          </p>

          <p>
            For the Bell Island Battle of the Atlantic Virtual Memorial Expedition 2027, Roger serves as 3D Photogrammetry Lead, responsible for coordinating underwater imaging and photogrammetric documentation of the four Bell Island wrecks. Working with expedition partners, he will help develop detailed three-dimensional models that form a key component of the project's integrated Digital Terrain Model and Virtual Memorial.
            </p>
        </>
      )
    }

  ]}
/>

<FullWidthContent
className="bg-[var(--primary-color)]"
  blocks={[
    {
    blockClassName: "bg-[var(--background-color)] p-5",
      title: "Marine Institute, Memorial University of Newfoundland",
      image: "/images/marine-institute.jpg",
      image2: "/images/MUN-logo.png",
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
      image: "/images/RCGS-logo.jpg",
      image2: "/images/Can Geo logo.jpg",
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
    },
    {
    blockClassName: "bg-[var(--background-color)] p-5",
      title: "Dive Team",
      image: "/images/HMCS-Canada-Expedition-Logo.jpg",
      description: (
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
      )
    }
  ]}
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
  description=""
  backgroundImage="/images/GhostBowReneeJILL8747l.jpg"
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
