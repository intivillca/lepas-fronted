import { styled } from "@stitches/react";
import {
  getImageAlt,
  getImageLink,
  ImageBase,
} from "../../../utils/parseImageLink";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";
import Link from "next/link";

export interface AnimalCardProps {
  ime: string;
  slika: ImageBase;
  slug: string;
  path: string;
}

export const AnimalCard = ({ ime, slika, slug, path }: AnimalCardProps) => {
  return (
    <Card>
      <Link href={`/${path}${slug}`}>
        <ImageContainer>
          <Image
            style={{ borderRadius: "50%" }}
            layout="fill"
            alt={getImageAlt({ media: slika })}
            src={getImageLink({ media: slika })}
          />
          <Overlay>
            <OverLayText>
              <FaPaw
                size={40}
                style={{
                  display: "block",
                  textAlign: "center",
                  margin: "0 auto",
                }}
              />
              {ime}
            </OverLayText>
          </Overlay>
        </ImageContainer>
      </Link>
    </Card>
  );
};

const Card = styled("div", {
  textAlign: "center",
  cursor: "pointer",
  padding: "$4",
});

const Overlay = styled("div", {
  "&:hover": {
    opacity: "90%",
  },
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  height: "100%",
  width: "100%",
  opacity: "0",
  backgroundColor: "$pink700",
});

const OverLayText = styled("div", {
  color: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  WebkitTransform: "translate(-50%, -50%)",
  MsTransform: "translate(-50%, -50%)",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  fontSize: "xx-large",
});
const ImageContainer = styled("div", {
  position: "relative",
  aspectRatio: 1,
  width: "$full",
  height: "auto",
  objectFit: "cover",
  border: "10px solid",
  borderColor: "$red600",
  color: "#fff",
  FontFamily: "Montserrat",
  padding: "20px",
  borderRadius: "50%",
  overflow: "hidden",
});
