import { CSS } from "@stitches/react";
import { ReactNode } from "react";
import { styled } from "../../stitches.config";
import { getImageLink, ImageBase } from "../../utils/parseImageLink";

interface Props {
  sectionColor: "white" | "black" | "pink" | "image" | "overlay";
  style?: CSS;
  children: ReactNode | string;
  bgImageUrl?: ImageBase;
}
export const Section = ({
  sectionColor,
  style,
  children,
  bgImageUrl,
}: Props) => {
  const SectionCSS = styled("section", {
    display: "flex",
    width: "$full",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    variants: {
      sectionColor: {
        pink: {
          backgroundColor: "$pink700",
          backgroundImage:
            "url(http://demo.mage-themes.com/template/paws/paws/images/paw_pattern.png)",
        },
        white: {
          backgroundColor: "White",
        },
        black: {
          backgroundColor: "#333",
        },
        image: {
          boxShadow: "inset 0 0 0 1000px rgba(255,255,255,.3)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundImage: `url(${
            bgImageUrl !== undefined
              ? getImageLink({ media: bgImageUrl })
              : "nvm"
          })`,
        },
        overlay: {
          backgroundColor: "white",
          opacity: 0.7,
        },
      },
    },
    ...style,
  });
  return <SectionCSS sectionColor={sectionColor}>{children}</SectionCSS>;
};
