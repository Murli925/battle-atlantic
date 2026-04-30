import ContentSection from "@/components/sections/ContentSection"
import CheckList from "@/components/CheckList"
import CenterImageSection from "@/components/sections/CenterImageSection"
import CTASection from "@/components/sections/CTASection"
import InnerBanner from "@/components/sections/Inner-banner"

export default function Donations() {


  return (
    <>

          <InnerBanner
          subtitle="Support the Expedition"
        title="Battle of the Atlantic Memorial — Bell Island and the North Atlantic War"
        image="/images/BlastHole-Strathcona.jpg"
        imageAlt="Bell Island Harbour"
      />
{/* --------------------------------------------  Section 1 -------------------------------------------- */}
{/* --------------------------------------------  Section 2 -------------------------------------------- */}
<ContentSection
  title="Support the Expedition"
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

      <p className="mt-2 font-semibold">
        Support the Expedition
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  buttonText="Donate Now"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="primary"
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




<ContentSection
  title="What Your Support Enables"
  description={
    <>
      <p className="mt-2 mb-2">
        Contributions directly support:
      </p>

      <CheckList
        items={[
          { text: <>vessel operations in Conception Bay</> },
          { text: <>underwater imaging and survey technology</> },
          { text: <>high-resolution data acquisition of the wrecks and surrounding landscape</> },
          { text: <>aerial and terrestrial mapping of shoreline and infrastructure</> },
          { text: <>expedition logistics and field operations</> },
          { text: <>student training and academic participation</> },
          { text: <>development of the Bell Island Virtual Memorial platform</> },
          { text: <>public education, outreach and heritage tourism</> }
        ]}
      />
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>



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
          { text: <>environmental conditions and marine life associated with the wrecks</> },
          { text: <>structural condition and integrity of each vessel</> },
          { text: <>site formation processes and long-term preservation trends</> }
        ]}
      />

      <p className="mt-2">
        This baseline will provide a reference point for future scientific and
        archaeological study, allowing researchers to track environmental
        change and assess the rate and nature of site deterioration over time.
      </p>

      <p className="mt-2">
        Without this documentation, both the ecological context and the
        physical condition of the wrecks will continue to change without a
        comprehensive record of their current state.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
/>


{/* --------------------------------------------  Section 5 -------------------------------------------- */}
<ContentSection
  title="Expedition Collaboration and Expertise"
  description={
    <>
      <p className="mt-2 mb-2">
        The expedition is carried out through a coordinated partnership
        combining academic, technical, and expeditionary expertise:
      </p>

      <CheckList
        items={[
          {
            text: (
              <>
                <strong>Marine Institute, Memorial University of Newfoundland (MI–MUN):</strong> vessels, operations, and research integration
              </>
            )
          },
          {
            text: (
              <>
                <strong>VOYIS Imaging:</strong> underwater imaging systems and data processing
              </>
            )
          },
          {
            text: (
              <>
                <strong>Royal Canadian Geographical Society (RCGS):</strong> expedition governance, funding administration, and national outreach
              </>
            )
          },
          {
            text: (
              <>
                <strong>Shipwreck Preservation Society of Newfoundland and Labrador (SPSNL):</strong> heritage stewardship and provincial coordination
              </>
            )
          },
          {
            text: (
              <>
                <strong>HMCS Canada Expedition Dive Team:</strong> advanced underwater documentation and field operations
              </>
            )
          }
        ]}
      />

      <p className="mt-2">
        The expedition has been awarded a Major Grant by the Royal Canadian
        Geographical Society and operates under its established governance and
        financial oversight framework.
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
/>
{/* --------------------------------------------  Section 8 -------------------------------------------- */}


<ContentSection
  title="How to Support the Project"
  description={
    <>
      <p className="mt-2">
        Donations may be made through the Royal Canadian Geographical
        Society’s secure expedition funding portal:
      </p>

      <p className="mt-2 font-semibold">
        <a href="https://secure.qgiv.com/for/bellislandexpedition/" className="text-primary">https://secure.qgiv.com/for/bellislandexpedition/</a>
      </p>

      <p className="mt-2">
        All contributions are administered through the Society’s official
        expedition program and are eligible for Canadian charitable tax
        receipting.
      </p>

      <p className="mt-2">
        Organizations and individuals interested in partnership or sponsorship
        opportunities are invited to contact the expedition directly.
      </p>

      <h3 className="mt-4 heading">
        Contact the Expedition
      </h3>


        <h4 className="heading"><b>Joseph Frey</b></h4>
        <p className="mt-2">
        Expedition Lead and Project Director
        <br />
        Battle of the Atlantic Virtual Memorial — Bell Island and the North
        Atlantic War
        <br />
        Email: bellislandexpedition@gmail.com
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  buttonText="Donate Now"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="primary"
/>


<ContentSection
  title="A Project of National and International Significance"
  description={
    <>
      <p className="mt-2">
        The Bell Island Expedition will create a permanent digital record of
        one of the most intact naval battlefields of the Second World War.
      </p>

      <p className="mt-2">
        By integrating archaeology, marine science, and historical research,
        the project will preserve a site that would otherwise remain largely
        unseen and difficult to interpret.
      </p>

      <p className="mt-2 mb-2">
        Support for the expedition contributes directly to:
      </p>

      <CheckList
        items={[
          { text: <>preservation of a nationally significant wartime site</> },
          { text: <>advancement of interdisciplinary research</> },
          { text: <>development of innovative digital heritage tools</> },
          { text: <>public understanding of the Battle of the Atlantic</> },
          { text: <>commemoration of those who served and died at sea</> }
        ]}
      />

      <p className="mt-2">
        Without this work, much of this history will remain out of sight—and,
        over time, may be lost to both environmental change and structural
        deterioration.
      </p>

      <p className="mt-2 font-semibold">
        Support the Expedition
      </p>
    </>
  }
  image="/images/banner-2.jpg"
  reverse
  className="bg-[var(--secondary-bg-color)]"
  buttonText="Donate Now"
  buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
  buttonVariant="primary"
/>



{/* <CTASection
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
/> */}
</>
  )
}