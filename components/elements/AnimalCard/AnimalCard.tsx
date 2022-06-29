import Link from "next/link";
import {
  getImageAlt,
  getImageLink,
  getImagePreview,
  ImageBase,
} from "../../../utils/parseImageLink";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import { Heading } from "../../typograpghy/Heading";
import { useMediaQuery } from "react-responsive";
import { styled } from "../../../stitches.config";

export interface AnimalCardProps {
  ime: string;
  slika: ImageBase;
  slug: string;
  path: string;
}

export const AnimalCard = ({ ime, slika, slug, path }: AnimalCardProps) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <>
      <Link href={`${path}${slug}`} passHref>
        <LinkDog>
          <ImageOutline>
            <ImageContainer>
              <Image
                objectFit="cover"
                layout="fill"
                alt={getImageAlt({ media: slika })}
                src={getImageLink({ media: slika })}
                blurDataURL={getImagePreview({ media: slika })}
                placeholder="blur"
              />
              <Overlay>
                <FaPaw size={64} />
                <Heading heading="h1" variant="white">
                  {ime}
                </Heading>
              </Overlay>
            </ImageContainer>
          </ImageOutline>
          {isMobile && (
            <DogMobileName>
              <FaPaw size={64} />
              <Heading
                heading="h1"
                variant="white"
                style={{ textDecoration: "none" }}
              >
                {ime}
              </Heading>
            </DogMobileName>
          )}
        </LinkDog>
      </Link>
    </>
  );
};
const LinkDog = styled("a", {
  textDecoration: "none",
});
const DogMobileName = styled("div", {
  color: "white",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$blue600",
  padding: "$4",
  borderRadius: "0 0 2rem 2rem ",
});
const ImageContainer = styled("section", {
  cursor: "pointer",
  position: "relative",
  borderRadius: " 2rem 2rem 0 0",

  "@bp2": { borderRadius: "50%" },

  aspectRatio: 1,
  height: "auto",
  overflow: "hidden",
});
const Overlay = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  bottom: "0",
  background: "rgba(103, 128, 221, 0.8)",
  color: "#f4f5f8",
  width: "100%",
  height: "100%",
  fontSize: "20px",
  textAlign: "center",
  "@bp2": {
    "&:hover": {
      opacity: 1,
    },
  },
});
const ImageOutline = styled("div", {
  "@bp2": { padding: "16px" },
  backgroundColor: "$blue600",
  borderRadius: "50%",
});
