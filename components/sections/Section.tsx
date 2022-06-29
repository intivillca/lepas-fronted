import { CSS } from "@stitches/react";
import { ReactNode } from "react";
import { styled } from "../../stitches.config";
import { getImageLink, ImageBase } from "../../utils/parseImageLink";

interface Props {
  sectionColor: "white" | "black" | "pink" | "image" | "overlay";
  style?: CSS;
  children: ReactNode | string;
  bgImageUrl?: ImageBase;
  noPadding?: boolean;
}
export const Section = ({
  sectionColor,
  style,
  children,
  bgImageUrl,
  noPadding = false,
}: Props) => {
  const SectionCSS = styled("section", {
    display: "flex",
    width: "$full",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    py: "2rem",
    "@bp2": {
      py: "0.5rem",
    },
    variants: {
      sectionColor: {
        pink: {
          backgroundColor: "$blue700",
          backgroundImage: `url(https://api.lepas.inoric.dev/uploads/paw_pattern_5e034da019.png?updated_at=2022-06-29T12:50:20.114Z)`,
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
      noPadding: {
        true: {
          p: "0",
        },
      },
    },
    ...style,
  });
  return (
    <SectionCSS sectionColor={sectionColor} noPadding={noPadding}>
      {children}
    </SectionCSS>
  );
};
