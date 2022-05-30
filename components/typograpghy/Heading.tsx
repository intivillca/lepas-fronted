import { CSS } from "@stitches/react";
import { ReactNode } from "react";
import { styled } from "../../stitches.config";

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const HeadingSizes: Record<HeadingTypes, string> = {
  h1: "$xl6",
  h2: "$xl5",
  h3: "$xl4",
  h4: "$xl3",
  h5: "$xl2",
  h6: "$xl",
};
const HeadingMobileSizes: Record<HeadingTypes, string> = {
  h1: "$xl4",
  h2: "$xl3",
  h3: "$xl2",
  h4: "$xl",
  h5: "$lg",
  h6: "$md",
};
interface Props {
  heading: HeadingTypes;
  variant: "white" | "black" | "pink";
  fontVariant?: "cursive" | "sansSerif";
  style?: CSS;
  children: ReactNode | string;
}
export const Heading = ({
  heading,
  variant,
  fontVariant = "cursive",
  style,
  children,
}: Props) => {
  const HeadingCSS = styled(`${heading}`, {
    textAlign: "center",
    fontSize: `${HeadingMobileSizes[heading]}`,
    "@bp1": { margin: "$8" },
    "@bp2": { margin: "$10" },
    "@bp3": { margin: "$12", fontSize: `${HeadingSizes[heading]}` },
    "@bp4": { margin: "$14" },

    variants: {
      fontColor: {
        pink: {
          color: "$pink700",
        },
        white: {
          color: "White",
        },
        black: {
          color: "#333",
        },
      },
      fontType: {
        cursive: { fontFamily: "'Pacifico', cursive" },
        sansSerif: {
          fontFamily: "'Baloo Tamma 2', cursive",
        },
      },
    },
    ...style,
  });
  return (
    <HeadingCSS fontColor={variant} fontType={fontVariant}>
      {children}
    </HeadingCSS>
  );
};
