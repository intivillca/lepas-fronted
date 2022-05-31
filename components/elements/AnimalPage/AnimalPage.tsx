import ReactMarkdown from "react-markdown";
import { styled } from "../../../stitches.config";
import { getImageAlt, getImageLink } from "../../../utils/parseImageLink";
import { Heading } from "../../typograpghy/Heading";
import Image from "next/image";
import { Section } from "../../sections/Section";
import gfm from "remark-gfm";

interface Props {
  naslov: any;
  text: any;
  slika: any;
  kategorija: any;
}
export const AnimalPage = ({ naslov, text, slika, kategorija }: Props) => {
  return (
    <Section sectionColor={"white"}>
      <HeroWrapper>
        <Hero>
          <Heading heading={"h1"} variant={"black"} fontVariant={"cursive"}>
            {naslov}
          </Heading>
          <ReactMarkdown remarkPlugins={[gfm]}>{text}</ReactMarkdown>
        </Hero>

        <ImageContainer>
          <Image
            objectFit="cover"
            layout="fill"
            alt={getImageAlt({ media: slika })}
            src={getImageLink({ media: slika })}
          />
        </ImageContainer>
      </HeroWrapper>
    </Section>
  );
};

const Hero = styled("div", {
  backgroundColor: "none",
  margin: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "@bp2": {
    boxShadow: "none",
  },
  flexDirection: "column",
  textAlign: "center",
});

const HeroWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "$32",
  "@bp2": { gridTemplateColumns: "1fr 1fr" },
  justifyContent: "stretch",
});

const ImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 1,
  width: "$full",
  height: "auto",
  overflow: "hidden",
});
