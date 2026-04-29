import ContentSection from "@/components/sections/ContentSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import FullWidthContent from "@/components/sections/FullWidthContent"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"

export default function Virtual_Memorial() {


  return (
    <>
<InnerBanner
subtitle="Virtual Memorial"
  title="Digital Documentation, Mapping, and Interpretation"
  image="/images/banner-team.jpg"
  imageAlt="Bell Island Expedition Project"
/>

<ContentSection
  title="The Project"
  description={
    <>
    <p>The Bell Island Expedition is a Canadian-led field project to document the wrecks sunk during the German submarine attacks of 1942 and to place them within their full historical, archaeological, and environmental context.</p>
<p className="mt-2">The expedition integrates underwater survey, three-dimensional photogrammetry, sonar mapping, aerial and terrestrial imaging, archival research, and marine science to record the wrecks, coastal defence sites, and the surrounding landscape as a single connected wartime battlefield.</p>
<p className="mt-2">The four ships sunk at Bell Island remain among the best-preserved Second World War wreck sites in Canadian waters. Because they lie close to shore and near surviving land-based military and industrial features, they provide a rare opportunity to study the Battle of the Atlantic as a complete landscape, including the naval battlefield, the iron ore mines that formed the target, the coastal artillery batteries, the damaged pier facilities, and the memorial sites that commemorate those who were lost.</p>
<p className="mt-2">Unlike most naval battlefields, Bell Island preserves the full physical context of war&mdash;from seabed wrecks to shoreline defences and inland mining infrastructure&mdash;within a single, coherent and accessible landscape.</p>


    </>
  }
  image="/images/banner-2.jpg"
/>

<ContentSection
  title="The Bell Island Digital Terrain Model (DTM)"
  description={
    <>
      <p className="mt-2">
        The primary objective of the expedition is to create a high-resolution
        Digital Terrain Model (DTM) of the Bell Island battlefield.
      </p>

      <p className="mt-2 mb-2">This model will integrate:</p>

      <CheckList
        items={[
          { text: <>underwater photogrammetry of the wrecks</> },
          { text: <>sonar mapping of the seabed</> },
          { text: <>drone-based aerial imaging</> },
          { text: <>terrestrial laser scanning of land-based features</> }
        ]}
      />

      <p className="mt-2 mb-2">
        The completed DTM will allow users to visualize, in a single
        environment:
      </p>

      <CheckList
        items={[
          { text: <>the wrecks beneath the sea</> },
          { text: <>the shoreline and harbour approaches</> },
          { text: <>coastal artillery positions</> },
          { text: <>inland industrial mining infrastructure</> },
          { text: <>and commemorative sites</> }
        ]}
      />

      <p className="mt-2">
        This unified model transforms Bell Island from a series of individual
        locations into a coherent historical landscape.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>


<ContentSection
  title="Photogrammetry of the Four Wrecks"
  description={
    <>
      <p className="mt-2 mb-2">
        High-resolution photogrammetry will be used to document:
      </p>

      <CheckList
        items={[
          { text: <>Saganaga (British)</> },
          { text: <>Lord Strathcona (Canadian)</> },
          { text: <>Rose Castle (Canadian)</> },
          { text: <>PLM-27 (Free French under British wartime control)</> }
        ]}
      />

      <p className="mt-2 mb-2">
        These models will allow detailed three-dimensional examination of:
      </p>

      <CheckList
        items={[
          { text: <>torpedo damage and blast effects</> },
          { text: <>structural collapse and site formation processes</> },
          { text: <>cargo remains and industrial context</> },
          { text: <>marine growth and ecological colonization</> }
        ]}
      />

      <p className="mt-2">
        They will also establish a biological and ecological baseline,
        supporting future research into environmental change and the long-term
        impacts of climate change in Conception Bay.
      </p>

      <p className="mt-2">
        Because the wrecks lie at different depths and are subject to varying
        currents and visibility conditions, and are widely separated,
        documentation will require multiple dive operations, remotely operated
        vehicles (ROVs), and advanced underwater imaging systems.
      </p>

      <p className="mt-2">
        The result will be a permanent digital record of each site, preserved
        without physical disturbance.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  // buttonText="Learn More"
  // buttonLink="/project"
  // buttonVariant="primary"
/>

<ContentSection
  title="Integration of Land and Sea"
  description={
    <>
      <p className="mt-2">
        Unlike most Battle of the Atlantic sites, Bell Island’s battlefield
        extends directly from seabed to shoreline.
      </p>

      <p className="mt-2 mb-2">
        The expedition will include documentation of:
      </p>

      <CheckList
        items={[
          { text: <>the Cemetery Hill coastal artillery battery</> },
          { text: <>the remains of Scotia Pier</> },
          { text: <>mine entrances and industrial structures</> },
          { text: <>the Lance Cove Seamen’s Cemetery</> },
          { text: <>other surviving wartime locations</> }
        ]}
      />

      <p className="mt-2">
        Drone photography, terrestrial laser scanning, and archival mapping
        will be combined with underwater survey data to produce a fully
        integrated land–sea model of the battlefield.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
  // buttonText="Learn More"
  // buttonLink="/project"
  // buttonVariant="primary"
/>

<ContentSection
  title="Experience from the HMCS Canada Expedition"
  description={
    <>
      <p className="mt-2">
        The Bell Island project builds directly on the methodology developed
        during the HMCS Canada Expedition, which produced a complete
        three-dimensional photogrammetry model of Canada’s first purpose-built
        warship.
      </p>

      <p className="mt-2">
        That expedition demonstrated how modern imaging technology can be used
        to document historic shipwrecks in a way that allows them to be studied
        and interpreted without disturbing the site.
      </p>

      <p className="mt-2">
        Examples of this work can be seen on the HMCS Canada Expedition
        Projects page:
      </p>

      <p className="mt-2">
        <a
          href="https://www.hmcscanadaexpedition.org/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          www.hmcscanadaexpedition.org/projects
        </a>
      </p>

      <p className="mt-2">
        The Bell Island Expedition applies these same techniques on a larger
        scale, extending from a single wreck site to an entire battlefield
        landscape.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  buttonText="View Projects"
  buttonLink="https://www.hmcscanadaexpedition.org/projects"
  buttonVariant="primary"
/>


<CenterImageSection
backgroundImage="/images/banner-2.jpg"
className="bg-[var(--primary-color-70-alpha)] text-white"
  left={{
    title: "Experience from the HMCS Canada Expedition",
    description: (
      <>
      <p className="mt-2">
        The Bell Island project builds directly on the methodology developed
        during the HMCS Canada Expedition, which produced a complete
        three-dimensional photogrammetry model of Canada’s first purpose-built
        warship.
      </p>

      <p className="mt-2">
        That expedition demonstrated how modern imaging technology can be used
        to document historic shipwrecks in a way that allows them to be studied
        and interpreted without disturbing the site.
      </p>

      <p className="mt-2">
        Examples of this work can be seen on the HMCS Canada Expedition
        Projects page:
      </p>

      <p className="mt-2">
        <a
          href="https://www.hmcscanadaexpedition.org/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-normal"
        >
          www.hmcscanadaexpedition.org/projects
        </a>
      </p>

      <p className="mt-2">
        The Bell Island Expedition applies these same techniques on a larger
        scale, extending from a single wreck site to an entire battlefield
        landscape.
      </p>
    </>
    )
  }}
  image="/images/banner-2.jpg"
  imageAlt="Bell Island shipwreck battlefield"

  right={{
    title: "Experience from the 2016 NOAA Battle of the Atlantic Expedition",
    description: (
      <>
        <p>Members of the expedition team, including Joseph Frey and imaging specialists from VOYIS (then operating as 2G Robotics), also participated in the 2016 NOAA Battle of the Atlantic Expedition.</p>
<p className="mt-2">That expedition demonstrated the value of combining historical research, sonar mapping, and high-resolution imaging to document underwater battlefields.</p>
<p className="mt-2">The experience gained during that work helped shape the approach being applied at Bell Island.</p>
      </>
    )
  }}
/>

<ContentSection
  title="The Bell Island Battle of the Atlantic Virtual Memorial"
  description={
    <>
      <p className="mt-2">
        The Bell Island 2027 project is intended as the foundation for a larger
        digital documentation program that will develop into a comprehensive
        Battle of the Atlantic Virtual Memorial.
      </p>

      <p className="mt-2">
        Information collected during the 2027 expedition—including
        photogrammetry, sonar data, aerial imagery, and historical research—
        will be combined to create a detailed interactive representation of the
        Bell Island battlefield.
      </p>

      <p className="mt-2">
        This platform will allow users to explore the site visually and to
        understand how the events of 1942 unfolded within the wider system of
        convoy routes, industrial infrastructure, and coastal defences.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>


<ContentSection
  title="Development of the Memorial Website"
  description={
    <>
      <p className="mt-2">
        Over the coming years, the Bell Island website will expand as
        additional material is added.
      </p>

      <p className="mt-2 mb-2">
        Future development may include:
      </p>

      <CheckList
        items={[
          { text: <>interactive maps of North Atlantic convoy routes</> },
          { text: <>three-dimensional models of additional wrecks</> },
          { text: <>historical photographs and archival documents</> },
          { text: <>cartographic reconstructions of wartime bases and infrastructure</> },
          { text: <>educational material for students and researchers</> }
        ]}
      />

      <p className="mt-2">
        As the project grows, the site will evolve from an expedition platform
        into a permanent Battle of the Atlantic Memorial and research resource,
        linking Bell Island to other sites across Newfoundland, Canada, and the
        wider Atlantic world for heritage-based tourism, scholarly research,
        and international commemoration.
      </p>

      <p className="mt-2"><strong>
        Future phases of the website will expand this foundation to include a
        comprehensive interpretation of the North Atlantic system and the
        global naval war. These sections will examine convoy routes, naval bases, air
        operations, and submarine campaigns across the Atlantic and beyond,
        placing Bell Island within the full operational and strategic framework
        of the Second World War.</strong>
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  className="bg-[var(--secondary-bg-color)]"
  // buttonText="Explore the Memorial"
  // buttonLink="/project"
  // buttonVariant="primary"
/>


<FullWidthContent
  className="bg-[var(--primary-color)]"
  blocks={[

    {
      blockClassName: "bg-[var(--background-color)] p-5",
      title: "A Long-Term Documentation Project",
      description: (
        <>
          <p className="mt-2">
            The Bell Island Expedition 2027 represents the first stage of a
            multi-year project to document and preserve one of the most
            important integrated naval battlefields of the Second World War,
            forming the foundation for a significantly expanded second phase of
            this website.
          </p>

          <p className="mt-2">
            By combining history, maritime archaeology, marine science, and
            advanced imaging technology, the project will create a lasting
            digital record that remains accessible to researchers, students,
            and the public.
          </p>

          <p className="mt-2">
            As this work continues, Bell Island will serve as the foundation
            for a broader interpretive framework connecting Canada and the North
            Atlantic to the global history of the Battle of the Atlantic.
          </p>
        </>
      )
    }
  ]}
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