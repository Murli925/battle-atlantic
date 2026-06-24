import Image from "next/image";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import InnerBanner from "@/components/sections/Inner-banner";
import CheckList from "@/components/CheckList";
import CarouselSection from "@/components/CarouselSection";
import LogoGallery from "@/components/Logogallery";
import FullWidthContent from "@/components/sections/FullWidthContent";
import type { Metadata } from "next";
import Gallery from "@/components/GallerySection";



const siteUrl = "https://battleoftheatlanticmemorial.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sponsors and Partners | Bell Island Expedition",
  description:
    "Discover the organizations, institutions, and partners supporting the Bell Island Expedition through funding, expertise, research collaboration, and in-kind contributions.",
  keywords: [
    "Bell Island sponsors",
    "Battle of the Atlantic partners",
    "Bell Island Expedition supporters",
    "historical preservation partners",
    "underwater archaeology sponsors",
    "marine research collaboration",
    "WWII memorial supporters",
    "virtual memorial project partners",
    "Canadian naval heritage",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/sponsors" },
  openGraph: {
    title: "Sponsors and Partners | Bell Island Expedition",
    description:
      "Explore the organizations and collaborators supporting the Battle of the Atlantic Virtual Memorial and Bell Island Expedition project.",
    url: `${siteUrl}/sponsors`,
    siteName: "Battle of the Atlantic Memorial",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sponsors and Partners - Bell Island Expedition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsors and Partners | Bell Island Expedition",
    description:
      "Meet the organizations and partners supporting the Bell Island Expedition and virtual memorial initiative.",
    images: ["/og-image.jpg"],
  },
};

  export default function Sponsors() {
  return (
    <>
      <InnerBanner
        subtitle="Project Partners and Sponsors"
        title="Building a Virtual Memorial Through Science, Technology and Collaboration"
        caption="The Bell Island Battle of the Atlantic Expedition is supported through a combination of institutional grants, private sponsorship, technical collaboration, and significant in-kind contributions from academic, industry, and expedition partners."
        image="/images/MI-MUN-Support.jpg"
        className="object-position-top"
        imageAlt="Bell Island Expedition Team"
      />

      <ContentSection
        title="Institutional Partners ($5,000 and above)"
        description={
          <>
            <CheckList
              items={[
                {
                  text: <>Royal Canadian Geographical Society — Major Grant</>,
                },
                {
                  text: <>History & Heroes Alberta Foundation — Major Sponsor</>,
                },
              ]}
            />

            <LogoGallery className="w-140"

              groups={[

                {
                  title: "",
                  description:
                    "",
                  items: [
                    { image: "/images/RCGS-logo.jpg" },
                    { image: "/images/History-of-hero-logo.jpg" },
                  ],
                },
              ]}
            />
            
            <h3 className="heading mt-3 mb-2">Expedition Sponsors</h3>
            <h4 className="heading mt-3 mb-2">Lead Sponsors ($5,000 and above)</h4>

            <CheckList
              items={[
                { text: <>Joseph & Diane Frey </> },
                { text: <>John Geiger</> },
              ]}
            />
            <h4 className="heading mt-3 mb-2">Supporting Sponsors ($1,000–$4,999)</h4>

            <CheckList
              items={[
                { text: <>Peter & Carmen Griffis</> }
              ]}
            />
          </>
        }
      />

      <CarouselSection
        title="Major In-Kind Contributions"
        bodytext="In-kind contributions include vessel support, marine survey capability, imaging systems, and field operations, expedition dive equipment, photogrammetry technology, all significantly extending the scope and effectiveness of the expedition.To date these contributions in kind amount to approximately 45% of the expedition’s total costs."
        items={[
          {
            image: "/images/marine-institute.jpg",
            link: "#",
            alt: "marine institute",
          },
          {
            image: "/images/memorial-university.jpg",
            link: "#",
            alt: "memorial university",
          },
          {
            image: "/images/voyis.jpg",
            link: "#",
            alt: "voyis",
          },
          {
            image: "/images/hmcs-canada.jpg",
            link: "#",
            alt: "hmcs canada",
          },
        ]}
        className="bg-[var(--secondary-bg-color)]"
      />

      <ContentSection
        title="Expedition Recognition"
        description={
          <>
            <p className="my-2">
              The expedition has received recognition and support from leading
              geographical and exploration organizations dedicated to science,
              heritage, education, and public engagement.
            </p>
            <LogoGallery
              // className="bg-[var(--secondary-bg-color)]"
              groups={[
                {
                  title: "",
                  items: [{ image: "/images/RCGS-logo.jpg" }, { image: "/images/Combine-TEC-logo.jpg" }],
                },
                {
                  title: "Media and Outreach Partners",
                  description:
                    "Media partnerships help communicate the history, science, and heritage significance of the expedition to Canadian and international audiences.",
                  items: [
                    { image: "/images/Can Geo logo.jpg" },
                    { image: "/images/MUN-logo.png" },
                  ],
                },
              ]}
            />
          </>
        }
        image="/images/flag-expediation.jpg"
        buttonText="Support Us"
        buttonLink="https://secure.qgiv.com/for/bellislandexpedition/"
        buttonVariant="primary"
        buttonTarget="_blank"
      />

      <FullWidthContent
        className="bg-[var(--primary-color)]"
        blocks={[
          {
            blockClassName: "bg-[var(--background-color)] p-5",
            title: "Museum and Heritage Collaborations",
            // image: "/images/the_crow_logo.jpg",
            description: (
              <>
                <p>
                  Museum and heritage collaborations support public
                  interpretation, remembrance, and long-term educational
                  engagement related to Canada’s naval and maritime history.
                </p>
                <p>In alphabetical order:</p>
                <h3 className="heading mt-2">Newfoundland and Labrador</h3>

                <LogoGallery
                  groups={[
                    {
                      title: "",
                      items: [
                        {
                          image: "/images/the_crow_logo.jpg",
                          link: "https://crowsnestnl.ca/",
                        },
                      ],
                    },
                  ]}
                />

                <Gallery
                  items={[
                    {
                      src: "/images/Crow's-Nest-1945.jpg",
                      alt: "Crow's Nest 1945",
                    },
                    {
                      src: "/images/Crows-Nest-St.-John's-harbour.jpg",
                      alt: "Crows Nest St. John's harbour",
                    },
                  ]}
                />

                <div className="relative w-full aspect-video mt-3 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/lGaeLtTAADc"
                    title="YouTube video player"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="heading mt-6 mb-2">The Rooms</h3>
                <LogoGallery
                  groups={[
                    {
                      title: "",
                      items: [
                        {
                          image: "/images/the-rooms-logo.jpg",
                          link: "https://therooms.ca/",
                        },
                      ],
                    },
                  ]}
                />
                <Gallery
                  items={[
                    {
                      src: "/images/Warships-in-St.-John's-harbour.jpg",
                      alt: "Warships in St. John's harbour",
                    },
                    {
                      src: "/images/Coastal-antiarcraft-guns-NL.jpg",
                      alt: "Coastal anti-aircraft guns NL",
                    },
                  ]}
                />

                <h3 className="heading mt-6 mb-2">Nova Scotia</h3>

                <LogoGallery
                  groups={[
                    {
                      title: "",
                      items: [
                        {
                          image: "/images/Canadian-Naval-Memorial-Trust.jpg",
                          link: "https://www.cnmt.ca/",
                        },
                      ],
                    },
                  ]}
                />
                <div className="relative w-full aspect-video mt-3 overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/NBvpJvjzJt4?si=ZqCn1y8dnIeLv2qk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>

                <Gallery
                  items={[
                    {
                      src: "/images/HMCS-Sackville-museum.jpg",
                      alt: "HMCS Sackville museum",
                    },
                    {
                      src: "/images/Painting-of-HMCS-Sackville.jpg",
                      alt: "Painting of HMCS Sackville",
                    },
                  ]}
                />

                <LogoGallery
                  groups={[
                    {
                      title: "",
                      items: [
                        {
                          image: "/images/MMA-logo.jpg",
                          link: "https://maritimemuseum.novascotia.ca/",
                        },
                      ],
                    },
                  ]}
                />

                <Gallery
                  items={[
                    {
                      src: "/images/War-Saving-Stamps.jpg",
                      alt: "War Saving Stamps",
                    },
                    {
                      src: "/images/Convoy-forming-in-Bedford-Basin.jpg",
                      alt: "Convoy forming in Bedford Basin",
                    },
                  ]}
                />

                <LogoGallery
                  groups={[
                    {
                      title: "",
                      items: [
                        {
                          image:
                            "/images/13.-Shearwater-Aviation-Museum-SAM-logo.jpg",
                          link: "https://shearwateraviationmuseum.ca/",
                        },
                      ],
                    },
                  ]}
                />

                <Gallery
                  items={[
                    {
                      src: "/images/13a.-RCAF-sub-killers.jpg",
                      alt: "RCAF Submarine Killers",
                    },
                    {
                      src: "/images/13b.-Eastern-Air-Command.jpg",
                      alt: "Eastern Air Command",
                    },
                  ]}
                />

                <h3 className="heading mt-6 mb-2">Underwater Photography</h3>
                <p>
                  Jill Heinerth, FRCGS, Honorary Vice-President, Royal Canadian
                  Geographical Society
                </p>
              </>
            ),
          },
        ]}
      />

      <CTASection
        title="Support the Virtual Memorial"
        description=""
        backgroundImage="/images/cta-banner-new.jpg"
        buttons={[
          {
            text: "Support the Expedition",
            link: "https://secure.qgiv.com/for/bellislandexpedition/",
            variant: "primary",
            buttonTarget: "_blank",
          },
          {
            text: "Contact Us About Partnership Opportunities",
            link: "/contact-us",
            variant: "accent",
            buttonTarget: "/sponsors",
          },
        ]}
      />
    </>
  );
}
