import type { NextPage } from "next";
import { fetchAPI } from "../api/api";
import { AnimalCardProps } from "../components/elements/AnimalCard/AnimalCard";
import { AnimalCardGroup } from "../components/elements/AnimalCardGroup/DogCardGroup";
import { Carousel } from "../components/elements/Carousel/Carousel";
import { CursiveHeading } from "../components/elements/CursiveHeading/CursiveHeading";
import { PinkSection } from "../components/sections/PinkSection";
import { PinkWavySection } from "../components/sections/PinkWavySection";
import { WhiteSection } from "../components/sections/WhiteSection";
import { Pas, PasComponent } from "../types/DataTypes";
import { ImageBase } from "../utils/parseImageLink";

interface HomeProps {
  slike: ImageBase[];
  psi: PasComponent[];
  macke: {}[];
}

const ParsePsi = (psi: PasComponent[]): AnimalCardProps[] => {
  const parsedPsi = psi.map((pas) => {
    return [
      {
        ime: pas.pas.data.attributes.ime,
        slika: pas.pas.data.attributes.slika,
        slug: pas.pas.data.attributes.slug,
        path: "psi",
      },
    ];
  });
  const ret = parsedPsi.flat();
  return ret;
};

const ParseMacke = (macke: any[]): AnimalCardProps[] => {
  const parsedMacke = macke.map((macka) => {
    return [
      {
        ime: macka.macka.data.attributes.ime,
        slika: macka.macka.data.attributes.slika,
        slug: macka.macka.data.attributes.slug,
        path: "macke",
      },
    ];
  });
  const ret = parsedMacke.flat();
  return ret;
};

const Home: NextPage<HomeProps> = ({ slike, psi, macke }: HomeProps) => {
  console.log(macke);
  return (
    <>
      <PinkSection>
        <Carousel slides={slike} />
      </PinkSection>
      <div style={{ marginBottom: "60px" }}></div>
      <PinkSection>
        <CursiveHeading headingColor="pink">Novi PSI</CursiveHeading>
        <AnimalCardGroup animals={ParsePsi(psi)} />
      </PinkSection>
      <WhiteSection>
        <CursiveHeading headingColor="pink">Nove Macke</CursiveHeading>
        <AnimalCardGroup animals={ParseMacke(macke)} />
      </WhiteSection>
    </>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/o-nama", {
    populate: {
      slike: "*",
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
      slike: APIRes.data.attributes.slike.data,
      psi: APIRes.data.attributes.psi,
      macke: APIRes.data.attributes.macke,
    },
    revalidate: 60,
  };
}

export default Home;
