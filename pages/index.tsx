import type { NextPage } from "next";
import { fetchAPI } from "../api/api";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Heading } from "../components/typograpghy/Heading";
import { SubHeading } from "../components/typograpghy/SubHeading";
import { Section } from "../components/sections/Section";
import { CarouselHero } from "../components/elements/CarouselHero/CarouselHero";
import { ActionCards } from "../components/elements/ActionCard/ActionCards";
import { AnimalCard } from "../components/elements/AnimalCard/AnimalCard";
import { styled } from "../stitches.config";
import { Donations } from "../components/elements/Donations/Donations";
import { Features } from "../components/elements/Features/Features";
import { Card, Collapse, Text } from "@nextui-org/react";
import CountUp from "react-countup";

interface HomeProps {
  psi: any;
  macke: any;
  onama: any;
  akcije: any;
  naslovniSlajdovi: any;
}

const ParsePsi = (psi: any[]): any[] => {
  const parsedPsi = psi.map((pas) => {
    return [
      {
        ime: pas.attributes.ime,
        slika: pas.attributes.slika,
        slug: pas.attributes.slug,
        path: "psi",
      },
    ];
  });
  const ret = parsedPsi.flat();
  return ret;
};

const ParseMacke = (macke: any[]): any[] => {
  const parsedMacke = macke.map((macka) => {
    return [
      {
        ime: macka.attributes.ime,
        slika: macka.attributes.slika,
        slug: macka.attributes.slug,
        path: "macke",
      },
    ];
  });
  const ret = parsedMacke.flat();
  return ret;
};

const Home: NextPage<HomeProps> = ({
  akcije,
  naslovniSlajdovi,
  psi,
  macke,
  onama,
}: HomeProps) => {
  return (
    <>
      <Section sectionColor="pink" noPadding={true}>
        <CarouselHero naslovniSlajdovi={naslovniSlajdovi} />
      </Section>

      <Section
        sectionColor="white"
        style={{
          padding: "0 4rem",
          width: "auto",
          margin: "2.25rem 0",
        }}
      >
        <Heading heading="h2" variant="pink" style={{ mb: "2rem" }}>
          Kako mozete pomoci?
        </Heading>
        <SubHeading
          heading={"h3"}
          variant={"black"}
          style={{ marginBottom: "2rem" }}
        >
          In ad deserunt sit ut. Do duis voluptate ea cillum. Duis irure dolor
          excepteur anim magna mollit. Tempor non magna qui nostrud elit mollit
        </SubHeading>
        <ActionCards akcije={akcije} />
      </Section>

      <Section sectionColor={"pink"}>
        <Heading heading="h2" variant="white" style={{ mb: "2rem" }}>
          {psi.naslov}
        </Heading>
        <SubHeading
          heading={"h3"}
          variant={"black"}
          style={{ marginBottom: "2.25rem" }}
        >
          {psi.tekst}
        </SubHeading>
        <AnimalCardGroup>
          {ParsePsi(psi.pas.data).map((pas, idx) => (
            <AnimalCard
              key={idx}
              ime={pas.ime}
              slika={pas.slika}
              slug={pas.slug}
              path={"psi"}
            />
          ))}
        </AnimalCardGroup>
      </Section>
    </>
  );
};

const AnimalCardGroup = styled("div", {
  width: "70%",
  display: "grid",
  gridGap: "$8",
  gridTemplateColumns: "1fr",
  marginBottom: "$12",
  "@bp2": {
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "50%",
  },
});
export async function getStaticProps() {
  const APIRes = await fetchAPI("/o-nama", {
    populate: {
      slike: "*",
      naslovniSlajdovi: {
        populate: "*",
      },
      akcije: {
        populate: "*",
      },
      psi: {
        populate: {
          pas: {
            populate: "*",
          },
        },
      },
      macke: {
        populate: {
          macka: {
            populate: "*",
          },
        },
      },
    },
  });
  return {
    props: {
      naslovniSlajdovi: APIRes.data.attributes.naslovniSlajdovi,
      psi: APIRes.data.attributes.psi,
      macke: APIRes.data.attributes.macke,
      akcije: APIRes.data.attributes.akcije,
    },
    revalidate: 60,
  };
}

export default Home;
