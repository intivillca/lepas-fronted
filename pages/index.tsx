import type { NextPage } from "next";
import Image from "next/image";
import { fetchAPI } from "../api/api";
import {
  AnimalCard,
  AnimalCardProps,
} from "../components/elements/AnimalCard/AnimalCard";
import { AnimalCardGroup } from "../components/elements/AnimalCardGroup/DogCardGroup";
import { Carousel } from "../components/elements/Carousel/Carousel";
import { CursiveHeading } from "../components/elements/CursiveHeading/CursiveHeading";
import { ItemCard } from "../components/elements/ItemCard/ItemCard";
import { PinkSection } from "../components/sections/PinkSection";
import { PinkWavySection } from "../components/sections/PinkWavySection";
import { SectionWrapper } from "../components/sections/SectionWrapper";
import { TextSection } from "../components/sections/TextSection";
import { WhiteSection } from "../components/sections/WhiteSection";
import { styled } from "../stitches.config";
import { Pas, PasComponent } from "../types/DataTypes";
import { getImageAlt, getImageLink, ImageBase } from "../utils/parseImageLink";

interface HomeProps {
  slike: ImageBase[];
  psi: any;
  macke: any;
  onama: any;
  akcije: any;
}

const ParsePsi = (psi: any[]): AnimalCardProps[] => {
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

const ParseMacke = (macke: any[]): AnimalCardProps[] => {
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
  slike,
  psi,
  macke,
  onama,
  akcije,
}: HomeProps) => {
  console.log(akcije);
  return <></>;
};

const ImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 13 / 16,
  width: "30%",
  maxWidth: "$xl2",
  height: "auto",
  objectFit: "cover",
  border: "10px solid",
  borderColor: "$pink700",
  margin: "60px auto",
  FontFamily: "Montserrat",
  padding: "60px",
  overflow: "hidden",
});

export async function getStaticProps() {
  const APIRes = await fetchAPI("/o-nama", {
    populate: {
      slike: "*",
      onama: {
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
      slike: APIRes.data.attributes.slike.data,
      psi: APIRes.data.attributes.psi,
      macke: APIRes.data.attributes.macke,
      onama: APIRes.data.attributes.onama,
      akcije: APIRes.data.attributes.akcije,
    },
    revalidate: 60,
  };
}

export default Home;
