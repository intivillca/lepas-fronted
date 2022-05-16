import type { NextPage } from "next";
import { styled } from "../stitches.config";

const Home: NextPage = () => {
  return (
    <Flex>
      <Test>TEST {process.env.API_URL}</Test>
      <Test>TEST {process.env.API_URL}</Test>
    </Flex>
  );
};

export const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "$full",
  backgroundColor: "$blue300",
  padding: "$12",
  "@bp2": {
    flexDirection: "row",
  },
});
export const Test = styled("div", {
  backgroundColor: "$blue100",
  width: "50%",
  "@bp2": {
    width: "$full",
  },
});

export default Home;
