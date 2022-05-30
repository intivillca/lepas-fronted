import {
  getImageAlt,
  getImageLink,
  getImagePreview,
  ImageBase,
} from "../../../utils/parseImageLink";
import Image from "next/image";
import { styled } from "@stitches/react";
import { Heading } from "../../typograpghy/Heading";
import { useMediaQuery } from "react-responsive";
import { SubHeading } from "../../typograpghy/Paragraph";

interface Props {
  title: string;
  image: ImageBase;
  subtitle?: string;
}
export const PageHeading = ({ title, image, subtitle }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const ImageContainer = styled("section", {
    position: "relative",
    aspectRatio: isMobile ? 8 / 5 : 16 / 3,

    width: "$full",
    height: "auto",
    overflow: "hidden",
  });
  return (
    <ImageContainer>
      <Image
        objectFit="cover"
        layout="fill"
        alt={getImageAlt({ media: image })}
        src={getImageLink({ media: image })}
        blurDataURL={getImagePreview({ media: image })}
        placeholder="blur"
      />
      <Overlay>
        <Heading heading="h1" variant="white">
          {title}
        </Heading>
        <SubHeading heading="h2" variant="white">
          {subtitle}
        </SubHeading>
      </Overlay>
    </ImageContainer>
  );
};

const Overlay = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bottom: "0",
  background: "rgba(0, 0, 0, 0.3)",
  color: "#f1f1f1",
  width: "100%",
  height: "100%",
  fontSize: "20px",
  textAlign: "center",
});
