import { styled } from "../../stitches.config";

export const SectionWrapper = styled("div", {
  width: "$full",
  maxWidth: "$xl6",
  display: "flex",
  justifyContent: "spacebetween",
  alignItems: "center",
  margin: "0 auto",
  variants: {
    direction: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
  },
});
