import { styled } from "../../../stitches.config";
import {
  getImageAlt,
  getImageLink,
  getImagePreview,
} from "../../../utils/parseImageLink";
import { Heading } from "../../typograpghy/Heading";
import { SubHeading } from "../../typograpghy/Paragraph";
import Image from "next/image";

interface Props {
  features: any;
}

export const Features = ({ features }: Props) => {
  return (
    <FeaturesWrapper>
      {features.map((slide: any, idx: any) => (
        <FeatureWrapper key={slide.id} inverted={idx % 2 === 1 ? true : false}>
          <ImageBackground>
            <ImageContainer>
              <Image
                layout="fill"
                objectFit="cover"
                blurDataURL={getImagePreview({ media: slide.slika })}
                placeholder="blur"
                alt={getImageAlt({ media: slide.slika })}
                src={getImageLink({ media: slide.slika })}
              />
            </ImageContainer>
          </ImageBackground>
          <FeatureContent>
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
          </FeatureContent>
        </FeatureWrapper>
      ))}
    </FeaturesWrapper>
  );
};
const FeaturesWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "$full",
  margin: "2rem 0",
});

const FeatureContent = styled("div", {
  backgroundColor: "none",
  margin: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "@bp2": {
    boxShadow: "none",
    width: "50%",
  },
  flexDirection: "column",
  textAlign: "center",
});

const FeatureWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "space-around",
  alignItems: "center",
  gridAutoRows: "1fr",
  padding: "16px",
  variants: {
    inverted: {
      true: {
        "@bp2": {
          flexDirection: "row",
        },
      },
      false: {
        "@bp2": {
          flexDirection: "row-reverse",
        },
      },
    },
  },
});

const ImageContainer = styled("section", {
  position: "relative",
  borderRadius: "0",
  width: "$full",
  "@bp2": { borderRadius: "25% 0" },
  aspectRatio: 1,
  height: "auto",
  overflow: "hidden",
});

const ImageBackground = styled("div", {
  width: "$full",
  backgroundColor: "$blue600",
  "@bp2": { borderRadius: "25% 0", padding: "8px 0px", width: "30%" },
});
