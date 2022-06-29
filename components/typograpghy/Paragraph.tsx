import { CSS } from "@stitches/react";
import { ReactNode } from "react";
import { styled } from "../../stitches.config";

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
const HeadingSizes: Record<HeadingTypes, string> = {
  h1: "$xl3",
  h2: "$xl2",
  h3: "$xl",
  h4: "$lg",
  h5: "$md",
  h6: "$sm",
};
interface Props {
  heading: HeadingTypes;
  variant: "white" | "black" | "pink";
  style?: CSS;
  children: ReactNode | string;
}
export const SubHeading = ({ heading, variant, children, ...style }: Props) => {
  const SubHeadingCSS = styled(`${heading}`, {
    fontSize: `${HeadingSizes[heading]}`,

    fontFamily: "'Baloo Tamma 2', cursive",
    variants: {
      fontColor: {
        pink: {
          color: "$blue700",
        },
        white: {
          color: "White",
        },
        black: {
          color: "#333",
        },
      },
    },
    ...style,
  });
  return <SubHeadingCSS fontColor={variant}>{children}</SubHeadingCSS>;
};
