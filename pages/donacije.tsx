import { styled } from "@stitches/react";
import type { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../api/api";
import { PinkSection } from "../components/sections/PinkSection";
import { getImageAlt, getImageLink, ImageBase } from "../utils/parseImageLink";

interface DonacijeProps {
  donacije: string;
  slika: ImageBase;
}
const Donacije: NextPage<DonacijeProps> = ({ donacije, slika }) => {
  return (
    <PinkSection>
      <ImageContainer>
        <Image
          alt={getImageAlt({ media: slika })}
          src={getImageLink({ media: slika })}
          layout="fill"
        />
      </ImageContainer>
      <Wrapper>
        <ReactMarkdown className="markup">{donacije}</ReactMarkdown>
        <div
          style={{
            width: "200px",
            height: "100px",
            position: "relative",
          }}
        ></div>
      </Wrapper>
    </PinkSection>
  );
};

const ImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 16 / 9,
  width: "$full",
  maxWidth: "$xl4",
  height: "auto",
  objectFit: "cover",
  border: "10px solid",
  borderColor: "#fff",
  margin: "60px auto",
  FontFamily: "Montserrat",
  padding: "60px",
  overflow: "hidden",
});
const Wrapper = styled("div", {
  maxWidth: "$xl5",
  margin: "0 auto",
  padding: "30px",
});

export async function getStaticProps() {
  const APIRes = await fetchAPI("/donacije", {
    populate: {
      Slika: "*",
    },
  });
  return {
    props: {
      donacije: APIRes.data.attributes.Donacije,
      slika: APIRes.data.attributes.Slika,
    },
    revalidate: 60,
  };
}

export default Donacije;
