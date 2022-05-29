import type { NextPage } from "next";
import Image from "next/image";
import CountUp from "react-countup";
import { fetchAPI } from "../api/api";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { AnimalCard } from "../components/elements/ActionCard/AnimalCard";
import { BlogCard } from "../components/elements/BlogCard/BlogCard";
import { BlogCardGroup } from "../components/elements/BlogCard/BlogCardGroup";
import { PinkSection } from "../components/sections/PinkSection";
import { PinkWavySection } from "../components/sections/PinkWavySection";
import { SectionWrapper } from "../components/sections/SectionWrapper";
import { TextSection } from "../components/sections/TextSection";
import { WhiteSection } from "../components/sections/WhiteSection";
import { styled } from "../stitches.config";
import { Pas, PasComponent } from "../types/DataTypes";
import { getImageAlt, getImageLink, ImageBase } from "../utils/parseImageLink";

interface HomeProps {
  psi: any;
  macke: any;
  onama: any;
  akcije: any;
  naslovniSlajdovi: any;
}

const ParsePsi = (psi: any[]) => {
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

const ParseMacke = (macke: any[]) => {
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
  psi,
  macke,
  onama,
  akcije,
  naslovniSlajdovi,
}: HomeProps) => {
  console.log(naslovniSlajdovi);
  return (
    <>
      <Carousel autoPlay infiniteLoop showStatus={false} interval={5000}>
        {naslovniSlajdovi.map((slide: any) => (
          <HeroWrapper key={slide.id}>
            <Hero>
              <HeroTitle>{slide.naslov}</HeroTitle>
              <p> {slide.text}</p>
            </Hero>
            <ImageContainer>
              <Image
                objectFit="cover"
                layout="fill"
                alt={getImageAlt({ media: slide.slika })}
                src={getImageLink({ media: slide.slika })}
              />
            </ImageContainer>
          </HeroWrapper>
        ))}
      </Carousel>
      <WhiteSection>
        <SectionTitle>Kako mozete pomoci?</SectionTitle>
        <SectionSubtitle></SectionSubtitle>
        {akcije.map((akcija: any) => (
          <>
            <HeroWrapper>
              <>{akcija.naslov}</>
              <>{akcija.opis}</>
            </HeroWrapper>
          </>
        ))}
      </WhiteSection>
    </>
  );
};

const SectionTitle = styled("h1", {
  color: "$pink700",
  fontFamily: "'Pacifico', cursive",
  fontSize: "$xl5",
  mb: "20px",
});

const SectionSubtitle = styled("h2", {
  color: "$black",
  fontFamily: "'Baloo Tamma 2', cursive",
  fontSize: "$xl3",
  mb: "16px",
});

const HeroTitle = styled("h1", {
  color: "White",
  fontFamily: "'Pacifico', cursive",
  fontSize: "$xl5",
  mb: "20px",
});

const ImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 16 / 9,
  width: "$full",
  height: "auto",
  FontFamily: "Montserrat",
  padding: "60px",
  overflow: "hidden",
});

const Hero = styled("div", {
  backgroundColor: "$pink700",
  margin: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage:
    "url(http://demo.mage-themes.com/template/paws/paws/images/paw_pattern.png)",
});

const HeroWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  "@bp2": { gridTemplateColumns: "1fr 1fr" },
  justifyContent: "stretch",
  gridAutoRows: "1fr",
});
export async function getStaticProps() {
  const APIRes = await fetchAPI("/o-nama", {
    populate: {
      slike: "*",
      naslovniSlajdovi: {
        populate: "*",
      },
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
      naslovniSlajdovi: APIRes.data.attributes.naslovniSlajdovi,
      psi: APIRes.data.attributes.psi,
      macke: APIRes.data.attributes.macke,
      onama: APIRes.data.attributes.onama,
      akcije: APIRes.data.attributes.akcije,
    },
    revalidate: 60,
  };
}

export default Home;
