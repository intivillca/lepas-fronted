import type { NextPage } from "next";
import { fetchAPI } from "../api/api";
import { styled } from "../stitches.config";

interface Props {
  global: unknown;
}

const Home: NextPage<Props> = ({ global }) => {
  return (
    <>
    <Flex>
      <Test>TEST {process.env.API_URL}</Test>
      <Test>TEST {process.env.API_URL}</Test>
    </Flex>
    <pre>
      {JSON.stringify(global)}
    </pre>
    </>
  );
};

export async function getServerSideProps() {
  const globalRes = await fetchAPI("/global", {
    populate: {
      navigation: '*',
      footerlinks: '*',
    },
  });
  console.log({ globalRes });

  return {
    props: { global: globalRes },
  };
}

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
