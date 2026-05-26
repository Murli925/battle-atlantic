import ContentSection from "@/components/sections/ContentSection"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"
import type { Metadata } from "next"
import SupportSection from "@/components/sections/SupportSection"


export const metadata: Metadata = {
  title: "Bell Island Expedition | Donations",
  description:
    "Support the Bell Island Battle of the Atlantic Virtual Memorial expedition.",
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

export default function Donations() {


  return (
    <>

          <InnerBanner
          subtitle="Support the Expedition"
        title="Bell Island Battle of the Atlantic Memorial"
        image="/images/BI-14.jpg"
        imageAlt="Bell Island Harbour"
      />
{/* --------------------------------------------  Section 1 -------------------------------------------- */}
{/* --------------------------------------------  Section 2 -------------------------------------------- */}
<ContentSection
  title="Why This Expedition Matters"
  description={
    <>
      <p className="mt-2">
        The Bell Island Battle of the Atlantic Virtual Memorial Expedition is a
        Canadian-led initiative to document and commemorate one of the most
        significant naval battlefields of the Second World War.
      </p>

      <p className="mt-2">
        This project brings together historical research, underwater
        archaeology, marine sciences, and advanced three-dimensional mapping to
        record the wrecks at Bell Island and interpret them within the wider
        North Atlantic war.
      </p>

      <p className="mt-2">
        It will result in a permanent digital memorial—accessible to Canadians
        and an international audience—that preserves and presents this unique
        wartime landscape.
      </p>

      <p className="mt-2 mb-2 font-semibold">
        Support the Expedition
      </p>
    </>
  }
  image="/images/VOYIS-tethered.jpg"
  buttonText="Donate Now"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="primary"
  buttonTarget="_blank"
/>
{/* --------------------------------------------  Section 3 -------------------------------------------- */}
{/* <ServicesSection/> */}


<CenterImageSection
backgroundImage="/images/banner-2.jpg"
className="bg-[var(--primary-color-70-alpha)] text-white"
  imageAlt="Bell Island Memorial"

  left={{
    title: "Why This Matters",
    description: (
      <>
        <p>
          Unlike land battlefields, the naval war is largely invisible. Ships
          were lost offshore, often without witnesses, and many who died have
          no known grave.
        </p>

        <p className="mt-4">
          Bell Island is one of the few places where this history can still be
          understood in a defined and accessible setting—where wrecks, coastal
          defences, industrial infrastructure, and memorial sites remain linked
          within a single landscape.
        </p>

        <p className="mt-4">
          This project ensures that one of Canada’s most important wartime
          environments is properly documented, preserved, and made accessible
          for future generations.
        </p>
      </>
    )
  }}

  right={{
    title: "Why Now",
    description: (
      <>
        <p>
          Field operations for the Bell Island Expedition are planned for 2027.
        </p>

        <p className="mt-4">
          Securing funding in advance is essential to confirm vessel
          availability, deploy specialized imaging systems, support field
          operations, and enable student participation through Memorial
          University’s Marine Institute.
        </p>

        <p className="mt-4">
          Without this support, the full documentation of the site—and the
          creation of the Virtual Memorial—will not be possible at the intended
          scale.
        </p>
      </>
    )
  }}
/>


<SupportSection/>



{/* <ContentSection
  title="What Your Support Enables"
  description={
    <>
    

      <p className="mt-2 mb-2">
        Contributions directly support:
      </p>

      <CheckList
        items={[
          { text: <>Vessel operations in Conception Bay</> },
          { text: <>Underwater imaging and survey technology</> },
          { text: <>High-resolution data acquisition of the wrecks and surrounding landscape</> },
          { text: <>Aerial and terrestrial mapping of shoreline and infrastructure</> },
          { text: <>Expedition logistics and field operations</> },
          { text: <>Student training and academic participation</> },
          { text: <>Development of the Bell Island Virtual Memorial platform</> },
          { text: <>Public education, outreach and heritage tourism</> }
        ]}
      />
    </>
  }
  image="/images/VOYIS-3.png"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/> */}



{/* --------------------------------------------  Section 4 -------------------------------------------- */}
<ContentSection
  title="Climate and Preservation: Why This Work Is Time-Sensitive"
  description={
    <>
      <p className="mt-2">
        The Bell Island wrecks have been on the seabed for more than eighty
        years. Over that time, they have become part of the marine
        environment—but they are also subject to ongoing deterioration.
      </p>

      <p className="mt-2">
        Changes in ocean conditions, including temperature variation,
        biological activity, and long-term environmental shifts, are affecting
        both the surrounding ecosystem and the physical structure of the wrecks
        themselves.
      </p>

      <p className="mt-2 mb-2">
        The expedition will establish a baseline record of:
      </p>

      <CheckList
        items={[
          { text: <>Environmental conditions and marine life associated with the wrecks</> },
          { text: <>Structural condition and integrity of each vessel</> },
          { text: <>Site formation processes and long-term preservation trends</> }
        ]}
      />

      <p className="mt-2">
        This baseline will support future scientific and archaeological study by allowing researchers to monitor environmental change and assess the long-term deterioration of the wrecks over time.
      </p>

      <p className="mt-2">
        Without comprehensive documentation, both the ecological context and physical condition of the wrecks will continue to change without a permanent scientific record of their current state.
      </p>
    </>
  }
  image="/images/expedition.jpg"
/>


{/* --------------------------------------------  Section 5 -------------------------------------------- */}
<ContentSection
  title="Expedition Collaboration and Expertise"
  description={
    <>
      <p className="mt-2 mb-2">
        The expedition is carried out through a coordinated partnership
        combining academic, scientific, technical, and operational expertise.
      </p>

      <CheckList
        items={[
          {
            text: (
              <>
                <strong>
                  Marine Institute, Memorial University of Newfoundland (MI-MUN):
                </strong>{" "}
                Vessels, field operations, drone imaging, and research integration.
              </>
            )
          },

          {
            text: (
              <>
                <strong>VOYIS Imaging:</strong>{" "}
                Underwater imaging systems, three-dimensional documentation,
                and data processing.
              </>
            )
          },

          {
            text: (
              <>
                <strong>
                  Royal Canadian Geographical Society (RCGS):
                </strong>{" "}
                Expedition governance, funding administration,
                cartographic support, and national outreach.
              </>
            )
          },

          {
            text: (
              <>
                <strong>
                  Shipwreck Preservation Society of Newfoundland and Labrador (SPSNL):
                </strong>{" "}
                Heritage stewardship, provincial coordination,
                and community engagement.
              </>
            )
          },

          {
            text: (
              <>
                <strong>HMCS Canada Expedition Dive Team:</strong>{" "}
                Advanced underwater documentation, technical diving operations,
                and photogrammetric field support.
              </>
            )
          }
        ]}
      />

      <p className="mt-2">
        The expedition has been awarded a Major Grant by the Royal Canadian
        Geographical Society and operates under the Society’s established
        expedition governance and financial oversight framework.
      </p>
    </>
  }
  image="/images/man-exploring.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>
{/* --------------------------------------------  Section 8 -------------------------------------------- */}


<ContentSection
  title="Support the Expedition"
  description={
    <>
      <p className="mt-2">
        Donations may be made through the Royal Canadian Geographical
        Society’s secure expedition funding portal.
      </p>

      <p className="mt-2">
        All contributions are administered through the Society’s official
        expedition program and are eligible for Canadian charitable tax receipting.
      </p>

      <p className="mt-2">
        Support for the expedition helps advance underwater archaeology,
        marine science, digital heritage documentation, public education,
        and long-term preservation of one of Canada’s most significant
        Battle of the Atlantic landscapes.
      </p>

      <p className="mt-2">
        Organizations, foundations, and potential sponsors interested in
        supporting the expedition are invited to contact the project team directly.
      </p>

      <h3 className="mt-4 heading">
        Contact the Expedition
      </h3>

      <h4 className="heading">
        <b>Joseph Frey</b>
      </h4>

      <p className="mt-2 mb-4">
        {/* Expedition Lead and Project Director
        <br />
        Bell Island Battle of the Atlantic Memorial */}
        Email: <a href="mailto:bellislandexpedition@gmail.com" className="text-gray-600 hover:text-blue-500">bellislandexpedition@gmail.com</a>
      </p>
    </>
  }
  image="/images/Cemetery Hill Coastal Artillery.jpg"
  buttonText="Donate Now"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="primary"
  buttonTarget="_blank"
/>


<ContentSection
  title="A Project of National and International Significance"
  description={
    <>
      <p className="mt-2">
        The Bell Island Expedition will create a permanent digital memorial
        and scientific record of one of the most intact naval battlefields
        of the Second World War.
      </p>

      <p className="mt-2">
        By integrating underwater archaeology, marine science, historical
        research, and advanced digital mapping, the project will preserve
        a site that would otherwise remain largely unseen and difficult
        to interpret.
      </p>

      <p className="mt-2 mb-2">
        Support for the expedition contributes directly to:
      </p>

      <CheckList
        items={[
          {
            text: (
              <>
                Preservation of a nationally significant wartime landscape
              </>
            )
          },

          {
            text: (
              <>
                Advancement of interdisciplinary archaeological and marine research
              </>
            )
          },

          {
            text: (
              <>
                Development of innovative digital heritage tools and public interpretation
              </>
            )
          },

          {
            text: (
              <>
                Greater public understanding of the Battle of the Atlantic
              </>
            )
          },

          {
            text: (
              <>
                Commemoration of those who served and died at sea
              </>
            )
          }
        ]}
      />

      <p className="mt-2">
        Without comprehensive documentation, much of this history will
        gradually be lost to environmental change and structural
        deterioration over time.
      </p>
    </>
  }
  image="/images/IMG_7553.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>



<CTASection
  title="Help Preserve the Battle of the Atlantic"
  description={(<>
  <p className=" mb-2 w-full max-w-4xl mx-auto px-5">
   The Bell Island Expedition is creating a permanent digital memorial to one of the most
significant surviving Battle of the Atlantic landscapes in the world.</p>
<p className="mt-2 mb-2 w-full max-w-4xl mx-auto px-5">
Through underwater archaeology, marine science, and advanced three-dimensional
documentation, the project will help preserve this unique wartime environment for future
generations.
  </p>
  </>)}
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