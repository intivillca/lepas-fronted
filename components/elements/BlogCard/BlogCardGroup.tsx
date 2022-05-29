import { styled } from "../../../stitches.config";

export const BlogCardGroup = styled("div", {
  width: "90%",
  maxWidth: "1240px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto",
  gridGap: "20px",
  "@bp2": { gridTemplateColumns: "1fr 1fr" },
  "@bp3": { gridTemplateColumns: "repeat(4, 1fr)" },
});
