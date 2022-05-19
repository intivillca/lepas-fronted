import { styled } from "../../../stitches.config";

export const CursiveHeading = styled("h2", {
  fontFamily: '"Gochi Hand", cursive',
  textAlign: "center",
  textTransform: "uppercase",
  marginBottom: "30px",
  fontSize: "64px",
  variants: {
    headingColor: {
      pink: {
        color: "$red700",
      },
      white: {
        color: "white",
      },
    },
  },
});
