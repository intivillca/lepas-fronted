import Image from "next/image";
import { styled } from "../../../stitches.config";
import {
  getImageAlt,
  ImageBase,
  getImageLink,
} from "../../../utils/parseImageLink";

interface CarouselSlideProps {
  image: ImageBase;
}
export const CarouselSlide = ({ image }: CarouselSlideProps) => {
  return (
    <SlideWrapper>
      <SlideImageContainer>
        <Image
          alt={getImageAlt({ media: image })}
          src={getImageLink({ media: image })}
          layout="fill"
        />
        <Overlay></Overlay>
      </SlideImageContainer>
    </SlideWrapper>
  );
};

const SlideWrapper = styled("div", {
  width: "$full",
  height: "$full",
  flex: "none",
});
const SlideImageContainer = styled("div", {
  order: 0,
  position: "relative",
  aspectRatio: 16 / 9,
  width: "$full",
  height: "auto",
  objectFit: "cover",
});
const Overlay = styled("div", {
  position: "absolute",
  fontWeight: "bold",
  textAlign: "right",
  fontSize: "30px",
  backgroundColor: "#000000",
  backgroundImage: "linear-gradient(315deg, #000000 0%, #7f8c8d 74%)",
  width: "$full",
  height: "$full",
  opacity: "35%",
});
