import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { styled } from "../../../stitches.config";
import { getImageAlt, getImageLink } from "../../../utils/parseImageLink";
import { Heading } from "../../typograpghy/Heading";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  naslovniSlajdovi: any;
}
export const CarouselHero = ({ naslovniSlajdovi }: Props) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      emulateTouch
      interval={5000}
      showThumbs={false}
    >
      {naslovniSlajdovi.map((slide: any) => (
        <HeroWrapper key={slide.id}>
          <Hero>
            <Heading heading={"h1"} variant={"white"} fontVariant={"sansSerif"}>
              {slide.naslov}
            </Heading>
            <ReactMarkdown className="markdown">{slide.text}</ReactMarkdown>
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
  "@bp2": { gridTemplateColumns: "1fr 1fr" },
  justifyContent: "stretch",
  gridAutoRows: "1fr",
});

const ImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 16 / 9,
  width: "$full",
  height: "auto",
  overflow: "hidden",
  backgroundColor: "white",
});
