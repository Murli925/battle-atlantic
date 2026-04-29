import ContentSection from "@/components/sections/ContentSection"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"

export default function Expedition_Objectives() {


  return (
    <>

          <InnerBanner
          subtitle="Expedition Objectives"
        title="Expedition Objectives"
        image="/images/BlastHole-Strathcona.jpg"
        imageAlt="Bell Island Harbour"
      />
{/* --------------------------------------------  Section 1 -------------------------------------------- */}
{/* --------------------------------------------  Section 2 -------------------------------------------- */}
<ContentSection
  title="Expedition Objectives"
  description={<><p className="mb-2">The Bell Island Battle of the Atlantic Expedition is designed to document, interpret, and make accessible one of the most intact Second World War naval battle landscapes in North America.</p> <p>The project brings together underwater archaeology, marine science—including marine biology and ecological study—advanced imaging technologies, and historical research to produce a comprehensive digital record of the 1942 attacks and their wider operational and geographic context within the Battle of the Atlantic, while also commemorating those who made the ultimate sacrifice and supporting the responsible development of heritage tourism and public interpretation associated with the Battle of the Atlantic in Newfoundland and Labrador.</p>
</>}
  image="/images/GhostBowReneeJILL8747l.jpg"
  buttonText="Learn More"
  buttonLink="/project"
  buttonVariant="primary"
/>
{/* --------------------------------------------  Section 3 -------------------------------------------- */}
{/* <ServicesSection/> */}




<ContentSection
  title="Creation of a High-Resolution Digital Terrain Model (DTM)"
  
  description={
    <>
      {/* <h3 className="heading text-2xl my-5">SS Saganaga</h3> */}
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
  
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>



{/* --------------------------------------------  Section 4 -------------------------------------------- */}
<ContentSection
  title="Underwater Archaeological Documentation"
  description={<>
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

<p className="mt-2">
  All work will be conducted in accordance with established underwater cultural
  heritage protocols, ensuring that the sites are documented but not disturbed.
</p>

<p className="mt-2">
  The expedition is undertaken in consultation with the Shipwreck Preservation
  Society of Newfoundland and Labrador, which plays an important role in the
  stewardship and protection of underwater cultural heritage in the province.
</p>

<p className="mt-2">
  This collaboration ensures that all documentation is conducted in accordance
  with established heritage practices and reflects the interests of the local
  and diving communities.
</p>

  </>}
  image="/images/banner-2.jpg"
  // buttonText="Support Us"
  // buttonLink="/support-us"
  // buttonVariant="secondary"
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
    { text: <>Indicators of environmental change, including water temperature and biological shifts</> }
  ]}
/>

<p className="mt-2">
  This work will establish a baseline dataset for long-term environmental
  monitoring, contributing to a broader understanding of marine ecosystems and
  environmental change in Newfoundland waters.
</p>
    </>
  }
  
  image="/images/banner-2.jpg"
    reverse
  className="bg-[var(--secondary-bg-color)]"

  // buttonText="Support Us"
  // buttonLink="/support-us"
  // buttonVariant="secondary"
/>
{/* --------------------------------------------  Section 7 -------------------------------------------- */}

<ContentSection
  title="Technology Demonstration and Method Development"
  description={
    <>
      <p className="mt-2">
        A key objective of the expedition is to evaluate and refine advanced
        marine imaging technologies in a complex, cold-water environment.
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
        Particular emphasis will be placed on comparing diver-acquired datasets
        with those generated by remotely operated and autonomous systems,
        informing future best practices in underwater documentation and digital
        reconstruction.
      </p>
    </>
  }
  image="/images/banner-2.jpg"

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
        This approach treats Bell Island not simply as a collection of wrecks,
        but as a complete wartime system in which industry, geography, and naval
        conflict intersect.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>

{/* --------------------------------------------  Section 8 -------------------------------------------- */}

<ContentSection
  title="Public Interpretation and Digital Access"
  description={
    <>
      <p className="mt-2">
        A central goal of the project is to make this history accessible to
        Canadians and an international audience.
      </p>

      <p className="mt-2 mb-2">Outputs will include:</p>

      <CheckList
        items={[
          { text: <>An interactive 3D digital model accessible online</> },
          { text: <>Visualizations suitable for museum and educational use</> },
          { text: <>Interpretive materials linking the Bell Island site to the wider Battle of the Atlantic</> },
          { text: <>On-site interpretive potential, including QR-linked digital access points</> }
        ]}
      />

      <p className="mt-2">
        In addition to digital access, the project supports the responsible
        development of heritage tourism associated with the Battle of the
        Atlantic in Newfoundland and Labrador.
      </p>

      <p className="mt-2">
        By linking Bell Island to key wartime sites across the province—
        including St. John’s Harbour and the Crow’s Nest Officers’ Club, Signal
        Hill, Cape Spear, the naval and air base at Argentia, and the
        transatlantic aviation hub at Gander—as well as to smaller coastal
        communities such as Fogo Island, Twillingate, and Bonavista, where
        radar, weather, and coastal defence installations formed part of the
        wider North Atlantic operational network, the expedition contributes to
        a distributed, place-based visitor experience grounded in historical
        interpretation, education, and community engagement.
      </p>
    </>
  }
  image="/images/banner-2.jpg"

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
        The project is intended not only as documentation, but as a training
        platform for the next generation of marine scientists and archaeologists.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>




<ContentSection
  title="Contribution to National Commemoration"
  description={
    <>
      <p className="mt-2">
        The Bell Island attacks represent one of the few instances of direct
        enemy action within Canadian waters during the Second World War.
      </p>

      <p className="mt-2 mb-2">
        By documenting and interpreting this site, the expedition contributes
        to:
      </p>

      <CheckList
        items={[
          { text: <>Recognition of the Royal Canadian Navy, the Merchant Navy, Allied seafarers, and the Royal Canadian Air Force</> },
          { text: <>Greater public understanding of Canada’s and Newfoundland’s—then a separate Dominion—role in the Battle of the Atlantic</> },
          { text: <>The creation of a meaningful and enduring digital memorial</> }
        ]}
      />

      <p className="mt-2">
        Unlike land battlefields, where physical markers often remain, the naval
        war is largely invisible.
      </p>

      <p className="mt-2">
        This project seeks to make that history visible again.
      </p>
    </>
  }
  image="/images/banner-2.jpg"

/>




<ContentSection
  title="Looking Ahead"
  description={
    <>
      <p className="mt-2">
        The Bell Island Battle of the Atlantic Expedition 2027 is not a single
        survey, but the foundation of a long-term effort to document,
        understand, and interpret Canada’s wartime heritage in its full
        geographic context, from the seabed to the coastal and terrestrial
        landscape.
      </p>

      <p className="mt-2">
        Through the integration of archaeology, marine science, and advanced
        imaging technologies, the project will transform a largely unseen
        battlefield into a fully accessible and enduring digital record, while
        supporting ongoing research, education, and public engagement.
      </p>

      <p className="mt-2">
        Building on the approaches developed during NOAA’s Battle of the
        Atlantic Expedition 2016 and the HMCS Canada Expedition 2025, the Bell
        Island Expedition 2027 extends this model to a larger and more complex
        environment, linking science, history, and commemoration within the
        broader North Atlantic context.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>




<ContentSection
  title="Technology and Methodology"
  description={
    <>
        <h3 className="mt-2 heading">What is Photogrammetry?</h3>

      <p className="mt-2">
        Photogrammetry is a technique that uses large numbers of overlapping
        photographs to extract precise measurements and generate detailed
        three-dimensional models of objects or environments. While traditionally
        used in aerial surveying, architecture, and engineering, advances in
        digital imaging and computing have made photogrammetry an essential tool
        in archaeology—particularly for documenting underwater sites.
      </p>

      <p className="mt-2">
        In marine archaeology, photogrammetry enables the non-invasive recording
        of submerged cultural heritage, including shipwrecks and associated
        structures. By creating accurate digital replicas, researchers can
        analyze structural details, monitor changes over time, and share results
        widely without disturbing fragile underwater environments.
      </p>

      <p className="mt-2">
        Underwater photogrammetry is conducted using waterproof cameras and
        high-intensity lighting systems. Divers or remotely operated vehicles
        capture hundreds or thousands of overlapping images from multiple
        angles. Specialized software then identifies common reference points and
        reconstructs the site in three-dimensional space, producing a
        high-resolution digital model.
      </p>

      <p className="mt-2">
        These models allow archaeologists, marine scientists, and the public to
        explore underwater heritage sites virtually. They can be examined
        on-screen, rendered as physical models, or integrated into immersive
        virtual environments, significantly expanding access to sites that are
        otherwise difficult or impossible to visit.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
/>

<ContentSection
  title="Application to the Bell Island Expedition 2027"
  description={
    <>
      <p className="mt-2">
        The Bell Island Expedition will apply photogrammetry at a significantly
        larger scale than previous work. All four wrecks will be documented
        using a combination of diver-based imaging and remotely operated vehicle
        (ROV) systems, integrated with acoustic positioning and geospatial data
        to support the creation of a unified Digital Terrain Model (DTM).
      </p>

      <p className="mt-2">
        In a comparative study, one wreck—PLM-27—will be surveyed using both
        diver-based photogrammetry and ROV-based imaging systems. This dual
        approach will allow direct comparison between human-operated and
        remotely operated survey methods in cold-water North Atlantic
        conditions, contributing to the refinement of best practices in
        underwater documentation.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>



<CenterImageSection
  className="bg-[var(--primary-color)] text-white"
  image=""
  imageAlt="Survey technology"

  left={{
    title: "VOYIS Imaging and Survey Technology",
    description: (
      <>
        <p>
          A central component of the expedition is the use of advanced
          underwater imaging systems developed by VOYIS, a Canadian firm
          specializing in subsea optical and survey technologies.
        </p>

        <p className="mt-4">
          VOYIS systems integrate high-resolution imaging with precise spatial
          referencing, enabling efficient and repeatable documentation of
          complex underwater environments. These systems are designed for
          deployment on remotely operated platforms and are well suited to
          large-scale survey operations such as those planned for Bell Island.
        </p>

        <p className="mt-4">
          VOYIS systems have been deployed in offshore energy, marine research,
          and defence applications, providing a proven platform for
          high-resolution subsea mapping in challenging environments.
        </p>

        <p className="mt-4">
          VOYIS imaging software—developed under the company’s earlier name,
          2G Robotics—was used to support photogrammetric documentation of the
          German submarine U-576 and the freighter Bluefields during NOAA’s
          Battle of the Atlantic Expedition 2016.
        </p>
      </>
    )
  }}

  right={{
    title: "Memorial University’s Marine Institute",
    description: (
      <>
        <p>
          The expedition is conducted in partnership with the Memorial
          University of Newfoundland Marine Institute, which provides vessel
          support, remotely operated vehicle (ROV) systems, USBL positioning,
          and technical personnel.
        </p>

        <p className="mt-4">
          These capabilities enable integrated subsea survey operations and
          support the acquisition of high-resolution geospatial data required
          for the project’s Digital Terrain Model.
        </p>

        <p className="mt-4">
          The Marine Institute will also provide a licensed drone operator to
          acquire aerial imagery of the Bell Island landscape, which will be
          integrated with subsea and terrestrial datasets to produce a unified
          Digital Terrain Model.
        </p>

        <p className="mt-4">
          This combination of vessel-based operations, aerial survey, and
          geospatial integration reflects the Institute’s role as a leading
          centre for applied ocean technology.
        </p>

        <p className="mt-4">
          The Marine Institute also contributes an academic and educational
          dimension to the expedition, with students participating directly in
          field operations and survey workflows. This integration of research,
          training, and applied technology reflects the Institute’s mandate and provides hands-on
experience in real-world marine environments.
        </p>
      </>
    )
  }}
/>


<ContentSection
  title="Experience from the HMCS Canada Expedition"
  description={
    <>
      <p className="mt-2">
        On the HMCS Canada Expedition 2025, photogrammetry served both
        archaeological and ecological purposes. The expedition produced a
        complete three-dimensional model of the wreck while also supporting
        ecological assessments, including habitat mapping and species
        monitoring.
      </p>

      <p className="mt-2">
        This integrated approach—combining marine archaeology with marine
        biology and environmental observation—forms the methodological
        foundation for the Bell Island Expedition and will be extended to a
        larger and more complex battlefield environment.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
/>


<ContentSection
  title="Technology Developed for the Expedition: Photogrammetry Dive Sled"
  description={
    <>
      <p className="mt-2">
        To address the challenges of deep-water photogrammetry at approximately
        70 metres (235 feet), the HMCS Canada team developed a custom diver
        propulsion vehicle (DPV)-mounted imaging platform.
      </p>

      <p className="mt-2">
        The system consists of a lightweight frame with integrated buoyancy
        control, high-output underwater lighting, and dual camera systems
        mounted to ensure consistent image overlap.
      </p>

      <p className="mt-2">
        Attached to a diver propulsion vehicle, the platform provides stability
        and control during imaging, allowing large areas to be surveyed
        efficiently under limited bottom time conditions.
      </p>

      <p className="mt-2">
        Field testing demonstrated that the system maintained stability at
        depth, produced high-quality overlapping imagery, and enabled reliable
        three-dimensional reconstruction of complex structures.
      </p>

      <p className="mt-2">
        The platform also allowed imaging to be conducted at speeds
        significantly greater than conventional fin-based survey methods,
        improving overall efficiency.
      </p>

      <p className="mt-2">
        This technology will be deployed and further refined during the Bell
        Island Expedition, where environmental conditions—depth, temperature,
        and currents—are comparable to those encountered during its development
        off Vancouver Island and its operational use on the HMCS Canada
        Expedition 2025.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>

{/* --------------------------------------------  Section 8 -------------------------------------------- */}


<CTASection
  title="Support the Bell Island Expedition 2027"
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