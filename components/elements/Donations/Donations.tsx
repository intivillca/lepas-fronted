import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { styled } from "../../../stitches.config";
import { getImageAlt, getImageLink } from "../../../utils/parseImageLink";
import { Heading } from "../../typograpghy/Heading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubHeading } from "../../typograpghy/SubHeading";
import { FaArrowLeft, FaArrowRight, FaPaw } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

interface Props {
  donations: any;
}

export const Donations = ({ donations }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <>
      {!isMobile && (
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          emulateTouch
          interval={5000}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={33}
          showIndicators={false}
          renderArrowPrev={(clickHandler: () => void) => (
            <ArrowContainer onClick={clickHandler} direction="left">
              <FaPaw size={20} />
            </ArrowContainer>
          )}
          renderArrowNext={(clickHandler: () => void) => (
            <ArrowContainer onClick={clickHandler} direction={"right"}>
              <FaPaw size={20} style={{ margin: "0px" }} />
            </ArrowContainer>
          )}
        >
          {donations.map((slide: any) => (
            <DonationWrapper key={slide.id}>
              <ImageBackground>
                <ImageContainer>
                  <Image
                    height={96}
                    width={96}
                    alt={getImageAlt({ media: slide.slika })}
                    src={getImageLink({ media: slide.slika })}
                  />
                </ImageContainer>
              </ImageBackground>
              <DonationContent>
                <Heading
                  heading={"h3"}
                  variant={"pink"}
                  fontVariant={"sansSerif"}
                  style={{ marginBottom: "0.625rem" }}
                >
                  {slide.naslov}
                </Heading>
                <SubHeading heading={"h3"} variant={"black"}>
                  {slide.tekst}
                </SubHeading>
              </DonationContent>
            </DonationWrapper>
          ))}
        </Carousel>
      )}
      {isMobile && (
        <>
          {donations.map((slide: any) => (
            <DonationWrapper key={slide.id}>
              <ImageBackground>
                <ImageContainer>
                  <Image
                    height={96}
                    width={96}
                    alt={getImageAlt({ media: slide.slika })}
                    src={getImageLink({ media: slide.slika })}
                  />
                </ImageContainer>
              </ImageBackground>
              <DonationContent>
                <Heading
                  heading={"h3"}
                  variant={"pink"}
                  fontVariant={"sansSerif"}
                  style={{ marginBottom: "0.625rem" }}
                >
                  {slide.naslov}
                </Heading>
                <SubHeading heading={"h3"} variant={"black"}>
                  {slide.tekst}
                </SubHeading>
              </DonationContent>
            </DonationWrapper>
          ))}
        </>
      )}
    </>
  );
};
const ArrowContainer = styled("div", {
  color: "White",
  backgroundColor: "$pink600",
  borderRadius: "50%",
  padding: "$3",
  position: "absolute",
  top: "50%",
  zIndex: "2",

  variants: {
    direction: {
      left: { left: "32px", rotate: "-90deg" },
      right: { right: "32px", rotate: "90deg" },
    },
  },
  "&:hover": { backgroundColor: "white", color: "$pink600", scale: "0.9" },
});
const DonationContent = styled("div", {
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

const DonationWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "stretch",
  alignItems: "center",
  gridAutoRows: "1fr",
  padding: "16px",
  width: '$full'
});

const ImageContainer = styled("div", {
  overflow: "hidden",
  position: "relative",
  color: "white",
});

const ImageBackground = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: "auto",
  aspectRatio: 1,
  backgroundColor: "$pink600",
  borderRadius: "50%",
});
