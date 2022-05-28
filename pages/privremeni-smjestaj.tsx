import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getImageAlt, ImageBase, getImageLink } from "../utils/parseImageLink";
import { fetchAPI } from "../api/api";
import { styled } from "../stitches.config";
import { PinkSection } from "../components/sections/PinkSection";
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
    <PinkSection>
      <Wrapper>
        <ReactMarkdown className="markup">{clanak}</ReactMarkdown>
        <div
          style={{
            width: "200px",
            height: "100px",
            position: "relative",
          }}
        >
          <Image
            alt={getImageAlt({ media: slika })}
            src={getImageLink({ media: slika })}
            layout="fill"
          />
        </div>
      </Wrapper>
    </PinkSection>
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
  padding: "30px",
});
export default PrivremeniSmjestaj;
