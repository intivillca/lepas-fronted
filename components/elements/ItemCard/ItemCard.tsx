import Image from "next/image";
import { title } from "process";
import { styled } from "../../../stitches.config";
import {
  getImageAlt,
  getImageLink,
  ImageBase,
} from "../../../utils/parseImageLink";
interface ItemCardProps {
  title: string;
  desc: string;
  image: ImageBase;
}
export const ItemCard = ({ title, desc, image }: ItemCardProps) => (
  <Container>
    <CardImageContainer>
      <Image
        alt={getImageAlt({ media: image })}
        src={getImageLink({ media: image })}
        width={100}
        height={100}
      />
    </CardImageContainer>
    <CardTextContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardTextContainer>
  </Container>
);

const Container = styled("div", {
  width: "$full",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});
const CardTextContainer = styled("div", { margin: "$8" });
const CardTitle = styled("p", {
  padding: "$2",
  fontFamily: '"Grandstander", cursive',
  fontSize: "x-large",
});
const CardDescription = styled("p", {
  padding: "$2",

  textAlign: "center",
  fontWeight: "$light",
  marginBottom: "20px",
  fontSize: "larger",
  color: "$pink900",
});
const CardImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  aspectRatio: 1,
  width: "160px",
  height: "auto",
  objectFit: "fit",
  FontFamily: "Montserrat",
  padding: "20px",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: "$red600",
});
