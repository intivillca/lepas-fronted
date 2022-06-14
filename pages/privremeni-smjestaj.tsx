import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getImageAlt, ImageBase, getImageLink } from "../utils/parseImageLink";
import { fetchAPI } from "../api/api";
import { styled } from "../stitches.config";
import { Section } from "../components/sections/Section";
interface PrivremeniSmjestajProps {
  clanak: string;
  slika: ImageBase;
}

const PrivremeniSmjestaj: NextPage<PrivremeniSmjestajProps> = ({
  clanak,
  slika,
}: PrivremeniSmjestajProps) => {
  console.log(slika);
  return (
    <Section sectionColor={"pink"} >
      <Wrapper>
        <ReactMarkdown className="markup">{clanak}</ReactMarkdown>
      </Wrapper>
    </Section>
  );
};

export async function getStaticProps() {
  const APIRes = await fetchAPI("/privremeni-smjestaj", {
    populate: {
      slika: "*",
    },
  });
  return {
    props: {
      clanak: APIRes.data.attributes.clanak,
      slika: APIRes.data.attributes.slika,
    },
    revalidate: 60,
  };
}

const Wrapper = styled("div", {
  maxWidth: "$xl5",
  margin: "0 auto",
  padding: "20px",
  minHeight: '70vh',
  "@bp2": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});
export default PrivremeniSmjestaj;
